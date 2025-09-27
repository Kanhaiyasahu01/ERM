import type { Role } from '../store';
export const adminUser = {
  name: 'GEC Bilaspur',
  role: 'admin' as Role,
  avatar: 'https://i.pravatar.cc/100?img=11',
};

export const staffUsers = [
  { name: 'Dr. S. Sharma', role: 'staff' as Role, avatar: 'https://i.pravatar.cc/100?img=12', id: 'ST1', position: 'Professor', department: 'CSE' },
  { name: 'Ms. R. Verma', role: 'staff' as Role, avatar: 'https://i.pravatar.cc/100?img=13', id: 'ST2', position: 'Lecturer', department: 'ECE' },
];

export const studentUsers = [
  { name: 'Amit Kumar', role: 'student' as Role, avatar: 'https://i.pravatar.cc/100?img=14', id: '202501', branch: 'CSE', year: 2, admissionYear: 2023, marks: [85, 78, 92], attendance: 95 },
  { name: 'Priya Singh', role: 'student' as Role, avatar: 'https://i.pravatar.cc/100?img=15', id: '202502', branch: 'ECE', year: 1, admissionYear: 2024, marks: [88, 90, 84], attendance: 98 },
  { name: 'Rahul Gupta', role: 'student' as Role, avatar: 'https://i.pravatar.cc/100?img=16', id: '202503', branch: 'ME', year: 3, admissionYear: 2022, marks: [75, 80, 79], attendance: 90 },
];
