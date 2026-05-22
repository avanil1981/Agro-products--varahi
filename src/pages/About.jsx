import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Award, 
  Compass, 
  Eye, 
  Sparkles, 
  Building, 
  CheckCircle, 
  Shield, 
  Search, 
  Database, 
  Package, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  Globe,
  MapPin,
  Flame,
  Coffee,
  Leaf
} from 'lucide-react';
import { certifications } from '../data/agroData';
import SEO from '../components/SEO';

// Framer motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const hoverCard = {
  hover: {
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export default function About() {
  const [selectedCert, setSelectedCert] = useState(null);
  const values = [
    { title: "Quality First", desc: "No compromise on purity, sorting, size parameters, or freshness standards." },
    { title: "Unwavering Trust", desc: "Honest trade practices, realistic shipping schedules, and absolute transparent pricing." },
    { title: "Growth Mindset", desc: "Continuously improving agricultural sourcing networks and grading technologies." },
    { title: "Commitment", desc: "Executing contracts fully, meeting technical specifications, and shipping on-time." },
    { title: "Customer Satisfaction", desc: "Delivering bespoke packing solutions and active assistance post container arrival." },
    { title: "Ethical Conduct", desc: "Fair trade directly supporting partner cultivators and sustainable agricultural practices." }
  ];

  const qualitySteps = [
    { num: "01", title: "Careful Sourcing", desc: "Our field experts visit crop centers directly to inspect soil composition, moisture level parameters, and pesticide history.", icon: Shield },
    { num: "02", title: "Quality Inspection & Grading", desc: "On arrival, crop samples are sent to our laboratory. We check grain lengths, moisture limits, and verify zero foreign materials.", icon: Search },
    { num: "03", title: "Hygienic Cleaning & De-stoning", desc: "Grains and spices are processed through advanced magnet separators, gravity tables, and clean washing lines.", icon: Eye },
    { num: "04", title: "Proper Packaging", desc: "Crops are packed inside multi-layered food-grade bags, jute packaging, or vacuum retail containers under automated control.", icon: Package },
    { num: "05", title: "Safe Storage", desc: "Products are stored in ventilated, moisture-controlled warehouses on pallets to ensure zero pest infestation or degradation.", icon: Database },
    { num: "06", title: "On-Time Dispatch", desc: "Containers are thoroughly swept and checked before loading. We install silica gel moisture absorbers for flawless transit.", icon: Truck }
  ];

  return (
    <div className="bg-cream-bg/40 min-h-screen">
      <SEO 
        title="About Us | Premium Indian Agro Exporter"
        description="Learn about Sri Varahi Agro Foods LLP, a premier Indian agricultural commodity exporter. Discover our direct-from-farm sourcing, processing standards, and global shipping capabilities."
        keywords="about Sri Varahi Agro, Indian agricultural exporter, agro products sourcing, crop procurement India, farm direct export"
      />

      {/* 1. Page Hero Header */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-[#042813] via-[#063B1D] to-[#0A4A25] text-white py-20 px-4 md:px-8 overflow-hidden">
        {/* Parallax background image */}
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/agriculture-hero.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-green via-transparent to-transparent opacity-80"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-gold-accent bg-gold-accent/10 border border-gold-accent/20 uppercase">
              <Sparkles className="w-3.5 h-3.5 mr-2 animate-pulse" />
              Sustaining Global Purity
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Rooted in Integrity, <br />
              <span className="text-gold-accent">Cultivating Trust.</span>
            </h1>
            <div className="w-24 h-1.5 bg-gold-accent rounded-full"></div>
            <p className="text-sm md:text-base text-cream-bg/85 font-light leading-relaxed max-w-xl">
              Sri Varahi Agro Foods LLP is a premier grower, processor, and exporter of high-grade Indian agricultural commodities, connecting pristine domestic farm belts to major ports worldwide.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                to="/products"
                className="bg-gold-accent hover:bg-gold-light text-dark-green font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group"
              >
                Explore Catalog
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
              <Link 
                to="/contact"
                className="bg-transparent hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative p-3 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl overflow-hidden group">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
                <img 
                  src="/agriculture-hero.png" 
                  alt="Premium Golden Crop Sourcing" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-green/50 to-transparent"></div>
              </div>
              
              {/* Overlay Badge */}
              <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-gold-accent to-gold-light p-5 rounded-2xl shadow-xl border border-white/10 max-w-xs transform -rotate-1">
                <div className="text-[10px] uppercase font-bold tracking-widest text-dark-green mb-0.5">Sourcing Excellence</div>
                <div className="text-sm font-serif text-dark-green font-extrabold">100% Clean Sourcing</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Brand Identity Showcase (User Shared Infographic) */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Left Column: Infographic Frame */}
          <motion.div variants={fadeUp} className="lg:col-span-6 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-green/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-accent/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="bg-white p-4 md:p-6 rounded-3xl shadow-[0_20px_50px_rgba(6,59,29,0.08)] border border-gold-accent/15 transform hover:scale-[1.01] transition-transform duration-500">
              <div className="rounded-2xl overflow-hidden relative border border-cream-bg">
                <img 
                  src="/sri-varahi-infographic.jpg" 
                  alt="Sri Varahi Agro Foods LLP Infographic" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1 text-[10px] text-soft-gray font-light">
                <span className="flex items-center"><MapPin className="w-3.5 h-3.5 text-gold-accent mr-1 shrink-0" /> Hyderabad, India</span>
                <span className="font-bold text-primary-green uppercase tracking-wider">Quality • Trust • Growth</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive breakdown */}
          <motion.div variants={fadeUp} className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center space-x-2 text-primary-green uppercase font-bold text-xs tracking-widest">
                <Award className="w-4 h-4 text-gold-accent" />
                <span>Our Standard Pillars</span>
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-dark-green leading-tight">
                An Absolute Mark of Quality Sourcing
              </h2>
              <div className="w-20 h-1 bg-gold-accent rounded-full"></div>
            </div>

            <p className="text-xs md:text-sm text-soft-gray leading-relaxed font-light">
              As depicted in our corporate identity, our philosophy integrates robust quality stamps with the finest agricultural treasures of India. We are dedicated to providing chemical-free, residue-compliant, and perfectly packed commodities.
            </p>

            {/* Tags Breakdown */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-2xl border border-cream-bg shadow-sm">
                <h4 className="font-serif text-xs font-bold text-dark-green flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gold-accent mr-2 shrink-0"></span>
                  100% Natural Sourcing
                </h4>
                <p className="text-[10px] text-soft-gray mt-1 font-light">No additives, artificial colorings, or polishing residues.</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-cream-bg shadow-sm">
                <h4 className="font-serif text-xs font-bold text-dark-green flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary-green mr-2 shrink-0"></span>
                  Sun Dried & Assured
                </h4>
                <p className="text-[10px] text-soft-gray mt-1 font-light">Processed under traditional, hygienic sun-drying protocols.</p>
              </div>
            </div>

            {/* Quick Interactive Crop Filters */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-bold text-dark-green uppercase tracking-wider flex items-center">
                <Leaf className="w-4 h-4 text-primary-green mr-2" />
                Explore Our Primary Crops
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: "IR64 Rice", cat: "rice-flours", icon: <CheckCircle className="w-3 h-3 text-gold-accent" /> },
                  { name: "Teja Chilli", cat: "chilli", icon: <Flame className="w-3 h-3 text-red-500" /> },
                  { name: "Nizamabad Turmeric", cat: "powders", icon: <Sparkles className="w-3 h-3 text-amber-500" /> },
                  { name: "Coffee Beans", cat: "coffee-beans", icon: <Coffee className="w-3 h-3 text-amber-800" /> },
                  { name: "Spices & Pulses", cat: "whole-spices", icon: <Globe className="w-3 h-3 text-emerald-600" /> }
                ].map((crop, index) => (
                  <Link
                    key={index}
                    to={`/products?category=${crop.cat}`}
                    className="inline-flex items-center px-4 py-2 rounded-xl bg-white border border-gold-accent/20 hover:border-primary-green text-[11px] text-dark-green font-medium shadow-sm hover:shadow-md hover:bg-primary-green/5 transition-all duration-300"
                  >
                    <span className="mr-1.5 shrink-0">{crop.icon}</span>
                    {crop.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. The Story & Sourcing Operations */}
      <section className="bg-white py-24 px-4 md:px-8 border-y border-gold-accent/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 text-primary-green uppercase font-bold text-xs tracking-widest">
              <Building className="w-4 h-4 text-gold-accent" />
              <span>Our Roots & Logistics</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-dark-green leading-tight">
              Sourced Directly, Handled Professionally, Shipped Globally
            </h2>
            <div className="w-16 h-1.5 bg-gold-accent rounded-full"></div>
            
            <p className="text-xs md:text-sm text-soft-gray leading-relaxed font-light">
              Operating out of the bustling business core of <b>Hyderabad, Telangana, India</b>, Sri Varahi Agro Foods LLP bridges the gap between hardworking rural farm gates and discerning global importers. 
            </p>
            <p className="text-xs md:text-sm text-soft-gray leading-relaxed font-light">
              Our specialists directly inspect crop zones for pesticide safety limits and optimal moisture levels before procurement. By consolidating our shipments through major coastal ports (including Krishnapatnam, Nhava Sheva, and Chennai), we maintain temperature-controlled workflows for standard shipping containers and seasonal priority air cargo.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-3.5">
                <div className="bg-primary-green/10 p-2.5 rounded-xl text-primary-green shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-dark-green">Direct Farm Links</h4>
                  <p className="text-[10px] text-soft-gray font-light">Contract sourcing straight from vetted farming clusters.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3.5">
                <div className="bg-gold-accent/10 p-2.5 rounded-xl text-gold-accent shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-dark-green">Residue Checks</h4>
                  <p className="text-[10px] text-soft-gray font-light">Laboratory tested for strict chemical compliance limits.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative p-4 bg-cream-bg rounded-3xl border border-gold-accent/15 shadow-xl">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-inner relative group">
                <img 
                  src="/quality-control.png" 
                  alt="Sri Varahi Quality Sourcing and Laboratory Testing" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-green/30 to-transparent"></div>
              </div>
              
              {/* Overlay Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gold-accent/10 max-w-xs hidden sm:block">
                <div className="text-[9px] uppercase font-bold tracking-widest text-gold-accent mb-0.5">HQ Operations</div>
                <div className="text-xs font-serif text-dark-green font-bold">Hyderabad, Telangana</div>
                <p className="text-[9px] text-soft-gray font-light mt-1.5 leading-relaxed">
                  Strategic trade networks linking the Deccan plateau crop zones to global seaports.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="bg-cream-bg/25 py-24 px-4 md:px-8 border-b border-gold-accent/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-gold-accent/15 relative overflow-hidden group hover:shadow-xl hover:border-gold-accent/30 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-green/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="bg-primary-green text-gold-accent p-3.5 rounded-2xl w-fit mb-6 shadow-md shadow-primary-green/10">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-dark-green">Our Mission</h3>
            <p className="text-xs md:text-sm text-soft-gray font-light leading-relaxed mt-4">
              To supply premium-quality Indian agro and food commodities to customers globally with full transparency, dependable logistics, and fair pricing. We actively empower local cultivators by incorporating fair-trade pricing while guaranteeing overseas wholesale buyers absolute grade consistency.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-gold-accent/15 relative overflow-hidden group hover:shadow-xl hover:border-gold-accent/30 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="bg-gold-accent text-dark-green p-3.5 rounded-2xl w-fit mb-6 shadow-md shadow-gold-accent/10">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-dark-green">Our Vision</h3>
            <p className="text-xs md:text-sm text-soft-gray font-light leading-relaxed mt-4">
              To become a globally recognized Indian agricultural export organization synonymous with flawless grading, punctual shipping cycles, and exceptional buyer satisfaction. We aim to construct an unshakeable trade standard that defines trust for generations.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 5. Corporate Values */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 text-gold-accent uppercase font-bold text-[10px] tracking-widest">
            <Sparkles className="w-4 h-4 text-gold-accent" />
            <span>Ethical Standards</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-dark-green mt-2">
            OUR CORE VALUES
          </h2>
          <div className="w-24 h-1 bg-gold-accent mx-auto my-4 rounded-full"></div>
          <p className="text-xs md:text-sm text-soft-gray font-light">
            These six pillars guide every wholesale trade contract we sign, every packaging run we supervise, and every relationship we construct.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              variants={hoverCard}
              whileHover="hover"
              className="bg-white p-8 rounded-2xl shadow-sm border border-cream-bg hover:border-gold-accent/25 hover:shadow-md transition-all group"
            >
              <h4 className="font-serif text-lg font-bold text-dark-green group-hover:text-primary-green transition-colors gold-line pb-2.5">
                {val.title}
              </h4>
              <p className="text-[12px] text-soft-gray mt-4 leading-relaxed font-light">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Quality Framework Section */}
      <section className="bg-cream-bg/20 py-24 px-4 md:px-8 border-y border-gold-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-1.5 text-gold-accent uppercase font-bold text-[10px] tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>Assurance Plan</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-dark-green mt-2">
              Our Quality Pipeline
            </h2>
            <div className="w-24 h-1 bg-gold-accent mx-auto my-4 rounded-full"></div>
            <p className="text-xs md:text-sm text-soft-gray font-light">
              From fertile Indian soils to sealed shipping containers, our 6-step quality control ensures zero compromises on international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualitySteps.map((st, idx) => {
              const IconComp = st.icon;
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-cream-bg shadow-sm hover:shadow-lg hover:border-gold-accent/25 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-serif text-2xl font-black text-gold-accent/40 group-hover:text-gold-accent transition-colors">{st.num}</span>
                      <div className="bg-primary-green/10 p-2.5 rounded-xl text-primary-green group-hover:bg-primary-green group-hover:text-gold-accent transition-colors duration-300 shadow-sm">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-serif text-base font-bold text-dark-green mb-3">{st.title}</h3>
                    <p className="text-[12px] text-soft-gray leading-relaxed font-light">{st.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-cream-bg mt-5 flex items-center text-[10px] text-primary-green font-bold group-hover:text-gold-accent">
                    <CheckCircle className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                    <span>QC Passed Standard</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Certifications Section */}
      <section className="bg-white py-24 px-4 md:px-8 border-b border-gold-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-1.5 text-gold-accent uppercase font-bold text-[10px] tracking-widest">
              <Award className="w-4 h-4" />
              <span>Compliance Hub</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-dark-green mt-2">
              Official Credentials
            </h2>
            <div className="w-24 h-1 bg-gold-accent mx-auto my-4 rounded-full"></div>
            <p className="text-xs md:text-sm text-soft-gray font-light">
              Registered and compliant with major Indian food regulatory organizations and global customs clearances for seamless exports. Click any active card to view the official certificate.
            </p>
          </div>

          {/* Active Verified Certificates Grid */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2.5 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              <h3 className="text-xs font-bold text-dark-green uppercase tracking-widest">Verified Export Licenses & Registrations</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.filter(c => c.image).map((cert, idx) => (
                <motion.div 
                  key={cert.id} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-3xl border border-cream-bg shadow-sm hover:shadow-lg hover:border-gold-accent/25 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="bg-primary-green/5 text-primary-green font-mono text-[9px] uppercase tracking-wider py-1.5 px-3 rounded-lg border border-primary-green/10 font-bold">{cert.logoText}</span>
                      <span className="flex items-center space-x-1 text-[9px] text-green-600 font-extrabold uppercase bg-green-100/60 px-2 py-0.5 rounded-full">
                        <ShieldCheck className="w-3.5 h-3.5 text-green-600 shrink-0 mr-0.5" />
                        <span>Active</span>
                      </span>
                    </div>
                    <h3 className="font-serif text-base font-bold text-dark-green leading-snug group-hover:text-primary-green transition-colors">{cert.name}</h3>
                    <p className="text-[11px] text-soft-gray font-light mt-2 leading-relaxed">{cert.description}</p>
                    
                    {/* Converted Certificate PDF Preview */}
                    <div 
                      onClick={() => setSelectedCert(cert)}
                      className="mt-5 rounded-2xl overflow-hidden aspect-[4/3] relative border border-gold-accent/10 cursor-zoom-in group/cert shadow-inner bg-cream-bg/25"
                    >
                      <img 
                        src={cert.image} 
                        alt={cert.name} 
                        className="w-full h-full object-cover object-top filter contrast-[1.01] brightness-[0.99] group-hover/cert:scale-[1.03] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-dark-green/0 group-hover/cert:bg-dark-green/30 transition-all duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 bg-gold-accent text-dark-green text-[9px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-xl shadow-xl flex items-center transform scale-90 group-hover/cert:scale-100 duration-300">
                          <Search className="w-3.5 h-3.5 mr-1.5" /> View Certificate
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-cream-bg mt-5 flex items-center justify-between">
                    <span className="text-[9px] text-soft-gray font-medium">Compliance Document Verified</span>
                    <button 
                      onClick={() => setSelectedCert(cert)}
                      className="text-[10px] text-primary-green font-bold hover:text-gold-accent flex items-center transition-colors group/btn"
                    >
                      View Details
                      <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Planned / Upcoming Certifications Roadmap */}
          <div className="mt-16 pt-12 border-t border-cream-bg">
            <div className="flex items-center space-x-2.5 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-accent/60"></span>
              <h3 className="text-xs font-bold text-dark-green uppercase tracking-widest">Upcoming Standards & Roadmap</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {certifications.filter(c => !c.image).map((cert, idx) => (
                <motion.div 
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-cream-bg/15 p-5 rounded-2xl border border-cream-bg hover:border-gold-accent/15 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-soft-gray/5 text-soft-gray font-mono text-[8px] uppercase tracking-wider py-1 px-2.5 rounded border border-soft-gray/10 font-bold">{cert.logoText}</span>
                      <Compass className="w-4 h-4 text-gold-accent/40" />
                    </div>
                    <h4 className="font-serif text-sm font-bold text-dark-green leading-snug">{cert.name}</h4>
                    <p className="text-[10px] text-soft-gray font-light mt-1.5 leading-relaxed">{cert.description}</p>
                  </div>
                  <div className="pt-3.5 border-t border-cream-bg/40 mt-4 flex items-center justify-between">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                      {cert.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 8. Trust Section */}
      <section 
        className="bg-dark-green py-24 px-4 md:px-8 border-t-2 border-gold-accent text-white relative bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/cta-bg.png')" }}
      >
        <div className="absolute inset-0 bg-dark-green/90"></div>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#F8F6F1_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center relative z-10 space-y-6"
        >
          <div className="inline-flex items-center space-x-1.5 text-gold-accent uppercase font-bold text-[10px] tracking-widest">
            <Award className="w-4 h-4" />
            <span>Why Buyers Trust Us</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight">
            High-Grade Indian Agro Sourced Professionally
          </h2>
          <p className="text-xs md:text-sm text-cream-bg/70 leading-relaxed font-light max-w-2xl mx-auto">
            From the initial email inquiry down to port container stuffing and document release, we maintain absolute transparency. We treat every order as our ticket to a long-term commercial partnership.
          </p>
          <div className="pt-4">
            <Link 
              to="/quote" 
              className="inline-flex items-center bg-gold-accent hover:bg-gold-light text-dark-green font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Request a Bulk Quotation
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Premium Certificate Zoom Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-dark-green/85 backdrop-blur-md cursor-zoom-out"
            ></motion.div>
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.4)] border border-gold-accent/20 max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 bg-dark-green/10 hover:bg-dark-green/20 text-dark-green hover:text-red-600 p-2.5 rounded-full z-20 transition-all duration-300 shadow-sm"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Left Column: Full Certificate Image */}
              <div className="md:w-[55%] bg-cream-bg/40 p-6 md:p-8 flex items-center justify-center border-r border-cream-bg overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gold-accent/15 max-w-full">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.name} 
                    className="w-full h-auto object-contain max-h-[75vh]"
                  />
                </div>
              </div>

              {/* Right Column: Certificate Details */}
              <div className="md:w-[45%] p-8 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[40vh] md:max-h-[90vh]">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="bg-primary-green/10 text-primary-green font-mono text-[10px] font-bold uppercase tracking-wider py-1.5 px-3.5 rounded-xl border border-primary-green/10">
                      {selectedCert.logoText}
                    </span>
                    <span className="bg-green-100 text-green-800 text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full flex items-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-green-600 mr-1.5 shrink-0" /> Verified Active
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-dark-green leading-tight">
                      {selectedCert.name}
                    </h3>
                    <div className="w-16 h-1 bg-gold-accent rounded-full"></div>
                  </div>

                  <p className="text-xs md:text-sm text-soft-gray font-light leading-relaxed">
                    {selectedCert.description}
                  </p>

                  <div className="bg-cream-bg/30 p-4.5 rounded-2xl border border-cream-bg space-y-2.5">
                    <h4 className="text-[10px] font-bold text-dark-green uppercase tracking-wider">Compliance Highlights:</h4>
                    <ul className="space-y-2">
                      {[
                        "Fully validated & verified by Indian trade authorities.",
                        "Clean audit history with 100% compliance record.",
                        "Licensed for global bulk shipping clearances."
                      ].map((bullet, bidx) => (
                        <li key={bidx} className="flex items-start text-[10px] text-soft-gray font-light leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary-green mr-2 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row gap-3 border-t border-cream-bg mt-8">
                  <a 
                    href={selectedCert.image} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-dark-green hover:bg-primary-green text-white font-bold text-xs uppercase tracking-wider py-3.5 px-5 rounded-xl transition-all duration-300 text-center flex items-center justify-center shadow-md hover:shadow-lg"
                  >
                    Open in New Tab
                  </a>
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="flex-1 bg-transparent hover:bg-cream-bg text-dark-green font-bold text-xs uppercase tracking-wider py-3.5 px-5 rounded-xl border border-cream-bg transition-all duration-300 text-center"
                  >
                    Back to Hub
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
