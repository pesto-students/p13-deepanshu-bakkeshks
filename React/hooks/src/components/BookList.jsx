import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useBookFilter } from '../hooks/useBookFilter';
import { useBookSorter } from '../hooks/useBookSorter';

const BookList = ({ books }) => {
  const { theme } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = React.useState('');
  const filteredBooks = useBookFilter(books, searchTerm);
  const sortedBooks = useBookSorter(filteredBooks);

  return (
    <div className={`book-list ${theme}`}>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {sortedBooks.map((book, index) => (
          <li key={index}>
            {book.title} - {book.author} ({book.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
