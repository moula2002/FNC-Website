import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

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

  return (
    <div className="w-full bg-[#f8f9fa] pt-0 pb-0">
      {/* Centered Contact Header Banner with V-Shape Bottom */}
      <section className="relative bg-[#3a414e] py-16 sm:py-24 text-center">
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
          Contact
        </h1>
        {/* V-Shape Point at bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-8 bg-white" 
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 50% 0, 0 100%)' }}
        />
      </section>

      {/* Main Form & Details Container Card */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
        <div className="bg-white shadow-xl rounded-sm border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-12">
          
          {/* Left: Get In Touch */}
          <div className="md:col-span-5 bg-gray-50 p-8 sm:p-12 space-y-10 border-r border-gray-100">
            <h2 className="text-3xl font-bold text-slate-800 tracking-tight">
              Get In Touch
            </h2>
            <hr className="border-gray-200" />
            
            <div className="space-y-8">
              {/* Call section */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1e293b] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Call Us</h3>
                  <a href="tel:+919902670665" className="text-slate-600 font-semibold hover:text-[#72b02a] transition-colors mt-1 block">
                    +91 99026 70665
                  </a>
                </div>
              </div>

              {/* Email section */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1e293b] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Email Us</h3>
                  <a href="mailto:dr.swathifnc@gmail.com" className="text-slate-600 font-semibold hover:text-[#72b02a] transition-colors mt-1 block">
                    dr.swathifnc@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Send an Enquiry Form */}
          <div className="md:col-span-7 p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-slate-800 text-center tracking-tight mb-8">
              Send an Enquiry
            </h2>
            
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-sm text-center">
                <h4 className="font-bold text-lg mb-1">Enquiry Submitted!</h4>
                <p className="text-sm">Thank you. We will get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm font-semibold underline text-green-800 hover:text-green-950"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name" 
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#72b02a] text-slate-800 placeholder-gray-400"
                  />
                </div>

                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number" 
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#72b02a] text-slate-800 placeholder-gray-400"
                  />
                </div>

                <div>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email" 
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#72b02a] text-slate-800 placeholder-gray-400"
                  />
                </div>

                <div>
                  <textarea 
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message" 
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#72b02a] text-slate-800 placeholder-gray-400 resize-none"
                  />
                </div>

                <div>
                  <button 
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-[#72b02a] hover:bg-[#5f9322] text-white font-bold rounded-sm text-sm tracking-wide transition-colors uppercase cursor-pointer"
                  >
                    {status === 'loading' ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Locate Us Banner Section */}
      <section className="bg-[#3a414e] py-8 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide uppercase">
          Locate Us
        </h2>
      </section>
      {/* Google Map Embedded iframe */}
      <div className="w-full h-[450px] bg-gray-100 border-b border-gray-200">
        <iframe 
          title="Fasting Nutro Care Clinic Map Location"
          src="https://maps.google.com/maps?q=Fasting%20Nutro%20Care,%20Subramanya%20Nagar,%20Gayathrinagar,%20Bangalore&t=&z=16&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </div>
  );
}
