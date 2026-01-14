import { HeaderBlack } from '@/components/HeaderBlack'
import ProductHero from '@/components/Products/ProductHero'
import TrustBadges from '@/components/Products/TrustBadges'
import React from 'react'
import vial from "../../assets/vial.png"
import ProductDescription from '@/components/Products/ProductDescription'
import sermorelin1 from "../../assets/therapy images/sermorelin (1).jpg"
import sermorelin2 from "../../assets/therapy images/sermorelin (2).jpg"
import sermorelin3 from "../../assets/therapy images/sermorelin (3).jpg"
import ProductFAQ from '@/components/Products/ProductFAQ'
import { useCart } from '@/context/CartContext'

const Sermorelin = () => {
    const { addToCart } = useCart();
    
  const pricingPlans = [
    {
      duration: "1 Month",
      label:"1 Month",
      price: "195.00",
      id: "39"
    },
    {
      duration: "3 Months",
      label:"3 Months",
      price: "575.00",
      id: "40"
    }
  ];
  const howItWorks = [
    {
      title: "Pituitary Stimulation",
      description: "Sermorelin binds to GHRH receptors in the anterior pituitary, prompting pulsatile HGH secretion, which leads to the downstream production of IGF-1—a key driver of cellular regeneration and repair."
    },
    {
      title: "Physiologic vs. Pharmacologic",
      description: "Because Sermorelin stimulates natural HGH production (rather than replacing it), the body maintains tighter control over hormone levels, reducing the risks associated with supraphysiologic dosing seen with synthetic HGH."
    },
    {
      title: "Youthful Restoration",
      description: "By boosting IGF-1 and HGH, Sermorelin promotes lean muscle gain, fat loss, skin tightening, and improved sleep—restoring multiple markers of youthful function."
    }
  ];

    const benefits = [
    "Stimulates natural HGH production",
    "Improves fat metabolism and muscle tone",
    "Enhances skin elasticity and hydration",
    "Supports deeper, more restorative sleep",
    "Boosts recovery from exercise and injury"
  ];

  return (
    <div>
        <HeaderBlack/>
        <ProductHero
            protocol="SERMORELIN"
            productName="Sermorelin"
            tagline="Age Smarter. Live Stronger."
            image={vial}
            pricingPlans={pricingPlans}
            onAddToCart={(item) => {
              // Find the selected plan to get the ID
              const selectedPlan = pricingPlans.find(p => p.price === item.price.replace('$', ''));
              addToCart({ 
                ...item, 
                image: vial,
                id: selectedPlan?.id
              });
            }}
        />
              {/* Trust Badges */}
        <TrustBadges />
        <ProductDescription
                title="What is Sermorelin?"
                subtitle="Sermorelin is a bioidentical peptide analog of growth hormone-releasing hormone (GHRH) used to naturally increase the production and release of human growth hormone (HGH). Unlike synthetic HGH injections, Sermorelin works upstream to support the body’s own growth hormone rhythm—making it a safer and more physiologically aligned option. It is frequently used to improve body composition, energy, recovery, sleep, skin tone, and cognitive clarity."
                benefits={[]}
                image={sermorelin3}
                // onGetStarted={handleAddToCart}
                 imageAspectRatio="aspect-[3/2]"
        />
        <ProductDescription
            title="How does it work?"
            subtitle="Sermorelin acts as a GHRH analog, triggering the body’s natural HGH production cascade:"
            benefits={howItWorks}
            image={sermorelin2}
                // onGetStarted={handleAddToCart}
            imageAspectRatio="aspect-[3/3]"
            imagePosition='left'
        />
        <ProductDescription
            title="Benefits"
            subtitle=""
            benefits={benefits}
            image={sermorelin1}
                // onGetStarted={handleAddToCart}
            imageAspectRatio="aspect-[3/2]"
            
        />


      <ProductFAQ 
        items={[
          {
            question: "What can I expect with Sermorelin treatment?",
            answer: (
              <div className="space-y-4">
                <p>Administer subcutaneously at night (typically 5 nights per week) to mimic natural HGH rhythm</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Weeks 2–4:</strong> Improved sleep and mood</li>
                  <li><strong>Weeks 4–8:</strong> Noticeable energy, body composition, and recovery benefits</li>
                  <li><strong>3–6 months:</strong> Enhanced skin tone, muscle tone, and metabolic changes</li>
                  <li>Consistency is key—effects are gradual and build over time</li>
                  <li>Best results when combined with proper nutrition, exercise, and lifestyle</li>
                </ul>
              </div>
            )
          },
          {
            question: "What are the possible side effects of Sermorelin?",
            answer: (
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-white mb-2">Common (Typically mild):</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Redness or irritation at injection site</li>
                    <li>Temporary flushing or warmth</li>
                    <li>Mild headache</li>
                    <li>Fatigue</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">Less Common / Rare:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Water retention or joint stiffness</li>
                    <li>Nausea</li>
                    <li>Dizziness or lightheadedness</li>
                  </ul>
                </div>
              </div>
            )
          }
        ]}
      />
    </div>
  )
}

export default Sermorelin