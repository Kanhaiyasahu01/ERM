

const dummyHostel = {
  room: 'A-101',
  status: 'Allocated',
  warden: 'Mr. Verma',
  feeStatus: 'Paid',
  block: 'Block A',
  bed: 'Single',
  joinDate: '2025-08-01',
};

export default function HostelPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Hostel Information</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="font-semibold text-gray-700">Room:</div>
          <div>{dummyHostel.room}</div>
          <div className="font-semibold text-gray-700">Block:</div>
          <div>{dummyHostel.block}</div>
          <div className="font-semibold text-gray-700">Bed Type:</div>
          <div>{dummyHostel.bed}</div>
          <div className="font-semibold text-gray-700">Status:</div>
          <div><span className={`px-2 py-1 rounded text-xs font-semibold ${dummyHostel.status === 'Allocated' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{dummyHostel.status}</span></div>
          <div className="font-semibold text-gray-700">Warden:</div>
          <div>{dummyHostel.warden}</div>
          <div className="font-semibold text-gray-700">Hostel Fee:</div>
          <div><span className={`px-2 py-1 rounded text-xs font-semibold ${dummyHostel.feeStatus === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{dummyHostel.feeStatus}</span></div>
          <div className="font-semibold text-gray-700">Join Date:</div>
          <div>{dummyHostel.joinDate}</div>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Download Allocation Letter</button>
      </div>
    </div>
  );
}
