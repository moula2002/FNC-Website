import React, { useState } from 'react';
import { Send, CheckCircle, Loader } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        interest: '',
        message: ''
      });
    }, 1500);
  };

  const interests = [
    'Weight Loss & Management',
    'Diabetes Reversal',
    'Kidney & Bladder Stone Reversal',
    'PCOS / PCOD & Thyroid Management',
    'Cancer Care (Pain Management)',
    'Derma Care (Skin Health)',
    'Gastric Reversal',
    'BP & Stress Management'
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-secondary-100 relative overflow-hidden">
      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-6 animate-bounce">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h3 className="font-display text-2xl font-bold text-primary-950 mb-2">
            Consultation Requested!
          </h3>
          <p className="text-secondary-600 max-w-md mb-8 text-sm">
            Thank you for reaching out to Fasting Nutrocare. Dr. Swathi's team will contact you within 24 business hours to confirm your appointment.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="px-6 py-2.5 bg-primary-600 hover:bg-primary-500 text-white rounded-full text-sm font-semibold transition-all cursor-pointer"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center md:text-left mb-4">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-primary-950">
              Book a Consultation
            </h3>
            <p className="text-secondary-500 text-xs sm:text-sm mt-1">
              Start your healing journey with a personalized nutritional assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-primary-950 uppercase tracking-wider mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-secondary-200 bg-secondary-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-primary-900"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-primary-950 uppercase tracking-wider mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit number"
                className="w-full px-4 py-3 rounded-xl border border-secondary-200 bg-secondary-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-primary-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-primary-950 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl border border-secondary-200 bg-secondary-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-primary-900"
              />
            </div>

            {/* Area of Interest */}
            <div>
              <label htmlFor="interest" className="block text-xs font-semibold text-primary-950 uppercase tracking-wider mb-2">
                Condition/Specialty *
              </label>
              <select
                id="interest"
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-secondary-200 bg-secondary-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-primary-900 cursor-pointer"
              >
                <option value="">Select an option</option>
                {interests.map((option, idx) => (
                  <option key={idx} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-primary-950 uppercase tracking-wider mb-2">
              Brief health overview / goals
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your health history and what you wish to resolve..."
              className="w-full px-4 py-3 rounded-xl border border-secondary-200 bg-secondary-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-primary-900 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 bg-primary-600 hover:bg-primary-500 disabled:bg-primary-300 text-white rounded-xl text-sm font-semibold shadow-md hover:shadow-lg flex items-center justify-center space-x-2 transition-all cursor-pointer"
          >
            {status === 'loading' ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                <span>Submitting Details...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Appointment Request</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
