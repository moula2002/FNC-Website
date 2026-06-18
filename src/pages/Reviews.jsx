import React from 'react';

export default function Reviews({ setActiveTab }) {
  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-24 pb-16 bg-[#cef2fe] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Heading */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#484e36] tracking-wide">
            Testimonials
          </h1>
          <p className="text-slate-600 text-sm mt-2 font-medium">What people say about us</p>
        </div>

        {/* Dynamic Google Reviews via Elfsight */}
        <div className="flex justify-center min-h-[400px]">
          <div className="elfsight-app-d6aef1e7-66c4-4821-ac58-1ddf6baf28bc" data-elfsight-app-lazy></div>
        </div>



      </div>
    </div>
  );
}
