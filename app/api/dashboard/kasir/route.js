import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    stats: {
      transactionsToday: 34,
      shiftSales: 2780000,
      shiftStatus: "aktif",
    },
  });
}
