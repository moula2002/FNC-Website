import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import fitWoman from '../assets/header_1-removebg-preview.png';
import logo from '../assets/logo.png';

export default function Navbar({ activeTab, setActiveTab, setActiveSpecialty }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Specializations', hasDropdown: true },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (tabId) => {
    setActiveSpecialty(null);
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const specialties = [
    'Cancer Care',
    'PCOD , PCOS',
    'Bladder Stone Reversal',
    'Kidney Stone Reversal',
    'Thyroid',
    'Diabetes',
    'Blood Pressure',
    'Weight Loss',
    'Gastric Reversal',
    'Derma Care'
  ];

  return (
    <header className="w-full bg-white z-50 border-b-4 border-red-300 sticky top-0 pt-5 pb-3 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center justify-center space-y-3">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => handleNavClick('home')}>
            <img 
              src={logo} 
              alt="Fasting Nutrocare Logo" 
              className="h-24 object-contain"
            />
          </div>

          {/* Centered Navigation Link Row */}
          <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm font-bold text-[#1f2d5a] z-10">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.id} 
                    className="relative cursor-pointer"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    <button 
                      onClick={() => handleNavClick('services')}
                      className={`flex items-center space-x-1 hover:text-primary-600 transition-colors py-1 cursor-pointer ${
                        activeTab === 'services' ? 'text-primary-600' : ''
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {showDropdown && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-white shadow-2xl rounded-sm border border-gray-200 py-0 z-50">
                        {specialties.map((spec, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => {
                              if (spec === 'Cancer Care') {
                                setActiveSpecialty('cancer-care');
                              } else if (spec === 'PCOD , PCOS') {
                                setActiveSpecialty('pcod-pcos');
                              } else if (spec === 'Bladder Stone Reversal') {
                                setActiveSpecialty('bladder-stone-reversal');
                              } else if (spec === 'Kidney Stone Reversal') {
                                setActiveSpecialty('kidney-stone-reversal');
                              } else if (spec === 'Thyroid') {
                                setActiveSpecialty('thyroid');
                              } else if (spec === 'Diabetes') {
                                setActiveSpecialty('diabetes');
                              } else if (spec === 'Blood Pressure') {
                                setActiveSpecialty('blood-pressure');
                              } else if (spec === 'Weight Loss') {
                                setActiveSpecialty('weight-loss');
                              } else if (spec === 'Gastric Reversal') {
                                setActiveSpecialty('gastric-reversal');
                              } else if (spec === 'Derma Care') {
                                setActiveSpecialty('derma-care');
                              } else {
                                setActiveSpecialty(null);
                              }
                              setActiveTab('services');
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                              setShowDropdown(false);
                            }}
                            className="w-full text-center px-4 py-2 text-sm text-slate-800 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 font-bold transition-colors cursor-pointer block"
                          >
                            {spec}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`hover:text-primary-600 transition-colors py-1 cursor-pointer ${
                    activeTab === item.id ? 'text-primary-600' : ''
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Fit Woman Image */}
        <div className="absolute right-8 bottom-[-8px] h-[150px] hidden sm:block pointer-events-none">
          <img 
            src={fitWoman} 
            alt="Fit Woman measuring waist" 
            className="h-full object-contain object-bottom"
          />
        </div>
      </div>
    </header>
  );
}
