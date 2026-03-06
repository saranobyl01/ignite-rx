import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Search, ChevronDown, TestTubeDiagonal } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import testtube from "../assets/yellow_testtube.png"
import heroLabsImage from "@/assets/hero-labs.webp";
import { Header } from "@/components/Header";

// ---------------- DEMO DATA ----------------

interface LabPanel {
  id: string;
  name: string;
  price: number;
  lab: string;
  category: string;
  description: string;
  labKey: string;

}
const demoTests : LabPanel[] = [
 {
    id: "basic-male-labcorp",
    name: "Basic Male Panel",
    link: "/labs/basic-male-panel",
    price: 335,
    lab: "Labcorp",
    labKey: "labcorp",
    category: "Male Packages",
    description: "The Basic Male Panel is a comprehensive diagnostic tool designed to give a deep, data-driven look into a man's overall health. With **58 biomarkers**, this panel evaluates core...",
    biomarkers: 58
  },
  {
    id: "intermediate-male-labcorp",
    name: "Intermediate Male Panel",
    link: "/labs/intermediate-male-panel",
    price: 545,
    lab: "Labcorp",
    labKey: "labcorp",
    category: "Male Packages",
    description: "The Intermediate Male Panel builds on the foundation of the Basic, adding deeper insight into inflammation, nutrient status, and advanced hormone profiling. With expanded markers like apoB, lipoprotein (a), vitamin D, ferritin, hsCRP..."
  },
  {
    id: "advanced-male-labcorp",
    name: "Advanced Male Panel",
    link: "/labs/advanced-male-panel",
    price: 795,
    lab: "Labcorp",
    labKey: "labcorp",
    category: "Male Packages",
    description: "The Advanced Male Panel is our most comprehensive option—designed for high performers, biohackers, and men who want zero blind spots. It builds on the Intermediate by adding deeper insight into adrenal function, detox pathways..."
  },
  {
    id: "basic-female-labcorp",
    name: "Basic Female Panel",
    link: "/labs/basic-female-panel",
    price: 335,
    lab: "Labcorp",
    labKey: "labcorp",
    category: "Female Packages",
    description: "The Basic Female Panel is a comprehensive diagnostic tool designed to give a deep, data-driven look into a woman's overall health. With **58 biomarkers**, this panel evaluates core systems—including hormones...",
    biomarkers: 58
  },
  {
    id: "intermediate-female-labcorp",
    name: "Intermediate Female Panel",
    link:"/labs/intermediate-female-panel",
    price: 545,
    lab: "Labcorp",
    labKey: "labcorp",
    category: "Female Packages",
    description: "The Intermediate Female Panel builds on the foundation of the Basic, offering deeper insight into inflammation, nutrient status, and advanced hormone profiling. With expanded markers like **apoB**, **lipoprotein (a)**..."
  },
  {
    id: "advanced-female-labcorp",
    name: "Advanced Female Panel",
    link:"/labs/advanced-female-panel",
    price: 795,
    lab: "Labcorp",
    labKey: "labcorp",
    category: "Female Packages",
    description: "The Advanced Female Panel is our most comprehensive option—built for high performers, biohackers, and women who want no blind spots. It expands on the Intermediate by adding deeper insight into adrenal function, hormone..."
  },
  // Quest panels (different pricing and additional TRT panels)
  {
    id: "basic-male-quest",
    name: "Basic Male Panel (Quest)",
    link: "/labs/basic-male-panel-quest",
    price: 250,
    lab: "Quest",
    labKey: "quest",
    category: "Male Packages",
    description: "The Basic Male Panel is a comprehensive diagnostic tool designed to give a deep, data-driven look into a man’s overall health. With 58 biomarkers, this panel evaluates core systems—including hormones, metabolism, cardiovascular risk, liver...",
    biomarkers: 58
  },
  {
    id: "intermediate-male-quest",
    name: "Intermediate Male Panel (Quest)",
    link:"/labs/intermediate-male-panel-quest",
    price: 450,
    lab: "Quest",
    labKey: "quest",
    category: "Male Packages",
    description: "The Intermediate Male Panel builds on the foundation of the Basic, adding deeper insight into inflammation, nutrient status, and advanced hormone profiling. With expanded markers like apoB, lipoprotein (a), vitamin D, ferritin, hsCRP, GGT..."
  },
  {
    id: "advanced-male-quest",
    name: "Advanced Male Panel (Quest)",
    link:"/labs/advanced-male-panel-quest",
    price: 595,
    lab: "Quest",
    labKey: "quest",
    category: "Male Packages",
    description: "The Advanced Male Panel is our most comprehensive option—designed for high performers, biohackers, and men who want zero blind spots. It builds on the Intermediate by adding deeper insight into adrenal function, detox pathways..."
  },
  {
    id: "trt-follow-up-quest",
    name: "TRT Follow Up",
    link:"/labs/trt-follow-up-panel",
    price: 75,
    lab: "Quest",
    labKey: "quest",
    category: "Male Packages",
    description: "Everything in the TRT Screening Panel minus LH and FSH. The TRT Follow Up Panel is a purpose-built lab panel designed to evaluate key hormones, blood health, and organ function needed for adjusting or maintaining..."
  },
  {
    id: "trt-screening-quest",
    name: "TRT Screening Panel",
    link:"/labs/trt-screening-panel",
    price: 99,
    lab: "Quest",
    labKey: "quest",
    category: "Male Packages",
    description: "The TRT Screening Panel is a purpose-built lab panel designed to evaluate key hormones, blood health, and organ function before starting or adjusting testosterone therapy. It includes..."
  },
  {
    id: "basic-female-quest",
    name: "Basic Female Panel (Quest)",
    link:"basic-female-panel-quest",
    price: 250,
    lab: "Quest",
    labKey: "quest",
    category: "Female Packages",
    description: "The Basic Female Panel is a comprehensive diagnostic tool designed to give a deep, data-driven look into a woman's overall health. With **49 biomarkers**, this panel evaluates core systems—including hormones, metabolism, cardiovascular risk....",
    biomarkers: 49
  },
  {
    id: "intermediate-female-quest",
    name: "Intermediate Female Panel (Quest)",
    link:"/labs/intermediate-female-panel-quest",
    price: 450,
    lab: "Quest",
    labKey: "quest",
    category: "Female Packages",
    description: "The Intermediate Female Panel builds on the foundation of the Basic, offering deeper insight into inflammation, nutrient status, and advanced hormone profiling. With expanded markers like **apoB**, **lipoprotein (a)**, **vitamin..."
  },
  {
    id: "advanced-female-quest",
    name: "Advanced Female Panel (Quest)",
    link:"/labs/advanced-female-panel-quest",
    price: 595,
    lab: "Quest",
    labKey: "quest",
    category: "Female Packages",
    description: "The Advanced Female Panel is our most comprehensive option—built for high performers, biohackers, and women who want no blind spots. It expands on the Intermediate by adding deeper insight..."
  },
];

