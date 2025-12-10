import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const stmt = db.prepare(`SELECT * FROM Campaign ORDER BY id DESC`);
    const campaigns = stmt.all();

    return NextResponse.json(
      {
        success: true,
        data: campaigns,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Server error",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
