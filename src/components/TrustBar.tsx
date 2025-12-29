import React from 'react'
import {  Check } from 'lucide-react';

const TrustBar = () => {
    const trustFeatures = [
    // "PERFORMANCE DRIVEN",
    // "LICENSED HEALTHCARE PROVIDERS",
    // "CLIA CERTIFIED LABS",
    // "HIPAA COMPLIANT",
    // "FDA REGULATED PHARMACIES"
    "100% discreet",
    "Online Consultation",
    "U.S. board certified physicians",
    "Fast free delivery",
  ];
  return (
    <div>
        {/* --- TRUST BAR SECTION --- */}
      <section className="bg-black border-t border-white/10 py-8 md:py-10 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check size={14} className="text-white opacity-80" />
                <span className="flex items-center text-white opacity-60 text-sm font-inter gap-2 whitespace-nowrap">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TrustBar










