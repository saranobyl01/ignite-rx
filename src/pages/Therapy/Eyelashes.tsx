import { Header } from "@/components/Header";
import ProductHero from '@/components/Products/ProductHero'
import React from 'react'
import drop from "../../assets/drop.png"
import TrustBadges from '@/components/Products/TrustBadges'
import ProductDescription from '@/components/Products/ProductDescription'
import eyelash from "../../assets/therapy images/eyelash.avif"
import eyelash1 from "../../assets/therapy images/eyelash2.jpg"
import eyelash2 from "../../assets/therapy images/eyelash3.jpg"
import ProductFAQ from '@/components/Products/ProductFAQ'
import { useCart } from '@/context/CartContext'

const Eyelashes = () => {
    const { addToCart } = useCart();
    const benefits = [
  {
    title: "Promotes Longer Lashes",
    description:
      "Bimatoprost mimics natural prostamides, extending the active growth phase of eyelashes to support longer lash growth over time.",
  },
  {
    title: "Thicker, Fuller & Darker Lashes",
    description:
      "Enhances lash density and pigmentation, helping lashes appear fuller and darker even without mascara.",
  },
  {
    title: "Targeted & Safe Application",
    description:
      "The topical formula works directly on lash follicles with minimal systemic absorption, delivering targeted results with reduced risk of side effects.",
  },
];
  const benefits1 = [
    "Enhances insulin sensitivity and stabilizes blood sugar",
    "May reduce visceral fat and improve body composition",
    "Supports mitochondrial function and metabolic flexibility",
    "May reduce the risk of age-related diseases (heart disease, cancer, cognitive decline)",
    "Plant-based or low-meat diets",
    "Activates cellular repair pathways (AMPK, autophagy)"
  ];

    const faqItems = [
    {
      question: "What can I expect with Bimatoprost treatment?",
      answer: (
        <div className="space-y-3">
          <p>• Apply once nightly to the upper eyelash line using the provided applicator</p>
          <p>• Week 4–8: May start noticing slightly longer lashes</p>
          <p>• Week 8–12: Visible improvement in length and thickness</p>
          <p>• Week 12–16: Full results—longer, thicker, darker lashes</p>
          <p>• Continued daily use maintains results; discontinuation gradually reverses enhancement</p>
          <p>• Best results when applied consistently every night</p>
          <p>• Missed dose? Simply apply the next evening—do not double up</p>
        </div>
      )
    },
    {
      question: "What are the possible side effects of Bimatoprost?",
      answer: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">Common (Mild & Localized):</p>
            <ul className="space-y-1 ml-4">
              <li>• Eye redness or dryness</li>
              <li>• Darkening of the upper eyelid skin (reversible)</li>
              <li>• Itchy sensation at application site</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Less Common / Rare:</p>
            <ul className="space-y-1 ml-4">
              <li>• Iris (eye color) darkening (more common with direct eye instillation—not lash application)</li>
              <li>• Eyelash misdirection or unexpected hair growth near the application area</li>
              <li>• Allergic reaction (rash, swelling)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Precautions:</p>
            <ul className="space-y-1 ml-4">
              <li>• Use only on the upper lash line, not lower lashes</li>
              <li>• Remove contact lenses before applying (can reinsert after 15 minutes)</li>
              <li>• Avoid getting product in the eye; if contact occurs, rinse with water</li>
              <li>• Use a new applicator for each eye to reduce risk of contamination</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div>
        <Header variant="black" />
        <ProductHero
        protocol="SKIN & AESTHETICS"
        productName="Eyelashes"
        tagline="Wake up with beautiful lashes"
        price="129.00"
        image={drop}
        onAddToCart={(item) => addToCart({ ...item, image: drop })}
        />
        <TrustBadges  />

      {/* Main Description Section */}
      <ProductDescription
        title="What is Bimatoprost?"
        subtitle="Generic Latisse (Bimatoprost 0.03%) is a prostaglandin analog used to enhance eyelash growth. Originally developed to treat glaucoma, it was found to have a side effect that patients loved—longer, thicker, darker lashes. FDA-approved for hypotrichosis (inadequate or sparse eyelashes), Generic Latisse is applied nightly to the upper lash line to stimulate the natural growth cycle of lashes. Full results typically appear within 8–16 weeks of consistent use."
        benefits={[]}
        image={eyelash}
        //  onGetStarted={handleAddToCart}
         imageAspectRatio="aspect-[3/2]"
      />
      <ProductDescription
        title="How does it work?"
        subtitle="Bimatoprost lengthens and enhances lashes by extending the growth phase (anagen phase) of the eyelash hair cycle:"
        benefits={benefits}
        image={eyelash1}
        //  onGetStarted={handleAddToCart}
         imageAspectRatio="aspect-[3/2.5]"
         imagePosition="left"
      />
      <ProductDescription
        title="Benefits"
        subtitle=""
        benefits={benefits1}
        image={eyelash2}
        //  onGetStarted={handleAddToCart}
         imageAspectRatio="aspect-[3/2]"
      />
      <ProductFAQ items={faqItems}  />
    </div>
  )
}

export default Eyelashes