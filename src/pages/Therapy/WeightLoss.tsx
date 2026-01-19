import { HeaderBlack } from '@/components/HeaderBlack'
import ProductHero from '@/components/Products/ProductHero'
import React from 'react'
import vial from "../../assets/vial.png"
import TrustBadges from '@/components/Products/TrustBadges'
import { ArrowRight } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const WeightLoss = () => {
    const { addToCart } = useCart();
    
    // Updated variants based on user request with specific IDs and prices
    const pricingAndVariants = [
        // Semaglutide
        {
            name: "Compounded Semaglutide (0.25 mg/week)",
            price: 249.00,
            productId: "1",
            subtitle: "1 Month Supply",
            description: "Semaglutide 0.25mg/week"
        },
        {
            name: "Compounded Semaglutide (0.5 mg/week)",
            price: 249.00,
            productId: "2",
             subtitle: "1 Month Supply",
              description: "Semaglutide 0.5mg/week"
        },
        {
            name: "Compounded Semaglutide (1 mg/week)",
            price: 249.00,
            productId: "3",
             subtitle: "1 Month Supply",
              description: "Semaglutide 1mg/week"
        },
        {
            name: "Compounded Semaglutide (1.5 mg/week)",
            price: 349.00,
            productId: "4",
             subtitle: "1 Month Supply",
              description: "Semaglutide 1.5mg/week"
        },
        {
            name: "Compounded Semaglutide (2 mg/week)",
            price: 349.00,
            productId: "5",
             subtitle: "1 Month Supply",
              description: "Semaglutide 2mg/week"
        },
         {
            name: "Compounded Semaglutide (2.5 mg/week)",
            price: 349.00,
            productId: "6",
             subtitle: "1 Month Supply",
              description: "Semaglutide 2.5mg/week"
        },
        // Tirzepatide
        {
            name: "Compounded Tirzepatide (2.5 mg/week)",
            price: 449.00,
            productId: "7",
            subtitle: "1 Month Supply",
            description: "Tirzepatide 2.5mg/week"
        },
         {
            name: "Compounded Tirzepatide (5 mg/week)",
            price: 449.00,
            productId: "8",
            subtitle: "1 Month Supply",
            description: "Tirzepatide 5mg/week"
        },
         {
            name: "Compounded Tirzepatide (7.5 mg/week)",
            price: 559.00,
            productId: "9",
            subtitle: "1 Month Supply",
            description: "Tirzepatide 7.5mg/week"
        },
         {
            name: "Compounded Tirzepatide (10 mg/week)",
            price: 559.00,
            productId: "10",
            subtitle: "1 Month Supply",
            description: "Tirzepatide 10mg/week"
        },
         {
            name: "Compounded Tirzepatide (12.5 mg/week)",
            price: 669.00,
            productId: "11",
            subtitle: "1 Month Supply",
            description: "Tirzepatide 12.5mg/week"
        },
         {
            name: "Compounded Tirzepatide (15 mg/week)",
            price: 669.00,
            productId: "12",
            subtitle: "1 Month Supply",
            description: "Tirzepatide 15mg/week"
        }
    ];

  return (
    <div>
        <HeaderBlack/>
        <ProductHero
        protocol="WEIGHT LOSS"
        productName="Compounded Semaglutide & Tirzepatide"
        tagline=""
        additionalInfo="At IgniteRx, we offer advanced medical weight loss treatments using GLP-1 (Semaglutide) and GLP-1 + GIP (Tirzepatide)—two clinically studied medications that help support healthy, sustainable weight management."
        
        medicationVariants={pricingAndVariants} 

        image={vial}
        onAddToCart={(item) => addToCart({ ...item, image: vial })}
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
                src={vial} 
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