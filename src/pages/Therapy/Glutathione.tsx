import { HeaderBlack } from '@/components/HeaderBlack'
import ProductHero from '@/components/Products/ProductHero'
import React from 'react'
import vial from "../../assets/vial.png"
import ProductDescription from '@/components/Products/ProductDescription'
import glutathione from "../../assets/therapy images/glutathione.jpg"
import glutathione2 from "../../assets/therapy images/glutathione2.jpg"
import glutathione3 from "../../assets/therapy images/glutathione3.jpg"
import ProductFAQ from '@/components/Products/ProductFAQ'
import TrustBadges from '@/components/Products/TrustBadges'
import { useCart } from '@/context/CartContext';

const Glutathione = () => {
    const { addToCart } = useCart();

    const benefits = [
  {
    title: "MASTER ANTIOXIDANT ACTIVITY",
    description:
      "Neutralizes reactive oxygen species (ROS), reducing oxidative stress and inflammation—key drivers of aging and chronic disease.",
  },
  {
    title: "DETOXIFICATION SUPPORT",
    description:
      "Conjugates and removes toxins, heavy metals, and environmental pollutants via phase II liver detoxification.",
  },
  {
    title: "MITOCHONDRIAL & IMMUNE OPTIMIZATION",
    description:
      "Protects mitochondrial DNA and boosts immune system function, especially under physical or environmental stress.",
  },
];
  const benefits2 = [
    "Reduces oxidative stress and free radical damage",
    "Supports liver detox and metabolic health",
    "Improves skin tone, clarity, and brightness",
    "Enhances immune resilience and cellular repair",
    "Boosts energy and mitochondrial performance",
    "Combats fatigue, inflammation, and age-related decline"
  ];

  const faqItems = [
    {
      question: "What can I expect with Glutathione therapy?",
      answer: (
        <div className="space-y-3">
          <p>• Within 1–2 weeks: improved energy, reduced fatigue, clearer skin</p>
          <p>• Month 1–2: improved liver enzymes, enhanced immunity, better oxidative markers</p>
          <p>• May be cycled or used continuously depending on goals</p>
          <p>• Missed dose? Resume on the next scheduled injection day</p>
        </div>
      )
    },
    {
      question: "What are the possible side effects of Glutathione?",
      answer: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">Common (Usually mild):</p>
            <ul className="space-y-1 ml-4">
              <li>• Injection site discomfort</li>
              <li>• Headache or lightheadedness</li>
              <li>• Temporary sulfur odor on breath or skin (rare)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Less Common / Monitor If Present:</p>
            <ul className="space-y-1 ml-4">
              <li>• GI upset (more common with oral forms)</li>
              <li>• Allergic reaction (rare)</li>
              <li>• Lower zinc levels with long-term high-dose use</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Precautions:</p>
            <ul className="space-y-1 ml-4">
              <li>• Avoid use in patients with sulfa allergies or certain chemotherapy regimens</li>
              <li>• May interact with some cancer treatments (consult oncology if applicable)</li>
              <li>• Not recommended during pregnancy or breastfeeding unless medically necessary</li>
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
            protocol="Antioxidant Power Protocol"
            productName="GLUTATHIONE"
            tagline="Experience the potential age-restoring benefits of Glutathione!"
            price="57.32"
            image={vial}
            pricingPlans={[
              {
                duration: "1 Month",
                label: "1 Month",
                price: "57.32",
                id: "42"
              }
            ]}
            onAddToCart={(item) => addToCart({ ...item, image: vial, id: "42" })}
        />
         <TrustBadges  />

        <ProductDescription
            title="Glutathione"
            subtitle="Glutathione is the body's most powerful endogenous antioxidant, playing a central role in detoxification, immune support, mitochondrial function, and cellular repair. Injectable glutathione bypasses the digestive tract, allowing for superior bioavailability and rapid systemic effects. In the context of longevity and anti-aging medicine, glutathione is used to combat oxidative stress, support liver function, improve skin clarity, and enhance metabolic resilience."
            benefits={[]}
            image={glutathione}
            imageAspectRatio="aspect-[3/2]"
            // onGetStarted={handleAddToCart}
        />
        <ProductDescription
            title="How does it work?"
            subtitle=""
            benefits={benefits}
            image={glutathione2}
            // onGetStarted={handleAddToCart}
            imageAspectRatio="aspect-[3/2.5]"
            imagePosition="left"
        />
        <ProductDescription
            title="Benefits"
            subtitle=""
            benefits={benefits2}
            image={glutathione3}
            // onGetStarted={handleAddToCart}
            imageAspectRatio="aspect-[3/2.3]"
        />
        <ProductFAQ items={faqItems} />
    </div>
  )
}

export default Glutathione