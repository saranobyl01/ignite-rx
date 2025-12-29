import { HeaderBlack } from '@/components/HeaderBlack'
import ProductHero from '@/components/Products/ProductHero'
import React from 'react'
import bottle from "../../assets/bottle.png" // Fallback image
import TrustBadges from '@/components/Products/TrustBadges'
import ProductDescription from '@/components/Products/ProductDescription'

const StopSmoking = () => {
  const benefits = [
    "Reduces nicotine cravings and withdrawal symptoms",
    "Blocks the pleasurable effects of nicotine in the brain",
    "Increases long-term cessation success rates",
  ];

  return (
    <div>
        <HeaderBlack/>
        <ProductHero
            protocol="Cessation Support"
            productName="STOP SMOKING SUPPORT"
            tagline="Reclaim Your Health"
            price="99.00"
            image={bottle}
            onAddToCart={()=>{}}
        />
        <TrustBadges/>
        <ProductDescription
            title="Stop Smoking Support"
            subtitle="Our stop smoking protocol typically includes medications like Bupropion or similar therapies designed to reduce cravings and help you quit for good."
            benefits={benefits}
            image={bottle}
            imageAspectRatio="aspect-[3/2]"
        />
    </div>
  )
}

export default StopSmoking
