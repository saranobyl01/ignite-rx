import { HeaderBlack } from '@/components/HeaderBlack'
import ProductHero from '@/components/Products/ProductHero'
import React from 'react'
import vial from "../../assets/vial.png"
import TrustBadges from '@/components/Products/TrustBadges'
import { ArrowRight } from 'lucide-react'

const WeightLoss = () => {
  return (
    <div>
        <HeaderBlack/>
        <ProductHero
        protocol="WEIGHT LOSS"
        productName="Compounded GLP-1℞M | Advanced GLP-1 + GIP℞"
        tagline=""
        additionalInfo="At Fortifyhp, we offer advanced medical weight loss treatments using GLP-1 (Semaglutide) and GLP-1 + GIP (Tirzepatide)—two clinically studied medications that help support healthy, sustainable weight management."
        
        medicationVariants={[{
        name: "Compounded GLP-1℞M",
        }, {
        name: "Advanced GLP-1 + GIP℞",
        
        }]} 

        pricingPlans={[{
        duration: "1 Month",
        prices: {
            "Compounded GLP-1℞M": 249.97,
            "Advanced GLP-1 + GIP℞": 349.97
        }
        }, {
        duration: "3 Months",
        prices: {
            "Compounded GLP-1℞M": 449.97,
            "Advanced GLP-1 + GIP℞": 749.97
        }
        }, {
        duration: "6 Months",
        prices: {
            "Compounded GLP-1℞M": 809.95,
            "Advanced GLP-1 + GIP℞": 1349.82
        }
        }, {
        duration: "12 Months",
        prices: {
            "Compounded GLP-1℞M": 1349.97,
            "Advanced GLP-1 + GIP℞": 2349.88
        }
        }]}
        image={vial}
        // onAddToCart={handleAddToCart}
      />
      <TrustBadges/>
      <section className="py-16 px-4 bg-bg-[#dbdbdb1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight tracking-tight text-foreground">
                Doctor-Led Weight Loss Plans Starting at $249/Month
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                      <p>
                        Provider personalized dosages, one all-in price. It’s that simple.
                      </p>
                      <ul className="list-disc list-insid">
                        <li>Personalized treatment plan from a licensed provider</li>
                        <li>Includes online consultation, medication, and shipping</li>
                        <li>Transparent monthly pricing – no hidden fees</li>
                      </ul>
                      <p>
                        Prescription products require an online consultation with a healthcare professional who will determine if a prescription is appropriate. This is a compounded medication and is not FDA-approved. Its safety or effectiveness has not been verified by the FDA.
                      </p>
              </div>
              <button  className={`w-full lg:w-auto px-8 md:px-12 lg:px-14 py-3.5 md:py-4 bg-black text-white border border-white flex gap-3 font-medium tracking-wide text-sm md:text-base rounded-full shadow-lg transition-all duration-300 active:scale-95 `}>
                  Get Started <ArrowRight/>
                </button>
            </div>
            <div>
              <img 
                src={""} 
                alt="weightloss" 
                className="w-full h-auto rounded-lg shadow-lg object-cover aspect-[3/2.5]"
              />
            </div>
                  
          </div>
        </div>
      </section>
    </div>
  )
}

export default WeightLoss