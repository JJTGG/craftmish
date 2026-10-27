import "dotenv/config";
import { defineConfig } from "drizzle-kit";

const databaseUrl =
  process.env.DATABASE_URL_UNPOOLED ??
  process.env.DATABASE_URL;

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  schemaFilter: ["public"],
  migrations: {
    schema: "drizzle",
    table: "__drizzle_migrations"
  },
  strict: true,
  verbose: true,
  ...(databaseUrl
    ? {
        dbCredentials: {
          url: databaseUrl
        }
      }
    : {})
});