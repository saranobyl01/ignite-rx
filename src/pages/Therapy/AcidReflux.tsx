import { HeaderBlack } from '@/components/HeaderBlack';
import ProductHero from '@/components/Products/ProductHero'
import { useToast } from '@/hooks/use-toast';
import React from 'react'
import { useCart } from '@/context/CartContext';
import bottle from "../../assets/bottle.png"
import TrustBadges from '@/components/Products/TrustBadges';
import { ArrowRight } from 'lucide-react';
import acidrefluximage from "../../assets/therapy images/acid-reflux.jpg"
import ProductFAQ from '@/components/Products/ProductFAQ';

const AcidReflux = () => {
    const { addToCart } = useCart();
    const { toast } = useToast();

  const pricingPlans = [
    {
      name: "Omeprazole 40mg",
      duration: "90 Quantity (Refills 3)",
      price: "30.00",
      id: "89"
    }
  ];

  return (
    <div>
        <HeaderBlack/>
        <ProductHero
        protocol="DIGESTIVE HEALTH"
        productName="Omeprazole"
        tagline="Combat acid reflux effectively with Omeprazole's proven formula"
        pricingPlans={pricingPlans}
        image={bottle}
        onAddToCart={(item) => addToCart({
            name: item.name,
            price: item.price,
            image: bottle,
            id: item.id
        })}
        />
        <TrustBadges isDark={false} />
        <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight tracking-tight text-foreground">
                About Acid Reflux
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg">
                <p>
                  Acid reflux occurs when stomach acid frequently flows back into the tube connecting your mouth and stomach (esophagus).
                </p>
                <p>
                  This backwash (acid reflux) can irritate the lining of your esophagus. Many people experience acid reflux from time to time. Acid reflux happens to nearly everyone at some point in their life. Having acid reflux and heartburn now and then is totally normal but if you have acid reflux (heartburn) more than twice a week, you may need daily medications to manage your condition.
                </p>
              </div>
              <button  className={`max-w-max lg:w-auto px-8 md:px-12 lg:px-14 py-3.5 md:py-4 font-medium tracking-wide text-sm md:text-base rounded-full flex gap-2 shadow-lg transition-all duration-300 active:scale-95 bg-black text-white  shadow-white/20 hover:shadow-xl hover:shadow-white/30 bg-[black] text-white shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 `}>
                  Get Started <ArrowRight/>
                </button>
            </div>
            <div>
              <img 
                src={acidrefluximage} 
                alt="Acid Reflux treatment" 
                className="w-full h-auto rounded-lg shadow-lg ransition-transform duration-700 hover:scale-105"
              />
            </div>
            
          </div>
        </div>
      </section>
      <ProductFAQ
      items={[
          {
            question: "What is Omeprazole?",
            answer: "Omeprazole is an oral capsule, prescription medication that is FDA approved to treat conditions with excess stomach acid including Gastroesophageal Reflux Disease (GERD)."
          },
          {
            question: "How does Omeprazole work?",
            answer: "Omeprazole belongs to a group of drugs called proton-pump inhibitors, which work by reducing the amount of acid made in the stomach. It relieves symptoms such as heartburn, difficulty swallowing and persistent cough. When taken on a daily basis, acid reflux symptoms are greatly reduced without the need to time doses which is true with antacids and most over the counter treatments."
          },
          {
            question: "What can I expect with Omeprazole treatment?",
            answer: "Omeprazole takes about 1 hour to block the production of stomach acid and its maximal effect occurs around 2 hours after beginning therapy. The action of omeprazole can continue for about 3 days. Omeprazole must continue to be taken on a daily basis for the stomach acid to remain low. If Omeprazole is only taken on an \"as needed\" basis, you will most likely experience breakthrough acid reflux."
          },
          {
            question: "How to take Omeprazole?",
            answer: "Omeprazole is usually taken once per day, with or without food. Omeprazole is commonly available in capsule form. Swallow the capsule whole with a glass of water. Don't crush or chew the capsule. Omeprazole needs to be taken constantly each day to suppress stomach acid."
          },
          {
            question: "What are the possible side effects of Omeprazole?",
            answer: (
              <div className="space-y-3">
                <p>The side effects of Omeprazole are generally mild but side effects may occur:</p>
                <ul className="space-y-2 ml-4">
                  <li><strong>Digestive System:</strong> Nausea, vomiting, diarrhea and abdominal pain</li>
                  <li><strong>Central Nervous System:</strong> Headaches or dizziness</li>
                  <li><strong>Nutrient Absorption:</strong> Prolonged use may interfere with the absorption of certain nutrients, like magnesium, calcium and vitamin B12.</li>
                </ul>
              </div>
            )
          },
          {
            question: "What should I do if I miss a dose of Omeprazole?",
            answer: "If you forget to take your daily dose of Omeprazole, skip the missed dose and continue your regular dosing schedule. Do not take a double dose to make up for a missed one."
          }
        ]}
      />
    </div>
  )
}

export default AcidReflux