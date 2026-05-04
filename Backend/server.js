require ("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

 
app.use(helmet());

 
app.use(cors({
  origin: "*", //http://localhost:5173
  methods: ["GET", "POST"],
  credentials: true
}));

// app.options("*", cors()); // 🔥 VERY IMPORTANT

app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try again later."
});

app.use("/api/contact", (req, res, next) => {
  if (req.method === "OPTIONS") return next(); // 🔥 allow preflight
  limiter(req, res, next);
});


app.use(express.static("public"));


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("Mongo Error ❌", err));


app.use("/api/contact", require("./routes/contactRoute"));


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Server Error" });
});

// ✅ Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


















// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const helmet = require("helmet");
// const rateLimit = require("express-rate-limit");

// const app = express();

// app.use(helmet());


// app.use(cors({
//   origin: "http://localhost:5173",  // change if needed
//   methods: ["GET", "POST"],
// }));


// app.use(express.json()); 

// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // max 10 requests per IP
//   message: "Too many requests, please try again later."
// });

// app.use("/api/contact", limiter);

// //  Static folder for sitemap.xml & robots.txt
// app.use(express.static("public"));


// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));


// app.use("/api/contact", require("./routes/contactRoute"));


// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });

