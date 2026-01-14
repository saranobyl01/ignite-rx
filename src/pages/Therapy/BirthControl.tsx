import { HeaderBlack } from '@/components/HeaderBlack'
import ProductHero from '@/components/Products/ProductHero'
import React from 'react'
import { useCart } from '@/context/CartContext'
import bottle from "../../assets/bottle.png"
import TrustBadges from '@/components/Products/TrustBadges'
import ProductDescription from '@/components/Products/ProductDescription'
import birthcontrol from "../../assets/therapy images/birth-control.jpg"
import ProductFAQ from '@/components/Products/ProductFAQ'

const BirthControl = () => {
  const { addToCart } = useCart();

      const faqItems = [
    {
      question: "What are oral contraceptives?",
      answer: (
        <div className="space-y-3">
          <p>Oral contraceptives, commonly referred to as birth control pills, are prescription medicines that are FDA approved to prevent pregnancies.</p>
        </div>
      )
    },
    {
      question: "How do oral contraceptives work?",
      answer: (
        <div className="space-y-4">
          <p>They work by introducing synthetic hormones into the body to mimic the natural hormones involved in the menstrual cycle. There are two main types of oral contraceptives: combination pills and progestin-only pills.</p>
          
          <div>
            <p className="font-semibold mb-2">Combination Pills:</p>
            <p className="mb-2">Combination pills contain two types of hormones: estrogen and progestin. The two main ways combination pills work are:</p>
            <div className="ml-4 space-y-2">
              <p><span className="font-semibold">a. Inhibition of Ovulation:</span> The hormones in the combination pill prevent the release of an egg (ovulation) from the ovaries. Without a released egg, there is no egg available for fertilization by sperm, reducing the chances of pregnancy.</p>
              <p><span className="font-semibold">b. Thinning of Uterine Lining:</span> The hormones also cause the uterine lining to become thinner. This makes it less likely for a fertilized egg to implant and grow in the uterus.</p>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-2">Progestin-Only Pills:</p>
            <p className="mb-2">Progestin-only pills (also called mini-pills) contain only progestin, without any estrogen. These pills primarily work by:</p>
            <div className="ml-4 space-y-2">
              <p><span className="font-semibold">a. Thickening Cervical Mucus:</span> Progestin thickens the cervical mucus, making it difficult for sperm to reach and fertilize an egg.</p>
              <p><span className="font-semibold">b. Inhibition of Ovulation:</span> Like combination pills, progestin-only pills can also inhibit ovulation, although they may not do so consistently in every cycle.</p>
            </div>
          </div>

          <p>It's important to note that oral contraceptives are most effective when taken consistently and correctly. It's typically recommended to take them at the same time each day to maintain their effectiveness. While oral contraceptives are highly effective, they do not protect against sexually transmitted infections (STIs). Therefore, using condoms or other barrier methods in addition to oral contraceptives is advisable if you want to protect against both pregnancy and STIs.</p>
        </div>
      )
    },
    {
      question: "What can I expect from oral contraceptive treatment?",
      answer: (
        <div className="space-y-4">
          <p>Oral contraceptives are a popular and effective method of preventing pregnancy. Here's what you can generally expect when using oral contraceptives:</p>
          
          <div>
            <p className="font-semibold mb-2">Hormonal regulation:</p>
            <p>Birth control pills contain hormones (usually a combination of estrogen and progestin or progestin alone) that mimic the hormones naturally produced in your body. These hormones work together to prevent ovulation, which means that an egg is not released from the ovaries during your menstrual cycle.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Pregnancy prevention:</p>
            <p>When taken correctly and consistently, birth control pills are highly effective in preventing pregnancy. However, no contraceptive method is 100% foolproof, so there is still a small chance of pregnancy (typically less than 1% with perfect use).</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Menstrual cycle changes:</p>
            <p>Birth control pills can regulate your menstrual cycle and make your periods more predictable. Some people may experience lighter periods, while others may have shorter or more regular cycles.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Reduced menstrual cramps and PMS:</p>
            <p>Many individuals find that birth control pills help alleviate menstrual cramps and reduce premenstrual syndrome (PMS) symptoms like bloating, mood swings, and breast tenderness.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Acne improvement:</p>
            <p>Some types of birth control pills are prescribed to improve acne in certain individuals, as the hormones can help regulate oil production in the skin.</p>
          </div>
        </div>
      )
    },
    {
      question: "How to take oral contraceptives?",
      answer: (
        <div className="space-y-3">
          <p>Oral contraceptives are most effective when taken at the same time every day. Pick a time that is convenient for you, such as in the morning or evening, and stick to it.</p>
          <p>If you are starting the pill for the first time, begin taking the first pill on the first day of your period. If you are switching from another birth control method or have been off the pill for more than a month, follow your healthcare provider's instructions.</p>
          <p>Birth control pills are typically packaged in 28-day cycles, with 21 active pills containing hormones and 7 inactive pills (placebos). Take one active pill each day for 21 days, followed by one inactive pill daily for the next 7 days. You can also choose a 21-day pack and skip the inactive pills if you prefer to have fewer periods.</p>
          <p>Set a reminder or an alarm on your phone to help you remember to take the pill at the same time every day. Consistency is crucial for the pill's effectiveness.</p>
          <p>If you miss one active pill, take it as soon as you remember, even if it means taking two pills in one day. If you miss two or more pills, follow the specific instructions on the pill pack or consult your healthcare provider.</p>
          <p>If you miss active pills and have had unprotected sex in the past five days, consider using backup contraception (e.g., condoms) until you have taken seven active pills in a row.</p>
        </div>
      )
    },
    {
      question: "What are the possible side effects of oral contraceptives?",
      answer: (
        <div className="space-y-4">
          <p>Oral contraceptives are very effective at preventing pregnancies along with other benefits for certain conditions. Like most medications, side effects are possible. Here are a few to consider:</p>
          
          <ul className="space-y-2 ml-4">
            <li><span className="font-semibold">Nausea:</span> Some individuals may experience nausea, especially when starting a new pill or changing the dosage.</li>
            <li><span className="font-semibold">Breast tenderness:</span> Some people may experience increased breast tenderness or swelling.</li>
            <li><span className="font-semibold">Headaches:</span> Headaches, including migraines, can occur as a side effect of hormonal changes.</li>
            <li><span className="font-semibold">Mood changes:</span> Some people may notice changes in their mood, such as mood swings or increased irritability.</li>
            <li><span className="font-semibold">Weight changes:</span> While some individuals may experience slight weight gain, others may experience weight loss or no change at all.</li>
            <li><span className="font-semibold">Spotting or breakthrough bleeding:</span> Some individuals may experience irregular bleeding or spotting between periods, especially during the first few months of starting the pill.</li>
            <li><span className="font-semibold">Changes in menstrual flow:</span> Periods may become lighter, heavier, or more irregular for some individuals.</li>
            <li><span className="font-semibold">Decreased libido:</span> Some people may experience a decrease in sex drive while taking birth control pills.</li>
            <li><span className="font-semibold">Vaginal discharge:</span> Changes in vaginal discharge or dryness can occur in some individuals.</li>
            <li><span className="font-semibold">Increased risk of blood clots:</span> There is a small increase in the risk of blood clots in individuals taking combination pills (those containing estrogen and progestin).</li>
            <li><span className="font-semibold">Changes in vision:</span> Some individuals may experience mild changes in their vision.</li>
          </ul>

          <p className="mt-3">It's important to note that these side effects are generally mild and tend to improve after a few months as the body adjusts to the hormonal changes. However, if you experience severe or persistent side effects, you should contact your healthcare provider to discuss alternative contraceptive options or adjust your current pill regimen.</p>
        </div>
      )
    },
    {
      question: "What should I do if I miss a dose of my oral contraceptive?",
      answer: (
        <div className="space-y-3">
          <p>If you miss one active pill, take it as soon as you remember, even if it means taking two pills in one day. If you miss two or more pills, follow the specific instructions on the pill pack or consult your healthcare provider.</p>
          <p>If you miss active pills and have had unprotected sex in the past five days, consider using backup contraception (e.g., condoms) until you have taken seven active pills in a row.</p>
        </div>
      )
    },
    {
      question: "How should I store oral contraceptives?",
      answer: (
        <div className="space-y-3">
          <p>Keep this medication in the original package that you received it in and out of reach of children. Store it at room temperature and away from excess heat and moisture (not in the bathroom).</p>
        </div>
      )
    }
  ];

  const medicationVariants = [
    { name: "Generic Ortho Cyclen", description: "3 Packs ($1.56/pill)", price: 46.97, productId: "69" },
    { name: "Generic Ortho TriCyclen", description: "3 Packs ($1.56/pill)", price: 46.97, productId: "70" },
    { name: "Generic Ortho TriCyclen-Lo", description: "3 Packs ($1.56/pill)", price: 46.97, productId: "71" },
    { name: "Sprintec", description: "3 Packs ($1.56/pill)", price: 46.97, productId: "72" },
    { name: "Tri-Sprintec", description: "3 Packs ($1.56/pill)", price: 46.97, productId: "73" },
    { name: "Tri-Lo Sprintec", description: "3 Packs ($1.56/pill)", price: 46.97, productId: "74" },
    { name: "Generic Yasmin", description: "3 Packs ($1.56/pill)", price: 46.97, productId: "75" },
    { name: "Ocella", description: "3 Packs ($1.56/pill)", price: 46.97, productId: "76" },
    { name: "Generic Desogen", description: "3 Packs ($1.56/pill)", price: 46.97, productId: "77" },
    { name: "Apri", description: "3 Packs ($1.56/pill)", price: 46.97, productId: "78" },
    { name: "Isibloom", description: "3 Packs ($1.56/pill)", price: 46.97, productId: "79" },
    { name: "Generic Mircette", description: "3 Packs ($1.56/pill)", price: 46.97, productId: "80" },
    { name: "Kariva", description: "3 Packs ($1.56/pill)", price: 46.97, productId: "81" },
    { name: "Generic Ortho-Micronor", description: "3 Packs ($1.56/pill)", price: 46.97, productId: "82" },
    { name: "Camila", description: "3 Packs ($1.56/pill)", price: 46.97, productId: "83" },
    { name: "Heather", description: "3 Packs ($1.56/pill)", price: 46.97, productId: "84" },
    { name: "Generic Loestrin 21", description: "3 Packs ($1.56/pill)", price: 46.97, productId: "85" },
    { name: "Microgestin", description: "3 Packs ($1.56/pill)", price: 46.97, productId: "86" },
    { name: "Generic Yaz", description: "3 Packs ($1.56/pill)", price: 46.97, productId: "87" }
  ];

  return (
    <div>
        <HeaderBlack/>
        <ProductHero
        protocol="Birth Control"
        productName="Oral Contraceptives"
        tagline="Empower yourself with birth control choices"
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
        <TrustBadges/>
        <ProductDescription
        title="What is hormonal birth control?"
        subtitle="Hormonal contraception serves as a method for women to prevent pregnancy by utilizing hormones to inhibit monthly ovary egg releases. Consistent pill intake maintains stable hormone levels, preventing egg-sperm encounters and thereby avoiding conception. Yet, its benefits extend beyond contraception. This aids in regulating and alleviating menstrual discomfort, reducing acne, and mitigating monthly mood fluctuations. Additionally, some women use it to manage conditions such as PCOS. Moreover, it provides women with increased control over family planning, functioning as a discreet yet powerful tool for reproductive health management."
        benefits={[]}
        image={birthcontrol}
        // onGetStarted={handleAddToCart}
        imageAspectRatio="aspect-[3/2.5]"
      />
      <ProductFAQ items={faqItems} />

    </div>
  )
}

export default BirthControl