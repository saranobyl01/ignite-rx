import { HeaderBlack } from '@/components/HeaderBlack'
import ProductDescription from '@/components/Products/ProductDescription';
import ProductHero from '@/components/Products/ProductHero';
import TrustBadges from '@/components/Products/TrustBadges';
import React from 'react'
import spray from "../../assets/spray.png"
import nadnasal1 from "../../assets/therapy images/nad-nasal (1).jpg"
import nadnasal2 from "../../assets/therapy images/nad-nasal (2).jpg"
import nadnasal3 from "../../assets/therapy images/nad-nasal (3).jpg"

const NadNasal = () => {
    const benefits = [
    "Increases energy, stamina, and recovery",
    "Boosts cognitive clarity and focus",
    "Promotes healthy aging and DNA repair",
    "Supports mitochondrial and metabolic function",
    "Rapid brain delivery via intranasal route",
    "Safe for long-term use with minimal side effects"
  ];

  const faqItems = [
    {
      question: "What can I expect with NAD+ therapy?",
      answer: (
        <div className="space-y-4">
          <p className="font-semibold">Common dose: 1–2 sprays per nostril, 1–2x daily (typically 25–50mg NAD+ per use)</p>
          <div className="space-y-2">
            <p>• <span className="font-semibold">Day 1–3:</span> Increased alertness, reduced brain fog, better energy</p>
            <p>• <span className="font-semibold">Week 2+:</span> Improved mood, motivation, and cognitive performance</p>
            <p>• <span className="font-semibold">1–3 months:</span> Enhanced mitochondrial resilience, metabolic flexibility, and cellular repair</p>
            <p>• Best used in combination with fasting, exercise, red light therapy, and sleep optimization</p>
          </div>
        </div>
      )
    },
    {
      question: "What are the possible side effects of NAD+?",
      answer: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">Common (Usually mild and transient):</p>
            <ul className="space-y-1 ml-4">
              <li>• Nasal irritation or mild burning sensation</li>
              <li>• Temporary flushing or warmth</li>
              <li>• Mild headache or lightheadedness</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Less Common / Monitor If Present:</p>
            <ul className="space-y-1 ml-4">
              <li>• Nausea (rare)</li>
              <li>• Fatigue with very high doses</li>
              <li>• Runny nose or sneezing</li>
            </ul>
          </div>
        </div>
      )
    }
  ];
  const howItWorks = [
    {
      title: "MITOCHONDRIAL ENERGY SUPPORT",
      description: "NAD+ is essential for ATP production via the electron transport chain, directly improving cellular energy, stamina, and repair."
    },
    {
      title: "SIRTUIN ACTIVATION & DNA REPAIR",
      description: "Activates sirtuins (SIRT1, SIRT3) and PARPs, proteins that regulate aging, inflammation, and DNA stability."
    },
    {
      title: "NEUROCOGNITIVE ENHANCEMENT",
      description: "Nasal delivery allows NAD+ to rapidly cross into the brain, supporting memory, focus, and resilience to neurodegeneration."
    }
  ];
  return (
    <div>
        <HeaderBlack/>
        <ProductHero
            protocol="Brain + Body Energy Protocol"
            productName="NAD+ NASAL SPRAY"
            tagline="Boost your energy with NAD+"
            price="23.14"
            image={spray}
            // onAddToCart={handleAddToCart}
        />
        <TrustBadges />

        {/* Main Description Section */}
        <ProductDescription
            title="Unlock Brain + Body Energy"
            subtitle="NAD+ (Nicotinamide Adenine Dinucleotide) Nasal Spray is a fast-acting formulation designed to boost cellular energy, improve cognitive performance, and support healthy aging. NAD+ is a vital coenzyme found in every cell, essential for mitochondrial function, DNA repair, and metabolic health. As we age, NAD+ levels decline—contributing to fatigue, inflammation, and cellular dysfunction. Nasal delivery bypasses the digestive system and blood-brain barrier, delivering NAD+ directly to the brain for enhanced cognitive and neuroprotective effects."
            benefits={[]}
            image={nadnasal1}
            // onGetStarted={handleAddToCart}
            imageAspectRatio="aspect-[3/2]"
        />
        <ProductDescription
            title="How does it work?"
            subtitle="NAD+ supports cellular longevity and brain function through multiple pathways:"
            benefits={howItWorks}
            image={nadnasal2}
            // onGetStarted={handleAddToCart}
            imageAspectRatio="aspect-[3/2.7]"
            imagePosition='left'
        />
        <ProductDescription
            title="Benefits"
            subtitle=""
            benefits={benefits}
            image={nadnasal3}
            // onGetStarted={handleAddToCart}
            imageAspectRatio="aspect-[3/2.3]"
        />


    </div>
  )
}

export default NadNasal