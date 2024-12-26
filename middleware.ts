import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { UserStatus, UserType } from "./app/types";

export function middleware(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  // Just an example. A real application probably would request the user info
  const userStatus = (
    searchParams.has("status") ? searchParams.get("status") : "active"
  ) as UserStatus;
  // Just an example. A real application probably would request the user info
  const userType = (
    searchParams.has("type") ? searchParams.get("type") : "owner"
  ) as UserType;

  console.log(
    `⚡️ User type is: ${userType} and status is: ${
      userStatus ? userStatus : "active"
    }`
  );

  if (userStatus === UserStatus.Active) {
    return;
  }

  if (userType === UserType.Owner) {
    if (userStatus === UserStatus.Blocked) {
      return NextResponse.redirect(new URL("/blocked", request.url));
    }

    if (userStatus === UserStatus.Expiring) {
      return NextResponse.redirect(new URL("/expiring", request.url));
    }
  }

  if (
    userType === UserType.Accountant &&
    (userStatus === UserStatus.Blocked || userStatus === UserStatus.Expiring)
  ) {
    return NextResponse.redirect(new URL("/", request.url));
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
