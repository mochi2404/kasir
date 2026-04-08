import { NextResponse } from "next/server";
import { findUser } from "@/lib/mock-api";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const { email, password } = body || {};
  const user = findUser(email, password);

  if (!user) {
    return NextResponse.json(
      {
        ok: false,
        message: "Email atau password salah.",
      },
      { status: 401 },
    );
  }

  return NextResponse.json({
    ok: true,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      redirectTo: user.role === "owner" ? "/owner/dashboard" : "/kasir/dashboard",
    },
  });
}
