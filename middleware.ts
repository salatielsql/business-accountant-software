import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { ACCOUNT_NEXT_STEP, UserStatus, UserType } from "./app/types";
import { getAccountNextStep } from "./helpers/account-next-step";

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

  const nextStep = getAccountNextStep({
    userStatus,
    userType,
  });

  if (nextStep === ACCOUNT_NEXT_STEP.__NEXT) return;

  if (nextStep === ACCOUNT_NEXT_STEP.EXIT_APP)
    return NextResponse.redirect(new URL("/", request.url));

  if (nextStep === ACCOUNT_NEXT_STEP.BLOCK)
    return NextResponse.redirect(new URL("/blocked", request.url));

  if (nextStep === ACCOUNT_NEXT_STEP.EXPIRING)
    return NextResponse.redirect(new URL("/expiring", request.url));
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
