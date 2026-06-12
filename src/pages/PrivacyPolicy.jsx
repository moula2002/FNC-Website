import React from 'react';

export default function PrivacyPolicy({ setActiveTab }) {
  return (
    <div className="w-full bg-[#f8f9fa] pt-0 pb-0">

      {/* Header Banner with V-Shape Bottom */}
      <section className="relative bg-[#3a414e] py-16 sm:py-24 text-center">
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
          Privacy Policy
        </h1>
        <div
          className="absolute bottom-0 left-0 right-0 h-8 bg-[#f8f9fa]"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 50% 0, 0 100%)' }}
        />
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-14">

        {/* Back Button */}
        <button
          onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-slate-500 hover:text-slate-800 font-bold text-sm mb-8 inline-flex items-center gap-2 cursor-pointer transition-colors"
        >
          ← Back to Home
        </button>

        <div className="bg-[#484e36] text-white p-8 sm:p-12 rounded-sm shadow-xl space-y-8">

          <p className="text-gray-300 text-sm italic text-center">
            Last Updated: June 2025
          </p>

          {/* Intro */}
          <div className="space-y-4 text-gray-100 text-base sm:text-lg leading-relaxed font-medium">
            <p>
              Welcome to Fasting Nutrocare. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#d6d9c0]">1. Information We Collect</h2>
            <div className="space-y-3 text-gray-100 text-base sm:text-lg leading-relaxed font-medium">
              <p>
                We may collect personal information that you voluntarily provide to us when you fill out enquiry forms, contact us, or use our services. This information may include:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-gray-200">
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Health-related information you choose to share for consultation purposes</li>
                <li>Any message or query you submit through our contact forms</li>
              </ul>
              <p>
                We also automatically collect certain non-personal information such as browser type, device type, pages visited, and time spent on the website via standard web analytics tools.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#d6d9c0]">2. How We Use Your Information</h2>
            <div className="space-y-3 text-gray-100 text-base sm:text-lg leading-relaxed font-medium">
              <p>We use the information collected to:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-gray-200">
                <li>Respond to your enquiries and provide consultations</li>
                <li>Schedule appointments and follow-up communications</li>
                <li>Send informational updates, health tips, or newsletters (only with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p>
                We do not sell, trade, or rent your personal information to any third parties.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#d6d9c0]">3. Health Information</h2>
            <p className="text-gray-100 text-base sm:text-lg leading-relaxed font-medium">
              Any health-related information you share with Dr. Swathi A S or Fasting Nutrocare is treated with the strictest confidence. It is used solely to provide you with personalised nutritional and wellness guidance and is never disclosed to third parties without your explicit consent, except where required by law.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#d6d9c0]">4. Cookies</h2>
            <p className="text-gray-100 text-base sm:text-lg leading-relaxed font-medium">
              Our website may use cookies to enhance your browsing experience. Cookies are small data files stored on your device. You may choose to disable cookies through your browser settings; however, some features of the website may not function properly as a result.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#d6d9c0]">5. Third-Party Links</h2>
            <p className="text-gray-100 text-base sm:text-lg leading-relaxed font-medium">
              Our website may contain links to third-party websites (e.g. WhatsApp, social media). We are not responsible for the privacy practices or content of those external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#d6d9c0]">6. Data Security</h2>
            <p className="text-gray-100 text-base sm:text-lg leading-relaxed font-medium">
              We take reasonable administrative and technical measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#d6d9c0]">7. Your Rights</h2>
            <div className="space-y-3 text-gray-100 text-base sm:text-lg leading-relaxed font-medium">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-gray-200">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of any marketing communications at any time</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at <span className="text-[#8cc63f] font-bold">dr.swathifnc@gmail.com</span>.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#d6d9c0]">8. Changes to This Policy</h2>
            <p className="text-gray-100 text-base sm:text-lg leading-relaxed font-medium">
              We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#d6d9c0]">9. Contact Us</h2>
            <p className="text-gray-100 text-base sm:text-lg leading-relaxed font-medium">
              If you have any questions or concerns about this Privacy Policy, please reach out to us directly:
            </p>

            {/* Contact Card */}
            <div className="bg-[#3a414e] rounded-sm p-6 sm:p-8 space-y-4 border border-[#5a6370]">
              {/* Name */}
              <div className="flex items-center gap-4">
                <span className="text-2xl">👩‍⚕️</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-0.5">Nutritionist</p>
                  <p className="text-white font-bold text-lg sm:text-xl">Dr. Swathi AS</p>
                </div>
              </div>

              <div className="border-t border-[#5a6370]" />

              {/* Phone */}
              <div className="flex items-center gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-0.5">Phone</p>
                  <a
                    href="tel:+919902670665"
                    className="text-[#8cc63f] font-bold text-lg sm:text-xl hover:underline transition-colors"
                  >
                    +91 99026 70665
                  </a>
                </div>
              </div>

              <div className="border-t border-[#5a6370]" />

              {/* Email */}
              <div className="flex items-center gap-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-0.5">Email</p>
                  <a
                    href="mailto:dr.swathifnc@gmail.com"
                    className="text-[#8cc63f] font-bold text-lg sm:text-xl hover:underline transition-colors"
                  >
                    dr.swathifnc@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom olive banner */}
      <section className="w-full bg-[#484e36] py-10">
        <p className="text-center text-gray-300 text-sm font-medium">
          © {new Date().getFullYear()} Fasting Nutrocare — Dr. Swathi A S. All Rights Reserved.
        </p>
      </section>

    </div>
  );
}
