// Centralized Agro Data for Sri Varahi Agro Foods LLP
// Easily customizable and editable arrays

export const categories = [
  {
    id: 1,
    name: "Coffee Beans",
    slug: "coffee-beans",
    subtitle: "Rich Aroma | Premium Quality",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    description: "Sourced directly from India's lush Western Ghats, processed and graded with strict quality control."
  },
  {
    id: 2,
    name: "Turmeric",
    slug: "turmeric",
    subtitle: "Pure & Natural | High Curcumin",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    description: "Premium grade Nizamabad & Salem turmeric, renowned globally for its vibrant gold color and active curcumin content."
  },
  {
    id: 3,
    name: "Rice",
    slug: "rice",
    subtitle: "Export Quality | Premium Grains",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    description: "Long-grain aromatic Basmati, rich non-Basmati variety (IR 64), Sona Masoori, and JSR rice varieties."
  },
  {
    id: 4,
    name: "Spices",
    slug: "spices",
    subtitle: "Rich Aroma | Indian Origin",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    description: "Red Chilli, Coriander, Cumin, and custom spice powders with authentic Indian origin and aroma."
  },
  {
    id: 5,
    name: "Fruits",
    slug: "fruits",
    subtitle: "Farm Fresh | Naturally Grown",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80",
    description: "Premium grapes, banana, mango, citrus, and pomegranates harvested at peak maturity and cold-transported."
  },
  {
    id: 6,
    name: "Vegetables",
    slug: "vegetables",
    subtitle: "Fresh & Healthy | Quality Assured",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    description: "Fresh green chilli, onion, garlic, tomatoes, and curry leaves sourced daily from selected growers."
  },
  {
    id: 7,
    name: "Dehydrated Products",
    slug: "dehydrated-products",
    subtitle: "Long Shelf Life | Hygienic Packing",
    image: "https://images.unsplash.com/photo-1538341993304-89418d47951c?auto=format&fit=crop&w=800&q=80",
    description: "Dehydrated onion flakes, garlic powder, curry leaves, and other hygienically processed foods."
  },
  {
    id: 8,
    name: "Agro Commodities",
    slug: "agro-commodities",
    subtitle: "Bulk Feed & Grains | High Nutrient",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    description: "Premium Rice Husk, Rice Bran, Maize, and high-nutrient Millets for animal feed and food processing."
  }
];

