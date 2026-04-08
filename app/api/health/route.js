import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "kasir-vercel-api",
    store: process.env.STORE_NAME || "Kasir Digital Store",
    now: new Date().toISOString(),
  });
}
