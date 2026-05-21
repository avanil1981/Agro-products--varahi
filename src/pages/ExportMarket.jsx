import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe2, FileCheck, PackageCheck, Ship, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { exportMarkets } from '../data/agroData';

export default function ExportMarket() {
  const exportServices = [
    {
      title: "Global Supply Chain Sourcing",
      desc: "Direct procurement from farmers followed by cold chain holding systems to preserve vitamins and natural aromatic oils.",
      icon: Globe2
    },
    {
      title: "Complete Export Documentation",
      desc: "We manage Phytosanitary Certificates, Certificate of Origin, SGS quality reports, Phyto fumigations, and customized bank trade documents.",
      icon: FileCheck
    },
    {
      title: "Private Label Packaging Support",
      desc: "Beautiful bespoke design options (BOPP, Kraft, vacuum packs) with full nutritional facts, bar codes, and customized weight options.",
      icon: PackageCheck
    },
    {
      title: "Container Loading & Port Logistics",
      desc: "Supervised loading processes, strict palletizing, moisture absorption strips installation, and rapid customs transit to major Indian ports.",
      icon: Ship
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

  return (
    <div className="bg-cream-bg/40 min-h-screen pb-20">
      
      {/* 1. Page Hero Header */}
      <section className="relative bg-gradient-to-br from-primary-green to-dark-green text-white py-20 px-4 md:px-8 border-b-4 border-gold-accent text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F8F6F1_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold-accent font-bold block">GLOBAL EXPORT</span>
          <h1 className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight">
            Exporting Indian Agro Worldwide
          </h1>
          <div className="w-20 h-1 bg-gold-accent mx-auto mt-4"></div>
          <p className="text-xs md:text-sm text-cream-bg/70 max-w-xl mx-auto font-light leading-relaxed">
            Delivering rich, safe, and certified agricultural crops directly from the heart of India to importers across major international sea & air hubs.
          </p>
        </div>
      </section>

      {/* 2. Global Services Cards */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {exportServices.map((srv, idx) => {
          const IconComp = srv.icon;
          return (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-3xl border border-gold-accent/5 shadow-sm hover:shadow-md hover:border-gold-accent/25 transition-all group flex items-start space-x-5"
            >
              <div className="bg-primary-green/10 p-3.5 rounded-2xl text-primary-green shrink-0 group-hover:bg-primary-green group-hover:text-gold-accent transition-colors duration-300">
                <IconComp className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-dark-green">{srv.title}</h3>
                <p className="text-xs text-soft-gray leading-relaxed font-light">{srv.desc}</p>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Export Targets & Country List */}
      <section className="bg-white py-20 px-4 md:px-8 border-y border-gold-accent/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-bold tracking-widest uppercase text-gold-accent">GLOBAL DESTINATIONS</span>
            <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-dark-green">
              Active Trade & Loading Operations
            </h2>
            <p className="text-xs md:text-sm text-soft-gray font-light leading-relaxed">
              We manage recurring sea container shipments (FCL) and express temperature-controlled air cargo lots to several international regions. Our logistics networks are highly attuned to international port parameters.
            </p>
            <div className="pt-2">
              <Link 
                to="/contact"
                className="bg-primary-green text-white font-bold text-xs py-3 px-6 rounded-xl border border-gold-accent/30 hover:bg-dark-green transition-all"
              >
                Send Export Inquiry
              </Link>
            </div>
          </div>

          {/* Right Targets Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {exportMarkets.map((market, idx) => (
              <div 
                key={idx} 
                className="bg-cream-bg/40 p-5 rounded-2xl border border-gold-accent/10 hover:border-gold-accent/40 hover:bg-white transition-all group flex items-start space-x-3.5"
              >
                <div className="bg-primary-green text-gold-accent text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                  {market.code}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-dark-green">{market.name}</h4>
                  <p className="text-[10px] text-soft-gray font-light mt-1 leading-relaxed">{market.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Export Documentation & Compliance */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gold-accent/10 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-5 space-y-4">
            <div className="bg-gold-accent/10 p-3 rounded-2xl w-fit text-gold-accent">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-dark-green">
              Pre-Shipped Documentation Clearance
            </h3>
            <p className="text-xs text-soft-gray font-light leading-relaxed">
              We understand that correct bank-vetted paperwork is crucial to avoid port demurrage costs. We deliver absolute document compliance for flawless customs clearance.
            </p>
          </div>

          <div className="md:col-span-7 bg-cream-bg/50 p-6 rounded-2xl border border-cream-bg space-y-3.5">
            {exportDocs.map((doc, idx) => (
              <div key={idx} className="flex items-center text-xs text-soft-gray font-light">
                <CheckCircle2 className="w-4 h-4 text-primary-green mr-3 shrink-0" />
                <span>{doc}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
