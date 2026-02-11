require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

async function start() {
  console.log(
    "Loaded env keys:",
    Object.keys(process.env).filter((k) => ["PORT", "MONGODB_URI"].includes(k)),
  );

  await connectDB(process.env.MONGODB_URI);

  app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
  });
}

start().catch((err) => {
  console.error("❌ Failed to start server:", err.message);
  process.exit(1);
});
