import { useState } from 'react';
import './LibraryDashboardPage.css';

const dummyInventory = [
  { id: 1, title: 'Data Structures', author: 'N. Wirth', status: 'Issued', issuedTo: 'Amit Sharma' },
  { id: 2, title: 'Operating Systems', author: 'A. Silberschatz', status: 'Available', issuedTo: '' },
];

const LibraryDashboardPage = () => {
  const [books, setBooks] = useState(dummyInventory);

  const issueBook = (index: number) => {
    const name = prompt('Enter student name to issue:');
    if (name) {
      const updated = books.map((b, i) => i === index ? { ...b, status: 'Issued', issuedTo: name } : b);
      setBooks(updated);
    }
  };

  return (
    <div className="library-dashboard-page">
      <h2>Library Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Status</th>
            <th>Issued To</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, idx) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.status}</td>
              <td>{book.issuedTo || '—'}</td>
              <td>
                {book.status === 'Available' && (
                  <button onClick={() => issueBook(idx)}>Issue</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibraryDashboardPage;
