import { useState } from 'react';

const dummyStaff = [
  { name: 'Dr. S. Sharma', id: 'ST1', avatar: 'https://i.pravatar.cc/100?img=12', position: 'Professor', department: 'CSE', email: 'sharma@gec.edu', phone: '9876500011', gender: 'Male', address: 'Bilaspur, CG' },
  { name: 'Ms. R. Verma', id: 'ST2', avatar: 'https://i.pravatar.cc/100?img=13', position: 'Lecturer', department: 'ECE', email: 'verma@gec.edu', phone: '9876500012', gender: 'Female', address: 'Raipur, CG' },
  { name: 'Dr. A. Mehta', id: 'ST3', avatar: 'https://i.pravatar.cc/100?img=15', position: 'Professor', department: 'ME', email: 'mehta@gec.edu', phone: '9876500013', gender: 'Male', address: 'Durg, CG' },
  { name: 'Mr. K. Singh', id: 'ST4', avatar: 'https://i.pravatar.cc/100?img=16', position: 'Lab Assistant', department: 'CSE', email: 'ksingh@gec.edu', phone: '9876500014', gender: 'Male', address: 'Bilaspur, CG' },
  { name: 'Mrs. P. Rao', id: 'ST5', avatar: 'https://i.pravatar.cc/100?img=17', position: 'Clerk', department: 'Admin', email: 'prao@gec.edu', phone: '9876500015', gender: 'Female', address: 'Raigarh, CG' },
  { name: 'Dr. N. Pillai', id: 'ST6', avatar: 'https://i.pravatar.cc/100?img=18', position: 'Professor', department: 'ECE', email: 'npillai@gec.edu', phone: '9876500016', gender: 'Male', address: 'Korba, CG' },
  { name: 'Ms. S. Dutta', id: 'ST7', avatar: 'https://i.pravatar.cc/100?img=19', position: 'Lecturer', department: 'CSE', email: 'sdutta@gec.edu', phone: '9876500017', gender: 'Female', address: 'Bilaspur, CG' },
  { name: 'Mr. R. Yadav', id: 'ST8', avatar: 'https://i.pravatar.cc/100?img=20', position: 'Lab Assistant', department: 'ECE', email: 'ryadav@gec.edu', phone: '9876500018', gender: 'Male', address: 'Raipur, CG' },
  { name: 'Mrs. M. Desai', id: 'ST9', avatar: 'https://i.pravatar.cc/100?img=21', position: 'Clerk', department: 'Admin', email: 'mdesai@gec.edu', phone: '9876500019', gender: 'Female', address: 'Durg, CG' },
  { name: 'Dr. V. Joshi', id: 'ST10', avatar: 'https://i.pravatar.cc/100?img=22', position: 'Professor', department: 'CSE', email: 'vjoshi@gec.edu', phone: '9876500020', gender: 'Male', address: 'Bilaspur, CG' },
];

function getInitials(name:any) {
  return name.split(' ').map((n:any) => n[0]).join('').toUpperCase();
}

export default function StaffPage() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(dummyStaff[0]);
  const staff = dummyStaff.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-2 py-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Staff Members</h2>
        <input
          type="text"
          placeholder="Search by name or ID..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
      </div>
      <div className="flex gap-6">
        {/* Staff detail panel */}
        <div className="lg:w-1/3 w-full bg-white rounded-xl shadow border border-gray-200 p-6 flex flex-col items-center mb-4 lg:mb-0">
          <div className="mb-4">
            {selected.avatar ? (
              <img src={selected.avatar} alt={selected.name} className="w-20 h-20 rounded-full border-2 border-blue-200 object-cover" />
            ) : (
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-2xl border-2 border-blue-200">
                {getInitials(selected.name)}
              </div>
            )}
          </div>
          <div className="text-xl font-bold text-gray-900 mb-1">{selected.name}</div>
          <div className="text-gray-500 text-sm mb-1">ID: {selected.id}</div>
          <div className="text-blue-600 text-sm font-medium mb-1">Department: {selected.department}</div>
          <div className="text-gray-700 text-sm mb-1">Position: {selected.position}</div>
          <div className="text-gray-700 text-sm mb-1">Gender: {selected.gender}</div>
          <div className="text-gray-700 text-sm mb-1">Email: <span className="text-blue-700">{selected.email}</span></div>
          <div className="text-gray-700 text-sm mb-1">Phone: <span className="text-blue-700">{selected.phone}</span></div>
          <div className="text-gray-700 text-sm mb-1">Address: {selected.address}</div>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs font-semibold">Edit</button>
            <button className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-xs font-semibold">Message</button>
            <button className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-xs font-semibold">Download</button>
            <button className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-xs font-semibold">Print</button>
          </div>
        </div>
        {/* Staff table */}
        <div className="flex-1 overflow-x-auto bg-white rounded-xl shadow border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {staff.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center text-gray-400 text-lg py-10">No staff found.</td>
                </tr>
              )}
              {staff.map((member) => (
                <tr key={member.id} className={
                  "hover:bg-blue-50 transition cursor-pointer " +
                  (selected.id === member.id ? 'bg-blue-50' : '')
                }
                  onClick={() => setSelected(member)}
                >
                  <td className="px-6 py-3">
                    {member.avatar ? (
                      <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full border-2 border-blue-100 object-cover" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-base border-2 border-blue-100">
                        {getInitials(member.name)}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-3 font-semibold text-gray-900">{member.name}</td>
                  <td className="px-6 py-3 text-gray-700">{member.id}</td>
                  <td className="px-6 py-3 text-blue-600 font-medium">{member.department}</td>
                  <td className="px-6 py-3">{member.position}</td>
                  <td className="px-6 py-3">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs font-semibold mr-2">View</button>
                    <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-xs font-semibold">Message</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
