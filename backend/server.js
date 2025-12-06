require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL connection (Render external DB)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Test DB connection
async function testDb() {
  try {
    await pool.query("SELECT 1");
    console.log("✅ Connected to Postgres (Render)");
  } catch (err) {
    console.error("❌ Postgres Error:", err);
  }
}

// API endpoint
app.post("/waitlist", async (req, res) => {
  const { name, email } = req.body;

  try {
    await pool.query(
      "INSERT INTO waitlist(name, email) VALUES ($1, $2)",
      [name, email]
    );
    res.json({ success: true, message: "User added to waitlist!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error saving user." });
  }
});

// Web server (Render sets PORT automatically)
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  testDb();
});