export const products = [
  {
    id: "p1",
    name: "Arabica Coffee Beans",
    slug: "arabica-coffee-beans",
    category: "Coffee Beans",
    categorySlug: "coffee-beans",
    shortDescription: "Rich, aromatic, premium Indian Arabica beans handpicked at high altitudes.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Rich Aroma", "Single-Origin Selection", "Perfect for Roasting", "Zero Adulteration"],
    specTable: {
      "Origin": "India (Western Ghats)",
      "Type": "Arabica Coffee Beans",
      "Quality": "Premium cleaned, hand-sorted",
      "Moisture": "11% - 12.5% max",
      "Grade": "AAA / AA Standard",
      "Processing": "Washed / Honey Processed"
    },
    packingOptions: ["25kg Jute Bags", "50kg Jute Bags", "Bulk Bags", "Custom vacuum retail packaging"],
    moq: "10 Metric Tons (MT)",
    shelfLife: "12 Months",
    applications: "Roasting, Espresso blends, Retail retail packaging, Premium soluble coffee.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p2",
    name: "Robusta Coffee Beans",
    slug: "robusta-coffee-beans",
    category: "Coffee Beans",
    categorySlug: "coffee-beans",
    shortDescription: "Strong body, smooth cream, and premium high-caffeine Indian Robusta beans.",
    image: "https://images.unsplash.com/photo-1587915538606-f199e3a6c63e?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["High Caffeine Content", "Bold Body", "Premium Selection", "Clean cup profile"],
    specTable: {
      "Origin": "India (Wayanad/Coorg region)",
      "Type": "Robusta Coffee Beans",
      "Quality": "Polished & Double Cleaned",
      "Moisture": "12% max",
      "Defects": "Less than 2%",
      "Processing": "Dry processed / Washed cherry"
    },
    packingOptions: ["50kg Jute Bags", "60kg Bulk Containers", "Custom PP Bags"],
    moq: "15 Metric Tons (MT)",
    shelfLife: "18 Months",
    applications: "Espresso blends, Instant coffee manufacturing, Beverage processing.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p3",
    name: "Turmeric Finger",
    slug: "turmeric-finger",
    category: "Turmeric",
    categorySlug: "turmeric",
    shortDescription: "High-curcumin whole turmeric finger sourced from premium fields in India.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Curcumin: 4.5%+", "Pure Gold Color", "Well-dried & polished", "Export Grade Quality"],
    specTable: {
      "Origin": "India (Salem / Nizamabad)",
      "Forms": "Whole Finger / Bulbs",
      "Quality": "Double polished, high-curcumin",
      "Moisture": "8% - 10% max",
      "Starch Content": "Negligible",
      "Lead & Heavy Metals": "Undetected (Safe / Premium)"
    },
    packingOptions: ["25kg PP Bags", "50kg Jute Bags", "Custom non-branded bags"],
    moq: "5 Metric Tons (MT)",
    shelfLife: "24 Months",
    applications: "Spices, extracts, food coloring, medicinal formulations, cosmetics.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p4",
    name: "Turmeric Powder",
    slug: "turmeric-powder",
    category: "Turmeric",
    categorySlug: "turmeric",
    shortDescription: "Hygienically milled, 100% pure turmeric powder with no synthetic additives.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["No Artificial Colors", "Aromatic & Earthy", "Hygienically Packed", "Strict Quality Tested"],
    specTable: {
      "Origin": "India",
      "Forms": "Fine Ground Powder (100 mesh)",
      "Quality": "Pure, Grade-A premium",
      "Curcumin Value": "3.5% to 5.0%",
      "Adulteration": "0% Guaranteed"
    },
    packingOptions: ["1kg Pouch", "5kg Bag", "25kg Paper Kraft Bags with PE lining", "50kg PP Bags"],
    moq: "2 Metric Tons (MT)",
    shelfLife: "18 Months",
    applications: "Cooking spice, wellness tea, curry powders, nutritional supplements.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p5",
    name: "Basmati Rice",
    slug: "basmati-rice",
    category: "Rice",
    categorySlug: "rice",
    shortDescription: "King of grains, long slender kernels with high aromatic fragrance and premium texture.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Exceptional Elongation", "Stunning Fragrance", "Aged for Perfect Cooking", "Fluffy and Non-Sticky"],
    specTable: {
      "Origin": "India (Indo-Gangetic Plains)",
      "Types": "1121 Sella, Golden Sella, Raw Basmati",
      "Average Length": "7.45 mm - 8.35 mm",
      "Moisture": "12.5% max",
      "Broken Ratio": "1% max",
      "Chalky Grains": "Negligible"
    },
    packingOptions: ["1kg, 5kg, 10kg, 20kg Jute/BOPP Bags", "25kg / 50kg PP Bags", "Private label packaging"],
    moq: "12.5 Metric Tons (MT) / 1 FCL",
    shelfLife: "24 Months",
    applications: "Biryani preparation, gourmet catering, retail supermarkets, export markets.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p6",
    name: "IR 64 Non-Basmati Rice",
    slug: "ir-64-rice",
    category: "Rice",
    categorySlug: "rice",
    shortDescription: "Excellent long grain parboiled rice, highly popular across African and Gulf countries.",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Highly Affordable", "Sturdy Long Grains", "Hygienically Cleaned", "Consistent Quality"],
    specTable: {
      "Origin": "India",
      "Types": "Parboiled 5% broken / Raw 5% broken",
      "Average Length": "6.0 mm+",
      "Moisture": "14% max",
      "Broken Ratio": "5% max (or customized)",
      "Foreign Matter": "0.1% max"
    },
    packingOptions: ["25kg / 26kg / 50kg PP Bags", "Jumbo bulk shipping bags"],
    moq: "24 Metric Tons (MT) / 1x20' FCL",
    shelfLife: "24 Months",
    applications: "Daily consumption, institutional catering, bulk state supplies, food aid.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p7",
    name: "Fresh Grapes",
    slug: "fresh-grapes",
    category: "Fruits",
    categorySlug: "fruits",
    shortDescription: "Crisp, sweet, farm-fresh green and black seedless grapes packed with freshness.",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Farm Fresh", "Sweet and Seedless", "Strict Pesticide Residue Checked", "Cold Chain Managed"],
    specTable: {
      "Origin": "India (Nashik/Maharashtra)",
      "Types": "Thompson Seedless, Sharad Seedless",
      "Berry Size": "16mm - 18mm+",
      "TSS (Sugar)": "16° - 18° Brix",
      "Quality": "Class-1 export specification"
    },
    packingOptions: ["4.5kg Corrugated Box", "5kg Carry-bag cartons", "Custom punnets in cold packaging"],
    moq: "1 Container (Reefer)",
    shelfLife: "Harvest Fresh (Cold chain dependent)",
    applications: "Direct fresh consumption, retail, juices, catering.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p8",
    name: "Fresh Green Chilli",
    slug: "fresh-green-chilli",
    category: "Vegetables",
    categorySlug: "vegetables",
    shortDescription: "Vibrant, spicy green chillies sorted for uniform length and export quality.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Pungent & Spicy", "Naturally Fresh", "Uniform Sorting", "Quick Cold Storage Transit"],
    specTable: {
      "Origin": "India",
      "Types": "G4, Teja Green",
      "Length": "6cm to 10cm+",
      "Color": "Deep Dark Green",
      "Moisture Control": "Packed dry to prevent rotting"
    },
    packingOptions: ["3.5kg Carton Boxes", "4kg/5kg Mesh Bags", "Vented Export Cartons"],
    moq: "3 Metric Tons (MT) by Air / 1 FCL Reefer by Sea",
    shelfLife: "14 Days under refrigerated transit",
    applications: "Direct food processing, culinary hot spice, culinary preparations, pickles.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p9",
    name: "Red Chilli",
    slug: "red-chilli",
    category: "Spices",
    categorySlug: "spices",
    shortDescription: "Guntur Teja & S17 Red Chillies with deep red color, intense heat and high aroma.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Intense Pungency", "Rich Natural Red Color", "Sun-Dried Safely", "Zero Synthetic Paint"],
    specTable: {
      "Origin": "India (Andhra Pradesh - Guntur)",
      "Types": "Teja S17, Byadgi, Sanam",
      "Quality": "Premium with stems / stemless",
      "Moisture": "12% max",
      "Pungency (SHU)": "40,000 - 80,000"
    },
    packingOptions: ["10kg / 25kg Gunny Bags", "PP Bags", "Custom carton boxes"],
    moq: "7 Metric Tons (MT)",
    shelfLife: "12 Months",
    applications: "Chilli powder manufacturing, food seasoning, oleoresin extraction.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p10",
    name: "Fresh Onion",
    slug: "fresh-onion",
    category: "Vegetables",
    categorySlug: "vegetables",
    shortDescription: "High-grade pink and red onions, harvested and dried naturally, boasting long shelf life.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Strong Pungency", "Thick outer skin layers", "Perfect drying process", "Excellent shelf stability"],
    specTable: {
      "Origin": "India (Nashik / Pune)",
      "Types": "Red Onion, Pink Onion",
      "Sizes": "35mm+, 45mm+, 55mm+",
      "Quality": "Double-skinned, well-cured"
    },
    packingOptions: ["5kg, 10kg, 20kg, 25kg, 50kg Red Mesh Bags", "Jute sacks"],
    moq: "25 Metric Tons (MT) / 1x40' Reefer or dry container",
    shelfLife: "30 - 45 Days in airy, well-ventilated dry storage",
    applications: "Supermarkets, wholesalers, food processing, culinary base preparation.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p11",
    name: "Garlic",
    slug: "garlic",
    category: "Vegetables",
    categorySlug: "vegetables",
    shortDescription: "Whole premium Indian white garlic, fully cured with bold cloves and rich taste.",
    image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Bold Clove Size", "Intense Garlic Aroma", "Well Dried & Cleaned", "Free from soil/mold"],
    specTable: {
      "Origin": "India (Madhya Pradesh / Rajasthan)",
      "Types": "Premium White Garlic",
      "Sizes": "30mm to 50mm+",
      "Quality": "Cleaned, roots cut, well cured"
    },
    packingOptions: ["10kg, 20kg Mesh Bags", "5kg Cartons", "Custom small nets"],
    moq: "10 Metric Tons (MT)",
    shelfLife: "3 - 4 Months",
    applications: "Spice preparations, garlic pastes, retail grocery, medicinal extracts.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p12",
    name: "Curry Leaves",
    slug: "curry-leaves",
    category: "Vegetables",
    categorySlug: "vegetables",
    shortDescription: "Aromatic fresh green curry leaves, cleaned and packed with absolute care.",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Intense Herbal Aroma", "Freshly Picked", "Washed and Sorted", "Ideal for Tempering"],
    specTable: {
      "Origin": "India",
      "Form": "Fresh Stalks / Loose Leaves",
      "Quality": "100% natural, green color",
      "Pesticide Level": "Strict safety compliant"
    },
    packingOptions: ["Corrugated Box (2kg to 5kg) with butter paper lining", "Custom bags"],
    moq: "500 kg (by Air shipment)",
    shelfLife: "7 - 10 Days under refrigeration",
    applications: "Tempering in Indian cooking, spice mixes, herbal cosmetics.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p13",
    name: "Dehydrated Onion Flakes & Powder",
    slug: "dehydrated-onion",
    category: "Dehydrated Products",
    categorySlug: "dehydrated-products",
    shortDescription: "Premium grade dehydrated red and white onion products with long-lasting freshness.",
    image: "https://images.unsplash.com/photo-1508747703725-719ae2c98295?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Hygienic Dehydration", "No Moisture Retention", "100% Fresh Rehydration", "Saves Prep Time"],
    specTable: {
      "Origin": "India",
      "Forms": "Flakes / Kibbled / Fine Powder",
      "Moisture": "4.5% max",
      "Quality": "Grade-A Export Specification",
      "Color": "Creamish White / Light Pink"
    },
    packingOptions: ["14kg / 20kg Double Poly Bags inside Carton", "Custom bulk bags"],
    moq: "3 Metric Tons (MT)",
    shelfLife: "12 Months in airtight cool dry environment",
    applications: "Soups, fast food, snacks flavoring, instant food mixes, restaurant catering.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p14",
    name: "Millets & Maize",
    slug: "millets-maize",
    category: "Agro Commodities",
    categorySlug: "agro-commodities",
    shortDescription: "Highly nutritious yellow maize and organic millets (Bajra, Ragi, Jowar) for food and feed.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Nutrient Rich", "Aflatoxin Safe", "Direct Farm Procurement", "Excellent Feed Quality"],
    specTable: {
      "Origin": "India",
      "Forms": "Whole Seeds / Grains",
      "Moisture": "13% - 14% max",
      "Aflatoxin": "Less than 20 ppb (Export Grade)",
      "Foreign Matter": "1% max"
    },
    packingOptions: ["50kg PP Bags", "Bulk vessel / container loading"],
    moq: "20 Metric Tons (MT)",
    shelfLife: "12 Months",
    applications: "Animal feed formulation, corn starch production, organic grains flour, snacks.",
    exportAvailability: true,
    domesticAvailability: true
  }
];

