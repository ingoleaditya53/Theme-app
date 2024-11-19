
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme, changeColor } = useTheme();

  const handleColorChange = (e) => {
    changeColor('button', e.target.value);
  };

  return (
    <div style={{ background: theme.colors.background, color: theme.colors.text }}>
      <h1>Dynamic Theme Switcher</h1>
      <button
        onClick={toggleTheme}
        style={{ backgroundColor: theme.colors.button, color: theme.colors.text }}
      >
        Toggle Theme
      </button>
      <div>
        <label>Change Button Color:</label>
        <input
          type="color"
          onChange={handleColorChange}
          value={theme.colors.button}
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
