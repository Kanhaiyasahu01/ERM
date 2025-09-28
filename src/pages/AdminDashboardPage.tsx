import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './AdminDashboardPage.css';

const stats = {
  admissions: 120,
  feesCollected: 2000000,
  feesPending: 500000,
  hostelOccupancy: 85,
  libraryUsage: 60,
  academicPerformance: 78,
};

const data = [
  { name: 'Admissions', value: stats.admissions },
  { name: 'Fees Collected', value: stats.feesCollected },
  { name: 'Fees Pending', value: stats.feesPending },
  { name: 'Hostel Occupancy (%)', value: stats.hostelOccupancy },
  { name: 'Library Usage (%)', value: stats.libraryUsage },
  { name: 'Academic Perf. (%)', value: stats.academicPerformance },
];


const AdminDashboardPage = () => (
  <div className="min-h-screen bg-gray-50 px-4 py-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Overview Dashboard</h2>
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Role Management */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-2 shadow-sm">
          <div className="font-semibold text-blue-700 mb-1">Role-Based Access Control</div>
          <div className="text-gray-600 text-sm mb-2">Manage user roles and permissions for students, staff, and administrators.</div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700" onClick={() => alert('Manage Users/Roles (simulated)')}>Manage Users/Roles</button>
        </div>
        {/* Cloud Integration */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-2 shadow-sm">
          <div className="font-semibold text-blue-700 mb-1">Cloud Integration Status</div>
          <div className="text-gray-600 text-sm mb-2">Connected to Google Workspace & MS Office 365 for forms, sheets, and automation.</div>
          <div className="flex gap-2">
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Google Workspace: Connected</span>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Office 365: Connected</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Backup/Restore */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-2 shadow-sm">
          <div className="font-semibold text-blue-700 mb-1">Automated Backups</div>
          <div className="text-gray-600 text-sm mb-2">Regular automated backups ensure data security and recovery.</div>
          <div className="flex gap-2 mb-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700" onClick={() => alert('Backup simulated!')}>Backup Now</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300" onClick={() => alert('Restore simulated!')}>Restore</button>
          </div>
          <div className="text-xs text-gray-500">Last backup: 28 Sep 2025, 09:00 AM</div>
        </div>
        {/* Security Alerts */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-2 shadow-sm">
          <div className="font-semibold text-blue-700 mb-1">Security & Access</div>
          <div className="text-gray-600 text-sm mb-2">Monitor access, view security alerts, and ensure compliance.</div>
          <ul className="list-disc pl-5 text-xs text-red-500">
            <li>No unauthorized access detected</li>
            <li>All user roles up-to-date</li>
            <li>Data encrypted at rest</li>
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <div className="font-semibold text-blue-700 mb-1">Automated Backup Logs</div>
        <ul className="text-xs text-gray-600">
          <li>28 Sep 2025, 09:00 AM - Success</li>
          <li>27 Sep 2025, 09:00 AM - Success</li>
          <li>26 Sep 2025, 09:00 AM - Success</li>
        </ul>
      </div>
    </div>
  </div>
);

export default AdminDashboardPage;
