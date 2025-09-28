import  { useState } from 'react';

const users = [
  { id: 1, name: 'Amit Sharma', role: 'Admin', access: 'Full', status: 'Active' },
  { id: 2, name: 'Priya Verma', role: 'Staff', access: 'Limited', status: 'Active' },
  { id: 3, name: 'Rahul Singh', role: 'Student', access: 'Restricted', status: 'Pending' },
  { id: 4, name: 'Sneha Patel', role: 'Librarian', access: 'Full', status: 'Active' },
];

export default function SecurityAccessPage() {
  const [search, setSearch] = useState('');
  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.role.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Security & Access</h2>
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <input
              type="text"
              placeholder="Search users or roles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full md:w-72 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold text-sm shadow hover:bg-blue-700 transition">Add User/Role</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-2 font-semibold text-gray-700 border-b">User</th>
                  <th className="px-4 py-2 font-semibold text-gray-700 border-b">Role</th>
                  <th className="px-4 py-2 font-semibold text-gray-700 border-b">Access Level</th>
                  <th className="px-4 py-2 font-semibold text-gray-700 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(u => (
                  <tr key={u.id} className="border-b hover:bg-blue-50">
                    <td className="px-4 py-2">{u.name}</td>
                    <td className="px-4 py-2">{u.role}</td>
                    <td className="px-4 py-2">{u.access}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${u.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{u.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Manage user roles and access levels</li>
            <li>Monitor account status and permissions</li>
            <li>Modern, secure, and responsive UI</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
