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
  <div className="admin-dashboard-page">
    <h2>Admin Overview Dashboard</h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
    <div className="admin-actions">
      <button onClick={() => alert('Add/Remove Staff (simulated)')}>Manage Users/Roles</button>
      <button onClick={() => alert('Backup simulated!')}>Backup Data</button>
      <button onClick={() => alert('Restore simulated!')}>Restore Data</button>
    </div>
  </div>
);

export default AdminDashboardPage;
