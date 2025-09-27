export default function StudentsPage() {
  return (
  <div className="min-h-screen bg-gray-50 px-2 py-2">
      <h2 className="text-2xl font-bold mb-6">Students</h2>
      <div className="flex flex-wrap gap-6">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-5 flex items-center min-w-[260px] w-full sm:w-auto">
            <img src={`https://i.pravatar.cc/100?img=${i+4}`} alt="Student" className="w-14 h-14 rounded-full mr-4 border-2 border-blue-100" />
            <div>
              <div className="font-semibold text-lg">Student {i+1}</div>
              <div className="text-gray-500 text-sm">ID: 2025{i+1}</div>
              <div className="text-blue-600 text-xs font-medium">Branch: CSE</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
