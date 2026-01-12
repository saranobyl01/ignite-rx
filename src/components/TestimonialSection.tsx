import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import test1 from "../assets/test1.webp";
import test2 from "../assets/test2.webp";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    text: "When people ask me where to go for labs and meds, algorx is the only company I point them to. It's straightforward, easy, and actually affordable for my clients and audience. They make the whole process simple so you can focus on training and results.",
    author: "@gregdouccette",
    stats: "2.36M subscribers",
    image: test1, // Replace with your image
    type: "text-first"
  },
  {
    id: 2,
    text: "I've spent years showing athletes that enhancements don't have to be reckless; if you understand your bloodwork and take a smart approach, you can push performance without destroying your health. That's why I helped create algorx. It's the platform I wish existed when I started: simple, affordable, and built for people who take this lifestyle seriously.",
    author: "@tanner.tattered",
    stats: "153k followers",
    image: test2,
    type: "image-first"
  },
  {
    id: 3,
    text: "I like to be on the cutting edge. We live in this incredible time where you can use technology to understand and augment your body for peak performance in the gym or in your work. algorx stands out because you don't have to question their quality. They've made the process seamless.",
    author: "@thedankoe",
    stats: "1.7M followers",
    image: test1,
    type: "text-first"
  },
  {
    id: 4,
    text: "When people ask me where to go for labs and meds, algorx is the only company I point them to. It's straightforward, easy, and actually affordable for my clients and audience. They make the whole process simple so you can focus on training and results.",
    author: "@gregdouccette",
    stats: "2.36M subscribers",
    image: test1, // Replace with your image
    type: "image-first"
  },
  {
    id: 5,
    text: "I've spent years showing athletes that enhancements don't have to be reckless; if you understand your bloodwork and take a smart approach, you can push performance without destroying your health. That's why I helped create algorx. It's the platform I wish existed when I started: simple, affordable, and built for people who take this lifestyle seriously.",
    author: "@tanner.tattered",
    stats: "153k followers",
    image: test2,
    type: "text-first"
  },
  {
    id: 6,
    text: "I like to be on the cutting edge. We live in this incredible time where you can use technology to understand and augment your body for peak performance in the gym or in your work. algorx stands out because you don't have to question their quality. They've made the process seamless.",
    author: "@thedankoe",
    stats: "1.7M followers",
    image: test1,
    type: "image-first"
  }
];

export const TestimonialSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="container mx-auto px-0 md:px-[2rem]">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[#ef0200] text-xs font-black tracking-[0.3em] uppercase mb-4 block">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-[80px] md:leading-[90px] font-extrabold leading-tight mb-6">
            CHAMPIONED BY THE <br /> COMMITTED
          </h2>
          <p className="text-gray-400 text-lg font-medium">
            Trusted by the world's top performers
          </p>
        </div>

        {/* Testimonials Swiper */}
        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation={{
              prevEl: '.test-prev',
              nextEl: '.test-next',
            }}
            pagination={{
              type: 'progressbar',
              el: '.test-pagination',
            }}
            breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4.2 }, // 5 items visible like in the image
          }}
            className=""
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="grid grid-cols-1  gap-8 items-start">
                  
                  {/* Image/Text logic based on design */}
                  <div className={`flex flex-col gap-6 ${item.type === 'image-first' ? 'md:order-2' : ''}`}>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium italic">
                      "{item.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-800 overflow-hidden">
                        <img src={item.image} alt="" className="w-full h-full object-cover grayscale" />
                      </div>
                      <div>
                        <p className="font-bold text-sm uppercase tracking-tight">{item.author}</p>
                        <p className="text-[10px] text-gray-500 uppercase font-bold">{item.stats}</p>
                      </div>
                    </div>
                  </div>

                  <div className={`aspect-square overflow-hidden h-[400px] md:h-auto rounded-sm bg-[#111] ${item.type === 'image-first' ? 'md:order-1' : ''}`}>
                    <img 
                      src={item.image} 
                      alt={item.author} 
                      className="w-full h-full object-cover grayscale brightness-75 hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom Navigation Controls (Matches your design) */}
          <div className="flex items-center justify-center gap-8 mt-20">
            <button className="test-prev text-gray-500 hover:text-white transition">
              <ChevronLeft size={32} strokeWidth={1} />
            </button>

            {/* Progress Bar */}
            <div className="w-32 h-[4px] bg-gray-800 relative">
              <div className="test-pagination absolute top-0 left-0 h-full transition-all duration-300 [&_.swiper-pagination-progressbar-fill]:bg-white" />
            </div>

            <button className="test-next text-gray-500 hover:text-white transition">
              <ChevronRight size={32} strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};