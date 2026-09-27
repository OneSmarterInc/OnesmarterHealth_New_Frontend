// frontend/src/components/AboutPage.jsx
import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-[#1c3633] min-h-[60vh] flex items-center py-24 px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Left Column: Heading */}
        <div className="max-w-xl">
          <p className="text-[#8ebfaf] text-sm font-bold tracking-[0.15em] uppercase mb-6">
            Why One Smarter Health
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif text-white leading-[1.15]">
            Built around access to a second perspective.
          </h2>
        </div>

        {/* Right Column: Paragraphs */}
        <div className="flex flex-col lg:pt-12">
          <p className="text-white text-lg leading-relaxed mb-10 font-light">
            One Smarter Health began with a personal understanding of how 
            difficult it can be to find a timely, informed medical perspective for 
            a family member. Our aim is to help people outside the US 
            navigate the process of seeking specialist input and considering 
            US-based care.
          </p>
          
          <p className="text-[#9baaa8] text-sm leading-relaxed max-w-lg">
            Services depend on the individual case and clinician availability. A second 
            opinion does not replace care from your treating physician.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;