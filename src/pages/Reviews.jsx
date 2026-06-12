import React from 'react';

export default function Reviews({ setActiveTab }) {
  const reviews = [
    {
      name: "Sangeetha",
      location: "Bangalore",
      text: "Dr. Swathi A S is an excellent nutritionist who helped me in achieving my weight loss goals. Her personalized approach to creating a diet plan based on my body type and lifestyle was exceptional. With her guidance, I learned how to make healthy food choices, which made a significant difference in my overall health. I would highly recommend Dr. Swathi A S to anyone who is looking to improve their diet and lead a healthier lifestyle.",
      rating: 5,
      alignLeft: true
    },
    {
      name: "Soundarya",
      location: "Bangalore",
      text: "Dr. Swathi A S is an amazing nutritionist who has helped me immensely in managing my diabetes. Her knowledge and expertise in nutrition science are second to none. She was able to create a customized meal plan that not only helped me manage my blood sugar levels but also improved my overall health. Her encouragement and support throughout the process were invaluable. I highly recommend Dr. Swathi A S to anyone looking for a nutritionist.",
      rating: 5,
      alignLeft: false
    },
    {
      name: "Abhishek",
      location: "Tumkur",
      text: "I had been struggling with gut issues for years, and nothing seemed to work until I met Dr. Swathi A S. She was able to identify the root cause of my digestive problems and created a meal plan that helped alleviate my symptoms. Her approach was holistic, and she also recommended some lifestyle changes that made a huge difference. I can't thank Dr. Swathi A S enough for the positive impact she has had on my health. I highly recommend her to anyone looking for a knowledgeable and caring nutritionist.",
      rating: 5,
      alignLeft: true
    }
  ];

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

        {/* Alternating Layout Grid */}
        <div className="space-y-12">
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${
                rev.alignLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-12 bg-[#484e36] text-white p-8 sm:p-10 rounded-2xl shadow-xl`}
            >
              {/* Card with Name & Location */}
              <div className="w-full md:w-60 bg-white text-[#1f2d5a] rounded-xl p-8 flex flex-col items-center justify-center shadow-lg text-center shrink-0 min-h-[160px]">
                <h4 className="text-xl font-bold">{rev.name}</h4>
                <p className="text-gray-500 text-sm font-medium mt-1">{rev.location}</p>
              </div>

              {/* Review Text */}
              <div className="flex-1 space-y-3">
                <div className="flex items-center text-yellow-400 text-xl">
                  ★★★★★
                </div>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-medium">
                  {rev.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Coral thoughts banner */}
        <div className="mt-16 max-w-4xl mx-auto">
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

      </div>
    </div>
  );
}
