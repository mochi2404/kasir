import { NextResponse } from "next/server";
import { checkUrlFromServer, isValidHttpUrl } from "@/lib/mock-api";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const { url } = body || {};

  if (!url || !isValidHttpUrl(url)) {
    return NextResponse.json(
      {
        ok: false,
        message: "URL harus berupa http:// atau https:// yang valid.",
      },
      { status: 400 },
    );
  }

  try {
    const result = await checkUrlFromServer(url);
    return NextResponse.json({ ok: true, result });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: "Gagal mengakses URL dari server.",
        error: error.message,
      },
      { status: 502 },
    );
  }
}