export const benefits = [
  {
    id: 1,
    title: "Premium Quality Sourcing",
    description: "We source our crops from partner farmers using sustainable agricultural methods, followed by scientific grading.",
    icon: "Shield"
  },
  {
    id: 2,
    title: "Export Documentation Support",
    description: "Complete handling of custom clearances, phyto-sanitary certs, loading supervision, and shipping documents.",
    icon: "FileText"
  },
  {
    id: 3,
    title: "Customized Packaging",
    description: "From bulk PP/jute bags to private label retail cartons, we cater to custom sizes, languages, and branding.",
    icon: "Package"
  },
  {
    id: 4,
    title: "Competitive Pricing",
    description: "Direct farm links and optimized supply networks remove middle layers, ensuring the most attractive wholesale price.",
    icon: "TrendingUp"
  },
  {
    id: 5,
    title: "Timely Delivery",
    description: "Equipped with strong port integrations and reliable sea/air transit partners, we meet strictly agreed timelines.",
    icon: "Clock"
  },
  {
    id: 6,
    title: "Long-Term Partnership",
    description: "We view our buyers as long-term partners, ensuring high transparency, clear communications, and zero compromise.",
    icon: "Users"
  }
];

export const certifications = [
  {
    id: "c1",
    name: "APEDA Registered",
    description: "Registered with Agricultural and Processed Food Products Export Development Authority of India.",
    status: "Active Registration",
    logoText: "APEDA"
  },
  {
    id: "c2",
    name: "FSSAI Certified",
    description: "Food Safety and Standards Authority of India certified for hygienic food storage and shipping standards.",
    status: "Active Registration",
    logoText: "FSSAI"
  },
  {
    id: "c3",
    name: "IEC (Import Export Code)",
    description: "Officially registered Import Export Code issued by the Directorate General of Foreign Trade, Govt. of India.",
    status: "Active Registration",
    logoText: "DGFT - IEC"
  },
  {
    id: "c4",
    name: "GST Registered",
    description: "Fully compliant Indian Goods & Services Tax registration holding complete state & central trade validation.",
    status: "Active Compliance",
    logoText: "GST"
  },
  {
    id: "c5",
    name: "MSME Registered",
    description: "Registered Micro, Small & Medium Enterprise recognizing Sri Varahi Agro as a priority industrial supplier.",
    status: "Active Enterprise",
    logoText: "MSME"
  },
  {
    id: "c6",
    name: "ISO 22000 Ready",
    description: "Internal practices aligned with ISO 22000 Food Safety Management standard. Official auditing planned.",
    status: "In Progress / Future",
    logoText: "ISO 22000"
  },
  {
    id: "c7",
    name: "HACCP Compliance",
    description: "Hazard Analysis Critical Control Point standard setup for processing, grading, and storage rooms.",
    status: "In Progress / Future",
    logoText: "HACCP"
  },
  {
    id: "c8",
    name: "GACC Compliance",
    description: "Alignment with General Administration of Customs of China for grain and nut classifications export clearance.",
    status: "Planned Future",
    logoText: "GACC"
  }
];

