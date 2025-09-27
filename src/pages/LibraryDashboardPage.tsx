
import { useState } from 'react';

const dummyInventory = [
  { id: 1, title: 'Data Structures', author: 'N. Wirth', status: 'Issued', issuedTo: 'Amit Sharma' },
  { id: 2, title: 'Operating Systems', author: 'A. Silberschatz', status: 'Available', issuedTo: '' },
  { id: 3, title: 'Computer Networks', author: 'A. Tanenbaum', status: 'Available', issuedTo: '' },
];

export default function LibraryDashboardPage() {
  const [books, setBooks] = useState(dummyInventory);

  const issueBook = (index: number) => {
    const name = prompt('Enter student name to issue:');
    if (name) {
      const updated = books.map((b, i) => i === index ? { ...b, status: 'Issued', issuedTo: name } : b);
      setBooks(updated);
    }
  };
  const returnBook = (index: number) => {
    const updated = books.map((b, i) => i === index ? { ...b, status: 'Available', issuedTo: '' } : b);
    setBooks(updated);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Library Inventory</h2>
        <table className="w-full mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-3 text-left">Title</th>
              <th className="py-2 px-3 text-left">Author</th>
              <th className="py-2 px-3 text-left">Status</th>
              <th className="py-2 px-3 text-left">Issued To</th>
              <th className="py-2 px-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, idx) => (
              <tr key={book.id} className="border-b last:border-b-0">
                <td className="py-2 px-3 font-semibold text-gray-900">{book.title}</td>
                <td className="py-2 px-3">{book.author}</td>
                <td className="py-2 px-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${book.status === 'Issued' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>{book.status}</span>
                </td>
                <td className="py-2 px-3">{book.issuedTo || '—'}</td>
                <td className="py-2 px-3">
                  {book.status === 'Available' ? (
                    <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 mr-2" onClick={() => issueBook(idx)}>Issue</button>
                  ) : (
                    <button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700" onClick={() => returnBook(idx)}>Return</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-gray-50 p-4 rounded-xl">
          <h3 className="font-semibold mb-2">Add Book (Demo Form)</h3>
          <form className="flex flex-col gap-3">
            <input className="border rounded px-3 py-2" placeholder="Book Title" disabled />
            <input className="border rounded px-3 py-2" placeholder="Author" disabled />
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-fit" disabled>Add Book (Demo)</button>
          </form>
        </div>
      </div>
    </div>
  );
}
