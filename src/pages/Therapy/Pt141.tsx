import { HeaderBlack } from '@/components/HeaderBlack'
import ProductHero from '@/components/Products/ProductHero'
import TrustBadges from '@/components/Products/TrustBadges'
import React from 'react'
import vial from "../../assets/vial.png"
import ProductDescription from '@/components/Products/ProductDescription'
import pt141 from "../../assets/therapy images/pt141.jpg"
import pt1412 from "../../assets/therapy images/pt1412.webp"

const Pt141 = () => {
      const benefits = [
    "Increases sexual desire in men and women",
    "Effective for psychological and neurological libido issues",
    "Can help men with ED unresponsive to PDE5 inhibitors",
    "Enhances physical arousal, sensation, and orgasmic response",
    "FDA-approved for HSDD in women",
    "Non-hormonal and well tolerated"
  ];
  return (
    <div>
        <HeaderBlack/>
        <ProductHero
            protocol="Sexual Health & Wellness"
            productName="PT-141"
            tagline="The arousal peptide—ideal for men and women."
            price="189"
            image={vial}
            // onAddToCart={handleAddToCart}
        />
        <TrustBadges/>
        <ProductDescription
            title="What is PT141?"
            subtitle="PT-141 (Bremelanotide) is a centrally acting melanocortin receptor agonist used to enhance sexual desire and arousal in women. Originally developed to treat sexual dysfunction, it is FDA-approved for hypoactive sexual desire disorder (HSDD) in premenopausal women. Unlike traditional ED medications, PT-141 works through the brain rather than blood flow."
            benefits={[]}
            image={pt141}
            imageAspectRatio="aspect-[3/2]"
        />
        <ProductDescription
            title="Benefits"
            subtitle=""
            benefits={benefits}
            image={pt1412}
            imageAspectRatio="aspect-[3/2.3]"
            imagePosition='left'
        />
    </div>
  )
}

export default Pt141