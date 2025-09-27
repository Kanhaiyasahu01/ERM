import React from 'react';
import './HostelPage.css';

const dummyHostel = {
  room: 'A-101',
  status: 'Allocated',
  warden: 'Mr. Verma',
  feeStatus: 'Paid',
};

const HostelPage = () => (
  <div className="hostel-page">
    <h2>Hostel Information</h2>
    <ul>
      <li><strong>Room:</strong> {dummyHostel.room}</li>
      <li><strong>Status:</strong> {dummyHostel.status}</li>
      <li><strong>Warden:</strong> {dummyHostel.warden}</li>
      <li><strong>Hostel Fee:</strong> {dummyHostel.feeStatus}</li>
    </ul>
  </div>
);

export default HostelPage;
