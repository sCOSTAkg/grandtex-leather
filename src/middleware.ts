import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const userId = request.headers.get("x-user-id") || "anonymous";

  console.info({
    message: "API request",
    method: request.method,
    url: request.url,
    userId,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
