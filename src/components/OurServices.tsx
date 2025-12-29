import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Check } from 'lucide-react';
import ser1 from "../assets/advanced lab testing.webp";
import ser2 from "../assets/performance_solutions.webp";
import ser3 from "../assets/weight management.webp";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ser4 from "../assets/longevity_focus.webp";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const services = [
  {
    title: "ADVANCED LAB TESTING",
    image: ser1,
    features: ["Comprehensive metabolic panels", "Hormone optimization tracking", "Personalized health insights"]
  },
  {
    title: "PERFORMANCE SOLUTIONS",
    image: ser2,
    features: ["Hormone Optimization", "Enhanced athletic performance", "Recovery support"]
  },
  {
    title: "WEIGHT MANAGEMENT",
    image: ser3,
    features: ["Science-based approaches", "Sustainable results", "Personalized protocols"]
  },
  {
    title: "LONGEVITY FOCUS",
    image: ser4,
    features: ["Improve health-span and lifespan", "Preventive care", "Cutting edge treatments"]
  }
];

export const OurServices = () => {
  return (
    <section className="bg-black text-white py-24 px-6 relative overflow-hidden md:pt-40">
      {/* Decorative Yellow Lines (Background) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M-10 80 L30 20 M70 100 L110 40" stroke="#e5ff00" strokeWidth="0.1" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10 px-0 md:px-[2rem]">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#e5ff00] text-xs font-black tracking-[0.3em] uppercase mb-4 block">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-[80px] md:leading-[90px] font-extrabold leading-tight max-w-3xl mx-auto mb-6">
          CARE DESIGNED AROUND YOU

          </h2>
          <p className="text-white/60 text-2xl md:text-[24px] font-bold  leading-relaxed">
          Prescription treatments guided by licensed healthcare professionals          </p>
        </div>

        {/* Desktop View: Grid (Hidden on Mobile) */}
        <div className="hidden lg:grid grid-cols-4 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Mobile View: Swiper Slider (Hidden on Desktop) */}
        <div className="lg:hidden">
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
              1024: { slidesPerView: 5 }, // 5 items visible like in the image
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
const ServiceCard = ({ service }) => (
  <div className="relative aspect-[3/4] rounded-xl overflow-hidden group bg-[#111] border border-white/5">
    {/* Dark Overlaid Background Image */}
    <img
      src={service.image}
      alt={service.title}
      className="absolute inset-0 w-full h-full object-cover  group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"
    />
    <div className="absolute inset-0 bg-black/40" />

    {/* Content */}
    <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-start">
      <h3 className="text-xl font-black leading-tight tracking-tight mb-auto max-w-[150px]">
        {service.title}
      </h3>

      {/* <ul className="space-y-3 mt-4 py-1 px-4">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-[11px] md:text-xs text-gray-300 font-medium">
            <Check size={14} className="text-white mt-0.5 shrink-0" />
            <span className='text-white/60 text-[16px] leading-[24px]'>{feature}</span>
          </li>
        ))}
      </ul> */}
    </div>
  </div>
);