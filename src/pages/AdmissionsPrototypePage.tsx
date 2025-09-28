

import { useState } from 'react';

const dummyApplicants = [
  { id: 'A1001', name: 'Aarav Sharma', branch: 'CSE', email: 'aarav.sharma@email.com', phone: '9876543210', status: 'Pending', date: '2025-07-01', avatar: 'https://i.pravatar.cc/100?img=14' },
  { id: 'A1002', name: 'Priya Singh', branch: 'ECE', email: 'priya.singh@email.com', phone: '9876543211', status: 'Verified', date: '2025-07-02', avatar: 'https://i.pravatar.cc/100?img=15' },
  { id: 'A1003', name: 'Rahul Gupta', branch: 'ME', email: 'rahul.gupta@email.com', phone: '9876543212', status: 'Admitted', date: '2025-07-03', avatar: 'https://i.pravatar.cc/100?img=16' },
  { id: 'A1004', name: 'Anaya Jain', branch: 'CSE', email: 'anaya.jain@email.com', phone: '9876543213', status: 'Pending', date: '2025-07-04', avatar: 'https://i.pravatar.cc/100?img=17' },
  { id: 'A1005', name: 'Vivaan Patel', branch: 'CSE', email: 'vivaan.patel@email.com', phone: '9876543214', status: 'Rejected', date: '2025-07-05', avatar: 'https://i.pravatar.cc/100?img=18' },
];

export default function AdmissionsPrototypePage() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(dummyApplicants[0]);
  const applicants = dummyApplicants.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.id.toLowerCase().includes(search.toLowerCase()) ||
    a.branch.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left: Applicants Table */}
        <div className="flex-1 bg-white rounded-xl shadow p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Admissions</h1>
            <input
              type="text"
              placeholder="Search by name, ID, or branch..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            />
          </div>
          <table className="w-full mb-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-3 text-left">Photo</th>
                <th className="py-2 px-3 text-left">Name</th>
                <th className="py-2 px-3 text-left">ID</th>
                <th className="py-2 px-3 text-left">Branch</th>
                <th className="py-2 px-3 text-left">Status</th>
                <th className="py-2 px-3 text-left">Date</th>
                <th className="py-2 px-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map(applicant => (
                <tr
                  key={applicant.id}
                  className={`border-b last:border-b-0 cursor-pointer ${selected.id === applicant.id ? 'bg-blue-50' : ''}`}
                  onClick={() => setSelected(applicant)}
                >
                  <td className="py-2 px-3">
                    <img src={applicant.avatar} alt={applicant.name} className="w-10 h-10 rounded-full object-cover" />
                  </td>
                  <td className="py-2 px-3 font-semibold text-gray-900">{applicant.name}</td>
                  <td className="py-2 px-3">{applicant.id}</td>
                  <td className="py-2 px-3 text-blue-700 font-medium">{applicant.branch}</td>
                  <td className="py-2 px-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      applicant.status === 'Admitted'
                        ? 'bg-green-100 text-green-700'
                        : applicant.status === 'Verified'
                        ? 'bg-blue-100 text-blue-700'
                        : applicant.status === 'Rejected'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>{applicant.status}</span>
                  </td>
                  <td className="py-2 px-3">{applicant.date}</td>
                  <td className="py-2 px-3">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold mr-2">View</button>
                    <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs font-semibold">Message</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Right: Applicant Detail Card */}
        <div className="w-full lg:w-96 bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <img src={selected.avatar} alt={selected.name} className="w-24 h-24 rounded-full object-cover mb-4" />
          <div className="text-xl font-bold text-gray-900 mb-1">{selected.name}</div>
          <div className="text-gray-500 text-sm mb-1">ID: {selected.id}</div>
          <div className="text-blue-600 text-sm font-medium mb-1">Branch: {selected.branch}</div>
          <div className="text-gray-700 text-sm mb-1">Email: <span className="text-blue-700">{selected.email}</span></div>
          <div className="text-gray-700 text-sm mb-1">Phone: <span className="text-blue-700">{selected.phone}</span></div>
          <div className="text-gray-700 text-sm mb-1">Status: <span className="font-semibold">{selected.status}</span></div>
          <div className="text-gray-700 text-sm mb-1">Applied On: {selected.date}</div>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold">Edit</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold">Message</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded font-semibold">Download</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded font-semibold">Print</button>
          </div>
        </div>
      </div>
    </div>
  );
}
