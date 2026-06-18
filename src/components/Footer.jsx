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
              <a href="https://www.instagram.com/fastingnutrocare/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <svg viewBox="0 0 24 24" className="w-7 h-7">
                  <defs>
                    <linearGradient id="ig-grad-footer" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-grad-footer)" />
                  <path fill="none" stroke="white" strokeWidth="1.5" d="M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
                  <circle cx="12" cy="12" r="3.5" fill="none" stroke="white" strokeWidth="1.5" />
                  <circle cx="16.5" cy="7.5" r="1" fill="white" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@DrSwathiASAyurvedictips" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="YouTube">
                <svg viewBox="0 0 24 24" className="w-7 h-7">
                  <path fill="#FF0000" d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837z" />
                  <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="https://www.justdial.com/Bangalore/Fasting-Nutro-Care-Opposite-Balaji-Charitable-Trust-Subramanya-Nagar/080PXX80-XX80-250516191828-G8H4_BZDET" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="JustDial">
                <svg viewBox="0 0 24 24" className="w-7 h-7">
                  <circle cx="12" cy="12" r="11" fill="#f06b00" />
                  <text x="50%" y="50%" textAnchor="middle" dy=".35em" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">JD</text>
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
