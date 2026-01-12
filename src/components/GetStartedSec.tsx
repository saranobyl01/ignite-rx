import React from 'react';

export const GetStartedSec = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-12">
        
        {/* Left Side: Headline with Underline */}
        <div className="relative group max-w-3xl">
          <h2 className="text-[50px] text-center md:text-left md:text-[120px] font-black uppercase md:leading-[130px] leading-[53px]">
            READY TO <br />
            <span className="text-[#f17625]">PUSH PAST</span> <br />
            AVERAGE?
          </h2>

          {/* Custom Triple-Line Underline SVG */}
          <div className="mt-4 w-full max-w-[500px]">
            <svg 
              viewBox="0 0 500 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto text-[#f17625] opacity-80"
            >
              <path 
                d="M5 5 C 150 2, 350 15, 495 8" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
              />
              <path 
                d="M15 12 C 180 8, 380 20, 485 14" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
              />
              <path 
                d="M40 18 C 200 15, 420 25, 470 19" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinecap="round" 
              />
            </svg>
          </div>
        </div>

        {/* Right Side: Button */}
        <div className="shrink-0">
          <button className="bg-[#f17625] hover:bg-[#d15e14] text-black text-sm md:text-base font-black uppercase px-10 py-5 rounded-sm transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(241,118,37,0.2)]">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
};