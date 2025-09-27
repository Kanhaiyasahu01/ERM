import React, { useState } from 'react';
import './HostelDashboardPage.css';

const dummyRooms = [
  { room: 'A-101', occupant: 'Amit Sharma', status: 'Occupied' },
  { room: 'A-102', occupant: '', status: 'Available' },
  { room: 'A-103', occupant: 'Priya Singh', status: 'Occupied' },
];

const HostelDashboardPage = () => {
  const [rooms, setRooms] = useState(dummyRooms);

  const allocateRoom = (index: number) => {
    const name = prompt('Enter student name to allocate:');
    if (name) {
      const updated = rooms.map((r, i) => i === index ? { ...r, occupant: name, status: 'Occupied' } : r);
      setRooms(updated);
    }
  };

  return (
    <div className="hostel-dashboard-page">
      <h2>Hostel Room Allocations</h2>
      <table>
        <thead>
          <tr>
            <th>Room</th>
            <th>Occupant</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, idx) => (
            <tr key={room.room}>
              <td>{room.room}</td>
              <td>{room.occupant || '—'}</td>
              <td>{room.status}</td>
              <td>
                {room.status === 'Available' && (
                  <button onClick={() => allocateRoom(idx)}>Allocate</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HostelDashboardPage;
