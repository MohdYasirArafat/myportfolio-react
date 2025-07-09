// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(()=>{
      // Read from localStorage on first render
    const saved = localStorage.getItem("darkMode");
    return saved === "true"; // Convert string to boolean
  });

  //dark mode feature
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save current mode in localStorage
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Yasir's Portfolio</h1>
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200 font-medium">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#education" className="hover:text-blue-600">Education</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-gray-800 dark:text-white focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <BsSun /> : <BsMoon />}
          </button>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 dark:text-white focus:outline-none text-2xl"
            >
              {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-2 text-gray-700 dark:text-gray-200">
          <a href="#home" className="block hover:text-blue-600">Home</a>
          <a href="#about" className="block hover:text-blue-600">About</a>
          <a href="#education" className="block hover:text-blue-600">Education</a>
          <a href="#projects" className="block hover:text-blue-600">Projects</a>
          <a href="#experience" className="block hover:text-blue-600">Experience</a>
          <a href="#skills" className="block hover:text-blue-600">Skills</a>
          <a href="#contact" className="block hover:text-blue-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
