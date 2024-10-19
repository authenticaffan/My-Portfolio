import { useState, useEffect } from 'react';
import sunIcon from '/src/assets/sun.svg';
import moonIcon from '/src/assets/moon.svg';

const ThemeToggle = () => {
  // Get the initial theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Apply the theme to the body class
    document.body.className = theme;

    // Store the theme preference in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center justify-start ml-8 mt-8">
      <button
  onClick={toggleTheme}
  className="flex items-center  dark:bg-white dark:text-black rounded transition duration-300"
>
  <img
    src={theme === 'light' ? sunIcon : moonIcon}
    alt={theme === 'light' ? 'Sun Icon' : 'Moon Icon'}
    className="w-6 h-6 mr-2"
  />
  {/* {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'} */}
</button>
    </div>
  );
};

export default ThemeToggle;
