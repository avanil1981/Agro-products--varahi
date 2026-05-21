import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Search, Eye, Database, Package, Truck, Award, CheckCircle } from 'lucide-react';

export default function Quality() {
  const steps = [
    {
      num: "01",
      title: "Careful Sourcing",
      desc: "Our field experts visit crop centers directly to inspect soil composition, moisture level parameters, and pesticide history. We secure agreements only with compliant farm cooperatives.",
      icon: Shield
    },
    {
      num: "02",
      title: "Quality Inspection & Grading",
      desc: "On arrival, crop samples are sent to our laboratory. We check active curcumin indexes in turmeric, grain lengths in basmati, moisture limits, and verify zero foreign material levels.",
      icon: Search
    },
    {
      num: "03",
      title: "Hygienic Cleaning & De-stoning",
      desc: "Grains and spices are processed through advanced magnet separators, gravity tables, vibrator screens, and clean washing lines to isolate stones, soil particles, or dust.",
      icon: Eye
    },
    {
      num: "04",
      title: "Proper Packaging",
      desc: "Crops are packed inside multi-layered food-grade bags, jute packaging with PP lining, vacuum bags, or retail containers under automated machinery control to lock out humidity.",
      icon: Package
    },
    {
      num: "05",
      title: "Safe Storage",
      desc: "Products are stored in ventilated, moisture-controlled warehouses. Pallets are used to prevent direct ground contact, ensuring zero pest infestation or color degradation.",
      icon: Database
    },
    {
      num: "06",
      title: "On-Time Dispatch",
      desc: "Containers are thoroughly swept, checked for holes or smell before loading. We install silica gel moisture absorbers and supervise sealing processes for flawless transit.",
      icon: Truck
    }
  ];

  return (
    <div className="bg-cream-bg/40 min-h-screen pb-20">
      
      {/* 1. Page Hero Header */}
      <section className="relative bg-gradient-to-br from-primary-green to-dark-green text-white py-20 px-4 md:px-8 border-b-4 border-gold-accent text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F8F6F1_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold-accent font-bold block">ASSURANCE PLAN</span>
          <h1 className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight">
            Quality You Can Trust
          </h1>
          <div className="w-20 h-1 bg-gold-accent mx-auto mt-4"></div>
          <p className="text-xs md:text-sm text-cream-bg/70 max-w-xl mx-auto font-light leading-relaxed">
            From the fertile Indian soils to the sealed shipping containers, we maintain a zero-compromise quality framework to satisfy strict global norms.
          </p>
        </div>
      </section>

      {/* 2. Process Quality Steps Timeline */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-1.5 text-gold-accent uppercase font-bold text-[10px] tracking-widest">
            <Award className="w-4 h-4 text-gold-accent" />
            <span>Workflow Parameters</span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-dark-green mt-1">
            Our Multi-Stage Quality Pipeline
          </h2>
          <p className="text-xs text-soft-gray font-light mt-2 leading-relaxed">
            Our structured 6-step quality control system ensures that every container shipment complies with the technical specifications agreed upon in our corporate sales sheets.
          </p>
        </div>

        {/* Vertical/Horizontal Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((st, idx) => {
            const IconComp = st.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-3xl border border-cream-bg shadow-sm hover:shadow-md hover:border-gold-accent/25 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-serif text-2xl font-black text-gold-accent/40 group-hover:text-gold-accent transition-colors">
                      {st.num}
                    </span>
                    <div className="bg-primary-green/10 p-2.5 rounded-xl text-primary-green group-hover:bg-primary-green group-hover:text-gold-accent transition-colors duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-serif text-base font-bold text-dark-green mb-3">
                    {st.title}
                  </h3>
                  <p className="text-xs text-soft-gray leading-relaxed font-light">
                    {st.desc}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-cream-bg mt-5 flex items-center text-[10px] text-primary-green font-bold group-hover:text-gold-accent">
                  <CheckCircle className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                  <span>QC Passed Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 3. Safety Standard Note Banner */}
      <section className="bg-white py-16 px-4 md:px-8 border-y border-gold-accent/10">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h3 className="font-serif text-xl font-bold text-dark-green">Zero-Contamination Storage Standard</h3>
          <p className="text-xs text-soft-gray font-light leading-relaxed max-w-xl mx-auto">
            Our facilities follow strict sanitation rules, regular temperature and moisture checks, and use modern cargo packing materials to protect shipments from moisture or external damage.
          </p>
        </div>
      </section>

    </div>
  );
}
