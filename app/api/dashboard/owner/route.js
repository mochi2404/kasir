import { NextResponse } from "next/server";
import { mockTransactions } from "@/lib/mock-api";

export async function GET() {
  return NextResponse.json({
    ok: true,
    stats: {
      salesToday: 8450000,
      transactionsToday: 126,
      monthlyRevenue: 214300000,
      lowStock: 14,
      activeCashiers: 5,
    },
    latestTransactions: mockTransactions,
  });
}
