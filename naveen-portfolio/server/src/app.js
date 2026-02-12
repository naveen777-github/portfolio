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

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true);
      if (allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.options("/*", cors());

app.use((req, res, next) => {
  console.log("➡️", req.method, req.url);
  next();
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is running" });
});

app.use("/api/messages", messagesRouter);

module.exports = app;
