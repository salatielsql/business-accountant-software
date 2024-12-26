import { getPayments, approvePayment } from "./actions";
import PaymentList from "./PaymentList";

export default async function PaymentsPage() {
  const payments = await getPayments();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Payment Approval</h1>
      <PaymentList payments={payments} approvePayment={approvePayment} />
    </div>
  );
}
