// Dummy data for book issues
const bookIssues = [
  { id: 1, book: 'Data Structures and Algorithm Analysis in C', user: 'Amit Sharma', issuedOn: '2025-09-20', due: '2025-10-01', status: 'Issued' },
  { id: 2, book: 'Operating System Concepts', user: 'Priya Verma', issuedOn: '2025-09-25', due: '2025-10-10', status: 'Returned' },
  { id: 3, book: 'Computer Networks', user: 'Rahul Singh', issuedOn: '2025-09-18', due: '2025-10-15', status: 'Issued' },
  { id: 4, book: 'Digital Logic and Computer Design', user: 'Sneha Patel', issuedOn: '2025-09-22', due: '2025-10-20', status: 'Issued' },
  { id: 5, book: 'Fundamentals of Database Systems', user: 'Vikas Kumar', issuedOn: '2025-09-28', due: '2025-10-25', status: 'Issued' },
];


import { useState } from 'react';

const dummyBooks = [
  {
    id: 1,
    title: 'Data Structures and Algorithm Analysis in C',
    author: 'Mark Allen Weiss',
    due: '2025-10-01',
    status: 'Issued',
    fine: 0,
    cover: 'https://m.media-amazon.com/images/I/71kBRLo8ZtL._UF1000,1000_QL80_.jpg', // Realistic cover
  },
  {
    id: 2,
    title: 'Operating System Concepts',
    author: 'Abraham Silberschatz',
    due: '2025-10-10',
    status: 'Returned',
    fine: 0,
    cover: 'https://m.media-amazon.com/images/I/61+NJ5jhf1L._UF1000,1000_QL80_.jpg', // Dinosaur cover
  },
  {
    id: 3,
    title: 'Computer Networks',
    author: 'Andrew S. Tanenbaum',
    due: '2025-10-15',
    status: 'Issued',
    fine: 20,
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRht4VKBx545hjJTuzmtWmK8_XKLvT34-pKJg&s', // Tanenbaum cover
  },
  {
    id: 4,
    title: 'Digital Logic and Computer Design',
    author: 'M. Morris Mano',
    due: '2025-10-20',
    status: 'Issued',
    fine: 0,
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvjtaHJ09iEOvE0QJ6USxSWcPDkMto8cX5Q&s', // Mano cover
  },
  {
    id: 5,
    title: 'Fundamentals of Database Systems',
    author: 'Ramez Elmasri',
    due: '2025-10-25',
    status: 'Issued',
    fine: 0,
    cover: 'https://m.media-amazon.com/images/I/81meqYFGg0L.jpg', // Elmasri cover
  },
];

export default function LibraryManagementPage() {
  const [search, setSearch] = useState('');
  const books = dummyBooks.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Library Management</h2>
          <input
            type="text"
            placeholder="Search by title or author..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {books.map(book => (
            <div key={book.id} className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col items-center hover:shadow-2xl transition-shadow">
              <img src={book.cover} alt={book.title} className="w-28 h-40 object-cover rounded mb-4 shadow" />
              <div className="text-lg font-bold text-gray-900 mb-1">{book.title}</div>
              <div className="text-blue-600 text-sm font-medium mb-1">{book.author}</div>
              <div className="text-gray-700 text-sm mb-1">Due: {book.due}</div>
              <div className="mb-2">
                <span className={`px-2 py-1 rounded text-xs font-semibold mr-2 ${book.status === 'Issued' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>{book.status}</span>
                {book.fine > 0 && (
                  <span className="px-2 py-1 rounded text-xs font-semibold bg-red-100 text-red-700">Fine: ₹{book.fine}</span>
                )}
              </div>
              <div className="flex gap-2 mt-2">
                <button className="bg-blue-600 text-white px-4 py-1 rounded font-semibold text-xs">View</button>
                <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded font-semibold text-xs">Renew</button>
                <button className="bg-green-600 text-white px-4 py-1 rounded font-semibold text-xs">Return</button>
              </div>
            </div>
          ))}
        </div>
        {/* Admin Book Issue Table */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h3 className="font-semibold mb-4 text-lg">Book Issue Records (Admin View)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-2 font-semibold text-gray-700 border-b">Book</th>
                  <th className="px-4 py-2 font-semibold text-gray-700 border-b">User</th>
                  <th className="px-4 py-2 font-semibold text-gray-700 border-b">Issued On</th>
                  <th className="px-4 py-2 font-semibold text-gray-700 border-b">Due Date</th>
                  <th className="px-4 py-2 font-semibold text-gray-700 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookIssues.map(issue => (
                  <tr key={issue.id} className="border-b hover:bg-blue-50">
                    <td className="px-4 py-2">{issue.book}</td>
                    <td className="px-4 py-2">{issue.user}</td>
                    <td className="px-4 py-2">{issue.issuedOn}</td>
                    <td className="px-4 py-2">{issue.due}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${issue.status === 'Issued' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>{issue.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-2">How It Works</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Book issues and returns are logged in real time</li>
            <li>Fines are calculated automatically for overdue books</li>
            <li>Admins can view inventory and generate reports</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
