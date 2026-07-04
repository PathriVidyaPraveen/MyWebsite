// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const linkClass = "hover:text-accent-blue transition-colors duration-300 text-lg md:text-xl";

  return (
    <nav className="bg-primary-dark text-secondary-light p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex gap-8 flex-wrap justify-center">
          <Link to="/" className={linkClass}>Home</Link>
          <Link to="/experience" className={linkClass}>Experience</Link>
          <Link to="/projects" className={linkClass}>Projects</Link>
          <Link to="/education" className={linkClass}>Education</Link>
          <Link to="/awards" className={linkClass}>Awards</Link>
          <Link to="/volunteering" className={linkClass}>Volunteering</Link>
          <Link to="/certifications" className={linkClass}>Certifications</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
