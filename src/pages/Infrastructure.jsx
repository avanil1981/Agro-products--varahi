import React from 'react';
import { motion } from 'framer-motion';
import { LandPlot, Warehouse, Factory, Navigation, Container, FileSignature, CheckCircle } from 'lucide-react';

export default function Infrastructure() {
  const infraItems = [
    {
      title: "Direct Sourcing Network",
      desc: "Direct tie-ups with verified farmer co-operatives in Salem, Nizamabad, Coorg, Wayanad, Nashik, and the Indo-Gangetic grain belts.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
      icon: LandPlot
    },
    {
      title: "Dry & Cold Storage Facilities",
      desc: "Palletized warehousing keeping humidity levels strictly controlled. Separate sections avoid cross-contamination of delicate coffee beans.",
      image: "https://images.unsplash.com/photo-1595275372297-f57bb4824707?auto=format&fit=crop&w=600&q=80",
      icon: Warehouse
    },
    {
      title: "Automated Packaging Facility",
      desc: "Equipped with magnetic separators, gravity sort systems, vacuum pack sealers, BOPP bag sealing, and heavy-duty weight fillers.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      icon: Factory
    },
    {
      title: "Logistics Coordination Desk",
      desc: "Active logistics team working directly with prime CFS hubs, providing rapid clearances and seamless truck-to-terminal coordination.",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=80",
      icon: Navigation
    },
    {
      title: "Supervised Container Loading",
      desc: "Containers are audited for smell, holes, and rust prior to loading. We install desiccants (drying pads) and seal under strict supervision.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      icon: Container
    },
    {
      title: "In-House Customs Documentation",
      desc: "Rapid phyto clearances, fumigation clearances, custom filings, bank draft collections, and global Bill of Lading releases.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
      icon: FileSignature
    }
  ];

  const timelineSteps = [
    { step: "Procure", title: "Direct Farm Procurement", desc: "Inspection of crops, moisture, sorting validation at grower clusters." },
    { step: "Process", title: "Automated Sorting & Grading", desc: "Magnetic filtering, cleaning stones, isolating discolored grains." },
    { step: "Pack", title: "Moisture-Barred Packing", desc: "Sealing inside heavy-duty multi-wall bags or private label BOPP." },
    { step: "Ship", title: "Secure Port Dispatch", desc: "Clearance at port CFS, container seal supervision, ocean transit." }
  ];

  return (
    <div className="bg-cream-bg/40 min-h-screen pb-20">
      
      {/* 1. Page Hero Header */}
      <section className="relative bg-gradient-to-br from-primary-green to-dark-green text-white py-20 px-4 md:px-8 border-b-4 border-gold-accent text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F8F6F1_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold-accent font-bold block">CAPABILITY REPORT</span>
          <h1 className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight">
            Infrastructure & Supply Capability
          </h1>
          <div className="w-20 h-1 bg-gold-accent mx-auto mt-4"></div>
          <p className="text-xs md:text-sm text-cream-bg/70 max-w-xl mx-auto font-light leading-relaxed">
            High-capacity cleaning, palletized moisture-free storage, and strong transport integrations connecting farms directly to seaport terminals.
          </p>
        </div>
      </section>

      {/* 2. Facility Cards Grid */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-dark-green">
            Our Sourcing & Packing Facilities
          </h2>
          <div className="w-16 h-1 bg-gold-accent mx-auto my-3"></div>
          <p className="text-xs text-soft-gray font-light">
            We operate fully mechanized cleaning, storage, and shipping networks ensuring rapid contract execution times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infraItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-3xl overflow-hidden border border-cream-bg shadow-sm hover:shadow-md hover:border-gold-accent/25 transition-all group flex flex-col justify-between"
              >
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-green/60 via-transparent to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-4 bg-white p-2 rounded-xl text-primary-green">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif text-base font-bold text-dark-green">{item.title}</h3>
                    <p className="text-xs text-soft-gray leading-relaxed font-light">{item.desc}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-cream-bg mt-5 flex items-center text-[9px] text-primary-green font-bold">
                    <CheckCircle className="w-3.5 h-3.5 mr-1.5" />
                    <span>Active Sourcing Station</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Timeline flow */}
      <section className="bg-white py-20 px-4 md:px-8 border-y border-gold-accent/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-widest uppercase text-gold-accent">SUPPLY TIMELINE</span>
            <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-dark-green mt-1">
              Material Flow & Port Transit
            </h2>
            <p className="text-xs text-soft-gray font-light mt-2">
              From fresh harvest to secure port clearance in 4 simple logistics phases.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineSteps.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-cream-bg/40 p-6 rounded-2xl border border-cream-bg text-center relative group"
              >
                <div className="w-12 h-12 rounded-full bg-primary-green text-gold-accent font-serif text-sm font-bold flex items-center justify-center mx-auto mb-4 border-2 border-gold-accent/20">
                  {item.step}
                </div>
                <h4 className="font-serif text-sm font-bold text-dark-green">{item.title}</h4>
                <p className="text-xs text-soft-gray font-light mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
