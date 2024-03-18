 // TodoItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions/todoActions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleTodo(todo.id));
  const handleDelete = () => dispatch(deleteTodo(todo.id));

  return (
    <li>
      <input type="checkbox" checked={todo?.completed} onChange={handleToggle} />
      <span style={{ textDecoration: todo?.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
