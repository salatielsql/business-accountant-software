import { ERROR_MESSAGES } from "../../types";

export async function validateExpenseAmount(
  value: number | undefined | string
): Promise<number | Error> {
  let amount = value;

  if (typeof amount === "string") {
    amount = parseFloat(amount);
  }

  if (typeof amount === "undefined") {
    return new Error(ERROR_MESSAGES.INVALID_AMOUNT);
  }

  if (amount <= 0) return new Error(ERROR_MESSAGES.INVALID_AMOUNT);

  return amount;
}
