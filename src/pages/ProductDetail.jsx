import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageSquare, Mail, ShieldAlert, Award, FileText, Sparkles, HelpCircle } from 'lucide-react';
import { products } from '../data/agroData';
import SEO from '../components/SEO';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const currentProduct = products.find(p => p.slug === slug);
    if (currentProduct) {
      setProduct(currentProduct);
    } else {
      setProduct(null);
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="bg-cream-bg/40 min-h-screen py-24 px-4 flex flex-col items-center justify-center">
        <ShieldAlert className="w-16 h-16 text-red-600 mb-4" />
        <h2 className="font-serif text-2xl font-bold text-dark-green">Product Not Found</h2>
        <p className="text-xs text-soft-gray font-light mt-2">The requested crop is currently unavailable or the link is broken.</p>
        <Link to="/products" className="mt-6 bg-primary-green text-white font-bold text-xs py-3 px-6 rounded-full">
          Browse All Products
        </Link>
      </div>
    );
  }

  // Get related products from the same category (excluding current product)
  const relatedProducts = products
    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  // Prefilled WhatsApp query
  const whatsappUrl = `https://wa.me/918688669407?text=Hello%20Sri%20Varahi%20Agro%20Foods%20LLP,%20I%20am%20interested%20in%20an%20export/wholesale%20quote%20for%20"${encodeURIComponent(product.name)}".%20Please%20provide%20pricing%20and%20packing%20configurations.`;

  const additionalProperties = product ? Object.entries(product.specTable).map(([key, val]) => ({
    "@type": "PropertyValue",
    "name": key,
    "value": val
  })) : [];

  const productSchema = product ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image.startsWith('http') ? product.image : `https://srivarahiagrofoods.in${product.image}`,
    "description": product.shortDescription,
    "brand": {
      "@type": "Brand",
      "name": "Sri Varahi Agro Foods LLP"
    },
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "url": `https://srivarahiagrofoods.in/products/${product.slug}`,
      "priceCurrency": "USD",
      "price": "0.00",
      "priceValidUntil": "2027-12-31",
      "valueAddedTaxIncluded": "false",
      "availability": "https://schema.org/InStock",
      "description": "Contact Sri Varahi Agro Foods LLP for premium wholesale B2B pricing and export shipping quotes."
    },
    "additionalProperty": additionalProperties
  } : null;

  return (
    <div className="bg-cream-bg/40 min-h-screen pb-20">
      <SEO 
        title={`${product.name} Exporter & Wholesale Supplier`}
        description={product.shortDescription}
        keywords={`${product.name}, Indian ${product.name} exporter, ${product.name} supplier, bulk ${product.name} wholesale, ${product.categorySlug.replace('-', ' ')} India`}
        ogImage={product.image}
        schemaMarkup={productSchema}
      />
      
      {/* Back button strip */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
        <Link 
          to="/products" 
          className="inline-flex items-center text-xs font-bold text-primary-green hover:text-gold-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Product Catalog
        </Link>
      </div>

      {/* Main product specs grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Crop Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-gold-accent/15 aspect-square relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 bg-primary-green text-gold-accent font-bold text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-gold-accent/20">
              {product.category}
            </span>
          </div>

          {/* Quick trust flags */}
          <div className="bg-white p-6 rounded-2xl border border-cream-bg shadow-sm grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 text-[10px] text-soft-gray font-light">
              <Award className="w-5 h-5 text-gold-accent shrink-0" />
              <span>SGS Auditable Quality</span>
            </div>
            <div className="flex items-center space-x-2 text-[10px] text-soft-gray font-light">
              <FileText className="w-5 h-5 text-gold-accent shrink-0" />
              <span>Hygienically Packed</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Descriptions, Spec Table, CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-7 space-y-6"
        >
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-gold-accent">PREMIUM COMMODITY</span>
            <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-dark-green mt-1">{product.name}</h1>
            <div className="text-xs md:text-sm text-soft-gray font-light leading-relaxed mt-4 space-y-3">
              <p>{product.shortDescription} {product.name} stands as a testament to our commitment to excellence, meticulously sourced and processed to meet global standards.</p>
              <p>Recognized for being {product.keyPoints.slice(0, 2).map(p => p.toLowerCase()).join(" and ")}, this premium {product.category.toLowerCase().replace(/s$/, '')} delivers unmatched quality. It is natively cultivated and sourced from {product.specTable.Origin || 'India'}, ensuring authentic flavor, texture, and aroma profiles.</p>
              <p>We provide extensive packing solutions ranging from {product.packingOptions.slice(0, 2).join(' to ').toLowerCase()}, making it highly suitable for {product.applications.toLowerCase()}. With an extended shelf life of {product.shelfLife}, this commodity guarantees long-lasting freshness for both domestic and international markets.</p>
            </div>
          </div>

          {/* Dynamic Specifications Table */}
          <div className="bg-white rounded-2xl border border-gold-accent/10 overflow-hidden shadow-sm">
            <div className="bg-primary-green/5 py-3.5 px-5 border-b border-gold-accent/15">
              <h3 className="font-serif text-xs font-bold text-dark-green uppercase tracking-wider flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-gold-accent" />
                Technical Specifications
              </h3>
            </div>
            <div className="divide-y divide-cream-bg">
              {Object.entries(product.specTable).map(([key, value]) => (
                <div key={key} className="grid grid-cols-4 py-3 px-5 text-xs">
                  <span className="col-span-1.5 font-bold text-dark-green">{key}:</span>
                  <span className="col-span-2.5 font-light text-soft-gray">{value}</span>
                </div>
              ))}
              <div className="grid grid-cols-4 py-3 px-5 text-xs">
                <span className="col-span-1.5 font-bold text-dark-green">Shelf Life:</span>
                <span className="col-span-2.5 font-light text-soft-gray">{product.shelfLife}</span>
              </div>
            </div>
          </div>

          {/* Packaging and Application Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Packaging options card */}
            <div className="bg-white p-6 rounded-2xl border border-cream-bg shadow-sm">
              <h4 className="text-xs font-bold text-primary-green uppercase tracking-wide border-b border-cream-bg pb-2 mb-3">
                Packing Alternatives
              </h4>
              <ul className="space-y-2">
                {product.packingOptions.map((opt, i) => (
                  <li key={i} className="text-xs text-soft-gray font-light flex items-center">
                    <span className="w-1.5 h-1.5 bg-gold-accent rounded-full mr-2 shrink-0"></span>
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications card */}
            <div className="bg-white p-6 rounded-2xl border border-cream-bg shadow-sm">
              <h4 className="text-xs font-bold text-primary-green uppercase tracking-wide border-b border-cream-bg pb-2 mb-3">
                Industry Applications
              </h4>
              <p className="text-xs text-soft-gray font-light leading-relaxed">
                {product.applications}
              </p>
            </div>

          </div>

          {/* Availability Flags */}
          <div className="flex items-center space-x-6 py-2">
            <div className="flex items-center text-xs">
              <span className={`w-3 h-3 rounded-full mr-2 shrink-0 ${product.exportAvailability ? 'bg-green-600' : 'bg-red-500'}`}></span>
              <span className="font-medium text-dark-green">Export Availability: {product.exportAvailability ? "Active" : "Seasonal"}</span>
            </div>
            <div className="flex items-center text-xs">
              <span className={`w-3 h-3 rounded-full mr-2 shrink-0 ${product.domesticAvailability ? 'bg-green-600' : 'bg-red-500'}`}></span>
              <span className="font-medium text-dark-green">Domestic Availability: {product.domesticAvailability ? "Active" : "Seasonal"}</span>
            </div>
          </div>

          {/* Actions CTA Section */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-green-600 text-white font-bold text-xs md:text-sm py-4 px-6 rounded-xl flex items-center justify-center hover:bg-green-700 transition-all shadow-md gap-2"
            >
              <MessageSquare className="w-5 h-5 fill-white text-green-600 shrink-0" />
              <span>WhatsApp Inquiry</span>
            </a>

            <Link 
              to="/contact" 
              className="bg-primary-green text-white font-bold text-xs md:text-sm py-4 px-6 rounded-xl text-center hover:bg-dark-green transition-all shadow-md border border-gold-accent/20 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5 shrink-0" />
              <span>Request Quotation</span>
            </Link>

          </div>

        </motion.div>

      </section>

      {/* Related Products Grid */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mt-24 border-t border-gold-accent/15 pt-16">
          <div className="text-center md:text-left mb-10">
            <h2 className="font-serif text-2xl font-extrabold text-dark-green tracking-tight">
              Related Premium Crops
            </h2>
            <div className="w-16 h-1 bg-gold-accent mt-2.5"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((prod, idx) => (
              <motion.div 
                key={prod.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-cream-bg shadow-sm flex flex-col group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden bg-cream-bg">
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-primary-green text-gold-accent font-bold text-[8px] uppercase tracking-wider px-2 py-1 rounded">
                    {prod.category}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-sm font-bold text-dark-green leading-snug group-hover:text-primary-green transition-colors line-clamp-1">
                      {prod.name}
                    </h3>
                    <p className="text-[10px] text-soft-gray mt-1.5 font-light line-clamp-2">
                      {prod.shortDescription}
                    </p>
                  </div>
                  
                  <div className="pt-3 mt-3 border-t border-cream-bg flex items-center justify-between">
                    <span className="text-[9px] text-soft-gray">MOQ: <b className="text-dark-green">{prod.moq}</b></span>
                    <Link 
                      to={`/products/${prod.slug}`} 
                      className="text-[10px] font-bold text-primary-green hover:text-gold-accent flex items-center"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
