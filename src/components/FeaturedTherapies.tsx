import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import med_vial from "../assets/vial.webp";
import med_nasal from "../assets/nasal.webp";
import med_tablet from "../assets/tablet.webp";
import med_cream from "../assets/cream.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Product Data
const products = [
  { 
    name: "NAD⁺ (Injectable)", 
    category: "Peptide / Injectable", 
    type: "Compounded 503A Product", 
    price: "$249", 
    description: "200–500 mg/mL, 5 mL vial" ,
    image: med_vial,
  },
  { 
    name: "Glutathione (Injectable)", 
    category: "Peptide / Injectable", 
    type: "Compounded 503A Product", 
    price: "$189", 
    description: "200 mg/mL, 5 mL vial" ,
    image: med_vial,

    },
  { 
    name: "MIC (B12 + Lipotropic)", 
    category: "Peptide / Injectable", 
    type: "Compounded 503A Product", 
    price: "$129", 
    description: "Methionine 25 mg + Inositol 50 mg + Choline 50 mg + B12 1 mg/mL, 10 mL vial",
    image: med_vial
    },
  { 
    name: "L-Carnitine (Injectable)", 
    category: "Peptide / Injectable", 
    type: "Compounded 503A Product", 
    price: "$159", 
    description: "200 mg/mL, 5 mL vial",
    image:  med_vial
  },
  { 
    name: "Alanyl-L-Glutamine (Injectable)", 
    category: "Peptide / Injectable", 
    type: "Compounded 503A Product", 
    price: "$179", 
    description: "200 mg/mL, 5 mL vial",
    image:  med_vial},
  { 
    name: "VIP (Vasoactive Intestinal Peptide)", 
    category: "Peptide / Injectable or Nasal", 
    type: "Compounded 503A Product", 
    price: "$279", 
    description: "50 mcg/mL, 5 mL vial or 2.5 mg nasal spray",
    image: med_nasal },
  {
  name: "GHK-Cu (Copper Peptide Topical)",
  category: "Peptide / Topical",
  type: "Compounded 503A Product",
  price: "$139",
  description: "2 mg/mL serum or cream (30 mL)",
  image: med_cream,
},
{
  name: "Sermorelin (GHRH Analog)",
  category: "Peptide / Injectable",
  type: "Clinical-Use Only",
  price: "$229",
  description: "5 mg vial (reconstituted)",
  image: med_vial,
},
{
  name: "PT-141 (Bremelanotide)",
  category: "Peptide / Injectable",
  type: "Clinical-Use Only",
  price: "$229",
  description: "10 mg vial (reconstituted)",
  image: med_vial,
},
{
  name: "NAD⁺ Cycle Capsules",
  category: "Peptide / Oral",
  type: "Compounded 503A Product",
  price: "$139",
  description: "250–500 mg/capsule, 30 ct",
  image: med_tablet,
},
{
  name: "Low-Dose Naltrexone (LDN)",
  category: "Longevity / Rx",
  type: "Compounded 503A Product",
  price: "$89",
  description: "1.5–4.5 mg capsule, 30 ct",
  image: med_tablet,
},
{
  name: "Metformin",
  category: "Longevity / Rx",
  type: "FDA-Approved Drug",
  price: "$75",
  description: "500 mg tablet, 100 ct",
  image: med_tablet,
},
{
  name: "Rapamycin (Sirolimus)",
  category: "Longevity / Rx",
  type: "FDA-Approved Drug",
  price: "$199",
  description: "1 mg tablet, 30 ct",
  image: med_tablet,
},
{
  name: "Methylene Blue",
  category: "Longevity / Nootropic Rx",
  type: "FDA-Approved Drug",
  price: "$129",
  description:
    "1 mg capsule/troche (30 ct) or 0.5 mg/mL oral solution",
  image: med_tablet,
},
{
  name: "Propranolol",
  category: "Longevity / Supportive Rx",
  type: "FDA-Approved Drug",
  price: "$87",
  description: "10–40 mg tablet, 30 ct",
  image: med_tablet,
},
{
  name: "Vitamin B12 (Injection)",
  category: "Nutrient / Injectable",
  type: "Nutrient / OTC Support",
  price: "$59",
  description: "1 mg/mL, 1 mL vial",
  image: med_vial,
},
{
  name: "Vitamin B12 (Sublingual)",
  category: "Nutrient / Oral",
  type: "Nutrient / OTC Support",
  price: "$49",
  description: "1000 mcg tablet, 30 ct",
  image: med_tablet,
},

];

// Custom Arrows
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1b1e23] text-white rounded-full p-2 cursor-pointer z-10 hover:bg-[#2b2f35]"
      onClick={onClick}
    >
      <ArrowRight className="w-5 h-5" />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1b1e23] text-white rounded-full p-2 cursor-pointer z-10 hover:bg-[#2b2f35]"
      onClick={onClick}
    >
      <ArrowLeft className="w-5 h-5" />
    </div>
  );
};


const FeaturedTherapies: React.FC = () => {

const [sliderSettings, setSliderSettings] = useState({
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4, 
      slidesToScroll: 1, 
      arrows: true, 
      nextArrow: <NextArrow />, 
      prevArrow: <PrevArrow />, 
    });  
      
    useEffect(() =>
        { const updateSettings = () => { 
        const width = window.innerWidth; 
        if (width <= 768) { 
            setSliderSettings((prev) => ({ 
                ...prev, 
                slidesToShow: 1, 
                slidesToScroll: 1, 
            })); }
        else if (width <= 1024) { 
            setSliderSettings((prev) => ({ 
                ...prev, 
                slidesToShow: 2, 
                slidesToScroll: 2, 
            })); } 
        else { 
            setSliderSettings((prev) => ({ 
                ...prev, 
                slidesToShow: 4, 
                slidesToScroll: 1, 
            })); } 
        }; 
        
        updateSettings(); 
        window.addEventListener("resize", updateSettings); 
        return () => window.removeEventListener("resize", updateSettings); }, 
        
    []);

  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-6">
          Featured Therapies
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-lg tracking-[2px]">
          Explore our most popular peptide, longevity, and nutrient therapies.
        </p>

        <Slider {...sliderSettings}>
          {products.map((product, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-2xl shadow-md p-6 h-full flex flex-col justify-between">
                {/* Medicine Image */}
                <div className=" bg-[#efe5d5] rounded-[85px] mb-4">
                    <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-contain  rounded-xl"
                    />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 min-h-[56px]">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-1">{product.category}</p>
                  {/* <p className="text-gray-400 text-sm mb-2">{product.type}</p> */}
                  <p className="text-lg font-bold text-[#C37C46]">{product.price}</p>
                  {/* <p className="text-gray-500 text-sm mt-1">{product.description}</p> */}
                </div>

                <button className="mt-4 inline-flex items-center justify-center gap-2 text-white bg-[#1b1e23] hover:bg-[#2b2f35] rounded-full px-4 py-2 text-sm font-medium transition-all">
                  Add to Cart <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedTherapies;