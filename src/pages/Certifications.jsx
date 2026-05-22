import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { certifications } from '../data/agroData';

export default function Certifications() {
  return (
    <div className="bg-cream-bg/40 min-h-screen pb-20">
      
      {/* 1. Page Hero Header */}
      <section className="relative bg-gradient-to-br from-primary-green to-dark-green text-white py-20 px-4 md:px-8 border-b-4 border-gold-accent text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F8F6F1_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.25em] text-gold-accent font-bold block"
          >
            COMPLIANCE HUB
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            Certifications & Compliance
          </motion.h1>
          <div className="w-20 h-1 bg-gold-accent mx-auto mt-4"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm text-cream-bg/70 max-w-xl mx-auto font-light leading-relaxed"
          >
            Registered and compliant with major Indian food regulatory organizations and global customs clearances to ensure seamless global exports.
          </motion.p>
        </div>
      </section>

      {/* 2. Certifications Cards Grid */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-dark-green">
            Our Official Registrations
          </h2>
          <div className="w-16 h-1 bg-gold-accent mx-auto my-3"></div>
          <p className="text-xs text-soft-gray font-light">
            We hold full clearance and official licenses issued by standard export bodies and ministerial committees in India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, idx) => {
            const isActive = !cert.status.toLowerCase().includes('future') && !cert.status.toLowerCase().includes('progress');
            return (
              <motion.div 
                key={cert.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-3xl border border-cream-bg shadow-sm hover:shadow-md hover:border-gold-accent/25 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-primary-green/5 text-primary-green font-mono text-[9px] uppercase tracking-wider py-1.5 px-3 rounded-lg border border-primary-green/10">
                      {cert.logoText}
                    </span>
                    <ShieldCheck className={`w-6 h-6 shrink-0 ${isActive ? 'text-gold-accent' : 'text-soft-gray/40'}`} />
                  </div>
                  
                  <h3 className="font-serif text-base font-bold text-dark-green leading-snug">{cert.name}</h3>
                  <p className="text-xs text-soft-gray font-light mt-2.5 leading-relaxed">{cert.description}</p>
                </div>

                <div className="pt-4 border-t border-cream-bg mt-5 flex items-center justify-between">
                  <span className={`text-[9px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-full ${
                    isActive 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {cert.status}
                  </span>
                  {isActive && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                </div>
              </motion.div>
            );
          })}
        </div>

      </section>

      {/* 3. Advisory Note Section */}
      <section className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="bg-yellow-50/50 p-6 rounded-2xl border border-yellow-200/60 flex items-start space-x-3.5 shadow-sm"
        >
          <AlertCircle className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
          <p className="text-xs text-yellow-900 leading-relaxed font-light">
            <b>Note on Documentation:</b> Certification and registration details can be updated as per company registration documents or trade policies. For copies of our active APEDA, FSSAI, or IEC sheets, please email <a href="mailto:info@srivarahiagrofoods.in" className="font-bold underline text-primary-green">info@srivarahiagrofoods.in</a>.
          </p>
        </motion.div>
      </section>

    </div>
  );
}
