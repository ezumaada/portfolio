import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/astronaut-helmet.png';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Persist dark mode preference in local storage
  useEffect(() => {
    const storedPreference = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedPreference);
    document.documentElement.classList.toggle('dark', storedPreference);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  return (
    <nav className="flex justify-between items-center fixed top-0 w-full bg-gray-400 dark:bg-gray-800 p-4 z-50">
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" className="h-8 w-8" />
        </Link>
      </div>
      <ul className="flex space-x-4">
        <li><Link className="text-black dark:text-white" to="/">My Resume</Link></li>
        <li><Link className="text-black dark:text-white" to="/projects">Projects</Link></li>
        <li><Link className="text-black dark:text-white" to="/skills">Skills</Link></li>
        <li><Link className="text-black dark:text-white" to="/socials">Socials</Link></li>
        <li><Link className="text-black dark:text-white" to="/contact">Contact</Link></li>
      </ul>
      <div>
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-gray-800 text-white dark:bg-gray-300 dark:text-black rounded"
        >
          Toggle Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
