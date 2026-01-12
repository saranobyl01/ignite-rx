import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Images
import weightLoss from "../assets/weightloss_treatment.jpg";
import longevity from "../assets/longevity_treatment.jpg";
import sexualHealth from "../assets/sexual_treatment.jpg"; // Using performance solutions for Sexual Health
import hairLoss from "../assets/hairloss_treatment.jpg";
import beauty from "../assets/beauty_treatment.jpg";
import lifestyle from "../assets/lifestyle_treatment.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const services = [
  {
    title: "WEIGHT LOSS",
    image: weightLoss,
    color: 'border-purple-500',
  },
  {
    title: "LONGEVITY & ANTI-AGING",
    image: longevity,
    color: 'border-[#adc1d9]',
  },
  {
    title: "SEXUAL HEALTH",
    image: sexualHealth,
    color: 'border-red-500',
  },
  {
    title: "HAIR LOSS",
    image: hairLoss,
    color: 'border-blue-500',
  },
  {
    title: "BEAUTY",
    image: beauty,
    color: 'border-pink-300',
  },
  {
    title: "LIFESTYLE",
    image: lifestyle,
    color: 'border-white',
  }
];

export const OurServices = () => {
  return (
    <section className="bg-black text-white py-24 px-6 relative overflow-hidden md:pt-40">
      {/* Decorative Yellow Lines (Background) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M-10 80 L30 20 M70 100 L110 40" stroke="#f17625" strokeWidth="0.1" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10 px-0 md:px-[2rem]">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#f17625] text-xs font-black tracking-[0.3em] uppercase mb-4 block">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-[80px] md:leading-[90px] font-extrabold leading-tight max-w-3xl mx-auto mb-6">
          CARE DESIGNED AROUND YOU

          </h2>
          <p className="text-white/60 text-2xl md:text-[24px] font-bold  leading-relaxed">
          Prescription treatments guided by licensed healthcare professionals          </p>
        </div>

        {/* Unified Swiper Slider for Mobile and Desktop */}
        <div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1.2}
            navigation={{
              prevEl: '.best-prev',
              nextEl: '.best-next',
            }}
            pagination={{
              type: 'progressbar',
              el: '.best-pagination3',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }, // 4 items visible on desktop
            }}
            className=""
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceCard service={service} />
              </SwiperSlide>
            ))}

            <div className="flex items-center gap-6 w-[180px] mt-6">
              <button className="best-prev text-gray-500 hover:text-white">
                <ChevronLeft size={28} />
              </button>

              <div className="flex-1 h-[2.5px] bg-gray-400 relative min-w-[80px]">
                <div className="best-pagination3 absolute top-0 left-0 h-full bg-gray-500 transition-all duration-300 [&_.swiper-pagination-progressbar-fill]:bg-white" />
              </div>

              <button className="best-next text-gray-500 hover:text-white">
                <ChevronRight size={28} />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

// Reusable Card Component
// Reusable Card Component
const ServiceCard = ({ service }) => (
  <div className={`relative aspect-[3/4] rounded-xl overflow-hidden group bg-[#111] border border-white/5 border-b-[10px] ${service.color}`}>
    {/* Dark Overlaid Background Image */}
    <img
      src={service.image}
      alt={service.title}
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"
    />
    <div className="absolute inset-0 bg-black/40" />

    {/* Content */}
    <div className="absolute bottom-8 left-6 right-6 flex flex-col items-center">
      <h3 className="text-2xl font-bold md:text-[40px] md:font-extrabold leading-tight tracking-[-0.8px] md:tracking-[-1.6px] text-white text-center">
        {service.title}
      </h3>
    </div>
  </div>
);