import React, { useState } from 'react';
import Book from './Book';
import BookForm from './BookForm';

const BookList = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', author: 'Author 1', year: 2020, description: 'Description 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', year: 2018, description: 'Description 2' },
    { id: 3, title: 'Book 3', author: 'Author 3', year: 2022, description: 'Description 3' },
  ]);

  const addBook = (newBook) => {
    setBooks([...books, { id: Date.now(), ...newBook }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book) => (
            <Book key={book.id} book={book} deleteBook={deleteBook} />
          ))}
        </ul>
      )}
      <BookForm addBook={addBook} />
    </div>
  );
};

export default BookList;
