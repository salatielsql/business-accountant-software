import { addExpense, getExpenses } from "./actions";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export default async function ExpensesPage() {
  const expenses = await getExpenses();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}
