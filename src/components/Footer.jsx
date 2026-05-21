import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, MessageSquare, ArrowRight, ArrowUpRight } from 'lucide-react';
import { categories, exportMarkets } from '../data/agroData';

export default function Footer() {
  return (
    <footer className="bg-dark-green text-cream-bg pt-16 pb-8 border-t-4 border-gold-accent relative overflow-hidden">
      
      {/* Background Subtle Leaf Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#F8F6F1_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Pitch & Address */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center group">
              <div className="bg-white p-2 rounded-xl border border-gold-accent/20 group-hover:scale-105 transition-transform duration-300 shadow-md">
                <img 
                  src="/logo.png" 
                  alt="Sri Varahi Agro Foods LLP" 
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            </Link>
            
            <p className="text-xs text-cream-bg/70 leading-relaxed font-light">
              Premium Indian Agro Products for Domestic & Export Markets. Bridging the gap between fine agricultural sourcing and demanding global buyers.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start text-xs text-cream-bg/85 font-light">
                <MapPin className="w-4 h-4 mr-3 text-gold-accent shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <a href="mailto:info@srivarahiagro.com" className="flex items-center text-xs text-cream-bg/85 hover:text-gold-light transition-colors font-light">
                <Mail className="w-4 h-4 mr-3 text-gold-accent shrink-0" />
                <span>info@srivarahiagro.com</span>
              </a>
              <a href="https://wa.me/918688669407" target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-cream-bg/85 hover:text-gold-light transition-colors font-light">
                <Phone className="w-4 h-4 mr-3 text-gold-accent shrink-0" />
                <span>+91 8688669407 (WhatsApp)</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif text-base font-semibold tracking-wide text-white border-b border-gold-accent/30 pb-2.5">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3.5 text-xs text-cream-bg/70 font-light">
              <li>
                <Link to="/" className="hover:text-gold-light flex items-center transition-colors">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-gold-accent" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-light flex items-center transition-colors">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-gold-accent" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-gold-light flex items-center transition-colors">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-gold-accent" /> Products
                </Link>
              </li>
              <li>
                <Link to="/export" className="hover:text-gold-light flex items-center transition-colors">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-gold-accent" /> Export
                </Link>
              </li>
              <li>
                <Link to="/domestic" className="hover:text-gold-light flex items-center transition-colors">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-gold-accent" /> Domestic
                </Link>
              </li>

              <li>
                <Link to="/gallery" className="hover:text-gold-light flex items-center transition-colors">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-gold-accent" /> Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-gold-light flex items-center transition-colors">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-gold-accent" /> Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-light flex items-center transition-colors">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-gold-accent" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="space-y-6">
            <h3 className="font-serif text-base font-semibold tracking-wide text-white border-b border-gold-accent/30 pb-2.5">
              Agro Categories
            </h3>
            <ul className="space-y-3 text-xs text-cream-bg/70 font-light">
              {categories.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/products?category=${cat.slug}`} 
                    className="hover:text-gold-light flex items-center transition-colors justify-between"
                  >
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-gold-accent/50 group-hover:text-gold-light" />
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/products" 
                  className="text-gold-accent hover:text-gold-light text-xs font-semibold flex items-center pt-1"
                >
                  View All Products ({categories.length}) <ArrowRight className="w-3 h-3 ml-1.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Global Export Markets */}
          <div className="space-y-6">
            <h3 className="font-serif text-base font-semibold tracking-wide text-white border-b border-gold-accent/30 pb-2.5">
              Export Destinations
            </h3>
            <div className="flex flex-wrap gap-2">
              {exportMarkets.slice(0, 7).map((market, idx) => (
                <span 
                  key={idx}
                  className="bg-primary-green hover:bg-gold-accent hover:text-dark-green cursor-default text-[10px] py-1 px-2.5 rounded-full border border-gold-accent/20 transition-all font-medium"
                >
                  {market.code || market.name.split(' ')[0]}
                </span>
              ))}
              <Link 
                to="/export" 
                className="bg-transparent hover:bg-gold-accent/10 border border-gold-accent/40 text-gold-accent hover:text-white text-[10px] py-1 px-2.5 rounded-full transition-all font-semibold"
              >
                + More
              </Link>
            </div>
            
            <div className="pt-2">
              <a
                href="https://wa.me/918688669407?text=Hello%20Sri%20Varahi%20Agro%20Foods%20LLP,%20I%20am%20interested%20in%20an%20export%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white font-medium text-xs py-2.5 px-4 rounded-lg flex items-center justify-center hover:bg-green-700 transition-all shadow-md gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white text-green-600 shrink-0" />
                <span>WhatsApp Instant Inquiry</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-cream-bg/50 font-light">
          <div>
            &copy; {new Date().getFullYear()} <b>Sri Varahi Agro Foods LLP</b>. All Rights Reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/about" className="hover:text-gold-light transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-gold-light transition-colors">Inquire Now</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
