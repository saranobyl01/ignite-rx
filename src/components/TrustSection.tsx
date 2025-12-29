import React from 'react';
import { Star } from 'lucide-react';

export const TrustSection = () => {
  return (
    <section className="bg-black text-white py-8 md:py-24 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-[40px] tracking-[-1.6px] font-bold uppercase mb-4">
          WHAT OUR CUSTOMERS SAY
        </h2>

        {/* Subheading */}
        <p className="text-lg font-normal leading-relaxed text-white/60 md:text-[20px] mb-10 ">
          Trusted by thousands of satisfied customers
        </p>

        {/* Trustpilot Branding Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          
          {/* Rating Text */}
          <span className="text-white text-xl font-normal tracking-tight">
            Excellent
          </span>

          {/* Star Rating Grid */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="bg-[#00b67a] p-1 flex items-center justify-center rounded-sm shadow-sm"
              >
                <Star size={20} fill="white" className="text-white" />
              </div>
            ))}
          </div>

          {/* Reviews Link & Logo */}
          <div className="flex items-center gap-2 text-sm md:text-base">
            <a 
              href="#" 
              className=" hover:text-gray-300 transition-colors font-normal border-b border-white"
            >
              79 reviews on
            </a>
            
            {/* Trustpilot Logo Placeholder (SVG based on their actual logo) */}
            <div className="flex items-center gap-1.5 ml-1">
              <Star size={22} fill="#00b67a" className="text-[#00b67a]" />
              <span className="font-normal text-lg tracking-tighter">
                Trustpilot
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};