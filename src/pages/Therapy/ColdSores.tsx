import { HeaderBlack } from '@/components/HeaderBlack'
import ProductHero from '@/components/Products/ProductHero'
import React from 'react'
import bottle from "../../assets/bottle.png"
import ProductDescription from '@/components/Products/ProductDescription'
import TrustBadges from '@/components/Products/TrustBadges'
import coldsores from "../../assets/therapy images/cold-sores.jpg"
import ProductFAQ from '@/components/Products/ProductFAQ'

import { useCart } from '@/context/CartContext';

const ColdSores = () => {
  const { addToCart } = useCart();
  const pricingPlans = [
    {
      name: "Valacyclovir 1g, Quantity 24",
      duration: "1 gram, 24 Day Supply",
      price: "60.00",
      id: "64"
    }
  ];

  return (
    <div>
        <HeaderBlack/>
        <ProductHero
            protocol="DERMATOLOGY"
            productName="Valacyclovir"
            tagline="Experience comfort with Valacyclovir's gentle approach to cold sore treatment"
            pricingPlans={pricingPlans}
            image={bottle}
            onAddToCart={(item) => addToCart({
                name: item.name,
                price: item.price,
                image: bottle,
                id: item.id
            })}
        />
        <TrustBadges  />

      {/* Main Description Section */}
        <ProductDescription
            title="What are Cold Sores?"
            subtitle="Cold sores are a common viral infection caused by herpes simplex virus type 1 (HSV-1), and herpes simplex virus type 2 (HSV-2). They present as tiny, fluid-filled blisters on and around your lips. After the blisters break, their scab can last several days. Cold sores spread from person to person by close contact. There's no cure for cold sores, but treatment can help sores heal more quickly and they may reduce the frequency, length and severity of future outbreaks."
            benefits={[]}
            image={coldsores}
            // onGetStarted={handleAddToCart}
            imageAspectRatio="aspect-[3/2]"
        />
        <ProductFAQ 
        items={[
          {
            question: "What is Valacyclovir?",
            answer: "Valacyclovir is an oral tablet, prescription medicine that is FDA approved to treat cold sores and genital herpes."
          },
          {
            question: "How does Valacyclovir work?",
            answer: "Valacyclovir is an antiviral medication that is used to treat certain viral infections, primarily caused by herpes viruses. Valacyclovir works by inhibiting the replication of herpes viruses. It does this by interfering with the viral DNA synthesis process. By inhibiting viral DNA synthesis, Valacyclovir helps to reduce the spread of the virus and control the infection. It is most commonly used to treat genital herpes and cold sores (oral herpes). It's essential to note that while Valacyclovir can help manage herpes virus infections, it does not cure the infection completely. The virus remains in the body, and outbreaks may still occur, especially during times of weakened immunity or stress."
          },
          {
            question: "What can I expect with Valacyclovir treatment?",
            answer: "Valacyclovir is effective in reducing the frequency and severity of herpes outbreaks. For people with recurrent herpes infections, taking Valacyclovir regularly can help suppress the virus and decrease the number of outbreaks experienced. When taken during an active herpes outbreak, Valacyclovir can help speed up the healing process and reduce the duration of symptoms like pain, itching, and blisters. Valacyclovir can reduce the risk of transmitting herpes to sexual partners when taken as a daily suppressive therapy. However, it's essential to use additional precautions such as condoms, as the risk of transmission is not completely eliminated. The duration of Valacyclovir treatment will vary depending on the reason for use. For acute outbreaks, treatment is usually for a few days. For suppressive therapy, it may be taken daily for an extended period under the guidance of a healthcare professional."
          },
          {
            question: "How to take Valacyclovir?",
            answer: "Valacyclovir works best if it is used within 48 hours after the first symptoms of genital herpes (pain, burning, or blisters) begin to appear. For recurrent outbreaks of genital herpes, Valacyclovir works best if it is used within 24 hours after the symptoms begin to appear. For these recurrent outbreaks, taking Valacyclovir daily instead of just during an outbreak, will greatly reduce the number of total outbreaks per year."
          },
          {
            question: "What are the possible side effects of Valacyclovir?",
            answer: (
              <div className="space-y-4">
                <p>Valacyclovir works very well for the treatment of cold sores and genital herpes. Like most medications, Valacyclovir may cause side effects in some individuals.</p>
                <p className="font-medium">Common side effects include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Nausea and vomiting</li>
                  <li>Headache</li>
                  <li>Dizziness</li>
                  <li>Abdominal pain</li>
                  <li>Diarrhea</li>
                  <li>Skin rash</li>
                  <li>Fatigue or weakness</li>
                </ul>
                <p>Most of these side effects are generally mild and go away on their own without any specific treatment. However, if any of these side effects persist or become bothersome, it's essential to inform your healthcare provider.</p>
                <p>In rare cases, Valacyclovir can cause more serious side effects that require immediate medical attention. If you experience any of the following severe side effects, seek medical help right away:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Allergic reactions:</strong> Signs may include rash, itching, swelling of the face, lips, tongue, or throat, severe dizziness, and difficulty breathing.</li>
                  <li><strong>Unusual bruising or bleeding:</strong> Valacyclovir can affect the blood's clotting ability in some cases.</li>
                  <li><strong>Kidney problems:</strong> Symptoms may include change in the amount of urine, back/side pain, or signs of dehydration.</li>
                  <li><strong>Neurological symptoms:</strong> Rarely, some people may experience confusion, hallucinations, tremors, or seizures.</li>
                </ul>
                <p>It's essential to take Valacyclovir as prescribed by your doctor and inform them about any other medications or supplements you are taking to avoid potential drug interactions. If you have a history of kidney problems or immune system issues, let your healthcare provider know, as they may need to adjust the dosage or monitor your condition more closely.</p>
              </div>
            )
          },
          {
            question: "What should I do if I miss a dose of Valacyclovir?",
            answer: "If you are taking Valacyclovir for an outbreak and you miss a dose, you may need to start your therapy over again. Consult with your healthcare provider or pharmacist. If taking Valacyclovir for suppressive therapy and you miss a daily dose, take your dose as soon as you remember if it is same-day. If you completely missed a daily dose, go back to your normal dosing schedule the next day. Do not double up on the next day's dose."
          },
          {
            question: "How should I store Valacyclovir?",
            answer: "Keep this medication in the original container that you received it in, tightly closed, and out of reach of children. Store it at room temperature and away from excess heat and moisture (not in the bathroom)."
          }
        ]}
      />
    </div>
  )
}

export default ColdSores