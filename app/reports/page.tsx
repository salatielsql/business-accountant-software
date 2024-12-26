import { generateReport } from "./actions";
import ReportForm from "./ReportForm";

export default function ReportsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Reports</h1>
      <ReportForm generateReport={generateReport} />
    </div>
  );
}
