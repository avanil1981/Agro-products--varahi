import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setVisible(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SVG circle progress vars
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
          className="fixed bottom-6 right-6 z-[9999] group"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          {/* Outer glow ring */}
          <div className="relative w-14 h-14 flex items-center justify-center">
            {/* Animated progress ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90"
              viewBox="0 0 56 56"
            >
              {/* Track ring */}
              <circle
                cx="28"
                cy="28"
                r={radius}
                fill="none"
                stroke="rgba(212,160,23,0.2)"
                strokeWidth="3"
              />
              {/* Progress ring */}
              <circle
                cx="28"
                cy="28"
                r={radius}
                fill="none"
                stroke="#D4A017"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                style={{ transition: 'stroke-dashoffset 0.1s linear' }}
              />
            </svg>

            {/* Button body */}
            <div className="relative w-10 h-10 rounded-full bg-dark-green border border-gold-accent/40 flex items-center justify-center shadow-2xl group-hover:bg-primary-green group-hover:border-gold-accent transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(212,160,23,0.4)]">
              <ChevronUp
                className="w-5 h-5 text-gold-accent group-hover:text-white transition-colors duration-300 group-hover:-translate-y-0.5"
                style={{ transition: 'transform 0.2s ease, color 0.3s ease' }}
              />
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
