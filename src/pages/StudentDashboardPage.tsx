import { studentUsers } from '../data/users';
import { exams, results } from '../data/exams';

export default function StudentDashboardPage() {
  // Replace with actual logged-in student
  const student = studentUsers[0];
  const studentResults = results.filter(r => r.studentId === student.id);
  const upcomingExam = exams.find(e => e.status === 'Scheduled' && e.branch === student.branch && e.year === student.year);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-2 py-2">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <img src={student.avatar} alt={student.name} className="w-24 h-24 rounded-full border-4 border-blue-200 shadow" />
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-blue-900 mb-1">Welcome, {student.name}</h1>
            <div className="text-sm text-blue-600 font-semibold mb-2">ID: {student.id} | Branch: {student.branch} | Year: {student.year}</div>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Attendance: {student.attendance}%</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Admission Year: {student.admissionYear}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-blue-100 p-6 shadow flex flex-col gap-2">
            <span className="text-gray-500 text-sm">Current Semester</span>
            <span className="text-xl font-bold text-blue-700">Semester {student.year * 2 - 1}</span>
          </div>
          <div className="bg-white rounded-xl border border-blue-100 p-6 shadow flex flex-col gap-2">
            <span className="text-gray-500 text-sm">Upcoming Exam</span>
            <span className="text-xl font-bold text-purple-700">{upcomingExam ? `${upcomingExam.name} - ${upcomingExam.date}` : 'No Upcoming Exam'}</span>
          </div>
          <div className="bg-white rounded-xl border border-blue-100 p-6 shadow flex flex-col gap-2">
            <span className="text-gray-500 text-sm">Last Exam Score</span>
            <span className="text-xl font-bold text-green-600">{studentResults.length > 0 ? `${studentResults[studentResults.length-1].marks} / ${exams.find(e => e.id === studentResults[studentResults.length-1].examId)?.totalMarks}` : 'N/A'}</span>
          </div>
          <div className="bg-white rounded-xl border border-blue-100 p-6 shadow flex flex-col gap-2">
            <span className="text-gray-500 text-sm">Fee Status</span>
            <span className="text-xl font-bold text-red-600">Paid</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 mb-8">
          <div className="text-lg font-bold text-gray-800 mb-2">Quick Links</div>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">View Attendance</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition">Exam Schedule</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition">Download Marksheet</button>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-6 text-blue-900 font-semibold text-center">
          Need help? Contact your faculty advisor or visit the helpdesk.
        </div>
      </div>
    </div>
  );
}
