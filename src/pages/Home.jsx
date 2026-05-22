import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Globe2, Truck, Award, Package2, HeartHandshake, Leaf, FileText, ShieldCheck, ChevronLeft, ChevronRight, Anchor, Plane, Ship, CheckCircle2, MapPin, Sparkles, BookOpen, Quote, ArrowUpRight, Shield, Cog, FlaskConical, Store } from 'lucide-react';
import { categories, products } from '../data/agroData';
import Counter from '../components/Counter';
import SEO from '../components/SEO';

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

// ─── Zig-Zag Process Timeline Component ─────────────────────────────────────
const ZZ_STEPS = [
  { step:'01', title:'Farmer Sourcing',  desc:'Procured directly from NGO-supported agricultural farm clusters across India.',  icon:'🌾', nodeIcon: Leaf,        color:'#059669', img:'/Rice-Cat.png' },
  { step:'02', title:'Quality Check',   desc:'Rigorous lab testing — moisture, chemical residue & purity on every batch.',     icon:'🔬', nodeIcon: FlaskConical, color:'#0d9488', img:'/Spicies-cat.png' },
  { step:'03', title:'Processing',      desc:'Milled, polished, de-stoned & dry-cleaned under strict hygiene protocols.',       icon:'⚙️',  nodeIcon: Cog,         color:'#15803d', img:'/powders-cat.png' },
  { step:'04', title:'Packaging',       desc:'Custom moisture-barrier BOPP bags, HDPE liners & vacuum retail packs.',          icon:'📦', nodeIcon: Package2,     color:'#b45309', img:'/coffee-cat.png' },
  { step:'05', title:'Cargo Handling',  desc:'Insulated container stuffing at certified seaports and air cargo hubs.',          icon:'🚢', nodeIcon: Ship,        color:'#1d4ed8', img:'/chilli-cat.png' },
  { step:'06', title:'Export Delivery', desc:'Real-time tracked logistics to UAE, Singapore, Saudi Arabia, Europe & beyond.',   icon:'✈️',  nodeIcon: Plane,        color:'#4f46e5', img:'/fruit-cat.png' },
  { step:'07', title:'Domestic Supply', desc:'Efficient cold-chain dispatch to retailers, hotels & supermarkets across India.', icon:'🏪', nodeIcon: Truck,        color:'#16a34a', img:'/fresh Veg-cat.png' },
];

