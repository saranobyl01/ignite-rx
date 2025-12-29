import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Search, ChevronDown, TestTubeDiagonal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import testtube from "../assets/yellow_testtube.png"
import heroLabsImage from "@/assets/hero-labs.webp";
import { HeaderBlack } from "@/components/HeaderBlack";

// ---------------- DEMO DATA ----------------

interface LabPanel {
  id: number;
  name: string;
  price: number;
  lab: string;
  category: string;
  description: string;
  labKey: string;

}
const demoTests : LabPanel[] = [
   {
    id: 1,
    category: "Inflammation & Immune Markers",
    name: "hs-CRP",
    price: 18,
    description:
      "hs-CRP measures inflammation at a much finer level than standard CRP. It’s designed to detect low-grade, chronic inflammation often linked to cardiovascular risk, recovery capacity, and long-term health. Ideal for athletes tracking recovery, metabolic health, or cardiovascular performance.",
    lab: "Quest",
    labKey: "quest"
  },
  {
    id: 2,
    category: "Thyroid Function",
    name: "T4 Free (FT4)",
    price: 17,
    description: "This test measures the unbound, biologically active form of thyroxine (T4) circulating in the blood. Unlike total T4, it reflects the portion not attached to proteins and available for use by tissues. Free T4 is a key marker of thyroid function and helps assess how much hormone is available to act on the body.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id: 3,
    category: "Hormones",
    name: "Dihydrotestosterone (DHT)",
    price: 54,
    description:
      "This test measures the amount of dihydrotestosterone (DHT) in your blood. DHT is made from testosterone and is one of the most powerful androgens (male hormones). It plays an important role in things like muscle development, hair growth, and prostate health. Why it Matters Checking DHT levels can help your provider understand issues like hair loss, unwanted hair growth, acne, prostate concerns, or symptoms of low testosterone. It’s also useful if you’re taking medications that block DHT (like finasteride or dutasteride) to be sure they’re working as intended. Advanced Accuracy This test is performed using LC/MS/MS (liquid chromatography–tandem mass spectrometry). That’s a state-of-the-art method that’s more precise than standard hormone tests, so even very small amounts of DHT can be measured accurately.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id: 4,
    category: "Blood & Iron Markers",
    name: "Copper, RBC",
    price: 30,
    description: "Copper, RBC measures the concentration of copper within red blood cells. Unlike serum copper, which reflects short-term dietary intake, the RBC copper test gives a better picture of long-term copper status at the cellular level. Copper is an essential trace mineral involved in energy production, nervous system function, immune defense, and the formation of connective tissue. It also plays a role in iron metabolism and the synthesis of hemoglobin.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id: 5,
    category: "Biomarker",
    name: "Methylenetetrahydrofolate Reductase (MTHFR), DNA",
    price: 175,
    description: "The MTHFR (methylenetetrahydrofolate reductase) gene helps your body process folate and regulate homocysteine levels. Variations in this gene may affect methylation, cardiovascular health, fertility, and how your body uses certain nutrients. This test looks for the most common MTHFR variants (C677T and A1298C) to help you understand your genetic profile and whether additional lifestyle, dietary, or supplement support may be beneficial.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id: 6,
    category: "Blood & Iron Markers",
    name: "Fibrinogen Activity, Clauss",
    price: 19.50,
    description: "Fibrinogen Activity, Clauss measures how well your blood can form clots by testing the function of fibrinogen, a protein made in the liver. Low levels can increase bleeding risk, while high levels can signal inflammation or other conditions.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:7,
    category: "Biomarker",
    name: "Anti-Mullerian Hormone (AMH), Male",
    price: 39.00,
    description: "In males, AMH is produced by the testes and plays a key role in sexual development during early life. Measuring AMH levels can help evaluate testicular function, especially in cases of delayed puberty, undescended testes, or suspected disorders of sex development. It may also be used to assess Sertoli cell function and contribute to a broader understanding of fertility status in some clinical scenarios.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:8,
    category: "Hormones",
    name: "Anti-Mullerian Hormone (AMH), Female",
    price: 39.00,
    description: "The AMH test measures levels of Anti-Müllerian Hormone, a key indicator of ovarian reserve. This hormone is produced by follicles in the ovaries and helps assess a woman’s remaining egg supply, making it valuable for fertility planning, understanding reproductive lifespan, or evaluating response to fertility treatments. AMH levels can also provide insights into conditions like polycystic ovary syndrome (PCOS) or premature ovarian insufficiency.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:9,
    category: "Blood & Iron Markers",
    name: "Micronutrients, Heavy Metals Panel, Blood",
    price: 250.00,
    description: "This panel tests for five key heavy metals—arsenic, cadmium, cobalt, lead, and mercury—using a simple blood draw. These toxic elements can accumulate in the body through environmental exposure, food, water, or workplace hazards, potentially disrupting metabolism, hormone function, energy levels, and overall health. Ideal for those experiencing fatigue, cognitive issues, or suspected toxic exposure, this panel gives you clear insights into your heavy metal burden and supports detox or lifestyle changes for long-term health.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:10,
    category: "Inflammation & Immune Markers",
    name: "ANA Screen, IFA, Reflex Titer/Pattern, and Reflex to...",
    price: 15.00,
    description: "The ANA (Antinuclear Antibody) Screen checks for autoantibodies that target the nucleus of your own cells — which can be a sign of an autoimmune disease. This version of the test uses IFA (Indirect Fluorescent Antibody), the gold standard method, and includes a reflex titer and pattern if the initial screen is positive. These follow-up details help identify the likelihood and type of autoimmune condition.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:11,
    category: "Blood & Iron Markers",
    name: "Prothrombin Time with INR",
    price: 50.00,
    description: "The Prothrombin Time (PT) test measures how long it takes your blood to clot. It helps assess the function of clotting factors made by your liver. The INR (International Normalized Ratio) is a standardized version of the PT result.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:12,
    category: "Inflammation & Immune Markers",
    name: "Creatine Kinase (CK), Total",
    price: 7.00,
    description: "The Creatine Kinase (CK) test measures the level of an enzyme found mostly in your muscles, including the heart. When muscle tissue is damaged, CK leaks into the bloodstream - so higher levels can signal muscle injury, stress, or inflammation.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:13,
    category: "Liver Function",
    name: "Alpha-1-Antitrypsin, Quantitative",
    price: 80.00,
    description: "Alpha-1 Antitrypsin (A1AT) is a protein made by the liver that protects your lungs from inflammation caused by infection or irritants like smoke. The quantitative test measures how much A1AT is present in the blood.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:14,
    category: "Vitamins & Minerals",
    name: "Ceruloplasmin",
    price: 60.00,
    description: "Ceruloplasmin is a protein made by your liver that helps transport copper in your blood. This test measures how much ceruloplasmin is in your bloodstream and is commonly used to assess copper metabolism disorders.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:15,
    category: "Inflammation & Immune Markers",
    name: "Smooth Muscle Antibody (SMA)",
    price: 88.00,
    description: "The Smooth Muscle Antibody (SMA) test checks for autoantibodies — proteins made by your immune system that mistakenly target the smooth muscle in your body. These muscles line organs like your intestines, blood vessels, and bladder — but when the immune system goes off course, these antibodies can cause inflammation and tissue damage.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:16,
    category: "Blood & Iron Markers",
    name: "CBC (includes Differential and Platelets)",
    price: 6.00,
    description: "A Complete Blood Count (CBC) with Differential measures red blood cells, white blood cells, hemoglobin, hematocrit, and platelets—along with a breakdown of the different types of white blood cells. It provides essential insight into immune status, oxygen-carrying capacity, and overall blood health.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:17,
    category: "Metabolic Health",
    name: "Fructosamine",
    price: 16.00,
    description: "**Fructosamine** measures glycated serum proteins, primarily albumin, to reflect average blood glucose levels over the past 2–3 weeks. It offers a shorter-term view of glycemic control than A1c and is useful when A1c may be unreliable or rapid changes in blood sugar are being monitored.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:18,
    category: "Hormones",
    name: "Progesterone, LC/MS",
    price: 35.00,
    description: "**Progesterone** is a key reproductive hormone involved in regulating the menstrual cycle, supporting early pregnancy, and balancing the effects of estrogen. In men, it also plays a role in testosterone metabolism and adrenal function. This test uses **liquid chromatography–mass spectrometry (LC/MS)** for ultra-sensitive and highly accurate measurement, especially valuable in cases requiring precise hormone monitoring.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:19,
    category: "Kidney Function",
    name: "Electrolyte Panel",
    price: 10.00,
    description: "### Electrolyte Panel measures the levels of key electrolytes in your blood, which are essential for maintaining fluid balance, nerve function, and muscle function. This panel typically includes: Sodium (Na) Potassium (K) Chloride (Cl) Carbon Dioxide (CO2 or Bicarbonate) This test helps in diagnosing and monitoring conditions related to electrolyte imbalances, such as dehydration, kidney disease, and metabolic disorders, providing critical insights for maintaining overall health. #### Includes: * Carbon dioxide * Chloride * Potassium * Sodium",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:20,
    category: "Blood & Iron Markers",
    name: "Lactate Dehydrogenase (LD)",
    price: 15.00,
    description: "**Lactate Dehydrogenase (LD or LDH)** is an enzyme found in many tissues throughout the body, including the heart, liver, kidneys, muscles, brain, and blood cells. It plays a key role in energy production by converting lactate to pyruvate. **Why it matters:** LD is released into the bloodstream when cells are damaged or destroyed. Elevated LD levels may indicate: * Tissue injury or inflammation * Liver disease * Hemolysis (red blood cell breakdown) * Certain cancers or infections * Heart attack or muscle damage **Low LD** levels are typically not concerning and are rarely clinically significant.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:21,
    category: "Metabolic Health",
    name: "C-Peptide",
    price: 25.00,
    description: "### C-Peptide is a byproduct of insulin production, released into the bloodstream in equal amounts to insulin. Measuring C-Peptide levels in the serum provides valuable insights into how much insulin the pancreas is producing. This test is particularly useful for distinguishing between type 1 and type 2 diabetes, assessing insulin secretion in people with diabetes, and evaluating the functioning of pancreatic beta cells. It can also help monitor insulin production in individuals receiving insulin therapy, providing a clearer picture of their endogenous insulin production",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:22,
    category: "Vitamins & Minerals",
    name: "Zinc",
    price: 20.00,
    description: "### This test measures the level of zinc in your blood, which is essential for immune function, wound healing, hormone production, and overall metabolic health. Low levels may indicate deficiency, while high levels could suggest excessive supplementation or other health conditions.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:23,
    category: "Lipids & Cardiovascular Risk",
    name: "TMAO (Trimethylamine N-Oxide)",
    price: 40.00,
    description: "### A Trimethylamine N-oxide (TMAO) lab test measures the level of TMAO in the blood, a compound produced by gut bacteria during the digestion of certain nutrients, such as choline, lecithin, and carnitine, which are found in red meat, eggs, and dairy products. Elevated TMAO levels are associated with an increased risk of cardiovascular diseases, including heart attack, stroke, and atherosclerosis. This test is used to assess cardiovascular risk by evaluating TMAO levels as a marker of gut microbiome activity and its influence on heart health.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:24,
    category: "Hormones",
    name: "Testosterone, Free, Bioavailable and Total,...",
    price: 65.00,
    description: "This panel provides an in-depth analysis of testosterone levels and availability in the body. It evaluates total production, how much is free (active), and how much is biologically available for use. It’s essential for assessing hormonal health, performance, fertility, libido, mood, and overall vitality. **Included markers:** * **Testosterone, Total (MS)** – The total amount of testosterone in the bloodstream, measured via mass spectrometry for high accuracy. Includes both bound and unbound testosterone.  **Uncapped.** * **Testosterone, Free** – The portion of testosterone not bound to proteins, representing the biologically active form that can enter cells and exert effects. * **Testosterone, Bioavailable** – The sum of free testosterone plus the portion loosely bound to albumin—both forms readily available for use in the body. * **Sex Hormone Binding Globulin (SHBG)** – A protein that binds tightly to testosterone. High SHBG can reduce free and bioavailable testosterone, even when total levels are normal. * **Albumin** – A protein that loosely binds testosterone. Albumin levels are used to calculate bioavailable testosterone.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:25,
    category: "Kidney Function",
    name: "Renal Function Panel",
    price: 10.00,
    description:" This panel provides a comprehensive assessment of kidney health, electrolyte balance, and metabolic function. It is essential for evaluating hydration status, kidney performance, acid-base balance, and nutrient metabolism. **Key markers include:** * **Glucose** – Blood sugar level, important for metabolic and kidney function screening * **Urea Nitrogen (BUN)** – Measures nitrogen waste in the blood to evaluate kidney filtration efficiency. * **Creatinine** – A marker of kidney function based on muscle metabolism. * **BUN/Creatinine Ratio** – Helps differentiate causes of kidney dysfunction or dehydration. * **eGFR (Estimated Glomerular Filtration Rate)** – A critical indicator of kidney function and early-stage kidney disease. **Electrolytes & Minerals:** * **Sodium, Potassium, Chloride, CO₂ (Bicarbonate)** – Assess fluid balance, nerve function, muscle contraction, and acid-base status. * **Calcium** – Involved in bone health, nerve transmission, and kidney regulation. * **Phosphate (as Phosphorus)** – Vital for energy production, bone health, and regulated by kidney function. **Albumin:** * A key protein made by the liver, albumin maintains oncotic pressure and transports hormones, drugs, and other substances. Low levels may signal kidney or liver dysfunction.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:26,
    category: "Hormones",
    name: "Pregnenolone, LC/MS",
    price: 55.00,
    description: "Pregnenolone is a precursor hormone - the starting material from which your body produces other key hormones like DHEA, progesterone, cortisol, estrogen, and testosterone. It plays a vital role in hormonal balance, brain function, mood...",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:27,
    category: "Lipids & Cardiovascular Risk",
    name: "Cardio IQ Lipoprotein Fractionation, Ion Mobility",
    price: 55.00,
    description: "This advanced cardiovascular test uses Ion Mobility technology to directly measure the size and concentration of cholesterol-carrying particles (lipoproteins) in your blood. It provides a deeper and more accurate view of cardiovascular...",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:28,
    category: "Lipids & Cardiovascular Risk",
    name: "Lipid Panel, Standard",
    price: 13.50,
    description: "This panel measures essential blood lipids and cholesterol ratios used to assess cardiovascular health and metabolic risk. It is a core component of routine wellness evaluations and preventive care. Key markers include Total...",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:29,
    category: "Lipids & Cardiovascular Risk",
    name: "Advanced Lipid Panel, Cardio IQ",
    price: 100.00,
    description: "This panel provides a deep analysis of your cholesterol particle size, density, and number - going far beyond standard lipid testing. It is designed for individuals seeking a more accurate assessment of cardiovascular risk, especially when traditional...",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:30,
    category: "Hormones",
    name: "Leptin",
    price: 35.00,
    description: "Leptin, Serum/Plasma is a hormone produced by fat cells that plays a key role in regulating energy balance, appetite, and metabolism. It signals to the brain how much fat is stored in the body and helps regulate hunger by reducing food intake when...",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:31,
    category: "Vitamins & Minerals",
    name: "Iodine, Serum/Plasma",
    price: 60.00,
    description: "This test measures iodine levels in your blood, which is essential for thyroid function, hormone production, and metabolic regulation. Deficiency can lead to thyroid disorders, while excessive iodine may also impact thyroid health.",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:32,
    category: "Liver Function",
    name: "Liver Function Panel",
    price: 18.00,
    description: "This panel assesses liver health by measuring enzymes, proteins, and waste products involved in liver metabolism. It helps evaluate liver inflammation, bile flow, protein production, and detoxification capacity. (Aspartate...",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:33,
    category: "Hormones",
    name: "Growth Hormone (GH)",
    price: 30.00,
    description: "This test measures the level of growth hormone in the blood, a peptide hormone secreted by the pituitary gland. GH plays a vital role in growth, cell repair, body composition, and metabolism. It is typically used to evaluate growth disorders...",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:34,
    category: "Hormones",
    name: "Estrogens, Total, Immunoassay",
    price: 30.00,
    description: "This test measures the combined levels of all major estrogens in the blood - primarily estradiol (E2), estrone (E1), and estriol (E3). It provides an overall picture of estrogenic activity in the body and is used to assess hormone status in both men and women...",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:35,
    category: "Hormones",
    name: "Estradiol, Ultrasensitive, LC/MS",
    price: 46.00,
    description: "This test measures estradiol (E2), the most potent form of estrogen, using a sensitive liquid chromatography-mass spectrometry (LC/MS) method. It provides highly accurate results even at very low levels, making it ideal for evaluating...",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:36,
    category: "Kidney Function",
    name: "Cystatin C with Glomerular Filtration Rate, Estimated...",
    price: 45.00,
    description: "This test measures cystatin C, a protein filtered by the kidneys, and uses it to estimate glomerular filtration rate (eGFR) - a key marker of kidney function. Unlike creatinine, cystatin C is less affected by muscle mass, making it a reliable alternative for...",
    lab: "Quest",
    labKey: "quest",
  },
  {
    id:37,
    category: "Inflammation & Immune Markers",
    name: "C-Reactive Protein, Cardiac (hs-CRP)",
    price: 18.00,
    description: "hs-CRP measures inflammation at a much finer level than standard CRP. It is designed to detect low-grade, chronic inflammation often linked to cardiovascular risk, recovery, and long-term health. Ideal for athletes tracking...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:38,
    category: "Biomarker",
    name: "Copper, RBC and Plasma",
    price: 55.00,
    description: "Copper, RBC measures the concentration of copper within red blood cells. Unlike serum copper, which reflects short-term dietary intake, the RBC copper test gives a better picture of long-term copper status at the cellular level. Copper is an...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:39,
    category: "Kidney Function",
    name: "Electrolyte Panel",
    price: 13.00,
    description: "Electrolyte Panel measures the levels of key electrolytes in your blood, which are essential for maintaining fluid balance, nerve function, and muscle function. This panel typically includes: Sodium (Na) Potassium (K) Chloride (Cl) Carbon...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:40,
    category: "Metabolic Health",
    name: "Lactic Acid, Plasma",
    price: 24.00,
    description: "Lactic Acid, Plasma measures the level of lactic acid in your blood, which is produced by muscle cells and red blood cells during anaerobic metabolism. Elevated levels of lactic acid can indicate conditions such as tissue hypoxia, sepsis, liv...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:41,
    category: "Metabolic Health",
    name: "C-Peptide",
    price: 25.00,
    description: "C-Peptide is a byproduct of insulin production, released into the bloodstream in equal amounts to insulin. Measuring C-Peptide levels in the serum provides valuable insights into how much insulin the pancreas is producing. This test is particularly...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:42,
    category: "Vitamins & Minerals",
    name: "Zinc, Serum or Plasma",
    price: 20.00,
    description: "This test measures the level of zinc in your blood, which is essential for immune function, wound healing, hormone production, and overall metabolic health. Low levels may indicate deficiency, while high levels could suggest excessive...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:43,
    category: "Vitamins & Minerals",
    name: "Vitamin B7 (Biotin)",
    price: 50.00,
    description: "Vitamin B7, also known as Biotin, is essential for metabolic processes, including the metabolism of carbohydrates, fats, and proteins. Measuring biotin levels helps diagnose deficiencies that can lead to symptoms like hair loss, skin... rashes, and neurological issues. This test is crucial for ensuring...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:44,
    category: "Lipids & Cardiovascular Risk",
    name: "TMAO (Trimethylamine N-oxide)",
    price: 40.00,
    description: "TMAO (Trimethylamine N-oxide) lab test measures the level of TMAO in the blood, a compound produced by gut bacteria during the digestion of certain nutrients, such as choline, lecithin, and carnitine, which are found in red meat... eggs, and dairy products. Elevated TMAO levels are associated...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:45,
    category: "Hormones",
    name: "Testosterone, Free, Direct With Total Testosterone, LC/MS-MS",
    price: 100.00,
    description: "Uncapped Testosterone, Free, Equilibrium Ultrafiltration with Total Testosterone, LC/MS-MS measures both the total amount of testosterone in your blood and the free, active form that is not bound to proteins. This...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:46,
    category: "Thyroid Function",
    name: "Selenium, Whole Blood",
    price: 30.00,
    description: "This test measures selenium levels in your blood, a vital trace mineral important for antioxidant defense, thyroid function, and immune health. Whole blood testing provides a more accurate reflection of long-term selenium status...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:47,
    category: "Inflammation & Immune Markers",
    name: "Rheumatoid Factor (RF)",
    price: 25.00,
    description: "The Rheumatoid Factor (RF) test measures the level of rheumatoid factor in the blood. RF is an antibody produced by the immune system that can attack healthy tissues in the body, leading to inflammation and autoimmune conditions. Elevated...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:48,
    category: "Kidney Function",
    name: "Renal Function Panel",
    price: 10.00,
    description: "The Renal Function Panel measures key markers to evaluate kidney function and health. This panel typically includes: Blood Urea Nitrogen (BUN) Creatinine BUN/Creatinine Ratio Glomerular Filtration Rate (GFR) Electrolytes (Sodium...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:49,
    category: "Hormones",
    name: "Pregnenolone, Mass Spectrometry (Endocrine Sciences)",
    price: 60.00,
    description: "Pregnenolone is a precursor hormone - the starting material from which your body produces other key hormones like DHEA, progesterone, cortisol, estrogen, and testosterone. It plays a vital role in hormonal balance, brain function, mood regulation, and stress response. This test uses Mass...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:50,
    category: "Lipids & Cardiovascular Risk",
    name: "NMR LipoProfile® With Lipids and Insulin Resistance Markers (With Graph)",
    price: 50.00,
    description: "NMR LipoProfile® + Lipids + IR + Gph The NMR LipoProfile® With Lipids and Insulin Resistance Markers (With Graph) provides a detailed assessment of lipid particles, insulin resistance, and glucose levels. This panel typically includes: Total Cholesterol...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:51,
    category: "Metabolic Health",
    name: "NMR LipoProfile® With Lipids and Insulin Resistance Markers (Without Graph)",
    price: 60.00,
    description: "The NMR LipoProfile® With Lipids and Insulin Resistance Markers (Without Graph) provides a detailed assessment of lipid particles and insulin resistance. This panel typically includes: Total Cholesterol, HDL-Cholesterol, LDL-Cholesterol...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:52,
    category: "Blood & Iron Markers",
    name: "Liver Fibrosis Risk Profile With Hepatic Function Panel, Complete Blood Count (CBC) With Differential, FIB-4, and APRI",
    price: 35.00,
    description: "This panel is designed to evaluate liver health, screen for early signs of liver fibrosis (scarring), and assess blood cell status. It combines liver enzyme testing, complete blood counts, and two validated non-invasive scoring tools: FIB-4 and APRI.",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:53,
    category: "Inflammation & Immune Markers",
    name: "Lipid Panel With GlycA (Inflammation)",
    price: 55.00,
    description: "This panel combines traditional lipid markers with GlycA, an advanced biomarker of systemic inflammation, offering a more complete view of cardiometabolic risk. Key markers include GlycA. A cutting-edge marker of chronic... inflammation associated with insulin resistance, cardiovascular disease, and metabolic dysfunction..",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:54,
    category: "Lipids & Cardiovascular Risk",
    name: "Lipid Panel With Apolipoprotein B (ApoB), GlycA (Inflammation), Diabetes Risk Index (DRI)",
    price: 45.00,
    description: "This panel combines traditional lipid testing with advanced biomarkers to provide a deeper view of heart disease and metabolic risk. It is especially useful for individuals focused on prevention, longevity, or personalized treatment plans. Key... markers include GlycA. A novel biomarker of chronic...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:55,
    category: "Metabolic Health",
    name: "Leptin, Serum or Plasma",
    price: 60.00,
    description: "Leptin is a hormone produced by fat cells that plays a key role in regulating energy balance, appetite, and metabolism. It signals to the brain how much fat is stored in the body and helps regulate hunger by reducing food intake when fat stores are...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:56,
    category: "Thyroid Function",
    name: "Iodine, Serum or Plasma",
    price: 60.00,
    description: "This test measures iodine levels in your blood, which is essential for thyroid function, hormone production, and metabolic regulation. Deficiency can lead to thyroid disorders, while excessive iodine may also impact thyroid health.",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:57,
    category: "Liver Function",
    name: "Liver Function Panel (7)",
    price: 30.00,
    description: "This panel assesses liver health by measuring enzymes, proteins, and waste products involved in liver metabolism. It helps evaluate liver inflammation, bile flow, protein production, and detoxification capacity. (Aspartate...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:58,
    category: "Hormones",
    name: "Growth Hormone",
    price: 25.00,
    description: "This test measures the level of growth hormone in the blood, a peptide hormone secreted by the pituitary gland. GH plays a vital role in growth, cell repair, body composition, and metabolism. It's typically used to evaluate growth disorders...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:59,
    category: "Metabolic Health",
    name: "GlycA",
    price: 77.00,
    description: "GlycA is a composite biomarker that measures glycosylated acute-phase proteins in the blood using NMR spectroscopy. It reflects chronic, low-grade systemic inflammation and is associated with cardiometabolic risk, insulin resistance, and...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:60,
    category: "Hormones",
    name: "Estrogens, Total",
    price: 37.00,
    description: "This test measures the combined levels of all major estrogens in the blood - primarily estradiol (E2), estrone (E1), and estriol (E3). It provides an overall picture of estrogenic activity in the body and is used to assess hormone status in both men and women...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:61,
    category: "Hormones",
    name: "Estradiol, Sensitive, LC/MS",
    price: 55.00,
    description: "This test measures estradiol (E2), the most potent form of estrogen, using a sensitive liquid chromatography-mass spectrometry (LC/MS) method. It provides highly accurate results even at very low levels, making it ideal for evaluating...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:62,
    category: "Hormones",
    name: "Dihydrotestosterone (DHT), Free, LC/MS/Dialysis",
    price: 149.00,
    description: "This panel measures total and free levels of dihydrotestosterone (DHT), a powerful androgen derived from testosterone through the action of 5-alpha reductase. DHT is involved in sexual development, hair follicle regulation, and...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:63,
    category: "Hormones",
    name: "Dihydrotestosterone (DHT)",
    price: 149.00,
    description: "This test measures the level of DHT, a potent androgen derived from testosterone via the enzyme 5-alpha reductase. DHT plays a critical role in the development of male characteristics, prostate function, and hair follicle regulation. It's commonly...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:64,
    category: "Kidney Function",
    name: "Cystatin C With Glomerular Filtration Rate, Estimated (eGFR)",
    price: 80.00,
    description: "This test measures cystatin C, a protein filtered by the kidneys, and uses it to estimate glomerular filtration rate (eGFR) - a key marker of kidney function. Unlike creatinine, cystatin C is less affected by muscle mass, making it a reliable alternative for...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:65,
    category: "Inflammation & Immune Markers",
    name: "Creatine Kinase (CK), Total Plus Isoenzymes",
    price: 40.00,
    description: "This panel measures total creatine kinase activity and breaks it down into its specific isoenzyme fractions to help determine the source of muscle or tissue damage. CK is an enzyme involved in cellular energy production, and its isoforms are... found in different tissues throughout the body. Creatine...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:66,
    category: "Inflammation & Immune Markers",
    name: "Creatine Kinase (CK), Total",
    price: 6.00,
    description: "This test measures the level of creatine kinase, an enzyme found primarily in muscle, heart, and brain tissue. CK is released into the bloodstream when muscle cells are damaged. It's commonly used to evaluate muscle injury, inflammation, or... excessive breakdown from intense physical activity, trauma, or...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:67,
    category: "Inflammation & Immune Markers",
    name: "Urinalysis, Complete",
    price: 10.00,
    description: "This test analyzes a urine sample for a wide range of chemical, physical, and microscopic markers. It provides valuable information about hydration status, kidney function, urinary tract health, and signs of infection or metabolic disturbance...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:68,
    category: "Metabolic Health",
    name: "Uric Acid",
    price: 6.00,
    description: "This test measures the level of uric acid in the blood - a byproduct of purine metabolism. Uric acid is commonly associated with gout, but it also serves as a marker of broader metabolic health. Elevated levels can be linked to insulin...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:69,
    category: "Thyroid Function",
    name: "TSH & Free T4",
    price: 22.00,
    description: "This panel measures two key hormones involved in thyroid regulation. TSH is produced by the pituitary gland and stimulates the thyroid to produce hormones. Total T4 reflects the overall amount of thyroxine in the blood, including both...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:70,
    category: "Thyroid Function",
    name: "TSH",
    price: 11.00,
    description: "This test measures the level of TSH, a hormone produced by the pituitary gland that signals the thyroid to produce T3 and T4. It serves as the primary regulator of thyroid function and is commonly used to screen for thyroid imbalances.",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:71,
    category: "Thyroid Function",
    name: "Triiodothyronine (T3), Free",
    price: 35.00,
    description: "This test measures the unbound, active form of triiodothyronine (T3) in the bloodstream. Free T3 is the most biologically active thyroid hormone and plays a central role in regulating metabolism, energy production, and cellular function.",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:72,
    category: "Blood & Iron Markers",
    name: "Transferrin",
    price: 20.00,
    description: "This test measures the level of transferrin, a protein produced by the liver that binds and transports iron in the blood. It reflects the body's iron-carrying capacity and is commonly used to evaluate iron status and distinguish types of anemia.",
    lab: "Labcorp",
    labKey: "labcorp",
  },

  {
    id:73,
    category: "Thyroid Function",
    name: "Thyroxine (T4) Free, Direct",
    price: 13.00,
    description: "This test measures the unbound, biologically active form of thyroxine (T4) circulating in the blood. Unlike total T4, it reflects the portion not attached to proteins and available for use by tissues. Free T4 is a key marker of thyroid function and helps...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:74,
    category: "Thyroid Function",
    name: "Thyroxine (T4)",
    price: 11.00,
    description: "This test measures the total amount of thyroxine (T4) in the blood, including both the protein-bound and free (active) forms. T4 is one of the primary hormones produced by the thyroid gland and plays a key role in regulating metabolism...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:75,
    category: "Thyroid Function",
    name: "Thyroid Peroxidase (TPO) Ab",
    price: 20.00,
    description: "This test detects antibodies against thyroid peroxidase, an enzyme involved in thyroid hormone production. The presence of TPO antibodies may indicate an autoimmune response targeting the thyroid gland. Commonly used to assess for...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:76,
    category: "Thyroid Function",
    name: "Thyroid Panel With TSH",
    price: 30.00,
    description: "Thyroid Function Panel (TSH, T4, T3 Uptake, Free Thyroxine Index) This panel evaluates key markers involved in thyroid hormone production, transport, and regulation. It includes both direct hormone levels and calculated indices used to assess...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:77,
    category: "Hormones",
    name: "Testosterone, Free and Total",
    price: 90.00,
    description: "This panel measures both total and free testosterone levels in the blood. Total testosterone includes all circulating testosterone, both bound and unbound. Free testosterone reflects the fraction not bound to proteins and available for us...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:78,
    category: "Hormones",
    name: "Testosterone, Free",
    price: 50.00,
    description: "This test measures the free, bioactive portion of testosterone that is not bound to proteins like SHBG or albumin. Unlike total testosterone, this test looks specifically at the fraction available to tissues. It uses a direct analog immunoassay method - not...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:79,
    category: "Metabolic Health",
    name: "Fructosamine",
    price: 20.00,
    description: "This test measures glycated serum proteins, primarily albumin, to assess average blood glucose levels over the past 2-3 weeks. It provides a shorter-term view of glycemic control compared to Hemoglobin A1c and is especially useful in...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:80,
    category: "Lipids & Cardiovascular Risk",
    name: "Apolipoprotein Assessment",
    price: 30.00,
    description: "This panel evaluates key apolipoproteins involved in lipid transport and cardiovascular health. It provides a deeper look into lipoprotein particle balance beyond standard cholesterol testing. Apolipoprotein A1 (Apo A1) The main protein...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:81,
    category: "Kidney Function",
    name: "Aldosterone:Renin Ratio",
    price: 70.00,
    description: "This test calculates the ratio between aldosterone and renin levels in the blood to evaluate the activity of the renin-angiotensin-aldosterone system (RAAS). It is commonly used to screen for disorders related to blood pressure regulation and...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:82,
    category: "Vitamins & Minerals",
    name: "Magnesium, RBC",
    price: 21.00,
    description: "This test measures magnesium levels inside red blood cells, providing a more accurate reflection of long-term magnesium status than serum magnesium. Magnesium is involved in over 300 enzymatic reactions, including those...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:83,
    category: "Vitamins & Minerals",
    name: "Vitamin D, 25-Hydroxy",
    price: 15.00,
    description: "This test measures the level of 25-hydroxy vitamin D, the primary circulating form of vitamin D in the blood. It reflects total vitamin D status from sunlight, diet, and supplements. Vitamin D is critical for bone health, immune function, and...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:84,
    category: "Vitamins & Minerals",
    name: "Vitamin B12",
    price: 20.00,
    description: "This test measures the level of vitamin B12 (cobalamin) in the blood. Vitamin B12 is essential for red blood cell formation, neurological function, and DNA synthesis. It plays a key role in energy metabolism and methylation pathways.",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:85,
    category: "Hormones",
    name: "Testosterone",
    price: 40.00,
    description: "This test measures the total amount of testosterone in the bloodstream, including both protein-bound and unbound forms. It does not include a direct measurement of free testosterone and is not the more sensitive LC/MS method...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:86,
    category: "Thyroid Function",
    name: "T3 Uptake",
    price: 12.50,
    description: "T3 Uptake is a test that measures the binding capacity of thyroid-binding proteins in the blood. It provides indirect information about thyroid hormone levels, helping to evaluate thyroid function and diagnose thyroid disorders. This test aids...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:87,
    category: "Hormones",
    name: "Sex Horm Binding Glob, Serum",
    price: 38.50,
    description: "Sex Hormone Binding Globulin (SHBG), Serum lab test measures the level of SHBG in the blood. SHBG is a protein produced by the liver that binds to sex hormones, including testosterone and estrogen, regulating their availability and...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:88,
    category: "Thyroid Function",
    name: "Reverse T3, Serum",
    price: 62.00,
    description: "Reverse T3 (rT3), Serum lab test measures the level of reverse triiodothyronine in the blood. Reverse T3 is an inactive form of the thyroid hormone triiodothyronine (T3) that is produced when the body converts thyroxine (T4) into T3...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:89,
    category: "Hormones",
    name: "PSA Total (Reflex To Free)",
    price: 20.00,
    description: "Prostate-Specific Antigen (PSA) lab test measures the level of PSA in the blood, a protein produced by the prostate gland. PSA levels can be elevated in conditions affecting the prostate gland, including benign prostatic hyperplasia (BPH)...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:90,
    category: "Hormones",
    name: "Prolactin",
    price: 30.00,
    description: "Prolactin is a hormone produced by the pituitary gland that plays a key role in reproductive health, lactation, and metabolic functions. Elevated prolactin levels can indicate various health conditions, including hormonal imbalances and...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  // --- Data from Image 5 (image_c0fdba.png) ---
  {
    id:104,
    category: "Metabolic Health",
    name: "Comp. Metabolic Panel (14)",
    price: 10.00,
    description: "The CMP provides key insights into your body's metabolic processes, including liver and kidney function, electrolyte balance, protein levels, and blood sugar regulation. It is an essential tool for understanding your overall health and...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:105,
    category: "Blood & Iron Markers",
    name: "CBC With Differential/Platelet",
    price: 11.00,
    description: "Our CBC with Differential panel provides a comprehensive snapshot of your blood health by measuring red and white blood cell populations, hemoglobin, hematocrit, and detailed breakdowns of immune system activity. This test helps detect...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:106,
    category: "Metabolic Health",
    name: "Basic Metabolic Panel (8)",
    price: 11.00,
    description: "A Basic Metabolic Panel (BMP) is a group of blood tests that provides important information about the body's metabolism and electrolyte balance. This test includes: BUN, BUN/creatinine ratio, Calcium, serum, Carbon dioxide, total...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:107,
    category: "Lipids & Cardiovascular Risk",
    name: "Lipid Panel With Apolipoprotein B (ApoB)",
    price: 15.00,
    description: "Apolipoprotein B (ApoB) is a protein found in different types of 'bad' cholesterol, including low-density lipoprotein (LDL), lipoprotein(a), and very low-density lipoprotein (VLDL). ApoB can transfer extra cholesterol into the body's tissues...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:108,
    category: "Hormones",
    name: "Anti-Mullerian Hormone (AMH)",
    price: 100.00,
    description: "Anti-Mullerian Hormone (AMH) is a hormone produced by the small follicles in a woman's ovaries, which plays a critical role in assessing ovarian reserve, or the remaining egg supply. AMH levels help gauge fertility potential, making it a useful marker f...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:109,
    category: "Blood & Iron Markers",
    name: "Anemia Profile B",
    price: 85.00,
    description: "Anemia Profile B is a comprehensive set of laboratory tests designed to evaluate various parameters related to anemia, a condition characterized by a deficiency of red blood cells or hemoglobin in the blood. CBC with differential and...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:110,
    category: "Lipids & Cardiovascular Risk",
    name: "Lipoprotein (a)",
    price: 32.00,
    description: "This test measures the concentration of Lp(a), a genetically determined lipoprotein variant similar to LDL but with an added apolipoprotein(a) component. Unlike other cholesterol markers, Lp(a) levels are mostly inherited and do not...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:111,
    category: "Lipids & Cardiovascular Risk",
    name: "Lipid Panel With Chol/HDL Ratio",
    price: 12.00,
    description: "This panel measures key markers of blood lipids to assess cardiovascular and metabolic health. It includes total cholesterol, triglycerides, and calculated values for LDL and VLDL, as well as HDL - the 'good' cholesterol. The total...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:112,
    category: "Hormones",
    name: "LH, FSH & Prolactin",
    price: 10.00,
    description: "This panel evaluates key hormonal signals involved in menstrual cycle regulation and reproductive health in both men and women. LH (Luteinizing Hormone) A pituitary hormone that stimulates the pituitary to produce hormones. Test totals that regulate the gonads - stimulating testosterone production in...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:113,
    category: "Blood & Iron Markers",
    name: "Iron and TIBC",
    price: 20.00,
    description: "This panel measures iron levels and the body's ability to bind, transport, and store iron. It is a critical test for evaluating anemia, fatigue, nutritional deficiencies, or iron overload. Key markers include Iron, Total...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:114,
    category: "Inflammation & Immune Markers",
    name: "Interleukin-6, Serum",
    price: 165.00,
    description: "The Interleukin-6 (IL-6) lab test measures the level of IL-6 in the blood, a cytokine that plays a key role in the regulation of immune responses and inflammation. IL-6 is produced by various cells, including immune cells, and is involved in the...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:115,
    category: "Hormones",
    name: "Insulin",
    price: 16.50,
    description: "Fasting insulin lab test measures the level of insulin in the blood after a period of fasting, typically overnight. Insulin is a hormone produced by the pancreas that regulates blood sugar levels by facilitating the uptake of glucose into cells for energy...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:116,
    category: "Blood & Iron Markers",
    name: "Ferritin",
    price: 15.00,
    description: "A Ferritin lab test measures the level of ferritin in the blood, a protein that stores iron in the body. Ferritin is found in cells throughout the body, particularly in the liver, spleen, and bone marrow, and serves as a reservoir for iron, releasing it when...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:117,
    category: "Hormones",
    name: "Estradiol",
    price: 15.00,
    description: "Estradiol is a form of estrogen, a hormone that plays a crucial role in the development and regulation of the female reproductive system and secondary sexual characteristics. In men, estradiol is also important for modulating libido, erectile...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:118,
    category: "Hormones",
    name: "DHEA-Sulfate",
    price: 30.00,
    description: "A Dehydroepiandrosterone sulfate (DHEA-S) lab test measures the level of DHEA-S in the blood, a hormone produced by the adrenal glands and known as a neurosteroid. DHEA-S is a precursor to both male and female sex hormones...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:119,
    category: "Lipids & Cardiovascular Risk",
    name: "C-Reactive Protein (CRP), Quantitative",
    price: 15.00,
    description: "A C-Reactive Protein (CRP), Cardiac lab test measures the level of CRP in the blood, a protein produced by the liver in response to inflammation. The cardiac CRP test, often referred to as high-sensitivity CRP (hs-CRP), is specifically designed to...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:120,
    category: "Lipids & Cardiovascular Risk",
    name: "Lipid Panel with VLDL",
    price: 13.00,
    description: "This panel evaluates key markers related to cardiovascular and metabolic health by measuring different types of cholesterol and fat levels in your blood. It helps assess your risk for heart disease and guides lifestyle or treatment strategies. Key...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:121,
    category: "Hormones",
    name: "Cortisol",
    price: 20.00,
    description: "A cortisol lab test measures the level of cortisol, a steroid hormone produced by the adrenal glands, in the blood, saliva, or urine. Cortisol plays a crucial role in regulating metabolism, immune response, and stress response. This test helps...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:122,
    category: "Hormones",
    name: "IGF-1",
    price: 54.00,
    description: "An Insulin-like Growth Factor I (IGF-I) lab test measures the level of IGF-I in the blood, a hormone that plays a crucial role in growth and development, particularly during childhood and adolescence. IGF-I is produced primarily in the liver in...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:123,
    category: "Vitamins & Minerals",
    name: "Homocyst(e)ine",
    price: 65.00,
    description: "Homocysteine is an amino acid formed during the breakdown of methionine, an essential amino acid found in protein-rich foods. Its metabolism depends on B vitamins, particularly B6, B12, and folate, which help convert homocysteine into other...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:124,
    category: "Metabolic Health",
    name: "Hemoglobin A1c",
    price: 10.50,
    description: "A Hemoglobin A1c (HbA1c) lab test measures the average blood sugar levels over the past two to three months by assessing the percentage of glycated hemoglobin in the blood. This test is primarily used to diagnose and monitor...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:125,
    category: "Liver Function",
    name: "GGT",
    price: 7.00,
    description: "A gamma-glutamyl transferase (GGT) lab test measures the level of the GGT enzyme in the blood, which is involved in liver function and bile duct health. Elevated GGT levels can indicate liver damage or disease, bile duct obstruction, or...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:126,
    category: "Hormones",
    name: "FSH and LH",
    price: 35.00,
    description: "Follicle-Stimulating Hormone (FSH) and Luteinizing Hormone (LH) are essential hormones involved in the regulation of the reproductive system. FSH (Follicle-Stimulating Hormone) FSH is crucial for the development of eggs in wom...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:127,
    category: "Vitamins & Minerals",
    name: "Folate (Folic Acid), Serum",
    price: 22.50,
    description: "Folate, also called folic acid or vitamin B9 is important for regenerating new tissues, producing new DNA, creating and recycling proteins, and making new blood cells. Abnormal folate levels can be a sign of a poor diet or nutritional...",
    lab: "Labcorp",
    labKey: "labcorp",
  },

  // --- Data from Image 10 (image_c0fe50.png) ---
  {
    id:128,
    category: "Hormones",
    name: "Progesterone",
    price: 24.00,
    description: "A progesterone lab test measures the level of progesterone, a hormone produced primarily by the ovaries in females and, to a lesser extent, by the adrenal glands and placenta during pregnancy. Progesterone plays a crucial role i...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:129,
    category: "Vitamins & Minerals",
    name: "Phosphorus",
    price: 9.50,
    description: "Phosphorus lab test measures the level of phosphorus in the blood, an essential mineral involved in many bodily functions, including bone formation, energy production, and the regulation of enzymes and hormones. This test is often use...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:130,
    category: "Lipids & Cardiovascular Risk",
    name: "Myeloperoxidase (MPO)",
    price: 50.00,
    description: "Myeloperoxidase (MPO) is an enzyme linked to inflammation and oxidative stress in the arteries. Elevated levels of MPO can indicate a higher risk of atherosclerosis and cardiovascular diseases. This test helps in assessing your hear...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:131,
    category: "Heavy Metals",
    name: "Mercury, Blood",
    price: 60.00,
    description: "Mercury is a heavy metal that can accumulate in the body through exposure to contaminated fish, dental amalgams, industrial sources, or certain environmental toxins. Elevated levels can affect the nervous system, kidneys, immune functio...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:132,
    category: "Vitamins & Minerals",
    name: "Magnesium",
    price: 10.00,
    description: "A magnesium lab test measures the level of magnesium in the blood, an essential mineral involved in numerous bodily functions, including muscle and nerve function, blood glucose control, and bone health. This test helps diagnose magnesium...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:133,
    category: "Lipids & Cardiovascular Risk",
    name: "Lp-PLA2 Activity",
    price: 45.00,
    description: "Lipoprotein-associated phospholipase A2 is a novel biomarker of cardiovascular risk. Lp-PLA2 is indicative of microvascular dysfunction and atherosclerotic plaque development. Often associated with diabetic states, Lp-PLA2...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
   {
    id:134,
    category: "Blood & Iron Markers",
    name: "ABO Grouping and Rho(D) Typing",
    price: 25.00,
    description: "ABO Grouping and Rho(D) Typing are essential blood tests used to determine an individual's blood type and Rh factor. ABO Grouping identifies whether a person's blood group is A, B, AB, or O based on the presence or absence of A...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id:135,
    category: "Thyroid Function",
    name: "Thyroglobulin Antibody (TgAB)",
    price: 25.00,
    description: "A Thyroglobulin Antibody (TgAB) lab test measures the presence and level of antibodies against thyroglobulin in the blood. Thyroglobulin is a protein produced by the thyroid gland and is involved in the production of thyroid hormones. This tes...",
    lab: "Labcorp",
    labKey: "labcorp",
  },
  {
    id: 136,
    category: "Metabolic Health",
    name: "Creatine Kinase (CK), Total",
    price: 1.00,
    description: "This test measures the level of creatine kinase, an enzyme found primarily in muscle, heart, and brain tissue. CK is released into the bloodstream when muscle cells are damaged. It's commonly used to evaluate muscle injury, inflammation, or...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 137,
    category: "Lipids & Cardiovascular Risk",
    name: "Apolipoprotein Panel",
    price: 25.00,
    description: "This panel evaluates key apolipoproteins involved in lipid transport and cardiovascular health. It provides a deeper look into lipoprotein particle balance beyond standard cholesterol testing. **Apolipoprotein A1 (Apo A1)** The main protein...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 138,
    category: "Nutrient Status",
    name: "Magnesium, RBC",
    price: 21.00,
    description: "This test measures magnesium levels inside red blood cells, providing a **\"more accurate\"** reflection of long-term magnesium status than serum magnesium. Magnesium is involved in over 300 enzymatic reactions, including those...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 139,
    category: "Vitamins & Minerals",
    name: "Vitamin D, 25-Hydroxy, Total, Immunoassay",
    price: 22.00,
    description: "This test measures the level of 25-hydroxyvitamin D, the primary circulating form of vitamin D in the blood. It reflects total vitamin D status from sunlight, diet, and supplements. Vitamin D is critical for bone health, immune function, and...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 140,
    category: "Blood & Iron Markers",
    name: "Vitamin B12 (Cobalamin)",
    price: 12.00,
    description: "This test measures the level of vitamin B12 (cobalamin) in the blood. Vitamin B12 is essential for red blood cell formation, neurological function, and DNA synthesis. It plays a key role in energy metabolism and methylation pathways.",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 141,
    category: "Inflammation & Immune Markers",
    name: "Urinalysis, Complete",
    price: 7.00,
    description: "This panel analyzes both the chemical and microscopic properties of urine to provide a detailed assessment of kidney function, hydration status, infection, and metabolic health. It combines dipstick testing with microscopic examination of...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 142,
    category: "Kidney Function",
    name: "Uric Acid",
    price: 5.00,
    description: "This test measures the level of uric acid in the blood - a byproduct of purine metabolism. Uric acid is commonly associated with gout, but also serves as a marker of broader metabolic health. Elevated levels can be linked to insulin...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 143,
    category: "Thyroid Function",
    name: "TSH with Reflex to Free T4",
    price: 7.00,
    description: "This test first measures TSH, the hormone that regulates thyroid function. If TSH is found to be outside the normal range, the lab automatically performs a follow up test to measure Free T4 - the unbound, active form of thyroxine. This reflex approach...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 144,
    category: "Thyroid Function",
    name: "TSH",
    price: 6.00,
    description: "This test measures the level of TSH, a hormone produced by the pituitary gland that signals the thyroid to produce T3 and T4. It serves as the primary regulator of thyroid function and is commonly used to screen for thyroid imbalances.",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 145,
    category: "Thyroid Function",
    name: "T3, Free",
    price: 12.00,
    description: "This test measures the unbound, active form of triiodothyronine (T3) in the bloodstream. Free T3 is the most biologically active thyroid hormone and plays a central role in regulating metabolism, energy production, and cellular function.",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 146,
    category: "Vitamins & Minerals",
    name: "Transferrin",
    price: 14.00,
    description: "This test measures the level of transferrin, a protein produced by the liver that binds and transports iron in the blood. It reflects the body's iron carrying capacity and is commonly used to evaluate iron status and distinguish types of anemia.",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 147,
    category: "Thyroid Function",
    name: "T4 (Thyroxine), Total",
    price: 6.00,
    description: "This test measures the total amount of thyroxine (T4) in the blood, including both the protein-bound and free (active) forms. T4 is one of the primary hormones produced by the thyroid gland and plays a key role in regulating metabolism.",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 148,
    category: "Thyroid Function",
    name: "Thyroid Peroxidase Antibodies (TPO)",
    price: 7.00,
    description: "This test detects antibodies against thyroid peroxidase, an enzyme involved in thyroid hormone production. The presence of TPO antibodies may indicate an autoimmune response targeting the thyroid gland. Commonly used to assess for...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 149,
    category: "Thyroid Function",
    name: "Thyroid Panel with TSH",
    price: 24.00,
    description: "**Thyroid Panel (TSH, T3 Uptake, Total T4, Free T4 Index)** This panel assesses thyroid function and hormone transport dynamics using a combination of direct hormone levels and calculated indices. **TSH (Thyroid Stimulating Hormone)** A...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 150,
    category: "Hormones",
    name: "Testosterone, Free, Total, SHBG, Albumin...",
    price: 22.00,
    description: "This panel provides a detailed assessment of testosterone status by measuring total, free, and bioavailable testosterone along with key binding proteins. It includes the raw hormone values as well as the major transport proteins that influence...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 151,
    category: "Hormones",
    name: "Testosterone, Free",
    price: 30.00,
    description: "This test measures the free, bioactive portion of testosterone that is not bound to proteins like SHBG or albumin. Unlike total testosterone, this test looks specifically at the fraction available to tissues. It uses a direct analog immunoassay method - not...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 152,
    category: "Hormones",
    name: "Testosterone, Total, LC/MS",
    price: 20.00,
    description: "Testosterone is a steroid hormone produced primarily by the testes in males and in smaller amounts by the ovaries and adrenal glands in females. The Testosterone LC/MS (Mass Spectrometry) test is the gold standard for measuring total...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 153,
    category: "Thyroid Function",
    name: "T3 Uptake",
    price: 12.40,
    description: "T3 Uptake is a test that measures the binding capacity of thyroid binding proteins in the blood. It provides indirect information about thyroid hormone levels, helping to evaluate thyroid function and diagnose thyroid disorders. This test aids...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 154,
    category: "Hormones",
    name: "Sex Hormone Binding Globulin (SHBG)",
    price: 22.50,
    description: "### SHBG (Sex Hormone Binding Globulin) Serum lab test measures the level of SHBG in the blood. SHBG is a protein produced by the liver that binds to sex hormones, including testosterone and estrogen, regulating their availability and...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 155,
    category: "Thyroid Function",
    name: "T3 Reverse, LC/MS/MS",
    price: 50.00,
    description: "### A Reverse T3 (rT3), Serum lab test measures the level of reverse triiodothyronine in the blood. Reverse T3 is an inactive form of the thyroid hormone triiodothyronine (T3) that is produced when the body converts thyroxine (T4) into rT3...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 156,
    category: "Hormones",
    name: "PSA, Total with Reflex to PSA, Free",
    price: 15.00,
    description: "### A Prostate-Specific Antigen (PSA) lab test measures the level of PSA in the blood, a protein produced by the prostate gland. PSA levels can be elevated in conditions affecting the prostate gland, including benign prostatic hyperplasia (BPH)...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 157,
    category: "Hormones",
    name: "Prolactin",
    price: 16.50,
    description: "### Prolactin is a hormone produced by the pituitary gland that plays a key role in reproductive health, lactation, and metabolic functions. Elevated prolactin levels can indicate various health conditions, including hormonal imbalances and...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 158,
    category: "Hormones",
    name: "Progesterone, Immunoassay",
    price: 15.00,
    description: "### A Progesterone lab test measures the level of progesterone, a hormone produced primarily by the ovaries in females and, to a lesser extent, by the adrenal glands and placenta during pregnancy. Progesterone plays a crucial role i...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 159,
    category: "Kidney Function",
    name: "Phosphate (as Phosphorus)",
    price: 9.50,
    description: "### Phosphorus lab test measures the level of phosphorus in the blood, an essential mineral involved in many bodily functions, including bone formation, energy production, and the regulation of enzymes and hormones. This test often use...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 160,
    category: "Heavy Metals",
    name: "Mercury, Blood",
    price: 35.00,
    description: "Mercury is a heavy metal that can accumulate in the body through exposure to contaminated fish, dental amalgams, industrial sources, or certain environmental toxins. Elevated levels can affect the nervous system, kidneys, immune function...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 161,
    category: "Vitamins & Minerals",
    name: "Magnesium",
    price: 10.00,
    description: "### A Magnesium lab test measures the level of magnesium in the blood, an essential mineral involved in numerous bodily functions, including muscle and nerve function, blood glucose control, and bone health. This test helps diagnose magnesium...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 162,
    category: "Lipids & Cardiovascular Risk",
    name: "Cardio IQ LP-PLA2 Activity",
    price: 45.00,
    description: "### Lipoprotein-associated phospholipase A2 (Lp-PLA2) is a novel biomarker of cardiovascular risk. Lp-PLA2 is indicative of microvascular dysfunction and atherosclerotic plaque development. Often associated with diabetic states, LP-PLA...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 163,
    category: "Lipids & Cardiovascular Risk",
    name: "Lipoprotein (a)",
    price: 25.00,
    description: "This test measures the concentration of Lp(a), a genetically determined lipoprotein variant similar to LDL but with an added apolipoprotein(a) component. Unlike other cholesterol markers, Lp(a) levels are mostly inherited and do not...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 164,
    category: "Blood & Iron Markers",
    name: "Iron, TIBC and Ferritin Panel",
    price: 20.00,
    description: "This panel evaluates your body's iron status and storage capacity, which is essential for red blood cell production, energy levels, and overall metabolic function. It's especially useful in detecting iron deficiency, iron overload, or anemia...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 165,
    category: "Metabolic Health",
    name: "Insulin",
    price: 12.50,
    description: "### A fasting Insulin lab test measures the level of insulin in the blood after a period of fasting, typically overnight. Insulin is a hormone produced by the pancreas that regulates blood sugar levels by facilitating the uptake of glucose into cells for energy...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 166,
    category: "Hormones",
    name: "IGF-1, LC/MS",
    price: 45.00,
    description: "### An Insulin-Like Growth Factor 1 (IGF-1) lab test measures the level of IGF-1 in the blood, a hormone that plays a crucial role in growth and development, particularly during childhood and adolescence. IGF-1 is produced primarily in the liver in...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 167,
    category: "Blood & Iron Markers",
    name: "Homocysteine",
    price: 45.00,
    description: "A Homocysteine lab test measures the level of homocysteine in the blood, an amino acid produced during the metabolism of methionine, an essential amino acid obtained from the diet. Elevated levels of homocysteine are associated with an...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 168,
    category: "Metabolic Health",
    name: "Hemoglobin A1c",
    price: 10.50,
    description: "### A Hemoglobin A1c (HbA1c) lab test measures the average blood sugar levels over the past two to three months by assessing the percentage of glycated hemoglobin in the blood. This test is primarily used to diagnose and monitor...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 169,
    category: "Liver Function",
    name: "Gamma Glutamyl Transferase (GGT)",
    price: 7.00,
    description: "### A gamma glutamyl transferase (GGT) lab test measures the level of the GGT enzyme in the blood, which is involved in liver function and bile duct health. Elevated GGT levels can indicate liver damage or disease, bile duct obstruction, or...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 170,
    category: "Hormones",
    name: "FSH and LH",
    price: 20.50,
    description: "### Follicle-Stimulating Hormone (FSH) and Luteinizing Hormone (LH) are essential hormones involved in the regulation of the reproductive system. FSH (Follicle-Stimulating Hormone) FSH is crucial for the development of eggs in wom...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
  {
    id: 171,
    category: "Nutrient Status",
    name: "Folate, Serum",
    price: 11.50,
    description: "### Folate, also called folic acid or vitamin B9, is important for regenerating new tissues, producing new DNA, creating and recycling proteins, and making new blood cells. Abnormal folate levels can be a sign of a poor diet or nutritional...",
    lab: "Lab: Quest",
    labKey: "quest",
  },
];

const biomarkerCategories = [
  "Blood & Iron Markers",
  "Heavy Metals",
  "Hormones",
  "Inflammation & Immune Markers",
  "Kidney Function",
  "Lipid & Cardiovascular Risk",
  "Liver Function",
  "Metabolic Health",
  "Nutrient Status",
  "Thyroid Function",
  "Vitamins & Minerals",
];

const labs = [
  { key: "labcorp", name: "Labcorp" },
  { key: "quest", name: "Quest" },
  { key: "bioreference", name: "BioReference" },
];

// Product ID mapping for individual lab tests
const productIdMap: Record<string, number> = {
  "hs-CRP": 189,
  "T4 Free (FT4)": 190,
  "Dihydrotestosterone (DHT)": 191,
  "Copper, RBC": 192,
  "Methylenetetrahydrofolate Reductase (MTHFR), DNA": 193,
  "Fibrinogen Activity, Clauss": 194,
  "Anti-Mullerian Hormone (AMH), Male": 195,
  "Anti-Mullerian Hormone (AMH), Female": 196,
  "Micronutrients, Heavy Metals Panel, Blood": 197,
  "ANA Screen, IFA, Reflex Titer/Pattern, and Reflex to...": 198,
  "Prothrombin Time with INR": 199,
  "Creatine Kinase (CK), Total": 200,
  "Alpha-1-Antitrypsin, Quantitative": 201,
  "Ceruloplasmin": 202,
  "Smooth Muscle Antibody (SMA)": 203,
  "CBC (includes Differential and Platelets)": 204,
  "Fructosamine": 205,
  "Progesterone, LC/MS": 206,
  "Electrolyte Panel": 207,
  "Lactate Dehydrogenase (LD)": 208,
  "C-Peptide": 209,
  "Zinc": 210,
  "TMAO (Trimethylamine N-Oxide)": 211,
  "Testosterone, Free, Bioavailable and Total,...": 212,
  "Iodine, Serum/Plasma": 213,
  "Liver Function Panel": 214,
  "Growth Hormone (GH)": 215,
  "Estrogens, Total, Immunoassay": 216,
  "Estradiol, Ultrasensitive, LC/MS/MS": 217,
  "Cystatin C with Glomerular Filtration Rate, Estimated...": 218,
  "Renal Function Panel": 219,
  "Pregnenolone, LC/MS": 220,
  "Cardio IQ Lipoprotein Fractionation, Ion Mobility": 221,
  "Lipid Panel, Standard": 222,
  "Advanced Lipid Panel, Cardio IQ": 223,
  "Leptin": 224,
};

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "")
    .trim();
    
export default function IndividualLabs() {
  const navigate = useNavigate();
    // const { addToCart } = useCart();
  const { toast } = useToast();

  const [searchtext, setSearchtext] = useState("");
  const [sort, setSort] = useState("new");
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [labFilters, setLabFilters] = useState(["quest"]);

  // --- Mobile toggle states ---
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showLabDropdown, setShowLabDropdown] = useState(false);

  const toggleCategory = (c) => {
    setCategoryFilters((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  };

  const toggleLab = (l) => {
    setLabFilters((prev) =>
      prev.includes(l) ? prev.filter((x) => x !== l) : [...prev, l]
    );
  };

  const handleAddToCart = (panel: LabPanel) => {
    const productId = productIdMap[panel.name];
    
    addToCart({
      id: panel.id,
      name: panel.name,
      price: panel.price,
      image: testtube,
      ...(productId && { productId }),
    });

    toast({
      title: "Added to cart",
      description: `${panel.name} has been added to your cart.`,
    });
  };

  // ---------------- FILTER + SEARCH + SORT LOGIC ----------------
  let filtered = demoTests.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(searchtext.toLowerCase()) ||
      t.category.toLowerCase().includes(searchtext.toLowerCase());

    const matchesCategory =
      categoryFilters.length === 0 || categoryFilters.includes(t.category);

    const matchesLab =
      labFilters.length === 0 || labFilters.includes(t.labKey);

    return matchesSearch && matchesCategory && matchesLab;
  });

  if (sort === "az") filtered.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  const location = useLocation();

  const isPackages = location.pathname === "/package-labs";
  const isIndividual = location.pathname === "/individual-labs";


  // home slider navigation
    const { search } = useLocation();
  const params = new URLSearchParams(search);
  const preselectedCategory = params.get("category"); // e.g. Blood & Iron Markers

  useEffect(() => {
    if (preselectedCategory) {
      setCategoryFilters(["Blood & Iron Markers"]);
    }
  }, [preselectedCategory]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-full mt-20">

    <HeaderBlack />
        <div className="container mx-auto py-8 px-2 md:py-8 md:px-auto">
        {/* ---------------- TOP TABS ---------------- */}
         <div className="flex gap-3 mb-8 bg-gray-100 max-w-max p-[5px] rounded-lg">
          {/* PACKAGES */}
          <button
            onClick={() => navigate("/package-labs")}
            className={`
              px-6 py-2 rounded text-sm font-medium transition
              ${isPackages 
                ? "bg-black text-white rounded-lg" 
                : "bg-gray-100 text-gray-700 hover:bg-black/20"
              }
            `}
          >
            PACKAGES
          </button>

          {/* INDIVIDUAL / BUILD YOUR OWN */}
          <button
            onClick={() => navigate("/individual-labs")}
            className={`
              px-6 py-2 rounded text-sm font-medium transition
              ${isIndividual
                ? "bg-black text-white rounded-lg" 
                : "bg-gray-100 text-gray-700 hover:bg-black/20"
              }
            `}
          >
            INDIVIDUAL / BUILD YOUR OWN
          </button>

        </div>

        {/* ---------------- MOBILE FILTERS ABOVE SEARCH ---------------- */}
        <div className="md:hidden mb-4 space-y-3">

          {/* --- Biomarker Category Dropdown --- */}
          <div className="border rounded">
            <button
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              className="w-full flex justify-between items-center px-4 py-3 text-sm font-medium"
            >
              Biomarker Categories
              <ChevronDown className={`w-4 h-4 transition ${showCategoryDropdown ? "rotate-180" : ""}`} />
            </button>

            {showCategoryDropdown && (
              <div className="px-4 py-3 space-y-2">
                {biomarkerCategories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={categoryFilters.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    {cat}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* --- Labs Toggle Menu --- */}
          <div className="border rounded">
            <button
              onClick={() => setShowLabDropdown(!showLabDropdown)}
              className="w-full flex justify-between items-center px-4 py-3 text-sm font-medium"
            >
              Labs
              <ChevronDown className={`w-4 h-4 transition ${showLabDropdown ? "rotate-180" : ""}`} />
            </button>

            {showLabDropdown && (
              <div className="px-4 py-3 space-y-2">
                {labs.map((l) => (
                  <label key={l.key} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={labFilters.includes(l.key)}
                      onChange={() => toggleLab(l.key)}
                    />
                    {l.name}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ---------------- Search + Sort ---------------- */}
        <div className="flex justify-end items-center mb-6 gap-4 ">
          <div className="relative w-55">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search biomarkers..."
              value={searchtext}
              onChange={(e) => setSearchtext(e.target.value)}
              className="w-full border border-gray-300 rounded px-10 py-2 text-sm"
            />
          </div>

          <div className="flex  items-center gap-2 text-sm">
            <span className="text-gray-600 text-nowrap">Sort by</span>
            <select
              className="border border-gray-300 px-3 py-2 rounded text-sm "
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="new">New</option>
              <option value="az">A – Z</option>
              <option value="low">Price Low → High</option>
              <option value="high">Price High → Low</option>
            </select>
          </div>
        </div>

        {/* ---------------- Main Layout ---------------- */}
        <div className="flex gap-2">

          {/* ------------- Desktop Sidebar ------------- */}
          <div className="hidden md:block col-span-3  rounded p-4 h-max min-w-48 w-[19%]">

            <div className="flex justify-between items-center mb-3 border-b border-black">
              <h3 className="font-semibold pb-[6px]">Filter</h3>
              <button
                className="text-xs text-black"
                onClick={() => {
                  setCategoryFilters([]);
                  setLabFilters([]);
                }}
              >
                Clear
              </button>
            </div>

            <h4 className="text-md font-semibold mb-2">Biomarker Categories</h4>

            <div className="space-y-2 mb-6">
              {biomarkerCategories.map((cat) => (
                <label key={cat} className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={categoryFilters.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>

            <h4 className="text-md font-semibold mb-2">Labs</h4>

            <div className="space-y-2">
              {labs.map((l) => (
                <label key={l.key} className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={labFilters.includes(l.key)}
                    onChange={() => toggleLab(l.key)}
                  />
                  {l.name}
                </label>
              ))}
            </div>
          </div>

          {/* ------------- Product Grid ------------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {filtered.length === 0 ? (
              <p className="col-span-3 text-center text-sm text-gray-600 py-10">
                No results found
              </p>
            ) : (
              filtered.map((test) => (
              <div key={test.id} className="p-2">

                <div className="flex mb-3">
                  <div className="h-20 w-20 bg-[#e9ff00] text-black rounded-lg flex items-center justify-center">
                    <TestTubeDiagonal className="h-7 w-7 " />
                  </div>
                </div>

                <p className="inline-block bg-black/20 text-xs px-2 py-1 mb-2 text-md font-bold">
                  {test.category}
                </p>

                <div className="flex justify-between mb-4">
                  <div className="flex-1 min-h-12 flex items-start">
                    <h3 className=" text-[18px]  line-clamp-3 leading-tight break-words text-black">{test.name}</h3>
                  </div>
                  <p className="text-xl font-semibold">${test.price.toFixed(2)}</p>
                </div>
                <p className="text-base text-black  mb-2">Lab:{test.lab}</p>

                <p className="text-xs text-gray-700 mt-2 mb-4 line-clamp-4">
                  {test.description}
                </p>
              
                <Button
                  onClick={() =>
                    navigate(`/individual-labs/${slugify(test.name)}`, {
                      state: { test },   // <----- passing full data
                    })
                  }
                  className="w-full bg-white text-black border border-black py-2 rounded text-sm font-semibold mb-2"
                >
                  Learn More
                </Button>
                <Button 
                    className="w-full bg-black text-white py-2 rounded text-sm"
                    onClick={() => handleAddToCart(test)}
                  >
                    Add to Cart
                  </Button>
              </div>
               ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
