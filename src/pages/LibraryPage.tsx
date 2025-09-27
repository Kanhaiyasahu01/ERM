

const dummyBooks = [
  { id: 1, title: 'Data Structures', author: 'N. Wirth', due: '2025-10-01', status: 'Issued' },
  { id: 2, title: 'Operating Systems', author: 'A. Silberschatz', due: '2025-10-10', status: 'Returned' },
  { id: 3, title: 'Computer Networks', author: 'A. Tanenbaum', due: '2025-10-15', status: 'Issued' },
];

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Library Books</h2>
        <table className="w-full mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-3 text-left">Title</th>
              <th className="py-2 px-3 text-left">Author</th>
              <th className="py-2 px-3 text-left">Due Date</th>
              <th className="py-2 px-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyBooks.map(book => (
              <tr key={book.id} className="border-b last:border-b-0">
                <td className="py-2 px-3 font-semibold text-gray-900">{book.title}</td>
                <td className="py-2 px-3">{book.author}</td>
                <td className="py-2 px-3">{book.due}</td>
                <td className="py-2 px-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${book.status === 'Issued' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>{book.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-gray-50 p-4 rounded-xl">
          <h3 className="font-semibold mb-2">Request Book Return (Demo)</h3>
          <form className="flex flex-col gap-3">
            <input className="border rounded px-3 py-2" placeholder="Book Title" disabled />
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-fit" disabled>Request Return (Demo)</button>
          </form>
        </div>
      </div>
    </div>
  );
}
