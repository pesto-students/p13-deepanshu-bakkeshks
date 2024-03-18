 // App.jsx
import React from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

function App() {
  return (
    <div>
      <h1>To-Do List</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
