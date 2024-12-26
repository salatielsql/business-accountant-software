import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { UserStatus } from "./app/types";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Just an example. A real application probably would request the user info
  const userStatus = (
    searchParams.has("status") ? searchParams.get("status") : "active"
  ) as UserStatus;

  console.log(`⚡️ User status is: ${userStatus ? userStatus : "active"}`);

  if (userStatus === UserStatus.Active) {
    return;
  }

  if (userStatus === UserStatus.Blocked) {
    return NextResponse.redirect(new URL("/blocked", request.url));
  }

  if (userStatus === UserStatus.Expiring) {
    return NextResponse.redirect(new URL("/expiring", request.url));
  }
}

export const config = {
  matcher: [
    "/dash",
    "/blocked",
    "/expiring",
    "/payments",
    "/expenses",
    "/reports",
  ],
};
