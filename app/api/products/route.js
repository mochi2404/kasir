import { NextResponse } from "next/server";
import { mockProducts } from "@/lib/mock-api";

export async function GET() {
  return NextResponse.json({ ok: true, items: mockProducts });
}
