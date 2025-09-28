import { useState } from 'react';

const examRecords = [
  { id: 1, student: 'Amit Sharma', roll: '2023001', subject: 'Mathematics', date: '2025-09-10', score: 92, grade: 'A' },
  { id: 2, student: 'Priya Verma', roll: '2023002', subject: 'Physics', date: '2025-09-12', score: 88, grade: 'A' },
  { id: 3, student: 'Rahul Singh', roll: '2023003', subject: 'Chemistry', date: '2025-09-14', score: 76, grade: 'B' },
  { id: 4, student: 'Sneha Patel', roll: '2023004', subject: 'English', date: '2025-09-16', score: 81, grade: 'A' },
  { id: 5, student: 'Vikas Kumar', roll: '2023005', subject: 'Computer Science', date: '2025-09-18', score: 95, grade: 'A+' },
];

export default function ExaminationRecordsPage() {
  const [search, setSearch] = useState('');
  const filtered = examRecords.filter(r =>
    r.student.toLowerCase().includes(search.toLowerCase()) ||
    r.subject.toLowerCase().includes(search.toLowerCase()) ||
    r.roll.includes(search)
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Examination Records</h2>
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <input
              type="text"
              placeholder="Search by student, subject, or roll no..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full md:w-72 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold text-sm shadow hover:bg-blue-700 transition">Export Records</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-2 font-semibold text-gray-700 border-b">Student</th>
                  <th className="px-4 py-2 font-semibold text-gray-700 border-b">Roll No</th>
                  <th className="px-4 py-2 font-semibold text-gray-700 border-b">Subject</th>
                  <th className="px-4 py-2 font-semibold text-gray-700 border-b">Exam Date</th>
                  <th className="px-4 py-2 font-semibold text-gray-700 border-b">Score</th>
                  <th className="px-4 py-2 font-semibold text-gray-700 border-b">Grade</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(r => (
                  <tr key={r.id} className="border-b hover:bg-blue-50">
                    <td className="px-4 py-2">{r.student}</td>
                    <td className="px-4 py-2">{r.roll}</td>
                    <td className="px-4 py-2">{r.subject}</td>
                    <td className="px-4 py-2">{r.date}</td>
                    <td className="px-4 py-2">{r.score}</td>
                    <td className="px-4 py-2 font-bold text-green-600">{r.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Search, filter, and export examination records</li>
            <li>View student-wise and subject-wise performance</li>
            <li>Modern, responsive table with grade highlights</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
