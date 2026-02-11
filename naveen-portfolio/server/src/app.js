const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const messagesRouter = require("./routes/messages"); // ✅ add this

const app = express();

app.use(helmet());
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
  }),
);
app.use((req, res, next) => {
  console.log("➡️", req.method, req.url);
  next();
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is running" });
});

app.use("/api/messages", messagesRouter); // ✅ add this

module.exports = app;
