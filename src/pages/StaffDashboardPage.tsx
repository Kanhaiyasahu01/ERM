import { staffUsers } from '../data/users';
import { classSchedules } from '../data/academics';

export default function StaffDashboardPage() {
  // Replace with actual logged-in staff
  const staff = staffUsers[0];
  // Example: classes today for staff's department
  const today = new Date().toLocaleString('en-US', { weekday: 'long' });
  const todaysClasses = classSchedules.filter(
    c => c.branch === staff.department && c.day === today
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white px-2 py-2">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <img src={staff.avatar} alt={staff.name} className="w-24 h-24 rounded-full border-4 border-green-200 shadow" />
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-green-900 mb-1">Welcome, {staff.name}</h1>
            <div className="text-sm text-green-600 font-semibold mb-2">ID: {staff.id} | {staff.position}, {staff.department}</div>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Department: {staff.department}</span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Position: {staff.position}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-green-100 p-6 shadow flex flex-col gap-2">
            <span className="text-gray-500 text-sm">Classes Today</span>
            <span className="text-xl font-bold text-green-700">{todaysClasses.length}</span>
            <ul className="text-xs text-gray-700 mt-2 list-disc list-inside">
              {todaysClasses.length > 0 ? todaysClasses.map((c, i) => (
                <li key={i}>{c.subject} ({c.time})</li>
              )) : <li>No classes scheduled</li>}
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-green-100 p-6 shadow flex flex-col gap-2">
            <span className="text-gray-500 text-sm">Pending Evaluations</span>
            <span className="text-xl font-bold text-yellow-600">5</span>
          </div>
          <div className="bg-white rounded-xl border border-green-100 p-6 shadow flex flex-col gap-2">
            <span className="text-gray-500 text-sm">Total Students</span>
            <span className="text-xl font-bold text-blue-700">120</span>
          </div>
          <div className="bg-white rounded-xl border border-green-100 p-6 shadow flex flex-col gap-2">
            <span className="text-gray-500 text-sm">Leave Status</span>
            <span className="text-xl font-bold text-red-600">None</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-8 mb-8">
          <div className="text-lg font-bold text-gray-800 mb-2">Quick Actions</div>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">Mark Attendance</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition">Upload Marks</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition">View Timetable</button>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-xl p-6 text-green-900 font-semibold text-center">
          Need help? Contact the admin office or visit the staff portal.
        </div>
      </div>
    </div>
  );
}
