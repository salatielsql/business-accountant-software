import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/expenses"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Expense Tracker</h2>
          <p>Manage and track your business expenses</p>
        </Link>
        <Link
          href="/payments"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Payment Approval</h2>
          <p>Review and approve pending payments</p>
        </Link>
        <Link
          href="/reports"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Reports</h2>
          <p>Generate and export financial reports</p>
        </Link>
      </div>
    </div>
  );
}
