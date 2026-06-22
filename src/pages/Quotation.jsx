import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  CheckCircle2, 
  User, 
  Building, 
  Globe, 
  Anchor, 
  FileText, 
  ChevronRight, 
  ShieldCheck, 
  HelpCircle, 
  Loader2,
  Lock,
  Sparkles
} from 'lucide-react';
import { products } from '../data/agroData';
import SEO from '../components/SEO';

export default function Quotation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    designation: "",
    country: "",
    portOfDestination: "",
    productInterested: "",
    quantity: "",
    packagingPreference: "",
    paymentTerms: "",
    specialSpecs: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    // Form Validation
    const requiredFields = [
      'name', 'email', 'phone', 'companyName', 'country', 
      'portOfDestination', 'productInterested', 'quantity', 
      'packagingPreference', 'paymentTerms'
    ];

    const missingFields = requiredFields.filter(field => !formData[field].trim());
    if (missingFields.length > 0) {
      setErrorMessage("Please fill in all mandatory trade fields (*).");
      setIsSubmitting(false);
      return;
    }

    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001';

    try {
      const response = await fetch(`${apiUrl}/api/quote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          companyName: "",
          designation: "",
          country: "",
          portOfDestination: "",
          productInterested: "",
          quantity: "",
          packagingPreference: "",
          paymentTerms: "",
          specialSpecs: "",
          message: ""
        });
      } else {
        setErrorMessage(resData.error || "Failed to send quotation inquiry. Please check backend SMTP settings.");
      }
    } catch (error) {
      console.error("API Quotation Error:", error);
      setErrorMessage("Failed to send quotation request. Please check your connection or server configuration.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-cream-bg/40 min-h-screen pb-24">
      <SEO 
        title="Request Commercial Export Quote | Custom Sourcing"
        description="Request a custom bulk export quotation from Sri Varahi Agro Foods LLP. Submit your commodity parameters, volume requirements, and payment preferences for a formalized commercial offer sheet."
        keywords="bulk quotation agro, import export price sheet, agricultural products quote, FCL container price, wholesale agro pricing India, private label pricing"
      />
      
      {/* Page Hero Header */}
      <section className="relative bg-gradient-to-br from-primary-green to-dark-green text-white py-20 px-4 md:px-8 border-b-4 border-gold-accent text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F8F6F1_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.25em] text-gold-accent font-bold block"
          >
            GLOBAL COMMODITIES DESK
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            Commercial Bulk Quotation
          </motion.h1>
          <div className="w-20 h-1 bg-gold-accent mx-auto mt-4"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm text-cream-bg/70 max-w-xl mx-auto font-light leading-relaxed"
          >
            Submit your precise shipping configuration, volume requirements, and payment preferences. Our global trade coordinators will review and reply within 24 business hours.
          </motion.p>
        </div>
      </section>

      {/* Main Form Content */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Requirements Guidelines & Confidence Info */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white p-6 rounded-3xl border border-gold-accent/10 shadow-sm space-y-5">
              <h3 className="font-serif text-base font-bold text-dark-green flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-gold-accent" />
                <span>Trade Guarantees</span>
              </h3>
              
              <ul className="space-y-4 text-xs font-light text-soft-gray">
                <li className="flex items-start gap-2.5">
                  <ChevronRight className="w-3.5 h-3.5 text-primary-green shrink-0 mt-0.5" />
                  <span><b>APEDA Certified Sourcing:</b> Compliant with global export quality standards.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ChevronRight className="w-3.5 h-3.5 text-primary-green shrink-0 mt-0.5" />
                  <span><b>SGS / Inspectorate Audit:</b> Open to full pre-shipment inspections at loading ports.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ChevronRight className="w-3.5 h-3.5 text-primary-green shrink-0 mt-0.5" />
                  <span><b>Flexible Logistics:</b> FCL sea containers (20ft/40ft) and express air cargo options.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary-green to-dark-green text-white p-6 rounded-3xl border border-gold-accent/20 shadow-md space-y-4 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-10 text-white pointer-events-none">
                <Sparkles className="w-32 h-32" />
              </div>
              <h3 className="font-serif text-sm font-bold text-gold-accent flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                <span>Direct Sourcing Desk</span>
              </h3>
              <p className="text-[11px] text-cream-bg/75 leading-relaxed font-light">
                Do you have custom branding or consumer packaging requirements? Specify details under 'Special Specifications' so we can configure custom packaging lines.
              </p>
              <div className="border-t border-white/10 pt-3 flex items-center justify-between text-[11px] font-semibold">
                <span>Immediate WhatsApp Connect</span>
                <a 
                  href="https://wa.me/918143234488"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gold-accent hover:underline flex items-center gap-1"
                >
                  Chat Now &rarr;
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Commercial Form */}
          <div className="lg:col-span-8 bg-white p-8 md:p-10 rounded-3xl border border-gold-accent/10 shadow-sm space-y-6">
            
            <div className="flex justify-between items-center border-b border-cream-bg pb-4">
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-widest text-gold-accent font-bold">FCL / LCL COMMERCIAL INQUIRY</span>
                <h3 className="font-serif text-xl font-extrabold text-dark-green">
                  Bulk Quotation Request
                </h3>
              </div>
              <div className="flex items-center gap-1 bg-cream-bg/50 px-2.5 py-1.5 rounded-lg border border-gold-accent/10 text-[10px] text-soft-gray font-light">
                <Lock className="w-3 h-3 text-gold-accent" />
                <span>Encrypted Submission</span>
              </div>
            </div>

            {/* Success Banner */}
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-300 p-5 rounded-2xl flex items-start space-x-4 text-green-800"
              >
                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold">Quotation Inquiry Submitted!</h4>
                  <p className="text-[11px] font-light mt-0.5 leading-relaxed">
                    Thank you. Your custom commercial request is now registered with Sri Varahi Agro Foods LLP. Our trade coordinator will analyze your specifications and email you a formalized commercial offer sheet with shipping estimates shortly.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Error Notification */}
            {errorMessage && (
              <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-start space-x-3 text-red-800">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0"></span>
                <p className="text-[11px] font-light">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Section 1: Contact Information */}
              <div className="space-y-4">
                <div className="text-[10px] uppercase font-bold text-gold-accent tracking-wider flex items-center gap-1">
                  <User className="w-3.5 h-3.5" />
                  <span>1. Corporate Contact Details</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1.5">
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

                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-dark-green">Work Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      placeholder="e.g. buyer@globalfoods.com"
                      className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40"
                      required
                    />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-dark-green">Phone Number (with Country Code) *</label>
                    <input 
                      type="text" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                      placeholder="e.g. +971 50 123 4567"
                      className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40"
                      required
                    />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-dark-green">Company / Organization Name *</label>
                    <input 
                      type="text" 
                      name="companyName" 
                      value={formData.companyName} 
                      onChange={handleChange}
                      placeholder="e.g. Varahi Imports Middle East"
                      className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40"
                      required
                    />
                  </div>

                  <div className="flex flex-col space-y-1.5 md:col-span-2">
                    <label className="text-[10px] uppercase font-bold text-dark-green">Your Designation / Job Title</label>
                    <input 
                      type="text" 
                      name="designation" 
                      value={formData.designation} 
                      onChange={handleChange}
                      placeholder="e.g. Head of Sourcing / Senior Food Trader"
                      className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Destination & Sourcing */}
              <div className="space-y-4 pt-2">
                <div className="text-[10px] uppercase font-bold text-gold-accent tracking-wider flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" />
                  <span>2. Sourcing Geography & Delivery Port</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-dark-green">Country of Import *</label>
                    <input 
                      type="text" 
                      name="country" 
                      value={formData.country} 
                      onChange={handleChange}
                      placeholder="e.g. United Arab Emirates"
                      className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40"
                      required
                    />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-dark-green">Port of Destination (Discharge) *</label>
                    <input 
                      type="text" 
                      name="portOfDestination" 
                      value={formData.portOfDestination} 
                      onChange={handleChange}
                      placeholder="e.g. Port Jebel Ali, Dubai"
                      className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Commodity Details */}
              <div className="space-y-4 pt-2">
                <div className="text-[10px] uppercase font-bold text-gold-accent tracking-wider flex items-center gap-1">
                  <Anchor className="w-3.5 h-3.5" />
                  <span>3. Commodity & Trade Specifications</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-dark-green">Select Product *</label>
                    <select 
                      name="productInterested" 
                      value={formData.productInterested} 
                      onChange={handleChange}
                      className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40 text-soft-gray"
                      required
                    >
                      <option value="">Select a Product</option>
                      {products.map(p => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                      <option value="Other Commodities">Other Commodity (Specify in Message)</option>
                    </select>
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-dark-green">Estimated Quantity Needed *</label>
                    <input 
                      type="text" 
                      name="quantity" 
                      value={formData.quantity} 
                      onChange={handleChange}
                      placeholder="e.g. 50 Metric Tons (2x20' FCL)"
                      className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40"
                      required
                    />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-dark-green">Packaging Preference *</label>
                    <select 
                      name="packagingPreference" 
                      value={formData.packagingPreference} 
                      onChange={handleChange}
                      className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40 text-soft-gray"
                      required
                    >
                      <option value="">Select Packaging</option>
                      <option value="Jute Bags (25kg / 50kg)">Jute Bags (25kg / 50kg)</option>
                      <option value="BOPP Laminated Bags (5kg / 10kg)">BOPP Laminated Bags (5kg / 10kg)</option>
                      <option value="PP Woven Bags (10kg / 25kg)">PP Woven Bags (10kg / 25kg)</option>
                      <option value="Non-Woven Bags (1kg / 2kg)">Non-Woven Bags (1kg / 2kg)</option>
                      <option value="Custom Brand Packaging">Custom Consumer Labeling (Branded)</option>
                      <option value="Bulk Loose Container Loading">Bulk Loose / Customized Sacks</option>
                    </select>
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-dark-green">Preferred Payment Terms *</label>
                    <select 
                      name="paymentTerms" 
                      value={formData.paymentTerms} 
                      onChange={handleChange}
                      className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40 text-soft-gray"
                      required
                    >
                      <option value="">Select Payment Option</option>
                      <option value="100% Irrevocable L/C at Sight">100% Irrevocable L/C at Sight</option>
                      <option value="30% Advance T/T + 70% against BL scanned documents">30% Advance T/T + 70% against BL scanned documents</option>
                      <option value="Documents Against Payment (D/P) / CAD">Documents Against Payment (D/P) / CAD</option>
                      <option value="Custom Negotiation">Other Custom Terms</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 4: Specifications & Remarks */}
              <div className="space-y-4 pt-2">
                <div className="text-[10px] uppercase font-bold text-gold-accent tracking-wider flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" />
                  <span>4. Quality Specifications & Special Requests</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-dark-green">Moisture Level, Grade, Certification or SGS Specs</label>
                    <textarea 
                      name="specialSpecs" 
                      value={formData.specialSpecs} 
                      onChange={handleChange}
                      rows="3"
                      placeholder="Specify broken percentage limit (e.g. 5% max for IR64), moisture limit, phytosanitary requirements, or pre-shipment inspections here."
                      className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40"
                    />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-dark-green">Additional Remarks / Message</label>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange}
                      rows="4"
                      placeholder="Detail shipping schedules, pricing models (FOB/CIF), target matching rates or special port requests here."
                      className="border border-cream-bg bg-cream-bg/25 rounded-xl py-3 px-4 text-xs font-light focus:outline-none focus:border-gold-accent/40"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary-green hover:bg-dark-green text-white font-bold text-xs py-4 px-6 rounded-xl flex items-center justify-center space-x-2 shadow-md transition-all border border-gold-accent/20 disabled:bg-primary-green/60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-gold-accent" />
                      <span>Sending Sourcing Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-gold-accent" />
                      <span>Submit Commercial Sourcing Request</span>
                    </>
                  )}
                </button>
              </div>

            </form>

          </div>

        </div>
      </div>

    </div>
  );
}
