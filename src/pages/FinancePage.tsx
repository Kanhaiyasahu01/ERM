import React from 'react';
import './FinancePage.css';

const dummyTransactions = [
  { id: 1, student: 'Amit Sharma', date: '2025-08-01', amount: 20000, status: 'Paid' },
  { id: 2, student: 'Priya Singh', date: '2025-09-01', amount: 20000, status: 'Pending' },
];

const FinancePage = () => (
  <div className="finance-page">
    <h2>Fee Records</h2>
    <table>
      <thead>
        <tr>
          <th>Student</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {dummyTransactions.map(tx => (
          <tr key={tx.id}>
            <td>{tx.student}</td>
            <td>{tx.date}</td>
            <td>₹{tx.amount}</td>
            <td>{tx.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default FinancePage;
