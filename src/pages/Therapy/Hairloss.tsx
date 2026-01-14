import { HeaderBlack } from '@/components/HeaderBlack'
import ProductHero from '@/components/Products/ProductHero'
import TrustBadges from '@/components/Products/TrustBadges'
import React from 'react'
import bottle from "../../assets/bottle.png"
import ProductDescription from '@/components/Products/ProductDescription'
import hairloss1 from "../../assets/therapy images/hairloss1.jpg"
import hairloss2 from "../../assets/therapy images/hairloss2.jpg"
import hairloss3 from "../../assets/therapy images/hairloss3.jpg"
import ProductFAQ from '@/components/Products/ProductFAQ'
import { useCart } from '@/context/CartContext';

const Hairloss = () => {
    const { addToCart } = useCart();

      const medicationVariants = [
    {
      name: "Minoxidil 1mg / Spironolactone 60mg",
      description: "90 Day Supply",
      price: 79,
      productId: "58"
    },
    {
      name: "Minoxidil 1mg / Finasteride 1.25mg",
      description: "90 Day Supply",
      price: 79,
      productId: "59"
    },
    {
      name: "Finasteride 0.1% / Minoxidil 6%",
      description: "90 Day Supply",
      price: 79,
      productId: "60"
    }
  ];
    const benefits1 = [
    "Dermatologist Approved",
    "Solutions for Women of All Ages.",
    "Clinically Proven Medications",
    "Treats Hair Loss & Thinning",
    "Results in 3-6 Months"
  ];

      const benefits2 = [
  {
    title: "MINOXIDIL 1MG / SPIRONOLACTONE 60MG CAPSULES",
    description:
      "Hair Loss For Women of Any Age , Custom Compounded Blend, Dermatologist Formulated",
  },
  {
    title: "MINOXIDIL 1MG / FINASTERIDE 1.25MG CAPSULES",
    description:
      "Post-Menopausal Women Only, Custom Compounded Blend, Dermatologist Formulated",
  },
  {
    title: "FINASTERIDE 0.1% / MINOXIDIL 6% TOPICAL SOLUTION",
    description:
      "Safe for Post-Menopausal Women, Custom Topical Application, Dermatologist Formulated",
  },


];

  const benefits3 = [
    "Slows or halts hair loss progression",
    "Stimulates regrowth of dormant or miniaturized follicles",
    "Thickens hair and restores scalp density",
    " Suitable for both male and female patients",
    " Daily use produces visible results in 3–6 months",
    "Options for oral or topical application depending on sensitivity and goals"
  ];

    const faqItems = [
    {
      question: "How does it work?",
      answer: "These medications address the root causes of hair loss through complementary mechanisms:\n\n1. DHT Blockade (Finasteride & Spironolactone)\n• Finasteride inhibits 5-alpha reductase, blocking testosterone from converting into DHT (dihydrotestosterone), which causes follicle miniaturization.\n• Spironolactone works as an anti-androgen, lowering androgen receptor activity and reducing scalp DHT sensitivity—especially beneficial in women with hormonal hair loss.\n\n2. Follicular Blood Flow (Minoxidil)\n• Minoxidil dilates scalp blood vessels, increasing oxygen and nutrient supply to hair follicles. This boosts follicle activity, thickens hair shafts, and encourages regrowth.\n\n3. Custom Compounded Therapy\n• Combining these medications in customized oral or topical blends enhances effectiveness while minimizing systemic side effects. Formulations are dermatologist-designed for men and women."
    },
    {
      question: "What are the side effects and precautions?",
      answer: "Finasteride (Oral):\n• Decreased libido or erectile dysfunction (1–2%)\n• Lower ejaculate volume\n• Contraindicated in women of childbearing age (Category X)\n• Rare persistent sexual side effects\n\nFinasteride (Topical):\n• Scalp irritation, pruritus, or erythema\n• Fewer systemic effects compared to oral\n\nMinoxidil (Oral):\n• Fluid retention or ankle swelling\n• Elevated heart rate\n• Hypertrichosis (unwanted body/facial hair)\n• Rare: pericardial effusion, chest pain\n\nMinoxidil (Topical):\n• Scalp dryness or burning\n• Eczema, dermatitis, or redness\n\nSpironolactone (Oral):\n• Elevated potassium (hyperkalemia)\n• Dizziness, dehydration, or lightheadedness\n• Menstrual irregularities\n• Breast tenderness or GI symptoms\n• Generally well tolerated in monitored doses"
    },
    {
      question: "What to expect?",
      answer: "• Initial shedding may occur in the first 4–6 weeks\n• Visible improvements begin around 3–4 months\n• Most patients see significant improvement at 6–9 months\n• Full regrowth potential is typically seen at 12 months\n• Daily adherence is essential—missed doses reduce efficacy\n• Discontinuation can reverse results in 3–6 months"
    },
    {
      question: "What is Finasteride?",
      answer: "Finasteride 1mg is an oral tablet, prescription medicine that is FDA approved to treat male pattern baldness. At a higher strength of 5mg, Finasteride is FDA approved to treat BPH (Benign prostatic hyperplasia)."
    },
    {
      question: "How does Finasteride work?",
      answer: "Finasteride belongs to a group of drugs called 5-alpha reductase inhibitors. It works by blocking the conversion of Testosterone to DHT by up to 70% and therefore lowers DHT levels in the body and at the scalp. Lowering DHT will allow your hair to start the process of growing back."
    },
    {
      question: "What can I expect from Finasteride treatment?",
      answer: "Results will begin appearing after 3-4 months but significant results may not be apparent for 6-9 months after starting the medication. Full results are usually seen approximately 1 year after starting treatment with Finasteride and using the medication on a daily basis. Patients who skip treatment days, weeks, or months may find that the medication does not work as effectively and does not produce the results they were expecting."
    },
    {
      question: "How to take Finasteride?",
      answer: "Finasteride comes as a tablet to take by mouth. It is usually taken once a day with or without food. Take Finasteride at around the same time every day. Follow the directions on your prescription label carefully. Take Finasteride exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor."
    },
    {
      question: "What are the possible side effects of Finasteride?",
      answer: "Finasteride is a medication primarily used to treat male pattern hair loss (androgenic alopecia) and enlarged prostate (benign prostatic hyperplasia). Like any medication, it can have potential side effects. The most common side effects of Finasteride include:\n\nSexual side effects: This is the most well-known side effect of Finasteride. It may include decreased libido (sex drive), erectile dysfunction, and decreased ejaculate volume. In some cases, these side effects may persist even after discontinuing the medication.\n\nBreast enlargement and tenderness: Some men may experience breast enlargement and tenderness, a condition known as gynecomastia.\n\nAllergic reactions: Rarely, some individuals may experience allergic reactions to Finasteride, which may manifest as rash, itching, swelling, dizziness, or difficulty breathing.\n\nIt's important to note that not everyone experiences these side effects, and most people tolerate Finasteride well. If you are prescribed Finasteride, your healthcare provider will monitor your progress and discuss any potential side effects with you. If you notice any troubling side effects while taking Finasteride, it is crucial to discuss them with your doctor as soon as possible."
    },
    {
      question: "What are the possible side effects of Topical Finasteride?",
      answer: "It is important that women of child-bearing age do not take or handle Finasteride as it may cause birth defects. The most common side effects of Topical Finasteride typically occur on the scalp and may include:\n\n• Scalp Pruritus\n• Burning Sensation\n• Irritation\n• Contact Dermatitis\n• Erythema (redness on the skin)"
    },
    {
      question: "What should I do if I miss a dose of Finasteride?",
      answer: "If you forget to take your daily dose of Finasteride, skip the missed dose and continue your regular dosing schedule. Do not take a double dose to make up for a missed one."
    },
    {
      question: "How should I store Finasteride?",
      answer: "Keep this medication in the original container that you received it in, tightly closed, and out of reach of children. Store it at room temperature and away from excess heat and moisture (not in the bathroom)."
    },
    {
      question: "What is Minoxidil?",
      answer: "Minoxidil is a prescription medication used to stimulate hair growth. Minoxidil widens blood vessels which leads to increased blood flow to hair follicles. This improved blood flow, in turn, enhances the follicles' function and stimulates hair growth in individuals experiencing hair loss."
    },
    {
      question: "What are the possible side effects of Oral Minoxidil?",
      answer: "Side effects are uncommon at the low doses used to treat hair loss. However, as with all prescription medications, side effects can occur:\n\nFluid Retention: Oral minoxidil can lead to fluid retention, causing swelling in the ankles and other parts of the body.\n\nIncreased Heart Rate: It may cause an increase in heart rate, which can be problematic for individuals with certain cardiovascular conditions.\n\nHypertrichosis (Excessive Hair Growth): One interesting side effect is increased hair growth. While this is a desired effect when using Minoxidil for hair loss, this hair growth can appear on other parts of the body.\n\nPericardial Effusion: There have been reports of oral minoxidil causing fluid accumulation around the heart (pericardial effusion).\n\nElectrolyte Imbalance: It can lead to electrolyte imbalances in the body.\n\nChest Pain: Some individuals may experience chest pain or discomfort."
    }
  ];
  return (
    <div>
        <HeaderBlack/>
        <ProductHero
        protocol="HAIR RESTORATION"
        productName="Women's Hair Loss"
        tagline="Finasteride / Minoxidil"
      
        medicationVariants={medicationVariants.map(variant => ({
          name: variant.name,
          description: variant.description,
          features: [],
          price: variant.price,
          productId: variant.productId
        }))}
        pricingPlans={[]}
        image={bottle}
        onAddToCart={(item) => addToCart({ ...item, image: bottle })}
      />
         <TrustBadges  />
         {/* <section className="py-12 bg-gradient-to-br from-background via-secondary to-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground text-center">
                    Select Your Treatment Option
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {medicationVariants.map((variant, index) => (
                        <div
                        key={index}
                        className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all flex flex-col shadow-sm hover:shadow-md"
                        >
                        <h3 className="font-bold text-lg text-foreground mb-2">
                            {variant.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 flex-grow">
                            {variant.description}
                        </p>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-2xl font-bold text-foreground">${variant.price}</span>
                        </div>
                        <button
                            onClick={() => handleAddToCart({ selectedVariant: variant })}
                            className="w-full py-2.5 bg-black  text-white font-semibold rounded-full hover:bg-primary/90 transition-all active:scale-95"
                        >
                            Add to Cart
                        </button>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section> */}
        <ProductDescription
                title="Hair Loss Treatments for Women!"
                subtitle="Are you experiencing hair loss or thinning? Get started today with our custom, compounded blend of Minoxidil/Spironolactone or Finasteride/Minoxidil (Post-Menopausal women only). Both clinically proven to help stop hair loss and regrow hair! Start our easy online process, answer a few questions then choose the best products to fit your specific needs and lifestyle."
                benefits={benefits1}
                image={hairloss2}
                // onGetStarted={handleAddToCart}
                imageAspectRatio="aspect-[3/3.2]"
        />
        <ProductDescription
                title="Medications we offer"
                subtitle=""
                benefits={benefits2}
                image={hairloss1}
                // onGetStarted={handleAddToCart}
                imageAspectRatio="aspect-[3/2]"
                imagePosition="left"
        />
        <ProductDescription
                title="Benefits:"
                subtitle=""
                benefits={benefits3}
                image={hairloss3}
                // onGetStarted={handleAddToCart}
                imageAspectRatio="aspect-[3/2.3]"
       
        />
        <ProductFAQ
            items={faqItems}
        />
    </div>
  )
}

export default Hairloss