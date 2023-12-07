import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

  try {
    const result = await sql`DELETE FROM track;`;
    return NextResponse.json(
      { message: result },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
