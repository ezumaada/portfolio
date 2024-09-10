import React, { useState, useEffect } from 'react';
import logo from '../../images/astronaut-helmet.png';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For toggling the mobile menu

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center fixed top-0 w-full bg-gray-400 dark:bg-gray-800 p-4 z-50">
      {/* Logo Section */}
      <div>
        <a href="#home">
          <img src={logo} alt="Logo" className="h-8 w-8" />
        </a>
      </div>

      {/* Hamburger Menu Icon for mobile */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-black dark:text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Links Section */}
      <ul
        className={`${
          menuOpen ? 'block' : 'hidden'
        } lg:flex space-x-4 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-400 dark:bg-gray-800 lg:bg-transparent p-4 lg:p-0 lg:flex-row z-40`}
      >
        <li className="py-2 lg:py-0">
          <a href="#resume" className="text-black dark:text-white" onClick={toggleMenu}>
            My Resume
          </a>
        </li>
        <li className="py-2 lg:py-0">
          <a href="#projects" className="text-black dark:text-white" onClick={toggleMenu}>
            Projects
          </a>
        </li>
        <li className="py-2 lg:py-0">
          <a href="#skills" className="text-black dark:text-white" onClick={toggleMenu}>
            Skills
          </a>
        </li>
        <li className="py-2 lg:py-0">
          <a href="#socials" className="text-black dark:text-white" onClick={toggleMenu}>
            Socials
          </a>
        </li>
        <li className="py-2 lg:py-0">
          <a href="#contact" className="text-black dark:text-white" onClick={toggleMenu}>
            Contact
          </a>
        </li>
      </ul>

      {/* Dark Mode Toggle */}
      <div className="hidden lg:block">
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
