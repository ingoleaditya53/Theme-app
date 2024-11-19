// src/context/ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const defaultTheme = {
  mode: 'light',
  colors: {
    background: '#ffffff',
    text: '#000000',
    button: '#007bff'
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      // Try to load the theme from localStorage
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
    } catch (error) {
      // If there is an error in parsing, fallback to defaultTheme
      console.error("Error loading theme from localStorage, using default theme", error);
      return defaultTheme;
    }
  });

  useEffect(() => {
    // Save the theme to localStorage whenever it changes
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      mode: prevTheme.mode === 'light' ? 'dark' : 'light',
      colors: {
        ...prevTheme.colors,
        background: prevTheme.mode === 'light' ? '#333' : '#fff',
        text: prevTheme.mode === 'light' ? '#fff' : '#000',
        button: prevTheme.mode === 'light' ? '#007bff' : '#ff6347'
      }
    }));
  };

  const changeColor = (colorName, colorValue) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      colors: {
        ...prevTheme.colors,
        [colorName]: colorValue
      }
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
