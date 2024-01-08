import { NextResponse } from "next/server";

export function GET() {
  return Response.json({ msg: "hello there" });
}
