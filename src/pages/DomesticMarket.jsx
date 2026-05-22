import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, Store, Milestone, CheckSquare, Award, Sparkles, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

export default function DomesticMarket() {
  const domesticChannels = [
    {
      title: "Supermarket & Retail Packing",
      desc: "Supplying polished, sorted, and metal-inspected basmati rice, turmeric, onions, garlic and chillies under high-shelf-life retail packaging formats.",
      icon: Store
    },
    {
      title: "HoReCa Bulk Supply",
      desc: "Specialized direct kitchen supply pipelines for hotel chains, flight caterers, premium restaurant groups, and industrial canteens requiring stable supply channels.",
      icon: Milestone
    },
    {
      title: "Private Label Lamination",
      desc: "Equipped with automated pouch-packing and carton machinery, we assist retail grocery brands with premium private labeling contracts.",
      icon: ShieldCheck
    },
    {
      title: "Distributor & Wholesalers Network",
      desc: "Attractive commercial discounts, credit validation, high volume capacity, and stable supply consistency to local grain markets across India.",
      icon: Truck
    }
  ];

  const packSizes = [
    { size: "1 kg", format: "BOPP / Vacuum Bags", use: "Premium retail supermarkets" },
    { size: "5 kg", format: "Laminated Carry Pouches", use: "Gourmet retail / household" },
    { size: "10 kg", format: "High Strength Carry Bags", use: "Medium families / grocery" },
    { size: "25 kg", format: "Heavy Duty PP / Jute Bags", use: "Supermarkets / wholesale" },
    { size: "26 kg", format: "Customized Trading Sacks", use: "Regional trade standards" },
    { size: "50 kg", format: "Industrial Grade Bags", use: "Wholesale grain mandis / mills" }
  ];

  return (
    <div className="bg-cream-bg/40 min-h-screen pb-20">
      <SEO 
        title="Domestic Agro Wholesale Market | Indian Food Supply"
        description="Sri Varahi Agro Foods LLP is a premium domestic supplier of quality agricultural commodities in India. We supply supermarkets, HoReCa bulk buyers, and local wholesale distributors."
        keywords="domestic agro supplier, Indian food supply, grain wholesale India, HoReCa food supply, bulk crop distribution, private label packaging India"
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
            DOMESTIC NETWORK
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            Domestic Supply Across India
          </motion.h1>
          <div className="w-20 h-1 bg-gold-accent mx-auto mt-4"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm text-cream-bg/70 max-w-xl mx-auto font-light leading-relaxed"
          >
            Supplying superior quality grains, spices, vegetables, and agro commodities to national supermarkets, distributors, food processors, and wholesale buyers.
          </motion.p>
        </div>
      </section>

      {/* 2. Domestic Channels Grid */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-dark-green">
            Tailored Commercial Sourcing Solutions
          </h2>
          <div className="w-16 h-1 bg-gold-accent mx-auto my-3"></div>
          <p className="text-xs text-soft-gray font-light leading-relaxed">
            Whether you operate a chain of hypermarkets or direct massive food-processing lines, our Hyderabad processing nodes guarantee stable price sheets and strict quality parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {domesticChannels.map((chan, idx) => {
            const IconComp = chan.icon;
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-cream-bg shadow-sm hover:shadow-md hover:border-gold-accent/20 transition-all flex items-start space-x-5"
              >
                <div className="bg-primary-green/10 p-3 rounded-2xl text-primary-green shrink-0">
                  <IconComp className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-base font-bold text-dark-green">{chan.title}</h3>
                  <p className="text-xs text-soft-gray font-light leading-relaxed">{chan.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Packaging Sizes Strip */}
      <section className="bg-white py-20 px-4 md:px-8 border-y border-gold-accent/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-widest uppercase text-gold-accent">FLEXIBLE WEIGHT OPTIONS</span>
            <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-dark-green mt-1">
              Standard Pack Sizes & Formats
            </h2>
            <p className="text-xs text-soft-gray font-light mt-2">
              We cater to all standard domestic packaging weight divisions, maintaining proper hygiene barrier laminations on every size.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {packSizes.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-cream-bg/40 p-5 rounded-2xl border border-cream-bg hover:border-gold-accent/30 hover:bg-white text-center transition-all duration-300"
              >
                <div className="font-serif text-lg font-bold text-primary-green bg-primary-green/5 py-1.5 rounded-xl border border-primary-green/10">
                  {item.size}
                </div>
                <h4 className="text-[10px] uppercase font-bold text-dark-green mt-3.5 tracking-wider">{item.format}</h4>
                <p className="text-[9px] text-soft-gray font-light mt-1.5 leading-tight">{item.use}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Partner CTA Banner */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-dark-green text-white p-8 md:p-12 rounded-3xl border border-gold-accent/25 shadow-xl text-center relative overflow-hidden bg-cover bg-center bg-no-repeat md:bg-fixed bg-scroll"
          style={{ backgroundImage: "url('/cta-bg.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-green/90 to-dark-green/90"></div>
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] uppercase tracking-widest text-gold-accent font-bold block">PARTNER WITH SRI VARAHI</span>
            <h2 className="font-serif text-2xl md:text-3xl font-extrabold">Become a Registered Distributor</h2>
            <p className="text-xs text-cream-bg/70 leading-relaxed font-light max-w-lg mx-auto">
              We are actively expanding our retail partner and distributor network across various states in India. Get in touch with our commercial sales desk to receive sample bags and regional distributorship documents.
            </p>
            <div className="pt-2">
              <Link 
                to="/contact" 
                className="bg-gold-accent text-dark-green font-bold text-xs py-3 px-8 rounded-full hover:bg-gold-light transition-all shadow-md inline-block"
              >
                Become a Distributor
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
