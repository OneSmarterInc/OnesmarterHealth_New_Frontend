// frontend/src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('access_token');

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/login');
  };

  const scrollToPatientSection = (e) => {
    e.preventDefault();
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

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
      {/* Brand Logo */}
      <Link to="/" className="flex items-center no-underline">
        <img 
          src="/logo.png" 
          alt="OneSmarter Health" 
          className="h-12 w-auto object-contain" 
        />
      </Link>
      
      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-gray-900">
        <Link to="/" className="hover:text-red-600 transition-colors">HOME</Link>
        <Link to="/about" className="hover:text-red-600 transition-colors">ABOUT US</Link>
        <Link to="/how-it-works" className="hover:text-red-600 transition-colors">HOW IT WORKS</Link>
        <Link to="/pricing" className="hover:text-red-600 transition-colors">PRICING</Link>
        
        {/* Permanent link to Hospital Partners page in capital letters */}
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
    </nav>
  );
};

export default Navbar;