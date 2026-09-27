import React from 'react';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] pb-16">
      <div className="w-full bg-white overflow-hidden">
        <img
          src="/images/Pricingimage.png"
          alt="One Smarter Health Services"
          className="block w-full h-[255px] object-cover object-center"
        />
      </div>

      <main className="w-full">
        <section className="mx-auto max-w-[1700px] px-6 md:px-10 lg:px-12 pt-[76px]">
          <div className="mx-auto max-w-[1250px] text-center">
            <h1 className="text-[30px] md:text-[34px] leading-tight font-bold text-[#263746] mb-5">
              One Smarter Health Services Available to Global Patients
              <sup className="text-[12px] align-super ml-1">1</sup>
            </h1>

            <p className="text-[16px] leading-7 text-[#303b46]">
              One Smarter Health provides healthcare advisory services such as
              E-Consults, 2nd Opinions, Pathology E-Consults, and USA-based
              treatment services.
            </p>
          </div>

          <div className="mt-[64px] grid grid-cols-1 lg:grid-cols-3 gap-[38px] items-stretch">
            <div className="bg-white border border-[#e2e2e2] min-h-[560px] flex flex-col">
              <div className="text-center px-7 pt-5 pb-6 border-b border-[#e5e5e5]">
                <h2 className="text-[18px] font-medium text-[#172b3d] mb-4">
                  Online Pathology E-Consult
                </h2>

                <div className="text-[40px] leading-none font-bold text-[#ed1c24]">
                  $200
                </div>
              </div>

              <div className="px-7 py-6 text-[17px] leading-8 text-[#263746]">
                <h3 className="text-center font-bold text-[#172b3d] mb-7">
                  Includes:
                </h3>

                <p className="text-center mb-6">
                  A review of your pathology reports by a pathologist in the
                  United States.
                </p>

                <div className="border-t border-[#eeeeee] my-5" />

                <p className="text-center mb-6">
                  Providing you a pathology E-Consult based on your needs and
                  requirements.
                </p>

                <div className="border-t border-[#eeeeee] my-5" />

                <p className="text-center mb-6">
                  Summary through over the important points on the United
                  States.
                </p>

                <p className="text-center mb-6">
                  A secure online portal is readily accessible to submit your
                  requests and supporting documents.
                </p>

                <p className="text-center">
                  If you require assistance to submit digital scans of glass
                  slides, this service is available at an extra cost.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#e2e2e2] min-h-[560px] flex flex-col">
              <div className="text-center px-7 pt-5 pb-6 border-b border-[#e5e5e5]">
                <h2 className="text-[18px] font-medium text-[#172b3d] mb-4">
                  Medical 2<sup className="text-[11px]">nd</sup> Opinion
                </h2>

                <div className="text-[40px] leading-none font-bold text-[#ed1c24]">
                  $1000
                </div>
              </div>

              <div className="px-7 py-6 text-[17px] leading-8 text-[#263746]">
                <h3 className="text-center font-bold text-[#172b3d] mb-7">
                  Includes:
                </h3>

                <p className="text-center mb-6">
                  A medical 2nd opinion can be requested for serious medical
                  conditions. This service is more detailed than a E-Consult
                  and involves a team review led by a specialist.
                </p>

                <div className="border-t border-[#eeeeee] my-5" />

                <p className="text-center mb-6">
                  A review of your medical condition by a specialty
                  observation.
                </p>

                <div className="border-t border-[#eeeeee] my-5" />

                <p className="text-center mb-6">
                  A review of labs, pathology report, and other supporting
                  document values.
                </p>

                <div className="border-t border-[#eeeeee] my-5" />

                <p className="text-center mb-6">
                  A 60-minute call with the lead doctor.
                </p>

                <p className="text-center">
                  A secure online portal is readily accessible to submit your
                  requests and supporting documents.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#e2e2e2] min-h-[560px] flex flex-col">
              <div className="text-center px-7 pt-5 pb-6 border-b border-[#e5e5e5]">
                <h2 className="text-[18px] font-medium text-[#172b3d] mb-4">
                  USA-Treatment Options
                </h2>

                <div className="text-[40px] leading-none font-bold text-[#ed1c24]">
                  Variable
                </div>
              </div>

              <div className="px-7 py-6 text-[17px] leading-8 text-[#263746]">
                <h3 className="text-center font-bold text-[#172b3d] mb-7">
                  Includes:
                </h3>

                <p className="text-center mb-6">
                  Should you require treatment at a medical facility in the
                  United States, we offer answers to help you select the most
                  appropriate hospital, physician, and care specialist.
                </p>

                <div className="border-t border-[#eeeeee] my-5" />

                <p className="text-center mb-6">
                  We will offer assistance for the most efficient service at
                  your chosen facility and walk you through the treatment life
                  cycle.
                </p>

                <div className="border-t border-[#eeeeee] my-5" />

                <p className="text-center">
                  Services are personalized for each patient and their need.
                  Please contact us to discuss your requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 pb-8">
            <p className="text-[12px] text-[#666666]">
              1. One Smarter Health services are not available to those living
              in the United States.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PricingPage;