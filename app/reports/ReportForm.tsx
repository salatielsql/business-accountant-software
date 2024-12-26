"use client";

import { useState } from "react";
import { Report } from "../types";

export default function ReportForm({
  generateReport,
}: {
  generateReport: (params: {
    startDate: string;
    endDate: string;
    reportType: "expenses" | "payments";
  }) => Promise<Report>;
}) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportType, setReportType] = useState<"expenses" | "payments">(
    "expenses"
  );
  const [report, setReport] = useState<Report | null>(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const generatedReport = await generateReport({
      startDate,
      endDate,
      reportType,
    });
    setReport(generatedReport);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white rounded-lg shadow-md mb-6"
      >
        <div className="mb-4">
          <label htmlFor="startDate" className="block mb-2 font-semibold">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className="block mb-2 font-semibold">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="reportType" className="block mb-2 font-semibold">
            Report Type
          </label>
          <select
            id="reportType"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="expenses">Expenses Report</option>
            <option value="payments">Payments Report</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Generate Report
        </button>
      </form>

      {report && (
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-2xl font-bold mb-4">Generated Report</h2>
          <p>
            <strong>Report Type:</strong> {report.reportType}
          </p>
          <p>
            <strong>Start Date:</strong> {report.startDate}
          </p>
          <p>
            <strong>End Date:</strong> {report.endDate}
          </p>

          {report.reportType === "expenses" && report.categoryTotals && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Expense Categories</h3>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Category</th>
                    <th className="text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {report.categoryTotals.map((category, index) => (
                    <tr key={index}>
                      <td>{category.category}</td>
                      <td>${category.total.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Detailed Data</h3>
            <pre className="bg-gray-100 p-4 rounded overflow-auto">
              {JSON.stringify(report.data, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
