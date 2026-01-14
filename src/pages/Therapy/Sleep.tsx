import { HeaderBlack } from '@/components/HeaderBlack'
import ProductHero from '@/components/Products/ProductHero'
import TrustBadges from '@/components/Products/TrustBadges'
import React from 'react'
import bottle from "../../assets/bottle.png"
import sleep1 from "../../assets/therapy images/sleep (1).jpg"
import sleep2 from "../../assets/therapy images/sleep (2).jpg"
import sleep3 from "../../assets/therapy images/sleep (3).jpg"
import ProductDescription from '@/components/Products/ProductDescription'
import { useCart } from '@/context/CartContext'

const Sleep = () => {
    const { addToCart } = useCart();
      const medicationVariants = [
    {
      name: "Trazodone 50mg (3 Month)",
      price: 90.00,
      productId: "90"
    },
    {
      name: "Ramelteon 3mg (3 Month)",
      price: 150.00,
      productId: "91"
    }
  ];
const benefits = [
  {
    title: "TRAZODONE:",
    description:
      "Increases REM/Deep Sleep\nPromotes Calming & Relaxation\nRegulates Serotonin Levels\nGet Long Lasting, Quality Sleep",
  },
  {
    title: "RAMELTEON:",
    description:
      "FDA Approved to Treat Insomnia\nAverage 7+ Hours of Sleep\n10 X Stronger Than Melatonin\nWorks Quickly & Lasts All Night Long",
  },
];

  return (
    <div>
        <HeaderBlack/>
        <ProductHero
            protocol="SLEEP THERAPY"
            productName="Sleep"
            tagline="Get your best sleep in years!"
            medicationVariants={medicationVariants}
            image={bottle}
            onAddToCart={(item) => addToCart({
              ...item,
              image: bottle
            })}

        />
        <ProductDescription
            title="What is Insomnia?"
            subtitle="Insomnia is a common sleep disorder. With insomnia, you may have trouble falling asleep, staying asleep, or getting good quality sleep. This happens even if you have the time and the right environment to sleep well. Insomnia can get in the way of your daily activities and may make you feel sleepy during the day. Short-term insomnia can last for a few days or weeks. Chronic (long-term) insomnia occurs 3 or more nights a week, lasts more than 3 months, and cannot be fully explained by another health problem."
            benefits={[]}
            image={sleep3}
            // onGetStarted={handleAddToCart}
            imageAspectRatio="aspect-[3/2]"
        />
        <ProductDescription
            title="Common causes of Insomnia"
            subtitle="Common causes of insomnia include stress, an irregular sleep schedule, poor sleeping habits, mental health disorders, physical illnesses and pain, medications, neurological problems, and specific sleep disorders. For many people, a combination of these factors can initiate and exacerbate insomnia.
            Not all insomnia is the same. People can experience the condition in distinct ways. How a person is affected by insomnia can vary significantly based on its cause, severity, and how it is influenced by underlying health conditions."
            benefits={[]}
            image={sleep2}
            // onGetStarted={handleAddToCart}
            imageAspectRatio="aspect-[3/2]"
            imagePosition='left'
        />
        <ProductDescription
            title="Medications we offer"
            subtitle=""
            benefits={benefits}
            image={sleep1}
            // onGetStarted={handleAddToCart}
            imageAspectRatio="aspect-[3/2.5]"
            
        />
      {/* Trust Badges */}
      <TrustBadges />
    </div>
  )
}

export default Sleep