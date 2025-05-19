import * as dotenv from "dotenv";
dotenv.config(); // Load variables from .env

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// Optional: Log to confirm env values are loaded (remove in production)
console.log("Connecting to DB with:", {
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  database: process.env.DATABASE,
});

const pool = new Pool({
  host: process.env.HOST         || "localhost",
  port: Number(process.env.PORT) || 5432,
  user: process.env.USER         || "postgres",
  password: process.env.PASSWORD || "reddy",
  database: process.env.DATABASE || "qgoods",
});

// ✅ Test the connection
pool
  .connect()
  .then(client => {
    return client
      .query("SELECT NOW()")
      .then(res => {
        console.log("✅ Database connected successfully at:", res.rows[0].now);
        client.release();
      })
      .catch(err => {
        console.error("❌ Error executing test query:", err);
        client.release();
      });
  })
  .catch(err => {
    console.error("❌ Failed to connect to the database:", err);
  });

export const db = drizzle(pool);
