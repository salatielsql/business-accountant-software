"use server";

import { Payment } from "../../types";

const payments: Payment[] = [
  { id: 1, description: "Vendor Payment", amount: 500.0, status: "Pending" },
  { id: 2, description: "Utility Bill", amount: 150.0, status: "Approved" },
];

export async function getPayments(): Promise<Payment[]> {
  return payments;
}

export async function approvePayment(id: number): Promise<Payment | undefined> {
  const payment = payments.find((p) => p.id === id);
  if (payment) {
    payment.status = "Approved";
  }
  return payment;
}
