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
                <span>Flat No 111, Sita Pride, Lakshmi Nagar, Kapra, Hyderabad, 500062, Telangana</span>
              </div>
              <a href="mailto:info@srivarahiagrofoods.in" className="flex items-center text-xs text-cream-bg/85 hover:text-gold-light transition-colors font-light">
                <Mail className="w-4 h-4 mr-3 text-gold-accent shrink-0" />
                <span>info@srivarahiagrofoods.in</span>
              </a>
              <a href="https://wa.me/918143234488" target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-cream-bg/85 hover:text-gold-light transition-colors font-light">
                <Phone className="w-4 h-4 mr-3 text-gold-accent shrink-0" />
                <span>+91 8143234488 (WhatsApp)</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-3 pt-3">
              <a href="https://www.facebook.com/profile.php?id=61560916154503" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 hover:border-gold-accent hover:bg-gold-accent hover:text-dark-green text-cream-bg p-2 rounded-full transition-all shadow-sm group/social">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover/social:scale-110 transition-transform"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 hover:border-gold-accent hover:bg-gold-accent hover:text-dark-green text-cream-bg p-2 rounded-full transition-all shadow-sm group/social">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover/social:scale-110 transition-transform"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 hover:border-gold-accent hover:bg-gold-accent hover:text-dark-green text-cream-bg p-2 rounded-full transition-all shadow-sm group/social">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover/social:scale-110 transition-transform"><path d="M2.5 7.1c.3-1.6 1.7-2.8 3.3-3 3.9-.4 8.5-.4 12.4 0 1.6.2 3 1.4 3.3 3 .3 1.8.3 5 .3 5.3s0 3.5-.3 5.3c-.3 1.6-1.7 2.8-3.3 3-3.9.4-8.5.4-12.4 0-1.6-.2-3-1.4-3.3-3-.3-1.8-.3-5-.3-5.3s0-3.5.3-5.3z"></path><path d="m10 15 5-3-5-3v6z"></path></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 hover:border-gold-accent hover:bg-gold-accent hover:text-dark-green text-cream-bg p-2 rounded-full transition-all shadow-sm group/social">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover/social:scale-110 transition-transform"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
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
                  {market.name.replace(/\s*\(.*?\)\s*/g, '')}
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
                href="https://wa.me/918143234488?text=Hello%20Sri%20Varahi%20Agro%20Foods%20LLP,%20I%20am%20interested%20in%20an%20export%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white font-medium text-xs py-2.5 px-4 rounded-lg flex items-center justify-center hover:bg-green-700 transition-all shadow-md gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-current text-white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
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
            <Link to="/quote" className="hover:text-gold-light transition-colors">Inquire Now</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
