
import { useState } from 'react';

const dummyTransactions = [
  { id: 1, student: 'Amit Sharma', date: '2025-08-01', amount: 20000, status: 'Paid', receipt: 'RCPT20250801' },
  { id: 2, student: 'Priya Singh', date: '2025-09-01', amount: 20000, status: 'Pending', receipt: null },
  { id: 3, student: 'Rohan Mehta', date: '2025-09-05', amount: 18000, status: 'Paid', receipt: 'RCPT20250905' },
];

export default function FinancePage() {
  const [transactions,] = useState(dummyTransactions);
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? transactions : transactions.filter(t => t.status === filter);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Fee Management</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          <button className={`px-4 py-1 rounded ${filter==='All'?'bg-blue-600 text-white':'bg-gray-200 text-gray-700'}`} onClick={()=>setFilter('All')}>All</button>
          <button className={`px-4 py-1 rounded ${filter==='Paid'?'bg-green-600 text-white':'bg-gray-200 text-gray-700'}`} onClick={()=>setFilter('Paid')}>Paid</button>
          <button className={`px-4 py-1 rounded ${filter==='Pending'?'bg-yellow-600 text-white':'bg-gray-200 text-gray-700'}`} onClick={()=>setFilter('Pending')}>Pending</button>
        </div>
        <table className="w-full mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-3 text-left">Student</th>
              <th className="py-2 px-3 text-left">Date</th>
              <th className="py-2 px-3 text-left">Amount</th>
              <th className="py-2 px-3 text-left">Status</th>
              <th className="py-2 px-3 text-left">Receipt</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr><td colSpan={5} className="text-center text-gray-400 text-lg py-10">No records found.</td></tr>
            )}
            {filtered.map(tx => (
              <tr key={tx.id} className="border-b last:border-b-0">
                <td className="py-2 px-3">{tx.student}</td>
                <td className="py-2 px-3">{tx.date}</td>
                <td className="py-2 px-3">₹{tx.amount}</td>
                <td className="py-2 px-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${tx.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{tx.status}</span>
                </td>
                <td className="py-2 px-3">
                  {tx.status === 'Paid' && tx.receipt ? (
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
          <h3 className="font-semibold mb-2">Add Payment (Demo Form)</h3>
          <form className="flex flex-col gap-3">
            <input className="border rounded px-3 py-2" placeholder="Student Name" disabled />
            <input className="border rounded px-3 py-2" placeholder="Amount" disabled />
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-fit" disabled>Add Payment (Demo)</button>
          </form>
        </div>
      </div>
    </div>
  );
}
