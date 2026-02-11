const express = require("express");
const Message = require("../models/Message");

const router = express.Router();

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

router.post("/", async (req, res) => {
  try {
    const { name, email, subject = "", message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "name, email, message are required" });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "invalid email" });
    }

    const saved = await Message.create({ name, email, subject, message });
    return res.status(201).json({ ok: true, id: saved._id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "server error" });
  }
});

module.exports = router;