export const exportMarkets = [
  {
    name: "United Arab Emirates (UAE)",
    code: "UAE",
    description: "Primary hub for Basmati Rice, Fresh Onions, Grapes, and spices supplying Dubai and Abu Dhabi wholesale markets."
  },
  {
    name: "Singapore",
    code: "SG",
    description: "Steady supply of Premium Coffee Beans, fresh green chillies, curry leaves, and dehydrated powders for gourmet processing."
  },
  {
    name: "Malaysia",
    code: "MY",
    description: "Exporting IR-64 Non-Basmati rice, whole red chillies, and bulk yellow maize for animal feed industries."
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    description: "Supplying luxury long-grain aged Basmati rice, premium grade cardamoms, and whole Salem turmeric finger."
  },
  {
    name: "Qatar",
    code: "QA",
    description: "Premium fruit shipments (mangoes and grapes) along with fresh daily vegetables shipped via direct air cargo."
  },
  {
    name: "Oman & Kuwait",
    code: "OM/KW",
    description: "Regular container shipments of non-basmati parboiled grains, fresh garlic cloves, and turmeric powders."
  },
  {
    name: "Africa",
    code: "AF",
    description: "High-volume cargo operations for IR 64 parboiled rice, dry maize, and affordable food commodities."
  },
  {
    name: "Europe",
    code: "EU",
    description: "Specialized export of ultra-premium high-curcumin turmeric finger and Arabica coffee beans matching high residue norms."
  },
  {
    name: "Southeast Asia",
    code: "SEA",
    description: "Maize, rice bran, and millets for nutritional grain requirements and feed manufactures."
  }
];

