import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe2, FileCheck, PackageCheck, Ship, ShieldCheck, CheckCircle2, ArrowRight, Anchor, Compass, Clock, MapPin } from 'lucide-react';
import { exportMarkets, products } from '../data/agroData';
import SEO from '../components/SEO';

export default function ExportMarket() {
  const [activeRegion, setActiveRegion] = useState('ALL');

  const exportServices = [
    {
      title: "Global Supply Chain Sourcing",
      desc: "Direct procurement from farmers followed by cold chain holding systems to preserve vitamins and natural aromatic oils. We secure raw premium crops with active curcumin indexes and strict humidity controls.",
      icon: Globe2,
      image: "/gallery_agri_fields_1779431239630.png"
    },
    {
      title: "Complete Export Documentation",
      desc: "We manage Phytosanitary Certificates, Certificate of Origin, SGS quality reports, Phyto fumigations, and customized bank trade documents with absolute zero errors.",
      icon: FileCheck,
      image: "/quality-control.png"
    },
    {
      title: "Private Label Packaging Support",
      desc: "Beautiful bespoke design options (BOPP, laminated Kraft, vacuum packs) with full nutritional facts, international barcodes, and customized B2B weight options.",
      icon: PackageCheck,
      image: "/gallery_export_packaging_1779431273451.png"
    },
    {
      title: "Container Loading & Port Logistics",
      desc: "Supervised loading processes, strict palletizing, moisture absorption desiccant strips installation, and rapid customs transit to major Indian ports.",
      icon: Ship,
      image: "/gallery_container_loading_1779431350617.png"
    }
  ];

  const transitRoutes = [
    {
      country: "United Arab Emirates",
      port: "Jebel Ali, Dubai",
      departure: "Nhava Sheva (JNPT) / Mundra",
      transit: "5 - 7 Days",
      type: "Reefer & Dry FCL",
      code: "UAE",
      region: "MIDDLE EAST"
    },
    {
      country: "Saudi Arabia",
      port: "Jeddah Islamic Port / Dammam",
      departure: "Nhava Sheva (JNPT) / Mundra",
      transit: "9 - 12 Days",
      type: "Reefer & Dry FCL",
      code: "SA",
      region: "MIDDLE EAST"
    },
    {
      country: "Singapore",
      port: "Port of Singapore (PSA)",
      departure: "Chennai / Krishnapatnam",
      transit: "8 - 10 Days",
      type: "Dry FCL & Air Cargo",
      code: "SG",
      region: "SE ASIA"
    },
    {
      country: "Malaysia",
      port: "Port Klang, Kuala Lumpur",
      departure: "Chennai / Krishnapatnam",
      transit: "9 - 11 Days",
      type: "Dry FCL & Bulk",
      code: "MY",
      region: "SE ASIA"
    },
    {
      country: "Qatar",
      port: "Hamad Port, Doha",
      departure: "Nhava Sheva (JNPT)",
      transit: "6 - 8 Days",
      type: "Air Cargo & Reefer FCL",
      code: "QA",
      region: "MIDDLE EAST"
    },
    {
      country: "Oman & Kuwait",
      port: "Sohar / Shuwaikh",
      departure: "Nhava Sheva (JNPT) / Mundra",
      transit: "7 - 9 Days",
      type: "Dry FCL",
      code: "OM/KW",
      region: "MIDDLE EAST"
    },
    {
      country: "United Kingdom",
      port: "Port of Felixstowe / London",
      departure: "Nhava Sheva (JNPT) / Mundra",
      transit: "21 - 25 Days",
      type: "Dry FCL & Air Freight",
      code: "UK",
      region: "EUROPE"
    },
    {
      country: "Europe (Germany/NL)",
      port: "Rotterdam / Hamburg",
      departure: "Nhava Sheva (JNPT) / Mundra",
      transit: "22 - 26 Days",
      type: "Dry FCL & Reefer",
      code: "EU",
      region: "EUROPE"
    }
  ];

  const exportDocs = [
    "Commercial Invoice & Detailed Packing Lists",
    "Ocean Bill of Lading (B/L) / Airway Bill (AWB)",
    "APEDA / Food Registration Certificates",
    "Phytosanitary & Fumigation Certificates",
    "SGS / Intertek Independent Inspection Reports",
    "Certificate of Origin (CoO) issued by Chamber of Commerce",
    "Marine Cargo Transit Insurance Reports"
  ];

  const featuredExportCrops = products.filter(p => 
    ["basmati-rice", "cumin-seeds", "turmeric-powder", "fresh-onion", "garlic", "fresh-mango"].includes(p.slug)
  );

  const filteredRoutes = activeRegion === 'ALL' 
    ? transitRoutes 
    : transitRoutes.filter(r => r.region === activeRegion);

  return (
    <div className="bg-cream-bg/30 min-h-screen pb-24">
      <SEO 
        title="Global Export Markets | FCL & LCL Sea & Air Freight"
        description="Sri Varahi Agro Foods LLP exports premium Indian agricultural products to UAE, Saudi Arabia, Qatar, Singapore, Malaysia, UK, and Europe. Efficient cold chain & global freight solutions."
        keywords="agricultural export markets, sea freight export India, air cargo vegetables, UAE food imports, Europe spice importer"
      />
      
      {/* 1. Interactive Global Logistics Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center text-white py-24 px-4 md:px-8 overflow-hidden border-b-4 border-gold-accent">
        {/* Background Image with Deep Green Parallax Mask */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/gallery_cargo_port_1779431196944.png" 
            alt="Global Sea Cargo Port" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-green/95 via-dark-green/90 to-primary-green/75 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,59,29,0.4)_0%,rgba(6,59,29,0.95)_100%)]"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-8 relative z-10 text-center">
          <div className="flex justify-center">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-gold-accent/15 border border-gold-accent/40 text-gold-accent text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full backdrop-blur-md"
            >
              <Anchor className="w-3.5 h-3.5 text-gold-accent animate-pulse" />
              <span>Government Registered Export House</span>
            </motion.span>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
            >
              Exporting Premium Indian Agro <span className="text-gold-accent">Worldwide</span>
            </motion.h1>
            <div className="w-24 h-[3px] bg-gold-accent mx-auto mt-4 rounded-full"></div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base text-cream-bg/85 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Delivering high-vitality, traceably-sourced, and certified agricultural crops directly from organic clusters in India to major global sea and air terminals.
            </motion.p>
          </div>

          {/* Quick Metrics Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6"
          >
            {[
              { label: "Active Export Markets", val: "12+ Regions" },
              { label: "Outbound Sea Ports", val: "6+ Hubs" },
              { label: "Transit Integrity", val: "99.9% Fresh" },
              { label: "Annual Volume", val: "100+ FCL Lots" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm hover:border-gold-accent/30 transition-colors">
                <span className="text-gold-accent font-serif text-lg md:text-xl font-bold block">{stat.val}</span>
                <span className="text-[10px] text-cream-bg/75 uppercase tracking-wider block mt-1 font-sans font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Premium Services Showcase with Dedicated Backdrops */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold-accent font-bold block">INTEGRATED LOGISTICS</span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-dark-green">
            Our Global Export Capabilities
          </h2>
          <div className="w-16 h-0.5 bg-gold-accent mx-auto"></div>
          <p className="text-xs sm:text-sm text-soft-gray max-w-xl mx-auto font-light leading-relaxed">
            From field harvest holding systems to seaport transit supervision, we maintain absolute cargo integrity at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {exportServices.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative min-h-[280px] rounded-3xl overflow-hidden border border-gold-accent/10 shadow-md group flex flex-col justify-end p-6 md:p-8"
              >
                {/* Background Image with Green Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={srv.image} 
                    alt={srv.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-green via-dark-green/90 to-dark-green/20 mix-blend-multiply transition-colors duration-300 group-hover:from-dark-green/95 group-hover:via-dark-green/85"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-dark-green/60 to-transparent"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 space-y-3.5">
                  <div className="bg-gold-accent text-dark-green p-3 rounded-2xl w-fit group-hover:bg-white transition-colors duration-300 shadow-md animate-none">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-gold-accent transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs md:text-sm text-cream-bg/80 leading-relaxed font-light max-w-xl">
                    {srv.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Global Route Board & Interactive Shipping Dashboard */}
      <section className="bg-white py-24 px-4 md:px-8 border-y border-gold-accent/15">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 mb-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-accent font-bold block">TRADE PIPELINE</span>
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-dark-green">
              Active Trade Routes & Estimated Transits
            </h2>
            <div className="w-16 h-0.5 bg-gold-accent mx-auto"></div>
            <p className="text-xs text-soft-gray max-w-xl mx-auto font-light leading-relaxed">
              We coordinate recurring sea container shipments and temperature-controlled air cargo lots to several international regions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Interactive Map Showcase */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-cream-bg/40 p-4 rounded-3xl border border-gold-accent/15 shadow-inner overflow-hidden relative group">
                <div className="absolute inset-0 bg-gold-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
                <img 
                  src="/global-trade-map.png" 
                  alt="Sri Varahi Global Trade Map" 
                  className="w-full h-auto object-cover rounded-2xl shadow-sm border border-gold-accent/10 group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="bg-dark-green text-white p-6 rounded-2xl border border-gold-accent/20 space-y-4">
                <h4 className="font-serif text-lg font-bold text-gold-accent flex items-center">
                  <Compass className="w-5 h-5 mr-2 animate-none" />
                  Ocean Logistics Dispatch Desk
                </h4>
                <p className="text-xs text-cream-bg/75 leading-relaxed font-light">
                  Our B2B shipments depart primarily from **Nhava Sheva (JNPT)** on the West Coast and **Chennai/Krishnapatnam** on the East Coast of India, matching transit speed to destination requirements.
                </p>
                <div className="flex items-center space-x-2 text-xs text-gold-accent">
                  <Link to="/quote" className="font-bold hover:underline flex items-center">
                    Request Freight Cost Table <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right: Estimated Transits Table with Filtering */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Region Filter Buttons */}
              <div className="flex flex-wrap gap-2 pb-2 border-b border-cream-bg">
                {['ALL', 'MIDDLE EAST', 'SE ASIA', 'EUROPE'].map((region) => (
                  <button
                    key={region}
                    onClick={() => setActiveRegion(region)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 ${
                      activeRegion === region 
                        ? 'bg-primary-green text-white border border-gold-accent/20 shadow-md' 
                        : 'bg-cream-bg text-dark-text hover:bg-gold-accent/10 border border-transparent'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>

              {/* Transit Dashboard Grid */}
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
                <AnimatePresence mode="popLayout">
                  {filteredRoutes.map((route, idx) => (
                    <motion.div 
                      key={route.code} 
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="bg-cream-bg/35 p-5 rounded-2xl border border-gold-accent/10 hover:border-gold-accent/30 hover:bg-[#FAF8F5] transition-all group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary-green text-gold-accent text-xs font-serif font-extrabold w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                          {route.code}
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-dark-green flex items-center">
                            {route.country}
                            <span className="ml-2 text-[8px] bg-gold-accent/15 text-gold-accent font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                              {route.region}
                            </span>
                          </h4>
                          <div className="flex items-center text-xs text-soft-gray space-x-1">
                            <MapPin className="w-3.5 h-3.5 text-primary-green" />
                            <span>Port: <strong>{route.port}</strong></span>
                          </div>
                          <div className="text-[10px] text-soft-gray font-light">
                            Loading Out: {route.departure}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end sm:space-x-8 border-t sm:border-t-0 border-gold-accent/5 pt-3 sm:pt-0">
                        <div className="space-y-0.5">
                          <span className="text-[9px] text-soft-gray uppercase tracking-widest block font-medium">Estimated Transit</span>
                          <span className="text-xs font-bold text-primary-green flex items-center">
                            <Clock className="w-3.5 h-3.5 mr-1 text-gold-accent" />
                            {route.transit}
                          </span>
                        </div>
                        <div className="space-y-0.5 text-right sm:text-left">
                          <span className="text-[9px] text-soft-gray uppercase tracking-widest block font-medium">Outbound Mode</span>
                          <span className="text-xs font-medium text-dark-text block">
                            {route.type}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* 4. Top Demanded Export Crops */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold-accent font-bold block">HIGH-DEMAND CROP LINEUP</span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-dark-green">
            Top Demanded Export Crops
          </h2>
          <div className="w-16 h-0.5 bg-gold-accent mx-auto"></div>
          <p className="text-xs sm:text-sm text-soft-gray max-w-xl mx-auto font-light leading-relaxed">
            Click on any high-demand crop below to view comprehensive technical spec tables, standard export grading parameters, and packaging alternatives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredExportCrops.map((crop, idx) => (
            <motion.div
              key={crop.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link 
                to={`/products/${crop.slug}`}
                className="bg-white rounded-3xl overflow-hidden border border-gold-accent/10 shadow-sm hover:shadow-xl hover:border-gold-accent/30 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={crop.image} 
                    alt={crop.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-green/50 to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-primary-green/90 text-gold-accent font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    {crop.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-base font-bold text-dark-green group-hover:text-primary-green transition-colors">
                      {crop.name}
                    </h3>
                    <p className="text-xs text-soft-gray font-light line-clamp-2 leading-relaxed">
                      {crop.shortDescription}
                    </p>
                  </div>
                  
                  <div className="pt-3 border-t border-gold-accent/5 flex items-center justify-between text-xs font-bold text-primary-green">
                    <span>View Specifications</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Export Documentation & Compliance Trust Hub */}
      <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-gold-accent/15 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-gold-accent/10 p-3.5 rounded-2xl w-fit text-gold-accent">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-dark-green">
              Pre-Shipped Documentation
            </h3>
            <div className="w-12 h-0.5 bg-gold-accent"></div>
            <p className="text-xs text-soft-gray font-light leading-relaxed">
              We understand that correct bank-vetted paperwork is crucial to avoid port demurrage costs. We deliver absolute document compliance for flawless customs clearance at major international ports.
            </p>
          </div>

          <div className="lg:col-span-7 bg-cream-bg/50 p-6 rounded-2xl border border-cream-bg space-y-4 shadow-inner">
            {exportDocs.map((doc, idx) => (
              <div key={idx} className="flex items-start text-xs text-soft-gray font-light">
                <CheckCircle2 className="w-4 h-4 text-primary-green mr-3 mt-0.5 shrink-0" />
                <span className="leading-tight">{doc}</span>
              </div>
            ))}
          </div>

        </motion.div>
      </section>

      {/* 6. Dynamic Export B2B Call-To-Action */}
      <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-dark-green text-white p-8 md:p-12 rounded-3xl border border-gold-accent/25 shadow-xl text-center relative overflow-hidden bg-cover bg-center bg-no-repeat md:bg-fixed bg-scroll"
          style={{ backgroundImage: "url('/cta-bg.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-green/90 to-dark-green/95 mix-blend-multiply"></div>
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] uppercase tracking-widest text-gold-accent font-bold block">PARTNER WITH SRI VARAHI</span>
            <h2 className="font-serif text-2xl md:text-3xl font-extrabold">Request an Export Shipping Quote</h2>
            <p className="text-xs text-cream-bg/75 leading-relaxed font-light max-w-lg mx-auto">
              Our B2B trade specialists provide personalized pricing tables, customized private labeling guidelines, and detailed FCL/LCL ocean freight quotes within 24 hours.
            </p>
            <div className="pt-2">
              <Link 
                to="/quote" 
                className="bg-gold-accent text-dark-green font-bold text-xs py-3 px-8 rounded-full hover:bg-gold-light hover:scale-105 active:scale-95 transition-all shadow-md inline-block"
              >
                Get FCL Shipping Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
