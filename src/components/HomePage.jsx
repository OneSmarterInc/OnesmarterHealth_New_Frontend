// frontend/src/components/HomePage.jsx
import React from 'react';

const HomePage = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToPatientSection = (e) => {
    e.preventDefault();
    const el = document.getElementById('patient-inquiry-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* 1. Main Hero View */}
      <div className="relative min-h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/HomepageBackground.png')",
            backgroundPosition: 'center center'
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#082f2e]/95 via-[#0b3635]/80 via-[55%] to-[#dce5e2]/20" />

        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto w-full max-w-[1500px] px-8 md:px-12 lg:px-[80px] xl:px-[110px]">
            <div className="max-w-[720px] pt-8 md:pt-0">
              <p className="mb-7 text-[13px] font-bold uppercase tracking-[0.24em] text-[#b9e5df] md:text-[15px]">
                For patients outside the United States
              </p>

              <h1 className="mb-8 font-serif text-[56px] font-normal leading-[1.08] tracking-[-0.025em] text-white sm:text-[64px] md:text-[72px] lg:text-[82px] xl:text-[88px]">
                Another
                <br />
                perspective on
                <br />
                your cancer care.
              </h1>

              <p className="mb-11 max-w-[650px] text-[18px] font-normal leading-[1.65] text-white md:text-[21px]">
                We help patients outside the US connect with independent US
                clinicians and hospitals for a second opinion or possible
                treatment.
              </p>

              <button
                onClick={scrollToPatientSection}
                className="group inline-flex h-[69px] min-w-[320px] items-center justify-between rounded-[5px] bg-white px-7 text-[18px] font-bold text-[#173b49] shadow-sm transition-all duration-300 hover:bg-[#f3f7f6] cursor-pointer"
              >
                <span>Ask us about your case</span>

                <span className="ml-8 text-[24px] font-normal leading-none transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Content Section ("Good questions" & "Support at the points") */}
      <section className="bg-white py-24 px-8 md:px-12 lg:px-[80px]">
        <div className="max-w-[1500px] mx-auto space-y-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-gray-100 pb-20">
            <div className="lg:col-span-6">
              <p className="text-[#5c7c73] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                YOUR NEXT STEP
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                Good questions deserve thoughtful answers.
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-center">
              <p className="text-gray-700 text-lg font-light leading-relaxed">
                A diagnosis can bring many decisions at once. One Smarter Health helps international patients organize their questions, seek an additional medical perspective, and understand possible pathways to care in the US.
              </p>
            </div>
          </div>

          <div>
            <div className="mb-12">
              <p className="text-[#5c7c73] text-xs font-bold tracking-[0.2em] uppercase mb-3">
                HOW WE CAN HELP
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
                Support at the points that matter.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between">
                <div>
                  <span className="text-red-600 font-bold text-lg mb-6 block">01</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Pathology review</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    We can help arrange an independent clinician's review of existing pathology findings. The completed service includes a written report and a conversation with the clinician to discuss the findings and your questions.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between">
                <div>
                  <span className="text-red-600 font-bold text-lg mb-6 block">02</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Medical second opinion</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    We can help arrange an independent US specialist's review of your diagnosis, records, and treatment plan. The completed service includes a written opinion and a conversation with the clinician about your questions and possible options.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between">
                <div>
                  <span className="text-red-600 font-bold text-lg mb-6 block">03</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">US treatment coordination</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    If you are considering treatment in the United States, we can help coordinate appointments with independent hospitals and clinicians, travel planning, and lodging during treatment. Your coordinator provides a written plan of confirmed appointments and practical arrangements as they are made. We can also help gather appointment and treatment documentation for a US medical travel visa application; visa decisions are made by US authorities.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Common Questions Section (FAQs) */}
      <section className="bg-white py-24 px-8 md:px-12 lg:px-[80px] border-b border-gray-100">
        <div className="max-w-[1500px] mx-auto">
          <div className="mb-16">
            <p className="text-[#5c7c73] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              COMMON QUESTIONS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
              Before you begin
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="pb-10 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Who is this for?</h3>
              <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                This service is for patients living outside the United States who are considering a second opinion or US treatment options. A family member may start the inquiry on a patient’s behalf.
              </p>
            </div>

            <div className="pb-10 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do I need to stop my current treatment?</h3>
              <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                No. Keep working with your treating team. Any change to care should be discussed with your clinician.
              </p>
            </div>

            <div className="pb-10 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What about my reports?</h3>
              <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                Start with a short message, or include reports you already have. You can attach files to an email or send clear photos through WhatsApp. A patient coordinator will reply through the channel you used, let you know if anything else is needed, and can arrange a call if helpful.
              </p>
            </div>

            <div className="pb-10 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is the first conversation free?</h3>
              <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                Yes. You may speak with a patient coordinator and arrange follow-up calls while deciding whether to proceed. Pathology review and medical second opinion are separate paid services. US treatment coordination is also priced separately according to the support needed. A patient coordinator will explain the applicable fee and payment steps before you decide to proceed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Patient Inquiry Section at the Bottom */}
      <section id="patient-inquiry-section" className="bg-[#eaf0ed] py-24 px-8 md:px-12 lg:px-[80px] border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
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

            <div className="flex flex-wrap items-center gap-6">
              <a 
                href="https://wa.me/9322083516?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20my%20case." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#173a38] hover:bg-[#112a29] text-white font-medium px-6 py-3.5 rounded shadow flex items-center space-x-3 transition-colors"
              >
                <span>WhatsApp +91 9322083516</span>
                <span className="text-xs" aria-hidden="true">↗</span>
              </a>

              <a 
                href="mailto:PatientCare@onesmarterhealthweb.com?subject=Inquiry%20About%20My%20Case"
                className="text-gray-900 font-semibold underline underline-offset-4 hover:text-[#173a38] transition-colors text-base"
              >
                Email PatientCare@onesmarterhealthweb.com
              </a>
            </div>
          </div>

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
    </div>
  );
};

export default HomePage;