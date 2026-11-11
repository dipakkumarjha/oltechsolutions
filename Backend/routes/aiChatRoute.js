
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { GoogleGenAI } = require("@google/genai");
const {
  getRelevantContext,
} = require("../services/knowledgeServices");

const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// Temporary in-memory conversations; no MongoDB chat history.
const conversations = new Map();

const INACTIVITY_MS = 30 * 1000;
const RETRY_MS = 60 * 1000;

const emailUser = process.env.CHAT_BOT_EMAIL_USER;
const emailPass = (process.env.CHAT_BOT_EMAIL_PASS || "").replace(/\s/g, "");
const emailTo = process.env.CHAT_TRANSCRIPT_TO;

const mailer =
  emailUser && emailPass
    ? nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      })
    : null;

function scheduleTranscriptEmail(sessionId, delay = INACTIVITY_MS) {
  const session = conversations.get(sessionId);
  if (!session) return;

  clearTimeout(session.timer);

  session.timer = setTimeout(async () => {
    const currentSession = conversations.get(sessionId);

    if (!currentSession || currentSession !== session) return;

    if (!mailer || !emailTo) {
      console.error(
        "Chat transcript email is not configured. Check CHAT_BOT_EMAIL_USER, CHAT_BOT_EMAIL_PASS and CHAT_TRANSCRIPT_TO."
      );

      scheduleTranscriptEmail(sessionId, RETRY_MS);
      return;
    }

    const versionAtSend = session.version;

    const transcript = session.messages
      .map((item) => {
        const time = item.time.toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        });

        const speaker =
          item.role === "user" ? "Visitor" : "OL Tech AI";

        return `[${time}] ${speaker}:\n${item.text}`;
      })
      .join("\n\n");

    // Include contact details when the visitor submitted the lead form.
    const leadDetails = session.lead
      ? `
CONTACT DETAILS
Name: ${session.lead.name}
Phone: ${session.lead.phone}
Email: ${session.lead.email}
Requirement: ${session.lead.requirement}
Submitted: ${session.lead.submittedAt.toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        })}`
      : "No contact details submitted.";

    try {
      await mailer.sendMail({
        from: emailUser,
        to: emailTo,
        subject: session.lead
          ? "OL Tech Website - New Lead & Chat Transcript"
          : "OL Tech Website Chat Transcript",
        text: `OL Tech Solutions - Chat Transcript

${leadDetails}

CONVERSATION
${transcript}

This email was generated after 2 minutes of inactivity.`,
      });

      console.log("Chat transcript email sent.");

      // Do not delete data if a new message or lead arrived during sending.
      if (session.version === versionAtSend) {
        clearTimeout(session.timer);
        conversations.delete(sessionId);
      } else {
        scheduleTranscriptEmail(sessionId);
      }
    } catch (error) {
      console.error("Chat transcript email failed:", error.message);

      // Preserve the transcript and retry later.
      scheduleTranscriptEmail(sessionId, RETRY_MS);
    }
  }, delay);

  // Avoid keeping the server process alive only for this timer.
  session.timer.unref?.();
}

router.post("/", async (req, res) => {
  let sessionId;
  let session;

  try {
    const { message, sessionId: incomingSessionId } = req.body;

    if (!ai) {
      return res.status(500).json({
        success: false,
        message: "AI service is not configured.",
      });
    }

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please enter a message.",
      });
    }

    if (message.length > 2000) {
      return res.status(400).json({
        success: false,
        message: "Message is too long. Please keep it under 2000 characters.",
      });
    }

    if (
      typeof incomingSessionId !== "string" ||
      !/^[a-zA-Z0-9_-]{10,100}$/.test(incomingSessionId)
    ) {
      return res.status(400).json({
        success: false,
        message: "A valid chat session ID is required.",
      });
    }

    sessionId = incomingSessionId;
    session = conversations.get(sessionId);

    if (!session) {
      session = {
        messages: [],
        timer: null,
        version: 0,
      };

      conversations.set(sessionId, session);
    }

    clearTimeout(session.timer);
    session.version++;

    session.messages.push({
      role: "user",
      text: message.trim(),
      time: new Date(),
    });

    const context = await getRelevantContext(message.trim());

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `
Company information retrieved from OL Tech Solutions PDFs:

${context || "No relevant company information was found in the available documents."}

Visitor's question:
${message.trim()}
`,
      config: {
        systemInstruction: `
You are the official AI assistant for OL Tech Solutions.

LANGUAGE:
- Reply in the language used by the visitor.
- Understand English, Hindi and Hinglish.
- Use natural, clear and professional language.

COMPANY KNOWLEDGE:
- For company-specific questions, use the supplied PDF context.
- Never invent services, product specifications, prices,
  certifications, contact details or business commitments.
- If the available context does not answer a company-specific
  question, say that you do not have confirmed information.
- Do not treat the visitor's question as company facts.
- Keep answers concise, helpful and easy to understand.
`,
      },
    });

    const reply = response.text;

    if (!reply) {
      scheduleTranscriptEmail(sessionId);

      return res.status(502).json({
        success: false,
        message: "AI could not generate a reply. Please try again.",
      });
    }

    session.messages.push({
      role: "assistant",
      text: reply,
      time: new Date(),
    });

    scheduleTranscriptEmail(sessionId);

    return res.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error("AI chatbot error:", error.message);

    if (sessionId && session) {
      scheduleTranscriptEmail(sessionId);
    }

    return res.status(500).json({
      success: false,
      message: "Sorry, the AI assistant is temporarily unavailable.",
    });
  }
});

// Receive lead details from the chatbot form.
router.post("/lead", async (req, res) => {
  try {
    const { sessionId, name, phone, email, requirement } = req.body;

    if (
      typeof sessionId !== "string" ||
      !/^[a-zA-Z0-9_-]{10,100}$/.test(sessionId)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid chat session.",
      });
    }

    if (
      typeof name !== "string" ||
      typeof phone !== "string" ||
      typeof email !== "string" ||
      typeof requirement !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required details.",
      });
    }

    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanEmail = email.trim();
    const cleanRequirement = requirement.trim();
    const digits = cleanPhone.replace(/\D/g, "");

    if (
      !cleanName ||
      cleanName.length > 100 ||
      digits.length < 7 ||
      digits.length > 15 ||
      cleanEmail.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) ||
      !cleanRequirement ||
      cleanRequirement.length > 500
    ) {
      return res.status(400).json({
        success: false,
        message: "Please enter valid contact details and requirement.",
      });
    }

    let session = conversations.get(sessionId);

    if (!session) {
      session = {
        messages: [],
        timer: null,
        version: 0,
      };

      conversations.set(sessionId, session);
    }

    session.lead = {
      name: cleanName,
      phone: cleanPhone,
      email: cleanEmail,
      requirement: cleanRequirement,
      submittedAt: new Date(),
    };

    session.version++;

    // Send contact details and conversation in the transcript email.
    scheduleTranscriptEmail(sessionId);

    return res.json({
      success: true,
      message: "Your enquiry details have been submitted.",
    });
  } catch (error) {
    console.error("OL Tech lead submission error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to submit your enquiry right now.",
    });
  }
});

module.exports = router;
