// frontend/src/components/HospitalPartnersPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HospitalPartnersPage = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      
      {/* Section 1: Hero */}
      <section className="bg-[#173a38] text-white py-28 px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#8ebfaf] text-xs font-bold tracking-[0.2em] uppercase mb-6">
            FOR HOSPITAL PARTNERS
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-normal leading-[1.1] mb-6 max-w-4xl">
            A separate conversation for hospital teams.
          </h1>
          <p className="text-[#dce5e2] text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            We welcome discussions with hospitals serving patients outside the United States who are exploring an independent US medical perspective or possible treatment.
          </p>
        </div>
      </section>

      {/* Section 2: Working Together */}
      <section className="py-24 px-8 md:px-12 lg:px-20 max-w-7xl mx-auto border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-[#5c7c73] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              WORKING TOGETHER
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
              A clear route for referrals.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-gray-700 text-base md:text-lg font-light leading-relaxed">
            <p>
              One Smarter Health coordinates patient inquiries and access to independent US clinicians and hospitals. Our three areas of support are pathology review, medical second opinion, and US treatment coordination.
            </p>
            <p>
              Hospitals can discuss referrals and collaboration through a dedicated partner route. Patients and families may also contact our patient coordinator directly through the separate patient route.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: How a referral discussion can begin (Steps) */}
      <section className="py-24 px-8 md:px-12 lg:px-20 max-w-7xl mx-auto border-b border-gray-100">
        <div className="max-w-3xl mb-16">
          <p className="text-[#5c7c73] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            A SIMPLE STARTING POINT
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
            How a referral discussion can begin.
          </h2>
        </div>

        <div className="space-y-12 max-w-4xl">
          {/* Step 1 */}
          <div className="flex flex-col sm:flex-row items-start gap-6 pb-12 border-b border-gray-100">
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center font-serif text-gray-700 text-sm flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Contact the partner team</h3>
              <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                Introduce your hospital and the kind of collaboration or referral you would like to discuss. A dedicated partner address will appear here after it is verified.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col sm:flex-row items-start gap-6 pb-12 border-b border-gray-100">
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center font-serif text-gray-700 text-sm flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Agree on the next step</h3>
              <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                Our teams can determine whether a pathology review, second opinion, or US treatment coordination is relevant and confirm the process for the individual case.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center font-serif text-gray-700 text-sm flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Arrange any record handoff</h3>
              <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                Patient records are shared with an independent clinician or hospital only after the patient’s permission and appropriate transfer instructions are in place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Partner Contact */}
      <section className="py-24 px-8 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-[#5c7c73] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              PARTNER CONTACT
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
              Dedicated contact is being verified.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-gray-700 text-base font-light leading-relaxed">
            <p>
              The proposed partner mailbox is not yet working. We will add the contact link once a test message and reply succeed. Please wait for agreed transfer instructions before sending patient records.
            </p>
            <div>
              <span className="inline-block bg-[#f0f4f2] text-[#173a38] border border-[#d2e0dc] px-4 py-2 text-sm font-semibold rounded">
                Partner contact pending verification
              </span>
            </div>
            <p className="pt-2">
              Patients and families can use the <Link to="/" className="text-[#173a38] underline font-medium hover:text-red-600">patient contact route</Link>.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HospitalPartnersPage;