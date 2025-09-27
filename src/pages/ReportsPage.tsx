export default function ReportsPage() {
  return (
  <div className="min-h-screen bg-gray-50 px-2 py-2">
      <h2 className="text-2xl font-bold mb-6">Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6 font-semibold">Monthly Fees Collection Report</div>
        <div className="bg-white rounded-xl shadow p-6 font-semibold">Attendance Report</div>
        <div className="bg-white rounded-xl shadow p-6 font-semibold">Expense Report</div>
        <div className="bg-white rounded-xl shadow p-6 font-semibold">Student Performance Report</div>
      </div>
    </div>
  );
}
