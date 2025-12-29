import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User, ShoppingCart } from 'lucide-react';
import logo from "../assets/logo_black.png";

export const Header = () => {
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
            {/* Other Treatments Mega Menu */}
            <div className="static group">
              <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 transition h-12">
                Other Treatments
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-t border-gray-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="container mx-auto px-6 py-8">
                  <div className="grid grid-cols-7 gap-8 text-left">
                    
                    {/* Column 1: Longevity */}
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

                    {/* Column 2: Sexual Health */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-2 min-h-[48px] flex items-end">Sexual Health</h3>
                      <div className="flex flex-col gap-2">
                        <Link to="/trt" className="text-xs text-gray-400 hover:text-white transition">TRT</Link>
                        <Link to="/trt" className="text-xs text-gray-400 hover:text-white transition">Erectile Dysfunction</Link>
                        <Link to="/premature-ejaculation" className="text-xs text-gray-400 hover:text-white transition">Premature Ejaculation</Link>
                        <Link to="/pt-141" className="text-xs text-gray-400 hover:text-white transition">PT-141</Link>
                      </div>
                    </div>

                    {/* Column 3: Hair Loss */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-2 min-h-[48px] flex items-end">Hair Loss</h3>
                      <div className="flex flex-col gap-2">
                        <Link to="/hairloss-men" className="text-xs text-gray-400 hover:text-white transition">Men's Hair Loss</Link>
                        <Link to="/hairloss-women" className="text-xs text-gray-400 hover:text-white transition">Women's Hair Loss</Link>
                      </div>
                    </div>
                    
                    {/* Column 4: Beauty */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-2 min-h-[48px] flex items-end">Beauty</h3>
                      <div className="flex flex-col gap-2">
                        <Link to="/eyelashes" className="text-xs text-gray-400 hover:text-white transition">Eyelashes</Link>
                        <Link to="/skincare" className="text-xs text-gray-400 hover:text-white transition">Skincare</Link>
                      </div>
                    </div>

                    {/* Column 5: Lifestyle */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-2 min-h-[48px] flex items-end">Lifestyle</h3>
                      <div className="flex flex-col gap-2">
                        <Link to="/b12" className="text-xs text-gray-400 hover:text-white transition">B12</Link>
                        <Link to="/propranolol" className="text-xs text-gray-400 hover:text-white transition">Propranolol</Link>
                        <Link to="/stop-smoking" className="text-xs text-gray-400 hover:text-white transition">Stop Smoking</Link>
                        <Link to="/sleep" className="text-xs text-gray-400 hover:text-white transition">Sleep</Link>
                      </div>
                    </div>

                    {/* Column 6: Other Therapies */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-2 min-h-[48px] flex items-end">Other Therapies</h3>
                      <div className="flex flex-col gap-2">
                        <Link to="/herpes" className="text-xs text-gray-400 hover:text-white transition">Herpes</Link>
                        <Link to="/cold-sores" className="text-xs text-gray-400 hover:text-white transition">Cold Sores</Link>
                        <Link to="/acid-reflux" className="text-xs text-gray-400 hover:text-white transition">Acid Reflux</Link>
                        <Link to="/birth-control" className="text-xs text-gray-400 hover:text-white transition">Birth Control</Link>
                      </div>
                    </div>

                    {/* Column 7: Other Peptides */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-2 min-h-[48px] flex items-end">Other Peptides</h3>
                      <div className="flex flex-col gap-2">
                        <Link to="/sermorelin" className="text-xs text-gray-400 hover:text-white transition">Sermorelin</Link>
                        <Link to="/pt-141" className="text-xs text-gray-400 hover:text-white transition">PT-141</Link>
                        <span className="text-xs text-gray-600 italic">More to come...</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <Link to="/trt" className="text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 transition">
              Providers
            </Link>
            {/* <Link to="/coaching" className="text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 transition">
              Coaching
            </Link>
            <Link to="/about" className="text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 transition">
              About
            </Link> */}
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