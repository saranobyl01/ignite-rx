import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User, ShoppingCart } from 'lucide-react';
import logo from "../assets/logo_black.png";

export const HeaderBlack = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
 

  // Handle scroll effect
  

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        bg-black py-2 shadow-lg
      `}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4">
             {/* Mobile Hamburger */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold tracking-tighter ">
               <img src={logo} alt="" className='h-12 invert' />
              </span>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link to="/treatment" className="text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 transition">
              Medications
            </Link>
            <Link to="/package-labs" className="text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 transition">
              Labs
            </Link>
            <Link to="/trt" className="text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 transition">
              TRT
            </Link>
            <Link to="/coaching" className="text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 transition">
              Coaching
            </Link>
            <Link to="/about" className="text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 transition">
              About
            </Link>
          </nav>

          {/* Right side: Icons */}
          <div className="flex items-center gap-5 text-white">
            <button className="hover:opacity-70 transition">
              <User size={20} />
            </button>
            <button className="hover:opacity-70 transition">
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide Menu (Simplified for brevity) */}
      <div className={`fixed inset-0 bg-black z-[60] transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden p-6`}>
         <button onClick={() => setIsMenuOpen(false)} className="text-white mb-8"><X size={30}/></button>
         <nav className="flex flex-col gap-6 text-white text-lg font-bold uppercase">
            <Link to="/treatment" onClick={() => setIsMenuOpen(false)}>Medications</Link>
            <Link to="/package-labs" onClick={() => setIsMenuOpen(false)}>Labs</Link>
            <Link to="/trt" onClick={() => setIsMenuOpen(false)}>TRT</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
         </nav>
      </div>
    </header>
  );
};