export const gallery = [
  {
    id: 1,
    title: "Premium Arabica Beans Sorting",
    category: "Products",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Golden Turmeric Finger Polishing",
    category: "Products",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Export Jute Bags Stacking",
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Aged Basmati Grains",
    category: "Products",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Modern Storage Silo Facility",
    category: "Warehouse",
    image: "https://images.unsplash.com/photo-1595275372297-f57bb4824707?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Fresh Green Chilli Packing",
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Strict Quality Lab Inspection",
    category: "Quality Inspection",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351167?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Container Loading at Port",
    category: "Container Loading",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Direct Farmer Field Sourcing",
    category: "Farm Sourcing",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80"
  }
];

export const blogs = [
  {
    id: 1,
    title: "How India Exports Rice Worldwide",
    slug: "how-india-exports-rice-worldwide",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    date: "May 12, 2026",
    readTime: "5 min read",
    excerpt: "India is the largest global rice exporter. Learn about logistics, quality tests, and customs clearance procedures.",
    content: `<p>India dominates global rice trade, contributing over 40% of the world's rice exports. The path of grain from typical Indian paddy farms in Punjab or Telangana to international dining tables across UAE, Europe, and Africa is highly organized and strict.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">1. Quality Inspection & Sorting</h4>
              <p>Long grain Basmati must undergo DNA testing to ensure purity and length validation. Automated sorting machines isolate chalky or broken grains to hit strict export thresholds (usually <1% broken).</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">2. Moisture Maintenance</h4>
              <p>Ensuring moisture remains below 13-14% prevents mold formation during deep ocean transit. Safe PP or jute packaging ensures ideal breathability.</p>`
  },
  {
    id: 2,
    title: "Benefits of Indian Turmeric",
    slug: "benefits-of-indian-turmeric",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    date: "April 28, 2026",
    readTime: "4 min read",
    excerpt: "High-curcumin turmeric stands as India's golden pride. Explore its chemical value and why international markets love it.",
    content: `<p>Turmeric is not just a culinary spice; it is a wellness powerhouse. Indian Turmeric, particularly Salem, Alleppey, and Nizamabad grades, possesses a higher percentage of active Curcumin (often exceeding 4.5% to 5%) compared to other parts of the world.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">Why Curcumin Value Matters</h4>
              <p>Curcumin is the yellow bioactive compound offering potent anti-inflammatory, antioxidant, and therapeutic values. Advanced extractors and pharmaceutical companies look specifically for high-curcumin Indian strains to isolate active properties.</p>`
  },
  {
    id: 3,
    title: "Coffee Beans Export from India",
    slug: "coffee-beans-export-from-india",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    date: "April 15, 2026",
    readTime: "6 min read",
    excerpt: "Discover the unique shade-grown Arabica and Robusta varieties grown in Southern India, highly sought by global roasters.",
    content: `<p>India produces some of the finest shade-grown coffee in the world. Unlike coffee grown under full sun elsewhere, Indian coffee farms are integrated with canopy trees, cardamoms, pepper vines, and orange orchards, giving the beans a uniquely complex, spiced flavor profile.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">The Premium Grading Process</h4>
              <p>Indian coffee is carefully classified into grades like AAA (largest, cleanest beans), AA, A, and PB (Peaberry). Our export shipments ensure zero black beans or sour defects, giving roasters an exceptionally consistent roasting yield.</p>`
  },
  {
    id: 4,
    title: "Fresh Vegetable Export Guide",
    slug: "fresh-vegetable-export-guide",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    date: "March 30, 2026",
    readTime: "6 min read",
    excerpt: "Shipping fresh green chillies and onions requires meticulous cold-chain logistics. Read our detailed export guide.",
    content: `<p>Fresh crops like green chillies, red onions, garlic, and fresh curry leaves are highly perishable. Maintaining their original crunch and color under high temperatures demands an uninterrupted cold-chain and specialized packaging systems.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">The Golden Rules of Fresh Transit</h4>
              <p>1. Pre-cooling immediately after harvest to extract field heat. 2. Packing in ventilated carton boxes or breathable mesh bags to prevent moisture accumulation. 3. Sea container settings with absolute temperature controls (e.g., 2°C to 5°C for grapes, 12°C for onions).</p>`
  },
  {
    id: 5,
    title: "Rice Packaging for Export",
    slug: "rice-packaging-for-export",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    date: "March 18, 2026",
    readTime: "4 min read",
    excerpt: "Different markets require different pack sizes. We explore Jute, PP bags, and BOPP private label designs.",
    content: `<p>Packing is the first impression of product quality and serves as the defense against external moisture, pest infestation, and rough seaport handling. Depending on whether you are supplying supermarkets, bulk repackers, or state authorities, packaging requirements shift.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">Packaging Categories</h4>
              <p><b>Jute/Gunny Bags:</b> Heavy breathability, preferred for unpolished or parboiled grains. <b>BOPP Laminated Bags:</b> High-gloss, beautiful retail printability, completely waterproof. <b>PP Bags (25kg - 50kg):</b> Standard robust packaging for institutional trade.</p>`
  },
  {
    id: 6,
    title: "Top Agro Products from India",
    slug: "top-agro-products-from-india",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    date: "February 25, 2026",
    readTime: "5 min read",
    excerpt: "An overview of Indian agricultural products witnessing explosive international demand.",
    content: `<p>Indian farming enjoys diverse agro-climatic zones, letting the country yield organic millets, high-curcumin turmeric, aromatic long-grain basmati, bold coffee varieties, fresh vegetables, and nutrient-dense animal feed crops like maize and rice bran.</p>
              <p>Sri Varahi Agro Foods LLP remains at the forefront of this agricultural renaissance, bridging the gap between small holding Indian farmers and international wholesale importers with state-of-the-art grading infrastructure.</p>`
  }
];

