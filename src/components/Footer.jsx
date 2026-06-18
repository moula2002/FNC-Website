import React from 'react';
import logo from '../assets/logo.png';

export default function Footer({ setActiveTab }) {
  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-800 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Column 1: Brand Logo & Title */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="cursor-pointer" onClick={() => handleNavClick('home')}>
              <img 
                src={logo} 
                alt="Fasting Nutrocare Logo" 
                className="h-16 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-900 tracking-wide text-center md:text-left">
              Dr.Swathi AS
            </h3>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-900 mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm font-semibold text-slate-700">
              <li>
                <button 
                  onClick={() => handleNavClick('about')}
                  className="hover:text-primary-600 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span className="text-slate-500">•</span> About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('blog')}
                  className="hover:text-primary-600 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span className="text-slate-500">•</span> Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-primary-600 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span className="text-slate-500">•</span> Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('services')}
                  className="hover:text-primary-600 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span className="text-slate-500">•</span> Specializations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('privacy')}
                  className="hover:text-primary-600 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span className="text-slate-500">•</span> Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-900 mb-4 tracking-wide">
              Contact Info
            </h4>
            <ul className="space-y-2 text-sm font-semibold text-slate-700">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-slate-500">•</span> Phone: +91 99026 70665
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-slate-500">•</span> Email: dr.swathifnc@gmail.com
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
              <a href="https://www.instagram.com/fastingnutrocare/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#72b02a] transition-colors" aria-label="Instagram">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.869a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
              </a>
              <a href="https://www.youtube.com/@DrSwathiASAyurvedictips" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#72b02a] transition-colors" aria-label="YouTube">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a href="https://www.justdial.com/Bangalore/Fasting-Nutro-Care-Opposite-Balaji-Charitable-Trust-Subramanya-Nagar/080PXX80-XX80-250516191828-G8H4_BZDET" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#72b02a] transition-colors" aria-label="JustDial">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
                  <text x="50%" y="50%" textAnchor="middle" dy=".35em" fontSize="12" fontWeight="bold">JD</text>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-slate-500 font-semibold flex flex-col sm:flex-row items-center justify-center gap-3">
        <span>© {new Date().getFullYear()} Fasting Nutrocare — Dr. Swathi A S. All Rights Reserved.</span>
        <span className="hidden sm:inline text-slate-300">|</span>
        <button
          onClick={() => handleNavClick('privacy')}
          className="hover:text-primary-600 transition-colors cursor-pointer underline"
        >
          Privacy Policy
        </button>
      </div>
    </footer>
  );
}
