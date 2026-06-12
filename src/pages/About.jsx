import React from 'react';
import drSwathiBio from '../assets/about.png';
import diabetesImg from '../assets/diabetes.png';

export default function About({ setActiveTab }) {
  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* 1. Header Banner */}
      <section className="bg-[#4c525a] text-white py-20 text-center">
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-wide">
          About Us
        </h1>
      </section>

      {/* 2. Doctor Bio Section */}
      <section className="bg-[#b7aeac] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0">
            {/* Left Image of Dr. Swathi with Awards */}
            <div className="lg:col-span-6 w-full relative z-0 flex justify-center">
              <div className="w-full max-w-lg aspect-[4/5] overflow-hidden shadow-2xl rounded-sm">
                <img 
                  src={drSwathiBio} 
                  alt="Dr. Swathi A S holding award certificate" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right overlapping bio white card */}
            <div className="lg:col-span-6 bg-white text-slate-800 p-8 sm:p-12 lg:-ml-16 xl:-ml-24 relative z-10 shadow-2xl rounded-sm max-w-xl mx-auto lg:mx-0">
              <h2 className="text-3xl font-extrabold text-[#111827] mb-6 border-b pb-4 tracking-wide">
                Dr. Swathi A S
              </h2>
              
              <ul className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-semibold">
                <li className="flex items-start">
                  <span className="text-[#4c525a] mr-2 font-bold">•</span>
                  <span>Working since 2016 as a Nutritionist.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4c525a] mr-2 font-bold">•</span>
                  <span>Work’s as a co-partner for The Fasting Studio and visiting nutritionist to HCG and Brahma Kumaris.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4c525a] mr-2 font-bold">•</span>
                  <span>Achieved several awards for fasting therapy with nutritional management and nominated for to awarded with bharathiya gyan ratna award as best healthcare researcher and bharathiya seva ratna award as best cancer and diabetes care specialist.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4c525a] mr-2 font-bold">•</span>
                  <span>She is also been awarded with one of the highest civilian award of national book of records Bharath Vibhushan award.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4c525a] mr-2 font-bold">•</span>
                  <span>For the passionate commitment towards the society.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Strip Section */}
      <section className="bg-[#373737] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center justify-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center space-y-1">
              <svg className="w-12 h-12 text-white mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <span className="block text-4xl font-extrabold tracking-wide">10+</span>
              <span className="text-xs uppercase tracking-wider font-bold opacity-80">Daily Customers</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center space-y-1">
              <svg className="w-12 h-12 text-white mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span className="block text-4xl font-extrabold tracking-wide">1000+</span>
              <span className="text-xs uppercase tracking-wider font-bold opacity-80">Happy Customers</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center space-y-1">
              <svg className="w-12 h-12 text-white mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.493m5.007 0a3.375 3.375 0 01-5.007 0M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.72a.75.75 0 011.06 0l1.59 1.59a.75.75 0 11-1.06 1.06l-1.59-1.59a.75.75 0 010-1.06zm11.668 0a.75.75 0 010 1.06l-1.59 1.59a.75.75 0 11-1.06-1.06l1.59-1.59a.75.75 0 011.06 0z" />
              </svg>
              <span className="block text-4xl font-extrabold tracking-wide">12</span>
              <span className="text-xs uppercase tracking-wider font-bold opacity-80">Awards Received</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center justify-center space-y-1">
              <svg className="w-12 h-12 text-white mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              <span className="block text-4xl font-extrabold tracking-wide">10+</span>
              <span className="text-xs uppercase tracking-wider font-bold opacity-80">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What I Do for Healthy Nutrition? Section */}
      <section className="bg-[#b7aeac] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="space-y-6 text-slate-800">
              <h2 className="text-4xl font-extrabold tracking-tight text-[#111827]">
                What I Do for Healthy Nutrition?
              </h2>
              
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-semibold">
                Eating healthy means following a healthy eating pattern that includes a variety of nutritious foods and drinks. It also means getting the number of calories that's right for you (not eating too much or too little).
              </p>
              
              <ul className="space-y-3.5 text-sm sm:text-base font-semibold text-slate-800">
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-[#72b02a] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Develop meal plans</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-[#72b02a] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Nutritional science research</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-[#72b02a] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Clients health needs</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-[#72b02a] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Reports the patient progress</span>
                </li>
              </ul>
            </div>

            {/* Right Image Column (fruits heart stethoscope) */}
            <div className="w-full flex justify-center">
              <div className="w-full max-w-lg aspect-[4/3] bg-white overflow-hidden shadow-2xl rounded-sm">
                <img 
                  src={diabetesImg} 
                  alt="Fruits tray in shape of heart with stethoscope" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Coral Thoughts Banner Section */}
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
