import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Award, Compass, Eye, Sparkles, Building, CheckCircle, Shield, Search, Database, Package, Truck, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { certifications } from '../data/agroData';

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

  const qualitySteps = [
    { num: "01", title: "Careful Sourcing", desc: "Our field experts visit crop centers directly to inspect soil composition, moisture level parameters, and pesticide history.", icon: Shield },
    { num: "02", title: "Quality Inspection & Grading", desc: "On arrival, crop samples are sent to our laboratory. We check grain lengths, moisture limits, and verify zero foreign materials.", icon: Search },
    { num: "03", title: "Hygienic Cleaning & De-stoning", desc: "Grains and spices are processed through advanced magnet separators, gravity tables, and clean washing lines.", icon: Eye },
    { num: "04", title: "Proper Packaging", desc: "Crops are packed inside multi-layered food-grade bags, jute packaging, or vacuum retail containers under automated control.", icon: Package },
    { num: "05", title: "Safe Storage", desc: "Products are stored in ventilated, moisture-controlled warehouses on pallets to ensure zero pest infestation or degradation.", icon: Database },
    { num: "06", title: "On-Time Dispatch", desc: "Containers are thoroughly swept and checked before loading. We install silica gel moisture absorbers for flawless transit.", icon: Truck }
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

      {/* 4.5. Quality Framework Section */}
      <section className="bg-cream-bg/20 py-20 px-4 md:px-8 border-y border-gold-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-1.5 text-gold-accent uppercase font-bold text-[10px] tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>Assurance Plan</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-dark-green mt-2">
              Our Quality Pipeline
            </h2>
            <div className="w-24 h-1 bg-gold-accent mx-auto my-4"></div>
            <p className="text-sm text-soft-gray font-light">
              From fertile Indian soils to sealed shipping containers, our 6-step quality control ensures zero compromises on international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualitySteps.map((st, idx) => {
              const IconComp = st.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-cream-bg shadow-sm hover:shadow-md hover:border-gold-accent/25 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-serif text-2xl font-black text-gold-accent/40 group-hover:text-gold-accent transition-colors">{st.num}</span>
                      <div className="bg-primary-green/10 p-2.5 rounded-xl text-primary-green group-hover:bg-primary-green group-hover:text-gold-accent transition-colors duration-300">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-serif text-base font-bold text-dark-green mb-3">{st.title}</h3>
                    <p className="text-xs text-soft-gray leading-relaxed font-light">{st.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-cream-bg mt-5 flex items-center text-[10px] text-primary-green font-bold group-hover:text-gold-accent">
                    <CheckCircle className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                    <span>QC Passed Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4.6. Certifications Section */}
      <section className="bg-white py-20 px-4 md:px-8 border-b border-gold-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-1.5 text-gold-accent uppercase font-bold text-[10px] tracking-widest">
              <Award className="w-4 h-4" />
              <span>Compliance Hub</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-dark-green mt-2">
              Official Certifications
            </h2>
            <div className="w-24 h-1 bg-gold-accent mx-auto my-4"></div>
            <p className="text-sm text-soft-gray font-light">
              Registered and compliant with major Indian food regulatory organizations and global customs clearances for seamless exports.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert) => {
              const isActive = !cert.status.toLowerCase().includes('future') && !cert.status.toLowerCase().includes('progress');
              return (
                <div key={cert.id} className="bg-white p-6 rounded-3xl border border-cream-bg shadow-sm hover:shadow-md hover:border-gold-accent/25 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="bg-primary-green/5 text-primary-green font-mono text-[9px] uppercase tracking-wider py-1.5 px-3 rounded-lg border border-primary-green/10">{cert.logoText}</span>
                      <ShieldCheck className={`w-6 h-6 shrink-0 ${isActive ? 'text-gold-accent' : 'text-soft-gray/40'}`} />
                    </div>
                    <h3 className="font-serif text-base font-bold text-dark-green leading-snug">{cert.name}</h3>
                    <p className="text-xs text-soft-gray font-light mt-2.5 leading-relaxed">{cert.description}</p>
                  </div>
                  <div className="pt-4 border-t border-cream-bg mt-5 flex items-center justify-between">
                    <span className={`text-[9px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-full ${isActive ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {cert.status}
                    </span>
                    {isActive && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Trust Section */}
      <section 
        className="bg-dark-green py-20 px-4 md:px-8 border-t-2 border-gold-accent text-white relative bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/cta-bg.png')" }}
      >
        <div className="absolute inset-0 bg-dark-green/85"></div>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#F8F6F1_1px,transparent_1px)] [background-size:16px_16px]"></div>
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
