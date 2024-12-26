import { describe, test, expect } from "vitest";
import { validateExpenseAmount } from "./validate-expense-amount";
import { ERROR_MESSAGES } from "../../types";

describe("Validate Expense Amount", () => {
  test("Should not allow to add an expense with zero amount", async () => {
    const result = await validateExpenseAmount(0);

    if (result instanceof Error) {
      expect(result.message).toBe(ERROR_MESSAGES.INVALID_AMOUNT);
    }
  });

  test("Should not allow to add an expense with negative amount", async () => {
    const result = await validateExpenseAmount(-123.1);

    if (result instanceof Error) {
      expect(result.message).toBe(ERROR_MESSAGES.INVALID_AMOUNT);
    }
  });

  test("Should not allow to add an expense with undefined amount", async () => {
    const result = await validateExpenseAmount(undefined);

    if (result instanceof Error) {
      expect(result.message).toBe(ERROR_MESSAGES.INVALID_AMOUNT);
    }
  });

  test("Should allow to add an expense with positive amount", async () => {
    const result = await validateExpenseAmount(600);

    expect(result).toBe(600);
  });

  test("Should allow to add an expense with positive amount (passing string value)", async () => {
    const result = await validateExpenseAmount("600");

    expect(result).toBe(600);
  });
});
