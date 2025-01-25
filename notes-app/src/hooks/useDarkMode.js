import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.theme === 'dark' || 
           (!('theme' in localStorage) && 
            window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    const htmlClasses = document.documentElement.classList;
    
    if (isDarkMode) {
      htmlClasses.add('dark');
      localStorage.theme = 'dark';
    } else {
      htmlClasses.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return [isDarkMode, toggleDarkMode];
};