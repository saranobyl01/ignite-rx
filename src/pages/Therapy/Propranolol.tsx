import { HeaderBlack } from '@/components/HeaderBlack'
import ProductHero from '@/components/Products/ProductHero'
import React from 'react'
import bottle from "../../assets/bottle.png" // Fallback image
import TrustBadges from '@/components/Products/TrustBadges'
import ProductDescription from '@/components/Products/ProductDescription'
import { useCart } from '@/context/CartContext'

const Propranolol = () => {
  const { addToCart } = useCart();
  const benefits = [
    "Reduces physical symptoms of performance anxiety (jitters, racing heart)",
    "May support cardiovascular health in specific contexts",
    "Used off-label for situational anxiety relief without sedation",
  ];

  const faqItems = [
    {
      question: "What is Propranolol used for?",
      answer: "Propranolol is a beta-blocker often prescribed for high blood pressure and heart conditions. It is also widely used off-label to manage physical symptoms of situational anxiety, such as public speaking or performance events."
    }
  ];

  return (
    <div>
        <HeaderBlack/>
        <ProductHero
            protocol="Performance Support"
            productName="PROPRANOLOL"
            tagline="Calm Under Pressure"
            price="87.00"
            image={bottle}
            onAddToCart={(item) => addToCart({ ...item, image: bottle })}
        />
        <TrustBadges/>
        <ProductDescription
            title="What is Propranolol?"
            subtitle="Propranolol blocks the effects of adrenaline on your heart. It reduces heart rate and blood pressure, helping you feel more calm and focused during high-pressure situations."
            benefits={benefits}
            image={bottle} 
            imageAspectRatio="aspect-[3/2]"
        />
    </div>
  )
}

export default Propranolol
