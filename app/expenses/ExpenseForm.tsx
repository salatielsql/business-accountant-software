"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Expense } from "../types";

export default function ExpenseForm({
  addExpense,
}: {
  addExpense: (expense: Omit<Expense, "id" | "date">) => Promise<Expense>;
}) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: unknown) => {
    e.preventDefault();
    await addExpense({ description, amount: parseFloat(amount), category });
    setDescription("");
    setAmount("");
    setCategory("");
    router.refresh();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-4 bg-white rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2 font-semibold">
          Description
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block mb-2 font-semibold">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          step="0.01"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block mb-2 font-semibold">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Select a category</option>
          <option value="Office Supplies">Office Supplies</option>
          <option value="Travel">Travel</option>
          <option value="Utilities">Utilities</option>
          <option value="Rent">Rent</option>
          <option value="Software">Software</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Expense
      </button>
    </form>
  );
}
