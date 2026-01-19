import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User, ShoppingCart } from 'lucide-react';
import logo from "../assets/logo_black.png";
import { useCart } from '../context/CartContext';

export const Header = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
        isScrolled ? "bg-black py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-12 relative">
          
          {/* Mobile Hamburger - Left */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>

          {/* Logo - Centered on Mobile, Left on Desktop */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center h-12">
            <span className="text-2xl font-bold tracking-tighter ">
             <img src={logo} alt="" className='h-12' />
            </span>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <div className="relative group">
              <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 transition h-12">
                Weight Loss
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-64 bg-black border border-gray-800 rounded-b-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                 <div className="flex flex-col py-2">
                    <Link to="/weightloss" className="px-6 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-900 transition text-left">
                      Compounded Semaglutide
                    </Link>
                    <Link to="/weightloss" className="px-6 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-900 transition text-left">
                      Compounded Tirzepatide
                    </Link>
                     <Link to="/low-dose-naltrexone" className="px-6 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-900 transition text-left">
                       Low Dose Naltrexone
                     </Link>
                 </div>
              </div>
            </div>
            {/* Men's Treatments */}
            <div className="static group">
              <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 transition h-12">
                Men
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-t border-gray-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="container mx-auto px-6 py-8">
                  <div className="grid grid-cols-5 gap-8 text-left">
                    
                    {/* Column 1: Sexual Health */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-2 min-h-[48px] flex items-end">Sexual Health</h3>
                      <div className="flex flex-col gap-2">
                        <Link to="/trt" className="text-xs text-gray-400 hover:text-white transition">TRT</Link>
                        <Link to="/erectile-dysfunction" className="text-xs text-gray-400 hover:text-white transition">Erectile Dysfunction</Link>
                        <Link to="/premature-ejaculation" className="text-xs text-gray-400 hover:text-white transition">Premature Ejaculation</Link>
                        <Link to="/pt-141" className="text-xs text-gray-400 hover:text-white transition">PT-141</Link>
                      </div>
                    </div>

                    {/* Column 2: Hair Loss */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-2 min-h-[48px] flex items-end">Hair Loss</h3>
                      <div className="flex flex-col gap-2">
                        <Link to="/hairloss-men" className="text-xs text-gray-400 hover:text-white transition">Men's Hair Loss</Link>
                      </div>
                    </div>

                    {/* Column 3: Longevity & Anti-Aging */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-2 min-h-[48px] flex items-end">Longevity & Anti-Aging</h3>
                      <div className="flex flex-col gap-2">
                        <Link to="/sermorelin" className="text-xs text-gray-400 hover:text-white transition">Sermorelin</Link>
                        <Link to="/metformin" className="text-xs text-gray-400 hover:text-white transition">Metformin</Link>
                        <Link to="/glutathione" className="text-xs text-gray-400 hover:text-white transition">Glutathione Injectable</Link>
                        <Link to="/nad-injectable" className="text-xs text-gray-400 hover:text-white transition">NAD+ Injectable</Link>
                        <Link to="/nad-nasal" className="text-xs text-gray-400 hover:text-white transition">NAD+ Nasal</Link>
                      </div>
                    </div>

                    {/* Column 4: Lifestyle */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-2 min-h-[48px] flex items-end">Lifestyle</h3>
                      <div className="flex flex-col gap-2">
                        <Link to="/b12" className="text-xs text-gray-400 hover:text-white transition">B12</Link>
                        <Link to="/propranolol" className="text-xs text-gray-400 hover:text-white transition">Propranolol</Link>
                        <Link to="/stop-smoking" className="text-xs text-gray-400 hover:text-white transition">Stop Smoking</Link>
                        <Link to="/sleep" className="text-xs text-gray-400 hover:text-white transition">Sleep</Link>
                      </div>
                    </div>

                    {/* Column 5: Other Therapies */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-2 min-h-[48px] flex items-end">Other Therapies</h3>
                      <div className="flex flex-col gap-2">
                        <Link to="/herpes" className="text-xs text-gray-400 hover:text-white transition">Herpes</Link>
                        <Link to="/cold-sores" className="text-xs text-gray-400 hover:text-white transition">Cold Sores</Link>
                        <Link to="/acid-reflux" className="text-xs text-gray-400 hover:text-white transition">Acid Reflux</Link>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Women's Treatments */}
            <div className="static group">
              <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 transition h-12">
                Women
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-t border-gray-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="container mx-auto px-6 py-8">
                  <div className="grid grid-cols-5 gap-8 text-left">
                    
                    {/* Column 1: Women's Health */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-2 min-h-[48px] flex items-end">Women's Health</h3>
                      <div className="flex flex-col gap-2">
                        <Link to="/birth-control" className="text-xs text-gray-400 hover:text-white transition">Birth Control</Link>
                        <Link to="/pt-141" className="text-xs text-gray-400 hover:text-white transition">PT-141</Link>
                      </div>
                    </div>

                    {/* Column 2: Hair & Beauty */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-2 min-h-[48px] flex items-end">Hair & Beauty</h3>
                      <div className="flex flex-col gap-2">
                        <Link to="/hairloss-women" className="text-xs text-gray-400 hover:text-white transition">Women's Hair Loss</Link>
                        <Link to="/eyelashes" className="text-xs text-gray-400 hover:text-white transition">Eyelashes</Link>
                        <Link to="/skincare" className="text-xs text-gray-400 hover:text-white transition">Skincare</Link>
                      </div>
                    </div>

                    {/* Column 3: Longevity & Anti-Aging */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-2 min-h-[48px] flex items-end">Longevity & Anti-Aging</h3>
                      <div className="flex flex-col gap-2">
                        <Link to="/sermorelin" className="text-xs text-gray-400 hover:text-white transition">Sermorelin</Link>
                        <Link to="/metformin" className="text-xs text-gray-400 hover:text-white transition">Metformin</Link>
                        <Link to="/glutathione" className="text-xs text-gray-400 hover:text-white transition">Glutathione Injectable</Link>
                        <Link to="/nad-injectable" className="text-xs text-gray-400 hover:text-white transition">NAD+ Injectable</Link>
                        <Link to="/nad-nasal" className="text-xs text-gray-400 hover:text-white transition">NAD+ Nasal</Link>
                      </div>
                    </div>

                    {/* Column 4: Lifestyle */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-2 min-h-[48px] flex items-end">Lifestyle</h3>
                      <div className="flex flex-col gap-2">
                        <Link to="/b12" className="text-xs text-gray-400 hover:text-white transition">B12</Link>
                        <Link to="/propranolol" className="text-xs text-gray-400 hover:text-white transition">Propranolol</Link>
                        <Link to="/stop-smoking" className="text-xs text-gray-400 hover:text-white transition">Stop Smoking</Link>
                        <Link to="/sleep" className="text-xs text-gray-400 hover:text-white transition">Sleep</Link>
                      </div>
                    </div>

                    {/* Column 5: Other Therapies */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-2 min-h-[48px] flex items-end">Other Therapies</h3>
                      <div className="flex flex-col gap-2">
                        <Link to="/herpes" className="text-xs text-gray-400 hover:text-white transition">Herpes</Link>
                        <Link to="/cold-sores" className="text-xs text-gray-400 hover:text-white transition">Cold Sores</Link>
                        <Link to="/acid-reflux" className="text-xs text-gray-400 hover:text-white transition">Acid Reflux</Link>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </nav>

          {/* Right side: Icons */}
          <div className="flex items-center gap-5 text-white">
            <Link to="/" className="hidden md:block bg-[#f17625] hover:bg-[#d15e14] text-black text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm transition-colors">
              See If I Qualify
            </Link>
            <button className="hover:opacity-70 transition">
              <User size={20} />
            </button>
            <Link to="/cart" className="relative hover:opacity-70 transition">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#f17625] text-black text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div className={`fixed inset-0 bg-black z-[60] transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden p-6 overflow-y-auto`}>
         <button onClick={() => setIsMenuOpen(false)} className="text-white mb-8"><X size={30}/></button>
         <nav className="flex flex-col gap-6 text-white">
            {/* Weight Loss */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">Weight Loss</h3>
              <div className="flex flex-col gap-2 ml-4">
                <Link to="/weightloss" onClick={() => setIsMenuOpen(false)} className="text-sm hover:text-[#f17625] transition">Compounded Semaglutide</Link>
                <Link to="/weightloss" onClick={() => setIsMenuOpen(false)} className="text-sm hover:text-[#f17625] transition">Compounded Tirzepatide</Link>
                <Link to="/low-dose-naltrexone" onClick={() => setIsMenuOpen(false)} className="text-sm hover:text-[#f17625] transition">Low Dose Naltrexone</Link>
              </div>
            </div>

            {/* Men's Treatments */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">Men</h3>
              <div className="flex flex-col gap-2 ml-4">
                <Link to="/trt" onClick={() => setIsMenuOpen(false)} className="text-sm hover:text-[#f17625] transition">TRT</Link>
                <Link to="/erectile-dysfunction" onClick={() => setIsMenuOpen(false)} className="text-sm hover:text-[#f17625] transition">Erectile Dysfunction</Link>
                <Link to="/premature-ejaculation" onClick={() => setIsMenuOpen(false)} className="text-sm hover:text-[#f17625] transition">Premature Ejaculation</Link>
                <Link to="/hairloss-men" onClick={() => setIsMenuOpen(false)} className="text-sm hover:text-[#f17625] transition">Men's Hair Loss</Link>
              </div>
            </div>

            {/* Women's Treatments */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">Women</h3>
              <div className="flex flex-col gap-2 ml-4">
                <Link to="/birth-control" onClick={() => setIsMenuOpen(false)} className="text-sm hover:text-[#f17625] transition">Birth Control</Link>
                <Link to="/hairloss-women" onClick={() => setIsMenuOpen(false)} className="text-sm hover:text-[#f17625] transition">Women's Hair Loss</Link>
                <Link to="/eyelashes" onClick={() => setIsMenuOpen(false)} className="text-sm hover:text-[#f17625] transition">Eyelashes</Link>
                <Link to="/skincare" onClick={() => setIsMenuOpen(false)} className="text-sm hover:text-[#f17625] transition">Skincare</Link>
              </div>
            </div>

            {/* Common Treatments */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">Other Treatments</h3>
              <div className="flex flex-col gap-2 ml-4">
                <Link to="/sermorelin" onClick={() => setIsMenuOpen(false)} className="text-sm hover:text-[#f17625] transition">Sermorelin</Link>
                <Link to="/metformin" onClick={() => setIsMenuOpen(false)} className="text-sm hover:text-[#f17625] transition">Metformin</Link>
                <Link to="/b12" onClick={() => setIsMenuOpen(false)} className="text-sm hover:text-[#f17625] transition">B12</Link>
                <Link to="/sleep" onClick={() => setIsMenuOpen(false)} className="text-sm hover:text-[#f17625] transition">Sleep</Link>
              </div>
            </div>
         </nav>
      </div>
    </header>
  );
};