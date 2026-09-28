// frontend/src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const token = localStorage.getItem('access_token');

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setIsMenuOpen(false);
    navigate('/login');
  };

  const scrollToPatientSection = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const el = document.getElementById('patient-inquiry-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const targetEl = document.getElementById('patient-inquiry-section');
        if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
      {/* Brand Logo */}
      <Link to="/" className="flex items-center no-underline" onClick={closeMenu}>
        <img 
          src="/logo.png" 
          alt="OneSmarter Health" 
          className="h-10 md:h-12 w-auto object-contain" 
        />
      </Link>

      {/* Hamburger Icon for Mobile */}
      <button 
        className="md:hidden text-gray-900 focus:outline-none" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-gray-900">
        <Link to="/" className="hover:text-red-600 transition-colors">HOME</Link>
        <Link to="/about" className="hover:text-red-600 transition-colors">ABOUT US</Link>
        <Link to="/how-it-works" className="hover:text-red-600 transition-colors">HOW IT WORKS</Link>
        <Link to="/pricing" className="hover:text-red-600 transition-colors">PRICING</Link>
        
        {/* Permanent link to Hospital Partners page */}
        <Link to="/partners" className="hover:text-red-600 transition-colors">
          FOR HOSPITAL PARTNERS
        </Link>
        
        {/* Conditional Logout / For Patient Button */}
        {token ? (
          <button 
            onClick={handleLogout}
            className="bg-gray-800 text-white px-6 py-2.5 rounded hover:bg-gray-900 transition-colors cursor-pointer"
          >
            LOGOUT
          </button>
        ) : (
          <button 
            onClick={scrollToPatientSection}
            className="bg-[#173a36] text-white px-6 py-2.5 rounded hover:bg-[#112a29] transition-colors cursor-pointer"
          >
            For patient
          </button>
        )}
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t flex flex-col px-6 py-4 space-y-4 text-sm font-semibold text-gray-900 md:hidden z-40">
          <Link to="/" className="hover:text-red-600 transition-colors w-full" onClick={closeMenu}>HOME</Link>
          <Link to="/about" className="hover:text-red-600 transition-colors w-full" onClick={closeMenu}>ABOUT US</Link>
          <Link to="/how-it-works" className="hover:text-red-600 transition-colors w-full" onClick={closeMenu}>HOW IT WORKS</Link>
          <Link to="/pricing" className="hover:text-red-600 transition-colors w-full" onClick={closeMenu}>PRICING</Link>
          <Link to="/partners" className="hover:text-red-600 transition-colors w-full" onClick={closeMenu}>FOR HOSPITAL PARTNERS</Link>
          
          <div className="pt-2">
            {token ? (
              <button 
                onClick={handleLogout}
                className="w-full text-center bg-gray-800 text-white px-6 py-2.5 rounded hover:bg-gray-900 transition-colors cursor-pointer"
              >
                LOGOUT
              </button>
            ) : (
              <button 
                onClick={scrollToPatientSection}
                className="w-full text-center bg-[#173a36] text-white px-6 py-2.5 rounded hover:bg-[#112a29] transition-colors cursor-pointer"
              >
                For patient
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;