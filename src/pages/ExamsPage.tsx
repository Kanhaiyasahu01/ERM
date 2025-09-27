import { exams, results } from '../data/exams';
import { studentUsers } from '../data/users';

export default function ExamsPage() {
  return (
  <div className="min-h-screen bg-gray-50 px-2 py-2">
      <h2 className="text-2xl font-bold mb-6">Exams</h2>
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Exam Schedules</h3>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full bg-white rounded-xl shadow text-left">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Branch</th>
                <th className="py-2 px-4">Year</th>
              </tr>
            </thead>
            <tbody>
              {exams.map(e => (
                <tr key={e.id} className="border-b last:border-b-0">
                  <td className="py-2 px-4">{e.name}</td>
                  <td className="py-2 px-4">{e.date}</td>
                  <td className="py-2 px-4">{e.branch}</td>
                  <td className="py-2 px-4">{e.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Results</h3>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full bg-white rounded-xl shadow text-left">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-2 px-4">Student</th>
                <th className="py-2 px-4">Exam</th>
                <th className="py-2 px-4">Marks</th>
              </tr>
            </thead>
            <tbody>
              {results.map(r => {
                const student = studentUsers.find(s => s.id === r.studentId);
                const exam = exams.find(e => e.id === r.examId);
                return (
                  <tr key={r.studentId + r.examId} className="border-b last:border-b-0">
                    <td className="py-2 px-4">{student?.name}</td>
                    <td className="py-2 px-4">{exam?.name}</td>
                    <td className="py-2 px-4">{r.marks}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
