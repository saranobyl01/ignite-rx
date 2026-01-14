import { HeaderBlack } from '@/components/HeaderBlack'
import ProductHero from '@/components/Products/ProductHero'
import React from 'react'
import premature from "../../assets/therapy images/premature1.jpg"
import bottle from "../../assets/bottle.png"
import TrustBadges from '@/components/Products/TrustBadges'
import ProductDescription from '@/components/Products/ProductDescription'
import ProductFAQ from '@/components/Products/ProductFAQ'
import { useCart } from '@/context/CartContext'

const PrematureEjaculation = () => {
    const { addToCart } = useCart();
    const pricingPlans = [
        { name: "Sertraline 25Mg (3 Month)", duration: "3 Months", price: "90.00", label: "3 Months", id: "65" },
        { name: "Sertraline 25Mg (6 Month)", duration: "6 Months", price: "162.00", label: "6 Months", id: "66" },
        { name: "Sertraline 25Mg (12 Month)", duration: "12 Months", price: "252.00", label: "12 Months", id: "67" }
    ];
      const faqItems = [
    {
      question: "What is Sertraline?",
      answer: "Sertraline is an oral tablet, prescription medicine that is widely used to treat Premature Ejaculation (PE)."
    },
    {
      question: "How does Sertraline work?",
      answer: "Sertraline belongs to a group of drugs called selective serotonin reuptake inhibitors (SSRIs). Traditionally prescribed as an antidepressant, Sertraline is also very effective in helping men with Premature Ejaculation (PE) when taken daily in a low dose."
    },
    {
      question: "What can I expect with Sertraline treatment?",
      answer: "Taking Sertraline daily can greatly reduce PE. Researchers found that a 25mg daily dose of Sertraline lengthened the average ejaculatory interval (the time between the start of intercourse and ejaculation) from 1 minute to 7 minutes (600% increase!). You don't have to time your dose or be bothered with topical applications, just take 1 tablet daily and PE is greatly reduced for most men."
    },
    {
      question: "How to take Sertraline?",
      answer: "Taking 1 tablet daily helps most men reduce their PE issue. It may take a few weeks for the medication to reach its full effect, so be patient and continue following your doctor's instructions. Sertraline needs to be taken daily. If you skip days or doses, you may not receive the full benefit for PE."
    },
    {
      question: "What are the possible side effects of Sertraline?",
      answer: (
        <div className="space-y-3">
          <p>Sertraline is often very well tolerated, especially at the low dose used for PE. However, side effects may occur. Some of the side effects are as follows:</p>
          <ul className="space-y-2 ml-4">
            <li>• <strong>Nausea:</strong> Feeling sick or queasy, which may occur initially but often improves with continued use.</li>
            <li>• <strong>Headache:</strong> Some people may experience mild to moderate headaches.</li>
            <li>• <strong>Insomnia or drowsiness:</strong> Sertraline can affect sleep patterns, leading to either difficulty sleeping (insomnia) or increased drowsiness.</li>
            <li>• <strong>Diarrhea or constipation:</strong> Changes in bowel movements may occur in some individuals.</li>
            <li>• <strong>Dry mouth:</strong> A common side effect that can cause discomfort.</li>
            <li>• <strong>Dizziness:</strong> Feeling lightheaded or dizzy.</li>
            <li>• <strong>Agitation or restlessness:</strong> In some cases, Sertraline may lead to increased feelings of anxiety or restlessness.</li>
            <li>• <strong>Suicidal thoughts:</strong> Although rare, some individuals may experience an increase in suicidal thoughts, especially when first starting the medication. Close monitoring is essential, especially in younger individuals.</li>
          </ul>
        </div>
      )
    },
    {
      question: "How should I store Sertraline?",
      answer: "Keep this medication in the original container that you received it in, tightly closed, and out of reach of children. Store it at room temperature and away from excess heat and moisture (not in the bathroom)."
    },
    {
      question: "What should I do if I miss a dose of Sertraline?",
      answer: "If you forget to take your daily dose of Sertraline, skip the missed dose and continue your regular dosing schedule. Do not take a double dose to make up for a missed one."
    }
  ];
  return (
    <div>
        <HeaderBlack/>
        <ProductHero
        protocol="SEXUAL DYSFUNCTION"
        productName="PREMATURE EJACULATION"
        tagline="Sertraline"
        price="180.00"
        pricingPlans={pricingPlans}
        image={bottle}
        onAddToCart={(item) => addToCart({ ...item, image: bottle })}
      />
      <TrustBadges />
      <ProductDescription
        title="What is Premature Ejaculation?"
        subtitle="Premature ejaculation (PE) presents itself as a sexual dysfunction marked by the release of semen with minimal sexual stimulation. When a man reaches climax too soon during sexual activity, it usually leads to dissatisfaction for both partners involved. Seeking professional treatment can offer effective strategies to manage and improve this aspect of intimate relationships, enhancing overall satisfaction and intimacy."
        benefits={[]}
        image={premature}
        //  onGetStarted={handleAddToCart}
         imageAspectRatio="aspect-[3/2]"
      />
      <ProductFAQ items={faqItems} />
    </div>
  )
}

export default PrematureEjaculation