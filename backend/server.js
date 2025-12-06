// top pe add karo
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

// Postgres connection using DATABASE_URL from .env (Render DB)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Render PostgreSQL needs SSL
});

// OPTIONAL: test connection once on server start
async function testDb() {
  try {
    await pool.query('SELECT 1');
    console.log("✅ Connected to Postgres");
  } catch (err) {
    console.error("❌ Postgres connection error:", err.message || err);
  }
}

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

// Use process.env.PORT so Render can set port
const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await testDb(); // run connection test when server starts
});
