// pages/_middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const country = request?.geo?.country || "unknown";
  if (country === "JP") {
    return new Response("Access denied", { status: 403 });
  }

  return NextResponse.next();
}
