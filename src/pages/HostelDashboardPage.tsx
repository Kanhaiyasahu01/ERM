
import  { useState } from 'react';

const dummyRooms = [
  { room: 'A-101', occupant: 'Amit Sharma', status: 'Occupied' },
  { room: 'A-102', occupant: '', status: 'Available' },
  { room: 'A-103', occupant: 'Priya Singh', status: 'Occupied' },
  { room: 'A-104', occupant: '', status: 'Available' },
  { room: 'A-105', occupant: '', status: 'Available' },
];

export default function HostelDashboardPage() {
  const [rooms, setRooms] = useState(dummyRooms);

  const allocateRoom = (index: number) => {
    const name = prompt('Enter student name to allocate:');
    if (name) {
      const updated = rooms.map((r, i) => i === index ? { ...r, occupant: name, status: 'Occupied' } : r);
      setRooms(updated);
    }
  };

  const occupied = rooms.filter(r => r.status === 'Occupied').length;
  const available = rooms.length - occupied;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Hostel Room Allocations</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-lg font-semibold text-green-700">Occupied</div>
            <div className="text-2xl font-bold text-green-900">{occupied}</div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4 text-center">
            <div className="text-lg font-semibold text-yellow-700">Available</div>
            <div className="text-2xl font-bold text-yellow-900">{available}</div>
          </div>
        </div>
        <table className="w-full mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-3 text-left">Room</th>
              <th className="py-2 px-3 text-left">Occupant</th>
              <th className="py-2 px-3 text-left">Status</th>
              <th className="py-2 px-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, idx) => (
              <tr key={room.room} className="border-b last:border-b-0">
                <td className="py-2 px-3">{room.room}</td>
                <td className="py-2 px-3">{room.occupant || '—'}</td>
                <td className="py-2 px-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${room.status === 'Occupied' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{room.status}</span>
                </td>
                <td className="py-2 px-3">
                  {room.status === 'Available' && (
                    <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => allocateRoom(idx)}>Allocate</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-gray-50 p-4 rounded-xl">
          <h3 className="font-semibold mb-2">Add Room (Demo Form)</h3>
          <form className="flex flex-col gap-3">
            <input className="border rounded px-3 py-2" placeholder="Room Number" disabled />
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-fit" disabled>Add Room (Demo)</button>
          </form>
        </div>
      </div>
    </div>
  );
}
