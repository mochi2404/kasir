import { NextResponse } from "next/server";
import { mockUsers } from "@/lib/mock-api";

export async function GET() {
  return NextResponse.json({
    ok: true,
    items: mockUsers.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    })),
  });
}
