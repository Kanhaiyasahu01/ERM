

const dummyFees = [
  { id: 1, date: '2025-08-01', amount: 20000, status: 'Paid', receipt: 'RCPT20250801' },
  { id: 2, date: '2025-09-01', amount: 20000, status: 'Pending', receipt: null },
  { id: 3, date: '2025-10-01', amount: 20000, status: 'Pending', receipt: null },
];

const totalPaid = dummyFees.filter(f => f.status === 'Paid').reduce((sum, f) => sum + f.amount, 0);
const totalPending = dummyFees.filter(f => f.status === 'Pending').reduce((sum, f) => sum + f.amount, 0);

export default function FeesPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">My Fees</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-lg font-semibold text-green-700">Total Paid</div>
            <div className="text-2xl font-bold text-green-900">₹{totalPaid.toLocaleString()}</div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4 text-center">
            <div className="text-lg font-semibold text-yellow-700">Total Pending</div>
            <div className="text-2xl font-bold text-yellow-900">₹{totalPending.toLocaleString()}</div>
          </div>
        </div>
        <table className="w-full mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-3 text-left">Date</th>
              <th className="py-2 px-3 text-left">Amount</th>
              <th className="py-2 px-3 text-left">Status</th>
              <th className="py-2 px-3 text-left">Receipt</th>
            </tr>
          </thead>
          <tbody>
            {dummyFees.map(fee => (
              <tr key={fee.id} className="border-b last:border-b-0">
                <td className="py-2 px-3">{fee.date}</td>
                <td className="py-2 px-3">₹{fee.amount}</td>
                <td className="py-2 px-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${fee.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{fee.status}</span>
                </td>
                <td className="py-2 px-3">
                  {fee.status === 'Paid' && fee.receipt ? (
                    <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={()=>alert('Download simulated!')}>Download</button>
                  ) : (
                    '—'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-gray-50 p-4 rounded-xl">
          <h3 className="font-semibold mb-2">Pay Fees (Demo Form)</h3>
          <form className="flex flex-col gap-3">
            <input className="border rounded px-3 py-2" placeholder="Amount" disabled />
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-fit" disabled>Pay Now (Demo)</button>
          </form>
        </div>
      </div>
    </div>
  );
}
