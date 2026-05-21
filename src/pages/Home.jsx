import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Globe2, Truck, Award, Package2, HeartHandshake, Leaf, FileText, ShieldCheck } from 'lucide-react';
import { categories, products } from '../data/agroData';
import Counter from '../components/Counter';

// Fade-up animation options
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  // Background Image Carousel Slides using custom high-fidelity crop assets
  const slides = [
    '/hero_banner.jpg',
    '/basumathirice-hero.png',
    '/chilli-hero.png',
    '/coffee beans -hero (1).png',
    '/IR-64-Hero.png',
    '/Spices-hero.png'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Transition every 5 seconds (more responsive and premium)
    return () => clearInterval(interval);
  }, [slides.length]);

  // Get 8 featured products
  const featuredProducts = products.filter(p => 
    ["basmati-rice", "ir-64-rice", "cumin-seeds", "green-cardamom", "turmeric-powder", "fresh-onion", "fresh-green-chilli", "fresh-mango"].includes(p.slug)
  ).slice(0, 8);

  const trustItems = [
    { 
      title: "PREMIUM QUALITY", 
      desc: "Carefully sourced and quality checked", 
      icon: Leaf 
    },
    { 
      title: "GLOBAL EXPORT", 
      desc: "Supplying worldwide with trusted service", 
      icon: Globe2 
    },
    { 
      title: "SAFE PACKAGING", 
      desc: "Hygienic packaging to ensure product quality", 
      icon: Package2 
    },
    { 
      title: "TIMELY DELIVERY", 
      desc: "On-time shipments every time", 
      icon: Truck 
    },
    { 
      title: "CUSTOMER TRUST", 
      desc: "Building long term relationships", 
      icon: HeartHandshake 
    }
  ];

  return (
    <div className="bg-cream-bg/40 min-h-screen">
      
      {/* 1. Hero Section with Sliding Images & Left Aligned Clear Content */}
      <section className="relative overflow-hidden aspect-[16/9] lg:aspect-auto lg:h-[75vh] lg:min-h-[600px] flex items-center border-b border-gold-accent/15 bg-dark-green lg:bg-transparent">
        
        {/* Background Images Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 bg-[length:100%_100%] lg:bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url('${slides[currentSlide]}')` }}
            />
          </AnimatePresence>
        </div>

        {/* Brand Left-Sided Dark Green Gradient Overlay on 1st Slide */}
        <AnimatePresence>
          {currentSlide === 0 && (
            <motion.div
              key="hero-overlay-shade"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 z-10 bg-gradient-to-r from-dark-green/95 via-dark-green/60 to-transparent pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* Text Overlay Container sitting absolute directly on top of the background image */}
        <div className="absolute inset-0 z-20 flex items-center px-4 md:px-8 lg:px-16 py-4 lg:py-0">
          <div className="max-w-7xl w-full mx-auto">
            <div className="max-w-2xl lg:max-w-4xl text-left">
              
              <AnimatePresence mode="wait">
                {currentSlide === 0 && (
                  <motion.div 
                    key="hero-text-overlay"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-2 sm:space-y-4 lg:space-y-5 max-w-sm sm:max-w-xl lg:max-w-4xl"
                  >
                    
                    {/* Hero Heading in stunning mixed-case white and gold drop-shadowed typography */}
                    <h1 className="font-serif text-lg sm:text-4xl lg:text-[56px] font-extrabold tracking-tight leading-tight text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]">
                      <span className="block text-white">Premium Quality</span>
                      <span className="block text-gold-accent mt-1 sm:mt-2">Agro Products</span>
                      <span className="block text-white mt-1 sm:mt-2">From India to the World</span>
                    </h1>

                    {/* Gold Divider Accent Line */}
                    <div className="w-16 h-[2.5px] bg-gold-accent my-3 lg:my-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"></div>
                    
                    {/* Premium description in light cream typography with drop shadow */}
                    <p className="hidden sm:block text-xs lg:text-sm text-cream-bg/95 leading-relaxed font-normal font-sans max-w-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                      Exporter and supplier of premium Rice, Spices, Powders, Fresh Fruits, Vegetables and a wide range of agro products with trusted quality.
                    </p>
                    
                    {/* Actions */}
                    <div className="flex flex-row items-center gap-2 sm:gap-4 pt-1 sm:pt-2 font-sans">
                      <Link 
                        to="/products" 
                        className="bg-primary-green hover:bg-dark-green text-white font-bold text-[8px] sm:text-xs py-2 px-3 sm:py-4 sm:px-8 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 group border border-primary-green/20 uppercase tracking-wider"
                      >
                        <span>Explore Products</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300 text-white" />
                      </Link>
                      <Link 
                        to="/contact" 
                        className="border border-gold-accent hover:bg-gold-accent hover:text-dark-green text-gold-accent font-bold text-[8px] sm:text-xs py-2 px-3 sm:py-4 sm:px-8 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 group uppercase tracking-wider bg-transparent"
                      >
                        <span>Request Quotation</span>
                        <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-gold-accent group-hover:text-dark-green group-hover:scale-110 transition-transform duration-300" />
                      </Link>
                    </div>
                    
                  </motion.div>
                )}
              </AnimatePresence>
              
            </div>
          </div>
        </div>

        {/* Interactive Slide indicator dots for both mobile & desktop */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 lg:left-16 z-30 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-primary-green w-6' : 'bg-primary-green/30 hover:bg-primary-green/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </section>

 
      {/* 2. Quick Product Categories Scroller */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto relative z-20">
        <style dangerouslySetInnerHTML={{__html: `
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}} />
        
        <div 
          className="flex overflow-x-auto gap-4 md:grid md:grid-cols-5 md:gap-6 no-scrollbar"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {categories.filter(cat => ["rice-flours", "whole-spices", "powders", "fresh-vegetables", "fresh-fruits"].includes(cat.slug)).map((cat) => (
            <Link 
              key={cat.id} 
              to={`/products?category=${cat.slug}`}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-0 w-[85vw] md:w-auto aspect-[4/3] rounded-2xl overflow-hidden relative group shadow-md border border-gold-accent/10 flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Background Image */}
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              {/* Overlay Gradient at the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

              {/* Text Content */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-5 text-center flex flex-col items-center justify-end h-1/2">
                <h3 className="text-white text-base sm:text-lg lg:text-xl font-extrabold uppercase tracking-wider leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-sans">
                  {cat.name}
                </h3>
                <div className="w-8 h-[1px] bg-gold-accent my-1.5 opacity-60"></div>
                <p className="text-[10px] sm:text-xs text-cream-bg/95 font-medium tracking-wide leading-snug drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] font-sans">
                  {cat.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Trust Bar with Light Cream Background and Gold Circle Outlines */}
      <section className="bg-[#FAF8F5] py-6 px-4 md:px-8 border-y border-gold-accent/15 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 items-center">
            {trustItems.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3.5 group text-left justify-start sm:justify-center lg:justify-start">
                {/* Gold Circle Outline Icon wrapper */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold-accent/60 flex items-center justify-center text-primary-green bg-white shadow-sm group-hover:scale-105 group-hover:border-gold-accent transition-all duration-300">
                  <item.icon className="w-5 h-5 text-primary-green" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-dark-green leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-soft-gray font-normal mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Stats Counter Bar */}
      <section className="bg-gradient-to-br from-primary-green to-dark-green py-16 px-4 border-y border-gold-accent/30 text-white relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F8F6F1_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-serif text-3xl md:text-5xl font-bold text-gold-accent">
              <Counter end={48} suffix="+" />
            </div>
            <p className="text-xs uppercase tracking-widest text-cream-bg/70 mt-2 font-medium">Premium Products</p>
          </div>
          <div>
            <div className="font-serif text-3xl md:text-5xl font-bold text-gold-accent">
              <Counter end={10} suffix="+" />
            </div>
            <p className="text-xs uppercase tracking-widest text-cream-bg/70 mt-2 font-medium">Export Destinations</p>
          </div>
          <div>
            <div className="font-serif text-3xl md:text-5xl font-bold text-gold-accent">
              <Counter end={100} suffix="%" />
            </div>
            <p className="text-xs uppercase tracking-widest text-cream-bg/70 mt-2 font-medium">Quality Compliance</p>
          </div>
          <div>
            <div className="font-serif text-3xl md:text-5xl font-bold text-gold-accent">
              <Counter end={250} suffix="+" />
            </div>
            <p className="text-xs uppercase tracking-widest text-cream-bg/70 mt-2 font-medium">Happy Importers</p>
          </div>
        </div>
      </section>

      {/* 5. Featured Products */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-white/50 rounded-3xl my-10 border border-gold-accent/10 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-dark-green tracking-tight">
            FEATURED CROP EXPORTS
          </h2>
          <div className="w-24 h-1 bg-gold-accent mx-auto my-4"></div>
          <p className="text-sm text-soft-gray font-light">
            Our highest demanded products worldwide. Selected carefully for strict packaging standards and high chemical/aromatic integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((prod) => (
            <div 
              key={prod.id} 
              className="bg-white rounded-2xl overflow-hidden border border-cream-bg shadow-sm flex flex-col group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden bg-cream-bg">
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-primary-green text-gold-accent font-bold text-[8px] uppercase tracking-wider px-2 py-1 rounded">
                  {prod.category}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-dark-green leading-snug group-hover:text-primary-green transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-[11px] text-soft-gray mt-2 font-light line-clamp-2">
                    {prod.shortDescription}
                  </p>
                  
                  {/* Small specs summary */}
                  <div className="mt-3.5 space-y-1">
                    <div className="flex justify-between text-[10px] border-b border-cream-bg pb-1 text-soft-gray">
                      <span>Origin:</span>
                      <span className="font-semibold text-dark-green">{prod.specTable.Origin || "India"}</span>
                    </div>
                    <div className="flex justify-between text-[10px] border-b border-cream-bg pb-1 text-soft-gray">
                      <span>MOQ:</span>
                      <span className="font-semibold text-dark-green">{prod.moq}</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 mt-4 grid grid-cols-2 gap-3 border-t border-cream-bg">
                  <Link 
                    to={`/products/${prod.slug}`} 
                    className="text-center bg-cream-bg hover:bg-gold-accent hover:text-white text-dark-green font-semibold text-[10px] py-2 px-3 rounded-lg transition-colors"
                  >
                    View Details
                  </Link>
                  <Link 
                    to="/contact" 
                    className="text-center bg-primary-green hover:bg-dark-green text-white font-semibold text-[10px] py-2 px-3 rounded-lg transition-colors border border-gold-accent/20"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-dark-green tracking-tight">
            WHY OVERSEAS BUYERS TRUST US
          </h2>
          <div className="w-24 h-1 bg-gold-accent mx-auto my-4"></div>
          <p className="text-sm text-soft-gray font-light">
            We are dedicated to establishing seamless supply relationships with international importers through ethical conduct and state-of-the-art grading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold-accent/5 flex items-start space-x-4 hover:shadow-md transition-all">
            <div className="bg-primary-green/10 p-3 rounded-xl text-primary-green shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-dark-green">Premium Quality Sourcing</h3>
              <p className="text-xs text-soft-gray mt-2 leading-relaxed font-light">
                Direct connections with farm clusters ensure we access superior grades of rice, high-curcumin turmeric, and single-origin coffee.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold-accent/5 flex items-start space-x-4 hover:shadow-md transition-all">
            <div className="bg-primary-green/10 p-3 rounded-xl text-primary-green shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-dark-green">Export Documentation Support</h3>
              <p className="text-xs text-soft-gray mt-2 leading-relaxed font-light">
                We handle SGS/phyto-sanitary certifications, container stuffing reports, export customs clearance, and global bill of lading routing.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold-accent/5 flex items-start space-x-4 hover:shadow-md transition-all">
            <div className="bg-primary-green/10 p-3 rounded-xl text-primary-green shrink-0">
              <Package2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-dark-green">Customized Packaging</h3>
              <p className="text-xs text-soft-gray mt-2 leading-relaxed font-light">
                We deliver robust private label branding options, vacuum retail boxes, and high-strength multi-wall shipping bags to match local parameters.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold-accent/5 flex items-start space-x-4 hover:shadow-md transition-all">
            <div className="bg-primary-green/10 p-3 rounded-xl text-primary-green shrink-0">
              <Star className="w-6 h-6 text-gold-accent" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-dark-green">Competitive Pricing</h3>
              <p className="text-xs text-soft-gray mt-2 leading-relaxed font-light">
                Our automated cleaning plants and close relationship with cultivators eliminate intermediaries, leading to highly optimized pricing structures.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold-accent/5 flex items-start space-x-4 hover:shadow-md transition-all">
            <div className="bg-primary-green/10 p-3 rounded-xl text-primary-green shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-dark-green">Timely Delivery</h3>
              <p className="text-xs text-soft-gray mt-2 leading-relaxed font-light">
                Strong collaboration with seaport CFS networks and global shipping lines ensures that standard lead times are strictly maintained.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold-accent/5 flex items-start space-x-4 hover:shadow-md transition-all">
            <div className="bg-primary-green/10 p-3 rounded-xl text-primary-green shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-dark-green">Long-Term Partnership</h3>
              <p className="text-xs text-soft-gray mt-2 leading-relaxed font-light">
                We values transparency and clear compliance reporting, establishing a high-trust platform for repeat wholesale orders.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Export & Domestic Markets Overview Panel */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-cream-bg to-white border-y border-gold-accent/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Panel: Export Market */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gold-accent/15 space-y-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-gold-accent uppercase font-bold text-[10px] tracking-widest">
                <Globe2 className="w-4 h-4" />
                <span>Export Operations</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-dark-green mt-2">
                Supplying Premium Agro to Global Buyers
              </h3>
              <p className="text-xs text-soft-gray font-light mt-3 leading-relaxed">
                Sri Varahi Agro Foods LLP exports superior-grade Indian crops directly to overseas port hubs with comprehensive container stuffing, documentation validation, and transit insurance.
              </p>
              
              <div className="mt-6">
                <h4 className="text-xs font-bold text-primary-green uppercase tracking-wide">Key Export Markets:</h4>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["UAE", "Singapore", "Malaysia", "Saudi Arabia", "Qatar", "Oman", "Africa", "Europe", "Southeast Asia"].map((m, i) => (
                    <span key={i} className="bg-cream-bg text-dark-green text-[10px] py-1.5 px-3 rounded-full border border-gold-accent/20 font-medium">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-cream-bg">
              <Link to="/export" className="text-xs font-bold text-primary-green hover:text-gold-accent flex items-center">
                Explore Export Infrastructure <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>

          {/* Right Panel: Domestic Market */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gold-accent/15 space-y-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-primary-green uppercase font-bold text-[10px] tracking-widest">
                <Truck className="w-4 h-4" />
                <span>Domestic Supply Chain</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-dark-green mt-2">
                Wholesale Agro Supplies Across India
              </h3>
              <p className="text-xs text-soft-gray font-light mt-3 leading-relaxed">
                We supply top-grade basmati grains, pulses, fresh red onions, garlic bulk packs, and millets to leading national supermarkets, food processors, Horeca networks, and agricultural distributors.
              </p>
              
              <div className="mt-6">
                <h4 className="text-xs font-bold text-primary-green uppercase tracking-wide">Heavy-Duty Packaging Options:</h4>
                <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                  {["1kg Pack", "5kg bag", "10kg bag", "25kg bag", "26kg bag", "50kg bag"].map((p, i) => (
                    <div key={i} className="bg-primary-green/5 text-primary-green text-[10px] py-2 rounded-lg border border-primary-green/10 font-semibold">
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-cream-bg">
              <Link to="/domestic" className="text-xs font-bold text-primary-green hover:text-gold-accent flex items-center">
                Explore Domestic Solutions <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Call to Action Banner (CTA) */}
      <section className="bg-dark-green py-20 px-4 md:px-8 border-t-2 border-gold-accent text-white relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F8F6F1_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight">
            Looking for Bulk Orders or Export Inquiries?
          </h2>
          <p className="text-xs md:text-sm text-cream-bg/70 leading-relaxed font-light max-w-xl mx-auto">
            Get in touch with our expert trade team today. We provide detailed pricing quotes, loading configurations, and custom private label packaging quotes on request.
          </p>
          <div className="pt-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center space-x-2 bg-gold-accent text-dark-green font-bold text-sm py-4 px-10 rounded-full hover:bg-gold-light hover:text-dark-green transition-all shadow-lg hover:shadow-xl group"
            >
              <span>Request a Quotation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