export const faqs = [
  {
    question: "What is your primary export range?",
    answer: "We supply a premium range of agricultural commodities including Arabica & Robusta Coffee Beans, high-curcumin Turmeric (Finger & Powder), long grain Basmati & Non-Basmati (IR 64) Rice, Indian Spices, fresh seasonal fruits (Grapes, Mangoes), vegetables (Onion, Garlic, Green Chilli), Dehydrated products, and agro-commodities like Maize, Millets, and Rice Husk/Bran."
  },
  {
    question: "Do you support private labeling (OEM) and custom packaging?",
    answer: "Yes! We specialize in private labeling. We can pack products in custom-printed BOPP bags, vacuum packs, kraft boxes, or mesh bags with your branding, logo, customized weights (1kg, 5kg, 10kg, 25kg, 50kg), and local language declarations."
  },
  {
    question: "What compliance and certifications do you possess?",
    answer: "We are fully registered with APEDA (Agro products exports), FSSAI (Food Safety regulations), hold a valid Import Export Code (IEC) from DGFT, hold complete GST registration, and MSME certification. We also align our facilities with ISO 22000 and HACCP parameters for future audits."
  },
  {
    question: "What is your Minimum Order Quantity (MOQ)?",
    answer: "For standard sea containers (FCL), our MOQ generally ranges from 5 to 20 Metric Tons depending on the product (e.g. 5 MT for turmeric, 10 MT for coffee, 12.5 MT for rice). For perishable items shipped via air freight (e.g. curry leaves, fresh green chillies), we accept lower MOQs around 500kg - 1000kg."
  },
  {
    question: "What are your standard payment terms for export?",
    answer: "Our standard export payment terms are: 1) 30% advance T/T and 70% against clean scanned copy of Bill of Lading (B/L) and documents, or 2) 100% Irrevocable Confirmed Letter of Credit (L/C) at sight from prime AAA rated banks."
  }
];
