import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Star, Globe, ArrowRight, CornerDownRight, Search } from 'lucide-react';
import { products, categories } from '../data/agroData';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMarket, setSelectedMarket] = useState("export");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sync selectedCategory, selectedMarket, and searchQuery with searchParams
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory("all");
    }

    const marketParam = searchParams.get('market');
    if (marketParam) {
      setSelectedMarket(marketParam);
    } else {
      setSelectedMarket("export");
    }

    const qParam = searchParams.get('q');
    if (qParam !== null) {
      setSearchQuery(qParam);
    }
  }, [searchParams]);

  const handleCategoryChange = (slug) => {
    const params = Object.fromEntries([...searchParams]);
    if (slug === "all") {
      delete params.category;
    } else {
      params.category = slug;
    }
    setSearchParams(params);
    setSelectedCategory(slug);
  };

  const handleMarketChange = (market) => {
    const params = Object.fromEntries([...searchParams]);
    if (market === "export") {
      delete params.market;
    } else {
      params.market = market;
    }
    setSearchParams(params);
    setSelectedMarket(market);
  };

  // Filtered list by Category AND Market AND Search Query
  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === "all" || p.categorySlug === selectedCategory;
    
    let matchesMarket = true;
    if (selectedMarket === "export") matchesMarket = p.exportAvailability === true;
    if (selectedMarket === "domestic") matchesMarket = p.domesticAvailability === true;
    
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory && matchesMarket;

    // Search matches against: name, category, shortDescription, keyPoints, and specTable values
    const matchesName = p.name.toLowerCase().includes(query);
    const matchesCategoryName = p.category.toLowerCase().includes(query);
    const matchesDesc = p.shortDescription.toLowerCase().includes(query);
    
    const matchesKeyPoints = p.keyPoints && p.keyPoints.some(pt => pt.toLowerCase().includes(query));
    
    const matchesSpecs = p.specTable && Object.entries(p.specTable).some(([key, val]) => 
      key.toLowerCase().includes(query) || String(val).toLowerCase().includes(query)
    );

    return matchesCategory && matchesMarket && (matchesName || matchesCategoryName || matchesDesc || matchesKeyPoints || matchesSpecs);
  });

  return (
    <div className="bg-cream-bg/40 min-h-screen">
      
      {/* 1. Page Hero Header */}
      <section className="relative bg-gradient-to-br from-primary-green to-dark-green text-white py-20 px-4 md:px-8 border-b-4 border-gold-accent text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F8F6F1_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold-accent font-bold block">OUR RANGE</span>
          <h1 className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight">
            Premium Indian Agro Commodities
          </h1>
          <div className="w-20 h-1 bg-gold-accent mx-auto mt-4"></div>
          <p className="text-xs md:text-sm text-cream-bg/70 max-w-xl mx-auto font-light leading-relaxed">
            Directly sourced, double-cleaned, and packed under absolute safety criteria for domestic wholesale and worldwide export operations.
          </p>
        </div>
      </section>

      {/* 2. Category Filters Navigation Strip */}
      <section className="bg-white py-4 px-4 border-b border-gold-accent/10 sticky top-[72px] md:top-[88px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <div className="flex items-center space-x-2 text-primary-green shrink-0">
              <Filter className="w-4 h-4 text-gold-accent" />
              <span className="text-xs font-bold uppercase tracking-wider">Filter</span>
            </div>
            
            {/* Market Filter Toggle (Segmented Control) */}
            <div className="flex bg-cream-bg p-1 rounded-xl border border-gold-accent/15 shrink-0">
              {[
                { id: 'export', label: 'Export' },
                { id: 'domestic', label: 'Domestic' }
              ].map(market => (
                <button
                  key={market.id}
                  onClick={() => handleMarketChange(market.id)}
                  className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all ${
                    selectedMarket === market.id
                      ? "bg-primary-green text-white shadow-sm"
                      : "text-soft-gray hover:text-dark-text hover:bg-white/50"
                  }`}
                >
                  {market.label}
                </button>
              ))}
            </div>

            {/* Instant Search Bar Input */}
            <div className="relative flex-1 sm:w-56 min-w-[180px]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search name, origin, spec..."
                className="w-full bg-cream-bg text-dark-text text-xs pl-8 pr-8 py-2.5 rounded-xl border border-gold-accent/15 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green transition-all"
              />
              <Search className="absolute left-2.5 top-3 w-3.5 h-3.5 text-soft-gray" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-2.5 text-soft-gray hover:text-dark-text focus:outline-none"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none justify-start lg:ml-auto">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`text-xs py-2 px-4 rounded-full border transition-all shrink-0 font-medium ${
                selectedCategory === "all"
                  ? "bg-primary-green text-white border-gold-accent"
                  : "bg-cream-bg text-dark-text border-transparent hover:bg-cream-bg/80"
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`text-xs py-2 px-4 rounded-full border transition-all shrink-0 font-medium ${
                  selectedCategory === cat.slug
                    ? "bg-primary-green text-white border-gold-accent"
                    : "bg-cream-bg text-dark-text border-transparent hover:bg-cream-bg/80"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Products Grid */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        
        <div className="flex justify-between items-center mb-8 border-b border-cream-bg pb-4">
          <p className="text-xs text-soft-gray font-light">
            Showing <span className="font-bold text-dark-green">{filteredProducts.length}</span> premium crops
          </p>
          <div className="hidden sm:flex space-x-3 text-[10px] uppercase font-bold text-gold-accent">
            <span>Direct Sourcing</span>
            <span>•</span>
            <span>Premium Packing</span>
            <span>•</span>
            <span>SGS Inspected</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={prod.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-cream-bg flex flex-col justify-between group hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-cream-bg">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-primary-green text-gold-accent font-bold text-[8px] uppercase tracking-wider px-2 py-1 rounded border border-gold-accent/20">
                      {prod.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif text-base font-bold text-dark-green leading-snug group-hover:text-primary-green transition-colors pb-1 line-clamp-1">
                      {prod.name}
                    </h3>
                    <p className="text-[11px] text-soft-gray mt-2 font-light line-clamp-2 leading-relaxed">
                      {prod.shortDescription}
                    </p>

                    <div className="mt-4 space-y-2">
                      {prod.keyPoints && prod.keyPoints.slice(0, 3).map((pt, idx) => (
                        <div key={idx} className="flex items-center text-[10px] text-soft-gray font-light">
                          <CornerDownRight className="w-3 h-3 mr-2 text-gold-accent shrink-0" />
                          <span className="line-clamp-1">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="border-t border-cream-bg pt-4 space-y-2.5">
                    <div className="flex justify-between text-[10px] text-soft-gray font-light">
                      <span>Origin:</span>
                      <span className="font-semibold text-dark-green line-clamp-1 text-right">{prod.specTable.Origin || "India"}</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-soft-gray font-light pb-2">
                      <span>MOQ:</span>
                      <span className="font-semibold text-dark-green line-clamp-1 text-right">{prod.moq}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        to={`/products/${prod.slug}`}
                        className="text-center bg-cream-bg hover:bg-gold-accent hover:text-white text-dark-green font-semibold text-[10px] py-2 px-2.5 rounded-lg transition-colors flex items-center justify-center"
                      >
                        View Details
                      </Link>
                      <Link
                        to="/contact"
                        className="text-center bg-primary-green hover:bg-dark-green text-white font-semibold text-[10px] py-2 px-2.5 rounded-lg transition-colors border border-gold-accent/20 flex items-center justify-center"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-cream-bg shadow-sm">
            <p className="text-sm text-soft-gray font-light">No products found matching your filter or search query.</p>
          </div>
        )}

      </section>

    </div>
  );
}
