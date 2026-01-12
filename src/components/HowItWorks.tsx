import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import bottle from "../assets/how_bottle.webp";

// Import Swiper styles
import 'swiper/css';

const HowItWorks = () => {
  const scrollTexts = [
    // "NO CLINIC VISITS",
    // "USER-FRIENDLY PROCESSES",
    // "UNLIMITED ACCESS TO A WIDE RANGE OF TESTS",
    // "TRANSPARENT PRICING",
    // "NO CLINIC VISITS",
    // "USER-FRIENDLY PROCESSES",
    "100% discreet",
    "Online Consultation",
    "U.S. board certified physicians",
    "Fast free delivery",
  ];

  const steps = [
    // {
    //   id: 1,
    //   title: "Order Online",
    //   desc: "Choose your labs or medications through our secure platform"
    // },
    // {
    //   id: 2,
    //   title: "Quick Delivery",
    //   desc: "Receive your items directly at your doorstep"
    // },
    // {
    //   id: 3,
    //   title: "Track Progress",
    //   desc: "Monitor your results and adjust your protocol as needed"
    // }
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
    <section className="bg-black text-white pt-20 overflow-hidden relative">
      {/* 1. Main Headline */}
      <div className="container mx-auto px-6 text-center mb-6 md:mb-16 relative z-10 pb-20 lg:pb-60">
        <h2 className=" text-white text-3xl md:text-[70px] md:leading-[70px] font-extrabold leading-tight uppercase max-w-[864px] mx-auto">
        Healthcare designed for individualized care, guided by licensed physicians
        </h2>
      </div>

      {/* 2. Floating Product Image */}
      <div className="absolute top-[26%] md:top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-[30%] z-30 pointer-events-none">
        <img 
          src={bottle} 
          alt="Tadalafil Bottle" 
          className="w-[500px] h-auto rotate-[-20deg]"
        />
      </div>

      {/* 3. Infinite Scrolling Ticker (Using Swiper) */}
      <div className="relative border-y border-white/10 py-6 bg-black z-20">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView="auto"
          loop={true}
          speed={5000} // Speed of the transition
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false} // Keeps it purely decorative
          className="ticker-swiper"
        >
          {/* Repeat items enough times to fill the loop buffer */}
          {[...scrollTexts, ...scrollTexts].map((text, idx) => (
            <SwiperSlide key={idx} className="!w-auto">
              <span className="text-[#ef0200] font-black text-sm md:text-lg tracking-[0.2em] uppercase whitespace-nowrap">
                {text}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 4. Solution & Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto">
        {/* Solution Box */}
        <div className="bg-[#ef0200] p-4 md:p-24 flex flex-col justify-center items-center text-center">
          <h3 className="text-black text-4xl md:text-5xl font-bold uppercase mb-8 tracking-tighter">
            {/* SOLUTION */}
            How to order ?
          </h3>
          <p className="text-black text-sm md:text-base font-medium max-w-md leading-relaxed">
            {/* Direct-to-consumer lab testing and self-directed medical care that puts you in charge.  */}
            {/* <span className="font-bold ml-1">Get the advanced lab panels you need when you need them</span> */}
            {/* no doctors' offices, no insurance, no waiting. */}
          </p>
        </div>

        {/* Steps Box */}
        <div className="bg-[#111] p-4 md:p-24 flex flex-col justify-center">
          <h3 className="text-white text-4xl md:text-5xl font-bold uppercase mb-2 tracking-tighter leading-none">
            SIMPLE STEPS TO BETTER HEALTH
          </h3>
          <p className="text-gray-400 mb-12">Your journey to optimal health starts here</p>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start gap-6">
                <div className="bg-[#ef0200] text-black w-10 h-10 flex items-center justify-center font-bold shrink-0">
                  {step.id}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg uppercase tracking-tight">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;