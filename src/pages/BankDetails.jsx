import React from 'react';
import phonepeQr from '../assets/QR1.jpg';
import gpayQr from '../assets/gpay.png';

export default function BankDetails({ setActiveTab }) {
  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* 1. Header Banner */}
      <section className="bg-[#2a3038] text-white py-20 text-center">
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-wide">
          Bank Details
        </h1>
      </section>

      {/* 2. Bank Account Details Section */}
      <section className="bg-[#1a1a1a] py-16 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="w-full max-w-3xl bg-[#262626] border-2 border-[#d6d9c0] p-8 sm:p-12 rounded-sm shadow-2xl relative overflow-hidden">
          {/* Subtle dark berries overlay/theme could be styled here, but a clean dark gray card is perfect */}
          <div className="space-y-6 text-white text-lg sm:text-2xl font-bold tracking-wide leading-relaxed uppercase">
            <div>
              Account Name : <span className="text-[#8cc63f]">SWATHI A S</span>
            </div>
            <div>
              Bank Name : <span className="text-[#8cc63f]">ICICI BANK</span>
            </div>
            <div>
              Branch Name : <span className="text-[#8cc63f]">KANNAMANGALA</span>
            </div>
            <div>
              Account Number : <span className="text-[#8cc63f]">3170 0100 0645</span>
            </div>
            <div>
              IFSC Code : <span className="text-[#8cc63f]">ICIC0003170</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QR Codes Section */}
      <section className="bg-[#1a1a1a] pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-start">
          
          {/* PhonePe QR */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-white font-bold text-lg">Phone Pay QR Code</h3>
            <div className="w-72 bg-white p-4 rounded-sm shadow-xl flex items-center justify-center">
              <img 
                src={phonepeQr} 
                alt="PhonePe QR Code for SWATHI A S" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Google Pay QR */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-white font-bold text-lg">Google Pay QR Code</h3>
            <div className="w-72 bg-white p-4 rounded-sm shadow-xl flex items-center justify-center">
              <img 
                src={gpayQr} 
                alt="Google Pay QR Code for SWATHI A S" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. Coral Thoughts Banner Section */}
      <section className="w-full bg-[#484e36] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#ff8f8f] text-white rounded-sm p-8 text-center space-y-5 shadow-md">
            <h3 className="font-display text-2xl sm:text-3xl font-bold">What are your thoughts?</h3>
            <div>
              <button 
                onClick={() => handleNavClick('contact')}
                className="bg-[#72b02a] hover:bg-[#5f9322] text-white font-bold py-3.5 px-8 rounded-sm text-sm transition-colors cursor-pointer uppercase inline-block shadow-sm"
              >
                Review Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
