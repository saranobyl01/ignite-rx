import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import bottle from "../assets/vial.png";

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


  return (
    <section className="bg-white text-black pt-12 md:pt-20 overflow-hidden relative">
      {/* 1. Main Headline & Image */}
      <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <h2 className=" text-black text-3xl md:text-[70px] md:leading-[70px] font-extrabold leading-tight uppercase max-w-[864px] mx-auto mb-4 md:mb-8">
        Physician Guided Therapies for those that Burn Brighter.
        </h2>

        {/* 2. Product Image right below text */}
        <div className="relative z-30 pointer-events-none mb-8 md:mb-10 mt-[-20px] md:mt-[-40px]">
          <img 
            src={bottle} 
            alt="Tadalafil Bottle" 
            className="w-[300px] md:w-[500px] h-auto rotate-[-20deg]"
          />
        </div>
      </div>

      {/* 3. Infinite Scrolling Ticker (Using Swiper) */}
      <div className="relative border-y border-black/10 py-6 bg-white z-20 mt-auto">
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
              <span className="text-[#f17625] font-black text-sm md:text-lg tracking-[0.2em] uppercase whitespace-nowrap">
                {text}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
};

export default HowItWorks;