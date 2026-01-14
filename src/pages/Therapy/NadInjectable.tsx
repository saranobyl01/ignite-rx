import { HeaderBlack } from '@/components/HeaderBlack'
import ProductHero from '@/components/Products/ProductHero'
import TrustBadges from '@/components/Products/TrustBadges'
import React from 'react'
import bottle from "../../assets/vial.png"
import ProductDescription from '@/components/Products/ProductDescription'
import ProductFAQ from '@/components/Products/ProductFAQ'
import nadinjection1 from "../../assets/therapy images/nad-injection (1).jpg"
import nadinjection2 from "../../assets/therapy images/nad-injection (2).jpg"
import { useCart } from '@/context/CartContext';

const NadInjectable = () => {
    const { addToCart } = useCart();
      const benefits = [
    "Maintaining healthy NAD+ levels slows down the aging process",
    "May reduce your risk for chronic age-related disease",
    "Boost healthy metabolism, gene expression & DNA repair",
    "Enhances energy levels, mental clarity & mood by supporting DNA health",
    "Promotes brain & immune cell functioning throughout the aging process",
    "Effective in reducing cravings & fatigue while improving post-workout recovery",
    "Delivers benefits faster than other methods at a fraction of the cost of infusions",
    "Compounded & made-to-order by a certified pharmacy",
    "Tested for purity by US-licensed pharmacies"
  ];

    const faqItems = [
    {
      question: "What is NAD+?",
      answer: (
        <div className="space-y-3">
          <p>NAD+ (Nicotinamide Adenine Dinucleotide) Injectable is a powerful longevity and mitochondrial support therapy administered via intramuscular or subcutaneous injection. NAD+ is a coenzyme present in every cell and is essential for energy metabolism, DNA repair, and healthy cellular aging.</p>
          <p>As we age, NAD+ levels decline, contributing to fatigue, inflammation, cognitive decline, and metabolic dysfunction. Injectable NAD+ provides rapid and efficient absorption into the bloodstream for systemic and neurological rejuvenation.</p>
        </div>
      )
    },
    {
      question: "How does it work?",
      answer: (
        <div className="space-y-4">
          <p>NAD+ plays a central role in longevity and cellular repair mechanisms:</p>
          <div>
            <p className="font-semibold mb-2">Cellular Energy & Mitochondrial Function</p>
            <p className="ml-4">NAD+ fuels the electron transport chain, directly boosting ATP production in mitochondria—enhancing stamina, resilience, and metabolic health.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">DNA Repair & Sirtuin Activation</p>
            <p className="ml-4">Activates sirtuins (SIRT1, SIRT3) and PARPs, key enzymes involved in DNA repair, inflammation control, and regulation of aging.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Whole-Body Anti-Aging Support</p>
            <p className="ml-4">Supports neuroprotection, insulin sensitivity, immune modulation, and resistance to oxidative stress.</p>
          </div>
        </div>
      )
    },
    {
      question: "What are the possible side effects of NAD+ injections?",
      answer: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">Common (Usually mild and transient):</p>
            <ul className="space-y-1 ml-4">
              <li>• Injection site soreness or redness</li>
              <li>• Warm flushing sensation</li>
              <li>• Headache or lightheadedness (especially with IV or high doses)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Less Common / Monitor If Present:</p>
            <ul className="space-y-1 ml-4">
              <li>• Nausea or GI discomfort</li>
              <li>• Fatigue or sleep disturbances in first few doses</li>
              <li>• Anxiety or overstimulation (rare, often dose-dependent)</li>
            </ul>
          </div>
        </div>
      )
    }
  ];
  return (
    <div>
        <HeaderBlack/>
        <ProductHero
            protocol="Energy Enhancement Protocol"
            productName="NAD+ INJECTABLE"
            tagline="Enhance energy levels, mental clarity & mood by supporting DNA health"
            price="199.00"
            image={bottle}
            pricingPlans={[
              {
                duration: "1 Month",
                label: "1 Month",
                price: "199.00",
                id: "46"
              }
            ]}
            onAddToCart={(item) => addToCart({ ...item, image: bottle, id: "46" })}
        />

        {/* Trust Badges */}
        <TrustBadges />
        <ProductDescription
            title="Unlock Your True Potential with NAD+ Injectable!"
            subtitle="NAD stands for Nicotinamide Adenine Dinucleotide. NAD+ levels decline with age as evidenced in scientific studies. By improving and sustaining NAD+ levels, you can decelerate the aging process. NAD+ is essential for vital cellular functions like energy production, cellular repair, detoxification, and sleep. As we age, our NAD+ levels decline, impacting our skin, energy, and increasing chronic illness risks. In fact, we lose about 30% of our NAD+ levels between ages 45-60. Low NAD+ levels have been shown to cause low energy, insulin sensitivity, muscle weakness, and neurodegenerative disorders like Alzheimer's. Studies show that maintaining your NAD+ levels supports healthy aging for improved quality of life."
            benefits={[]}
            image={nadinjection1}
            // onGetStarted={handleAddToCart}
             imageAspectRatio="aspect-[3/2.5]"
        />
        <ProductDescription
            title="Benefits of NAD+"
            subtitle=""
            benefits={benefits}
            image={nadinjection2}
            // onGetStarted={handleAddToCart}
            imagePosition='left'
        />
        <ProductFAQ items={faqItems} />

    </div>
  )
}

export default NadInjectable