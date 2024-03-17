import React, { useState } from 'react';
import BookList from './components/BookList';
import BookDataLoader from './components/BookDataLoader';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
const books = [
  { title: 'Book 1', author: 'Author 1', year: 2020 },
  { title: 'Book 2', author: 'Author 2', year: 2018 },
  { title: 'Book 3', author: 'Author 3', year: 2022 },
  // Add more books if you'd like
];

const App = () => {
  const [allBooks, setAllBooks] = useState([]);

  return (
    <ThemeProvider>
      <div className="App">
        <ThemeSwitcher />
        <BookDataLoader setBooks={setAllBooks} />
        <BookList books={allBooks.length > 0 ? allBooks : books} />
      </div>
    </ThemeProvider>
  );
};

export default App;
