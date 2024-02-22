import React from 'react'
import Book from './Book';

function BookList() {

    const books = [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2018 },
        { title: 'Book 3', author: 'Author 3', year: 2022 },
        {title: 'Book 4', author: 'Author 4', year: 2023} 
      ];

  return ( 
    <>
        <h3> Book Lists:</h3>
        <ul>
            {books.map((book, index) => (
                <Book key={index} title={book.title} author= {book.author}  year= {book.year}/> 
            ))}
        </ul>
    </>
  );
}

export default BookList;