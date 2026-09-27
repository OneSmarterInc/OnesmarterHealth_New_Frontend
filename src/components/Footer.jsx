// frontend/src/components/Footer.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    api.get('/api/social-links/')
      .then((res) => {
        const activeLinks = res.data.filter(link => link.is_active);
        setSocialLinks(activeLinks);
      })
      .catch((err) => console.error("Failed to fetch social links", err));
  }, []);

  const getPlatformStyle = (platform) => {
    const name = platform.toLowerCase();
    if (name.includes('face')) return { bg: 'bg-[#3b5998]', label: 'f' };
    if (name.includes('twit') || name.includes('x')) return { bg: 'bg-[#1da1f2]', label: 't' };
    if (name.includes('link')) return { bg: 'bg-[#0077b5]', label: 'in' };
    return { bg: 'bg-gray-700', label: platform.charAt(0).toUpperCase() };
  };

  return (
    <footer className="bg-white py-10 px-8 border-t border-gray-100">
      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
        
        {/* Left: Brand Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center no-underline">
            <img 
              src="/logo.png" 
              alt="OneSmarter Health" 
              className="h-12 w-auto object-contain" 
            />
          </Link>
        </div>

        {/* Center: Social Icons */}
        {socialLinks.length > 0 && (
          <div className="flex items-center space-x-3 flex-shrink-0">
            {socialLinks.map((item) => {
              const style = getPlatformStyle(item.platform);
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.platform}
                  className={`w-9 h-9 rounded-full ${style.bg} text-white flex items-center justify-center font-bold text-sm shadow hover:opacity-90 transition-opacity`}
                >
                  {style.label}
                </a>
              );
            })}
          </div>
        )}

        {/* Right: Legal Links & Disclaimer */}
        <div className="flex flex-col text-[#5c6e7a] text-[14px] space-y-1 text-center lg:text-right">
          <div className="flex flex-wrap justify-center lg:justify-end items-center gap-2 whitespace-nowrap">
            <Link to="/privacy" className="hover:text-red-600 underline font-medium transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link to="/terms" className="hover:text-red-600 underline font-medium transition-colors">
              Terms & Conditions
            </Link>
          </div>
          <p className="text-xs text-gray-500">
            If you have an urgent medical concern, contact your local care team or emergency service.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;