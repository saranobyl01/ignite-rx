import { HeaderBlack } from '@/components/HeaderBlack'
import ProductHero from '@/components/Products/ProductHero'
import React from 'react'
import bottle from "../../assets/bottle.png"
import TrustBadges from '@/components/Products/TrustBadges'
import ProductDescription from '@/components/Products/ProductDescription'
import metformin1 from "../../assets/therapy images/metformin (1).jpg"
import metformin2 from "../../assets/therapy images/metformin (2).jpg"
import metformin3 from "../../assets/therapy images/metformin (3).jpg"
import ProductFAQ from '@/components/Products/ProductFAQ'

const Metfrormin = () => {

    const benefits1 = [
  {
    title: "AMPK Activation",
    description:
      "Metformin activates AMP-activated protein kinase (AMPK), a key energy sensor that promotes fat oxidation, glucose uptake, and mitochondrial biogenesis—mimicking the effects of fasting.",
  },
  {
    title: "Insulin Sensitivity & Glycemic Control",
    description:
      " It lowers circulating insulin and glucose levels, helping reduce systemic inflammation and oxidative stress, two hallmarks of aging and metabolic decline.",
  },
  {
    title: "mTOR Pathway Modulation",
    description:
      "By inhibiting the mTOR pathway, Metformin slows down cellular overgrowth and supports autophagy—a crucial anti-aging process for cellular cleanup and repair.",
  },

];
const benefits = [
  "Enhances insulin sensitivity and stabilizes blood sugar",
  "May reduce visceral fat and improve body composition",
  "Supports mitochondrial function and metabolic flexibility",
  "May reduce the risk of age-related diseases (heart disease, cancer, cognitive decline)",
  "Activates cellular repair pathways (AMPK, autophagy)",
];
  const faqItems = [
    {
      question: "What can I expect with Metformin treatment?",
      answer: (
        <div className="space-y-3">
          <p>Start with 500mg once daily, gradually titrate up to 1000–2000mg daily if tolerated</p>
          <p>• Week 1–2: Improved blood sugar and appetite control</p>
          <p>• Week 4+: Enhanced energy, fat loss, cognitive clarity</p>
          <p>• Full anti-aging and metabolic benefits seen with consistent, long-term use</p>
          <p>• Best when combined with fasting, low-glycemic nutrition, and exercise</p>
          <p>• Missed dose? Skip and resume at the next scheduled time—do not double up</p>
        </div>
      )
    },
    {
      question: "What are the possible side effects of Metformin?",
      answer: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">Common (Typically transient):</p>
            <ul className="space-y-1 ml-4">
              <li>• Nausea</li>
              <li>• Diarrhea</li>
              <li>• Gas or bloating</li>
              <li>• Metallic taste</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Less Common / Monitor If Present:</p>
            <ul className="space-y-1 ml-4">
              <li>• Vitamin B12 deficiency (check annually)</li>
              <li>• Lactic acidosis (rare; risk higher in kidney/liver impairment or alcohol abuse)</li>
              <li>• Decreased appetite or mild fatigue</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Precautions:</p>
            <ul className="space-y-1 ml-4">
              <li>• Not recommended in patients with eGFR &lt;30 mL/min</li>
              <li>• Caution with alcohol or severe calorie restriction</li>
              <li>• Monitor B12 annually with long-term use</li>
              <li>• Take with food to reduce GI side effects</li>
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
            protocol="Metformin"
            productName="METFORMIN"
            tagline="Live Longer, Function Better"
            price="75.00"
            image={bottle}
            // onAddToCart={handleAddToCart}
        />
        <TrustBadges/>
        <ProductDescription
            title="What is Metformin?"
            subtitle="Metformin is a well-known oral medication traditionally used to manage type 2 diabetes. In recent years, it has gained recognition in longevity and anti-aging medicine due to its impact on insulin sensitivity, mitochondrial health, inflammation, and cellular aging. As a caloric restriction mimetic, Metformin is now widely used off-label to support metabolic health, fat loss, and cellular resilience, with potential to reduce age-related diseases and improve health span."
            benefits={[
            
            ]}
            image={metformin1}
            // onGetStarted={handleAddToCart}
            imageAspectRatio="aspect-[3/2]"
        />
        <ProductDescription
            title="How does it work?"
            subtitle="Metformin targets multiple aging-related pathways through metabolic regulation and mitochondrial support:"
            benefits={benefits1}
            image={metformin2}
            // onGetStarted={handleAddToCart}
            imageAspectRatio="aspect-[3/3]"
            imagePosition='left'
        />
        <ProductDescription
            title="Benefits"
            subtitle=""
            benefits={benefits}
            image={metformin3}
            // onGetStarted={handleAddToCart}
            imageAspectRatio="aspect-[3/2]"
        />
        
        <ProductFAQ items={faqItems}  />
    </div>
  )
}

export default Metfrormin