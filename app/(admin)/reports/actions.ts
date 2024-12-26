"use server";

import { getExpenses } from "../expenses/actions";
import { getPayments } from "../payments/actions";
import { Expense, Payment, Report } from "../../types";

export async function generateReport({
  startDate,
  endDate,
  reportType,
}: {
  startDate: string;
  endDate: string;
  reportType: "expenses" | "payments";
}): Promise<Report> {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let data: Payment[] | Expense[] = [];
  if (reportType === "expenses") {
    const expenses = await getExpenses();
    data = expenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      return expenseDate >= start && expenseDate <= end;
    });

    // Group expenses by category
    const groupedData = data.reduce(
      (acc: Record<string, Expense[]>, expense: Expense) => {
        if (!acc[expense.category]) {
          acc[expense.category] = [];
        }
        acc[expense.category].push(expense);
        return acc;
      },
      {} satisfies Record<string, Expense[]>
    );

    // Calculate totals for each category
    const categoryTotals = Object.keys(groupedData).map((category) => ({
      category,
      total: groupedData[category].reduce(
        (sum, expense) => sum + expense.amount,
        0
      ),
    }));

    return {
      reportType,
      startDate,
      endDate,
      data,
      groupedData,
      categoryTotals,
    };
  } else if (reportType === "payments") {
    const payments = await getPayments();
    data = payments.filter((payment) => payment.status === "Approved");
  }

  return {
    reportType,
    startDate,
    endDate,
    data,
  };
}
