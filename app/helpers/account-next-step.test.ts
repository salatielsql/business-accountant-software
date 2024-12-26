import { describe, expect, test } from "vitest";
import { getAccountNextStep } from "./account-next-step";
import { ACCOUNT_NEXT_STEP, UserStatus, UserType } from "../types";

describe("Account Next Step", () => {
  describe("When user is Owner", () => {
    test("Should not redirect user when status is active", () => {
      const nextStep = getAccountNextStep({
        userType: UserType.Owner,
        userStatus: UserStatus.Active,
      });

      expect(nextStep).toBe(ACCOUNT_NEXT_STEP.__NEXT);
    });

    test("Should redirect user to block page when status is blocked", () => {
      const nextStep = getAccountNextStep({
        userType: UserType.Owner,
        userStatus: UserStatus.Blocked,
      });

      expect(nextStep).toBe(ACCOUNT_NEXT_STEP.BLOCK);
    });

    test("Should redirect user to warning page when status is expiring", () => {
      const nextStep = getAccountNextStep({
        userType: UserType.Owner,
        userStatus: UserStatus.Expiring,
      });

      expect(nextStep).toBe(ACCOUNT_NEXT_STEP.EXPIRING);
    });
  });

  describe("When user is Accountant", () => {
    test("Should not redirect user when status is active", () => {
      const nextStep = getAccountNextStep({
        userType: UserType.Accountant,
        userStatus: UserStatus.Active,
      });

      expect(nextStep).toBe(ACCOUNT_NEXT_STEP.__NEXT);
    });

    test("Should redirect user to landing page when status is blocked", () => {
      const nextStep = getAccountNextStep({
        userType: UserType.Accountant,
        userStatus: UserStatus.Blocked,
      });

      expect(nextStep).toBe(ACCOUNT_NEXT_STEP.EXIT_APP);
    });

    test("Should redirect user to landing page when status is expiring", () => {
      const nextStep = getAccountNextStep({
        userType: UserType.Accountant,
        userStatus: UserStatus.Expiring,
      });

      expect(nextStep).toBe(ACCOUNT_NEXT_STEP.EXIT_APP);
    });
  });
});
