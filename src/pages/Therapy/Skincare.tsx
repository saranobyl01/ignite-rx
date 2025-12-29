import { HeaderBlack } from '@/components/HeaderBlack'
import ProductHero from '@/components/Products/ProductHero'
import TrustBadges from '@/components/Products/TrustBadges'
import React from 'react'
import cream from "../../assets/cream.png"
import ProductDescription from '@/components/Products/ProductDescription'
import { ArrowRight, Check } from 'lucide-react'
import skincare1 from "../../assets/therapy images/skincare (1).jpg"
import skincare2 from "../../assets/therapy images/skincare (2).jpg"
import ProductFAQ from '@/components/Products/ProductFAQ'

const Skincare = () => {
      const antiAgingBenefits = [
    "Formulated with Tretinoin!",
    "Reduces Fine Lines & Wrinkles",
    "Stimulates Collagen & Elastin Production",
    "Dermatologist Tested & Formulated",
    "Results In Just A Few Weeks!"
  ];

  const darkSpotsBenefits = [
    "Reduces Hyperpigmentation",
    "Corrects Sun Damaged Skin",
    "Fights Inflammation",
    "Improves Skin Structure",
    "Dermatologist Tested & Formulated"
  ];
    const antiAgingVariants = [
    { 
      name: "NOVICE", 
      description: "TRETINOIN 0.03%, NIACINAMIDE 4%, HYALURONIC ACID 0.5%",
      productId: 23,
      price: 89
    },
    { 
      name: "INTERMEDIATE", 
      description: "TRETINOIN 0.06%, NIACINAMIDE 4%, HYALURONIC ACID 0.5%",
      productId: 143,
      price: 89
    },
    { 
      name: "PRO", 
      description: "TRETINOIN 0.089%, NIACINAMIDE 4%, HYALURONIC ACID 0.5%",
      productId: 144,
      price: 89
    }
  ];
  const darkSpotsVariants = [
    { 
      name: "NOVICE", 
      description: "HYDROQUINONE 6%, VITAMIN C 1%, NIACINAMIDE 2%",
      productId: 145,
      price: 89
    },
    { 
      name: "INTERMEDIATE", 
      description: "HYDROQUINONE 8%, TRETINOIN 0.025%, VITAMIN C 1%, NIACINAMIDE 2%",
      productId: 146,
      price: 89
    },
    { 
      name: "PRO", 
      description: "HYDROQUINONE 12%, TRETINOIN 0.05%, NIACINAMIDE 2%, HYDROCORTISONE 2.5%",
      productId: 147,
      price: 89
    }
  ];

    const faqItems = [
    {
      question: "What is Tretinoin?",
      answer: "Tretinoin is a prescription cream that belongs to a class of medications called retinoids. Tretinoin minimizes the appearance of fine lines and wrinkles by increasing the production of collagen which is a protein that provides a powerful support network for your skin. Collagen production drops by about 1% every year after you enter your 20's and this contributes to aging skin. Tretinoin also stimulates the production of new blood vessels in the skin, which improves skin color. Additional benefits include fading age spots and softening rough patches of skin. The VIP of skin care products!"
    },
    {
      question: "What is Niacinamide?",
      answer: "Niacinamide is a form of vitamin B3. It reduces inflammation and helps with the production of ceramides (which are like the bricks that build your skin barrier). Additionally, it improves the smoothness of your skin and reduces dark spots. It's a true skincare multitasker!"
    },
    {
      question: "What is Hyaluronic Acid?",
      answer: "Hyaluronic acid is a naturally occurring substance in your body that's great at retaining moisture. Think of it as a hydration superhero for your skin. When used in skincare products, it helps keep your skin plump, hydrated, and youthful by attracting and holding onto water molecules. A must for skin care!"
    },
    {
      question: "What is Hydroquinone?",
      answer: "Hydroquinone is a skin-lightening agent that helps with dark spots and hyperpigmentation. This compound works by inhibiting the production of melanin, the pigment responsible for skin color. In simpler terms, it can help lighten those pesky dark spots, sunspots, age spots, or acne scars. Works wonders!"
    },
    {
      question: "What is Hydrocortisone?",
      answer: "Hydrocortisone is a topical, mild steroid that helps reduce inflammation, swelling, redness and itching. An added boost if needed!"
    },
    {
      question: "What are the possible side effects of Tretinoin?",
      answer: "Tretinoin has a few precautions that you should be aware of. A brief sensation of warmth or stinging may occur immediately after applying the medication. Skin redness, dryness, itching, scaling or mild burning may occur during the first 2-4 weeks of using the medication. These effects usually decrease with continued use."
    },
    {
      question: "What are the possible side effects of Niacinamide?",
      answer: "Topical Niacinamide is generally well-tolerated but may cause mild burning, itching, or redness."
    },
    {
      question: "What are the possible side effects of Hyaluronic Acid?",
      answer: "Hyaluronic acid is generally well-tolerated since it is already produced in the body. Rarely, a topical allergic reaction may occur."
    },
    {
      question: "What are the possible side effects of Hydroquinone?",
      answer: "Common side effects of Hydroquinone include redness, dryness, and irritation. Hydroquinone has the risk of producing a condition called exogenous ochronosis which is a gradual blue-black darkening of the skin. This risk is more common in darker skin types, with use of Hydroquinone strengths greater than 4% and when treatment is prolonged beyond 3 months without breaks in therapy; however, this adverse effect can also develop at any time during treatment with Hydroquinone. The occurrence of any signs of blue-black darkening of the skin should prompt immediate discontinuation of therapy with Hydroquinone. Studies of Hydroquinone in animals have demonstrated some evidence of carcinogenicity, but the carcinogenic potential of Hydroquinone in humans is unknown."
    },
    {
      question: "What are the possible side effects of Hydrocortisone?",
      answer: "Topical Hydrocortisone may cause burning, itching, irritation, redness or dryness of the skin."
    }
  ];
  return (
    <div>
        <HeaderBlack/>
        <ProductHero
            protocol="TRETINOIN, NIACINAMIDE, HYALURONIC ACID"
            productName="Skincare"
            tagline="Dermatologist formulated for younger skin!"
            price="89.00"
            image={cream}
            // onAddToCart={handleAddAntiAgingToCart}
        />
        {/* Trust Badges */}
        <TrustBadges />
        <section className="py-8 md:py-12 lg:py-16 w-full max-w-full overflow-hidden bg-[#dbdbdb1a] ">
            

            <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left - Content */}
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight tracking-tight text-foreground">
                    Anti-aging (Skin)
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl text-muted-foreground">
                    Anti-aging formulation:
                    </p>
                    
                    {/* Benefits List */}
                    <ul className="space-y-3">
                    {antiAgingBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3 text-black/80">
                        <Check className="w-5 h-5 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <span className="text-base md:text-lg">{benefit}</span>
                        </li>
                    ))}
                    </ul>

                    <div className="space-y-4 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl text-muted-foreground">
                    <p>
                        Our prescription Anti-Aging cream is a custom blend of Tretinoin, Niacinamide and Hyaluronic Acid. Dermatologist formulated and clinically proven to reduce fine lines & wrinkles, increase collagen synthesis, reduce inflammation and super-hydrate your skin.
                    </p>
                    <p className="font-semibold text-black">Available in 3 strengths:</p>
                    </div>

                    {/* Strength Options */}
                    <div className="space-y-4">
                    
                    <div className="space-y-3">
                        {antiAgingVariants.map((variant, index) => (
                        
                            <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                                <p className="font-bold text-black mb-1">{variant.name}</p>
                                <p className="text-black/70 text-sm">{variant.description}</p>
                            </div>
                            
                            </div>
                        
                        ))}
                    </div>
                    <button  className="w-full lg:w-auto px-8 md:px-12 lg:px-14 py-3.5 md:py-4 bg-black text-white flex gap-3 font-medium tracking-wide text-sm md:text-base rounded-full transition-all duration-300 active:scale-95 border border-white" >
                        Get Started <ArrowRight/>
                    </button>
                    </div>
                </div>

                {/* Right - Image */}
                <div className="relative group">
                    
                    <div className="relative aspect-[3/3.8] rounded-[10px] overflow-hidden shadow-2xl ">
                    <img 
                        src={skincare1} 
                        alt="Men's Skincare"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
            {/* Dark Spots Section */}
        <section className="py-8 md:py-12 lg:py-16 w-full max-w-full overflow-hidden bg-[#dbdbdb1a]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-white/3 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative group">
                    
                    <div className="relative aspect-[3/4] rounded-[10px] overflow-hidden shadow-2xl">
                    <img 
                        src={skincare2} 
                        alt="Dark Spots Treatment"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    </div>
                </div>
                {/* Left - Content */}
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight tracking-tight text-foreground">
                    Dark spots
                    </h2>
                    
                    <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl text-muted-foreground">
                    Dark Spots formulation:
                    </p>

                    {/* Benefits List */}
                    <ul className="space-y-3">
                    {darkSpotsBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3 text-black/80">
                        <Check className="w-5 h-5 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <span className="text-base md:text-lg">{benefit}</span>
                        </li>
                    ))}
                    </ul>

                    <div className="space-y-4 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl text-muted-foreground">
                    <p>
                        Our prescription Dark Spots Formulation is a custom blend of Hydroquinone along with other key ingredients that reduces hyperpigmentation and brightens the complexion. Dermatologist formulated and clinically proven to reduce dark spots, fight inflammation and prevent the formation of excess melanin.
                    </p>
                    <p className="font-semibold text-black">Available in 3 strengths:</p>
                    </div>

                    {/* Strength Options */}
                    <div className="space-y-3">
                    {darkSpotsVariants.map((variant, index) => (
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <p className="font-bold text-black mb-1">{variant.name}</p>
                            <p className="text-black/70 text-sm">{variant.description}</p>
                          </div>
                          
                        </div>
                     
                    ))}
                  </div>
                    <button  className="w-full lg:w-auto px-8 md:px-12 lg:px-14 py-3.5 md:py-4 bg-black text-white flex gap-3 font-medium tracking-wide text-sm md:text-base rounded-full transition-all duration-300 active:scale-95  border border-white" >
                        Get Started <ArrowRight/>
                    </button>
                    </div>
                </div>

                {/* Right - Image */}
                
                </div>
            </div>
        </section>
        <ProductFAQ items={faqItems} isDark={false} />
    </div>
  )
}

export default Skincare