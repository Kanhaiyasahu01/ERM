import { courses, subjects, classSchedules } from '../data/academics';

export default function AcademicsPage() {
  return (
  <div className="min-h-screen bg-gray-50 px-2 py-2">
      <h2 className="text-2xl font-bold mb-6">Academics</h2>
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Courses</h3>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full bg-white rounded-xl shadow text-left">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-2 px-4">Code</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Branch</th>
                <th className="py-2 px-4">Year</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(c => (
                <tr key={c.code} className="border-b last:border-b-0">
                  <td className="py-2 px-4">{c.code}</td>
                  <td className="py-2 px-4">{c.name}</td>
                  <td className="py-2 px-4">{c.branch}</td>
                  <td className="py-2 px-4">{c.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Subjects</h3>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full bg-white rounded-xl shadow text-left">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-2 px-4">Code</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Branch</th>
                <th className="py-2 px-4">Year</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map(s => (
                <tr key={s.code} className="border-b last:border-b-0">
                  <td className="py-2 px-4">{s.code}</td>
                  <td className="py-2 px-4">{s.name}</td>
                  <td className="py-2 px-4">{s.branch}</td>
                  <td className="py-2 px-4">{s.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Class Schedules</h3>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full bg-white rounded-xl shadow text-left">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-2 px-4">Branch</th>
                <th className="py-2 px-4">Year</th>
                <th className="py-2 px-4">Day</th>
                <th className="py-2 px-4">Subject</th>
                <th className="py-2 px-4">Time</th>
              </tr>
            </thead>
            <tbody>
              {classSchedules.map((cs, i) => (
                <tr key={i} className="border-b last:border-b-0">
                  <td className="py-2 px-4">{cs.branch}</td>
                  <td className="py-2 px-4">{cs.year}</td>
                  <td className="py-2 px-4">{cs.day}</td>
                  <td className="py-2 px-4">{cs.subject}</td>
                  <td className="py-2 px-4">{cs.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
