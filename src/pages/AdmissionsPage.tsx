import { admissions } from '../data/admissions';
import { useState } from 'react';

export default function AdmissionsPage() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(admissions[0]);

  const filteredAdmissions = admissions.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.id.toLowerCase().includes(search.toLowerCase()) ||
    a.branch.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-2 py-2">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Admissions</h2>
        <input
          type="text"
          placeholder="Search applicants..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Detail card */}
        <div className="lg:w-1/3 w-full flex flex-col items-center mb-4 lg:mb-0">
          <div className="w-full max-w-xs bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center">
            <div className="text-2xl font-extrabold text-blue-700 mb-2">{selected.name}</div>
            <div className="text-gray-500 text-base mb-1">ID: <span className="font-semibold text-gray-700">{selected.id}</span></div>
            <div className="text-blue-600 text-base font-medium mb-1">Branch: {selected.branch}</div>
            <div className="text-gray-700 text-base mb-1">Year: {selected.year}</div>
            <div className="text-gray-700 text-base mb-1">Status: {selected.status}</div>
            <div className="text-gray-700 text-base mb-1">Email: {selected.email}</div>
            <div className="text-gray-700 text-base mb-1">Phone: {selected.phone}</div>
            <div className="text-gray-700 text-base mb-1">Gender: {selected.gender}</div>
            <div className="text-gray-700 text-base mb-1">DOB: {selected.dob}</div>
            <div className="text-gray-700 text-base mb-1">Address: {selected.address}</div>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs font-semibold">Edit</button>
              <button className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-xs font-semibold">Download</button>
              <button className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-xs font-semibold">Print</button>
            </div>
          </div>
        </div>
        {/* Table/list */}
        <div className="flex-1 overflow-x-auto bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow border border-blue-100">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Year</th>
                <th className="py-2 px-4">Branch</th>
              </tr>
            </thead>
            <tbody>
              {filteredAdmissions.length === 0 && (
                <tr><td colSpan={5} className="text-center text-gray-400 text-lg py-10">No applicants found.</td></tr>
              )}
              {filteredAdmissions.map(a => (
                <tr key={a.id} className={`border-b last:border-b-0 hover:bg-blue-50 cursor-pointer ${selected.id === a.id ? 'bg-blue-50' : ''}`}
                  onClick={() => setSelected(a)}
                >
                  <td className="py-2 px-4">{a.id}</td>
                  <td className="py-2 px-4 font-semibold text-gray-900">{a.name}</td>
                  <td className="py-2 px-4">{a.status}</td>
                  <td className="py-2 px-4">{a.year}</td>
                  <td className="py-2 px-4 text-blue-600 font-medium">{a.branch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
