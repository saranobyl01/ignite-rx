import { HeaderBlack } from '@/components/HeaderBlack'
import ProductHero from '@/components/Products/ProductHero'
import React from 'react'
import bottle from "../../assets/bottle.png" // Fallback image
import TrustBadges from '@/components/Products/TrustBadges'
import ProductDescription from '@/components/Products/ProductDescription'
import { useCart } from '@/context/CartContext'

const StopSmoking = () => {
    const { addToCart } = useCart();
    const pricingPlans = [
        {
            name: "Bupropion SR 150mg",
            duration: "180 Quantity (90 Day Supply)",
            price: "45.00",
            id: "88"
        }
    ];

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
            pricingPlans={pricingPlans}
            image={bottle}
            onAddToCart={(item) => addToCart({
                name: item.name,
                price: item.price,
                image: bottle,
                id: item.id
            })}
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
