// frontend/src/components/HowItWorksPage.jsx
import React from 'react';

const steps = [
  {
    number: "1",
    title: "Tell us what you need",
    description: "Share whether you are seeking a pathology review, a second opinion, or help exploring treatment in the US."
  },
  {
    number: "2",
    title: "Prepare your records",
    description: "Gather relevant reports, imaging, and treatment history. We will explain what is needed for the requested service."
  },
  {
    number: "3",
    title: "Connect with a specialist",
    description: "Following case review and appropriate arrangements, a US-based clinical team can evaluate the material and discuss its findings."
  },
  {
    number: "4",
    title: "Plan the next conversation",
    description: "Use the opinion to discuss options and next steps with your treating physician and family."
  }
];

const HowItWorksPage = () => {
  return (
    <div className="bg-white min-h-[85vh] py-24 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Heading and Context */}
        <div className="max-w-md">
          <p className="text-[#3b6e6e] text-sm font-bold tracking-[0.15em] uppercase mb-6">
            The Process
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a3636] leading-[1.1] mb-6">
            A clearer route from question to conversation.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Your existing doctors remain an important part of your care. The steps below show the intended service journey; the secure intake process is being rebuilt.
          </p>
        </div>

        {/* Right Column: Steps List */}
        <div className="flex flex-col">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`flex items-start gap-6 py-8 ${
                index !== 0 ? 'border-t border-gray-200' : 'pt-0'
              }`}
            >
              {/* Circled Number */}
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#6c9c9c] text-[#1a3636] font-bold text-lg">
                {step.number}
              </div>
              
              {/* Step Content */}
              <div>
                <h3 className="text-xl font-bold text-[#1a3636] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HowItWorksPage;