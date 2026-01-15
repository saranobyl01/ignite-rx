import React from 'react';

const HowToOrder = () => {
  const steps = [
    {
      id: 1,
      title: "Take the health questionnaire",
      desc: "Based on your state, a synchronous online visit may be required"
    },
    {
      id: 2,
      title: "Get your prescription",
      desc: "All prescriptions overseen by fully licensed and insured physicians"
    },
    {
      id: 3,
      title: "Get your meds",
      desc: "Fast free delivery from our accredited pharmacies"
    }
  ];

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto">
        {/* Solution Box */}
        <div className="bg-[#f17625] p-4 md:p-24 flex flex-col justify-center items-center text-center">
          <h3 className="text-black text-4xl md:text-5xl font-bold uppercase mb-8 tracking-tighter">
            How to order ?
          </h3>
          <p className="text-black text-sm md:text-base font-medium max-w-md leading-relaxed">
          </p>
        </div>

        {/* Steps Box */}
        <div className="bg-white p-4 md:p-24 flex flex-col justify-center border-t md:border-t-0 md:border-l border-black/5">
          <h3 className="text-black text-4xl md:text-5xl font-bold uppercase mb-2 tracking-tighter leading-none">
            SIMPLE STEPS TO BETTER HEALTH
          </h3>
          <p className="text-gray-600 mb-12">Your journey to optimal health starts here</p>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start gap-6">
                <div className="bg-[#f17625] text-black w-10 h-10 flex items-center justify-center font-bold shrink-0">
                  {step.id}
                </div>
                <div>
                  <h4 className="text-black font-bold text-lg uppercase tracking-tight">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
