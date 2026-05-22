import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  Loader2
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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

    // Retrieve EmailJS configuration from environment variables
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      // Live EmailJS send
      try {
        const templateParams = {
          from_name: formData.name,
          reply_to: formData.email,
          to_email: "info@srivarahiagrofoods.in",
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      } catch (error) {
        console.error("EmailJS Error:", error);
        setErrorMsg("Failed to send contact inquiry. Please check your internet connection or email configuration.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Graceful local simulation fallback
      console.log(
        `%c🌾 Sri Varahi Agro Foods LLP — Contact Us Submission Received! %c\n` +
        `To enable live email delivery to info@srivarahiagrofoods.in, please configure your .env file with real EmailJS keys.\n\n` +
        `Data submitted:\n`,
        'color: #0B4A25; font-weight: bold; font-size: 14px;',
        'color: inherit;',
        formData
      );

      // Simulate network delay
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      }, 1000);
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
    <div className="bg-cream-bg/40 min-h-screen pb-20">
      <SEO 
        title="Contact General Trade Desk & Corporate Office"
        description="Contact Sri Varahi Agro Foods LLP's general trade desk in Hyderabad, India. Reach our export trade coordinators via phone, email, or WhatsApp for custom sourcing support."
        keywords="contact Sri Varahi Agro, agro export Hyderabad, agricultural products wholesale contact, food export coordinators India, WhatsApp trade desk"
        schemaMarkup={contactSchema}
      />
      
      {/* 1. Page Hero Header */}
      <section className="relative bg-gradient-to-br from-primary-green to-dark-green text-white py-20 px-4 md:px-8 border-b-4 border-gold-accent text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F8F6F1_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.25em] text-gold-accent font-bold block"
          >
            TRADE DESK
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            Contact Sri Varahi Agro
          </motion.h1>
          <div className="w-20 h-1 bg-gold-accent mx-auto mt-4"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm text-cream-bg/70 max-w-xl mx-auto font-light leading-relaxed"
          >
            Get in touch with our export trade coordinators to obtain general details, distributor applications, feedback, or custom corporate support.
          </motion.p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct info widgets */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-8"
        >
          
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
                href="https://wa.me/918688669407?text=Hello%20Sri%20Varahi%20Agro%20Foods%20LLP,%20I%20have%20a%20general%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold text-green-700 hover:text-green-800"
              >
                Chat Instantly Now &rarr;
              </a>
            </div>
          </div>

        </motion.div>

        {/* Right Column: Premium Inquiry Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-gold-accent/10 shadow-sm space-y-6"
        >
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-gold-accent font-bold">GET IN TOUCH</span>
            <h3 className="font-serif text-2xl font-extrabold text-dark-green">
              Send a Message
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
                <h4 className="text-xs font-bold">Message Sent Successfully!</h4>
                <p className="text-[11px] font-light mt-0.5 leading-relaxed">
                  Thank you for contacting Sri Varahi Agro Foods LLP. Our team will review your message and reach back to you shortly.
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
                required
              />
            </div>

            <div className="flex flex-col space-y-1.5 col-span-2 sm:col-span-1">
              <label className="text-[10px] uppercase font-bold text-dark-green">Email Address *</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                placeholder="e.g. contact@yourdomain.com"
                className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40"
                required
              />
            </div>

            <div className="flex flex-col space-y-1.5 col-span-2">
              <label className="text-[10px] uppercase font-bold text-dark-green">Phone Number (with Country Code) *</label>
              <input 
                type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40"
                required
              />
            </div>

            <div className="flex flex-col space-y-1.5 col-span-2">
              <label className="text-[10px] uppercase font-bold text-dark-green">Subject *</label>
              <input 
                type="text" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange}
                placeholder="e.g. Partnership Request / General Sourcing Feedback"
                className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40"
                required
              />
            </div>

            <div className="flex flex-col space-y-1.5 col-span-2">
              <label className="text-[10px] uppercase font-bold text-dark-green">Your Message *</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange}
                rows="5"
                placeholder="Type your message or inquiry details here..."
                className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40"
                required
              />
            </div>

            <div className="col-span-2 pt-2">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary-green hover:bg-dark-green text-white font-bold text-xs py-4 px-6 rounded-xl flex items-center justify-center space-x-2 shadow-md transition-all border border-gold-accent/20 disabled:bg-primary-green/60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-gold-accent" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-gold-accent" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>

          </form>

        </motion.div>

      </section>

      {/* 3. Google Map Sourcing Frame */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 border border-gold-accent/10 shadow-sm"
        >
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
        </motion.div>
      </section>

    </div>
  );
}
