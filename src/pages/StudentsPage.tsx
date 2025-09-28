import { useState } from 'react';

// 50 realistic dummy students with detailed fields
const dummyStudents = [
  { name: 'Aarav Sharma', id: '202501', branch: 'CSE', year: 2, attendance: 95, avatar: 'https://i.pravatar.cc/100?img=14', admissionYear: 2023, email: 'aarav.sharma@email.com', phone: '9876543210', gender: 'Male', address: 'Bilaspur, CG' },
  { name: 'Priya Singh', id: '202502', branch: 'ECE', year: 1, attendance: 98, avatar: 'https://i.pravatar.cc/100?img=15', admissionYear: 2024, email: 'priya.singh@email.com', phone: '9876543211', gender: 'Female', address: 'Raipur, CG' },
  { name: 'Rahul Gupta', id: '202503', branch: 'ME', year: 3, attendance: 90, avatar: 'https://i.pravatar.cc/100?img=16', admissionYear: 2022, email: 'rahul.gupta@email.com', phone: '9876543212', gender: 'Male', address: 'Durg, CG' },
  { name: 'Anaya Jain', id: '202504', branch: 'CSE', year: 2, attendance: 92, avatar: 'https://i.pravatar.cc/100?img=17', admissionYear: 2023, email: 'anaya.jain@email.com', phone: '9876543213', gender: 'Female', address: 'Bilaspur, CG' },
  { name: 'Vivaan Patel', id: '202505', branch: 'CSE', year: 1, attendance: 97, avatar: 'https://i.pravatar.cc/100?img=18', admissionYear: 2024, email: 'vivaan.patel@email.com', phone: '9876543214', gender: 'Male', address: 'Raigarh, CG' },
  { name: 'Diya Agarwal', id: '202506', branch: 'ECE', year: 4, attendance: 93, avatar: 'https://i.pravatar.cc/100?img=19', admissionYear: 2021, email: 'diya.agarwal@email.com', phone: '9876543215', gender: 'Female', address: 'Korba, CG' },
  { name: 'Kabir Bansal', id: '202507', branch: 'ME', year: 2, attendance: 96, avatar: 'https://i.pravatar.cc/100?img=20', admissionYear: 2023, email: 'kabir.bansal@email.com', phone: '9876543216', gender: 'Male', address: 'Bilaspur, CG' },
  { name: 'Rudra Kapoor', id: '202508', branch: 'CSE', year: 3, attendance: 94, avatar: 'https://i.pravatar.cc/100?img=21', admissionYear: 2022, email: 'rudra.kapoor@email.com', phone: '9876543217', gender: 'Male', address: 'Raipur, CG' },
  { name: 'Yash Malhotra', id: '202509', branch: 'CSE', year: 2, attendance: 91, avatar: 'https://i.pravatar.cc/100?img=22', admissionYear: 2023, email: 'yash.malhotra@email.com', phone: '9876543218', gender: 'Male', address: 'Durg, CG' },
  { name: 'Myra Verma', id: '202510', branch: 'ECE', year: 1, attendance: 99, avatar: 'https://i.pravatar.cc/100?img=23', admissionYear: 2024, email: 'myra.verma@email.com', phone: '9876543219', gender: 'Female', address: 'Bilaspur, CG' },
  { name: 'Aadhya Shah', id: '202511', branch: 'ME', year: 4, attendance: 95, avatar: 'https://i.pravatar.cc/100?img=24', admissionYear: 2021, email: 'aadhya.shah@email.com', phone: '9876543220', gender: 'Female', address: 'Raipur, CG' },
  { name: 'Anika Rao', id: '202512', branch: 'CSE', year: 2, attendance: 97, avatar: 'https://i.pravatar.cc/100?img=25', admissionYear: 2023, email: 'anika.rao@email.com', phone: '9876543221', gender: 'Female', address: 'Bilaspur, CG' },
  { name: 'Sara Pillai', id: '202513', branch: 'CSE', year: 3, attendance: 92, avatar: 'https://i.pravatar.cc/100?img=26', admissionYear: 2022, email: 'sara.pillai@email.com', phone: '9876543222', gender: 'Female', address: 'Durg, CG' },
  { name: 'Pari Desai', id: '202514', branch: 'ECE', year: 1, attendance: 98, avatar: 'https://i.pravatar.cc/100?img=27', admissionYear: 2024, email: 'pari.desai@email.com', phone: '9876543223', gender: 'Female', address: 'Raigarh, CG' },
  { name: 'Ira Menon', id: '202515', branch: 'ME', year: 2, attendance: 90, avatar: 'https://i.pravatar.cc/100?img=28', admissionYear: 2023, email: 'ira.menon@email.com', phone: '9876543224', gender: 'Female', address: 'Korba, CG' },
  { name: 'Saanvi Iyer', id: '202516', branch: 'CSE', year: 4, attendance: 93, avatar: 'https://i.pravatar.cc/100?img=29', admissionYear: 2021, email: 'saanvi.iyer@email.com', phone: '9876543225', gender: 'Female', address: 'Bilaspur, CG' },
  { name: 'Navya Shetty', id: '202517', branch: 'CSE', year: 2, attendance: 96, avatar: 'https://i.pravatar.cc/100?img=30', admissionYear: 2023, email: 'navya.shetty@email.com', phone: '9876543226', gender: 'Female', address: 'Raipur, CG' },
  { name: 'Aarohi Kulkarni', id: '202518', branch: 'ECE', year: 3, attendance: 94, avatar: 'https://i.pravatar.cc/100?img=31', admissionYear: 2022, email: 'aarohi.kulkarni@email.com', phone: '9876543227', gender: 'Female', address: 'Durg, CG' },
  { name: 'Ishita Ghosh', id: '202519', branch: 'CSE', year: 2, attendance: 91, avatar: 'https://i.pravatar.cc/100?img=32', admissionYear: 2023, email: 'ishita.ghosh@email.com', phone: '9876543228', gender: 'Female', address: 'Bilaspur, CG' },
  { name: 'Meera Dutta', id: '202520', branch: 'ME', year: 1, attendance: 99, avatar: 'https://i.pravatar.cc/100?img=33', admissionYear: 2024, email: 'meera.dutta@email.com', phone: '9876543229', gender: 'Female', address: 'Raigarh, CG' },
  { name: 'Prisha Paul', id: '202521', branch: 'CSE', year: 4, attendance: 95, avatar: 'https://i.pravatar.cc/100?img=34', admissionYear: 2021, email: 'prisha.paul@email.com', phone: '9876543230', gender: 'Female', address: 'Korba, CG' },
  { name: 'Riya Sengupta', id: '202522', branch: 'ECE', year: 2, attendance: 97, avatar: 'https://i.pravatar.cc/100?img=35', admissionYear: 2023, email: 'riya.sengupta@email.com', phone: '9876543231', gender: 'Female', address: 'Bilaspur, CG' },
  { name: 'Aanya Bhatt', id: '202523', branch: 'ME', year: 3, attendance: 92, avatar: 'https://i.pravatar.cc/100?img=36', admissionYear: 2022, email: 'aanya.bhatt@email.com', phone: '9876543232', gender: 'Female', address: 'Raipur, CG' },
  { name: 'Advait Chauhan', id: '202524', branch: 'CSE', year: 1, attendance: 98, avatar: 'https://i.pravatar.cc/100?img=37', admissionYear: 2024, email: 'advait.chauhan@email.com', phone: '9876543233', gender: 'Male', address: 'Durg, CG' },
  { name: 'Atharv Yadav', id: '202525', branch: 'CSE', year: 2, attendance: 90, avatar: 'https://i.pravatar.cc/100?img=38', admissionYear: 2023, email: 'atharv.yadav@email.com', phone: '9876543234', gender: 'Male', address: 'Bilaspur, CG' },
  { name: 'Aryan Pandey', id: '202526', branch: 'ECE', year: 4, attendance: 93, avatar: 'https://i.pravatar.cc/100?img=39', admissionYear: 2021, email: 'aryan.pandey@email.com', phone: '9876543235', gender: 'Male', address: 'Raipur, CG' },
  { name: 'Laksh Jain', id: '202527', branch: 'ME', year: 2, attendance: 96, avatar: 'https://i.pravatar.cc/100?img=40', admissionYear: 2023, email: 'laksh.jain@email.com', phone: '9876543236', gender: 'Male', address: 'Durg, CG' },
  { name: 'Samarth Tripathi', id: '202528', branch: 'CSE', year: 3, attendance: 94, avatar: 'https://i.pravatar.cc/100?img=41', admissionYear: 2022, email: 'samarth.tripathi@email.com', phone: '9876543237', gender: 'Male', address: 'Bilaspur, CG' },
  { name: 'Shaurya Dubey', id: '202529', branch: 'CSE', year: 2, attendance: 91, avatar: 'https://i.pravatar.cc/100?img=42', admissionYear: 2023, email: 'shaurya.dubey@email.com', phone: '9876543238', gender: 'Male', address: 'Raigarh, CG' },
  { name: 'Tanishq Saxena', id: '202530', branch: 'ECE', year: 1, attendance: 99, avatar: 'https://i.pravatar.cc/100?img=43', admissionYear: 2024, email: 'tanishq.saxena@email.com', phone: '9876543239', gender: 'Male', address: 'Korba, CG' },
  // 20 more students for a total of 50
  { name: 'Ishaan Sinha', id: '202531', branch: 'CSE', year: 3, attendance: 93, avatar: 'https://i.pravatar.cc/100?img=44', admissionYear: 2022, email: 'ishaan.sinha@email.com', phone: '9876543240', gender: 'Male', address: 'Bilaspur, CG' },
  { name: 'Jiya Kapoor', id: '202532', branch: 'ECE', year: 2, attendance: 97, avatar: 'https://i.pravatar.cc/100?img=45', admissionYear: 2023, email: 'jiya.kapoor@email.com', phone: '9876543241', gender: 'Female', address: 'Raipur, CG' },
  { name: 'Kavya Nair', id: '202533', branch: 'ME', year: 1, attendance: 95, avatar: 'https://i.pravatar.cc/100?img=46', admissionYear: 2024, email: 'kavya.nair@email.com', phone: '9876543242', gender: 'Female', address: 'Durg, CG' },
  { name: 'Mihir Joshi', id: '202534', branch: 'CSE', year: 4, attendance: 92, avatar: 'https://i.pravatar.cc/100?img=47', admissionYear: 2021, email: 'mihir.joshi@email.com', phone: '9876543243', gender: 'Male', address: 'Raigarh, CG' },
  { name: 'Naman Mehta', id: '202535', branch: 'ECE', year: 3, attendance: 98, avatar: 'https://i.pravatar.cc/100?img=48', admissionYear: 2022, email: 'naman.mehta@email.com', phone: '9876543244', gender: 'Male', address: 'Korba, CG' },
  { name: 'Ojasvi Rathi', id: '202536', branch: 'ME', year: 2, attendance: 90, avatar: 'https://i.pravatar.cc/100?img=49', admissionYear: 2023, email: 'ojasvi.rathi@email.com', phone: '9876543245', gender: 'Female', address: 'Bilaspur, CG' },
  { name: 'Pranav Deshmukh', id: '202537', branch: 'CSE', year: 1, attendance: 99, avatar: 'https://i.pravatar.cc/100?img=50', admissionYear: 2024, email: 'pranav.deshmukh@email.com', phone: '9876543246', gender: 'Male', address: 'Raipur, CG' },
  { name: 'Rachit Agarwal', id: '202538', branch: 'CSE', year: 3, attendance: 94, avatar: 'https://i.pravatar.cc/100?img=51', admissionYear: 2022, email: 'rachit.agarwal@email.com', phone: '9876543247', gender: 'Male', address: 'Durg, CG' },
  { name: 'Saanvi Chawla', id: '202539', branch: 'ECE', year: 2, attendance: 96, avatar: 'https://i.pravatar.cc/100?img=52', admissionYear: 2023, email: 'saanvi.chawla@email.com', phone: '9876543248', gender: 'Female', address: 'Bilaspur, CG' },
  { name: 'Tanvi Bhatia', id: '202540', branch: 'ME', year: 1, attendance: 95, avatar: 'https://i.pravatar.cc/100?img=53', admissionYear: 2024, email: 'tanvi.bhatia@email.com', phone: '9876543249', gender: 'Female', address: 'Raigarh, CG' },
  { name: 'Utkarsh Soni', id: '202541', branch: 'CSE', year: 4, attendance: 92, avatar: 'https://i.pravatar.cc/100?img=54', admissionYear: 2021, email: 'utkarsh.soni@email.com', phone: '9876543250', gender: 'Male', address: 'Korba, CG' },
  { name: 'Vanya Dubey', id: '202542', branch: 'ECE', year: 3, attendance: 98, avatar: 'https://i.pravatar.cc/100?img=55', admissionYear: 2022, email: 'vanya.dubey@email.com', phone: '9876543251', gender: 'Female', address: 'Bilaspur, CG' },
  { name: 'Yuvraj Singh', id: '202543', branch: 'ME', year: 2, attendance: 90, avatar: 'https://i.pravatar.cc/100?img=56', admissionYear: 2023, email: 'yuvraj.singh@email.com', phone: '9876543252', gender: 'Male', address: 'Raipur, CG' },
  { name: 'Zara Khan', id: '202544', branch: 'CSE', year: 1, attendance: 99, avatar: 'https://i.pravatar.cc/100?img=57', admissionYear: 2024, email: 'zara.khan@email.com', phone: '9876543253', gender: 'Female', address: 'Durg, CG' },
  { name: 'Ayaan Jain', id: '202545', branch: 'CSE', year: 3, attendance: 94, avatar: 'https://i.pravatar.cc/100?img=58', admissionYear: 2022, email: 'ayaan.jain@email.com', phone: '9876543254', gender: 'Male', address: 'Bilaspur, CG' },
  { name: 'Bhavya Patel', id: '202546', branch: 'ECE', year: 2, attendance: 96, avatar: 'https://i.pravatar.cc/100?img=59', admissionYear: 2023, email: 'bhavya.patel@email.com', phone: '9876543255', gender: 'Female', address: 'Raipur, CG' },
  { name: 'Charvi Mehra', id: '202547', branch: 'ME', year: 1, attendance: 95, avatar: 'https://i.pravatar.cc/100?img=60', admissionYear: 2024, email: 'charvi.mehra@email.com', phone: '9876543256', gender: 'Female', address: 'Durg, CG' },
  { name: 'Devansh Sahu', id: '202548', branch: 'CSE', year: 4, attendance: 92, avatar: 'https://i.pravatar.cc/100?img=61', admissionYear: 2021, email: 'devansh.sahu@email.com', phone: '9876543257', gender: 'Male', address: 'Raigarh, CG' },
  { name: 'Esha Reddy', id: '202549', branch: 'ECE', year: 3, attendance: 98, avatar: 'https://i.pravatar.cc/100?img=62', admissionYear: 2022, email: 'esha.reddy@email.com', phone: '9876543258', gender: 'Female', address: 'Korba, CG' },
  { name: 'Farhan Ali', id: '202550', branch: 'ME', year: 2, attendance: 90, avatar: 'https://i.pravatar.cc/100?img=63', admissionYear: 2023, email: 'farhan.ali@email.com', phone: '9876543259', gender: 'Male', address: 'Bilaspur, CG' },
];

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
}


export default function StudentsPage() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(dummyStudents[0]);
  const students = dummyStudents.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-2 py-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Students</h2>
        <input
          type="text"
          placeholder="Search by name or ID..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
      </div>
      <div className="flex gap-6">
        {/* Side panel */}

        {/* Students table */}
        <div className="flex-1 overflow-x-auto bg-white rounded-xl shadow border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {students.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center text-gray-400 text-lg py-10">No students found.</td>
                </tr>
              )}
              {students.map((student) => (
                <tr key={student.id} className={
                  "hover:bg-blue-50 transition cursor-pointer " +
                  (selected.id === student.id ? 'bg-blue-50' : '')
                }
                  onClick={() => setSelected(student)}
                >
                  <td className="px-6 py-3">
                    {student.avatar ? (
                      <img src={student.avatar} alt={student.name} className="w-10 h-10 rounded-full border-2 border-blue-100 object-cover" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-base border-2 border-blue-100">
                        {getInitials(student.name)}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-3 font-semibold text-gray-900">{student.name}</td>
                  <td className="px-6 py-3 text-gray-700">{student.id}</td>
                  <td className="px-6 py-3 text-blue-600 font-medium">{student.branch}</td>
                  <td className="px-6 py-3">{student.year}</td>
                  <td className="px-6 py-3">
                    <span className={
                      student.attendance >= 95 ? 'text-green-600 font-bold' :
                      student.attendance >= 90 ? 'text-yellow-600 font-bold' :
                      'text-red-600 font-bold'
                    }>
                      {student.attendance}%
                    </span>
                  </td>
                  <td className="px-6 py-3">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs font-semibold mr-2">View</button>
                    <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-xs font-semibold">Message</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          <div className="lg:w-1/3 w-full h-1/2 bg-white rounded-xl shadow border border-gray-200 p-6 flex flex-col items-center mb-4 lg:mb-0">
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
          <div className="text-blue-600 text-sm font-medium mb-1">Branch: {selected.branch}</div>
          <div className="text-gray-700 text-sm mb-1">Year: {selected.year}</div>
          <div className="text-gray-700 text-sm mb-1">Admission Year: {selected.admissionYear || 'N/A'}</div>
          <div className="text-gray-700 text-sm mb-1">Gender: {selected.gender || 'N/A'}</div>
          <div className="text-gray-700 text-sm mb-1">Email: <span className="text-blue-700">{selected.email || 'N/A'}</span></div>
          <div className="text-gray-700 text-sm mb-1">Phone: <span className="text-blue-700">{selected.phone || 'N/A'}</span></div>
          <div className="text-gray-700 text-sm mb-1">Address: {selected.address || 'N/A'}</div>
          <div className="text-sm mb-4">
            Attendance: <span className={
              selected.attendance >= 95 ? 'text-green-600 font-bold' :
              selected.attendance >= 90 ? 'text-yellow-600 font-bold' :
              'text-red-600 font-bold'
            }>{selected.attendance}%</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs font-semibold">Edit</button>
            <button className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-xs font-semibold">Message</button>
            <button className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-xs font-semibold">Download</button>
            <button className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-xs font-semibold">Print</button>
          </div>
        </div>
      </div>
    </div>
  );
}
