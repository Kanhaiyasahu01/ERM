
import { studentUsers, staffUsers } from '../data/users';
import { admissions } from '../data/admissions';
import { exams, results } from '../data/exams';



export default function DashboardPage() {
  const totalStudents = studentUsers.length;
  const totalStaff = staffUsers.length;
  const totalAdmissions = admissions.length;
  const admitted = admissions.filter(a => a.status === 'Admitted').length;
  const pendingAdmissions = admissions.filter(a => a.status === 'Pending').length;
  const totalExams = exams.length;
  const avgAttendance = Math.round(studentUsers.reduce((a, s) => a + s.attendance, 0) / totalStudents);
  const totalFees = 1200000; // dummy
  const totalExpenses = 800000; // dummy


  return (
    <div className="min-h-screen bg-gray-50 px-2 py-2">
      <h1 className="text-4xl font-extrabold text-center mb-10 tracking-tight text-gray-900">Welcome to Government Engineering College Bilaspur</h1>
      {/* Top summary cards */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col items-start border border-gray-100 hover:shadow-lg transition">
          <span className="text-gray-500 text-base mb-1">Students</span>
          <span className="text-3xl font-extrabold mb-1 text-gray-900">{totalStudents}</span>
          <span className="text-green-500 text-sm font-semibold flex items-center gap-1"><svg width="14" height="14" className="inline" viewBox="0 0 20 20"><path fill="currentColor" d="M10 3l6 6H4l6-6zm0 14a1 1 0 01-1-1V7h2v9a1 1 0 01-1 1z"/></svg>+1.2%</span>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col items-start border border-gray-100 hover:shadow-lg transition">
          <span className="text-gray-500 text-base mb-1">Staff Members</span>
          <span className="text-3xl font-extrabold mb-1 text-gray-900">{totalStaff}</span>
          <span className="text-red-500 text-sm font-semibold flex items-center gap-1"><svg width="14" height="14" className="inline" viewBox="0 0 20 20"><path fill="currentColor" d="M10 17l-6-6h12l-6 6zm0-14a1 1 0 011 1v9h-2V4a1 1 0 011-1z"/></svg>-0.7%</span>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col items-start border border-gray-100 hover:shadow-lg transition">
          <span className="text-gray-500 text-base mb-1">Monthly Fees Collection</span>
          <span className="text-3xl font-extrabold mb-1 text-gray-900">₹{(totalFees/12).toLocaleString()}</span>
          <span className="text-red-500 text-sm font-semibold flex items-center gap-1"><svg width="14" height="14" className="inline" viewBox="0 0 20 20"><path fill="currentColor" d="M10 17l-6-6h12l-6 6zm0-14a1 1 0 011 1v9h-2V4a1 1 0 011-1z"/></svg>-0.3%</span>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col items-start border border-gray-100 hover:shadow-lg transition">
          <span className="text-gray-500 text-base mb-1">Monthly Expenses</span>
          <span className="text-3xl font-extrabold mb-1 text-gray-900">₹{(totalExpenses/12).toLocaleString()}</span>
          <span className="text-green-500 text-sm font-semibold flex items-center gap-1"><svg width="14" height="14" className="inline" viewBox="0 0 20 20"><path fill="currentColor" d="M10 3l6 6H4l6-6zm0 14a1 1 0 01-1-1V7h2v9a1 1 0 01-1 1z"/></svg>+2.1%</span>
        </div>
      </div>

      {/* Middle charts */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col border border-gray-100 lg:col-span-2 min-h-[240px]">
          <div className="font-semibold text-gray-700 mb-3 text-lg">Fees Collection</div>
          <div className="h-40 w-full bg-blue-50 rounded mb-3 flex items-end">
            <svg width="100%" height="100%" viewBox="0 0 300 60">
              <polyline fill="#c7e0fc" stroke="#2196f3" strokeWidth="3" points="0,50 30,40 60,45 90,30 120,35 150,20 180,25 210,15 240,30 270,20 300,10" />
            </svg>
          </div>
          <div className="text-xs text-gray-500">This year: ₹{totalFees.toLocaleString()} | This month: ₹{(totalFees/12).toLocaleString()}</div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col border border-gray-100 min-h-[240px]">
          <div className="font-semibold text-gray-700 mb-3 text-lg">Daily Attendance</div>
          <div className="h-40 w-full bg-blue-50 rounded mb-3 flex items-end gap-1">
            {[95, 98, 90, 92, 97, 93, 96, 94, 91, 99, 95, 97].map((val, i) => (
              <div key={i} className="bg-blue-500 rounded" style={{height:val, width:16}}></div>
            ))}
          </div>
          <div className="text-xs text-gray-500">Avg Attendance: {avgAttendance}%</div>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col border border-gray-100 min-h-[160px]">
          <div className="font-semibold text-gray-700 mb-2 text-lg">Admissions</div>
          <div className="text-2xl font-extrabold mb-1 text-gray-900">Total: {totalAdmissions}</div>
          <div className="text-sm text-gray-500">Admitted: {admitted} | Pending: {pendingAdmissions}</div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col border border-gray-100 min-h-[160px]">
          <div className="font-semibold text-gray-700 mb-2 text-lg">Exams</div>
          <div className="text-2xl font-extrabold mb-1 text-gray-900">Scheduled: {totalExams}</div>
          <div className="text-sm text-gray-500">Results Published: {results.length}</div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col border border-gray-100 min-h-[160px]">
          <div className="font-semibold text-gray-700 mb-2 text-lg">Recent Activity</div>
          <ul className="list-disc pl-5 text-blue-600 text-base space-y-1">
            <li>New admission: {admissions[admissions.length-1].name} ({admissions[admissions.length-1].status})</li>
            <li>Exam conducted: {exams[0].name} ({exams[0].date})</li>
            <li>Result published for {results[0].studentId}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
