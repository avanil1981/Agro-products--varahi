import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, User, Building, Compass, AlertCircle } from 'lucide-react';
import { products } from '../data/agroData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    productInterested: "",
    quantity: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    // Simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.productInterested || !formData.quantity) {
      setErrorMsg("Please fill in all mandatory fields (Name, Email, Phone, Product, and Quantity).");
      return;
    }

    setIsSubmitted(true);
    setFormData({
      name: "",
      companyName: "",
      email: "",
      phone: "",
      country: "",
      productInterested: "",
      quantity: "",
      message: ""
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <div className="bg-cream-bg/40 min-h-screen pb-20">
      
      {/* 1. Page Hero Header */}
      <section className="relative bg-gradient-to-br from-primary-green to-dark-green text-white py-20 px-4 md:px-8 border-b-4 border-gold-accent text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F8F6F1_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold-accent font-bold block">TRADE DESK</span>
          <h1 className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight">
            Contact Sri Varahi Agro
          </h1>
          <div className="w-20 h-1 bg-gold-accent mx-auto mt-4"></div>
          <p className="text-xs md:text-sm text-cream-bg/70 max-w-xl mx-auto font-light leading-relaxed">
            Get in touch with our export trade coordinators to obtain bulk rates, samples, shipping configurations, or distributor application packs.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct info widgets */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="bg-white p-8 rounded-3xl border border-gold-accent/10 shadow-sm space-y-6">
            <h3 className="font-serif text-xl font-bold text-dark-green border-b border-cream-bg pb-3">
              Corporate Office
            </h3>
            
            <div className="space-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-green/10 p-2.5 rounded-xl text-primary-green shrink-0 mt-0.5">
                  <Building className="w-5 h-5 text-gold-accent" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-dark-green">Company Name</h4>
                  <p className="text-xs text-soft-gray font-light mt-0.5">Sri Varahi Agro Foods LLP</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-green/10 p-2.5 rounded-xl text-primary-green shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-gold-accent" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-dark-green">Location</h4>
                  <p className="text-xs text-soft-gray font-light mt-0.5">Hyderabad, Telangana, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-green/10 p-2.5 rounded-xl text-primary-green shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-gold-accent" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-dark-green">Phone / WhatsApp</h4>
                  <a href="tel:+918688669407" className="text-xs text-primary-green font-semibold hover:underline block mt-0.5">
                    +91 8688669407
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-green/10 p-2.5 rounded-xl text-primary-green shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-gold-accent" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-dark-green">Email Address</h4>
                  <a href="mailto:info@srivarahiagrofoods.in" className="text-xs text-primary-green font-semibold hover:underline block mt-0.5">
                    info@srivarahiagrofoods.in
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Quick WhatsApp Banner */}
          <div className="bg-green-600/10 p-6 rounded-3xl border border-green-600/20 shadow-sm flex items-start space-x-4">
            <MessageSquare className="w-8 h-8 text-green-600 shrink-0 mt-1 fill-green-600" />
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-green-800">Quick WhatsApp Trade Connect</h4>
              <p className="text-[11px] text-green-900/80 leading-relaxed font-light">
                Need an immediate reply on pricing or stock availability? Connect directly with our WhatsApp trade coordinator for instant replies.
              </p>
              <a
                href="https://wa.me/918688669407?text=Hello%20Sri%20Varahi%20Agro%20Foods%20LLP,%20I%20have%20a%20wholesale%20agro%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold text-green-700 hover:text-green-800"
              >
                Chat Instantly Now &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Premium Inquiry Form */}
        <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-gold-accent/10 shadow-sm space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-gold-accent font-bold">WHOLESALE REQUEST</span>
            <h3 className="font-serif text-2xl font-extrabold text-dark-green">
              Request a Bulk Quotation
            </h3>
            <p className="text-xs text-soft-gray font-light">
              Required fields are marked with an asterisk (*).
            </p>
          </div>

          {/* Success Notification */}
          {isSubmitted && (
            <div className="bg-green-50 border border-green-300 p-4 rounded-xl flex items-start space-x-3 text-green-800">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold">Inquiry Sent Successfully!</h4>
                <p className="text-[11px] font-light mt-0.5 leading-relaxed">
                  Thank you for contacting Sri Varahi Agro Foods LLP. Our export desk will review your specifications and email a competitive commercial quote within 24 business hours.
                </p>
              </div>
            </div>
          )}

          {/* Error Notification */}
          {errorMsg && (
            <div className="bg-red-50 border border-red-300 p-4 rounded-xl flex items-start space-x-3 text-red-800">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <p className="text-[11px] font-light">{errorMsg}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            <div className="flex flex-col space-y-1.5 col-span-2 sm:col-span-1">
              <label className="text-[10px] uppercase font-bold text-dark-green">Your Name *</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40"
              />
            </div>

            <div className="flex flex-col space-y-1.5 col-span-2 sm:col-span-1">
              <label className="text-[10px] uppercase font-bold text-dark-green">Company Name</label>
              <input 
                type="text" 
                name="companyName" 
                value={formData.companyName} 
                onChange={handleChange}
                placeholder="e.g. Global Foods Import Ltd"
                className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40"
              />
            </div>

            <div className="flex flex-col space-y-1.5 col-span-2 sm:col-span-1">
              <label className="text-[10px] uppercase font-bold text-dark-green">Email Address *</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                placeholder="e.g. buyer@globalfoods.com"
                className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40"
              />
            </div>

            <div className="flex flex-col space-y-1.5 col-span-2 sm:col-span-1">
              <label className="text-[10px] uppercase font-bold text-dark-green">Phone / Mobile (with country code) *</label>
              <input 
                type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                placeholder="e.g. +971 50 123 4567"
                className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40"
              />
            </div>

            <div className="flex flex-col space-y-1.5 col-span-2 sm:col-span-1">
              <label className="text-[10px] uppercase font-bold text-dark-green">Country</label>
              <input 
                type="text" 
                name="country" 
                value={formData.country} 
                onChange={handleChange}
                placeholder="e.g. United Arab Emirates"
                className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40"
              />
            </div>

            <div className="flex flex-col space-y-1.5 col-span-2 sm:col-span-1">
              <label className="text-[10px] uppercase font-bold text-dark-green">Product Interested *</label>
              <select 
                name="productInterested" 
                value={formData.productInterested} 
                onChange={handleChange}
                className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40 text-soft-gray"
              >
                <option value="">Select a Product</option>
                {products.map(p => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
                <option value="Other / Multiple">Other / Multiple Commodities</option>
              </select>
            </div>

            <div className="flex flex-col space-y-1.5 col-span-2">
              <label className="text-[10px] uppercase font-bold text-dark-green">Estimated Quantity Required (MT / Container) *</label>
              <input 
                type="text" 
                name="quantity" 
                value={formData.quantity} 
                onChange={handleChange}
                placeholder="e.g. 15 Metric Tons / 1x20' FCL"
                className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40"
              />
            </div>

            <div className="flex flex-col space-y-1.5 col-span-2">
              <label className="text-[10px] uppercase font-bold text-dark-green">Message / Special Packaging Specs</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange}
                rows="4"
                placeholder="Detail packaging requirements (BOPP/Jute bags), payment specifications, or certificate inspection constraints here."
                className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40"
              />
            </div>

            <div className="col-span-2 pt-2">
              <button 
                type="submit" 
                className="w-full bg-primary-green hover:bg-dark-green text-white font-bold text-xs py-4 px-6 rounded-xl flex items-center justify-center space-x-2 shadow-md transition-all border border-gold-accent/20"
              >
                <Send className="w-4 h-4 text-gold-accent" />
                <span>Submit Inquiry Form</span>
              </button>
            </div>

          </form>

        </div>

      </section>

      {/* 3. Google Map Placeholder (Highly Styled Vector Grid Frame) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
        <div className="bg-white rounded-3xl p-8 border border-gold-accent/10 shadow-sm">
          <div className="text-center md:text-left mb-6">
            <h3 className="font-serif text-lg font-bold text-dark-green flex items-center">
              <Compass className="w-5 h-5 mr-2 text-gold-accent" />
              Corporate Geography & Sourcing Map
            </h3>
            <p className="text-xs text-soft-gray font-light mt-1">Based in Hyderabad, connected directly to major crop regions and JNPT/Mundra Seaports.</p>
          </div>
          
          {/* Map box */}
          <div className="w-full h-80 rounded-2xl bg-cream-bg/40 border border-cream-bg shadow-inner relative flex flex-col items-center justify-center overflow-hidden">
            {/* Styled Map Background Grid Vector */}
            <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(to_right,#063B1D_1px,transparent_1px),linear-gradient(to_bottom,#063B1D_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
            
            {/* Center pointer */}
            <div className="relative z-10 text-center space-y-3.5">
              <div className="bg-primary-green text-gold-accent p-3.5 rounded-full inline-block animate-bounce shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-sm font-bold text-dark-green">Sri Varahi Agro Foods LLP</h4>
              <p className="text-[10px] text-soft-gray font-light">Hyderabad, Telangana, India (Corporate Head Office Desk)</p>
              
              <div className="pt-2">
                <a 
                  href="https://maps.google.com/?q=Hyderabad,+Telangana,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-gold-accent/40 hover:bg-cream-bg text-dark-green font-bold text-[10px] py-2 px-5 rounded-lg transition-colors inline-block"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
