import React from 'react';
import './FeesPage.css';

const dummyFees = [
  { id: 1, date: '2025-08-01', amount: 20000, status: 'Paid', receipt: 'RCPT20250801' },
  { id: 2, date: '2025-09-01', amount: 20000, status: 'Pending', receipt: null },
];

const FeesPage = () => (
  <div className="fees-page">
    <h2>My Fees</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Receipt</th>
        </tr>
      </thead>
      <tbody>
        {dummyFees.map(fee => (
          <tr key={fee.id}>
            <td>{fee.date}</td>
            <td>₹{fee.amount}</td>
            <td>{fee.status}</td>
            <td>
              {fee.status === 'Paid' ? (
                <button onClick={() => alert('Download simulated!')}>Download</button>
              ) : (
                '—'
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default FeesPage;
