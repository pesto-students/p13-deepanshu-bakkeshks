import React, { useEffect } from 'react';

const BookDataLoader = ({ setBooks }) => {
  useEffect(() => {
    // Simulate fetching book data
    const initialBooks = [
      { title: 'Book 1', author: 'Author 1', year: 2020 },
      { title: 'Book 2', author: 'Author 2', year: 2018 },
      { title: 'Book 3', author: 'Author 3', year: 2022 }
      // Add more initial books if needed
    ];

    setBooks(initialBooks);
  }, [setBooks]);

  return null;
};

export default BookDataLoader;
