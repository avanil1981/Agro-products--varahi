import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Phone, ChevronDown, Leaf, ArrowRight, Search } from 'lucide-react';
import { categories } from '../data/agroData';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'PRODUCTS', path: '/products', dropdown: true },
    { name: 'EXPORT', path: '/export' },
    { name: 'CONTACT US', path: '/contact' }
  ];

  return (
    <>
      {/* Main Premium Sticky Header exactly matching the reference image layout */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-cream-bg py-3 md:py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center gap-4">
          
          {/* Logo / Brand Name on the Left */}
          <Link to="/" className="flex items-center group shrink-0">
            <img 
              src="/logo.png" 
              alt="Sri Varahi Agro Foods LLP" 
              className="h-16 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Center: Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-7 mx-auto">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative group py-1"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button className="flex items-center text-xs font-bold tracking-wider text-dark-text hover:text-primary-green transition-colors focus:outline-none">
                      <span>{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 ml-1 transition-transform group-hover:rotate-180 text-gold-accent" />
                    </button>
                    
                    {/* Products Dropdown List */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-white border border-gold-accent/10 shadow-xl rounded-xl py-3 z-50 text-left"
                        >
                          <div className="px-4 py-1 text-[10px] font-bold tracking-widest text-gold-accent uppercase border-b border-cream-bg pb-2 mb-2">
                            Product Categories
                          </div>
                          {categories.map((cat) => (
                            <Link
                              key={cat.id}
                              to={`/products?category=${cat.slug}`}
                              className="block px-5 py-2 text-xs font-medium text-dark-text hover:bg-cream-bg hover:text-primary-green transition-all"
                            >
                              {cat.name}
                            </Link>
                          ))}
                          <div className="border-t border-cream-bg mt-2 pt-2 px-4">
                            <Link to="/products" className="text-xs font-bold text-primary-green hover:text-gold-accent flex items-center">
                              View All Products <ArrowRight className="w-3.5 h-3.5 ml-1" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => 
                    `text-xs font-bold tracking-wider transition-all relative py-1 ${
                      isActive 
                        ? 'text-primary-green font-bold border-b-2 border-gold-accent' 
                        : 'text-dark-text hover:text-primary-green hover:border-b-2 hover:border-gold-accent/50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Area */}
          <div className="hidden xl:flex flex-col space-y-3.5 items-end shrink-0">
            
            {/* Top Row: Email and Phone */}
            <div className="flex items-center space-x-6 text-[13px] font-semibold text-dark-text">
              <a href="mailto:info@srivarahiagrofoods.in" className="flex items-center hover:text-primary-green transition-colors group/item">
                <Mail className="w-4 h-4 mr-2 text-primary-green group-hover/item:scale-110 transition-transform" />
                <span>info@srivarahiagrofoods.in</span>
              </a>
              <a href="https://wa.me/918688669407" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary-green transition-colors group/item">
                <Phone className="w-4 h-4 mr-2 text-primary-green group-hover/item:scale-110 transition-transform" />
                <span>+91 8688669407</span>
              </a>
            </div>

            {/* Bottom Row: Search Bar + Enquire Now */}
            <div className="flex items-center space-x-4">
              <form onSubmit={handleSearch} className="relative hidden md:block">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search products..."
                  className="bg-cream-bg/60 text-dark-text text-xs px-4 py-2 pr-8 rounded-full border border-gold-accent/20 focus:outline-none focus:border-primary-green focus:bg-white transition-all w-48 xl:w-56"
                />
                <button type="submit" className="absolute right-3 top-2 text-soft-gray hover:text-primary-green">
                  <Search className="w-4 h-4" />
                </button>
              </form>
              <Link 
                to="/quote" 
                className="bg-primary-green text-white font-semibold text-xs py-2 px-5 rounded-lg flex items-center hover:bg-dark-green transition-all shadow-sm group border border-gold-accent/20 whitespace-nowrap"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="xl:hidden p-2 rounded-lg text-primary-green hover:bg-cream-bg focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl flex flex-col p-6 xl:hidden border-l border-gold-accent/20"
          >
            {/* Drawer Header */}
            <div className="flex justify-between items-center border-b border-cream-bg pb-4 mb-6">
              <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <img 
                  src="/logo.png" 
                  alt="Sri Varahi Agro Foods LLP" 
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-cream-bg text-dark-text"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation List */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-4">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.name} className="space-y-2">
                      <div className="text-sm font-semibold text-dark-text flex items-center justify-between pb-1 border-b border-cream-bg">
                        <span>{link.name}</span>
                        <ChevronDown className="w-4 h-4 text-gold-accent" />
                      </div>
                      <div className="pl-4 space-y-2">
                        {categories.map((cat) => (
                          <Link
                            key={cat.id}
                            to={`/products?category=${cat.slug}`}
                            onClick={() => setIsOpen(false)}
                            className="block text-xs font-medium text-soft-gray hover:text-primary-green py-1"
                          >
                            • {cat.name}
                          </Link>
                        ))}
                        <Link
                          to="/products"
                          onClick={() => setIsOpen(false)}
                          className="block text-xs font-bold text-primary-green py-1"
                        >
                          View All Products →
                        </Link>
                      </div>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => 
                      `block text-sm font-semibold py-2 border-b border-cream-bg transition-colors ${
                        isActive ? 'text-primary-green pl-2 border-l-4 border-gold-accent' : 'text-dark-text hover:text-primary-green'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </div>

            {/* Drawer Footer / Contact Info */}
            <div className="border-t border-cream-bg pt-6 mt-6 space-y-4">
              <a href="mailto:info@srivarahiagrofoods.in" className="flex items-center text-xs text-soft-gray hover:text-primary-green">
                <Mail className="w-4 h-4 mr-3 text-gold-accent" />
                <span>info@srivarahiagrofoods.in</span>
              </a>
              <a href="tel:+918688669407" className="flex items-center text-xs text-soft-gray hover:text-primary-green">
                <Phone className="w-4 h-4 mr-3 text-gold-accent" />
                <span>+91 8688669407</span>
              </a>
              <Link 
                to="/quote" 
                onClick={() => setIsOpen(false)}
                className="w-full bg-primary-green text-white text-center font-semibold text-xs py-3 rounded-xl block hover:bg-dark-green transition-all"
              >
                Request a Quotation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
