import { NextResponse, NextRequest } from "next/server";

export async function GET(req) {
  return NextResponse.json({ msg: "api is running.." });
}
