import { sql } from "drizzle-orm";
import { getDatabase } from "@/server/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await getDatabase().execute(sql`select 1`);

    return Response.json({
      ok: true,
      service: "database"
    });
  } catch {
    return Response.json(
      {
        ok: false,
        error: "Database unavailable"
      },
      { status: 503 }
    );
  }
}