
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './componenets/ThemeSwitcher';
import './App.css'; 

const App = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        <h1>Themed App</h1>
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};

export default App;
