import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { PhoneCall } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState(() => {
    const path = window.location.pathname.split('/').pop();
    return path || 'home';
  });
  const [activeSpecialty, setActiveSpecialty] = useState(null);

  useEffect(() => {
    const targetPath = activeTab === 'home' ? '/' : `/${activeTab}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }

    const handlePopState = () => {
      const path = window.location.pathname.split('/').pop();
      setActiveTab(path || 'home');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} setActiveSpecialty={setActiveSpecialty} />;
      case 'about':
        return <About setActiveTab={setActiveTab} />;
      case 'services':
        return <Services activeSpecialty={activeSpecialty} setActiveSpecialty={setActiveSpecialty} setActiveTab={setActiveTab} />;
      case 'blog':
        return <Blog setActiveTab={setActiveTab} />;
      case 'privacy-policy':
        return <PrivacyPolicy setActiveTab={setActiveTab} />;
      case 'reviews':
        return <Reviews setActiveTab={setActiveTab} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} setActiveSpecialty={setActiveSpecialty} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1c2a1e] relative">
      {/* Floating Sidebar Social Buttons */}
      <div className="fixed left-0 top-[220px] z-40 flex flex-col gap-2">
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919902670665" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#4caf50] hover:bg-[#439a47] text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.42 9.86-9.86.001-2.63-1.019-5.101-2.871-6.956C16.61 1.934 14.135.916 11.51.916c-5.44 0-9.863 4.42-9.865 9.864 0 1.64.45 3.233 1.302 4.637l-.992 3.613 3.7-.975zm11.232-7.382c-.3-.149-1.772-.875-2.046-.975-.276-.1-.476-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-1.025-.512-1.795-.94-2.502-1.55-.425-.365-.7-1.125-.7-1.125s.275-.275.4-.425c.125-.15.175-.25.275-.425.1-.175.05-.35-.025-.5-.075-.15-.675-1.625-.925-2.225-.244-.588-.492-.51-.675-.51-.175-.002-.375-.002-.575-.002-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.11 4.525.714.31 1.272.496 1.708.635.715.227 1.365.195 1.88.118.574-.085 1.772-.725 2.022-1.425.25-.7.25-1.299.175-1.425-.075-.125-.275-.2-.575-.35z" />
          </svg>
        </a>
        
        {/* Call Button */}
        <a 
          href="tel:+919902670665" 
          className="w-12 h-12 bg-[#0d6efd] hover:bg-[#0b5ed7] text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer"
          aria-label="Call Phone Support"
        >
          <PhoneCall className="w-6 h-6" />
        </a>
      </div>

      {/* Navigation Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} setActiveSpecialty={setActiveSpecialty} />
      
      {/* Page Content */}
      <main className="grow">
        {renderContent()}
      </main>
      
      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
