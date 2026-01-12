import React from 'react';
import { Instagram } from 'lucide-react';
import logo from "../assets/logo_black.png";
import { Link } from 'react-router-dom';

import legal from "../assets/legit_script_certified.png";
import payments from "../assets/payments.webp";

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/5">
      <div className="container mx-auto px-0 md:px-[2rem]">
        
        {/* Top Section: Logo and Certification */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start mb-16 gap-8">
          <div className="">
            <img src={logo} alt="" className='h-20 md:h-[150px]'/>
            <p className="text-[10px] tracking-[2.5px] uppercase font-bold text-white mt-2">
              Take control of your health journey
            </p>
          </div>

          {/* LegitScript Badge */}
          <div className="w-28 md:w-40  p-3 rounded-xl flex flex-col items-center text-center gap-1 shadow-lg shadow-blue-900/10">
            <Link to={""}>
            <img src={legal} alt="" />
            </Link>
          </div>
        </div>

        {/* Middle Section: Links and Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 pb-20 text-center md:text-left">
          
          {/* Contact info */}
          <div className=" flex flex-col gap-1">
            <div className='flex space-x-2 mb-4 md:justify-start justify-center '>
              <a href="#" className=" bg-[#f17625]  flex items-center  text-black hover:scale-110 transition-transform">
                <Instagram size={20} />
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">Need help?</span>
              <a href="mailto:support@algorx.ai" className="text-sm md:text-lg font-bold hover:text-[#f17625] transition-colors">
                SUPPORT@ALGORX.AI
              </a>
            </div>
          </div>

          {/* About Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm text-gray-500 font-black tracking-[0.3em] uppercase">About</h4>
            <ul className="flex flex-col gap-3 text-sm font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-gray-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm text-gray-500 font-black tracking-[0.3em] uppercase">Legal</h4>
            <ul className="flex flex-col gap-3 text-sm font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          {/* Treatments Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm text-gray-500 font-black tracking-[0.3em] uppercase">Treatments</h4>
            <ul className="flex flex-col gap-3 text-sm font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-gray-400 transition-colors">Enclomiphene</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">And More...</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-10">
          {/* Payment Methods */}
          <div className="flex flex-col items-center gap-6">
            <span className="text-sm  font-bold uppercase tracking-[-0.3px]">Accepted Payment Methods</span>
            <div className="flex flex-wrap justify-center gap-4 ">
              <img src={payments} alt="Visa" className="h-10 md:h-14" />
              
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Small Legal Links */}
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-x-8 gap-y-4 text-sm font-bold  uppercase tracking-widest text-center">
          <span>Algorx Copyright 2025</span>
          <a href="#" className="hover:text-gray-500">Terms & Conditions</a>
          <a href="#" className="hover:text-gray-500">Privacy Policy</a>
          <a href="#" className="hover:text-gray-500">Refund Policy</a>
          <a href="#" className="hover:text-gray-500">Shipping Policy</a>
          <a href="#" className="hover:text-gray-500">Telehealth Consent</a>
        </div>

      </div>
    </footer>
  );
};