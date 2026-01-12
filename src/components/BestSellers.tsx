import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import Images
import med_vial from "../assets/vial.png";
import med_bottle from "../assets/bottle.png";
import med_spray from "../assets/spray.png";
import med_drop from "../assets/drop.png";
import med_cream from "../assets/cream.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  // Weight Loss
  {
    category: 'Weight Loss',
    catColor: 'text-purple-400',
    name: 'Compounded Semaglutide',
    price: '$299.00',
    image: med_vial,
    link: '/weightloss'
  },
  {
    category: 'Weight Loss',
    catColor: 'text-purple-400',
    name: 'Compounded Tirzepatide',
    price: '$350.00',
    image: med_vial,
    link: '/weightloss'
  },

  // Longevity
  {
    category: 'Longevity',
    catColor: 'text-blue-400',
    name: 'Low Dose Naltrexone',
    price: '$89.00',
    image: med_bottle,
    link: '/low-dose-naltrexone'
  },
  {
    category: 'Longevity',
    catColor: 'text-blue-400',
    name: 'Metformin',
    price: '$75.00',
    image: med_bottle,
    link: '/metformin'
  },
  {
    category: 'Longevity',
    catColor: 'text-blue-400',
    name: 'Sermorelin',
    price: '$229.00',
    image: med_vial,
    link: '/sermorelin'
  },
  {
    category: 'Longevity',
    catColor: 'text-blue-400',
    name: 'Glutathione Injectable',
    price: '$189.00',
    image: med_vial,
    link: '/glutathione'
  },
  {
    category: 'Longevity',
    catColor: 'text-blue-400',
    name: 'NAD+ Injectable',
    price: '$249.00',
    image: med_vial,
    link: '/nad-injectable'
  },
  {
    category: 'Longevity',
    catColor: 'text-blue-400',
    name: 'NAD+ Nasal',
    price: '$199.00',
    image: med_spray,
    link: '/nad-nasal'
  },

  // Sexual Health
  {
    category: 'Sexual Health',
    catColor: 'text-red-400',
    name: 'TRT',
    price: 'From $199.00',
    image: med_vial,
    link: '/trt'
  },
  {
    category: 'Sexual Health',
    catColor: 'text-red-400',
    name: 'Erectile Dysfunction',
    price: '$89.00',
    image: med_vial, // Links to TRT which is vial
    link: '/trt'
  },
  {
    category: 'Sexual Health',
    catColor: 'text-red-400',
    name: 'Premature Ejaculation',
    price: '$89.00',
    image: med_bottle,
    link: '/premature-ejaculation'
  },
  {
    category: 'Sexual Health',
    catColor: 'text-red-400',
    name: 'PT-141',
    price: '$229.00',
    image: med_vial,
    link: '/pt-141'
  },

  // Hair Loss
  {
    category: 'Hair Loss',
    catColor: 'text-orange-400',
    name: "Men's Hair Loss",
    price: '$89.00',
    image: med_bottle,
    link: '/hairloss-men'
  },
  {
    category: 'Hair Loss',
    catColor: 'text-orange-400',
    name: "Women's Hair Loss",
    price: '$89.00',
    image: med_bottle,
    link: '/hairloss-women'
  },

  // Beauty
  {
    category: 'Beauty',
    catColor: 'text-pink-400',
    name: 'Eyelashes',
    price: '$119.00',
    image: med_drop,
    link: '/eyelashes'
  },
  {
    category: 'Beauty',
    catColor: 'text-pink-400',
    name: 'Skincare',
    price: '$99.00',
    image: med_cream,
    link: '/skincare'
  },

  // Lifestyle
  {
    category: 'Lifestyle',
    catColor: 'text-green-400',
    name: 'Vitamin B12',
    price: '$59.00',
    image: med_bottle,
    link: '/b12'
  },
  {
    category: 'Lifestyle',
    catColor: 'text-green-400',
    name: 'Propranolol',
    price: '$87.00',
    image: med_bottle,
    link: '/propranolol'
  },
  {
    category: 'Lifestyle',
    catColor: 'text-green-400',
    name: 'Stop Smoking',
    price: '$89.00',
    image: med_bottle,
    link: '/stop-smoking'
  },
  {
    category: 'Lifestyle',
    catColor: 'text-green-400',
    name: 'Sleep',
    price: '$89.00',
    image: med_bottle,
    link: '/sleep'
  },

  // Other
  {
    category: 'Other Therapies',
    catColor: 'text-gray-400',
    name: 'Herpes',
    price: '$89.00',
    image: med_bottle,
    link: '/herpes'
  },
  {
    category: 'Other Therapies',
    catColor: 'text-gray-400',
    name: 'Cold Sores',
    price: '$89.00',
    image: med_bottle,
    link: '/cold-sores'
  },
  {
    category: 'Other Therapies',
    catColor: 'text-gray-400',
    name: 'Acid Reflux',
    price: '$89.00',
    image: med_bottle,
    link: '/acid-reflux'
  },
  {
    category: 'Other Therapies',
    catColor: 'text-gray-400',
    name: 'Birth Control',
    price: '$29.00',
    image: med_bottle,
    link: '/birth-control'
  },
];

export const BestSellers = () => {
  return (
    <section className="bg-black text-white py-8 md:py-18">
      <div className="px-6">
        
        {/* Header with Navigation and Progress */}
        <div className="container mx-auto flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-[40px] tracking-[-1.6px] font-bold uppercase ">
            BEST SELLERS
          </h2>

          {/* Custom Controls Container */}
          <div className="flex items-center gap-6 min-w-[180px]">
            <button className="best-prev text-gray-500 hover:text-white transition">
              <ChevronLeft size={28} strokeWidth={1.5} />
            </button>

            {/* Progress Bar Container */}
            <div className="flex-1 h-[2.5px] bg-gray-400 relative min-w-[80px]">
              <div className="best-pagination2 absolute top-0 left-0 h-full bg-gray-500 transition-all duration-300 [&_.swiper-pagination-progressbar-fill]:bg-white" />
            </div>

            <button className="best-next text-gray-500 hover:text-white transition">
              <ChevronRight size={28} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Product Swiper */}
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
            el: '.best-pagination2',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }, 
            1280: { slidesPerView: 5 },
          }}
          className=""
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col h-full bg-black">
                
                {/* Image Container */}
                <div className="relative aspect-[4/5] bg-[#222] rounded-sm mb-4 overflow-hidden group">
                  {/* Bestseller Badge */}
                  <div className="absolute top-3 left-3 z-10 bg-[#ef0200] text-black text-[10px] font-bold px-2 py-1 rounded-sm uppercase">
                    Bestseller
                  </div>
                  
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col flex-grow px-1">
                  <span className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${product.catColor}`}>
                    {product.category}
                  </span>
                  
                  <div className="w-full flex flex-col md:flex-row items-start justify-between mb-2 md:gap-4 gap-2">
                    <div className='flex-1 min-h-12 flex items-start'>
                        <h3 className=" text-xl font-semibold line-clamp-2 leading-tight overflow-hidden text-ellipsis break-words text-white">
                        {product.name}
                        </h3>
                    </div>
                    <div className=" text-xl font-bold whitespace-nowrap leading-tight flex-shrink-0 mt-0 flex items-center gap-2 text-white md:text-white/60">
                      <span className="">
                        {product.price}
                      </span>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Link to={product.link} className="w-full bg-[#ef0200] hover:bg-[#cc0000] text-black font-black uppercase text-xs py-3 rounded-sm transition-colors mt-4 text-center">
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};