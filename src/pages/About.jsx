import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Award, Compass, Eye, Sparkles, Building, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function About() {
  const values = [
    { title: "Quality First", desc: "No compromise on purity, sorting, size parameters, or freshness standards." },
    { title: "Unwavering Trust", desc: "Honest trade practices, realistic shipping schedules, and absolute transparent pricing." },
    { title: "Growth Mindset", desc: "Continuously improving agricultural sourcing networks and grading technologies." },
    { title: "Commitment", desc: "Executing contracts fully, meeting technical specifications, and shipping on-time." },
    { title: "Customer Satisfaction", desc: "Delivering bespoke packing solutions and active assistance post container arrival." },
    { title: "Ethical Conduct", desc: "Fair trade directly supporting partner cultivators and sustainable agricultural practices." }
  ];

  return (
    <div className="bg-cream-bg/40">
      
      {/* 1. Page Hero Header */}
      <section className="relative bg-gradient-to-br from-primary-green to-dark-green text-white py-20 px-4 md:px-8 border-b-4 border-gold-accent text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F8F6F1_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.25em] text-gold-accent font-bold block"
          >
            WHO WE ARE
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            About Sri Varahi Agro Foods LLP
          </motion.h1>
          <div className="w-20 h-1 bg-gold-accent mx-auto mt-4"></div>
        </div>
      </section>

      {/* 2. Story Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-primary-green uppercase font-bold text-[10px] tracking-widest">
              <Building className="w-4 h-4 text-gold-accent" />
              <span>Our Roots & History</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-dark-green">
              Direct Sourcing, Strict Grading & Global Excellence
            </h2>
            <div className="w-16 h-1 bg-gold-accent"></div>
            
            <p className="text-xs md:text-sm text-soft-gray leading-relaxed font-light">
              Based in the thriving trade capital of <b>Hyderabad, Telangana, India</b>, Sri Varahi Agro Foods LLP stands as a dedicated supplier and exporter of top-grade Indian agricultural commodities.
            </p>
            <p className="text-xs md:text-sm text-soft-gray leading-relaxed font-light">
              We bridge the gap between hard-working local cultivators and international buyers who refuse to settle on standards. Our core philosophy integrates close farm procurement, multi-stage sorting, strict chemical analysis (ensuring heavy metals and residue limits are met), and moisture-controlled packaging.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-dark-green">Direct Farm Links</h4>
                  <p className="text-[10px] text-soft-gray font-light">Sourced straight from certified farm clusters.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-dark-green">Hygienic Warehousing</h4>
                  <p className="text-[10px] text-soft-gray font-light">Ventilated storage with zero pest contact.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1595275372297-f57bb4824707?auto=format&fit=crop&w=1000&q=80" 
                alt="Sri Varahi Agro Sourcing" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gold-accent/20 max-w-xs hidden sm:block">
              <div className="text-[10px] uppercase font-bold tracking-widest text-gold-accent mb-1">Company Headquarters</div>
              <div className="text-xs font-serif text-dark-green font-bold">Hyderabad, Telangana, India</div>
              <p className="text-[9px] text-soft-gray font-light mt-1">Connecting domestic farm belts to major ports via modern logistics.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="bg-white py-20 px-4 md:px-8 border-y border-gold-accent/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Mission Card */}
          <div className="bg-cream-bg/40 p-8 md:p-12 rounded-3xl border border-gold-accent/15 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-green/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="bg-primary-green text-gold-accent p-3.5 rounded-2xl w-fit mb-6">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-dark-green">Our Story & Mission</h3>
            <p className="text-xs md:text-sm text-soft-gray font-light leading-relaxed mt-4">
              To deliver premium quality Indian agro and food commodities to customers worldwide with deep transparency, reliable consistency, and fair pricing. We want to empower Indian farmers while ensuring global buyers enjoy reliable crop values on every container.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-cream-bg/40 p-8 md:p-12 rounded-3xl border border-gold-accent/15 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="bg-gold-accent text-white p-3.5 rounded-2xl w-fit mb-6">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-dark-green">Our Vision</h3>
            <p className="text-xs md:text-sm text-soft-gray font-light leading-relaxed mt-4">
              To become a globally recognized Indian agricultural export organization known for high quality standards, reliable shipping logistics, and strong customer satisfaction. We aim to establish Sri Varahi as the gold standard of trust.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Corporate Values */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 text-gold-accent uppercase font-bold text-[10px] tracking-widest">
            <Sparkles className="w-4 h-4 text-gold-accent" />
            <span>Ethical Standards</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-dark-green mt-2">
            OUR CORE VALUES
          </h2>
          <div className="w-24 h-1 bg-gold-accent mx-auto my-4"></div>
          <p className="text-sm text-soft-gray font-light">
            These six pillars guide every wholesale trade contract we sign, every packaging run we supervise, and every relationship we construct.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-cream-bg hover:border-gold-accent/25 hover:shadow-md transition-all group"
            >
              <h4 className="font-serif text-lg font-bold text-dark-green group-hover:text-primary-green transition-colors gold-line pb-1.5">
                {val.title}
              </h4>
              <p className="text-xs text-soft-gray mt-3 leading-relaxed font-light">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Trust Section */}
      <section className="bg-dark-green py-20 px-4 md:px-8 border-t-2 border-gold-accent text-white relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#F8F6F1_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-1.5 text-gold-accent uppercase font-bold text-[10px] tracking-widest">
            <Award className="w-4 h-4" />
            <span>Why Buyers Trust Us</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">
            High-Grade Indian Agro Sourced Professionally
          </h2>
          <p className="text-xs md:text-sm text-cream-bg/70 leading-relaxed font-light max-w-2xl mx-auto">
            From the initial email inquiry down to port container stuffing and document release, we maintain absolute transparency. We treat every order as our ticket to a long-term commercial partnership.
          </p>
        </div>
      </section>

    </div>
  );
}
