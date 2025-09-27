import { admissions } from '../data/admissions';

export default function AdmissionsPage() {
  return (
  <div className="min-h-screen bg-gray-50 px-2 py-2">
      <h2 className="text-2xl font-bold mb-6">Admissions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-[500px] w-full bg-white rounded-xl shadow text-left">
          <thead className="bg-blue-50">
            <tr>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Year</th>
              <th className="py-2 px-4">Branch</th>
            </tr>
          </thead>
          <tbody>
            {admissions.map(a => (
              <tr key={a.id} className="border-b last:border-b-0">
                <td className="py-2 px-4">{a.id}</td>
                <td className="py-2 px-4">{a.name}</td>
                <td className="py-2 px-4">{a.status}</td>
                <td className="py-2 px-4">{a.year}</td>
                <td className="py-2 px-4">{a.branch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
