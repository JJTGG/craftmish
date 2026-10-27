import "server-only";

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const globalForCraftmish = globalThis as typeof globalThis & {
  craftmishPool?: Pool;
};

function getPool(): Pool {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error(
      "DATABASE_URL is missing. Configure the pooled Neon connection string."
    );
  }

  globalForCraftmish.craftmishPool ??= new Pool({
    connectionString,
    max: 3,
    idleTimeoutMillis: 10_000,
    connectionTimeoutMillis: 5_000
  });

  return globalForCraftmish.craftmishPool;
}

export function getDatabase() {
  return drizzle(getPool(), { schema });
}