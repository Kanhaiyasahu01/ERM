

import { useState } from 'react';
import { courses, subjects, classSchedules } from '../data/academics';

type TabType = 'courses' | 'subjects' | 'schedules';
type Course = typeof courses[number];
type Subject = typeof subjects[number];
type Schedule = typeof classSchedules[number];

export default function AcademicsPage() {
  const [tab, setTab] = useState<TabType>('courses');
  const [search, setSearch] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<Course>(courses[0]);
  const [selectedSubject, setSelectedSubject] = useState<Subject>(subjects[0]);
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule>(classSchedules[0]);

  // Filtered data
  const filteredCourses = courses.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.code.toLowerCase().includes(search.toLowerCase())
  );
  const filteredSubjects = subjects.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.code.toLowerCase().includes(search.toLowerCase())
  );
  const filteredSchedules = classSchedules.filter(cs =>
    cs.subject.toLowerCase().includes(search.toLowerCase()) ||
    cs.branch.toLowerCase().includes(search.toLowerCase())
  );

  // Detail panel data
  let detail: Course | Subject | Schedule | undefined;
  if (tab === 'courses') detail = selectedCourse && courses.find(c => c.code === selectedCourse.code);
  if (tab === 'subjects') detail = selectedSubject && subjects.find(s => s.code === selectedSubject.code);
  if (tab === 'schedules') detail = selectedSchedule && classSchedules.find(cs => cs.subject === selectedSchedule.subject && cs.day === selectedSchedule.day);

  return (
    <div className="min-h-screen bg-gray-50 px-2 py-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Academics</h2>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
      </div>
      <div className="mb-6 flex gap-0 border-b border-gray-200">
        <button onClick={() => { setTab('courses'); setSelectedCourse(courses[0]); }} className={`px-6 py-3 font-semibold transition-all duration-150 ${tab === 'courses' ? 'border-b-4 border-blue-600 text-blue-700 bg-white' : 'text-gray-500 bg-gray-50 hover:bg-white'}`}>Courses</button>
        <button onClick={() => { setTab('subjects'); setSelectedSubject(subjects[0]); }} className={`px-6 py-3 font-semibold transition-all duration-150 ${tab === 'subjects' ? 'border-b-4 border-blue-600 text-blue-700 bg-white' : 'text-gray-500 bg-gray-50 hover:bg-white'}`}>Subjects</button>
        <button onClick={() => { setTab('schedules'); setSelectedSchedule(classSchedules[0]); }} className={`px-6 py-3 font-semibold transition-all duration-150 ${tab === 'schedules' ? 'border-b-4 border-blue-600 text-blue-700 bg-white' : 'text-gray-500 bg-gray-50 hover:bg-white'}`}>Class Schedules</button>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Detail card */}
        <div className="lg:w-1/3 w-full flex flex-col items-center mb-4 lg:mb-0">
          <div className="w-full max-w-xs bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center">
            {tab === 'courses' && detail && 'name' in detail && (
              <>
                <div className="text-2xl font-extrabold text-blue-700 mb-2">{detail.name}</div>
                <div className="text-gray-500 text-base mb-1">Code: <span className="font-semibold text-gray-700">{detail.code}</span></div>
                <div className="text-blue-600 text-base font-medium mb-1">Branch: {detail.branch}</div>
                <div className="text-gray-700 text-base mb-1">Year: {detail.year}</div>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs font-semibold">Edit</button>
                  <button className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-xs font-semibold">Download</button>
                  <button className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-xs font-semibold">Print</button>
                </div>
              </>
            )}
            {tab === 'subjects' && detail && 'name' in detail && (
              <>
                <div className="text-2xl font-extrabold text-blue-700 mb-2">{detail.name}</div>
                <div className="text-gray-500 text-base mb-1">Code: <span className="font-semibold text-gray-700">{detail.code}</span></div>
                <div className="text-blue-600 text-base font-medium mb-1">Branch: {detail.branch}</div>
                <div className="text-gray-700 text-base mb-1">Year: {detail.year}</div>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs font-semibold">Edit</button>
                  <button className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-xs font-semibold">Download</button>
                  <button className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-xs font-semibold">Print</button>
                </div>
              </>
            )}
            {tab === 'schedules' && detail && 'subject' in detail && (
              <>
                <div className="text-2xl font-extrabold text-blue-700 mb-2">{detail.subject}</div>
                <div className="text-blue-600 text-base font-medium mb-1">Branch: {detail.branch}</div>
                <div className="text-gray-700 text-base mb-1">Year: {detail.year}</div>
                <div className="text-gray-700 text-base mb-1">Day: {detail.day}</div>
                <div className="text-gray-700 text-base mb-1">Time: {detail.time}</div>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs font-semibold">Edit</button>
                  <button className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-xs font-semibold">Download</button>
                  <button className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-xs font-semibold">Print</button>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Table/list */}
        <div className="flex-1 overflow-x-auto bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow border border-blue-100">
          {tab === 'courses' && (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th className="py-2 px-4">Code</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Branch</th>
                  <th className="py-2 px-4">Year</th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.length === 0 && (
                  <tr><td colSpan={4} className="text-center text-gray-400 text-lg py-10">No courses found.</td></tr>
                )}
                {filteredCourses.map(c => (
                  <tr key={c.code} className={`border-b last:border-b-0 hover:bg-blue-50 cursor-pointer ${selectedCourse.code === c.code ? 'bg-blue-50' : ''}`}
                    onClick={() => setSelectedCourse(c)}
                  >
                    <td className="py-2 px-4">{c.code}</td>
                    <td className="py-2 px-4 font-semibold text-gray-900">{c.name}</td>
                    <td className="py-2 px-4 text-blue-600 font-medium">{c.branch}</td>
                    <td className="py-2 px-4">{c.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {tab === 'subjects' && (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th className="py-2 px-4">Code</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Branch</th>
                  <th className="py-2 px-4">Year</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubjects.length === 0 && (
                  <tr><td colSpan={4} className="text-center text-gray-400 text-lg py-10">No subjects found.</td></tr>
                )}
                {filteredSubjects.map(s => (
                  <tr key={s.code} className={`border-b last:border-b-0 hover:bg-blue-50 cursor-pointer ${selectedSubject.code === s.code ? 'bg-blue-50' : ''}`}
                    onClick={() => setSelectedSubject(s)}
                  >
                    <td className="py-2 px-4">{s.code}</td>
                    <td className="py-2 px-4 font-semibold text-gray-900">{s.name}</td>
                    <td className="py-2 px-4 text-blue-600 font-medium">{s.branch}</td>
                    <td className="py-2 px-4">{s.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {tab === 'schedules' && (
            <table className="min-w-full divide-y divide-gray-200">
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
                {filteredSchedules.length === 0 && (
                  <tr><td colSpan={5} className="text-center text-gray-400 text-lg py-10">No schedules found.</td></tr>
                )}
                {filteredSchedules.map((cs, i) => (
                  <tr key={i} className={`border-b last:border-b-0 hover:bg-blue-50 cursor-pointer ${(selectedSchedule.subject === cs.subject && selectedSchedule.day === cs.day) ? 'bg-blue-50' : ''}`}
                    onClick={() => setSelectedSchedule(cs)}
                  >
                    <td className="py-2 px-4">{cs.branch}</td>
                    <td className="py-2 px-4">{cs.year}</td>
                    <td className="py-2 px-4">{cs.day}</td>
                    <td className="py-2 px-4 font-semibold text-gray-900">{cs.subject}</td>
                    <td className="py-2 px-4">{cs.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