function ZigZagTimeline() {
  const [vis, setVis] = React.useState({});
  const [lineH, setLineH] = React.useState(0);
  const nodeRefs = React.useRef([]);

  React.useEffect(() => {
    const obs = [];
    nodeRefs.current.forEach((el, i) => {
      if (!el) return;
      const o = new IntersectionObserver(entries => {
        entries.forEach(e => {
          setVis(p => ({ ...p, [i]: e.isIntersecting }));
        });
      }, { threshold: 0.15 });
      o.observe(el);
      obs.push(o);
    });
    return () => obs.forEach(o => o.disconnect());
  }, []);

  return (
    <section style={{
      background: 'linear-gradient(135deg, #0b3d1e 0%, #14532d 40%, #0f4a27 70%, #052e12 100%)',
      position: 'relative',
      padding: '6rem 0',
      overflow: 'hidden',
    }}>
      {/* Animated CSS */}
      <style>{`
        @keyframes zzNodePulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(212,160,23,0.7), 0 0 20px rgba(212,160,23,0.3); }
          50%      { box-shadow: 0 0 0 16px rgba(212,160,23,0), 0 0 40px rgba(212,160,23,0.15); }
        }
        @keyframes zzLineFill {
          from { height: 0%; }
          to   { height: 100%; }
        }
        @keyframes zzFloat {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-6px); }
        }
        .zz-card-left  { animation: zzFloat 4s ease-in-out infinite; }
        .zz-card-right { animation: zzFloat 4s ease-in-out infinite 0.5s; }
        .zz-card-inner {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(212,160,23,0.25);
          border-radius: 20px;
          padding: 1.6rem 1.8rem;
          transition: background 0.3s, border-color 0.3s, transform 0.3s, box-shadow 0.3s;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .zz-card-inner:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(212,160,23,0.65);
          transform: scale(1.02);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }
        .zz-card-inner:hover img.zz-img {
          transform: scale(1.1);
        }
        .zz-step-row {
          display: grid;
          grid-template-columns: 1fr 72px 1fr;
          align-items: stretch;
          gap: 0;
          min-height: 180px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .zz-step-row.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .zz-side-cell {
          display: flex;
          align-items: center;
        }
        .zz-empty { /* empty grid cell */ }
      `}</style>

      {/* Radial glow background */}
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(212,160,23,0.06) 0%, transparent 70%)', pointerEvents:'none' }} />
      {/* Dot grid */}
      <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize:'24px 24px', pointerEvents:'none' }} />

      <div style={{ maxWidth:'960px', margin:'0 auto', padding:'0 1.5rem' }}>
        {/* Section heading */}
        <div style={{ textAlign:'center', marginBottom:'4rem' }}>
          <span style={{ display:'inline-block', background:'rgba(212,160,23,0.12)', border:'1px solid rgba(212,160,23,0.3)', color:'#D4A017', fontWeight:700, fontSize:'10px', letterSpacing:'0.18em', textTransform:'uppercase', padding:'6px 20px', borderRadius:'99px', marginBottom:'14px' }}>
            How We Operate
          </span>
          <h2 style={{ fontFamily:'Georgia,serif', fontSize:'clamp(1.7rem,4vw,2.5rem)', fontWeight:900, color:'#fff', marginBottom:'14px', lineHeight:1.15 }}>
            Our Quality Sourcing &amp; Delivery Flow
          </h2>
          <div style={{ width:'60px', height:'3px', background:'linear-gradient(to right,#D4A017,#f0c040)', margin:'0 auto 14px', borderRadius:'2px' }} />
          <p style={{ fontSize:'12.5px', color:'rgba(255,255,255,0.6)', fontWeight:300, lineHeight:1.75, maxWidth:'500px', margin:'0 auto' }}>
            Seven precision steps from farm sourcing to global delivery — with zero compromises on quality.
          </p>
        </div>


        {/* Timeline grid */}
        <div>
          {ZZ_STEPS.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            const show = !!vis[idx];
            const delay = idx * 0.13;
            return (
              <div
                key={idx}
                ref={el => nodeRefs.current[idx] = el}
                className={`zz-step-row${show ? ' visible' : ''}`}
                style={{ transitionDelay:`${delay}s`, marginBottom: idx < ZZ_STEPS.length - 1 ? '0' : '0' }}
              >
                {/* Left cell */}
                <div className="zz-side-cell" style={{ justifyContent:'flex-end', paddingRight:'32px' }}>
                  {isLeft ? (
                    <div className="zz-card-left" style={{ width:'100%', maxWidth:'340px' }}>
                      <div className="zz-card-inner" style={{ padding:0 }}>
                        <div style={{ position:'relative', height:'130px', width:'100%', overflow:'hidden' }}>
                          <img src={item.img} alt={item.title} className="zz-img" style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.6s ease' }} />
                        </div>
                        <div style={{ padding:'1.4rem 1.5rem' }}>
                          <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'10px' }}>
                            <div style={{ width:'30px', height:'30px', borderRadius:'8px', background: item.color, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                              <item.nodeIcon size={16} color="#fff" strokeWidth={2.5} />
                            </div>
                            <h4 style={{ fontFamily:'Georgia,serif', fontSize:'16px', fontWeight:900, color:'#fff', margin:0 }}>{item.title}</h4>
                          </div>
                          <p style={{ fontSize:'11.5px', color:'rgba(255,255,255,0.75)', lineHeight:1.7, fontWeight:300, margin:0 }}>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ) : <div className="zz-empty" />}
                </div>

                {/* Center column — line segments stop at node boundary */}
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center', zIndex:10 }}>
                  {/* Top connector line */}
                  <div style={{ width:'2px', flex:1, background: show ? 'linear-gradient(to bottom,rgba(212,160,23,0.3),#D4A017)' : 'rgba(212,160,23,0.12)', transition:'background 0.6s ease' }} />

                  {/* Node circle */}
                  <div style={{ position:'relative', flexShrink:0 }}>
                    {/* Glow halo */}
                    <div style={{
                      position:'absolute', inset:'-8px', borderRadius:'50%',
                      background: `radial-gradient(circle, ${item.color}55 0%, transparent 65%)`,
                      animation:'zzNodePulse 2.4s ease infinite',
                      zIndex:0,
                    }} />
                    {/* Circle */}
                    <div style={{
                      width:'64px', height:'64px', borderRadius:'50%',
                      background: `linear-gradient(135deg, ${item.color}dd, ${item.color})`,
                      border:'2.5px solid #D4A017',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      color:'#fff',
                      boxShadow:`0 0 0 5px rgba(212,160,23,0.12), 0 8px 28px rgba(0,0,0,0.5)`,
                      position:'relative', zIndex:1,
                    }}>
                      <item.nodeIcon size={26} strokeWidth={1.8} color="#fff" />
                    </div>
                  </div>

                  {/* Step label */}
                  <span style={{ fontSize:'9px', fontWeight:800, color:'#D4A017', letterSpacing:'0.12em', textTransform:'uppercase', opacity:0.85, margin:'5px 0 2px' }}>{item.step}</span>

                  {/* Bottom connector line */}
                  <div style={{ width:'2px', flex:1, background: show ? 'linear-gradient(to bottom,#22c55e,rgba(34,197,94,0.3))' : 'rgba(212,160,23,0.12)', transition:'background 0.6s ease' }} />
                </div>

                {/* Right cell */}
                <div className="zz-side-cell" style={{ justifyContent:'flex-start', paddingLeft:'32px' }}>
                  {!isLeft ? (
                    <div className="zz-card-right" style={{ width:'100%', maxWidth:'340px' }}>
                      <div className="zz-card-inner" style={{ padding:0 }}>
                        <div style={{ position:'relative', height:'130px', width:'100%', overflow:'hidden' }}>
                          <img src={item.img} alt={item.title} className="zz-img" style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.6s ease' }} />
                        </div>
                        <div style={{ padding:'1.4rem 1.5rem' }}>
                          <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'10px' }}>
                            <div style={{ width:'30px', height:'30px', borderRadius:'8px', background: item.color, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                              <item.nodeIcon size={16} color="#fff" strokeWidth={2.5} />
                            </div>
                            <h4 style={{ fontFamily:'Georgia,serif', fontSize:'16px', fontWeight:900, color:'#fff', margin:0 }}>{item.title}</h4>
                          </div>
                          <p style={{ fontSize:'11.5px', color:'rgba(255,255,255,0.75)', lineHeight:1.7, fontWeight:300, margin:0 }}>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ) : <div className="zz-empty" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
// ─────────────────────────────────────────────────────────────────────────────


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
  const categoryScrollRef = React.useRef(null);
  const isDown = React.useRef(false);
  const startX = React.useRef(0);
  const scrollLeftStart = React.useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = React.useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (!categoryScrollRef.current) return;
    isDown.current = true;
    setIsDragging(false);
    categoryScrollRef.current.style.cursor = 'grabbing';
    categoryScrollRef.current.style.scrollBehavior = 'auto';
    startX.current = e.pageX - categoryScrollRef.current.offsetLeft;
    scrollLeftStart.current = categoryScrollRef.current.scrollLeft;
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDown.current || !categoryScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - categoryScrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Snappy scroll speed multiplier
    categoryScrollRef.current.scrollLeft = scrollLeftStart.current - walk;

    const distanceX = Math.abs(e.clientX - dragStart.current.x);
    const distanceY = Math.abs(e.clientY - dragStart.current.y);
    if (distanceX > 5 || distanceY > 5) {
      setIsDragging(true);
    }
  };

  const handleMouseUp = () => {
    isDown.current = false;
    if (categoryScrollRef.current) {
      categoryScrollRef.current.style.cursor = 'grab';
      categoryScrollRef.current.style.scrollBehavior = 'smooth';
    }
    setTimeout(() => {
      setIsDragging(false);
    }, 50);
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    if (categoryScrollRef.current) {
      categoryScrollRef.current.style.cursor = 'grab';
      categoryScrollRef.current.style.scrollBehavior = 'smooth';
    }
    setTimeout(() => {
      setIsDragging(false);
    }, 50);
  };

  const scrollCategories = (direction) => {
    if (categoryScrollRef.current) {
      const { scrollLeft } = categoryScrollRef.current;
      const scrollAmount = direction === 'left' ? -420 : 420; // card width + gap
      categoryScrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Transition every 5 seconds (more responsive and premium)
    return () => clearInterval(interval);
  }, [slides.length]);

  // Get featured products based on home toggle, ensuring a diverse mix of categories
  const [homeMarket, setHomeMarket] = useState("export");
  
  const filteredHomeProducts = (() => {
    // 1. Filter by market availability
    const marketProducts = products.filter(p => 
      homeMarket === "export" ? p.exportAvailability : p.domesticAvailability
    );
    
    // 2. Group by category
    const grouped = {};
    marketProducts.forEach(p => {
      if (!grouped[p.category]) grouped[p.category] = [];
      grouped[p.category].push(p);
    });

    // 3. Pick products round-robin from each category to ensure diversity
    const diverseProducts = [];
    const activeCategories = Object.keys(grouped);
    let i = 0;
    
    while (diverseProducts.length < 8 && activeCategories.length > 0) {
      const catIndex = i % activeCategories.length;
      const cat = activeCategories[catIndex];
      
      if (grouped[cat].length > 0) {
        diverseProducts.push(grouped[cat].shift());
      } else {
        activeCategories.splice(catIndex, 1);
        i--; // Adjust index since we removed an element
      }
      i++;
    }
    
    return diverseProducts;
  })();

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
      <SEO 
        title="Premium Indian Agro Products Exporter – Rice, Spices, Vegetables"
        description="Sri Varahi Agro Foods LLP is a leading Indian agro products exporter specializing in Basmati Rice, Turmeric, Chilli, Spices, Fresh Fruits & Vegetables. Direct farmer sourcing. Export to UAE, Singapore, Saudi Arabia & Europe."
        keywords="Indian agro products exporter, Basmati rice exporter India, turmeric export Hyderabad, chilli powder exporter, spices exporter India, fresh vegetables export, agro export Telangana, rice export India, APEDA certified exporter"
      />
      
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
              className={`absolute inset-0 bg-center bg-no-repeat ${currentSlide === 5 ? 'bg-[size:100%_100%]' : 'bg-cover'}`}
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

      {/* 1. Running News Ticker Section */}
      <div className="bg-gradient-to-r from-dark-green via-primary-green to-dark-green py-4 border-y border-gold-accent/30 relative z-20 overflow-hidden select-none shadow-lg">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes news-ticker-scroll {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-news-ticker {
            display: flex;
            width: max-content;
            animation: news-ticker-scroll 50s linear infinite;
          }
          .animate-news-ticker:hover {
            animation-play-state: paused;
          }
        `}} />
        <div className="flex overflow-hidden">
          <div className="animate-news-ticker flex items-center space-x-16 text-white font-sans text-[11px] sm:text-xs uppercase tracking-widest font-semibold">
            {[...Array(2)].map((_, loopIdx) => (
              <React.Fragment key={loopIdx}>
                <div className="flex items-center space-x-4 shrink-0">
                  <Globe2 className="w-4 h-4 text-gold-accent animate-pulse" />
                  <span>Exporting Premium Agro Products Worldwide</span>
                </div>
                <div className="flex items-center space-x-4 shrink-0">
                  <Leaf className="w-4 h-4 text-gold-accent" />
                  <span>Directly Sourced From Indian Farmers</span>
                </div>
                <div className="flex items-center space-x-4 shrink-0">
                  <Award className="w-4 h-4 text-gold-accent" />
                  <span>NGO Supported Sourcing Network</span>
                </div>
                <div className="flex items-center space-x-4 shrink-0">
                  <Truck className="w-4 h-4 text-gold-accent" />
                  <span>Ship Cargo & Air Cargo Available</span>
                </div>
                <div className="flex items-center space-x-4 shrink-0">
                  <Globe2 className="w-4 h-4 text-gold-accent" />
                  <span>Domestic & International Supply</span>
                </div>
                <div className="flex items-center space-x-4 shrink-0">
                  <Package2 className="w-4 h-4 text-gold-accent" />
                  <span>Bulk Orders & Custom Brands</span>
                </div>
                <div className="flex items-center space-x-4 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-gold-accent" />
                  <span>Hygienic Export-Grade Packaging</span>
                </div>
                <div className="flex items-center space-x-4 shrink-0">
                  <Truck className="w-4 h-4 text-gold-accent" />
                  <span>Timely Global Delivery Assurance</span>
                </div>
                <div className="flex items-center space-x-4 shrink-0">
                  <FileText className="w-4 h-4 text-gold-accent" />
                  <span>Complete Export Documentation Support</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Quick Product Categories Scroller */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="py-8 px-4 md:px-8 max-w-[95%] mx-auto relative z-20 group/slider">
        <style dangerouslySetInnerHTML={{__html: `
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}} />
        
        {/* Navigation Buttons for Manual Sliding */}
        <button 
          onClick={() => scrollCategories('left')}
          className="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-30 bg-primary-green/95 hover:bg-dark-green text-gold-accent p-3.5 rounded-full shadow-lg border border-gold-accent/20 hover:scale-110 active:scale-95 transition-all hidden md:flex items-center justify-center opacity-0 group-hover/slider:opacity-100 duration-300"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button 
          onClick={() => scrollCategories('right')}
          className="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-30 bg-primary-green/95 hover:bg-dark-green text-gold-accent p-3.5 rounded-full shadow-lg border border-gold-accent/20 hover:scale-110 active:scale-95 transition-all hidden md:flex items-center justify-center opacity-0 group-hover/slider:opacity-100 duration-300"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div 
          ref={categoryScrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="flex overflow-x-auto gap-5 md:gap-7 no-scrollbar w-full py-4 select-none cursor-grab"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {categories.filter(cat => ["rice-flours", "whole-spices", "powders", "fresh-vegetables", "fresh-fruits", "coffee-beans", "chilli"].includes(cat.slug)).map((cat) => (
            <Link 
              key={cat.id} 
              to={`/products?category=${cat.slug}`}
              onClick={(e) => {
                if (isDragging) {
                  e.preventDefault();
                }
              }}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden relative group shadow-md border border-gold-accent/15 flex-shrink-0 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:border-gold-accent/30 select-none pointer-events-auto"
            >
              {/* Background Image */}
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out pointer-events-none"
                draggable="false"
              />
              
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green/95 via-dark-green/30 to-transparent z-10 transition-opacity duration-300 group-hover:from-primary-green/95 group-hover:via-primary-green/25" />

              {/* Text Content */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-4 text-center flex flex-col items-center justify-end h-1/2 transition-transform duration-300 group-hover:-translate-y-1.5">
                <h3 className="text-white text-base sm:text-lg lg:text-xl font-serif font-extrabold uppercase tracking-wider leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                  {cat.name}
                </h3>
                <div className="w-8 h-[1.5px] bg-gold-accent my-2 transition-all duration-300 group-hover:w-12"></div>
                <p className="text-[10px] sm:text-xs text-cream-bg/90 font-light tracking-wide leading-snug drop-shadow-sm font-sans">
                  {cat.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* 3. Trust Bar with Light Cream Background and Gold Circle Outlines */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="bg-[#FAF8F5] py-6 px-4 md:px-8 border-y border-gold-accent/15 relative z-20">
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
      </motion.section>

      {/* 2. About Export Business Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Premium Layered Visual Cards */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-green/20 to-gold-accent/20 rounded-3xl blur-2xl opacity-40 pointer-events-none"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gold-accent/15 aspect-[3/4] hover:scale-[1.02] transition-transform duration-500">
                  <img src="/about-spices-new.png" alt="Indian Spices Sourcing" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gradient-to-br from-dark-green to-primary-green p-6 rounded-2xl border border-gold-accent/20 text-white shadow-xl hover:translate-y-[-4px] transition-all duration-300">
                  <Leaf className="w-8 h-8 text-gold-accent mb-3" />
                  <h4 className="font-serif text-lg font-bold text-gold-accent">100% Ethical Sourcing</h4>
                  <p className="text-[10px] text-cream-bg/85 font-light leading-relaxed mt-1">Direct tie-ups with select farm clusters across India, supported by local NGOs.</p>
                </div>
              </div>
              
              <div className="space-y-4 pt-8">
                <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-gold-accent/25 shadow-md hover:translate-y-[-4px] transition-all duration-300">
                  <Ship className="w-8 h-8 text-primary-green mb-3" />
                  <h4 className="font-serif text-lg font-bold text-dark-green">Global Freight Lines</h4>
                  <p className="text-[10px] text-soft-gray font-light leading-relaxed mt-1">Insulated sea cargo stuffing & fast temperature-controlled air cargo solutions.</p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gold-accent/15 aspect-[3/4] hover:scale-[1.02] transition-transform duration-500">
                  <img src="/about-rice-new.png" alt="Premium Rice Milling" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Floating Glassmorphism Stat Cards */}
            <div className="absolute -left-4 top-1/3 z-20 bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl border border-gold-accent/20 shadow-xl flex items-center space-x-3 hidden sm:flex animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></div>
              <span className="text-[10px] font-sans font-extrabold uppercase tracking-wider text-dark-green">NGO Sourcing Active</span>
            </div>
          </motion.div>

          {/* Right Side: Informative & Corporate Exporter Pitch */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 text-gold-accent uppercase font-bold text-[10px] tracking-widest bg-gold-accent/5 px-3 py-1.5 rounded-full border border-gold-accent/10">
              <Sparkles className="w-3.5 h-3.5 text-gold-accent" />
              <span>Connecting Indian Farmers to Global Markets</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-dark-green tracking-tight leading-tight">
              Premium Agro Products Sourced with Trust, Delivered Worldwide
            </h2>
            
            <div className="w-20 h-[3px] bg-gold-accent"></div>
            
            <p className="text-xs text-soft-gray leading-relaxed font-light font-sans">
              Sri Varahi Agro Foods LLP collaborates directly with crop growers and NGO-supported agricultural sourcing networks across India. We eliminate standard trading intermediaries, guaranteeing exceptional purity, fair trade practices for farmers, and optimal price benefits for bulk importers.
            </p>
            <p className="text-xs text-soft-gray leading-relaxed font-light font-sans">
              Whether routing bulk container cargos via seaports or delivering express seasonal fruits via temperature-tracked air cargo, our trade compliance managers handle all certifications, dry-cleaning, and logistics seamlessly.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-cream-bg">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                <span className="text-[11px] text-dark-green font-medium">SGS & Phyto Certified Sourcing</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                <span className="text-[11px] text-dark-green font-medium">Direct Sourcing Price Arbitrage</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                <span className="text-[11px] text-dark-green font-medium">Temperature-Tracked Cargoes</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                <span className="text-[11px] text-dark-green font-medium">Heavy-Duty Customized Packing</span>
              </div>
            </div>

            {/* Counters Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-center bg-cream-bg/30 p-6 rounded-2xl border border-gold-accent/10">
              <div>
                <div className="font-serif text-3xl font-extrabold text-primary-green">
                  <Counter end={15} suffix="+" />
                </div>
                <div className="text-[9px] uppercase tracking-wider text-soft-gray mt-1 font-bold">Countries Served</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-extrabold text-primary-green">
                  <Counter end={48} suffix="+" />
                </div>
                <div className="text-[9px] uppercase tracking-wider text-soft-gray mt-1 font-bold">Export Products</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-extrabold text-primary-green">
                  <Counter end={1200} suffix="+" />
                </div>
                <div className="text-[9px] uppercase tracking-wider text-soft-gray mt-1 font-bold">Farmer Network</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-extrabold text-primary-green">
                  <Counter end={150} suffix="+" />
                </div>
                <div className="text-[9px] uppercase tracking-wider text-soft-gray mt-1 font-bold">Supply Partners</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Unified Product Showcase Section */}
      <section className="py-24 px-4 md:px-8 max-w-[95%] mx-auto relative group/prodslider overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-gold-accent uppercase font-bold text-[10px] tracking-widest bg-gold-accent/5 inline-block px-3 py-1.5 rounded-full border border-gold-accent/10">Premium Crop Selection</div>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-dark-green tracking-tight leading-tight">OUR PRODUCT CATALOG</h2>
          <div className="w-20 h-1 bg-gold-accent mx-auto my-2"></div>
          <p className="text-xs text-soft-gray font-light max-w-xl mx-auto mb-6">Sourced ethically from Indian cultivators, graded, and prepared with compliant configurations for global and domestic markets.</p>
          
          {/* Market Filter Toggle */}
          <div className="flex bg-cream-bg p-1 rounded-xl border border-gold-accent/15 shrink-0 max-w-fit mx-auto mt-8">
            {[
              { id: 'export', label: 'EXPORT' },
              { id: 'domestic', label: 'DOMESTIC' }
            ].map(market => (
              <button
                key={market.id}
                onClick={() => setHomeMarket(market.id)}
                className={`text-[12px] font-bold uppercase tracking-wider px-6 py-2 rounded-lg transition-all ${
                  homeMarket === market.id
                    ? "bg-primary-green text-white shadow-sm"
                    : "text-soft-gray hover:text-dark-text hover:bg-white/50"
                }`}
              >
                {market.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredHomeProducts.map((prod, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={prod.id} 
              className="bg-white rounded-2xl overflow-hidden border border-gold-accent/15 shadow-sm flex flex-col group hover:shadow-2xl hover:-translate-y-2 hover:border-gold-accent/40 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden bg-cream-bg">
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="bg-white/90 backdrop-blur-md text-primary-green font-sans font-extrabold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-sm">
                    {prod.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-[15px] font-extrabold text-dark-green group-hover:text-primary-green transition-colors leading-tight mb-2">
                    {prod.name}
                  </h3>
                  <p className="text-[11px] text-soft-gray font-light line-clamp-2 leading-relaxed">
                    {prod.shortDescription}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-cream-bg flex items-center justify-between">
                  <span className="text-[10px] font-bold text-dark-green uppercase tracking-wider bg-cream-bg px-2 py-1 rounded">
                    {homeMarket === 'export' ? 'EXPORT' : 'DOMESTIC'}
                  </span>
                  <Link 
                    to={`/products/${prod.slug}`} 
                    className="w-8 h-8 rounded-full bg-primary-green/10 text-primary-green flex items-center justify-center group-hover/link:bg-primary-green group-hover/link:text-white transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/products" className="inline-flex items-center space-x-2 bg-dark-green text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary-green hover:shadow-lg transition-all duration-300 group">
            <span>View Full Catalog</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 3. International Export Services Section */}
      <section 
        className="py-32 text-white relative overflow-hidden border-y-4 border-gold-accent/60 bg-cover md:bg-fixed bg-scroll bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8ed7e66a6a?auto=format&fit=crop&w=2000&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-green/95 via-dark-green/85 to-dark-green/95"></div>
        
        {/* World Map Backdrop Vector */}
        <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center mix-blend-overlay">
          <svg className="w-full h-full max-w-5xl" viewBox="0 0 1000 500" fill="currentColor">
            <path d="M150,150 Q200,100 250,150 T350,150 T450,150 T550,150 T650,150 T750,150 T850,150" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="5,5" />
            <circle cx="200" cy="120" r="5" className="animate-ping" fill="#D4A017" />
            <circle cx="400" cy="180" r="6" fill="#D4A017" />
            <circle cx="650" cy="140" r="5" className="animate-ping" fill="#D4A017" />
            <circle cx="800" cy="220" r="6" fill="#D4A017" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="text-gold-accent uppercase font-black text-[10px] tracking-[0.3em] bg-black/30 backdrop-blur-md inline-block px-5 py-2 rounded-full border border-gold-accent/30 shadow-[0_0_15px_rgba(236,192,67,0.2)]">Global Logistics Solutions</div>
            <h2 className="font-serif text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">International Export Solutions</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-gold-accent to-transparent mx-auto my-6"></div>
            <p className="text-sm text-cream-bg/90 font-light leading-relaxed">Reliable sea cargo and temperature-controlled air cargo logistics support for global agricultural exports. We ensure your commodities arrive safely, efficiently, and fully compliant.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
            {/* Service 1: Ship Cargo (Wide) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-gold-accent/50 shadow-lg hover:shadow-[0_0_40px_rgba(236,192,67,0.15)] transition-all duration-500 group relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left"
            >
              <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-gold-accent/20 to-transparent rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-gold-accent/20 to-transparent p-5 rounded-2xl text-gold-accent shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(236,192,67,0.4)] transition-all duration-500 border border-gold-accent/20 group-hover:border-transparent">
                <Ship className="w-8 h-8" />
              </div>
              <div className="space-y-2 relative z-10">
                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold-accent transition-colors duration-300">Ship Cargo Export</h3>
                <p className="text-sm text-cream-bg/80 leading-relaxed font-light">FCL and LCL shipping in multi-wall custom packaging. Strong seaport ties ensure reliable container booking and route optimization for mass volume deliveries.</p>
              </div>
            </motion.div>

            {/* Service 2: Air Cargo (Standard) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-1 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-gold-accent/50 shadow-lg hover:shadow-[0_0_40px_rgba(236,192,67,0.15)] transition-all duration-500 group relative overflow-hidden flex flex-col items-start gap-5"
            >
              <div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-gold-accent/20 to-transparent rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-gold-accent/20 to-transparent p-4 rounded-2xl text-gold-accent shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(236,192,67,0.4)] transition-all duration-500 border border-gold-accent/20 group-hover:border-transparent">
                <Plane className="w-6 h-6" />
              </div>
              <div className="relative z-10">
                <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-gold-accent transition-colors">Air Cargo Export</h3>
                <p className="text-xs text-cream-bg/80 leading-relaxed font-light">Express custom cold-chain air courier routing for highly seasonal fruits and tender vegetables.</p>
              </div>
            </motion.div>

            {/* Service 3: Documentation (Standard) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-1 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-gold-accent/50 shadow-lg hover:shadow-[0_0_40px_rgba(236,192,67,0.15)] transition-all duration-500 group relative overflow-hidden flex flex-col items-start gap-5"
            >
              <div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-gold-accent/20 to-transparent rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-gold-accent/20 to-transparent p-4 rounded-2xl text-gold-accent shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(236,192,67,0.4)] transition-all duration-500 border border-gold-accent/20 group-hover:border-transparent">
                <FileText className="w-6 h-6" />
              </div>
              <div className="relative z-10">
                <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-gold-accent transition-colors">Export Documentation</h3>
                <p className="text-xs text-cream-bg/80 leading-relaxed font-light">Complete handling of APEDA, SGS/Geochem checks, Phyto-sanitary certifications, and bank drafts.</p>
              </div>
            </motion.div>

            {/* Service 4: Bulk Container (Wide) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-gold-accent/50 shadow-lg hover:shadow-[0_0_40px_rgba(236,192,67,0.15)] transition-all duration-500 group relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left"
            >
              <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-gold-accent/20 to-transparent rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-gold-accent/20 to-transparent p-5 rounded-2xl text-gold-accent shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(236,192,67,0.4)] transition-all duration-500 border border-gold-accent/20 group-hover:border-transparent">
                <Package2 className="w-8 h-8" />
              </div>
              <div className="space-y-2 relative z-10">
                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold-accent transition-colors duration-300">Bulk Container Supply</h3>
                <p className="text-sm text-cream-bg/80 leading-relaxed font-light">High-capacity bulk shipments of grains, pulses, and onions with optimized weight structures in dry and ventilated containers engineered for international transit.</p>
              </div>
            </motion.div>

            {/* Service 5: Custom Packaging (Wide) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-gold-accent/50 shadow-lg hover:shadow-[0_0_40px_rgba(236,192,67,0.15)] transition-all duration-500 group relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left"
            >
              <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-gold-accent/20 to-transparent rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-gold-accent/20 to-transparent p-5 rounded-2xl text-gold-accent shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(236,192,67,0.4)] transition-all duration-500 border border-gold-accent/20 group-hover:border-transparent">
                <Award className="w-8 h-8" />
              </div>
              <div className="space-y-2 relative z-10">
                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold-accent transition-colors duration-300">Premium Custom Packaging</h3>
                <p className="text-sm text-cream-bg/80 leading-relaxed font-light">Flexible private label design options, high-vacuum retail boxes, moisture-barrier packs, and BOPP/jute bulk bags featuring gold accents and bespoke branding.</p>
              </div>
            </motion.div>

            {/* Service 6: Global Trade (Standard) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-1 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-gold-accent/50 shadow-lg hover:shadow-[0_0_40px_rgba(236,192,67,0.15)] transition-all duration-500 group relative overflow-hidden flex flex-col items-start gap-5"
            >
              <div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-gold-accent/20 to-transparent rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-gold-accent/20 to-transparent p-4 rounded-2xl text-gold-accent shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(236,192,67,0.4)] transition-all duration-500 border border-gold-accent/20 group-hover:border-transparent">
                <Globe2 className="w-6 h-6 animate-spin-slow" style={{ animationDuration: '10s' }} />
              </div>
              <div className="relative z-10">
                <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-gold-accent transition-colors">Global Trade Support</h3>
                <p className="text-xs text-cream-bg/80 leading-relaxed font-light">Dedicated multilingual communication desk supporting overseas importers with pricing index charts and L/C.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Domestic Market Supply Section */}
      <section className="pt-20 pb-12 bg-cream-bg/30 px-4 md:px-8 max-w-7xl mx-auto rounded-3xl border border-gold-accent/10 mt-12 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Domestic Network Info & Illustrations */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="lg:col-span-5 text-left space-y-6">
            <div className="inline-flex items-center space-x-2 text-primary-green uppercase font-bold text-[10px] tracking-widest bg-primary-green/5 px-3 py-1.5 rounded-full border border-primary-green/10">
              <Truck className="w-3.5 h-3.5" />
              <span>Domestic Supply Across India</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-dark-green leading-tight">
              Powering India's Retail & Wholesale Agro Supply Lines
            </h2>
            <div className="w-16 h-1 bg-gold-accent"></div>
            
            <p className="text-xs text-soft-gray leading-relaxed font-light">
              Beyond global exports, Sri Varahi Agro Foods LLP is a high-volume supply partner for leading domestic retail brands, wholesale markets, FMCG industries, and hotel chains across India.
            </p>

            <ul className="space-y-3.5 text-xs text-dark-green font-medium">
              <li className="flex items-center space-x-2.5">
                <div className="bg-primary-green text-gold-accent p-1 rounded-full"><CheckCircle2 className="w-3.5 h-3.5" /></div>
                <span>Supermarket & Hypermarket Supply Chain</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <div className="bg-primary-green text-gold-accent p-1 rounded-full"><CheckCircle2 className="w-3.5 h-3.5" /></div>
                <span>HoReCa (Hotels, Restaurants, Caterers) Logistics</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <div className="bg-primary-green text-gold-accent p-1 rounded-full"><CheckCircle2 className="w-3.5 h-3.5" /></div>
                <span>Bulk Food Processing Industry Distribution</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <div className="bg-primary-green text-gold-accent p-1 rounded-full"><CheckCircle2 className="w-3.5 h-3.5" /></div>
                <span>Fast Inter-State Cold Chain Sourcing Operations</span>
              </li>
            </ul>
          </motion.div>

          {/* Right: Domestic Packaging Board Showcase */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-gold-accent/15 shadow-sm space-y-8">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-xl font-extrabold text-dark-green">Heavy-Duty Packaging Offerings</h3>
              <p className="text-[11px] text-soft-gray mt-1 font-light">Direct custom packing capacities sorted for commercial retail shelves and heavy transport.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { size: "1kg", label: "Vacuum Retail Pack", desc: "For modern retail shelves" },
                { size: "5kg", label: "Handle-Grip Bags", desc: "Perfect for family packs" },
                { size: "10kg", label: "Premium Woven Bags", desc: "Ideal for grocery stores" },
                { size: "25kg", label: "Multi-Wall HDPE bags", desc: "Wholesale distributions" },
                { size: "50kg", label: "Traditional Jute bags", desc: "Standard commodity supply" },
                { size: "Bulk", label: "Container Liner bags", desc: "Heavy commercial sizing" }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-cream-bg/40 p-5 rounded-2xl border border-gold-accent/10 text-center hover:rotate-2 hover:scale-[1.03] hover:border-gold-accent/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-green text-gold-accent font-sans font-extrabold text-sm flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform">
                    {item.size}
                  </div>
                  <h4 className="font-serif text-xs font-bold text-dark-green mt-3">{item.label}</h4>
                  <p className="text-[9px] text-soft-gray mt-1 leading-tight font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Why Choose Us (Luxury Bento Grid UI) */}
      <section className="pt-12 pb-24 px-4 md:px-8 max-w-7xl mx-auto text-center space-y-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto space-y-3">
          <div className="text-gold-accent uppercase font-bold text-[10px] tracking-widest bg-gold-accent/5 inline-block px-3 py-1.5 rounded-full border border-gold-accent/10">Why Sri Varahi Agro?</div>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-dark-green tracking-tight leading-tight">Elite Agriculture Partner</h2>
          <div className="w-20 h-1 bg-gold-accent mx-auto my-3"></div>
          <p className="text-xs text-soft-gray font-light">We leverage technology, community sourcing, and strict grading to secure world-class standards.</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          {/* Card 1: Direct Farmer Sourcing (Double Width) */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="md:col-span-2 rounded-3xl border border-gold-accent/20 text-white text-left relative overflow-hidden flex flex-col justify-end hover:shadow-xl hover:border-gold-accent/40 transition-all duration-500 group min-h-[220px]">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80" alt="Indian Spices" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-dark-green/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full justify-between p-8 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-gold-accent/20 backdrop-blur-md p-3.5 rounded-2xl text-gold-accent inline-block self-start border border-gold-accent/30">
                <Leaf className="w-6 h-6 animate-pulse" />
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-xl font-bold text-gold-accent shadow-sm">Direct Farmer Sourcing Model</h3>
                <p className="text-[11px] text-cream-bg/90 mt-2 max-w-lg leading-relaxed font-light drop-shadow-md">We buy agricultural outputs directly from farm networks in India. Removing middlemen enables strict chemical index checks, preserves natural purity, and maximizes farmer profits.</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: NGO Agricultural Support */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="rounded-3xl border border-gold-accent/15 text-left flex flex-col justify-end hover:shadow-lg hover:border-gold-accent/35 transition-all duration-500 group relative overflow-hidden min-h-[220px]">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80" alt="Indian Farming" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-dark-green/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full justify-between p-8 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-primary-green/20 backdrop-blur-md p-3.5 rounded-2xl text-white inline-block self-start border border-white/20">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-lg font-bold text-white shadow-sm">NGO Supported Sourcing</h3>
                <p className="text-[11px] text-cream-bg/90 mt-2 leading-relaxed font-light drop-shadow-md">Working alongside rural development NGOs to back farmer co-ops and implement advanced agricultural techniques.</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Premium Quality */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="rounded-3xl border border-gold-accent/15 text-left flex flex-col justify-end hover:shadow-lg hover:border-gold-accent/35 transition-all duration-500 group relative overflow-hidden min-h-[220px]">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80" alt="Premium Rice" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-dark-green/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between p-8 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-primary-green/20 backdrop-blur-md p-3.5 rounded-2xl text-white inline-block self-start border border-white/20">
                <Award className="w-6 h-6" />
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-lg font-bold text-white shadow-sm">Premium Export Quality</h3>
                <p className="text-[11px] text-cream-bg/90 mt-2 leading-relaxed font-light drop-shadow-md">Each batch is strictly tested against APEDA and SGS global standards to assure pesticide residue compliance.</p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Global Export (Double Width) */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="md:col-span-2 rounded-3xl border border-gold-accent/15 text-left flex flex-col justify-end hover:shadow-lg hover:border-gold-accent/35 transition-all duration-500 group relative overflow-hidden min-h-[220px]">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80" alt="Global Logistics" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-dark-green/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between p-8 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-primary-green/20 backdrop-blur-md p-3.5 rounded-2xl text-white inline-block self-start group-hover:bg-primary-green transition-all border border-white/20">
                <Globe2 className="w-6 h-6" />
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-lg font-bold text-gold-accent shadow-sm">Domestic & Global Supply Grid</h3>
                <p className="text-[11px] text-cream-bg/90 mt-2 max-w-lg leading-relaxed font-light drop-shadow-md">From UAE, Saudi Arabia, Singapore and European destinations to domestic wholesale distributors and retail supermarkets within India, we maintain consistent supply contracts year-round.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Product Process Flow Section - Vertical Zig-Zag Timeline */}
      <ZigZagTimeline />



      {/* 9. Global Market Destinations */}
      <section className="py-24 bg-dark-green text-white border-y-2 border-gold-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,74,37,0.8),transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="lg:col-span-5 text-left space-y-6">
            <div className="inline-flex items-center space-x-2 text-gold-accent uppercase font-bold text-[10px] tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/10">Export Routing</div>
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">Serving Global Markets</h2>
            <div className="w-16 h-1 bg-gold-accent"></div>
            
            <p className="text-xs text-cream-bg/75 leading-relaxed font-light">
              Sri Varahi Agro Foods LLP maintains structured bulk export channels shipping out of premium Indian seaports and air hubs directly to major worldwide global trade centers.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "UAE (Dubai)", type: "Sea & Air Cargo" },
                { title: "Singapore", type: "Container Sea Freight" },
                { title: "Malaysia", type: "Port Klang Delivery" },
                { title: "Saudi Arabia", type: "Jeddah & Dammam Ports" },
                { title: "Qatar", type: "Doha Air Cargo" },
                { title: "Africa & Europe", type: "Wholesale Channels" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <h4 className="font-serif text-xs font-bold text-gold-accent">{item.title}</h4>
                  <p className="text-[9px] text-cream-bg/60 mt-1 font-light">{item.type}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SVG Animated Trade Map */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="lg:col-span-7 bg-[#063B1D] p-6 rounded-3xl border border-gold-accent/20 shadow-xl relative overflow-hidden aspect-[4/3] flex items-center justify-center">
            {/* Beautiful Custom World Map Visual SVG */}
            <svg viewBox="0 0 800 500" className="w-full h-full text-cream-bg/25">
              {/* Realistic Map Background */}
              <image href="/global-trade-map.png" width="800" height="500" preserveAspectRatio="xMidYMid slice" opacity="0.5" />
              
              
              {/* India Sourcing Center beacon */}
              <circle cx="480" cy="220" r="10" className="animate-ping" fill="#D4A017" />
              <circle cx="480" cy="220" r="4" fill="#D4A017" />
              <text x="480" y="240" fill="#D4A017" fontSize="10" fontWeight="bold" textAnchor="middle">HYDERABAD, INDIA</text>

              {/* Trade Routes and pulsating beacons */}
              {/* Route 1: Dubai */}
              <path d="M 480 220 Q 400 210 360 230" fill="none" stroke="#D4A017" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_5s_linear_infinite]" />
              <circle cx="360" cy="230" r="3" fill="#D4A017" />
              <text x="345" y="225" fill="white" fontSize="9" fontWeight="bold">UAE</text>

              {/* Route 2: Singapore / Malaysia */}
              <path d="M 480 220 Q 540 260 580 290" fill="none" stroke="#D4A017" strokeWidth="2" strokeDasharray="5,5" />
              <circle cx="580" cy="290" r="3" fill="#D4A017" />
              <text x="590" y="295" fill="white" fontSize="9" fontWeight="bold">SINGAPORE / MY</text>

              {/* Route 3: Saudi Arabia */}
              <path d="M 480 220 Q 380 240 330 270" fill="none" stroke="#D4A017" strokeWidth="1.5" strokeDasharray="4,4" />
              <circle cx="330" cy="270" r="3" fill="#D4A017" />
              <text x="315" y="285" fill="white" fontSize="9" fontWeight="bold">SAUDI ARABIA</text>

              {/* Route 4: Europe */}
              <path d="M 480 220 Q 380 140 300 120" fill="none" stroke="#D4A017" strokeWidth="1.5" strokeDasharray="4,4" />
              <circle cx="300" cy="120" r="3" fill="#D4A017" />
              <text x="290" y="110" fill="white" fontSize="9" fontWeight="bold">EUROPE</text>

              {/* Route 5: Qatar */}
              <path d="M 480 220 Q 420 180 390 190" fill="none" stroke="#D4A017" strokeWidth="1" strokeDasharray="4,4" />
              <circle cx="390" cy="190" r="3" fill="#D4A017" />
              <text x="380" y="180" fill="white" fontSize="9" fontWeight="bold">QATAR</text>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* 10. Quality Assurance Section */}
      <section className="py-24 bg-gradient-to-b from-[#063B1D] to-black text-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-gold-accent uppercase font-bold text-[10px] tracking-widest bg-white/5 inline-block px-3 py-1.5 rounded-full border border-white/10">Zero Tolerance on Contamination</div>
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight">EXPORT GRADE QUALITY AUDITING</h2>
            <div className="w-16 h-1 bg-gold-accent mx-auto my-3"></div>
            <p className="text-xs text-cream-bg/70 font-light">Every single bag of rice, powder, and spice is inspected strictly before loading to conform to international food quality benchmarks.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="bg-white/[0.03] backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-gold-accent/30 transition-all duration-300">
              <div className="text-gold-accent font-sans font-extrabold text-2xl mb-4">01</div>
              <h3 className="font-serif text-base font-bold text-white mb-2">Hygienic Packaging</h3>
              <p className="text-[10px] text-cream-bg/70 leading-relaxed font-light">Vacuum retail boxes, laminated bags, and robust HDPE container liners that resist moisture, preserve raw aroma, and increase shelf life.</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="bg-white/[0.03] backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-gold-accent/30 transition-all duration-300">
              <div className="text-gold-accent font-sans font-extrabold text-2xl mb-4">02</div>
              <h3 className="font-serif text-base font-bold text-white mb-2">Rigorous QC Audits</h3>
              <p className="text-[10px] text-cream-bg/70 leading-relaxed font-light">Laboratory index tests for moisture, chemical residue, and physical size parameters. All batches fully cleared by SGS/Phyto.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="bg-white/[0.03] backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-gold-accent/30 transition-all duration-300">
              <div className="text-gold-accent font-sans font-extrabold text-2xl mb-4">03</div>
              <h3 className="font-serif text-base font-bold text-white mb-2">Pesticide Compliance</h3>
              <p className="text-[10px] text-cream-bg/70 leading-relaxed font-light">Ethical farmer agreements supported by NGOs. Crops are grown using standard guidelines to avoid toxic pesticide traces.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="bg-white/[0.03] backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-gold-accent/30 transition-all duration-300">
              <div className="text-gold-accent font-sans font-extrabold text-2xl mb-4">04</div>
              <h3 className="font-serif text-base font-bold text-white mb-2">Cold Storage Track</h3>
              <p className="text-[10px] text-cream-bg/70 leading-relaxed font-light">Temperature-controlled loading docks and modern insulated warehouse facilities to keep tropical fruits and vegetables pristine.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 11. Testimonial Section */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="py-24 bg-cream-bg/30 border-y border-gold-accent/15">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-primary-green uppercase font-bold text-[10px] tracking-widest bg-primary-green/5 inline-block px-3 py-1.5 rounded-full border border-primary-green/10">Reviews & Verification</div>
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-dark-green tracking-tight">Importers & Distributors Feedback</h2>
            <div className="w-16 h-1 bg-gold-accent mx-auto my-3"></div>
            <p className="text-xs text-soft-gray font-light">Hear what our long-term wholesale trade partners in UAE, Singapore, and India say about our supply consistency.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Sourcing Basmati rice and red onions from Sri Varahi Agro has transformed our retail distribution in Dubai. Their quality checks are meticulous, and containers arrive strictly on schedule.",
                name: "Mustafa Al-Sayed",
                role: "Managing Director",
                company: "Al-Baraka General Trading, Dubai"
              },
              {
                quote: "We import Guntur chilli powder and whole cumin in bulk from Sri Varahi. Their phyto-sanitary compliance and packaging standards conform precisely to Singapore food guidelines.",
                name: "Tan Boon Wah",
                role: "Procurement Head",
                company: "Apex Food Industries, Singapore"
              },
              {
                quote: "As a domestic retail partner within India, we procure pre-packaged spices and flours from them. The branding looks highly premium, and our consumers have given outstanding feedback on the purity.",
                name: "Rajesh Kumar",
                role: "Founder & CEO",
                company: "Varahi Retail & Supermarkets, India"
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-3xl border border-gold-accent/15 shadow-sm hover:shadow-md transition-all duration-300 relative text-left flex flex-col justify-between"
              >
                <div className="absolute top-8 right-8 text-gold-accent/20 pointer-events-none">
                  <Quote className="w-10 h-10 shrink-0" />
                </div>
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold-accent text-gold-accent" />
                    ))}
                  </div>
                  <p className="text-[11px] text-soft-gray font-light leading-relaxed font-sans">
                    "{item.quote}"
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-cream-bg flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-primary-green text-gold-accent flex items-center justify-center font-sans font-extrabold text-sm shadow-inner shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-serif text-xs font-bold text-dark-green leading-none">{item.name}</h4>
                    <p className="text-[9px] text-soft-gray mt-1 leading-none font-medium">{item.role}</p>
                    <p className="text-[9px] text-primary-green font-bold mt-1 leading-none">{item.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 12. Photo Gallery Section – Farm to Export */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-gold-accent uppercase font-bold text-[10px] tracking-widest bg-gold-accent/5 inline-block px-3 py-1.5 rounded-full border border-gold-accent/10">Our Story in Pictures</div>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-dark-green tracking-tight">From Indian Farms to Global Ports</h2>
          <div className="w-20 h-1 bg-gold-accent mx-auto my-3"></div>
          <p className="text-xs text-soft-gray font-light">A visual journey through our sourcing fields, procurement yards, packaging units, and export cargo operations across India.</p>
        </motion.div>

        {/* Masonry Gallery Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {[
            {
              src: "/gallery_rice_harvest_1779431160210.png",
              alt: "Indian farmers harvesting rice paddy fields",
              label: "Rice Paddy Harvest",
              tall: true
            },
            {
              src: "/gallery_spice_procurement_1779431177560.png",
              alt: "Colorful spice procurement at Indian wholesale market",
              label: "Spice Procurement",
              tall: false
            },
            {
              src: "/gallery_cargo_port_1779431196944.png",
              alt: "Cargo shipping containers at Indian seaport",
              label: "Export Sea Cargo",
              tall: false
            },
            {
              src: "/gallery_farm_collection_1779431213148.png",
              alt: "Farmers collecting fresh vegetables from fields",
              label: "Farm Collection",
              tall: true
            },
            {
              src: "/gallery_agri_fields_1779431239630.png",
              alt: "Vast Indian agricultural farmlands aerial view",
              label: "Agricultural Fields",
              tall: false
            },
            {
              src: "/gallery_quality_grading_1779431255770.png",
              alt: "Workers grading and sorting spices in warehouse",
              label: "Quality Grading",
              tall: true
            },
            {
              src: "/gallery_export_packaging_1779431273451.png",
              alt: "Agro export packaging unit with branded bags",
              label: "Export Packaging",
              tall: false
            },
            {
              src: "/gallery_air_cargo_1779431285693.png",
              alt: "Air cargo freight plane loaded with agro exports",
              label: "Air Cargo Export",
              tall: false
            },
            {
              src: "/gallery_onion_procurement_1779431310610.png",
              alt: "Red onion procurement yard with Indian farmers",
              label: "Onion Procurement",
              tall: true
            },
            {
              src: "/gallery_rice_bagging_1779431329454.png",
              alt: "Workers bagging Basmati rice at rice mill",
              label: "Rice Mill & Bagging",
              tall: false
            },
            {
              src: "/gallery_container_loading_1779431350617.png",
              alt: "Loading agro bags into shipping container",
              label: "Container Loading",
              tall: false
            },
            {
              src: "/gallery_turmeric_farm_1779431369020.png",
              alt: "Turmeric harvest from Telangana farm fields",
              label: "Turmeric Harvest",
              tall: true
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="break-inside-avoid mb-4 relative group overflow-hidden rounded-2xl border border-gold-accent/10 shadow-sm hover:shadow-xl hover:border-gold-accent/40 transition-all duration-500 cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out ${item.tall ? 'h-72' : 'h-48'}`}
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-dark-green/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">
                <span className="text-white font-serif font-bold text-xs leading-tight drop-shadow">{item.label}</span>
                <div className="w-8 h-[2px] bg-gold-accent mt-1.5"></div>
              </div>
              {/* Always visible label pill */}
              <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-dark-green font-sans font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 13. Final Cinematic CTA Section */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="bg-dark-green py-24 px-4 md:px-8 border-t-2 border-gold-accent text-white relative overflow-hidden bg-cover bg-center bg-no-repeat md:bg-fixed bg-scroll" style={{ backgroundImage: "url('/cta-bg.png')" }}>
        <div className="absolute inset-0 bg-dark-green/85"></div>
        {/* Abstract warehouse container vectors overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#F8F6F1_2px,transparent_2px)] [background-size:32px_32px]"></div>
        
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center space-x-2 text-gold-accent uppercase font-bold text-[10px] tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10">Get Direct Sourcing Quotes</div>
          
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Looking For A Reliable Agro Product Supply Partner?
          </h2>
          
          <p className="text-xs md:text-sm text-cream-bg/75 leading-relaxed font-light max-w-xl mx-auto font-sans">
            Connect with our trade managers to receive CIF/FOB pricing grids, custom packaging mockups, and phytosanitary audit documents. We reply within 24 business hours.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 font-sans">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gold-accent text-dark-green font-bold text-xs py-4 px-10 rounded-xl hover:bg-gold-accent/90 hover:scale-105 transition-all shadow-lg hover:shadow-xl group uppercase tracking-wider"
            >
              <span>Request FOB/CIF Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <a
              href="https://wa.me/918688669407?text=Hello%20Sri%20Varahi%20Agro%20Foods%20LLP,%20I%20would%20like%20to%20get%20a%20trade%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-bold text-xs py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-xl uppercase tracking-wider"
            >
              <span>WhatsApp Trade Inquiry</span>
            </a>
          </div>
        </motion.div>
      </motion.section>

    </div>
  );
}

