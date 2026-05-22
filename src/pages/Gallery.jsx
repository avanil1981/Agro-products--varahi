import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, ZoomIn, Image, Sparkles } from 'lucide-react';
import { gallery } from '../data/agroData';
import SEO from '../components/SEO';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "Products", "Packaging", "Warehouse", "Container Loading", "Farm Sourcing", "Quality Inspection"];

  const filteredGallery = activeFilter === "all"
    ? gallery
    : gallery.filter(item => item.category === activeFilter);

  return (
    <div className="bg-cream-bg/40 min-h-screen pb-20">
      <SEO 
        title="Procurement & Export Cargo Gallery"
        description="Browse our crop procurement, custom packaging, climate-controlled warehousing, and secure container shipping photos in Sri Varahi Agro Foods LLP's operations gallery."
        keywords="crop sourcing gallery, agro packaging photos, shipping logistics images, Indian agriculture export warehouse, wholesale food supply terminal"
      />
      
      {/* 1. Page Hero Header */}
      <section className="relative bg-gradient-to-br from-primary-green to-dark-green text-white py-20 px-4 md:px-8 border-b-4 border-gold-accent text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F8F6F1_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.25em] text-gold-accent font-bold block"
          >
            PHOTO VAULT
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            Our Operations Gallery
          </motion.h1>
          <div className="w-20 h-1 bg-gold-accent mx-auto mt-4"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm text-cream-bg/70 max-w-xl mx-auto font-light leading-relaxed"
          >
            Visual highlights of our premium sourcing sites, advanced sorting warehouses, high-strength packaging, and supervised ocean container loading.
          </motion.p>
        </div>
      </section>

      {/* 2. Gallery Filter Strip */}
      <section className="bg-white py-5 px-4 border-b border-gold-accent/10 sticky top-[72px] md:top-[88px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-primary-green shrink-0">
            <Image className="w-4 h-4 text-gold-accent" />
            <span className="text-xs font-bold uppercase tracking-wider">Filter Photos</span>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none justify-start md:justify-end">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-xs py-2 px-4 rounded-full border transition-all shrink-0 font-medium ${
                  activeFilter === filter
                    ? "bg-primary-green text-white border-gold-accent"
                    : "bg-cream-bg text-dark-text border-transparent hover:bg-cream-bg/85"
                }`}
              >
                {filter === "all" ? "All Photos" : filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Photos Grid */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="bg-white rounded-3xl overflow-hidden border border-cream-bg shadow-sm hover:shadow-lg hover:border-gold-accent/20 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
              <div className="relative h-56 overflow-hidden bg-cream-bg">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover overlay with Lucide zoom icon */}
                <div className="absolute inset-0 bg-dark-green/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="bg-white/95 p-3 rounded-full text-primary-green shadow-md transform scale-90 group-hover:scale-100 transition-all">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                <span className="absolute top-3.5 left-3.5 bg-white/90 text-primary-green font-bold text-[8px] uppercase tracking-wider px-2.5 py-1.5 rounded-lg z-20 border border-gold-accent/10 shadow-sm">
                  {item.category}
                </span>
              </div>
              <div className="p-5 flex items-center justify-between">
                <h3 className="font-serif text-sm font-bold text-dark-green line-clamp-1">{item.title}</h3>
                <Sparkles className="w-3.5 h-3.5 text-gold-accent shrink-0 ml-2" />
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>

        {filteredGallery.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-cream-bg">
            <p className="text-xs text-soft-gray font-light">No photographs uploaded in this segment.</p>
          </div>
        )}
      </section>

      {/* 4. Photo Lightbox Modal Overlay (Vanilla React portal styling) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button top right */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Picture Box */}
          <div 
            className="max-w-4xl w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl relative"
            onClick={(e) => e.stopPropagation()} // Stop bubbling
          >
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[75vh] object-contain rounded-2xl"
            />
            <span className="absolute top-4 left-4 bg-primary-green text-gold-accent font-bold text-[8px] uppercase tracking-wider px-3 py-1.5 rounded-full">
              {selectedImage.category}
            </span>
          </div>

          {/* Title bar bottom */}
          <div className="text-center mt-6 text-white max-w-xl">
            <h3 className="font-serif text-lg font-bold tracking-wide">{selectedImage.title}</h3>
            <p className="text-[10px] uppercase tracking-widest text-gold-accent mt-1.5">Sri Varahi Agro Foods LLP Operations</p>
          </div>
        </div>
      )}

    </div>
  );
}
