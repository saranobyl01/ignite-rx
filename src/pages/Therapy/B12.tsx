import { HeaderBlack } from '@/components/HeaderBlack'
import ProductDescription from '@/components/Products/ProductDescription'
import ProductHero from '@/components/Products/ProductHero'
import TrustBadges from '@/components/Products/TrustBadges'
import React from 'react'
import { useCart } from '@/context/CartContext'
import bottle from "../../assets/bottle.png"
import b12_1 from "../../assets/therapy images/b121.jpg"
import b12_2 from "../../assets/therapy images/b122.jpg"

const B12 = () => {
  const { addToCart } = useCart();
  const designedToSupport = [
    "Low energy or chronic fatigue",
    "Brain fog or trouble concentrating",
    "Low mood or stress-related burnout",
    "Poor sleep or recovery",
    "Plant-based or low-meat diets",
    "Digestive absorption issues (e.g., IBS, Crohn's, post-surgery)"
  ];
    const whyChooseB12 = [
    "Fast-absorbing and more effective than oral B12",
    "Supports energy, focus, metabolism, and mood",
    "Delivered to your door or administered in-clinic",
    "Doctor-guided and customizable based on your levels",
    "Safe, simple, and non-stimulant"
  ];
  const pricingPlans = [
    {
      id: "45",
      name: "B12 - 2 month",
      price: "50",
      duration: "2 months"
    }
  ];

  return (
    <div>
      <HeaderBlack />
      <ProductHero
        protocol="LONGEVITY & VITALITY"
        productName="B12"
        tagline="Endurance and focus, naturally."
        pricingPlans={pricingPlans}
        image={bottle}
        onAddToCart={(item) => addToCart({ ...item, image: bottle })}
      />
         <TrustBadges isDark={false} />
        <ProductDescription
        title="What Is B12 Injection Therapy?"
        subtitle="Vitamin B12 is essential for energy production, red blood cell formation, and nervous system function. Many people don't get enough—especially if you follow a plant-based diet, have digestive issues, or live with chronic stress. Unlike pills or sprays, B12 injections deliver the vitamin directly into your system, bypassing the gut for fast absorption and noticeable results. Designed to Support:"
        benefits={designedToSupport}
        image={b12_1}
        // onGetStarted={handleAddToCart}
         imageAspectRatio="aspect-[3/3]"
      />
      <ProductDescription
        title="Why Patients Choose Our B12 Injections"
        subtitle="If you're constantly tired, foggy, or running on empty, you might be low on a key nutrient your body needs to function at its best: Vitamin B12. Our B12 injection therapy helps you restore energy, sharpen focus, and support metabolism—quickly and effectively."
        benefits={whyChooseB12}
        image={b12_2}
        // onGetStarted={handleAddToCart}
        imagePosition="left"
        imageAspectRatio="aspect-[3/3]"
      />
    </div>
  )
}

export default B12