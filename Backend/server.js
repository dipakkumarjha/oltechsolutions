require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();
// 🔐 Helmet - Adds security headers
app.use(helmet());

// 🔐 CORS - Allow only your frontend domain
app.use(cors({
  origin: "http://localhost:5173",  // change if needed
  methods: ["GET", "POST"],
}));

// 🔐 Body parser
app.use(express.json());

// 🔐 Rate Limiting (Protect form API from spam)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // max 10 requests per IP
  message: "Too many requests, please try again later."
});

app.use("/api/contact", limiter);

// 🔐 Static folder for sitemap.xml & robots.txt
app.use(express.static("public"));


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


app.use("/api/contact", require("./routes/contactRoute"));


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});