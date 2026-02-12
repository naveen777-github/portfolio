const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const messagesRouter = require("./routes/messages");

const app = express();

app.use(helmet());
app.use(express.json());

const allowedOrigins = [
  "http://localhost:3000",
  "https://portfolio-7777-777.web.app",
  "https://portfolio-7777-777.firebaseapp.com",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // Postman/curl/no-origin
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(null, false); // don't throw, just deny
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  optionsSuccessStatus: 204,
};

// ✅ Apply CORS to all routes
app.use(cors(corsOptions));

// ✅ Handle preflight using SAME options
app.options(/.*/, cors(corsOptions));

// (Optional debug)
app.use((req, res, next) => {
  console.log("➡️", req.method, req.url);
  next();
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is running" });
});

app.use("/api/messages", messagesRouter);

module.exports = app;
