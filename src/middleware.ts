import { NextRequest, NextResponse } from "next/server";
import logger from "./lib/logger";

export function middleware(request: NextRequest) {
  const userId = request.headers.get("x-user-id") || "anonymous";

  logger.info("API request", {
    method: request.method,
    url: request.url,
    userId,
  });

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
