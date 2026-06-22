import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, GripVertical } from 'lucide-react';

export default function FloatingSocials() {
  const [isOpen, setIsOpen] = useState(true);
  const [topPos, setTopPos] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      // Prevent dragging completely off screen vertically
      const newY = Math.max(80, Math.min(window.innerHeight - 80, e.clientY || e.touches?.[0]?.clientY));
      setTopPos(newY);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleMouseMove, { passive: false });
      document.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleMouseMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const handleDragStart = (e) => {
    // Prevent default to avoid text selection while dragging
    e.preventDefault();
    setIsDragging(true);
  };

  return (
    <div 
      className={`fixed right-0 -translate-y-1/2 z-[60] flex items-center transition-transform duration-500 hidden md:flex ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      style={{ top: topPos ? `${topPos}px` : '50%', cursor: isDragging ? 'grabbing' : 'auto' }}
    >
      
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -left-8 bg-white/95 backdrop-blur-sm border border-r-0 border-gold-accent/30 py-2 px-1 rounded-l-lg shadow-[-4px_0_10px_rgba(0,0,0,0.05)] text-primary-green hover:text-gold-accent transition-colors flex items-center justify-center focus:outline-none"
        aria-label="Toggle social links"
      >
        {isOpen ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
      </button>

      {/* Social Links Container */}
      <div className="flex flex-col gap-3 py-3 px-2.5 bg-white/95 backdrop-blur-sm shadow-[-4px_0_20px_rgba(0,0,0,0.08)] rounded-l-xl border border-r-0 border-gold-accent/30 pointer-events-auto">
        
        {/* Drag Handle */}
        <div 
          className="flex justify-center cursor-grab active:cursor-grabbing pb-2 mb-1 border-b border-gold-accent/20 text-gray-400 hover:text-gold-accent transition-colors"
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          title="Drag to move vertically"
        >
          <GripVertical className="w-5 h-5" />
        </div>

        {/* Facebook */}
        <a 
          href="https://www.facebook.com/profile.php?id=61590916154503" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:scale-110 hover:-translate-y-1 transition-all duration-300"
          title="Facebook"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>

        <div className="w-full h-px bg-gold-accent/20"></div>

        {/* Instagram */}
        <a 
          href="https://www.instagram.com/srivarahiagrofoodsllp/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:scale-110 hover:-translate-y-1 transition-all duration-300"
          title="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="ig-grad-float" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f09433" />
                <stop offset="25%" stopColor="#e6683c" />
                <stop offset="50%" stopColor="#dc2743" />
                <stop offset="75%" stopColor="#cc2366" />
                <stop offset="100%" stopColor="#bc1888" />
              </linearGradient>
            </defs>
            <path fill="url(#ig-grad-float)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        <div className="w-full h-px bg-gold-accent/20"></div>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/sri-varahi-agro-foods-llp-726820418" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:scale-110 hover:-translate-y-1 transition-all duration-300"
          title="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
