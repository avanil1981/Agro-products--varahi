import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  User,
  Building,
  Compass,
  AlertCircle,
  FileText,
  Loader2,
  Check,
  Leaf,
  Coffee,
  Globe,
  Award
} from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [selectedCommodities, setSelectedCommodities] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const commoditiesList = [
    { id: "rice", label: "Premium Rice", desc: "Basmati & IR-64", icon: Globe },
    { id: "spices", label: "Spices & Powders", desc: "Whole & Ground", icon: Leaf },
    { id: "fruits", label: "Fresh Fruits", desc: "Veggies & Fruits", icon: Award },
    { id: "coffee", label: "Indian Coffee", desc: "Southern Beans", icon: Coffee }
  ];

  const handleCommodityToggle = (label) => {
    if (selectedCommodities.includes(label)) {
      setSelectedCommodities(selectedCommodities.filter(item => item !== label));
    } else {
      setSelectedCommodities([...selectedCommodities, label]);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsSubmitting(true);

    // Simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      setErrorMsg("Please fill in all mandatory fields (Name, Email, Phone, Subject, and Message).");
      setIsSubmitting(false);
      return;
    }

    // Format final message to include interested commodities
    let finalMessage = formData.message;
    if (selectedCommodities.length > 0) {
      finalMessage = `Interested Commodities: ${selectedCommodities.join(", ")}\n\nUser Message: ${formData.message}`;
    }

    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001';

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: finalMessage
        })
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
        setSelectedCommodities([]);
      } else {
        setErrorMsg(resData.error || "Failed to send contact inquiry. Please check backend SMTP settings.");
      }
    } catch (error) {
      console.error("API Contact Error:", error);
      setErrorMsg("Failed to send contact inquiry. Please check your connection or server configuration.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://srivarahiagrofoods.in/#localbusiness",
        "name": "Sri Varahi Agro Foods LLP",
        "image": "https://srivarahiagrofoods.in/logo.png",
        "telephone": "+91-8688669407",
        "email": "info@srivarahiagrofoods.in",
        "url": "https://srivarahiagrofoods.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Hyderabad",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "17.3850",
          "longitude": "78.4867"
        },
        "sameAs": [
          "https://wa.me/918688669407"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://srivarahiagrofoods.in/contact/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is your primary export range?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We supply a premium range of agricultural commodities including long grain Basmati & Non-Basmati (IR 64) Rice, other southern varieties like Jaya, Surekha, Sona Masoori, Ponni, and Iddly Rice, pure whole spices, ground spice powders, fresh fruits, vegetables, and shade-grown Southern Indian coffee beans."
            }
          },
          {
            "@type": "Question",
            "name": "Do you support private labeling (OEM) and custom packaging?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We specialize in private labeling. We can pack products in custom-printed BOPP bags, vacuum packs, kraft boxes, or mesh bags with your branding, logo, customized weights (1kg, 5kg, 10kg, 25kg, 50kg), and local language declarations."
            }
          },
          {
            "@type": "Question",
            "name": "What is your Minimum Order Quantity (MOQ)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For standard sea containers (FCL), our MOQ generally ranges from 5 to 20 Metric Tons depending on the product (e.g. 5 MT for spices, 12 MT for rice). For perishable items shipped via air freight, we accept lower MOQs around 500kg - 1000kg."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-cream-bg min-h-screen pb-24 relative overflow-hidden font-sans">
      <SEO
        title="Contact General Trade Desk & Corporate Office"
        description="Contact Sri Varahi Agro Foods LLP's general trade desk in Hyderabad, India. Reach our export trade coordinators via phone, email, or WhatsApp for custom sourcing support."
        keywords="contact Sri Varahi Agro, agro export Hyderabad, agricultural products wholesale contact, food export coordinators India, WhatsApp trade desk"
        schemaMarkup={contactSchema}
      />

      {/* Decorative Floating Ambient Blurs */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-primary-green/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] rounded-full bg-gold-accent/5 blur-[150px] pointer-events-none z-0"></div>

      {/* 1. Page Hero Header */}
      <section 
        className="relative text-white py-24 px-4 md:px-8 border-b border-gold-accent/20 text-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/heroes/contact-hero.png')` }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-dark-green/75 mix-blend-multiply z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-0"></div>
        
        {/* Fine background mesh pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F8F6F1_1px,transparent_1px)] [background-size:20px_20px] z-0"></div>
        
        {/* Ambient top gold light leak */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold-accent/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-gold-accent/20 rounded-full px-4 py-1.5 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-gold-accent animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gold-light">
              GLOBAL TRADE DESK & HQ
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight"
          >
            Connect With Our Sourcing Team
          </motion.h1>

          <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-gold-accent to-transparent mx-auto mt-4"></div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs md:text-base text-cream-bg/80 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Looking to import premium Indian agro commodities in bulk? Get in touch with our expert coordinators to secure commercial quotes, schedule factory audits, or request customized packaging designs.
          </motion.p>
        </div>
      </section>

      {/* 2. Main Premium Split-Screen Vault Interface */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white/60 backdrop-blur-lg rounded-[2.5rem] border border-gold-accent/20 shadow-2xl overflow-hidden"
        >
          {/* LEFT PANEL: The Corporate Info Vault (Dark Theme) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-dark-green via-[#032713] to-[#011409] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-gold-accent/10">
            {/* Fine decorative contour lines */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#ECC043_1px,transparent_1px),linear-gradient(to_bottom,#ECC043_1px,transparent_1px)] [background-size:30px_30px]"></div>

            <div className="space-y-10 relative z-10">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-accent font-bold">ORGANIZATION DATA</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight">
                  Sri Varahi Agro Foods LLP
                </h3>
                <div className="w-12 h-1 bg-gold-accent rounded"></div>
              </div>

              {/* Coordinates Tiles */}
              <div className="space-y-6">
                {/* Tile 1 */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 bg-white/5 border border-white/10 hover:border-gold-accent/30 p-4 rounded-2xl transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="bg-gold-accent/10 p-3 rounded-xl shrink-0 mt-0.5 border border-gold-accent/20">
                    <Building className="w-5 h-5 text-gold-accent" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-gold-light/70 font-semibold">Registered Entity</h4>
                    <p className="text-sm font-medium text-white mt-1">Sri Varahi Agro Foods LLP</p>
                    <p className="text-xs text-cream-bg/60 font-light mt-0.5">Corporate Identification No: ADV-2007</p>
                  </div>
                </motion.div>

                {/* Tile 2 */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 bg-white/5 border border-white/10 hover:border-gold-accent/30 p-4 rounded-2xl transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="bg-gold-accent/10 p-3 rounded-xl shrink-0 mt-0.5 border border-gold-accent/20">
                    <MapPin className="w-5 h-5 text-gold-accent" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-gold-light/70 font-semibold">Office Address</h4>
                    <p className="text-sm font-medium text-white mt-1">Hyderabad, Telangana, India</p>
                    <p className="text-xs text-cream-bg/60 font-light mt-0.5">Sourcing hub connects with Nhava Sheva & Chennai cargo networks</p>
                  </div>
                </motion.div>

                {/* Tile 3 */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 bg-white/5 border border-white/10 hover:border-gold-accent/30 p-4 rounded-2xl transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="bg-gold-accent/10 p-3 rounded-xl shrink-0 mt-0.5 border border-gold-accent/20">
                    <Phone className="w-5 h-5 text-gold-accent" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-gold-light/70 font-semibold">Global Hotline</h4>
                    <a href="tel:+918688669407" className="text-sm font-bold text-white hover:text-gold-light mt-1 transition-colors block">
                      +91 8688669407
                    </a>
                    <p className="text-xs text-cream-bg/60 font-light mt-0.5">Direct phone connection with export coordinators</p>
                  </div>
                </motion.div>

                {/* Tile 4 */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 bg-white/5 border border-white/10 hover:border-gold-accent/30 p-4 rounded-2xl transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="bg-gold-accent/10 p-3 rounded-xl shrink-0 mt-0.5 border border-gold-accent/20">
                    <Mail className="w-5 h-5 text-gold-accent" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-gold-light/70 font-semibold">Corporate Email</h4>
                    <a href="mailto:info@srivarahiagrofoods.in" className="text-sm font-bold text-white hover:text-gold-light mt-1 transition-colors block">
                      info@srivarahiagrofoods.in
                    </a>
                    <p className="text-xs text-cream-bg/60 font-light mt-0.5">Corporate business, sourcing, & vendor inquiries</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Premium WhatsApp Fast-Track Connect Card */}
            <div className="mt-12 bg-white/5 border border-white/10 p-6 rounded-[2rem] relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping pointer-events-none"></div>
                  <div className="bg-green-500/20 p-3.5 rounded-full text-green-400 border border-green-500/30 shrink-0 relative z-10">
                    <MessageSquare className="w-6 h-6 fill-green-400 text-transparent" />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[8px] uppercase tracking-[0.25em] text-green-400 font-bold">FAST-TRACK LINK</span>
                  <h4 className="text-sm font-bold text-white">WhatsApp Trade Coord</h4>
                  <p className="text-[11px] text-cream-bg/70 leading-relaxed font-light">
                    Direct communication line with pricing and shipment desks.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/918688669407?text=Hello%20Sri%20Varahi%20Agro%20Foods%20LLP,%20I%20have%20an%20export%20bulk%20sourcing%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-md group"
              >
                <span>Launch Direct Chat</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>

          {/* RIGHT PANEL: Sourcing Inquiry Desk (Light Theme) */}
          <div className="lg:col-span-7 p-8 md:p-12 space-y-8 bg-white/30">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-primary-green font-bold bg-primary-green/10 px-3 py-1 rounded-full">
                OUTBOUND SOURCING FORM
              </span>
              <h3 className="font-serif text-3xl font-extrabold text-dark-green">
                Bulk Export Trade Sourcing Desk
              </h3>
              <p className="text-xs text-soft-gray font-light">
                Required fields are indicated with an asterisk (*). Let our team draft a tailored commercial quote.
              </p>
            </div>

            {/* Custom Alert Notification Banners */}
            <AnimatePresence mode="wait">
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-green-50 border border-green-200 p-5 rounded-2xl flex items-start space-x-3 text-green-950 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold">Thank You! Sourcing Request Submitted.</h4>
                    <p className="text-[11px] font-light leading-relaxed text-green-900/80">
                      Our commercial coordinators have catalogued your commodity parameters. A formal quotation sheet will be dispatched to your email address shortly.
                    </p>
                  </div>
                </motion.div>
              )}

              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-red-50 border border-red-200 p-5 rounded-2xl flex items-start space-x-3 text-red-950 shadow-sm"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-[11px] font-light text-red-900">{errorMsg}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* INTERACTIVE COMMODITY SELECTOR */}
              <div className="space-y-4">
                <label className="text-[10px] uppercase font-bold tracking-wider text-dark-green block">
                  1. Commodities of Interest (Select All That Apply)
                </label>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {commoditiesList.map((commodity) => {
                    const isSelected = selectedCommodities.includes(commodity.label);
                    const IconComponent = commodity.icon;
                    return (
                      <button
                        key={commodity.id}
                        type="button"
                        onClick={() => handleCommodityToggle(commodity.label)}
                        className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all duration-300 outline-none ${
                          isSelected 
                            ? 'bg-primary-green/10 border-primary-green text-primary-green shadow-sm scale-102 font-bold'
                            : 'bg-white border-gray-200 hover:border-gold-accent/40 text-soft-gray hover:text-dark-text'
                        }`}
                      >
                        <div className={`p-2 rounded-xl mb-1.5 transition-colors ${
                          isSelected ? 'bg-primary-green/20' : 'bg-cream-bg/50 group-hover:bg-cream-bg'
                        }`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] uppercase font-bold leading-tight block">{commodity.label}</span>
                        <span className="text-[8px] opacity-75 mt-0.5 font-light">{commodity.desc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* MINIMALIST FLOATING LABEL TEXT INPUTS */}
              <div className="space-y-6">
                <label className="text-[10px] uppercase font-bold tracking-wider text-dark-green block">
                  2. Sourcing Parameters & Coordinator Details
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      className="block w-full px-4 pt-6 pb-2 text-xs font-semibold text-dark-text bg-white border-b-2 border-gray-200 focus:border-primary-green rounded-t-xl transition-all duration-300 focus:outline-none peer"
                    />
                    <label
                      htmlFor="name"
                      className="absolute text-[9px] uppercase font-bold text-soft-gray duration-300 transform -translate-y-3.5 scale-90 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-3.5 peer-focus:text-primary-green"
                    >
                      Your Full Name *
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      className="block w-full px-4 pt-6 pb-2 text-xs font-semibold text-dark-text bg-white border-b-2 border-gray-200 focus:border-primary-green rounded-t-xl transition-all duration-300 focus:outline-none peer"
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-[9px] uppercase font-bold text-soft-gray duration-300 transform -translate-y-3.5 scale-90 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-3.5 peer-focus:text-primary-green"
                    >
                      Corporate Email *
                    </label>
                  </div>

                  {/* Phone Input */}
                  <div className="relative group sm:col-span-2">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      className="block w-full px-4 pt-6 pb-2 text-xs font-semibold text-dark-text bg-white border-b-2 border-gray-200 focus:border-primary-green rounded-t-xl transition-all duration-300 focus:outline-none peer"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute text-[9px] uppercase font-bold text-soft-gray duration-300 transform -translate-y-3.5 scale-90 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-3.5 peer-focus:text-primary-green"
                    >
                      Mobile / WhatsApp Phone Line (with Country Code) *
                    </label>
                  </div>

                  {/* Subject Input */}
                  <div className="relative group sm:col-span-2">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      className="block w-full px-4 pt-6 pb-2 text-xs font-semibold text-dark-text bg-white border-b-2 border-gray-200 focus:border-primary-green rounded-t-xl transition-all duration-300 focus:outline-none peer"
                    />
                    <label
                      htmlFor="subject"
                      className="absolute text-[9px] uppercase font-bold text-soft-gray duration-300 transform -translate-y-3.5 scale-90 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-3.5 peer-focus:text-primary-green"
                    >
                      Trade Subject (e.g., Basmati 1121 Bulk Order Inquiry) *
                    </label>
                  </div>

                  {/* Message Input */}
                  <div className="relative group sm:col-span-2">
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder=" "
                      required
                      className="block w-full px-4 pt-6 pb-2 text-xs font-semibold text-dark-text bg-white border-b-2 border-gray-200 focus:border-primary-green rounded-t-xl transition-all duration-300 focus:outline-none peer resize-none"
                    />
                    <label
                      htmlFor="message"
                      className="absolute text-[9px] uppercase font-bold text-soft-gray duration-300 transform -translate-y-3.5 scale-90 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-3.5 peer-focus:text-primary-green"
                    >
                      Bulk Specifications (Volume in MT, Packaging Request, Destination Port) *
                    </label>
                  </div>
                </div>
              </div>

              {/* TACTILE SUBMIT ACTION */}
              <div className="pt-2">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-primary-green hover:bg-dark-green text-white font-bold text-xs py-4 px-6 rounded-2xl flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transition-all border border-gold-accent/20 disabled:bg-primary-green/60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-gold-accent" />
                      <span>SECURELY REGISTERING TRADE INQUIRY...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-gold-accent" />
                      <span>DISPATCH SOURCING INQUIRY TO GENERAL desk</span>
                    </>
                  )}
                </motion.button>
              </div>

            </form>
          </div>
        </motion.div>
      </section>

      {/* 3. Operational Sourcing & Logistics Geography (HQ & Seaports Hub) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-gold-accent/20 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Sourcing Hubs Bullet Checklist (Left Column, spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-gold-accent font-bold bg-dark-green/95 px-3 py-1 rounded-full inline-block">
                LOGISTICS COORD
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-dark-green">
                Outbound Logistics Network
              </h3>
              <p className="text-xs text-soft-gray font-light">
                We handle comprehensive container stuffing, documentation, phytosanitary certifications, and freight operations from central terminals:
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-dark-green uppercase">Corporate Head Office (Hyderabad)</h4>
                  <p className="text-[11px] text-soft-gray font-light">Commercial documentation, global billing coordination, and customer support.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-dark-green uppercase">Nhava Sheva stuffing Yard (JNPT, Mumbai)</h4>
                  <p className="text-[11px] text-soft-gray font-light">Our western logistics link for shipping sea containers to Europe, Middle East, and the Americas.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-gold-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-dark-green uppercase">Chennai Port Outbound Terminal (Chennai)</h4>
                  <p className="text-[11px] text-soft-gray font-light">Handles air-freight express consignments and sea freight routes targeting Southeast Asian territories.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Geography Vector Map (Right Column, spans 7 cols) */}
          <div className="lg:col-span-7 bg-cream-bg/60 rounded-3xl p-6 md:p-8 border border-cream-bg/80 relative flex flex-col items-center justify-center overflow-hidden h-[360px] shadow-inner">
            {/* Fine coordinate grid */}
            <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#063B1D_1px,transparent_1px),linear-gradient(to_bottom,#063B1D_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

            {/* Glowing active radar ring in Hyderabad */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[180px] h-[180px] border border-primary-green/10 rounded-full animate-pulse"></div>
              <div className="w-[280px] h-[280px] border border-primary-green/5 rounded-full absolute animate-ping [animation-duration:4s]"></div>
            </div>

            {/* Compass overlay */}
            <div className="absolute top-6 right-6 opacity-30 animate-spin [animation-duration:30s]">
              <Compass className="w-12 h-12 text-dark-green" />
            </div>

            {/* Map coordinate items */}
            <div className="relative z-10 text-center space-y-4">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-primary-green rounded-full animate-ping opacity-75"></div>
                <div className="bg-primary-green text-gold-accent p-4 rounded-full inline-block relative z-10 shadow-md">
                  <MapPin className="w-6 h-6 text-gold-accent" />
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="font-serif text-lg font-bold text-dark-green">Sri Varahi Agro Foods LLP</h4>
                <p className="text-[10px] text-soft-gray uppercase font-bold tracking-wider">Hyderabad Coord Desk: 17.3850° N, 78.4867° E</p>
                <p className="text-[11px] text-soft-gray font-light max-w-sm mx-auto mt-2">
                  Direct connection with APEDA packaging guidelines and central testing laboratories.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Hyderabad,+Telangana,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-cream-bg text-dark-green font-bold text-[10px] py-2.5 px-6 rounded-xl border border-gold-accent/40 shadow-sm hover:shadow transition-all inline-flex items-center space-x-2"
                >
                  <span>Launch Google Navigation Maps</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

            {/* Fine decoration status box */}
            <div className="absolute bottom-4 left-4 bg-white/80 border border-gold-accent/20 px-3 py-1 rounded-lg text-[8px] font-bold text-soft-gray uppercase tracking-widest backdrop-blur-sm">
              PHYTOSANITARY APPROVED
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
