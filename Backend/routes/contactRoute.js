const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");
const { body, validationResult } = require("express-validator");

// 🔐 Validation + Route
router.post(
  "/",

  // ✅ Validation Rules
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required"), 

    body("email")
      .isEmail()
      .withMessage("Valid email is required"),

    body("tel")
      .isLength({ min: 10, max: 10 })
      .withMessage("Number must be 10 digits"),

    body("message")
      .trim()
      .notEmpty()
      .withMessage("Message is required")
  ],

  async (req, res) => {
    try {

      // 🔎 Check validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const { name, email, tel, message } = req.body;

      // 💾 Save to MongoDB
      const newContact = new Contact({ name, email, tel, message });
      await newContact.save();

      // 📧 Send Email
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,   // ⚠️ Important fix
        replyTo: email,                // user email yaha daalo
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
        message: "Form submitted successfully"
      });

    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Something went wrong"
      });
    }
  }
);

module.exports = router;