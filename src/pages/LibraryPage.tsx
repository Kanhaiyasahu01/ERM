import './LibraryPage.css';

const dummyBooks = [
  { id: 1, title: 'Data Structures', author: 'N. Wirth', due: '2025-10-01', status: 'Issued' },
  { id: 2, title: 'Operating Systems', author: 'A. Silberschatz', due: '2025-10-10', status: 'Returned' },
];

const LibraryPage = () => (
  <div className="library-page">
    <h2>Library Books</h2>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Due Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {dummyBooks.map(book => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.due}</td>
            <td>{book.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default LibraryPage;
