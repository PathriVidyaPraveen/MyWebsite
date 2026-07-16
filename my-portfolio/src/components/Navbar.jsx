// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const EXPERIENCE_ITEMS = [
  { to: '/experience/research', label: 'Research' },
  { to: '/experience/teaching', label: 'Teaching' },
  { to: '/experience/academic-service', label: 'Academic Service & Activities' },
];

const Navbar = () => {
  const linkClass = "hover:text-accent-blue transition-colors duration-300 text-lg md:text-xl";
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-primary-dark text-secondary-light p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex gap-8 flex-wrap justify-center items-center">
          <Link to="/" className={linkClass}>Home</Link>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className={`${linkClass} flex items-center gap-1`}
            >
              Experience
              <span className={`text-sm transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>▾</span>
            </button>
            {isOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-64 bg-component-bg border border-gray-700 rounded-lg shadow-lg overflow-hidden">
                {EXPERIENCE_ITEMS.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-base hover:bg-gray-700 hover:text-accent-blue transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/projects" className={linkClass}>Projects</Link>
          <Link to="/education" className={linkClass}>Education</Link>
          <Link to="/awards" className={linkClass}>Awards</Link>
          <Link to="/certifications" className={linkClass}>Certifications</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
