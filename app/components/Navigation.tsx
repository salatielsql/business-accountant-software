import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="p-4">
      <h1 className="text-2xl font-bold mb-4">Accountant Software</h1>
      <ul className="space-y-2">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/expenses" className="text-blue-600 hover:underline">
            Expenses
          </Link>
        </li>
        <li>
          <Link href="/payments" className="text-blue-600 hover:underline">
            Payments
          </Link>
        </li>
        <li>
          <Link href="/reports" className="text-blue-600 hover:underline">
            Reports
          </Link>
        </li>
      </ul>
    </nav>
  );
}
