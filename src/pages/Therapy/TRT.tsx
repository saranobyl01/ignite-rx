import { Header } from "@/components/Header";
import ProductHero from '@/components/Products/ProductHero'
import React from 'react'
import vial from "../../assets/vial.png"
import TrustBadges from '@/components/Products/TrustBadges'
import ProductDescription from '@/components/Products/ProductDescription'
import trt from "../../assets/therapy images/trt.jpg"
import trt2 from "../../assets/therapy images/trt2.jpg"
import trt3 from "../../assets/therapy images/trt3.jpg"
import { ArrowRight } from 'lucide-react'
import ProductFAQ from '@/components/Products/ProductFAQ'
import { useCart } from '@/context/CartContext'

const TRT = () => {
    const { addToCart } = useCart();

      const medicationVariants = [
    {
      name: "Testosterone Cypionate",
      dose: "200 MG/ML",
      subtitle: "Inject 1 ML Weekly (4 ML Vial)",
      description: "Includes Testosterone Cypionate 200mg/ml, Syringes and Alcohol Prep Pads.", 
      price: 129,
      productId: "37"
    },
    {
      name: "Enclomiphene: Testosterone Oral",
      dose: "6.25 MG",
      subtitle: "Daily Oral Tablet",
      description: "Enclomiphene Citrate 6.25mg.",
      price: 199,
      productId: "38"
    }
  ];
  const symptoms =[
    "Reduced Libido (Sex Drive)",
    "Decreased Muscle Mass",
    "Increased Body Fat",
    "Erectile Dysfunction",
    "Fatigue",
    "Depression",
    "Decreased Bone Mass",
    "Difficulty Concentrating",
]
      const benefits = [
    "Boost Your Energy - Feel more energetic and ready to take on the day",
    "Enhance Your Libido - Restore your passion and improve your sexual health",
    "Improve Your Mood - Say goodbye to depression and hello to a more positive outlook on life",
    "Strengthen Your Bones - Maintain your bone density and reduce the risk of fractures"
  ];
    const faqItems = [
    {
      question: "What is TRT?",
      answer: "Testosterone Replacement Therapy (TRT) is a medical treatment used to address symptoms associated with low levels of testosterone in men. Testosterone is a hormone that plays a key role in male development and health, influencing muscle mass, bone density, red blood cell production, and sexual function. Low levels of testosterone, also known as hypogonadism, can lead to a variety of symptoms such as fatigue, decreased libido, depression, and reduced muscle mass."
    },
    {
      question: "What are the symptoms of low-testosterone?",
      answer: (
        <ul className="space-y-2">
          <li>• Reduced Libido (Sex Drive)</li>
          <li>• Decreased Muscle Mass</li>
          <li>• Increased Body Fat</li>
          <li>• Erectile Dysfunction</li>
          <li>• Fatigue</li>
          <li>• Depression</li>
          <li>• Decreased Bone Mass</li>
          <li>• Difficulty Concentrating</li>
        </ul>
      )
    },
    {
      question: "What medication do you offer for TRT?",
      answer: "Testosterone Cypionate is the Gold-Standard for Testosterone Replacement Therapy (TRT). Testosterone Cypionate has been widely used and studied, demonstrating consistent effectiveness in restoring testosterone levels to an appropriate range. You will receive your medication along with all the supplies that you will need. Injections can be done intramuscularly (IM) or subcutaneously (Sub-q). Your doctor will go over the options with you. The dosing of Testosterone Cypionate can be easily adjusted based on individual needs and response to treatment, allowing for personalized therapy plans. Your doctor will prescribe the right dose for your personal situation."
    },
    {
      question: "What is the TRT process?",
      answer: (
        <div className="space-y-4">
          <p>We'll need to check your testosterone levels along with other blood markers to ensure you are healthy enough to start Testosterone Replacement Therapy (TRT). Don't worry though, the process is easy and painless. You can go to any local Quest Lab location to have your blood drawn. Once our doctors have reviewed your blood work and completed the virtual consultation, you'll be notified if you have been approved then a prescription will be sent to the pharmacy and delivered to your home.</p>
          <div>
            <p className="font-semibold mb-2">Risks and side effects:</p>
            <ul className="space-y-1">
              <li>• Acne and oily skin</li>
              <li>• Sleep apnea</li>
              <li>• Enlarged prostate</li>
              <li>• Breast enlargement</li>
              <li>• Increased risk of blood clots</li>
              <li>• Decreased Fertility</li>
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
            protocol="Testosterone Replacement Therapy"
            productName="Testosterone Therapy"
            tagline="Powerful injectable testosterone therapy to reignite energy, muscle tone, libido, and overall vitality."
            price="129.00"
            image={vial}
            onAddToCart={(item) => addToCart({ ...item, image: vial })}
            medicationVariants={medicationVariants}
        />
        <TrustBadges />
        <section className="py-16 px-4 bg-bg-[#dbdbdb1a]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight tracking-tight text-foreground">
                What IS TRT?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg">
                <p>
                    Testosterone Replacement Therapy (TRT), also called Hormone Replacement Therapy (HRT), is recognized as a proven solution for men with low testosterone (hypogonadism).
                </p>
              </div>
              
              <h2 className="text-2xl md:text-3xl  font-light leading-tight tracking-tight text-foreground">
               Labs Made Easy!
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg">
                <p>
                    We’ll need to check your testosterone levels along with other blood markers to ensure you are healthy enough to start Testosterone Replacement Therapy (TRT). Don’t worry though, the process is easy and painless. We can send a phlebotomist to your home or you can go in-person to a lab and have your blood drawn. Once our doctors have reviewed your blood work and completed the virtual consultation, you’ll be notified if you have been approved then a prescription will be sent to the pharmacy and delivered to your home.
                </p>
              </div>
              <button  className={`max-w-max lg:w-auto px-8 md:px-12 lg:px-14 py-3.5 md:py-4 font-medium tracking-wide text-sm md:text-base rounded-full flex gap-2 shadow-lg transition-all duration-300 active:scale-95 bg-black text-white  shadow-white/20 hover:shadow-xl hover:shadow-white/30 bg-[black] text-white shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 `}>
                  Get Started <ArrowRight/>
                </button>
            </div>
            <div>
              <img 
                src={trt3} 
                alt="Acid Reflux treatment" 
                className="w-full h-auto rounded-lg shadow-lg object-cover aspect-[3/2.5] ransition-transform duration-700 hover:scale-105"
              />
            </div>
            
          </div>
        </div>
      </section>
      <ProductDescription
        title="Symptoms of Low Testosterone"
        subtitle=""
        benefits={symptoms}
        image={trt2}
        // onGetStarted={handleAddToCart}
        imagePosition="left"
        imageAspectRatio="aspect-[3/2.8]"
      />
      <ProductDescription
        title="Benefits"
        subtitle=""
        benefits={benefits}
        image={trt}
        // onGetStarted={handleAddToCart}
        imageAspectRatio="aspect-[3/2]"
      />
      <ProductFAQ items={faqItems}  />
    </div>
  )
}

export default TRT