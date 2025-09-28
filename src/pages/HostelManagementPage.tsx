

import { useState } from 'react';

const dummyHostel = {
  room: 'A-101',
  status: 'Allocated',
  warden: 'Mr. Verma',
  feeStatus: 'Paid',
  block: 'Block A',
  bed: 'Single',
  joinDate: '2025-08-01',
  occupancy: 92,
  totalRooms: 120,
  vacantRooms: 10,
};

const dummyAllocations = [
  { id: '202501', name: 'Aarav Sharma', room: 'A-101', block: 'A', bed: 'Single', status: 'Allocated', feeStatus: 'Paid', joinDate: '2025-08-01', avatar: 'https://i.pravatar.cc/100?img=14' },
  { id: '202502', name: 'Priya Singh', room: 'A-102', block: 'A', bed: 'Double', status: 'Allocated', feeStatus: 'Pending', joinDate: '2025-08-02', avatar: 'https://i.pravatar.cc/100?img=15' },
  { id: '202503', name: 'Rahul Gupta', room: 'B-201', block: 'B', bed: 'Single', status: 'Vacant', feeStatus: 'Paid', joinDate: '-', avatar: 'https://i.pravatar.cc/100?img=16' },
  { id: '202504', name: 'Anaya Jain', room: 'A-103', block: 'A', bed: 'Single', status: 'Allocated', feeStatus: 'Paid', joinDate: '2025-08-03', avatar: 'https://i.pravatar.cc/100?img=17' },
  { id: '202505', name: 'Vivaan Patel', room: 'B-202', block: 'B', bed: 'Double', status: 'Allocated', feeStatus: 'Paid', joinDate: '2025-08-04', avatar: 'https://i.pravatar.cc/100?img=18' },
];


export default function HostelManagementPage() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(dummyAllocations[0]);
  const allocations = dummyAllocations.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.id.toLowerCase().includes(search.toLowerCase()) ||
    a.room.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left: Hostel Allocation Table */}
        <div className="flex-1 bg-white rounded-xl shadow p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Hostel Management</h1>
            <input
              type="text"
              placeholder="Search by name, ID, or room..."
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
                <th className="py-2 px-3 text-left">Room</th>
                <th className="py-2 px-3 text-left">Block</th>
                <th className="py-2 px-3 text-left">Bed</th>
                <th className="py-2 px-3 text-left">Status</th>
                <th className="py-2 px-3 text-left">Fee</th>
                <th className="py-2 px-3 text-left">Join Date</th>
                <th className="py-2 px-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allocations.map(a => (
                <tr
                  key={a.id}
                  className={`border-b last:border-b-0 cursor-pointer ${selected.id === a.id ? 'bg-blue-50' : ''}`}
                  onClick={() => setSelected(a)}
                >
                  <td className="py-2 px-3">
                    <img src={a.avatar} alt={a.name} className="w-10 h-10 rounded-full object-cover" />
                  </td>
                  <td className="py-2 px-3 font-semibold text-gray-900">{a.name}</td>
                  <td className="py-2 px-3">{a.id}</td>
                  <td className="py-2 px-3">{a.room}</td>
                  <td className="py-2 px-3">{a.block}</td>
                  <td className="py-2 px-3">{a.bed}</td>
                  <td className="py-2 px-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${a.status === 'Allocated' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{a.status}</span>
                  </td>
                  <td className="py-2 px-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${a.feeStatus === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{a.feeStatus}</span>
                  </td>
                  <td className="py-2 px-3">{a.joinDate}</td>
                  <td className="py-2 px-3">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold mr-2">View</button>
                    <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs font-semibold">Message</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Right: Allocation Detail Card & Dashboard */}
        <div className="w-full lg:w-96 bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <img src={selected.avatar} alt={selected.name} className="w-24 h-24 rounded-full object-cover mb-4" />
          <div className="text-xl font-bold text-gray-900 mb-1">{selected.name}</div>
          <div className="text-gray-500 text-sm mb-1">ID: {selected.id}</div>
          <div className="text-blue-600 text-sm font-medium mb-1">Room: {selected.room} ({selected.block})</div>
          <div className="text-gray-700 text-sm mb-1">Bed: {selected.bed}</div>
          <div className="text-gray-700 text-sm mb-1">Status: <span className="font-semibold">{selected.status}</span></div>
          <div className="text-gray-700 text-sm mb-1">Fee: <span className="font-semibold">{selected.feeStatus}</span></div>
          <div className="text-gray-700 text-sm mb-1">Join Date: {selected.joinDate}</div>
          <div className="text-gray-700 text-sm mb-1">Warden: {dummyHostel.warden}</div>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold">Edit</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold">Message</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded font-semibold">Download</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded font-semibold">Print</button>
          </div>
          <div className="w-full mt-8 bg-blue-50 p-4 rounded-xl">
            <h3 className="font-semibold mb-2">Hostel Occupancy Dashboard</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Total Rooms: {dummyHostel.totalRooms}</li>
              <li>Occupied: {dummyHostel.totalRooms - dummyHostel.vacantRooms}</li>
              <li>Vacant: {dummyHostel.vacantRooms}</li>
              <li>Current Occupancy: <span className="font-bold text-blue-700">{dummyHostel.occupancy}%</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
