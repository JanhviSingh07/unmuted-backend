require('dotenv').config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function createTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS waitlist (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100) UNIQUE
    );
  `;

  try {
    await pool.query(query);
    console.log("✅ Table 'waitlist' created successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error creating table:", err);
    process.exit();
  }
}

createTable();
