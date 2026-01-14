import { HeaderBlack } from '@/components/HeaderBlack';
import ProductDescription from '@/components/Products/ProductDescription';
import ProductFAQ from '@/components/Products/ProductFAQ';
import ProductHero from '@/components/Products/ProductHero';
import TrustBadges from '@/components/Products/TrustBadges';
import React from 'react'
import hairloss1 from "../../assets/therapy images/hairloss-men (1).jpg"
import hairloss2 from "../../assets/therapy images/hairloss-men (2).jpg"
import hairloss3 from "../../assets/therapy images/hairloss-men (3).jpg"
import bottle from "../../assets/bottle.png"
import { useCart } from '@/context/CartContext';

const HairlossMen = () => {
    const { addToCart } = useCart();
  const medicationVariants = [
    {
      name: "Finasteride 1mg (3 Month)",
      description: "3 month supply for $90.00",
      price: 90,
      productId: "55"
    },
    {
      name: "Finasteride 1mg (6 Month)",
      description: "6 month supply for $162.00 (10% savings)",
      price: 162,
      productId: "56"
    },
    {
      name: "Finasteride 1mg (12 Month)",
      description: "12 month supply for $252 (30% savings!)",
      price: 252,
      productId: "57"
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
    title: "FINASTERIDE 1MG TABLETS",
    description:
      "#1 Prescribed Hair Loss Medicine, FDA Approved 25+ Years, Generic Propecia",
  }
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
      answer: "Finasteride (Oral):\n• Decreased libido or erectile dysfunction (1–2%)\n• Lower ejaculate volume\n• Contraindicated in women of childbearing age (Category X)\n• Rare persistent sexual side effects\n\nFinasteride (Topical):\n• Scalp irritation, pruritus, or erythema\n• Fewer systemic effects compared to oral"
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
      question: "What should I do if I miss a dose of Finasteride?",
      answer: "If you forget to take your daily dose of Finasteride, skip the missed dose and continue your regular dosing schedule. Do not take a double dose to make up for a missed one."
    },
    {
      question: "How should I store Finasteride?",
      answer: "Keep this medication in the original container that you received it in, tightly closed, and out of reach of children. Store it at room temperature and away from excess heat and moisture (not in the bathroom)."
    }
  ];
  return (
    <div>
        <HeaderBlack/>
        <ProductHero
        protocol="HAIR RESTORATION"
        productName="Men's Hair Loss"
        tagline="Finasteride"
      
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
        <ProductDescription
                title="What is Hair Loss?"
                subtitle="The primary cause of male-pattern baldness is believed to be genetic and related to hormones, specifically the hormone dihydrotestosterone (DHT). In individuals with a genetic predisposition to this condition, hair follicles in certain areas of the scalp become sensitive to the effects of DHT. Over time, exposure to DHT causes these follicles to shrink and produce thinner and shorter hair until they eventually stop producing hair altogether."
                benefits={benefits1}
                image={hairloss2}
                // onGetStarted={handleAddToCart}
                imageAspectRatio="aspect-[3/3]"
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

export default HairlossMen