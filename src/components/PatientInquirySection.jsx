// frontend/src/components/PatientInquirySection.jsx
import React from 'react';

const PatientInquirySection = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="patient-inquiry-section" className="bg-[#eaf0ed] py-24 px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Content Area (7 columns) */}
        <div className="lg:col-span-7">
          <p className="text-[#5c7c73] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            START WITH A QUESTION
          </p>
          
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
            Ask us about your case.
          </h2>
          
          <p className="text-gray-700 text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl">
            Email or WhatsApp our patient coordinator. You can share reports or photos when you are ready. A short message is enough to begin, and the coordinator can reply there or arrange a call. The initial conversation and follow-up calls are free while you decide whether to proceed with a paid service.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6">
            {/* WhatsApp Direct Action Link */}
            <a 
              href="https://wa.me/19373446241?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20my%20case." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#173a38] hover:bg-[#112a29] text-white font-medium px-6 py-3.5 rounded shadow flex items-center space-x-3 transition-colors"
            >
              <span>WhatsApp +1 937-344-6241</span>
              <span className="text-xs" aria-hidden="true">↗</span>
            </a>

            {/* Direct Email Link */}
            <a 
              href="mailto:PatientCare@onesmarterhealthweb.com?subject=Inquiry%20About%20My%20Case"
              className="text-gray-900 font-semibold underline underline-offset-4 hover:text-[#173a38] transition-colors text-base"
            >
              Email PatientCare@onesmarterhealthweb.com
            </a>
          </div>
        </div>

        {/* Right Info Box Area (5 columns) */}
        <div className="lg:col-span-5 bg-white p-8 rounded shadow-sm border-l-4 border-red-600 relative">
          <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">
            Choose what is easiest
          </h3>
          
          <div className="text-gray-600 text-sm space-y-4 font-light leading-relaxed">
            <p>
              You do not need an account or a desktop computer to ask a question. You may share reports you already have, and our team can follow up if more information is needed.
            </p>
            <p>
              Payment and appointment requests are not active in this preview.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-100">
            <a 
              href="#home" 
              onClick={scrollToTop} 
              className="text-gray-900 font-semibold text-sm hover:text-red-600 transition-colors inline-flex items-center gap-1"
            >
              Back to top ↑
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PatientInquirySection;