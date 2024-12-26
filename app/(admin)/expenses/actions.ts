"use server";

import { Expense } from "../../types";

const expenses: Expense[] = [
  {
    id: 1,
    description: "Office Supplies",
    amount: 50.0,
    category: "Office Supplies",
    date: new Date("2023-06-01"),
  },
  {
    id: 2,
    description: "Software Subscription",
    amount: 99.99,
    category: "Software",
    date: new Date("2023-06-05"),
  },
];

export async function getExpenses(): Promise<Expense[]> {
  return expenses;
}

export async function addExpense(
  expense: Omit<Expense, "id" | "date">,
  expensesArr = expenses
): Promise<Expense> {
  const newExpense: Expense = {
    id: expenses.length + 1,
    ...expense,
    date: new Date(),
  };
  expensesArr.push(newExpense);
  return newExpense;
}
