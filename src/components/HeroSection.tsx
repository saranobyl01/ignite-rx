import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
// Import your video file here
import heroVideo from "../assets/hero-video.mp4";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[85vh] md:h-screen w-full flex items-end overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Replace with your video path */}
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark Overlay to make text pop */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 flex justify-start">
        <div className="max-w-6xl text-white text-left">
          
          {/* Rating / Social Proof */}
          {/* <div className="flex items-center gap-4">
            <div className="flex text-yellow-400 gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-medium tracking-wide opacity-90">
            Trusted by Our Customers
            </span>
          </div> */}

          {/* Headline */}
          <h1 className="text-5xl lg:text-[120px] font-extrabold tracking-[-2px] md:tracking-[-4.8px] md:leading-[120px] my-2 md:my-4 uppercase">
          Ignite Change
          </h1>
         

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-[20px] mb-6 md:mb-10 font-inter font-normal">
            Medications and Labs Engineered for Enhanced Performance
          </p>

          {/* Action Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 font-bold px-10 py-7 text-md rounded-sm"
              onClick={() => navigate("/medications")}
            >
              Medications
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-black hover:bg-gray-200 font-bold px-10 py-7 text-md rounded-sm border-none"
              onClick={() => navigate("/labs")}
            >
              Labs
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};