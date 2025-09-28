
const dummyFees = [
  { id: '202501', name: 'Aarav Sharma', branch: 'CSE', year: 2, status: 'Paid', amount: 50000, date: '2025-07-10', receipt: 'R-1001', mode: 'Online' },
  { id: '202502', name: 'Priya Singh', branch: 'ECE', year: 1, status: 'Pending', amount: 50000, date: '-', receipt: '', mode: '' },
  { id: '202503', name: 'Rahul Gupta', branch: 'ME', year: 3, status: 'Paid', amount: 50000, date: '2025-07-12', receipt: 'R-1002', mode: 'Cash' },
  { id: '202504', name: 'Anaya Jain', branch: 'CSE', year: 2, status: 'Paid', amount: 50000, date: '2025-07-11', receipt: 'R-1003', mode: 'Online' },
  { id: '202505', name: 'Vivaan Patel', branch: 'CSE', year: 1, status: 'Pending', amount: 50000, date: '-', receipt: '', mode: '' },
  { id: '202506', name: 'Diya Agarwal', branch: 'ECE', year: 4, status: 'Paid', amount: 50000, date: '2025-07-13', receipt: 'R-1004', mode: 'Online' },
  { id: '202507', name: 'Kabir Bansal', branch: 'ME', year: 2, status: 'Paid', amount: 50000, date: '2025-07-14', receipt: 'R-1005', mode: 'Cash' },
  { id: '202508', name: 'Rudra Kapoor', branch: 'CSE', year: 3, status: 'Paid', amount: 50000, date: '2025-07-15', receipt: 'R-1006', mode: 'Online' },
  { id: '202509', name: 'Yash Malhotra', branch: 'CSE', year: 2, status: 'Paid', amount: 50000, date: '2025-07-16', receipt: 'R-1007', mode: 'Online' },
  { id: '202510', name: 'Myra Verma', branch: 'ECE', year: 1, status: 'Paid', amount: 50000, date: '2025-07-17', receipt: 'R-1008', mode: 'Cash' },
];

export default function FeeManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-8">
        <h2 className="text-3xl font-extrabold mb-4">Fee Management</h2>
        <p className="text-gray-700 mb-6">
          The fee management module automates digital fee collection, generates instant receipts, and logs every transaction in the central database. Students and staff can track payment status in real time, and administrators can view summary dashboards for collections and dues.
        </p>
        <table className="w-full mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-3 text-left">Student</th>
              <th className="py-2 px-3 text-left">Branch</th>
              <th className="py-2 px-3 text-left">Year</th>
              <th className="py-2 px-3 text-left">Amount</th>
              <th className="py-2 px-3 text-left">Status</th>
              <th className="py-2 px-3 text-left">Date</th>
              <th className="py-2 px-3 text-left">Receipt</th>
              <th className="py-2 px-3 text-left">Mode</th>
            </tr>
          </thead>
          <tbody>
            {dummyFees.map(fee => (
              <tr key={fee.id} className="border-b last:border-b-0">
                <td className="py-2 px-3 font-semibold text-gray-900">{fee.name}</td>
                <td className="py-2 px-3">{fee.branch}</td>
                <td className="py-2 px-3">{fee.year}</td>
                <td className="py-2 px-3">₹{fee.amount.toLocaleString()}</td>
                <td className="py-2 px-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${fee.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{fee.status}</span>
                </td>
                <td className="py-2 px-3">{fee.date}</td>
                <td className="py-2 px-3">{fee.receipt}</td>
                <td className="py-2 px-3">{fee.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-blue-50 p-6 rounded-xl mb-6">
          <h3 className="font-semibold mb-2">How It Works</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Students pay fees online or at the counter</li>
            <li>Receipts are generated and emailed automatically</li>
            <li>All transactions are logged in the central database</li>
            <li>Admins can view real-time collection and pending dues</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl">
          <h3 className="font-semibold mb-2">Fee Payment (Demo)</h3>
          <form className="flex flex-col gap-3">
            <input className="border rounded px-3 py-2" placeholder="Student ID" disabled />
            <input className="border rounded px-3 py-2" placeholder="Amount" disabled />
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-fit" disabled>Pay Now (Demo)</button>
          </form>
        </div>
      </div>
    </div>
  );
}
