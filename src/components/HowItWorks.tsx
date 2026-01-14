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
    <section className="bg-white text-black pt-20 overflow-hidden relative">
      {/* 1. Main Headline */}
      <div className="container mx-auto px-6 text-center mb-6 md:mb-16 relative z-10 pb-20 lg:pb-60">
        <h2 className=" text-black text-3xl md:text-[70px] md:leading-[70px] font-extrabold leading-tight uppercase max-w-[864px] mx-auto">
        Healthcare designed for individualized care, guided by licensed physicians
        </h2>
      </div>

      {/* 2. Floating Product Image */}
      <div className="absolute top-[50%] md:top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
        <img 
          src={bottle} 
          alt="Tadalafil Bottle" 
          className="w-[500px] h-auto rotate-[-20deg]"
        />
      </div>

      {/* 3. Infinite Scrolling Ticker (Using Swiper) */}
      <div className="relative border-y border-black/10 py-6 bg-white z-20">
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