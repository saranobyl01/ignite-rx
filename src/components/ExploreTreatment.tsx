import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import weightloss from "../assets/weightloss_new.jpg";
import metabolic from "../assets/weight_loss.webp";
import performance from "../assets/sermorelin_new.jpg";
import longivity from "../assets/longevity_treatment2.jpg";
import cardio from "../assets/metformin_new.jpg";
import hairloss from "../assets/hairloss_treatment2.jpg";
import lifestyle from "../assets/lifestyle_treatment2.jpg";
import skincare from "../assets/skincare_treatment2.jpg";
import stopsmoking from "../assets/smoking_new.jpg";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const treatments = [
  { id: 1, title: 'Weight Loss', image: weightloss, color: 'border-purple-500' },
  { id: 2, title: 'Sermorelin', image: performance, color: 'border-blue-500' },
  // { id: 2, title: 'Performance', image: performance, color: 'border-blue-500' },
  { id: 3, title: 'Metformin', image: cardio, color: 'border-orange-500' },
  // { id: 3, title: 'Cardiovascular', image: cardio, color: 'border-orange-500' },
  { id: 4, title: 'Stop Smoking', image: stopsmoking, color: 'border-yellow-500' },
  // { id: 4, title: 'Metabolic', image: metabolic, color: 'border-yellow-500' },
  { id: 5, title: 'Hair Loss', image: hairloss, color: 'border-blue-500' },
  { id: 6, title: 'Lifestyle', image: lifestyle, color: 'border-black' },
  { id: 7, title: 'Longevity', image: longivity, color: 'border-[#adc1d9]' },
  { id: 8, title: 'Skincare', image: skincare, color: 'border-pink-300' },
];

export const ExploreTreatment = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white text-black py-8 md:py-24 px-6 md:px-4">
      <div className="flex flex-col relative">
        
        {/* Header with Navigation and Progress */}
        <div className="container mx-auto px-0 flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 px-6 md:px-12">
          <h2 className="text-3xl md:text-[40px] tracking-[-1.6px] font-bold text-black">
            CHOOSE YOUR TREATMENT
          </h2>

          {/* Controls Container */}
          <div className="flex items-center gap-6 min-w-[200px] mt-6 md:mt-0">
            {/* Custom Prev Arrow */}
            <button ref={prevRef} className="text-gray-400 hover:text-black transition">
              <ChevronLeft size={32} strokeWidth={1} />
            </button>

            {/* Progress Bar Container */}
            <div className="flex-1 h-[2.5px] bg-gray-200 relative min-w-[80px]">
              <div
                ref={paginationRef}
                className="absolute inset-0
                          [&_.swiper-pagination-progressbar-fill]:!bg-black"
              />
            </div>

            {/* Custom Next Arrow */}
            <button ref={nextRef} className="text-gray-400 hover:text-black transition">
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
          touchRatio={1}
          threshold={5}
          allowTouchMove={true}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            // @ts-ignore
            swiper.params.pagination.el = paginationRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            type: 'progressbar',
            el: paginationRef.current,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }, // 4 slides on desktop
          }}
          className=""
        >
          {treatments.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={`relative group cursor-pointer overflow-hidden rounded-sm aspect-[3/4] border-b-[10px] ${item.color}`}>
                {/* Image with Grayscale effect */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover brightness-75 group-hover:grayscale group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Title and Colored Border Bottom */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-col items-center">
                  <h3 className="text-xl font-bold md:text-[32px] md:font-extrabold leading-tight tracking-[-0.8px] md:tracking-[-1.6px] text-black bg-white/60 backdrop-blur-md py-2 px-6 rounded-full w-full text-center">
                    {item.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </section>
  );
};