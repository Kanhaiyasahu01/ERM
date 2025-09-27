import React, { useState } from 'react';
import './ExamsDashboardPage.css';

const dummyMarks = [
  { id: 1, student: 'Amit Sharma', subject: 'Math', marks: 88, grade: 'A', attendance: '95%' },
  { id: 2, student: 'Priya Singh', subject: 'Physics', marks: 76, grade: 'B+', attendance: '90%' },
];

const ExamsDashboardPage = () => {
  const [marks, setMarks] = useState(dummyMarks);

  const uploadMarks = () => {
    const student = prompt('Student name:');
    const subject = prompt('Subject:');
    const marksVal = prompt('Marks:');
    const grade = prompt('Grade:');
    const attendance = prompt('Attendance:');
    if (student && subject && marksVal && grade && attendance) {
      setMarks([
        ...marks,
        { id: marks.length + 1, student, subject, marks: Number(marksVal), grade, attendance },
      ]);
    }
  };

  return (
    <div className="exams-dashboard-page">
      <h2>Marks Upload</h2>
      <button onClick={uploadMarks}>Upload Marks</button>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((m) => (
            <tr key={m.id}>
              <td>{m.student}</td>
              <td>{m.subject}</td>
              <td>{m.marks}</td>
              <td>{m.grade}</td>
              <td>{m.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExamsDashboardPage;
