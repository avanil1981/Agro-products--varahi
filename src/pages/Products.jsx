import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Star, Globe, ArrowRight, CornerDownRight } from 'lucide-react';
import { products, categories } from '../data/agroData';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Sync selectedCategory with searchParams '?category=slug'
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory("all");
    }
  }, [searchParams]);

  const handleCategoryChange = (slug) => {
    if (slug === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: slug });
    }
    setSelectedCategory(slug);
  };

  // Filtered list
  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(p => p.categorySlug === selectedCategory);

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
      <section className="bg-white py-6 px-4 border-b border-gold-accent/10 sticky top-[72px] md:top-[88px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4">
          
          <div className="flex items-center space-x-2 text-primary-green shrink-0">
            <Filter className="w-4 h-4 text-gold-accent" />
            <span className="text-xs font-bold uppercase tracking-wider">Filter Crops</span>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none justify-start md:justify-end">
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
                    <h3 className="font-serif text-base font-bold text-dark-green leading-snug group-hover:text-primary-green transition-colors pb-1">
                      {prod.name}
                    </h3>
                    <p className="text-[11px] text-soft-gray mt-2 font-light line-clamp-2 leading-relaxed">
                      {prod.shortDescription}
                    </p>

                    <div className="mt-4 space-y-2">
                      {prod.keyPoints.slice(0, 3).map((pt, idx) => (
                        <div key={idx} className="flex items-center text-[10px] text-soft-gray font-light">
                          <CornerDownRight className="w-3 h-3 mr-2 text-gold-accent shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="border-t border-cream-bg pt-4 space-y-2.5">
                    <div className="flex justify-between text-[10px] text-soft-gray font-light">
                      <span>Origin:</span>
                      <span className="font-semibold text-dark-green">{prod.specTable.Origin || "India"}</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-soft-gray font-light pb-2">
                      <span>MOQ:</span>
                      <span className="font-semibold text-dark-green">{prod.moq}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        to={`/products/${prod.slug}`}
                        className="text-center bg-cream-bg hover:bg-gold-accent hover:text-white text-dark-green font-semibold text-[10px] py-2 px-2.5 rounded-lg transition-colors"
                      >
                        View Details
                      </Link>
                      <Link
                        to="/contact"
                        className="text-center bg-primary-green hover:bg-dark-green text-white font-semibold text-[10px] py-2 px-2.5 rounded-lg transition-colors border border-gold-accent/20"
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
            <p className="text-sm text-soft-gray font-light">No products found in this category.</p>
          </div>
        )}

      </section>

    </div>
  );
}
