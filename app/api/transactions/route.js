import { NextResponse } from "next/server";
import { mockTransactions } from "@/lib/mock-api";

export async function GET() {
  return NextResponse.json({ ok: true, items: mockTransactions });
}
