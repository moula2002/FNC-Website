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
