import { HeaderBlack } from '@/components/HeaderBlack'
import ProductHero from '@/components/Products/ProductHero'
import React, { useState } from 'react'
import bottle from "../../assets/bottle.png"
import TrustBadges from '@/components/Products/TrustBadges'
import ProductDescription from '@/components/Products/ProductDescription'
import ProductFAQ from '@/components/Products/ProductFAQ'
import { useCart } from '@/context/CartContext'

const ErectileDysfunction = () => {
    const { addToCart } = useCart();

    const medications = [
        {
            name: "Sildenafil (Generic Viagra)",
            dosages: ["100MG", "50MG"],
            variants: {
                "100MG": [
                    { label: "1 month supply (qty 10)", price: "100.00", id: "93" },
                    { label: "1 month supply (qty 12)", price: "120.00", id: "94" },
                    { label: "12 month supply (qty 120)", price: "720.00", id: "95" },
                    { label: "1 month supply (qty 14)", price: "140.00", id: "96" },
                    { label: "12 month supply (qty 144)", price: "864.00", id: "97" },
                    { label: "12 month supply (qty 168)", price: "1,008.00", id: "98" },
                    { label: "3 month supply (qty 18)", price: "153.00", id: "99" },
                    { label: "3 month supply (qty 24)", price: "204.00", id: "100" },
                    { label: "3 month supply (qty 30)", price: "255.00", id: "101" },
                    { label: "3 month supply (qty 36)", price: "306.00", id: "102" },
                    { label: "6 month supply (qty 36)", price: "288.00", id: "103" },
                    { label: "3 month supply (qty 42)", price: "357.00", id: "104" },
                    { label: "6 month supply (qty 48)", price: "384.00", id: "105" },
                    { label: "1 month supply (qty 6)", price: "60.00", id: "106" },
                    { label: "6 month supply (qty 60)", price: "480.00", id: "107" },
                    { label: "6 month supply (qty 72)", price: "576.00", id: "108" },
                    { label: "12 month supply (qty 72)", price: "432.00", id: "109" },
                    { label: "1 month supply (qty 8)", price: "80.00", id: "110" },
                    { label: "6 month supply (qty 84)", price: "672.00", id: "111" },
                    { label: "12 month supply (qty 96)", price: "576.00", id: "112" }
                ],
                "50MG": [
                    { label: "1 month supply (qty 10)", price: "100.00", id: "113" },
                    { label: "1 month supply (qty 12)", price: "120.00", id: "114" },
                    { label: "12 month supply (qty 120)", price: "720.00", id: "115" },
                    { label: "1 month supply (qty 14)", price: "140.00", id: "116" },
                    { label: "12 month supply (qty 144)", price: "864.00", id: "117" },
                    { label: "12 month supply (qty 168)", price: "1,008.00", id: "118" },
                    { label: "3 month supply (qty 18)", price: "153.00", id: "119" },
                    { label: "3 month supply (qty 24)", price: "204.00", id: "120" },
                    { label: "3 month supply (qty 30)", price: "255.00", id: "121" },
                    { label: "3 month supply (qty 36)", price: "306.00", id: "122" },
                    { label: "6 month supply (qty 36)", price: "288.00", id: "123" },
                    { label: "3 month supply (qty 42)", price: "357.00", id: "124" },
                    { label: "6 month supply (qty 48)", price: "384.00", id: "125" },
                    { label: "1 month supply (qty 6)", price: "60.00", id: "126" },
                    { label: "6 month supply (qty 60)", price: "480.00", id: "127" },
                    { label: "6 month supply (qty 72)", price: "576.00", id: "128" },
                    { label: "12 month supply (qty 72)", price: "432.00", id: "129" },
                    { label: "1 month supply (qty 8)", price: "80.00", id: "130" },
                    { label: "6 month supply (qty 84)", price: "672.00", id: "131" },
                    { label: "12 month supply (qty 96)", price: "576.00", id: "132" }
                ]
            }
        },
        {
            name: "Tadalafil (Generic Cialis)",
            dosages: ["10MG", "20MG", "Daily 2.5MG", "Daily 5MG"],
            variants: {
                "10MG": [
                    { label: "1 month supply (qty 10)", price: "100.00", id: "133" },
                    { label: "1 month supply (qty 12)", price: "120.00", id: "134" },
                    { label: "12 month supply (qty 120)", price: "720.00", id: "135" },
                    { label: "1 month supply (qty 14)", price: "140.00", id: "136" },
                    { label: "12 month supply (qty 144)", price: "864.00", id: "137" },
                    { label: "12 month supply (qty 168)", price: "1,008.00", id: "138" },
                    { label: "3 month supply (qty 18)", price: "153.00", id: "139" },
                    { label: "3 month supply (qty 24)", price: "204.00", id: "140" },
                    { label: "3 month supply (qty 30)", price: "255.00", id: "141" },
                    { label: "3 month supply (qty 36)", price: "306.00", id: "142" },
                    { label: "6 month supply (qty 36)", price: "288.00", id: "143" },
                    { label: "3 month supply (qty 42)", price: "357.00", id: "144" },
                    { label: "6 month supply (qty 48)", price: "384.00", id: "145" },
                    { label: "1 month supply (qty 6)", price: "60.00", id: "146" },
                    { label: "6 month supply (qty 60)", price: "480.00", id: "147" },
                    { label: "6 month supply (qty 72)", price: "576.00", id: "148" },
                    { label: "12 month supply (qty 72)", price: "432.00", id: "149" },
                    { label: "1 month supply (qty 8)", price: "80.00", id: "150" },
                    { label: "6 month supply (qty 84)", price: "672.00", id: "151" },
                    { label: "12 month supply (qty 96)", price: "576.00", id: "152" }
                ],
                "20MG": [
                    { label: "1 month supply (qty 10)", price: "100.00", id: "157" },
                    { label: "1 month supply (qty 12)", price: "120.00", id: "158" },
                    { label: "12 month supply (qty 120)", price: "720.00", id: "159" },
                    { label: "1 month supply (qty 14)", price: "140.00", id: "160" },
                    { label: "12 month supply (qty 144)", price: "864.00", id: "161" },
                    { label: "12 month supply (qty 168)", price: "1,008.00", id: "162" },
                    { label: "3 month supply (qty 18)", price: "153.00", id: "163" },
                    { label: "3 month supply (qty 24)", price: "204.00", id: "164" },
                    { label: "3 month supply (qty 30)", price: "255.00", id: "165" },
                    { label: "3 month supply (qty 36)", price: "306.00", id: "166" },
                    { label: "6 month supply (qty 36)", price: "288.00", id: "167" },
                    { label: "3 month supply (qty 42)", price: "357.00", id: "168" },
                    { label: "6 month supply (qty 48)", price: "384.00", id: "169" },
                    { label: "1 month supply (qty 6)", price: "60.00", id: "170" },
                    { label: "6 month supply (qty 60)", price: "480.00", id: "171" },
                    { label: "6 month supply (qty 72)", price: "576.00", id: "172" },
                    { label: "12 month supply (qty 72)", price: "432.00", id: "173" },
                    { label: "1 month supply (qty 8)", price: "80.00", id: "174" },
                    { label: "6 month supply (qty 84)", price: "672.00", id: "175" },
                    { label: "12 month supply (qty 96)", price: "576.00", id: "176" }
                ],
                "Daily 2.5MG": [
                    { label: "6 month supply (qty 180)", price: "432.00", id: "153" },
                    { label: "1 month supply (qty 30)", price: "90.00", id: "154" },
                    { label: "12 month supply (qty 360)", price: "648.00", id: "155" },
                    { label: "3 month supply (qty 90)", price: "261.90", id: "156" }
                ],
                "Daily 5MG": [
                    { label: "6 month supply (qty 180)", price: "432.00", id: "177" },
                    { label: "1 month supply (qty 30)", price: "90.00", id: "178" },
                    { label: "12 month supply (qty 360)", price: "648.00", id: "179" },
                    { label: "3 month supply (qty 90)", price: "261.90", id: "180" }
                ]
            }
        }
    ];

    const [selectedMedIndex, setSelectedMedIndex] = useState(0);
    const [selectedDosage, setSelectedDosage] = useState(medications[0].dosages[0]);
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

    const currentMed = medications[selectedMedIndex];
    const currentVariants = currentMed.variants[selectedDosage];
    const currentVariant = currentVariants[selectedVariantIndex];

    const faqItems = [
        {
            question: "What is the difference between Sildenafil and Tadalafil?",
            answer: "Sildenafil (Viagra) is typically taken as needed about 30-60 minutes before sexual activity and lasts for 4-6 hours. Tadalafil (Cialis) can be taken as needed (lasting up to 36 hours) or as a daily low dose to maintain constant readiness."
        },
        {
            question: "Is consultation required?",
            answer: "Yes, all Erectile Dysfunction medications require an online consultation with a licensed physician to ensure the treatment is safe and appropriate for you."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <HeaderBlack />
            
            <section className="relative py-12 lg:py-20 mt-[64px]">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-start">
                            {/* Image Part */}
                            <div className="w-full flex justify-center">
                                <img src={bottle} alt="ED Medication" className="max-w-md w-full h-auto object-contain" />
                            </div>

                            {/* Content Part */}
                            <div className="bg-[#f2f2f2] p-8 rounded-2xl w-full">
                                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Sexual Wellness</span>
                                <h1 className="text-4xl font-black mb-6 uppercase">Erectile Dysfunction</h1>
                                
                                <div className="space-y-8">
                                    {/* Medication Selection */}
                                    <div className="space-y-3">
                                        <p className="text-sm font-bold uppercase text-gray-500">Select Medication</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {medications.map((med, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => {
                                                        setSelectedMedIndex(idx);
                                                        setSelectedDosage(med.dosages[0]);
                                                        setSelectedVariantIndex(0);
                                                    }}
                                                    className={`p-4 rounded-xl border-2 transition-all text-left ${selectedMedIndex === idx ? 'border-primary bg-black text-white' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                                                >
                                                    <p className="font-bold">{med.name}</p>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Dosage Selection */}
                                    <div className="space-y-3">
                                        <p className="text-sm font-bold uppercase text-gray-500">Select Dosage</p>
                                        <div className="flex flex-wrap gap-2">
                                            {currentMed.dosages.map((dosage) => (
                                                <button
                                                    key={dosage}
                                                    onClick={() => {
                                                        setSelectedDosage(dosage);
                                                        setSelectedVariantIndex(0);
                                                    }}
                                                    className={`px-6 py-3 rounded-full border-2 font-bold transition-all ${selectedDosage === dosage ? 'border-primary bg-black text-white' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                                                >
                                                    {dosage}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quantity/Supply Selection */}
                                    <div className="space-y-3">
                                        <p className="text-sm font-bold uppercase text-gray-500">Select Supply & Quantity</p>
                                        <select 
                                            value={selectedVariantIndex}
                                            onChange={(e) => setSelectedVariantIndex(parseInt(e.target.value))}
                                            className="w-full p-4 rounded-xl border-2 border-gray-200 bg-white font-bold outline-none focus:border-primary"
                                        >
                                            {currentVariants.map((v, idx) => (
                                                <option key={idx} value={idx}>{v.label}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Pricing display */}
                                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                                        <p className="text-gray-400 text-xs uppercase font-bold mb-1">Total Price</p>
                                        <h2 className="text-5xl font-black">${currentVariant.price}</h2>
                                    </div>

                                    <button 
                                        onClick={() => addToCart({
                                            name: `${currentMed.name} ${selectedDosage} - ${currentVariant.label}`,
                                            price: `$${currentVariant.price}`,
                                            category: "Sexual Wellness",
                                            image: bottle,
                                            id: currentVariant.id
                                        })}
                                        className="w-full bg-black text-white py-6 rounded-2xl font-black text-xl hover:bg-primary transition-colors shadow-xl"
                                    >
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TrustBadges />
            <ProductDescription 
                title="Effective Solutions for Sexual Health"
                subtitle="We provide access to the most effective FDA-approved medications for Erectile Dysfunction, customized to your needs and lifestyle. Whether you prefer as-needed treatment or daily readiness, our physician-backed protocols help you reclaim your confidence."
                benefits={[]}
                image={bottle}
                imageAspectRatio="aspect-[3/2]"
            />
            <ProductFAQ items={faqItems} />
        </div>
    );
};

export default ErectileDysfunction;
