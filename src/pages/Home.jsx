import React, { useState } from 'react';
import drSwathi from '../assets/main image.jpeg';
import meditatingVeg from '../assets/meditating_veg.png';
import cancerCareImg from '../assets/cancer_care.png';
import pcodPcosImg from '../assets/pcod_pcos.png';
import bladderStoneImg from '../assets/bladder_stone.png';
import kidneyStoneImg from '../assets/kidney_stone.png';
import thyroidImg from '../assets/thyroid.png';
import diabetesImg from '../assets/diabetes.png';
import bloodPressureImg from '../assets/blood_pressure.png';
import weightLossImg from '../assets/weight_loss.png';
import gastricReversalImg from '../assets/gastric_reversal.png';
import dermaCareImg from '../assets/derma_care.png';
import { Phone, CheckCircle } from 'lucide-react';

export default function Home({ setActiveTab, setActiveSpecialty }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1200);
  };

  const specializations = [
    {
      image: cancerCareImg,
      title: "CANCER CARE",
      desc: "Cancer care encompasses a range of medical, physical, and emotional interventions aimed at preventing, detecting, diagnosing, treating, and managing cancer and its associated symptoms. It involves a multidisciplinary approach and personalized care tailored to the unique needs of each patient.",
      doubleButtons: true
    },
    {
      image: pcodPcosImg,
      title: "PCOD , PCOS",
      desc: "Polycystic ovary syndrome (PCOS) and polycystic ovary disease (PCOD) are endocrine disorders characterized by hormonal imbalances that affect the ovaries and can lead to infertility, irregular periods, and other health issues. Treatment may involve lifestyle changes, medications, and in some cases, surgery.",
      doubleButtons: true
    },
    {
      image: bladderStoneImg,
      title: "BLADDER STONE REVERSAL",
      desc: "Bladder stone reversal refers to the use of non-invasive methods to break down and eliminate bladder stones. This may involve medications, dietary changes, and/or the use of ultrasound or laser technology.",
      doubleButtons: true
    },
    {
      image: kidneyStoneImg,
      title: "KIDNEY STONE REVERSAL",
      desc: "Kidney stone reversal involves the use of non-invasive or minimally invasive techniques to break up and remove kidney stones. This may include shockwave lithotripsy, ureteroscopy, or percutaneous nephrolithotomy, depending on the size and location of the stone.",
      doubleButtons: true
    },
    {
      image: thyroidImg,
      title: "THYROID",
      desc: "The thyroid is a small gland located in the neck that produces hormones that regulate metabolism and other bodily functions. Thyroid disorders, such as hypothyroidism and hyperthyroidism, can cause a range of symptoms and may require medical treatment.",
      doubleButtons: true
    },
    {
      image: diabetesImg,
      title: "DIABETES",
      desc: "Diabetes is a chronic medical condition characterized by high levels of glucose (sugar) in the blood. It can lead to a range of complications if left untreated, and management typically involves a combination of medication, lifestyle changes, and monitoring of blood sugar levels.",
      doubleButtons: true
    },
    {
      image: bloodPressureImg,
      title: "BLOOD PRESSURE",
      desc: "Blood pressure refers to the force exerted by circulating blood on the walls of blood vessels. High blood pressure (hypertension) can increase the risk of heart disease and other health issues, while low blood pressure (hypotension) can cause dizziness, fainting, and other symptoms.",
      doubleButtons: true
    },
    {
      image: weightLossImg,
      title: "WEIGHT LOSS",
      desc: "Weight loss refers to the process of reducing body weight, typically for health or aesthetic reasons. This can be achieved through a combination of dietary changes, exercise, and other lifestyle modifications.",
      doubleButtons: true
    },
    {
      image: gastricReversalImg,
      title: "GASTRIC REVERSAL",
      desc: "Gastric reversal refers to the reversal of a previous weight loss surgery, such as gastric bypass or gastric sleeve. This may be necessary in cases where the initial surgery was unsuccessful or resulted in complications.",
      doubleButtons: true
    },
    {
      image: dermaCareImg,
      title: "DERMA CARE",
      desc: "Dermacare refers to the specialized medical care and treatment of skin-related conditions and diseases, such as acne, eczema, psoriasis, and skin cancer. It may involve a range of interventions, including topical or systemic medications, light therapy, and surgical procedures.",
      doubleButtons: false
    }
  ];

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 bg-[#484e36] text-white overflow-hidden">
        {/* Left Side: Copy */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left px-8 py-16 sm:py-24 md:pl-20 md:pr-12 space-y-6">
          <span className="text-xl font-bold text-[#8cc63f]">
            Hello I Am Nutritionist
          </span>

          <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-white leading-tight">
            Dr. Swathi A S
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-gray-100 max-w-lg italic font-medium pt-2">
            " Right Fasting is an holistic approach to heal ailments in a natural manner with right consumption of nutritional supplements timely "
          </p>

          <div className="pt-6">
            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center space-x-2 bg-[#d6d9c0] hover:bg-[#cbd1b4] text-slate-900 font-bold px-8 py-3.5 rounded-sm shadow-md transition-all cursor-pointer text-base uppercase tracking-wider"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Schedule A Call</span>
            </button>
          </div>
        </div>

        {/* Right Side: Photo of Dr. Swathi */}
        <div className="w-full h-full min-h-[450px] relative">
          <img
            src={drSwathi}
            alt="Dr. Swathi A S in clinic"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* 2. Stats Ribbon Strip */}
      <section className="bg-[#cccccc] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center justify-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center space-y-2">
              <svg className="w-12 h-12 text-white fill-current mb-1" viewBox="0 0 24 24">
                <path d="M22 5v14c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3V5c0-1.66 1.34-3 3-3h14c1.66 0 3 1.34 3 3zM7 7h3v3H7V7zm8 0H11v2h4V7zm4 0h-3v2h3V7zm-9 5H7v2h3v-2zm9 0h-7v2h7v-2zm-9 3H7v2h3v-2zm9 0h-7v2h7v-2z" />
              </svg>
              <span className="block text-4xl font-extrabold">10+</span>
              <span className="text-sm font-bold opacity-90">Daily Customers</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center space-y-2">
              <svg className="w-12 h-12 text-white fill-current mb-1" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span className="block text-4xl font-extrabold">1,000+</span>
              <span className="text-sm font-bold opacity-90">Happy Customers</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center space-y-2">
              <svg className="w-12 h-12 text-white fill-current mb-1" viewBox="0 0 24 24">
                <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v3c0 2.44 1.72 4.48 4 4.89V17c0 2.21 1.79 4 4 4h2c2.21 0 4-1.79 4-4v-2.11c2.28-.41 4-2.45 4-4.89V7c0-1.1-.9-2-2-2zM5 10V7h2v3H5zm14 0h-2V7h2v3z" />
              </svg>
              <span className="block text-4xl font-extrabold">6+</span>
              <span className="text-sm font-bold opacity-90">Awards Received</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center justify-center space-y-2">
              <svg className="w-12 h-12 text-white fill-current mb-1" viewBox="0 0 24 24">
                <path d="M22.84 9.17a3 3 0 00-4.24 0L15.34 12l-1.12-1.12a3.01 3.01 0 00-4.24 0l-4 4a3 3 0 104.24 4.24l3.12-3.12 1.43 1.43a1 1 0 001.41 0l6.66-6.66a3 3 0 000-4.24l.01-.38zm-15.6 7.66a1 1 0 11-1.41-1.41l4-4a1 1 0 011.41 1.41l-4 4zm13.48-7.66l-6.66 6.66a1 1 0 01-1.41-1.41l6.66-6.66a1 1 0 111.41 1.41z" />
              </svg>
              <span className="block text-4xl font-extrabold">10+</span>
              <span className="text-sm font-bold opacity-90">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Intro details about why Fasting Nutrocare */}
      <section className="bg-[#484e36] text-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Meditating silhouette image */}
            <div className="flex justify-center">
              <div className="max-w-md w-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={meditatingVeg}
                  alt="Meditating vegetable yoga silhouette"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Text description */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                Why Fasting Nutrocare?
              </h2>

              <div className="space-y-4 text-gray-200 text-sm sm:text-base leading-relaxed">
                <p>
                  Fasting has been practiced for centuries as a part of religious and cultural traditions. However, it is also gaining popularity as a health-promoting strategy. As a nutritionist, I often get asked about the benefits and risks of fasting.
                </p>
                <p>
                  Fasting involves abstaining from food and drink for a certain period of time, usually ranging from a few hours to several days.
                </p>
                <p>
                  There are different types of fasting, including intermittent fasting, which involves limiting food intake to certain periods of time each day, and prolonged fasting, which involves abstaining from food for multiple days.
                </p>
              </div>

              <div className="pt-2">
                <p className="font-display font-bold text-lg text-white">
                  Dr. Swathi A S
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => handleNavClick('about')}
                  className="bg-[#76b029] hover:bg-[#639322] text-white font-bold px-8 py-3 rounded-sm shadow-md transition-colors cursor-pointer text-sm"
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Specializations Section */}
      <section className="w-full bg-[#cef2fe] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#484e36] tracking-wide">
              Our Specializations
            </h2>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {specializations.map((spec, idx) => (
              <div key={idx} className="flex flex-col space-y-4">
                {/* Image Frame with gray thin border */}
                <div className="w-full aspect-[4/3] bg-white overflow-hidden border border-gray-300 shadow-sm">
                  <img
                    src={spec.image}
                    alt={spec.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title (centered, bold olive green) */}
                <h3 className="font-sans text-xl font-bold text-[#484e36] text-center uppercase tracking-wide">
                  {spec.title}
                </h3>

                {/* Description (left-aligned, comfortable text size, dark gray) */}
                <p className="text-[#334155] text-sm leading-relaxed grow text-left font-medium">
                  {spec.desc}
                </p>

                {/* Actions row: View More and Call Now */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <button
                    onClick={() => {
                      if (spec.title === "CANCER CARE") {
                        setActiveSpecialty('cancer-care');
                      } else if (spec.title === "PCOD , PCOS") {
                        setActiveSpecialty('pcod-pcos');
                      } else if (spec.title === "BLADDER STONE REVERSAL") {
                        setActiveSpecialty('bladder-stone-reversal');
                      } else if (spec.title === "KIDNEY STONE REVERSAL") {
                        setActiveSpecialty('kidney-stone-reversal');
                      } else if (spec.title === "THYROID") {
                        setActiveSpecialty('thyroid');
                      } else if (spec.title === "DIABETES") {
                        setActiveSpecialty('diabetes');
                      } else if (spec.title === "BLOOD PRESSURE") {
                        setActiveSpecialty('blood-pressure');
                      } else if (spec.title === "WEIGHT LOSS") {
                        setActiveSpecialty('weight-loss');
                      } else if (spec.title === "GASTRIC REVERSAL") {
                        setActiveSpecialty('gastric-reversal');
                      } else if (spec.title === "DERMA CARE") {
                        setActiveSpecialty('derma-care');
                      } else {
                        setActiveSpecialty(null);
                      }
                      handleNavClick('services');
                    }}
                    className="bg-[#72b02a] hover:bg-[#5f9322] text-white font-bold py-2 px-4 rounded-sm text-xs sm:text-sm transition-colors text-center cursor-pointer shadow-sm uppercase"
                  >
                    View More
                  </button>
                  {spec.doubleButtons && (
                    <a
                      href="tel:+919902670665"
                      className="bg-[#72b02a] hover:bg-[#5f9322] text-white font-bold py-2 px-4 rounded-sm text-xs sm:text-sm transition-colors text-center cursor-pointer shadow-sm uppercase block"
                    >
                      Call Now
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Red Send an Enquiry Card + Black Social Bar */}
            <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row items-stretch shadow-md overflow-hidden min-h-[350px]">
              {/* Red Card */}
              <div className="bg-[#ff0000] text-white flex-1 p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-center font-display text-2xl font-bold mb-6 tracking-wide">
                  Send an Enquiry
                </h3>

                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center text-center space-y-4">
                    <CheckCircle className="w-12 h-12 text-[#72b02a]" />
                    <p className="text-sm font-semibold">Thank you for your enquiry. We will contact you soon!</p>
                    <button onClick={() => setStatus('idle')} className="text-xs underline cursor-pointer">Submit Another</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-slate-800">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full px-4 py-2.5 bg-white border-0 text-sm focus:outline-none placeholder-gray-500 font-semibold"
                    />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-2.5 bg-white border-0 text-sm focus:outline-none placeholder-gray-500 font-semibold"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full px-4 py-2.5 bg-white border-0 text-sm focus:outline-none placeholder-gray-500 font-semibold"
                    />
                    <textarea
                      name="message"
                      rows="3"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className="w-full px-4 py-2.5 bg-white border-0 text-sm focus:outline-none placeholder-gray-500 font-semibold resize-none"
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="bg-[#72b02a] hover:bg-[#5f9322] text-white font-bold py-2.5 px-8 text-sm uppercase transition-colors rounded-sm cursor-pointer block"
                    >
                      {status === 'loading' ? 'Sending...' : 'Submit'}
                    </button>
                  </form>
                )}
              </div>

              {/* Black Social Bar */}
              <div className="bg-black text-white w-full sm:w-16 flex sm:flex-col items-center justify-center gap-6 py-6 sm:py-0 shrink-0">
                <a href="https://www.instagram.com/fastingnutrocare/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors" aria-label="Instagram">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.869a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
                </a>
                <a href="https://www.youtube.com/@DrSwathiASAyurvedictips" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors" aria-label="YouTube">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
                <a href="https://www.justdial.com/Bangalore/Fasting-Nutro-Care-Opposite-Balaji-Charitable-Trust-Subramanya-Nagar/080PXX80-XX80-250516191828-G8H4_BZDET" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors" aria-label="JustDial">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
                    <text x="50%" y="50%" textAnchor="middle" dy=".35em" fontSize="12" fontWeight="bold">JD</text>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="w-full bg-[#484e36] text-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-wide">Testimonials</h2>
            <p className="text-gray-300 text-sm mt-2">What people say about us</p>
          </div>

          <div className="flex justify-center min-h-[400px]">
            <div className="elfsight-app-d6aef1e7-66c4-4821-ac58-1ddf6baf28bc" data-elfsight-app-lazy></div>
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => handleNavClick('reviews')}
              className="bg-[#72b02a] hover:bg-[#5f9322] text-white font-bold py-3.5 px-8 rounded-sm text-sm transition-colors cursor-pointer uppercase shadow-md"
            >
              See Our Reviews
            </button>
          </div>
        </div>
      </section>


    </div>
  );
}
