import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import med_vial from "../assets/vial.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  {
    id: 1,
    category: 'Performance',
    catColor: 'text-blue-400',
    name: 'Testosterone Cypionate',
    price: '$89.00',
    oldPrice: '$99.00',
    image: med_vial,
    description: 'L-Carnitine is a naturally occurring amino acid derivative that plays a key role in the body\'s energy production...',
  },
  {
    id: 2,
    category: 'Weight Loss',
    catColor: 'text-purple-400',
    name: 'Tirzepatide',
    price: '$299.00',
    oldPrice: '$350.00',
    image: med_vial,
    description: 'This powerful blend combines Tirzepatide, Glycine, and Vitamin B12 to optimize weight loss, metabolic health...',
  },
  // {
  //   id: 1,
  //   category: 'Performance',
  //   catColor: 'text-blue-400',
  //   name: 'L-Carnitine 500 mg/ml 30mL',
  //   price: '$89.00',
  //   oldPrice: '$99.00',
  //   image: med_vial,
  //   description: 'L-Carnitine is a naturally occurring amino acid derivative that plays a key role in the body\'s energy production...',
  // },
  // {
  //   id: 2,
  //   category: 'Weight Loss',
  //   catColor: 'text-purple-400',
  //   name: 'Tirzepatide/Glycine/B12 1...',
  //   price: '$299.00',
  //   oldPrice: '$350.00',
  //   image: med_vial,
  //   description: 'This powerful blend combines Tirzepatide, Glycine, and Vitamin B12 to optimize weight loss, metabolic health...',
  // },
  // {
  //   id: 1,
  //   category: 'Performance',
  //   catColor: 'text-blue-400',
  //   name: 'L-Carnitine 500 mg/ml 30mL',
  //   price: '$89.00',
  //   oldPrice: '$99.00',
  //   image: med_vial,
  //   description: 'L-Carnitine is a naturally occurring amino acid derivative that plays a key role in the body\'s energy production...',
  // },
  // {
  //   id: 2,
  //   category: 'Weight Loss',
  //   catColor: 'text-purple-400',
  //   name: 'Tirzepatide/Glycine/B12 1...',
  //   price: '$299.00',
  //   oldPrice: '$350.00',
  //   image: med_vial,
  //   description: 'This powerful blend combines Tirzepatide, Glycine, and Vitamin B12 to optimize weight loss, metabolic health...',
  // },
  // Add more products as needed...
];

export const BestSellers = () => {
  return (
    <section className="bg-black text-white py-8 md:py-18">
      <div className=" px-6">
        
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
        {/* <Swiper
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
            1024: { slidesPerView: 5 }, // 5 items visible like in the image
          }}
          className=""
        > */}
        <div className='flex  container mx-auto justify-center flex-wrap gap-4'>
          {products.map((product) => (
            // <SwiperSlide key={product.id}>
            <div className="flex flex-col w-[450px] h-[500px] bg-black">
                
                {/* Image Container */}
                <div className="relative aspect-[4/5] bg-[#222] rounded-sm mb-4 overflow-hidden">
                  {/* Bestseller Badge */}
                  <div className="absolute top-3 left-3 z-10 bg-[#e5ff00] text-black text-[10px] font-bold px-2 py-1 rounded-sm uppercase">
                    Bestseller
                  </div>
                  
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col flex-grow px-1">
                  <span className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${product.catColor}`}>
                    {product.category}
                  </span>
                  
                  <div className="w-full flex flex-col md:flex-row items-start justify-between mb-2 md:gap-4 gap-2">
                    <div className='flex-1 min-h-12 flex items-start'>
                        <h3 className=" text-xl font-semibold line-clamp-2 leading-tight overflow-hidden text-ellipsis break-all hyphens-auto text-white">
                        {product.name}
                        </h3>
                    </div>
                    <div className=" text-xl font-bold whitespace-nowrap leading-tight flex-shrink-0 mt-0 flex items-center gap-2 text-white md:text-white/60">
                      <span className="line-through text-slate-400 leading-none">
                        {product.oldPrice}
                      </span>
                      <span className="">
                        {product.price}
                      </span>
                    </div>
                  </div>

                  {/* <p className="text-[12px] line-clamp-4 mb-6 flex-1 min-h-[4rem] text-gray-400">
                    {product.description}
                  </p> */}

                  {/* Add to Cart Button */}
                  <button className="w-full bg-[#e5ff00] hover:bg-[#cce600] text-black font-black uppercase text-xs py-3 rounded-sm transition-colors mt-auto">
                    ADD TO CART
                  </button>
                </div>
              </div>
            // </SwiperSlide>
          ))}
        </div>
        {/* </Swiper> */}
      </div>
    </section>
  );
};