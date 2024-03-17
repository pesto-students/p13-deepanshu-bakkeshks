import React, { useState } from 'react';

const Book = ({ book, deleteBook }) => {
  const [showDetails, setShowDetails] = useState(false);

  const detailsContent = (
    <div>
      <p>{book.description}</p>
      {/* You can add additional details here, like genre, ISBN, etc. */}
    </div>
  );

  return (
    <li>
      <div>
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Year: {book.year}</p>
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && detailsContent}
        <button onClick={() => deleteBook(book.id)}>Delete</button>
      </div>
    </li>
  );
};

export default Book;
