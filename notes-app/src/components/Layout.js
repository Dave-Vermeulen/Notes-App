import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Layout = ({ children }) => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-smooth">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary-light dark:text-primary-dark">
          Notes App
        </h1>
        <button 
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full focus:outline-none"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;