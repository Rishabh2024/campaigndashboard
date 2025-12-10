import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, description, budget, startDate } = body;

    if (!name || !description || !budget || !startDate) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const stmt = db.prepare(`
      INSERT INTO Campaign (name, description, budget, startDate)
      VALUES (?, ?, ?, ?)
    `);

    const result = stmt.run(name, description, Number(budget), startDate);

    return NextResponse.json(
      {
        message: "Campaign created successfully!",
        data: { id: result.lastInsertRowid, ...body },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
