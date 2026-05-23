import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowRight, Package, Phone, Leaf } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  const quickLinks = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Products', path: '/products', icon: Package },
    { label: 'Contact Us', path: '/contact', icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-[#F9F6F0] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <SEO
        title="404 — Page Not Found"
        description="The page you are looking for does not exist. Return to Sri Varahi Agro Foods LLP's homepage."
      />

      {/* Background decorative blurs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#0a2e18]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#ECC043]/8 blur-3xl pointer-events-none" />

      {/* Animated leaf watermark */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute opacity-[0.04] pointer-events-none"
      >
        <Leaf className="w-[500px] h-[500px] text-[#0a2e18]" />
      </motion.div>

      <div className="relative z-10 text-center max-w-xl mx-auto space-y-8">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <img src="/logo.png" alt="Sri Varahi Agro Foods LLP" className="h-14 w-auto object-contain mx-auto" />
          </Link>
        </motion.div>

        {/* 404 Big Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="font-serif font-extrabold text-[140px] md:text-[180px] leading-none text-[#0a2e18]/8 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#0a2e18] text-[#ECC043] w-20 h-20 rounded-full flex items-center justify-center shadow-2xl">
              <Leaf className="w-9 h-9" />
            </div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-[#0a2e18]">
            Page Not Found
          </h1>
          <div className="w-16 h-1 bg-[#ECC043] mx-auto rounded" />
          <p className="text-sm text-[#666] font-light leading-relaxed max-w-sm mx-auto">
            The page you're looking for has been moved, removed, or doesn't exist.
            Let's get you back to the right place.
          </p>
        </motion.div>

        {/* Quick Nav Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center gap-2 bg-white border border-[#ede5d4] text-[#0a2e18] text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-2xl shadow-sm hover:bg-[#0a2e18] hover:text-white hover:border-[#0a2e18] hover:shadow-md transition-all duration-300"
              >
                <Icon className="w-3.5 h-3.5" />
                {link.label}
              </Link>
            );
          })}
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-[#0a2e18] text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#128243] hover:shadow-xl transition-all duration-300 group shadow-md"
          >
            <span>Back to Homepage</span>
            <span className="w-7 h-7 rounded-full bg-[#ECC043] flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
              <ArrowRight className="w-3.5 h-3.5 text-[#0a2e18]" />
            </span>
          </Link>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-[11px] text-[#aaa] font-light"
        >
          © {new Date().getFullYear()} Sri Varahi Agro Foods LLP — Hyderabad, India
        </motion.p>

      </div>
    </div>
  );
}
