
import { useEffect, useRef, useState } from "react";
import "./AIChatBot.css";

const API_URL = "http://localhost:3000/api/ai-chat";

const SALES_INTENT_PATTERN =   /\b(pricing|price|cost|rate|quotation|quote|demo|callback|call me|sales|enquiry|inquiry|buy|purchase|requirement|contact|price list)\b/i;

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      text: "Hi! How can I help you?",
      time: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const [showLeadForm, setShowLeadForm] = useState(false);
const [isSubmittingLead, setIsSubmittingLead] = useState(false);

const [lead, setLead] = useState({
  name: "",
  phone: "",
  email: "",
  requirement: "",
});




  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Unique session ID for this visitor's chat
  const sessionIdRef = useRef(
    `chat_${Date.now()}_${Math.random().toString(36).slice(2, 12)}`
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 250);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSend = async (event) => {
    event.preventDefault();

    const text = message.trim();

    if (!text || isTyping) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      text,
      time: new Date(),
    };

    setMessages((previous) => [...previous, userMessage]);
    setMessage("");
    setIsTyping(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          sessionId: sessionIdRef.current,
        }),
      }); 

      const data = await response.json();

      if (!response.ok || data.success !== true || !data.reply) {
        throw new Error(
          data.message || "The assistant could not process your message."
        );
      }

      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: data.reply,
          time: new Date(),
        },
      ]);


        if (SALES_INTENT_PATTERN.test(text)) {
         setShowLeadForm(true);
        }

    } catch (error) {
      console.error("OL Tech chatbot request failed:", error);

      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          role: "assistant",
          text:
            "Sorry, I couldn't connect to the AI assistant right now. Please try again in a moment.",
          time: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
      inputRef.current?.focus();
    }
  };



  const handleLeadSubmit = async (event) => {
  event.preventDefault();

  if (isSubmittingLead) return;

  setIsSubmittingLead(true);

  try {
    const response = await fetch(`${API_URL}/lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...lead,
        sessionId: sessionIdRef.current,
      }),
    });

    const data = await response.json();

    if (!response.ok || data.success !== true) {
      throw new Error(data.message || "Unable to submit your details.");
    }

    setShowLeadForm(false);

    setMessages((previous) => [
      ...previous,
      {
        id: Date.now(),
        role: "assistant",
        text: "Thank you! Your enquiry details have been submitted. Our team can follow up with you.",
        time: new Date(),
      },
    ]);

    setLead({
      name: "",
      phone: "",
      email: "",
      requirement: "",
    });
  } catch (error) {
    console.error("OL Tech lead submission failed:", error);

    setMessages((previous) => [
      ...previous,
      {
        id: Date.now(),
        role: "assistant",
        text: "Sorry, we couldn't submit your details. Please try again.",
        time: new Date(),
      },
    ]);
  } finally {
    setIsSubmittingLead(false);
  }
};



  const handleClose = () => {
    setIsOpen(false);
  };

  const formatTime = (date) =>
    date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="ol-chatbot">
      {isOpen && (
        <section
          className="ol-chat-window"
          role="dialog"
          aria-label="OL Tech AI Assistant"
          aria-modal="false"
        >
          <header className="ol-chat-header">
            <div className="ol-chat-brand">
              <div className="ol-chat-logo">
                <svg
                  viewBox="0 0 24 24"
                  width="27"
                  height="27"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3.5 14.4 9.6 20.5 12 14.4 14.4 12 20.5 9.6 14.4 3.5 12 9.6 9.6 12 3.5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m19 2 .8 2.2L22 5l-2.2.8L19 8l-.8-2.2L16 5l2.2-.8L19 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <div className="ol-chat-brand-info">
                <h3>OL Tech Solutions Assistant</h3>
                <span className="ol-chat-status">
                  <span className="ol-status-dot" />
                  Here to help you
                </span>
              </div>
            </div>

            <button
              type="button"
              className="ol-chat-close"
              onClick={handleClose}
              aria-label="Close chat"
            >
              <svg
                viewBox="0 0 24 24"
                width="21"
                height="21"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </header>

          <div className="ol-chat-intro">
            <span className="ol-chat-intro-label">
              YOUR DIGITAL ASSISTANT
            </span>
            <h2>How can we help?</h2>
            <p>
              Ask us about our IT solutions, products and services.
            </p>
          </div>

          <div
            className="ol-chat-messages"
            aria-live="polite"
            aria-relevant="additions"
          >
            <div className="ol-chat-day">
              <span>CHAT</span>
            </div>

            {messages.map((item) => (
              <div
                className={`ol-message-row ${
                  item.role === "user"
                    ? "ol-message-user"
                    : "ol-message-assistant"
                }`}
                key={item.id}
              >
                {item.role === "assistant" && (
                  <div className="ol-message-avatar">AI</div>
                )}

                <div className="ol-message-content">
                  <div className="ol-message-bubble">
                    {item.text}
                  </div>
                  <span className="ol-message-time">
                    {formatTime(item.time)}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="ol-message-row ol-message-assistant">
                <div className="ol-message-avatar">AI</div>
                <div
                  className="ol-typing"
                  aria-label="Assistant is typing"
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}

            {showLeadForm && (
  <form className="ol-lead-form" onSubmit={handleLeadSubmit}>
    <h3>Let's discuss your requirement</h3>
    <p>Share your details so our team can contact you.</p>

    <input
      type="text"
      placeholder="Full name"
      aria-label="Full name"
      value={lead.name}
      onChange={(event) =>
        setLead({ ...lead, name: event.target.value })
      }
      maxLength={100}
      autoComplete="name"
      required
    />

    <input
      type="tel"
      placeholder="Mobile / WhatsApp number"
      aria-label="Mobile / WhatsApp number"
      value={lead.phone}
      onChange={(event) =>
        setLead({ ...lead, phone: event.target.value })
      }
      maxLength={20}
      autoComplete="tel"
      required
    />

    <input
      type="email"
      placeholder="Business or contact email"
      aria-label="Email address"
      value={lead.email}
      onChange={(event) =>
        setLead({ ...lead, email: event.target.value })
      }
      maxLength={254}
      autoComplete="email"
      required
    />

    <textarea
      placeholder="Which product or service do you need?"
      aria-label="Required product or service"
      value={lead.requirement}
      onChange={(event) =>
        setLead({ ...lead, requirement: event.target.value })
      }
      maxLength={500}
      rows={3}
      required
    />

    <button type="submit" disabled={isSubmittingLead}>
      {isSubmittingLead ? "Submitting..." : "Submit Enquiry"}
    </button>

    <small>
      By submitting, you agree that OL Tech Solutions may contact you
      about your enquiry.
    </small>
  </form>
)}

            <div ref={messagesEndRef} />
          </div>

          <form className="ol-chat-composer" onSubmit={handleSend}>
            <label className="ol-chat-input-wrap">
              <input
                ref={inputRef}
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Type your message..."
                aria-label="Type your message"
                maxLength={2000}
                autoComplete="off"
              />
            </label>

            <button
              type="submit"
              className="ol-chat-send"
              disabled={!message.trim() || isTyping}
              aria-label="Send message"
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m21 3-7.2 18-3.9-7.9L2 9.2 21 3Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 13 21 3"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </form>

          <footer className="ol-chat-footer">
            Powered by <strong>OL Tech Solutions</strong>
          </footer>
        </section>
      )}

      <button
        type="button"
        className={`ol-chat-launcher ${
          isOpen ? "ol-chat-launcher-open" : ""
        }`}
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={isOpen}
      >
        <span className="ol-launcher-pulse" />

        {isOpen ? (
          <svg
            viewBox="0 0 24 24"
            width="29"
            height="29"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="m6 6 12 12M18 6 6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            width="31"
            height="31"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l-2 2v-6.5A7.5 7.5 0 1 1 20 11.5Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M8 11h.01M12 11h.01M16 11h.01"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default AIChatBot;
