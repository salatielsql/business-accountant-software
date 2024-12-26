"use client";

import { useRouter } from "next/navigation";
import { Payment } from "../../types";

export default function PaymentList({
  payments,
  approvePayment,
}: {
  payments: Payment[];
  approvePayment: (id: number) => Promise<Payment | undefined>;
}) {
  const router = useRouter();

  const handleApprove = async (id: number) => {
    await approvePayment(id);
    router.refresh();
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {payment.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                ${payment.amount.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{payment.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {payment.status === "Pending" && (
                  <button
                    onClick={() => handleApprove(payment.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Approve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
