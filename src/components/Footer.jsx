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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#72b02a] transition-colors" aria-label="Facebook">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" /></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#72b02a] transition-colors" aria-label="YouTube">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#72b02a] transition-colors" aria-label="LinkedIn">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
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
