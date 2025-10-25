import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  // Update theme in localStorage and DOM
  useEffect(() => {
    if (!mounted) return;
    
    localStorage.setItem('theme', theme);
    
    const root = document.documentElement;
    
    // Add/remove dark class
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Set data-theme attribute for additional styling
    root.setAttribute('data-theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Prevent flash of unstyled content
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;