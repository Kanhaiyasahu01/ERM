export default function StaffPage() {
  return (
  <div className="min-h-screen bg-gray-50 px-2 py-2">
      <h2 className="text-2xl font-bold mb-6">Staff Members</h2>
      <div className="flex flex-wrap gap-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-5 flex items-center min-w-[260px] w-full sm:w-auto">
            <img src={`https://i.pravatar.cc/100?img=${i+15}`} alt="Staff" className="w-14 h-14 rounded-full mr-4 border-2 border-blue-100" />
            <div>
              <div className="font-semibold text-lg">Staff {i+1}</div>
              <div className="text-gray-500 text-sm">ID: ST{i+1}</div>
              <div className="text-blue-600 text-xs font-medium">Role: Professor</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
