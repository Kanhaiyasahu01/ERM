import { exams, results } from '../data/exams';
import { studentUsers } from '../data/users';
import { useState } from 'react';

export default function ExamsPage() {
  const [search, setSearch] = useState('');
  const [selectedExam, setSelectedExam] = useState(exams[0]);

  const filteredExams = exams.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.course?.toLowerCase().includes(search.toLowerCase()) ||
    e.branch.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-2 py-2">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Exams</h2>
        <input
          type="text"
          placeholder="Search exams..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Detail card */}
        <div className="lg:w-1/3 w-full flex flex-col items-center mb-4 lg:mb-0">
          <div className="w-full max-w-xs bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center">
            <div className="text-2xl font-extrabold text-blue-700 mb-2">{selectedExam.name}</div>
            <div className="text-gray-500 text-base mb-1">Type: <span className="font-semibold text-gray-700">{selectedExam.type}</span></div>
            <div className="text-blue-600 text-base font-medium mb-1">Course: {selectedExam.course}</div>
            <div className="text-gray-700 text-base mb-1">Branch: {selectedExam.branch}</div>
            <div className="text-gray-700 text-base mb-1">Year: {selectedExam.year}</div>
            <div className="text-gray-700 text-base mb-1">Date: {selectedExam.date}</div>
            <div className="text-gray-700 text-base mb-1">Time: {selectedExam.time}</div>
            <div className="text-gray-700 text-base mb-1">Venue: {selectedExam.venue}</div>
            <div className="text-gray-700 text-base mb-1">Total Marks: {selectedExam.totalMarks}</div>
            <div className="text-blue-500 text-sm font-semibold mb-1">Status: {selectedExam.status}</div>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs font-semibold">Edit</button>
              <button className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-xs font-semibold">Download</button>
              <button className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-xs font-semibold">Print</button>
            </div>
          </div>
        </div>
        {/* Table/list */}
        <div className="flex-1 overflow-x-auto bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow border border-blue-100">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Type</th>
                <th className="py-2 px-4">Course</th>
                <th className="py-2 px-4">Branch</th>
                <th className="py-2 px-4">Year</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredExams.length === 0 && (
                <tr><td colSpan={7} className="text-center text-gray-400 text-lg py-10">No exams found.</td></tr>
              )}
              {filteredExams.map(e => (
                <tr key={e.id} className={`border-b last:border-b-0 hover:bg-blue-50 cursor-pointer ${selectedExam.id === e.id ? 'bg-blue-50' : ''}`}
                  onClick={() => setSelectedExam(e)}
                >
                  <td className="py-2 px-4 font-semibold text-gray-900">{e.name}</td>
                  <td className="py-2 px-4">{e.type}</td>
                  <td className="py-2 px-4">{e.course}</td>
                  <td className="py-2 px-4 text-blue-600 font-medium">{e.branch}</td>
                  <td className="py-2 px-4">{e.year}</td>
                  <td className="py-2 px-4">{e.date}</td>
                  <td className="py-2 px-4">{e.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Results Table */}
      <div className="mt-10">
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
