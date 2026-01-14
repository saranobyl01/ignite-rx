import { HeaderBlack } from '@/components/HeaderBlack'
import ProductHero from '@/components/Products/ProductHero'
import React from 'react'
import bottle from "../../assets/bottle.png" // Fallback image
import TrustBadges from '@/components/Products/TrustBadges'
import ProductDescription from '@/components/Products/ProductDescription'
import { useCart } from '@/context/CartContext'

const LowDoseNaltrexone = () => {
    const { addToCart } = useCart();
  const benefits = [
    "Modulates the immune system and reduces chronic inflammation",
    "Increases endorphin production for better mood and pain relief",
    "Supported by research for autoimmune conditions and chronic pain",
  ];

  return (
    <div>
        <HeaderBlack/>
        <ProductHero
            protocol="Immune & Pain Support"
            productName="LOW DOSE NALTREXONE"
            tagline="Balance Your System"
            price="99.00"
            image={bottle}
            pricingPlans={[
              {
                duration: "1 Month",
                label: "1 Month",
                price: "99.00",
                id: "48"
              }
            ]}
            onAddToCart={(item) => addToCart({ ...item, image: bottle, id: "48" })}
        />
        <TrustBadges/>
        <ProductDescription
            title="What is Low Dose Naltrexone?"
            subtitle="Low Dose Naltrexone (LDN) works by temporarily blocking opioid receptors, which triggers an increase in endorphin production and regulates immune function. It is widely used to support autoimmune health and manage chronic pain."
            benefits={benefits}
            image={bottle}
            imageAspectRatio="aspect-[3/2]"
        />
    </div>
  )
}

export default LowDoseNaltrexone
