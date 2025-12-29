import React from 'react';
import treatment_bg from "../assets/treatment_background.webp";

export const TreatmentHero = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-black flex items-end">
      
      {/* 1. Background Image with Moody Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src={treatment_bg} 
          alt="Performance Medicine" 
          className="w-full h-full object-cover"
        />
       
      </div>

      {/* 2. Content Container */}
      <div className="container mx-auto px-6 md:px-12 pb-16 md:pb-24 relative z-10">
        <div className="max-w-4xl">
        
          <h1 className="text-6xl md:text-[120px] font-bold uppercase leading-[0.8] tracking-tighter text-white mb-6">
            MEDICATIONS
          </h1>
        </div>
      </div>
    </section>
  );
};