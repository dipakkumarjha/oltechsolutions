const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");
const { body, validationResult } = require("express-validator");
const { parsePhoneNumberFromString } = require("libphonenumber-js");

router.post(
  "/",
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required"),

    body("email")
      .isEmail()
      .withMessage("Valid email is required"),

    body("tel")
      .custom((value) => {
        const phone = parsePhoneNumberFromString(value);

        if (!phone || !phone.isValid()) {
          throw new Error("Invalid phone number");
        }

        return true;
      }),

    body("message")
      .trim()
      .notEmpty()
      .withMessage("Message is required"),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }

      const { name, email, tel, message } = req.body;

      const newContact = new Contact({
        name,
        email,
        tel,
        message,
      });

      await newContact.save();

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
        await transporter.verify();
        console.log("Gmail SMTP connection successful");

        
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        replyTo: email,
        to: process.env.EMAIL_USER,
        subject: "New Contact Form Submission",
        html: `
          <h3>New Contact Details</h3>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Number:</b> ${tel}</p>
          <p><b>Message:</b> ${message}</p>
        `,
      });

      res.status(200).json({
        success: true,
        message: "Form submitted successfully",
      });
    } catch (error) {
  console.error("CONTACT ERROR:", error.message);
  console.error("ERROR CODE:", error.code);
  console.error("ERROR COMMAND:", error.command);
  console.error("ERROR RESPONSE:", error.response);

  res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
    }
  }
);

module.exports = router;