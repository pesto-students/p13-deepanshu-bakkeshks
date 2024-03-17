import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme}>Toggle Theme</button>
      <span>Current Theme: {theme}</span>
    </div>
  );
};

export default ThemeSwitcher;
