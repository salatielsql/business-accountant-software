import { ACCOUNT_NEXT_STEP, UserStatus, UserType } from "../types";

export function getAccountNextStep({
  userStatus,
  userType,
}: {
  userStatus: UserStatus;
  userType: UserType;
}): keyof typeof ACCOUNT_NEXT_STEP {
  if (userStatus === UserStatus.Active) {
    return ACCOUNT_NEXT_STEP.__NEXT;
  }

  if (userType === UserType.Owner) {
    if (userStatus === UserStatus.Blocked) {
      return ACCOUNT_NEXT_STEP.BLOCK;
    }

    if (userStatus === UserStatus.Expiring) {
      return ACCOUNT_NEXT_STEP.EXPIRING;
    }
  }

  if (
    userType === UserType.Accountant &&
    (userStatus === UserStatus.Blocked || userStatus === UserStatus.Expiring)
  ) {
    return ACCOUNT_NEXT_STEP.EXIT_APP;
  }

  return ACCOUNT_NEXT_STEP.EXIT_APP;
}