const biomarkerCategories = [
  "Female Packages",
  "Male Packages"
];

const labs = [
  { key: "labcorp", name: "Labcorp" },
  { key: "quest", name: "Quest" },
  { key: "bioreference", name: "BioReference" },
];

// Product ID mapping for Quest panels
const productIdMap: Record<string, number> = {
  "Basic Male Panel (Quest)": 181,
  "Intermediate Male Panel (Quest)": 182,
  "Advanced Male Panel (Quest)": 183,
  "TRT Follow Up": 184,
  "TRT Screening Panel": 185,
  "Basic Female Panel (Quest)": 186,
  "Intermediate Female Panel (Quest)": 187,
  "Advanced Female Panel (Quest)": 188,
};

export default function PackageLabs() {
  const navigate = useNavigate();
    // const { addToCart } = useCart();
  const { toast } = useToast();

  const [search, setSearch] = useState("");
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
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase());

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

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-full mt-20">
      <Header variant="black" />

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
              Lab Categories
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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

            <h4 className="text-md font-semibold mb-2">Lab Categories</h4>

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
                  <h3 className="text-xl font-semibold min-h-12 leading-tight">{test.name}</h3>
                  <p className="text-xl font-semibold">${test.price.toFixed(2)}</p>
                </div>
                <p className="text-lg text-black font-semibold mb-2">Lab:{test.lab}</p>

                <p className="text-xs text-gray-700 mt-2 mb-4">{test.description}</p>
              
                <Button
                  onClick={() => {
                      if (test.link) navigate(test.link);
                    }}
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
