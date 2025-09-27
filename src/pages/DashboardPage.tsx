


import { useEffect, useState } from 'react';
import StudentDashboardPage from './StudentDashboardPage';
import StaffDashboardPage from './StaffDashboardPage';

export default function DashboardPage() {
  // Example: get role from localStorage or zustand store
  const [role, setRole] = useState('');
  useEffect(() => {
    setRole(localStorage.getItem('role') || '');
  }, []);

  if (role === 'student') return <StudentDashboardPage />;
  if (role === 'staff') return <StaffDashboardPage />;

  // Default: admin or unknown
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-2 py-2">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <img src="https://i.pravatar.cc/100?img=11" alt="Admin" className="w-24 h-24 rounded-full border-4 border-blue-200 shadow" />
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-1">Welcome to Government Engineering College Bilaspur</h1>
            <div className="text-lg text-blue-600 font-semibold mb-2">Admin Dashboard</div>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Role: Admin</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-blue-100 p-6 shadow flex flex-col gap-2">
            <span className="text-gray-500 text-sm">Total Students</span>
            <span className="text-xl font-bold text-blue-700">350</span>
          </div>
          <div className="bg-white rounded-xl border border-blue-100 p-6 shadow flex flex-col gap-2">
            <span className="text-gray-500 text-sm">Total Staff</span>
            <span className="text-xl font-bold text-green-700">40</span>
          </div>
          <div className="bg-white rounded-xl border border-blue-100 p-6 shadow flex flex-col gap-2">
            <span className="text-gray-500 text-sm">Monthly Fees Collection</span>
            <span className="text-xl font-bold text-purple-700">₹ 2,50,000</span>
          </div>
          <div className="bg-white rounded-xl border border-blue-100 p-6 shadow flex flex-col gap-2">
            <span className="text-gray-500 text-sm">Monthly Expenses</span>
            <span className="text-xl font-bold text-red-600">₹ 1,10,000</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 mb-8">
          <div className="text-xl font-bold mb-2">Quick Links</div>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">View Reports</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition">Manage Users</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition">Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
}
