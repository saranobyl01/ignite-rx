import { Button } from "@/components/ui/button";
import { ShieldCheck, Truck, Stethoscope } from "lucide-react";
import { useState } from "react";

interface PricingPlan {
  months?: number;
  duration?: string;
  price?: string;
  prices?: Record<string, number>;
  totalPrice?: string;
  label?: string;
  selectedVariant?: MedicationVariant;
  selectedMedication?: string;
  id?: string;
}

interface MedicationVariant {
  name: string;
  subtitle?: string;
  dose?: string;
  description?: string;
  features?: string[];
  price?: number;
  productId?: string;
}

interface ProductHeroProps {
  protocol: string;
  productName: string;
  tagline: string;
  additionalInfo?: string;
  price?: string;
  pricingPlans?: PricingPlan[];
  medicationVariants?: MedicationVariant[];
  image: string;
  onAddToCart: (item: { name: string; price: string; category: string; id?: string }) => void;
}

const ProductHero = ({
  protocol,
  productName,
  tagline,
  additionalInfo,
  price,
  pricingPlans,
  medicationVariants,
  image,
  onAddToCart
}: ProductHeroProps) => {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [selectedMedicationIndex, setSelectedMedicationIndex] = useState(0);

  const hasMultiplePlans = pricingPlans && pricingPlans.length > 0;
  const hasMedicationVariants = medicationVariants && medicationVariants.length > 0;

  const getCurrentPrice = () => {
    if (hasMedicationVariants && medicationVariants[selectedMedicationIndex]?.price) {
      return medicationVariants[selectedMedicationIndex].price.toString();
    }

    if (!hasMultiplePlans) return price || "0";

    const plan = pricingPlans[selectedPlanIndex];
    if (plan.prices && hasMedicationVariants) {
      const selectedMed = medicationVariants[selectedMedicationIndex];
      return plan.prices[selectedMed.name]?.toString() || price || "0";
    }

    return plan.price || price || "0";
  };

  const currentPrice = getCurrentPrice();

  return (
    <section className="relative py-4 md:py-8 lg:py-12 overflow-hidden w-full max-w-full mt-[64px] bg-white md:pb-0">
      {/* Decorative background */}
      

      <div className="container mx-auto px-2 md:px-4 relative z-10">
        <div className="max-w-7xl mx-auto  p-4 md:p-[2rem] bg-white">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 items-center">

            {/* Image */}
            <div className="relative group w-full max-w-md mx-auto lg:max-w-none h-full">
              <div className="absolute -inset-2 md:-inset-4 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative h-full rounded-[10px] overflow-hidden flex items-center justify-center ">
                <img
                  src={image}
                  alt={`${productName} - ${protocol}`}
                  className="w-full h-auto max-h-[375px] object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content */}
            <div className="bg-[#DBDBDB] h-full p-6 rounded-[10px] w-full">
              <div className="space-y-5 h-full flex flex-col justify-between">

                <div className="space-y-5">
                  <span className="text-xs font-semibold tracking-wider uppercase text-primary">
                    {protocol}
                  </span>

                  <h1 className="text-2xl font-bold">{productName}</h1>
                  <p className="text-sm text-black">{tagline}</p>
                  {additionalInfo && <p className="text-sm text-muted-foreground/80">{additionalInfo}</p>}

                  {/* Medication variants */}
                  {hasMedicationVariants && (
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground/70">Select Medication:</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {medicationVariants.map((variant, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedMedicationIndex(index)}
                            className={`px-4 py-3 rounded-lg text-sm transition-all w-full ${
                              selectedMedicationIndex === index
                                ? "bg-black text-white border-2 border-primary"
                                : "bg-secondary border border-border hover:bg-secondary/80"
                            }`}
                          >
                            <div className="text-center">
                              <div className="font-medium">{variant.name}</div>
                              {variant.dose && <div className="text-xs">{variant.dose}</div>}
                              {(variant.subtitle || variant.description) && (
                                <div className="text-xs text-muted-foreground">
                                  {variant.subtitle || variant.description}
                                </div>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {hasMultiplePlans && (
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground/70">
                        Select Plan:
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {pricingPlans.map((plan, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedPlanIndex(index)}
                            className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                              selectedPlanIndex === index
                                ? "bg-black text-white border-2 border-primary"
                                : "bg-secondary border border-border hover:bg-secondary/80"
                            }`}
                          >
                            {plan.duration}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}



                  {/* Price */}
                  <div className="rounded-xl p-4 bg-white border border-border text-center">
                    <span className="text-4xl font-bold">${currentPrice}</span>
                    <p className="text-xs uppercase text-black">per month</p>
                  </div>

                  {/* CTA */}
                  <Button
                    onClick={() => {
                        let finalName = productName;
                        if (hasMedicationVariants) { 
                             finalName = `${medicationVariants[selectedMedicationIndex].name}`;
                        } else if (hasMultiplePlans) {
                             finalName = `${productName} (${pricingPlans[selectedPlanIndex].duration})`;
                        }
                        
                        onAddToCart({
                            name: finalName,
                            price: `$${currentPrice}`,
                            category: protocol,
                            id: hasMedicationVariants 
                                ? medicationVariants[selectedMedicationIndex].productId 
                                : (hasMultiplePlans ? pricingPlans[selectedPlanIndex].id : undefined)
                        });
                    }}
                    className="w-full py-6 text-lg font-semibold rounded-xl bg-black text-white"
                  >
                    ADD TO CART
                  </Button>
                </div>

                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-3 pt-3">
                  {[ShieldCheck, Stethoscope, Truck].map((Icon, i) => (
                    <div key={i} className="flex flex-col items-center p-3 bg-[#F2F2F2] rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="text-[10px] font-semibold">Trusted</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
