import { BarChart3, FileText, Users, CalendarCheck, TrendingUp } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-2 py-2">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">Reports & Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg border border-blue-100 p-6 flex items-center gap-4">
          <FileText className="w-10 h-10 text-blue-500" />
          <div>
            <div className="text-lg font-bold text-gray-800">Monthly Fees Collection</div>
            <div className="text-2xl font-extrabold text-blue-700">₹ 2,50,000</div>
            <div className="text-xs text-gray-500">Last updated: Sep 2025</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg border border-green-100 p-6 flex items-center gap-4">
          <CalendarCheck className="w-10 h-10 text-green-500" />
          <div>
            <div className="text-lg font-bold text-gray-800">Attendance Report</div>
            <div className="text-2xl font-extrabold text-green-700">96.2%</div>
            <div className="text-xs text-gray-500">This month</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-lg border border-red-100 p-6 flex items-center gap-4">
          <BarChart3 className="w-10 h-10 text-red-500" />
          <div>
            <div className="text-lg font-bold text-gray-800">Expense Report</div>
            <div className="text-2xl font-extrabold text-red-700">₹ 1,10,000</div>
            <div className="text-xs text-gray-500">This month</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg border border-purple-100 p-6 flex items-center gap-4">
          <TrendingUp className="w-10 h-10 text-purple-500" />
          <div>
            <div className="text-lg font-bold text-gray-800">Student Performance</div>
            <div className="text-2xl font-extrabold text-purple-700">Top 5% ↑</div>
            <div className="text-xs text-gray-500">Compared to last year</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-lg border border-yellow-100 p-6 flex items-center gap-4">
          <Users className="w-10 h-10 text-yellow-500" />
          <div>
            <div className="text-lg font-bold text-gray-800">New Admissions</div>
            <div className="text-2xl font-extrabold text-yellow-700">+120</div>
            <div className="text-xs text-gray-500">This session</div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mt-8">
        <div className="text-xl font-bold text-gray-800 mb-4">Quick Report Export</div>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Download All Reports</button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition">Export as PDF</button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition">Export as Excel</button>
        </div>
      </div>
    </div>
  );
}
