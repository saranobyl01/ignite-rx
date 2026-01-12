import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, X } from 'lucide-react';
import med_tablet from "../assets/bottle.png";
import med_vial from "../assets/vial.png";

const productsData = [
  { 
    id: 1, 
    name: 'Enclomiphene', 
    category: 'Performance', 
    type: 'Tablet', 
    price: 99.00, 
    oldPrice: 115.00, 
    bestseller: true, 
    image: med_tablet, 
    desc: 'Enclomiphene is a selective estrogen receptor modulator...' 
    },
  { 
    id: 2, 
    name: 'Tirzepatide/Glycine/B12', 
    category: 'Weight Loss', 
    type: 'Injectable', 
    price: 299.00, 
    oldPrice: 350.00, 
    bestseller: true, 
    image: med_vial, 
    desc: 'This powerful blend combines Tirzepatide, Glycine, and B12...' 
  },
  { 
    id: 3, 
    name: 'Telmisartan', 
    category: 'Cardiovascular', 
    type: 'Tablet', 
    price: 39.00, 
    oldPrice: null, 
    bestseller: true, 
    image: med_tablet, 
    desc: 'Telmisartan is an angiotensin II receptor blocker...'
  },
  { 
    id: 4, 
    name: 'Enclomiphene', 
    category: 'Performance', 
    type: 'Tablet', 
    price: 99.00, 
    oldPrice: 115.00, 
    bestseller: true, 
    image: med_tablet, 
    desc: 'Enclomiphene is a selective estrogen receptor modulator...' 
    },
  { 
    id: 5, 
    name: 'Tirzepatide/Glycine/B12', 
    category: 'Weight Loss', 
    type: 'Injectable', 
    price: 299.00, 
    oldPrice: 350.00, 
    bestseller: true, 
    image: med_vial, 
    desc: 'This powerful blend combines Tirzepatide, Glycine, and B12...' 
  },
  { 
    id: 6, 
    name: 'Telmisartan', 
    category: 'Cardiovascular', 
    type: 'Tablet', 
    price: 39.00, 
    oldPrice: null, 
    bestseller: true, 
    image: med_tablet, 
    desc: 'Telmisartan is an angiotensin II receptor blocker...'
  },
  // Add more products as needed
];

export const TreatmentMain = () => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('New');
  const [selectedNeeds, setSelectedNeeds] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  // Filter Categories from design
  const needs = ['Cardiovascular', 'Weight Loss', 'Metabolic', 'Hair Loss', 'Skincare', 'Longevity', 'Lifestyle', 'Performance'];
  const types = ['Cream', 'Injectable', 'Spray', 'Capsule', 'Tablet'];

  const filteredProducts = useMemo(() => {
    return productsData
      .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
      .filter(p => selectedNeeds.length === 0 || selectedNeeds.includes(p.category))
      .filter(p => selectedTypes.length === 0 || selectedTypes.includes(p.type))
      .sort((a, b) => {
        if (sortBy === 'Price: Low to High') return a.price - b.price;
        if (sortBy === 'Price: High to Low') return b.price - a.price;
        return 0; // Default/New
      });
  }, [search, sortBy, selectedNeeds, selectedTypes]);

  const toggleFilter = (list, setList, item) => {
    setList(list.includes(item) ? list.filter(i => i !== item) : [...list, item]);
  };

  return (
    <div className="bg-white min-h-screen text-black pb-20">
      <div className="container mx-auto px-6">
        
        {/* Top Bar: Search and Sort */}
        <div className="flex flex-col md:flex-row justify-end items-center gap-4 py-8 border-b border-gray-100">
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full border border-gray-300 rounded-md py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-black"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500">Sort by</span>
            <select 
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>New</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-10">
          {/* Sidebar Filter */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">Filter</h3>
              <button 
                className="text-gray-400 text-sm hover:text-black"
                onClick={() => { setSelectedNeeds([]); setSelectedTypes([]); }}
              >Clear</button>
            </div>

            <div className="space-y-10">
              <FilterGroup title="By need" items={needs} activeItems={selectedNeeds} toggle={(i) => toggleFilter(selectedNeeds, setSelectedNeeds, i)} />
              <FilterGroup title="Treatment type" items={types} activeItems={selectedTypes} toggle={(i) => toggleFilter(selectedTypes, setSelectedTypes, i)} />
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="flex flex-col group">
                <div className="relative aspect-square bg-[#999999] mb-4 overflow-hidden">
                  {product.bestseller && (
                    <span className="absolute top-2 left-2 bg-[#ef0200] text-[10px] font-black uppercase px-2 py-1 z-10">Bestseller</span>
                  )}
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform" />
                </div>
                
                <div className="flex flex-col flex-grow">
                  <span className={`text-[10px] font-bold uppercase p-1 w-fit mb-2 ${getCatColor(product.category)}`}>
                    {product.category}
                  </span>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg leading-tight">{product.name}</h4>
                    <div className="text-right">
                      {product.oldPrice && <span className="block text-gray-400 line-through text-xs">${product.oldPrice.toFixed(2)}</span>}
                      <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-3 mb-6 leading-relaxed">{product.desc}</p>
                  <button className="w-full bg-black text-white font-bold uppercase py-4 text-xs tracking-widest mt-auto hover:bg-[#ef0200] hover:text-black transition-colors rounded-[4px]">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};

const FilterGroup = ({ title, items, activeItems, toggle }) => (
  <div>
    <h4 className="font-bold text-sm mb-4 uppercase tracking-tighter">{title}</h4>
    <div className="space-y-3">
      {items.map(item => (
        <label key={item} className="flex items-center gap-3 cursor-pointer group">
          <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${activeItems.includes(item) ? 'bg-black border-black' : 'border-gray-300 group-hover:border-black'}`}>
            {activeItems.includes(item) && <X size={10} className="text-white" />}
          </div>
          <input type="checkbox" className="hidden" checked={activeItems.includes(item)} onChange={() => toggle(item)} />
          <span className={`text-sm tracking-tight ${activeItems.includes(item) ? 'font-bold' : 'text-gray-500'}`}>{item}</span>
        </label>
      ))}
    </div>
  </div>
);

const getCatColor = (cat) => {
  const colors = {
    'Performance': 'bg-blue-500 text-white',
    'Weight Loss': 'bg-purple-600 text-white',
    'Cardiovascular': 'bg-red-500 text-white',
  };
  return colors[cat] || 'bg-gray-200 text-black';
};