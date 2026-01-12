import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import weightloss from "../assets/weightloss_new.jpg";
import metabolic from "../assets/weight_loss.webp";
import performance from "../assets/sermorelin_new.jpg";
import longivity from "../assets/Performance.webp";
import cardio from "../assets/metformin_new.jpg";
import hairloss from "../assets/HairLoss.webp";
import lifestyle from "../assets/lifestyle.webp";
import skincare from "../assets/Skincare.webp";
import stopsmoking from "../assets/smoking_new.jpg";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const treatments = [
  { id: 1, title: 'Weight Loss', image: weightloss, color: 'text-purple-500' },
  { id: 2, title: 'Sermorelin', image: performance, color: 'text-blue-500' },
  // { id: 2, title: 'Performance', image: performance, color: 'text-blue-500' },
  { id: 3, title: 'Metformin', image: cardio, color: 'text-orange-500' },
  // { id: 3, title: 'Cardiovascular', image: cardio, color: 'text-orange-500' },
  { id: 4, title: 'Stop Smoking', image: stopsmoking, color: 'text-yellow-500' },
  // { id: 4, title: 'Metabolic', image: metabolic, color: 'text-yellow-500' },
  { id: 5, title: 'Hair Loss', image: hairloss, color: 'text-blue-500' },
  { id: 6, title: 'Lifestyle', image: lifestyle, color: 'text-white' },
  { id: 7, title: 'Longivity', image: longivity, color: 'text-[#adc1d9]' },
  { id: 8, title: 'Skincare', image: skincare, color: 'text-pink-300' },
];

export const ExploreTreatment = () => {
  return (
    <section className="bg-black text-white py-8 md:py-24 px-6 md:px-4">
      <div className="">
        
        {/* Header with Navigation and Progress */}
        <div className="container mx-auto px-0 flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 px-6 md:px-12">
          <h2 className="text-3xl md:text-[40px] tracking-[-1.6px] font-bold text-white">
            CHOOSE YOUR <br /> TREATMENT
          </h2>

          {/* Controls Container */}
          <div className="hidden md:flex items-center gap-6 min-w-[200px]">
            {/* Custom Prev Arrow */}
            <button className="swiper-button-prev-custom text-gray-500 hover:text-white transition">
              <ChevronLeft size={32} strokeWidth={1} />
            </button>

            {/* Progress Bar Container */}
            <div className="flex-1 h-[3px] bg-gray-500 relative min-w-[100px]">
              <div className="swiper-pagination-custom-progressbar absolute top-0 left-0 h-full bg-gray-500 transition-all duration-300 " />
            </div>

            {/* Custom Next Arrow */}
            <button className="swiper-button-next-custom text-gray-500 hover:text-white transition">
              <ChevronRight size={32} strokeWidth={1} />
            </button>
          </div>
        </div>
        <div>
        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1.2} // Show a peek of the next slide on mobile
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{
            type: 'progressbar',
            el: '.swiper-pagination-custom-progressbar ',
            
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }, // 4 slides on desktop
          }}
          className=""
        >
          {treatments.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative group cursor-pointer overflow-hidden rounded-sm aspect-[3/4]">
                {/* Image with Grayscale effect */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Title and Colored Border Bottom */}
                <div className="absolute bottom-8 left-6 right-6 flex flex-col items-center">
                  <h3 className="text-2xl font-bold md:text-[40px] md:font-extrabold leading-tight tracking-[-0.8px] md:tracking-[-1.6px] text-white">
                    {item.title}
                  </h3>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="248"
                  
                    viewBox="0 0 248 12" 
                    className={`w-[80%] -ml-1 h-2 ${item.color}`}
                  >
                    <path 
                      d="M1 10.0001C24.8333 7.8334 82.4 3.30007 122 2.50007C161.6 1.70007 221.833 2.16674 247 2.50007" 
                      stroke="currentColor" 
                      strokeWidth="8" 
                      strokeLinecap="round" 
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        <div className="md:hidden flex items-center gap-6 w-[200px] mt-8">
            {/* Custom Prev Arrow */}
            <button className="swiper-button-prev-custom text-gray-500 hover:text-white transition">
              <ChevronLeft size={32} strokeWidth={1} />
            </button>

            {/* Progress Bar Container */}
            <div className="flex-1 h-[3px] bg-gray-500 relative min-w-[100px]">
              <div className="swiper-pagination-custom-progressbar absolute top-0 left-0 h-full bg-gray-500 transition-all duration-300 " />
            </div>

            {/* Custom Next Arrow */}
            <button className="swiper-button-next-custom text-gray-500 hover:text-white transition">
              <ChevronRight size={32} strokeWidth={1} />
            </button>
          </div>
      </div>
    </section>
  );
};