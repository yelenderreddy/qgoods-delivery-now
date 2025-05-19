import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema/**/*.ts", // Path to your schema file
  out: "./drizzle", // Output directory for migrations
  dbCredentials: {
    url: "postgresql://postgres:reddy@localhost:5432/qgoods", // Replace with your PostgreSQL connection string
  },
});
