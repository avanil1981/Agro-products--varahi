// Centralized Agro Data for Sri Varahi Agro Foods LLP
// Easily customizable and editable arrays containing 48 export products

export const categories = [
  {
    id: 1,
    name: "Rice & Flours",
    slug: "rice-flours",
    subtitle: "Premium Grains | Quality Flours",
    image: "/Rice-Cat.png",
    description: "Export-grade Basmati and non-Basmati rice varieties, along with premium whole wheat flour and fine maida, processed under strict quality controls."
  },
  {
    id: 2,
    name: "Whole Spices",
    slug: "whole-spices",
    subtitle: "Aromatic | Pure Indian Origin",
    image: "/Spicies-cat.png",
    description: "Whole cumin, coriander, fennel, black pepper, cloves, cardamom, and cinnamon sourced directly from India's premium spice fields."
  },
  {
    id: 3,
    name: "Powders",
    slug: "powders",
    subtitle: "Hygienically Ground | High Purity",
    image: "/powders-cat.png",
    description: "Pure and aromatic ground spice powders and herbal formulations including turmeric, chilli, ginger, moringa, and tulsi."
  },
  {
    id: 4,
    name: "Fresh Vegetables",
    slug: "fresh-vegetables",
    subtitle: "Farm Fresh | Naturally Cultivated",
    image: "/fresh Veg-cat.png",
    description: "Crisp and fresh red onions, potatoes, tomatoes, green chillies, garlic, curry leaves, and fresh mint harvested daily."
  },
  {
    id: 5,
    name: "Fresh Fruits",
    slug: "fresh-fruits",
    subtitle: "Sweet & Juicy | Harvest Fresh",
    image: "/fruit-cat.png",
    description: "Premium tropical fruits like Alphonso mangoes, fresh bananas, guavas, sweet limes, and juicy watermelons picked at peak maturity."
  },
  {
    id: 6,
    name: "Coffee Beans",
    slug: "coffee-beans",
    subtitle: "Aromatic | Premium Grades",
    image: "/coffee-cat.png",
    description: "Premium shade-grown Arabica and Robusta coffee beans sourced from the misty hills of Southern India, carefully graded for international roasters."
  },
  {
    id: 7,
    name: "Chilli",
    slug: "chilli",
    subtitle: "Fiery Heat | Vibrant Color",
    image: "/chilli-cat.png",
    description: "Pure, spicy, and rich Indian red and green chillies, available in whole dried, fresh, and crushed powder formats to suit global palates."
  }
];

export const products = [
  // --- Category: Rice & Flours (12 items) ---
  {
    id: "p1",
    name: "IR64 Non-Basmati Rice",
    slug: "ir-64-rice",
    category: "Rice & Flours",
    categorySlug: "rice-flours",
    shortDescription: "A highly demanded long-grain non-basmati rice variety widely exported to African, Gulf, and Southeast Asian countries.",
    image: "/products/rice-flours/ir64-non-basmati-rice/image-1.webp",
    images: [
      "/products/rice-flours/ir64-non-basmati-rice/image-1.webp",
      "/products/rice-flours/ir64-non-basmati-rice/image-2.webp",
      "/products/rice-flours/ir64-non-basmati-rice/image-3.webp"
    ],
    keyPoints: ["Highly Affordable", "Sturdy Long Grains", "Hygienically Cleaned", "Available in Boiled & Raw"],
    specTable: {
      "Origin": "India",
      "Types Available": "Boiled (Parboiled) / Raw",
      "Average Grain Length": "6.0 mm+",
      "Moisture": "14% max",
      "Broken Ratio": "5% max (or customized)",
      "Chalky Grains": "5% max",
      "Foreign Matter": "0.1% max"
    },
    packingOptions: ["25kg PP Bags", "50kg PP Bags", "Bulk Container Loading", "Private Labeled BOPP Bags"],
    moq: "24 Metric Tons (MT) / 1x20' FCL",
    shelfLife: "24 Months",
    applications: "Daily consumption, institutional catering, bulk state supplies, food aid.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p2",
    name: "Jaya Rice",
    slug: "jaya-rice",
    category: "Rice & Flours",
    categorySlug: "rice-flours",
    shortDescription: "Premium medium-grain rice with exceptional taste and fluffy cooking characteristics, popular in domestic and export markets.",
    image: "/products/rice-flours/jaya-rice/image-1.webp",
    images: [
      "/products/rice-flours/jaya-rice/image-1.webp",
      "/products/rice-flours/jaya-rice/image-2.webp",
      "/products/rice-flours/jaya-rice/image-3.webp"
    ],
    keyPoints: ["Quick Cooking", "Fluffy Texture", "Double Polished", "Excellent Nutritional Retention"],
    specTable: {
      "Origin": "Southern India",
      "Types Available": "Boiled (Parboiled) / Raw",
      "Grain Size": "Medium Grain",
      "Moisture": "13% max",
      "Broken Ratio": "5% max",
      "Damaged & Discolored": "1% max",
      "Admixture": "1% max"
    },
    packingOptions: ["25kg PP Bags", "50kg PP Bags", "Custom non-branded sacks"],
    moq: "20 Metric Tons (MT) / 1 FCL",
    shelfLife: "18 Months",
    applications: "Daily family consumption, wholesale packaging, institutional catering.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p3",
    name: "Surekha Rice",
    slug: "surekha-rice",
    category: "Rice & Flours",
    categorySlug: "rice-flours",
    shortDescription: "Nutritious, high-yield parboiled medium-grain rice with low starch content, highly favored in bulk export orders.",
    image: "/products/rice-flours/surekha-rice/image-1.webp",
    images: [
      "/products/rice-flours/surekha-rice/image-1.webp",
      "/products/rice-flours/surekha-rice/image-2.webp",
      "/products/rice-flours/surekha-rice/image-3.webp"
    ],
    keyPoints: ["Nutrient-Dense Core", "Low Glycemic Index", "Resists Overcooking", "Perfect for Bulk Supplies"],
    specTable: {
      "Origin": "Andhra Pradesh & Telangana, India",
      "Processing": "Parboiled / Boiled",
      "Average Length": "5.8 mm - 6.2 mm",
      "Moisture": "13.5% max",
      "Broken Ratio": "5% max",
      "Foreign Matter": "0.2% max"
    },
    packingOptions: ["25kg PP Bags", "50kg PP Bags", "Jumbo Bulk Bags"],
    moq: "22 Metric Tons (MT) / 1 FCL",
    shelfLife: "24 Months",
    applications: "Bulk state distribution, West African wholesale, catering industries.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p4",
    name: "Sona Masoori Rice",
    slug: "sona-masoori",
    category: "Rice & Flours",
    categorySlug: "rice-flours",
    shortDescription: "Premium lightweight, aromatic medium-grain rice cultivated in Southern India, aged for perfect cooking fluffiness.",
    image: "/products/rice-flours/sona-masoori-rice/image-1.webp",
    images: [
      "/products/rice-flours/sona-masoori-rice/image-1.webp",
      "/products/rice-flours/sona-masoori-rice/image-2.webp",
      "/products/rice-flours/sona-masoori-rice/image-3.webp"
    ],
    keyPoints: ["Aged 12-18 Months", "Low Starch & Easy Digestibility", "Non-Sticky Grain Separation", "Healthy Rice Selection"],
    specTable: {
      "Origin": "Andhra Pradesh & Karnataka, India",
      "Types Available": "Boiled / Raw",
      "Grain Size": "Medium Slender Grain",
      "Moisture": "12% max",
      "Broken Ratio": "1% - 2% max",
      "Chalky Grains": "Negligible",
      "Ageing Period": "12+ Months"
    },
    packingOptions: ["5kg, 10kg, 20kg, 25kg BOPP Bags", "50kg PP Bags", "Private Label Cartons"],
    moq: "20 Metric Tons (MT) / 1 FCL",
    shelfLife: "24 Months",
    applications: "Daily premium meals, retail supermarkets, gourmet exports, health diets.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p4_1",
    name: "HMT Rice",
    slug: "hmt-rice",
    category: "Rice & Flours",
    categorySlug: "rice-flours",
    shortDescription: "A premium medium-slender domestic rice variety known for its fine texture, distinct taste, and aromatic cooking qualities.",
    image: "/products/rice-flours/hmt-rice/image-1.webp",
    images: [
      "/products/rice-flours/hmt-rice/image-1.webp",
      "/products/rice-flours/hmt-rice/image-2.webp",
      "/products/rice-flours/hmt-rice/image-3.webp"
    ],
    keyPoints: ["Premium Domestic Choice", "Fine Texture", "Easily Digestible", "Everyday Meals"],
    specTable: {
      "Origin": "Telangana / AP, India",
      "Types Available": "Raw / Boiled",
      "Grain Size": "Medium Slender",
      "Moisture": "12% max",
      "Broken Ratio": "3% max"
    },
    packingOptions: ["10kg, 25kg BOPP Bags"],
    moq: "10 Metric Tons (MT)",
    shelfLife: "24 Months",
    applications: "Domestic retail, traditional Indian meals, premium daily consumption.",
    exportAvailability: false,
    domesticAvailability: true
  },
  {
    id: "p4_2",
    name: "BPT Rice (Samba Masuri)",
    slug: "bpt-rice",
    category: "Rice & Flours",
    categorySlug: "rice-flours",
    shortDescription: "Highly popular fine-grain rice in South India with excellent elongation and lightweight fluffy texture after cooking.",
    image: "/products/rice-flours/bpt-rice-samba-masuri/image-1.webp",
    images: [
      "/products/rice-flours/bpt-rice-samba-masuri/image-1.webp",
      "/products/rice-flours/bpt-rice-samba-masuri/image-2.webp",
      "/products/rice-flours/bpt-rice-samba-masuri/image-3.webp"
    ],
    keyPoints: ["Fine Grain", "Non-Sticky", "Aged for Better Taste", "High Yield on Cooking"],
    specTable: {
      "Origin": "Telangana / AP, India",
      "Types Available": "Raw (Old / New)",
      "Grain Size": "Short Fine Slender",
      "Moisture": "12% max",
      "Broken Ratio": "2% max"
    },
    packingOptions: ["10kg, 25kg BOPP Bags"],
    moq: "10 Metric Tons (MT)",
    shelfLife: "24 Months",
    applications: "Domestic supermarkets, South Indian thalis, premium daily meals.",
    exportAvailability: false,
    domesticAvailability: true
  },
  {
    id: "p4_3",
    name: "Jai Sriram Rice",
    slug: "jai-sriram-rice",
    category: "Rice & Flours",
    categorySlug: "rice-flours",
    shortDescription: "An elite ultra-fine domestic rice variety favored for its superior taste, slender shape, and premium cooking quality.",
    image: "/products/rice-flours/jai-sriram-rice/image-1.webp",
    images: [
      "/products/rice-flours/jai-sriram-rice/image-1.webp",
      "/products/rice-flours/jai-sriram-rice/image-2.webp",
      "/products/rice-flours/jai-sriram-rice/image-3.webp"
    ],
    keyPoints: ["Ultra-Fine Quality", "Soft & Fluffy", "High Grade Polish", "Exceptional Taste"],
    specTable: {
      "Origin": "Telangana / AP, India",
      "Types Available": "Raw",
      "Grain Size": "Ultra Fine Slender",
      "Moisture": "12% max",
      "Broken Ratio": "1% max"
    },
    packingOptions: ["25kg Premium Bags"],
    moq: "10 Metric Tons (MT)",
    shelfLife: "24 Months",
    applications: "Premium domestic retail, luxury dining, festive occasions.",
    exportAvailability: false,
    domesticAvailability: true
  },
  {
    id: "p4_4",
    name: "RNR Rice (Rajendra Nandini)",
    slug: "rnr-rice",
    category: "Rice & Flours",
    categorySlug: "rice-flours",
    shortDescription: "A fine-grain, lightweight domestic rice variety from Telangana, known for its non-sticky texture and excellent taste in daily cooking.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Non-Sticky Texture", "Lightweight Grain", "Steam & Raw Available", "Everyday Domestic Choice"],
    specTable: {
      "Origin": "Telangana, India",
      "Types Available": "Steam / Raw",
      "Grain Size": "Fine Slender",
      "Moisture": "12% max",
      "Broken Ratio": "3% max"
    },
    packingOptions: ["10kg, 25kg BOPP Bags"],
    moq: "10 Metric Tons (MT)",
    shelfLife: "24 Months",
    applications: "Daily domestic consumption, South Indian meals, family packs.",
    exportAvailability: false,
    domesticAvailability: true
  },
  {
    id: "p4_5",
    name: "KNM Rice (Kurnool Special)",
    slug: "knm-rice",
    category: "Rice & Flours",
    categorySlug: "rice-flours",
    shortDescription: "A premium short-grain domestic rice variety from Kurnool, Andhra Pradesh, favored for its soft texture and excellent cooking consistency.",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Soft & Fluffy Texture", "High Cooking Yield", "Steam & Boiled Available", "Premium Domestic Grade"],
    specTable: {
      "Origin": "Kurnool, Andhra Pradesh, India",
      "Types Available": "Steam / Boiled",
      "Grain Size": "Short Grain",
      "Moisture": "13% max",
      "Broken Ratio": "3% max"
    },
    packingOptions: ["10kg, 25kg BOPP Bags"],
    moq: "10 Metric Tons (MT)",
    shelfLife: "24 Months",
    applications: "Traditional South Indian meals, daily domestic consumption, retail shops.",
    exportAvailability: false,
    domesticAvailability: true
  },
  {
    id: "p5",
    name: "Iddly Rice",
    slug: "iddly-rice",
    category: "Rice & Flours",
    categorySlug: "rice-flours",
    shortDescription: "Short-grain, thick parboiled rice optimized for grinding soft, fluffy, and perfectly fermented South Indian idli batter.",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["High Fermentation Ability", "Yields Spongy Idlis", "optical-sorted Cleanliness", "Starch-Rich Grains"],
    specTable: {
      "Origin": "Tamil Nadu & Karnataka, India",
      "Processing": "Short Grain Parboiled",
      "Color": "Uniform White / Creamy",
      "Moisture": "14% max",
      "Broken Ratio": "3% max",
      "Admixture": "1% max",
      "Foreign Matter": "0.1% max"
    },
    packingOptions: ["25kg PP Bags", "50kg PP Bags", "Custom Retail Pouches"],
    moq: "15 Metric Tons (MT)",
    shelfLife: "12 Months",
    applications: "South Indian traditional batter preparation, restaurant usage, packaged flour blending.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p6",
    name: "Khaima / Jeera Rice",
    slug: "khaima-jeera-rice",
    category: "Rice & Flours",
    categorySlug: "rice-flours",
    shortDescription: "Highly aromatic, short slender grains resembling cumin seeds, prized for making rich traditional Malabar Biryani.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Jeerakasala Variety", "Intense Nutty Aroma", "Delicate Micro Grains", "Gourmet Selection"],
    specTable: {
      "Origin": "Wayanad / Southern India",
      "Type": "Aromatic Short Slender Grain",
      "Average Grain Length": "4.0 mm - 4.5 mm",
      "Moisture": "12% max",
      "Broken Ratio": "1% max",
      "Damaged Grains": "0.5% max"
    },
    packingOptions: ["5kg, 10kg, 25kg BOPP Bags", "Premium Carton Packaging"],
    moq: "10 Metric Tons (MT)",
    shelfLife: "18 Months",
    applications: "Malabar Biryani, Ghee Rice, traditional wedding feasts, luxury retail packing.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p7",
    name: "Ponni Rice",
    slug: "ponni-rice",
    category: "Rice & Flours",
    categorySlug: "rice-flours",
    shortDescription: "Traditional Southern Indian medium-grain rice with high fiber, delicate aroma, and great starch characteristics.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["High Fiber Content", "Kaveri Basin Grown", "Staple South Indian Food", "Non-Sticky Cooking"],
    specTable: {
      "Origin": "Tamil Nadu, India",
      "Types Available": "Boiled (Parboiled) / Raw",
      "Grain Size": "Medium Grain",
      "Moisture": "13% max",
      "Broken Ratio": "2% max",
      "Chalky Grains": "Negligible",
      "Foreign Matter": "0.1% max"
    },
    packingOptions: ["10kg, 25kg PP/BOPP Bags", "50kg Jute Sacks"],
    moq: "18 Metric Tons (MT)",
    shelfLife: "24 Months",
    applications: "Staple daily dining, South Indian meals, wholesale trade markets.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p8",
    name: "Broken Rice (100% & 50%)",
    slug: "broken-rice-100",
    category: "Rice & Flours",
    categorySlug: "rice-flours",
    shortDescription: "Hygienically sorted and cleaned broken grains of premium rice varieties, ideal for flour mills, brewing, and animal feeds.",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["optical-sorted Grains", "Completely Destoned", "Gluten-Free Flour Source", "Highly Economical"],
    specTable: {
      "Origin": "India",
      "Type": "100% Broken Grains",
      "Moisture": "14% max",
      "Foreign Matter": "0.5% max",
      "Chalky Grains": "10% max",
      "Color": "Uniform White / Creamy"
    },
    packingOptions: ["50kg PP Bags", "Jumbo Bulk Bags", "Bulk Vessel Loading"],
    moq: "24 Metric Tons (MT) / 1x20' FCL",
    shelfLife: "12 Months",
    applications: "Beer brewing industry, rice flour manufacturing, starch mills, premium animal feed.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p9",
    name: "Basmati Rice 1121/1509",
    slug: "basmati-rice",
    category: "Rice & Flours",
    categorySlug: "rice-flours",
    shortDescription: "The king of aromatic long-grain rice, featuring unprecedented kernel elongation and rich fragrance.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Average Length 8.3mm+", "Stunning Floral Aroma", "Double Elongation on Cooking", "Aged up to 2 Years"],
    specTable: {
      "Origin": "North India (Indo-Gangetic Plains)",
      "Varieties Available": "1121 Sella, Golden Sella, 1509 Steam, Raw",
      "Average Grain Length": "8.3 mm - 8.4 mm (1121)",
      "Moisture": "12.5% max",
      "Broken Ratio": "1% max",
      "Admixture": "1% max",
      "Purity": "95% min"
    },
    packingOptions: ["1kg, 5kg, 10kg, 20kg Jute Bags", "25kg BOPP Bags", "Custom Private Labeled bags"],
    moq: "12 Metric Tons (MT) / 1x20' FCL",
    shelfLife: "24 - 36 Months",
    applications: "Biryani preparation, gourmet catering, luxury retail supermarkets, high-end exports.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p10",
    name: "Idli Ravva",
    slug: "idli-ravva",
    category: "Rice & Flours",
    categorySlug: "rice-flours",
    shortDescription: "Coarsely ground, premium parboiled rice semolina used to prepare authentic South Indian Idli batter.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Uniform Coarse Texture", "Chemical-Free Processing", "Easy Grinding & Mixing", "Yields Spongy Texture"],
    specTable: {
      "Origin": "India",
      "Form": "Coarse Rice Semolina",
      "Moisture": "11% max",
      "Color": "Natural Creamy White",
      "Sieve Purity": "99.9% dust-free",
      "Pesticide Residue": "Strictly compliant"
    },
    packingOptions: ["500g, 1kg Standup Pouches", "25kg PP Bags with inner liner"],
    moq: "5 Metric Tons (MT)",
    shelfLife: "9 Months",
    applications: "South Indian traditional Idli and Ravva Dosa batter, breakfast food packaging.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p11",
    name: "Wheat Flour",
    slug: "wheat-flour",
    category: "Rice & Flours",
    categorySlug: "rice-flours",
    shortDescription: "100% whole wheat flour, stone-ground (chakki) to preserve natural dietary fibers and rich nutrients.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Traditional Chakki Milled", "High Dietary Fiber", "Zero Bleaching Agents", "Retains Natural Bran & Germ"],
    specTable: {
      "Origin": "India",
      "Form": "Fine Ground Flour (Atta)",
      "Gluten Content": "9.0% - 11.0%",
      "Moisture": "12% max",
      "Total Ash": "0.7% max",
      "Water Absorption": "60% - 65% min"
    },
    packingOptions: ["1kg, 5kg, 10kg Multi-wall BOPP Bags", "25kg, 50kg PP Bags"],
    moq: "10 Metric Tons (MT)",
    shelfLife: "6 Months",
    applications: "Rotis, Chapatis, traditional flatbreads, healthy bakery formulations.",
    exportAvailability: true,
    domesticAvailability: true
  },
  {
    id: "p12",
    name: "Maida",
    slug: "maida",
    category: "Rice & Flours",
    categorySlug: "rice-flours",
    shortDescription: "Finely milled, high-gluten refined wheat flour ideal for bakeries, noodles, and premium confectionery.",
    image: "https://images.unsplash.com/photo-1508747703725-719ae2c98295?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Super-Fine Sifted", "Excellent Elasticity", "Unbleached Premium Grade", "Ideal for Bakers"],
    specTable: {
      "Origin": "India",
      "Form": "Super-Fine Refined Powder",
      "Gluten Content": "10.5% - 12.0% min",
      "Moisture": "13% max",
      "Total Ash": "0.5% max",
      "Acid Insoluble Ash": "0.05% max"
    },
    packingOptions: ["25kg PP Bags", "50kg PP Bags", "Custom Industrial Bags"],
    moq: "15 Metric Tons (MT)",
    shelfLife: "6 Months",
    applications: "Bakery bread, pastries, samosa covers, naans, parottas, noodle factories.",
    exportAvailability: true,
    domesticAvailability: true
  },

  // --- Category: Whole Spices (10 items) ---
  {
    id: "p13",
    name: "Cumin Seeds",
    slug: "cumin-seeds",
    category: "Whole Spices",
    categorySlug: "whole-spices",
    shortDescription: "Sun-dried whole cumin seeds with high volatile oil content and warm, earthy spice aroma.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Min 2.5% Volatile Oil", "Singapore Machine Cleaned", "Sun-Dried Naturally", "99.5% Purity Guaranteed"],
    specTable: {
      "Origin": "Gujarat / Rajasthan, India",
      "Type": "Whole Seeds (Jeera)",
      "Purity": "99.5% min (Singapore Machine Cleaned)",
      "Volatile Oil": "2.5% - 3.0% min",
      "Moisture": "8% max",
      "Admixture": "0.5% max",
      "Foreign Matter": "0.5% max"
    },
    packingOptions: ["25kg PP/Jute Bags", "50kg Jute Bags", "Custom Vacuum Bags"],
    moq: "5 Metric Tons (MT)",
    shelfLife: "24 Months",
    applications: "Spice grinding, curry powders, oleoresin extraction, herbal medicines.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p14",
    name: "Coriander Seeds",
    slug: "coriander-seeds",
    category: "Whole Spices",
    categorySlug: "whole-spices",
    shortDescription: "Premium whole coriander seeds with citrusy, sweet undertones, thoroughly cleaned and sorted.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Citrus-Sweet Undertones", "No Sulfur Treatment", "Double Parrot Green/Badami", "Clean Gravity Sorted"],
    specTable: {
      "Origin": "Madhya Pradesh / Rajasthan, India",
      "Grades": "Badami / Green / Double Parrot",
      "Purity": "99% min",
      "Moisture": "9% max",
      "Split Seeds": "5% max",
      "Foreign Matter": "1% max"
    },
    packingOptions: ["20kg, 25kg Multi-wall Paper Bags", "Jute bags"],
    moq: "5 Metric Tons (MT)",
    shelfLife: "18 Months",
    applications: "Garam masala production, essential oil distillation, culinary seasoning.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p15",
    name: "Fennel Seeds",
    slug: "fennel-seeds",
    category: "Whole Spices",
    categorySlug: "whole-spices",
    shortDescription: "Sweet, highly aromatic fennel seeds with a brilliant green color and powerful anise-like fragrance.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Vivid Green Tone", "High Anethole Content", "Sweet Anise Aroma", "Premium Mouth Freshener"],
    specTable: {
      "Origin": "Gujarat / Rajasthan, India",
      "Type": "Whole Seeds (Saunf)",
      "Purity": "99% min",
      "Moisture": "10% max",
      "Volatile Oil": "1.5% - 2.0% min",
      "Foreign Matter": "1% max"
    },
    packingOptions: ["25kg Jute Bags", "50kg PP Bags", "Private label retail pouches"],
    moq: "5 Metric Tons (MT)",
    shelfLife: "24 Months",
    applications: "Mouth freshener, herbal tea, pickling spice, seasoning dry meat rubs.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p16",
    name: "Green Cardamom",
    slug: "green-cardamom",
    category: "Whole Spices",
    categorySlug: "whole-spices",
    shortDescription: "The queen of spices, featuring bold green pods (7mm - 8mm+) with high intense essential oils.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Extra Bold (7.5mm - 8mm+)", "Chlorophyll Preservation", "Harvested from Munnar Estates", "Intense Floral Aroma"],
    specTable: {
      "Origin": "Kerala (Munnar / Idukki), India",
      "Grades": "AGEB (Extra Bold) / AGB Standard",
      "Size (Diameter)": "7 mm to 8 mm+",
      "Moisture": "11% max",
      "Color": "Natural Deep Green",
      "Seeds inside Pod": "Dense dark brown/black"
    },
    packingOptions: ["10kg, 20kg Cartons with inner protective foil line", "Custom small packs"],
    moq: "1 Metric Ton (MT)",
    shelfLife: "24 Months",
    applications: "Flavoring desserts, luxury teas, rice dishes, extract production, chewing spices.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p17",
    name: "Black Pepper",
    slug: "black-pepper",
    category: "Whole Spices",
    categorySlug: "whole-spices",
    shortDescription: "Rich, pungent whole black peppercorns sourced from the Malabar Coast, high in active piperine.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["High Piperine (4.5%+)", "Malabar Origin 'Black Gold'", "Calibrated Density (550 G/L)", "Sun-Dried Naturally"],
    specTable: {
      "Origin": "Kerala, India",
      "Grade / Density": "500 G/L to 550 G/L min",
      "Piperine Content": "4.5% - 5.5% min",
      "Moisture": "12% max",
      "Admixture": "0.5% max",
      "Foreign Matter": "0.5% max"
    },
    packingOptions: ["25kg PP Bags with inner poly lining", "50kg Jute Sacks"],
    moq: "3 Metric Tons (MT)",
    shelfLife: "24 Months",
    applications: "Meat seasoning, table condiments, pepper oil extraction, sausage flavoring.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p18",
    name: "Cloves",
    slug: "cloves",
    category: "Whole Spices",
    categorySlug: "whole-spices",
    shortDescription: "Handpicked, red-brown whole flower buds with strong warm aroma and rich eugenol oil content.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["95% Full Head Ratio", "High Eugenol (15%+)", "Hand-Harvested in Southern India", "No Extracted Buds"],
    specTable: {
      "Origin": "Southern India",
      "Color": "Reddish Brown",
      "Full Head Ratio": "95% min",
      "Moisture": "12% max",
      "Foreign Matter": "1% max",
      "Eugenol Content": "15% - 20%"
    },
    packingOptions: ["25kg Carton Boxes with moisture-proof liner", "Jute sacks"],
    moq: "2 Metric Tons (MT)",
    shelfLife: "24 Months",
    applications: "Medicinal syrups, dental formulations, chai blends, savory spice mixes.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p19",
    name: "Cinnamon Stick",
    slug: "cinnamon-stick",
    category: "Whole Spices",
    categorySlug: "whole-spices",
    shortDescription: "Sweet, warm, and highly aromatic rolled barks of natural cinnamon, dried to perfection.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Multi-Layered Quills", "Warm & Woody Flavor", "100% Unbleached", "Natural Curing Process"],
    specTable: {
      "Origin": "Southern India",
      "Form": "Rolled Sticks / Quills",
      "Length of Sticks": "7.5 cm - 15 cm",
      "Moisture": "12% max",
      "Purity": "99.0% min",
      "Foreign Matter": "0.5% max"
    },
    packingOptions: ["10kg Carton Boxes", "25kg Carton Boxes", "Custom bundle packaging"],
    moq: "2 Metric Tons (MT)",
    shelfLife: "24 Months",
    applications: "Flavoring bakery items, sweet curries, mulled wines, pharmaceutical oil extraction.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p20",
    name: "White Pepper",
    slug: "white-pepper",
    category: "Whole Spices",
    categorySlug: "whole-spices",
    shortDescription: "Fully ripe peppercorns with the outer skin removed, presenting a clean, sharp, heat-focused spice profile.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["No Dark Skins", "Sharp Incisive Heat", "Slow Water Cured", "Perfect for Fine White Sauces"],
    specTable: {
      "Origin": "Kerala, India",
      "Color": "Uniform Creamy White",
      "Moisture": "12% max",
      "Density": "570 G/L min",
      "Purity": "99.5% min",
      "Foreign Matter": "0.2% max"
    },
    packingOptions: ["25kg PP Bags", "50kg PP Bags", "Custom small packs"],
    moq: "2 Metric Tons (MT)",
    shelfLife: "24 Months",
    applications: "Gourmet white gravies, cream soups, salad dressing, Asian hot pots.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p21",
    name: "Star Anise",
    slug: "star-anise",
    category: "Whole Spices",
    categorySlug: "whole-spices",
    shortDescription: "Beautiful star-shaped spice pods with intense sweet, licorice-like flavor and rich anethole oils.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Intense Sweet Licorice Flavor", "Beautiful 8-Point Stars", "Rich in Anethole Oil", "Carefully Slow-Dried"],
    specTable: {
      "Origin": "India",
      "Form": "Whole Star Pods",
      "Broken Stars Ratio": "5% max",
      "Moisture": "10% max",
      "Purity": "99% min",
      "Volatile Oil": "2.0% min"
    },
    packingOptions: ["10kg Carton Boxes", "15kg Carton Boxes"],
    moq: "1 Metric Ton (MT)",
    shelfLife: "24 Months",
    applications: "Chinese five-spice powders, mulled wine, biryani aroma bases, cosmetic flavorings.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p22",
    name: "Mustard Seeds",
    slug: "mustard-seeds",
    category: "Whole Spices",
    categorySlug: "whole-spices",
    shortDescription: "Bold yellow and black mustard seeds with high oil concentration and sharp, pungent flavor.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["35%+ Oil Yield", "Gravity Separated Purity", "Sharp Pungent Flavor", "Available in Yellow & Black"],
    specTable: {
      "Origin": "Rajasthan, India",
      "Colors Available": "Yellow / Deep Brown-Black",
      "Purity": "99.5% min",
      "Moisture": "8% max",
      "Oil Content": "35% - 40% min",
      "Erucic Acid Level": "Compliant with safety norms"
    },
    packingOptions: ["25kg PP Bags", "50kg PP Bags", "Jute Sacks"],
    moq: "10 Metric Tons (MT)",
    shelfLife: "24 Months",
    applications: "Gourmet mustard pastes, Indian tempering (tadka), pickle manufacturing, seed oil mills.",
    exportAvailability: true,
    domesticAvailability: false
  },

  // --- Category: Powders (11 items) ---
  {
    id: "p23",
    name: "Cumin Powder",
    slug: "cumin-powder",
    category: "Powders",
    categorySlug: "powders",
    shortDescription: "Hygienically milled cumin powder with warm, nutty aroma and zero artificial colorings.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Cool-Milled to Lock Aroma", "Zero Added Starch", "Warm Nutty Taste", "Ultra-Fine Sieved"],
    specTable: {
      "Origin": "India",
      "Form": "Fine Ground Powder",
      "Mesh Size": "80 - 100 mesh",
      "Moisture": "8% max",
      "Total Ash": "8% max",
      "Volatile Oil": "1.5% min"
    },
    packingOptions: ["25kg Kraft Paper Bags with PE liner", "Custom brand retail pouches"],
    moq: "2 Metric Tons (MT)",
    shelfLife: "18 Months",
    applications: "Taco spices, curry powder blending, instant seasoning packets, savory baking.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p24",
    name: "Coriander Powder",
    slug: "coriander-powder",
    category: "Powders",
    categorySlug: "powders",
    shortDescription: "Cool-milled coriander powder with fresh citrus notes and premium gold-brown color.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Fresh Citrus Aroma", "Ground from Double Parrot Seeds", "100% Unadulterated", "Safe Moisture Levels"],
    specTable: {
      "Origin": "India",
      "Form": "Fine Ground Powder",
      "Mesh Size": "80 mesh",
      "Color": "Golden-Brown",
      "Moisture": "9% max",
      "Total Ash": "7% max"
    },
    packingOptions: ["25kg Kraft Paper Bags with PE liner", "50kg PP Bags"],
    moq: "2 Metric Tons (MT)",
    shelfLife: "18 Months",
    applications: "Core gravy thickener, meat marinades, commercial curry mixes, retail spice sales.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p25",
    name: "Fennel Powder",
    slug: "fennel-powder",
    category: "Powders",
    categorySlug: "powders",
    shortDescription: "Finely ground fennel powder carrying a sweet licorice-like aroma, perfect for culinary and herbal uses.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Cooling Digestive Properties", "Sweet Anethole Rich", "Deep Greenish Hue", "Fiber-Free Grinding"],
    specTable: {
      "Origin": "India",
      "Form": "Fine Ground Powder",
      "Mesh Size": "80 - 100 mesh",
      "Color": "Light Greenish Cream",
      "Moisture": "9% max",
      "Volatile Oil": "1.0% min"
    },
    packingOptions: ["25kg Kraft Paper Bags", "Custom bulk sacs"],
    moq: "2 Metric Tons (MT)",
    shelfLife: "18 Months",
    applications: "Bakery biscuits, herbal digestive syrups, sweet beverage pre-mixes.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p26",
    name: "Ginger Powder",
    slug: "ginger-powder",
    category: "Powders",
    categorySlug: "powders",
    shortDescription: "Sharp, spicy, sun-dried ginger powder sourced from premium cleaned ginger crops.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Fiery Gingerol Heat", "Sanitized Root Peeling", "Salmonella Negative", "Baking Essential"],
    specTable: {
      "Origin": "India",
      "Form": "Fine Ground Dried Ginger (Saunth)",
      "Mesh Size": "80 mesh",
      "Moisture": "10% max",
      "Acid Insoluble Ash": "1% max",
      "Pungency Index": "High Gingerol"
    },
    packingOptions: ["25kg Cartons with inner barrier bag", "Custom retail jars"],
    moq: "1.5 Metric Tons (MT)",
    shelfLife: "18 Months",
    applications: "Gingerbread baking, wellness capsules, tea bags blending, industrial food sauces.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p27",
    name: "Red Chilli Powder",
    slug: "red-chilli-powder",
    category: "Chilli",
    categorySlug: "chilli",
    shortDescription: "Intensely hot, pure red chilli powder milled from premium Guntur Teja dried red chillies.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Up to 50,000 SHU", "Natural ASTA Redness", "De-Stemmed Grinding", "Zero Added Synthetic Dye"],
    specTable: {
      "Origin": "Andhra Pradesh (Guntur), India",
      "Form": "Fine Ground Powder",
      "Pungency (Heat)": "30,000 - 50,000 SHU",
      "Color Value": "60 - 80 ASTA",
      "Moisture": "10% max",
      "Aflatoxin": "Strictly compliant / Negligible"
    },
    packingOptions: ["25kg Multi-wall PP Bags", "Custom standup zip-locks"],
    moq: "2 Metric Tons (MT)",
    shelfLife: "18 Months",
    applications: "Culinary hot spice, snack seasoning dusts, spicy pickles, canned hot sauces.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p28",
    name: "Turmeric Powder",
    slug: "turmeric-powder",
    category: "Powders",
    categorySlug: "powders",
    shortDescription: "Pure golden turmeric powder milled from premium Nizamabad and Salem finger crops, high in curcumin.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["3.5% - 5.0% Curcumin", "Vivid Golden Color", "No Lead Chromate Adulteration", "Steam Sterilized Safety"],
    specTable: {
      "Origin": "Salem / Nizamabad, India",
      "Form": "Fine Ground Powder (Haldi)",
      "Curcumin Value": "3.5% - 5.0% min",
      "Moisture": "9% max",
      "Mesh Size": "100 mesh",
      "Heavy Metals": "Zero / Undetected"
    },
    packingOptions: ["25kg Kraft Paper Bags", "Custom private retail pouches"],
    moq: "2 Metric Tons (MT)",
    shelfLife: "24 Months",
    applications: "Traditional cooking, golden milk blends, cosmetic skin masks, natural yellow coloring.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p29",
    name: "Moringa Powder",
    slug: "moringa-powder",
    category: "Powders",
    categorySlug: "powders",
    shortDescription: "Nutritious, organic moringa leaf powder packed with antioxidants, vitamins, and vital amino acids.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Vivid Natural Green", "Shade-Dried Nutrient lock", "Rich in Antioxidants & Iron", "100% Organic Compliant"],
    specTable: {
      "Origin": "India",
      "Form": "Fine Leaf Powder",
      "Mesh Size": "120 mesh super-fine",
      "Moisture": "7% max",
      "Total Ash": "9% max",
      "Solvent Residue": "None"
    },
    packingOptions: ["20kg Carton Box with double PE lining", "Vacuum Sealed Pouches"],
    moq: "1 Metric Ton (MT)",
    shelfLife: "18 Months",
    applications: "Health shake blenders, green tea formulations, vitamin capsule manufacturing.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p30",
    name: "Curry Leaves Powder",
    slug: "curry-leaves-powder",
    category: "Powders",
    categorySlug: "powders",
    shortDescription: "Hygienically dried and ground green curry leaves, carrying an intense herbal, citrusy spice aroma.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Citrus-Herbal Aroma", "Low-Temp Dried to Save Oils", "Rich Olive Green Color", "No Additives"],
    specTable: {
      "Origin": "India",
      "Form": "Fine Ground Leaf Powder",
      "Color": "Deep Olive Green",
      "Moisture": "8% max",
      "Total Ash": "6% max",
      "Purity": "100% Pure Curry Leaves"
    },
    packingOptions: ["20kg Cartons with inner lining", "Custom bags"],
    moq: "1 Metric Ton (MT)",
    shelfLife: "12 Months",
    applications: "Instant soup mixes, Indian savory snacks flavor, herbal hair powders.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p31",
    name: "Tulsi Powder",
    slug: "tulsi-powder",
    category: "Powders",
    categorySlug: "powders",
    shortDescription: "Fine powder of dried Holy Basil (Tulsi) leaves, rich in therapeutic and adaptogenic values.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Ocimum Sanctum Source", "Adaptogenic Herb", "Pure & Sterilized", "No Heavy Metals"],
    specTable: {
      "Origin": "India",
      "Form": "Fine Herbal Powder",
      "Mesh Size": "100 mesh",
      "Color": "Brownish Green",
      "Moisture": "8% max",
      "Pesticide Levels": "Zero / Completely Compliant"
    },
    packingOptions: ["20kg Cartons with vacuum sealed bags", "Bulk drums"],
    moq: "1 Metric Ton (MT)",
    shelfLife: "18 Months",
    applications: "Ayurvedic wellness teas, cough drop syrups, cosmetic facial washes, herbal tablets.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p32",
    name: "Cinnamon Powder",
    slug: "cinnamon-powder",
    category: "Powders",
    categorySlug: "powders",
    shortDescription: "Sweet, woody ground cinnamon powder carrying deep aromatic oils, ideal for confectionery.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Woody-Sweet Flavor", "Ground from Natural sticks", "Low Temp Milled", "Perfect for Baking"],
    specTable: {
      "Origin": "India",
      "Form": "Ground Spice Powder",
      "Mesh Size": "80 mesh",
      "Moisture": "10% max",
      "Total Ash": "5% max",
      "Volatile Oil": "1.0% min"
    },
    packingOptions: ["25kg Kraft Paper Bags", "Custom retail jars"],
    moq: "1.5 Metric Tons (MT)",
    shelfLife: "18 Months",
    applications: "Cinnamon rolls, coffee topping, functional tea dusts, dessert flavoring.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p33",
    name: "Black Pepper Powder",
    slug: "black-pepper-powder",
    category: "Powders",
    categorySlug: "powders",
    shortDescription: "Intensely pungent, sieved black pepper powder ground from premium Malabar peppercorns.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Sharp Piperine Heat", "Ground from Malabar Peppercorns", "Uniform Particle Sizing", "Robust Seasoning Dust"],
    specTable: {
      "Origin": "Kerala, India",
      "Form": "Ground Spice Powder",
      "Mesh Size": "60 - 80 mesh",
      "Piperine Content": "4.5% min",
      "Moisture": "11% max",
      "Total Ash": "6% max"
    },
    packingOptions: ["25kg Fiber Drums", "Kraft Bags with inner barrier"],
    moq: "2 Metric Tons (MT)",
    shelfLife: "18 Months",
    applications: "Seasoning potato chips, salad dressings, institutional kitchen packs, dry spice rubs.",
    exportAvailability: true,
    domesticAvailability: false
  },

  // --- Category: Fresh Vegetables (10 items) ---
  {
    id: "p34",
    name: "Onion",
    slug: "fresh-onion",
    category: "Fresh Vegetables",
    categorySlug: "fresh-vegetables",
    shortDescription: "Vibrant, thick-skinned red and pink onions harvested from Nashik, featuring long storage stability.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Nashik Red Crop", "Double Skin protection", "Highly Pungent & Juicy", "Well Cured for Sea Voyaging"],
    specTable: {
      "Origin": "Nashik (Maharashtra), India",
      "Sizes Available": "35mm+, 45mm+, 55mm+",
      "Color": "Vibrant Red / Pink",
      "Quality": "Double-skinned, well-cured",
      "Transit Temp": "Ambient Ventilation / 12°C in Reefer"
    },
    packingOptions: ["5kg, 10kg Red Mesh Bags", "25kg, 50kg Red Mesh Bags", "Jute Sacks"],
    moq: "25 Metric Tons (MT) / 1x40' Reefer or Dry Container",
    shelfLife: "40 - 50 Days in well-ventilated dry space",
    applications: "Wholesale food markets, supermarket retail shelves, culinary base gravies.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p35",
    name: "Potato",
    slug: "fresh-potato",
    category: "Fresh Vegetables",
    categorySlug: "fresh-vegetables",
    shortDescription: "Premium fresh potatoes with clean skin, low sugar, and robust starch content, perfect for wholesale.",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Jyoti & Pukhraj Varieties", "Firm Skin & Solid Flesh", "Low Sugar (No Browning)", "Soil Washed Cleanness"],
    specTable: {
      "Origin": "Gujarat / Uttar Pradesh, India",
      "Varieties": "Jyoti, Pukhraj, Lady Rosetta (LR)",
      "Sizes": "45 mm - 80 mm+",
      "Defect Rate": "Less than 2% by weight",
      "Starch Content": "15% - 18% min"
    },
    packingOptions: ["25kg Mesh Bags", "50kg Jute Sacks", "Ventilated wooden crates"],
    moq: "24 Metric Tons (MT) / 1x40' Container",
    shelfLife: "30 Days under ambient ventilation / Months in cold storage",
    applications: "French fry processing, crisp manufacturing, wholesale markets, retail shops.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p36",
    name: "Tomato",
    slug: "fresh-tomato",
    category: "Fresh Vegetables",
    categorySlug: "fresh-vegetables",
    shortDescription: "Vibrant red, firm fresh tomatoes harvested at early ripening stage for safe export shipping.",
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Firm Hybrid Grades", "Turning-Green/Light Pink Stage", "Cold Chain Managed", "No Rotting Defects"],
    specTable: {
      "Origin": "Maharashtra / Karnataka, India",
      "Type": "Firm Hybrid (Vaishnavi Red / Shivam)",
      "Sizes": "50 mm to 70 mm",
      "Transit Temperature": "10°C - 12°C",
      "Relative Humidity": "85% - 90%"
    },
    packingOptions: ["10kg Ventilated Crates", "15kg Corrugated boxes with air vents"],
    moq: "5 Metric Tons (MT) by Air / 1 Reefer FCL by Sea",
    shelfLife: "15 Days from harvest under cool chain",
    applications: "Fresh retailing, restaurant food bases, purees and pastes.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p37",
    name: "Green Chilli",
    slug: "fresh-green-chilli",
    category: "Chilli",
    categorySlug: "chilli",
    shortDescription: "Fresh, hot green chillies (G4 and Teja), sorted for length and deep green color.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["G4 & Teja Selections", "Intense Fiery Heat", "Stalk Cleaned & Dry Packed", "Rapid Air Freight Delivery"],
    specTable: {
      "Origin": "India",
      "Varieties Available": "G4 / Teja Green",
      "Pod Length": "6 cm to 10 cm+",
      "Color": "Deep Shiny Green",
      "Pungency Index": "Highly Spicy"
    },
    packingOptions: ["3.5kg Vented Cartons", "4kg, 5kg Corrugated Boxes with paper pads"],
    moq: "3 Metric Tons (MT) by Air / 1 Reefer by Sea",
    shelfLife: "14 Days under refrigerated 8°C - 10°C transit",
    applications: "Pickle brands, spice ingredients, restaurant fresh food, fresh supermarket exports.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p38",
    name: "Okra (Lady Finger)",
    slug: "fresh-okra",
    category: "Fresh Vegetables",
    categorySlug: "fresh-vegetables",
    shortDescription: "Tender, slender green okra pods harvested daily and pre-cooled for premium freshness.",
    image: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Tender & Fiber-Free", "Vivid Green Chlorophyll", "Pre-Cooled Immediately", "No Skin Bruises"],
    specTable: {
      "Origin": "India",
      "Pod Length": "8 cm - 12 cm",
      "Color": "Natural Green",
      "Texture": "Tender / Snaps easily",
      "Pesticide Level": "Strict safety compliant"
    },
    packingOptions: ["5kg Ventilated Carton Boxes with tissue cushioning"],
    moq: "1.5 Metric Tons (MT) by Air",
    shelfLife: "7 Days under refrigeration (5°C - 7°C)",
    applications: "Staple vegetable retail, frozen food packing, premium exports.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p39",
    name: "Drumstick",
    slug: "fresh-drumstick",
    category: "Fresh Vegetables",
    categorySlug: "fresh-vegetables",
    shortDescription: "Thick, fleshy green drumsticks loaded with nutrients, packed fresh for daily air cargo.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Fleshy Tender Core", "Uniformly Sized Cuts", "Packed with Moringa Nutrients", "No Woodiness"],
    specTable: {
      "Origin": "India",
      "Length of Pods": "45 cm - 60 cm",
      "Thickness (Diameter)": "1.5 cm - 2.5 cm",
      "Color": "Fresh Bright Green",
      "Quality": "Tender and pulp-rich"
    },
    packingOptions: ["10kg Corrugated Boxes", "15kg Corrugated boxes with custom vents"],
    moq: "1 Metric Ton (MT) by Air",
    shelfLife: "10 Days under refrigerated transit",
    applications: "Traditional sambar preparations, extraction of moringa seeds, fresh exports.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p40",
    name: "Ginger",
    slug: "fresh-ginger",
    category: "Fresh Vegetables",
    categorySlug: "fresh-vegetables",
    shortDescription: "Bold, fleshy fresh ginger roots with clean skin and high spicy juice concentration.",
    image: "https://images.unsplash.com/photo-1508747703725-719ae2c98295?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Fleshy Bold Knobs", "Pressure Dirt Washed", "High Gingerol Oil juice", "Cured Outer Skin"],
    specTable: {
      "Origin": "Karnataka / Assam, India",
      "Grade / Quality": "Class-A Washed & Cured",
      "Size (Weight of Knob)": "100g to 150g+",
      "Moisture": "Well cured skin to prevent mold",
      "Transit Temp": "Reefer 12°C"
    },
    packingOptions: ["10kg Mesh Bags", "20kg Carton boxes with venting"],
    moq: "10 Metric Tons (MT)",
    shelfLife: "45 Days in cool, ventilated dry conditions",
    applications: "Fresh juice shops, commercial spice minces, ginger oil extracts.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p41",
    name: "Garlic",
    slug: "garlic",
    category: "Fresh Vegetables",
    categorySlug: "fresh-vegetables",
    shortDescription: "Whole premium Indian white garlic, fully cured with bold cloves and rich taste.",
    image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Bold Clove Size", "Intense Garlic Aroma", "Well Dried & Cleaned", "Free from soil/mold"],
    specTable: {
      "Origin": "Madhya Pradesh / Rajasthan, India",
      "Types": "Premium White Garlic",
      "Sizes": "30mm to 50mm+",
      "Quality": "Cleaned, roots cut, well cured",
      "Moisture": "Fully cured"
    },
    packingOptions: ["10kg, 20kg Mesh Bags", "5kg Cartons", "Custom small nets"],
    moq: "10 Metric Tons (MT)",
    shelfLife: "3 - 4 Months",
    applications: "Spice preparations, garlic pastes, retail grocery, medicinal extracts.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p42",
    name: "Curry Leaves",
    slug: "curry-leaves",
    category: "Fresh Vegetables",
    categorySlug: "fresh-vegetables",
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
    domesticAvailability: false
  },
  {
    id: "p43",
    name: "Mint Leaves",
    slug: "fresh-mint",
    category: "Fresh Vegetables",
    categorySlug: "fresh-vegetables",
    shortDescription: "Crisp, refreshingly fragrant fresh mint leaves harvested daily and packed under cold chains.",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["High Menthol Concentration", "Vibrant Green Leaf stems", "Mud-Free Triple Washed", "Reefer Air Cargo Shipped"],
    specTable: {
      "Origin": "India",
      "Color": "Lush Green",
      "Leaves Density": "Crisp and firm",
      "Moisture": "Packed dry to prevent rotting",
      "Purity": "100% Mint Stems"
    },
    packingOptions: ["4kg Vented Corrugated Cartons", "5kg Cartons with dry paper wrap"],
    moq: "500 kg by Air",
    shelfLife: "5 - 7 Days under strict cold chain (2°C - 4°C)",
    applications: "Fresh juice mocktails, commercial sauce blending, cosmetic facial extraction.",
    exportAvailability: true,
    domesticAvailability: false
  },

  // --- Category: Fresh Fruits (5 items) ---
  {
    id: "p44",
    name: "Mango",
    slug: "fresh-mango",
    category: "Fresh Fruits",
    categorySlug: "fresh-fruits",
    shortDescription: "The king of fruits, featuring sweet, saffron-colored flesh, rich aroma, and high export grade.",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["GI-Tagged Ratnagiri Alphonso", "Fiber-Free Creamy Pulp", "Sweet Saffron Interior", "Hot-Water Sterilized Safety"],
    specTable: {
      "Origin": "Ratnagiri / Devgad (Maharashtra), India",
      "Grade": "Export Class-1 Premium",
      "Individual Weight": "220g to 280g per fruit",
      "TSS (Sugar degree)": "18° - 20° Brix",
      "Transit Temp": "Refrigerated at 12°C"
    },
    packingOptions: ["4.5kg Corrugated boxes (9, 12, 15 fruits)", "Individual foam mesh sleeves"],
    moq: "2 Metric Tons (MT) by Air / 1 Reefer Sea Container",
    shelfLife: "15 Days from harvest under controlled ripening",
    applications: "Direct luxury fresh retail, premium desert pulps, ice cream toppings.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p45",
    name: "Banana",
    slug: "fresh-banana",
    category: "Fresh Fruits",
    categorySlug: "fresh-fruits",
    shortDescription: "Rich, firm, premium Cavendish green bananas harvested at pre-ripened export stage.",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Grand Naine (G9) Cavendish", "Spotless Golden Yellow on Ripening", "Strict Crown Treatments", "Controlled Reefer Transport"],
    specTable: {
      "Origin": "Gujarat / Maharashtra, India",
      "Variety": "Cavendish G9 Green Bananas",
      "Calibration Size": "39 mm to 47 mm",
      "Finger Length": "18 cm min",
      "Maturity Index": "75% - 80% full"
    },
    packingOptions: ["13.5kg Telescopic Cartons", "18.5kg Heavy duty cartons with vacuum liners"],
    moq: "20 Metric Tons (MT) / 1x40' Reefer",
    shelfLife: "35 Days under refrigerated 13.5°C transit",
    applications: "Fresh fruit retail distribution, dried banana chips, commercial bakery.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p46",
    name: "Guava",
    slug: "fresh-guava",
    category: "Fresh Fruits",
    categorySlug: "fresh-fruits",
    shortDescription: "Crisp, sweet fresh guavas with thick flesh, high vitamin C, and rich tropical taste.",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["VNR Bihi Bold Variety", "Crisp Thick Sweet Flesh", "泡沫套 Foam Sleeved Protection", "Loaded with Vitamin C"],
    specTable: {
      "Origin": "India",
      "Varieties Available": "VNR Bihi / Lucknow 49",
      "Size (Weight per Fruit)": "250g to 500g+ bold",
      "Color": "Vibrant Pale Greenish Yellow",
      "Flesh Type": "Firm and crisp (White / Pink)"
    },
    packingOptions: ["5kg Carton boxes", "7kg Cartons with individual bubble wrappers"],
    moq: "1.5 Metric Tons (MT) by Air",
    shelfLife: "10 Days under refrigerated transit (8°C - 10°C)",
    applications: "Fresh fruit snack grids, tropical fruit juice shops, gourmet salads.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p47",
    name: "Sweet Lime",
    slug: "fresh-sweet-lime",
    category: "Fresh Fruits",
    categorySlug: "fresh-fruits",
    shortDescription: "Juicy sweet limes (Mosambi) loaded with Vitamin C, featuring clean skin and high juice yield.",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["MOSAMBI Citrus Selection", "Thin Rind & High Juice", "Low Acidity Sweet Taste", "Polished and sorted Bulks"],
    specTable: {
      "Origin": "Maharashtra / Andhra Pradesh, India",
      "Juice Yield": "45% min by weight",
      "Sugar Index": "10° - 12° Brix",
      "Sizes (Diameter)": "65 mm - 80 mm",
      "Color": "Bright Yellow-Greenish"
    },
    packingOptions: ["10kg Carton Boxes", "15kg Carton Boxes", "Heavy Duty Mesh Sacks"],
    moq: "10 Metric Tons (MT)",
    shelfLife: "20 - 25 Days under refrigeration (6°C - 8°C)",
    applications: "Fresh juice operations, commercial retail grids, natural ascorbic extracts.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p48",
    name: "Watermelon",
    slug: "fresh-watermelon",
    category: "Fresh Fruits",
    categorySlug: "fresh-fruits",
    shortDescription: "Large, sweet, deep red watermelons harvested fresh with high water content and crisp texture.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Sugar Queen Kiran Crop", "11°-13° Brix Sweetness", "Thick Shock-Proof Rind", "Hand-Acoustic Maturity Checked"],
    specTable: {
      "Origin": "Karnataka / Tamil Nadu, India",
      "Variety": "Sugar Queen / Kiran",
      "Individual Weight": "3.0 kg to 6.0 kg+ per fruit",
      "Sugar Level": "11° - 13° Brix",
      "Flesh Type": "Crisp, Deep Crimson Red"
    },
    packingOptions: ["Bulk container padding on straw floor", "Large wooden packing crates"],
    moq: "20 Metric Tons (MT) / 1 FCL",
    shelfLife: "20 Days in well-ventilated dry logistics",
    applications: "Fresh slice wholesale markets, tropical catering, retail supermarket displays.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p49",
    name: "Dry Red Chilli (Guntur Teja / Sanam)",
    slug: "dry-red-chilli",
    category: "Chilli",
    categorySlug: "chilli",
    shortDescription: "Premium whole sun-dried red chillies with rich red color and highly pungent flavor, sourced directly from Guntur farms.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Sourced from Guntur AP", "Vibrant ASTA Color", "Available in Stem / Stemless", "Sun-Dried Hygienically"],
    specTable: {
      "Origin": "Guntur, Andhra Pradesh, India",
      "Varieties": "Guntur Teja (S17) / Sanam (S330 / 341)",
      "Pungency (Heat)": "40,000 - 65,000 SHU",
      "Moisture": "10% - 12% max",
      "Broken Ratio": "2% max",
      "Color": "Deep Dark Red (90 - 120 ASTA)"
    },
    packingOptions: ["10kg, 20kg Jute bags", "25kg PP bags with outer markings"],
    moq: "14 Metric Tons (MT) / 1x40' FCL",
    shelfLife: "12 Months",
    applications: "Spice extraction, hot sauce manufacturing, direct culinary dry seasoning.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p50",
    name: "Premium Arabica Coffee Beans (Grade AAA)",
    slug: "arabica-coffee-beans",
    category: "Coffee Beans",
    categorySlug: "coffee-beans",
    shortDescription: "High-altitude, shade-grown Arabica coffee beans featuring a complex spiced flavor profile and elegant acidity, processed under strict quality controls.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Shade-Grown in Western Ghats", "Sieving Grade AAA/AA", "Intense Floral Aroma", "Zero Black/Sour Bean Defects"],
    specTable: {
      "Origin": "Chikmagalur / Coorg, Karnataka, India",
      "Bean Variety": "Arabica S.795 / Selection 9",
      "Sieve Calibration": "7.25 mm+ (AAA) / 6.70 mm+ (AA)",
      "Moisture Content": "11.5% - 12.5% max",
      "Black Beans Ratio": "Zero / Negligible",
      "Roasting Yield": "Highly uniform and consistent"
    },
    packingOptions: ["60kg GrainPro Jute Sacks", "Bulk Container Bulkheads"],
    moq: "18 Metric Tons (MT) / 1x20' FCL",
    shelfLife: "24 Months",
    applications: "Gourmet coffee roasting, premium espresso blends, cold brew extractors.",
    exportAvailability: true,
    domesticAvailability: false
  },
  {
    id: "p51",
    name: "Premium Robusta Coffee Beans (Grade AAA)",
    slug: "robusta-coffee-beans",
    category: "Coffee Beans",
    categorySlug: "coffee-beans",
    shortDescription: "Robust, high-caffeine Robusta coffee beans sourced from pristine Indian highlands, offering a rich crema and bold chocolatey finish.",
    image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=800&q=80",
    keyPoints: ["Shade-Grown Highlands", "Bold Crema Yield", "Chocolaty & Nutty Undertones", "Clean Parchment Processed"],
    specTable: {
      "Origin": "Wayanad, Kerala / Coorg, Karnataka, India",
      "Bean Variety": "Robusta Parchment / Cherry",
      "Sieve Calibration": "7.00 mm+ (AAA)",
      "Moisture Content": "11.0% - 12.0% max",
      "Caffeine Level": "2.2% - 2.7% min",
      "Admixture": "0.5% max"
    },
    packingOptions: ["60kg GrainPro Jute Sacks", "Custom Private Labeled bags"],
    moq: "19 Metric Tons (MT) / 1 FCL",
    shelfLife: "24 Months",
    applications: "Commercial instant coffee blending, espresso crema enhancer, dark roast coffee formulations.",
    exportAvailability: true,
    domesticAvailability: false
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
    logoText: "APEDA",
    image: "/cert_apeda.png"
  },
  {
    id: "c2",
    name: "FSSAI Certified",
    description: "Food Safety and Standards Authority of India certified for hygienic food storage and shipping standards.",
    status: "Active Registration",
    logoText: "FSSAI",
    image: "/cert_fssai.png"
  },
  {
    id: "c3",
    name: "IEC (Import Export Code)",
    description: "Officially registered Import Export Code issued by the Directorate General of Foreign Trade, Govt. of India.",
    status: "Active Registration",
    logoText: "DGFT - IEC",
    image: "/cert_iec.png"
  },
  {
    id: "c4",
    name: "GST Registered",
    description: "Fully compliant Indian Goods & Services Tax registration holding complete state & central trade validation.",
    status: "Active Compliance",
    logoText: "GST",
    image: "/cert_gst.png"
  },
  {
    id: "c5",
    name: "MSME Registered",
    description: "Registered Micro, Small & Medium Enterprise recognizing Sri Varahi Agro as a priority industrial supplier.",
    status: "Active Enterprise",
    logoText: "MSME",
    image: "/cert_udyam.png"
  },
  {
    id: "c5_1",
    name: "Spices Board Registered",
    description: "Official registration with the Spices Board of India, enabling global export clearance for premium Indian spices.",
    status: "Active Registration",
    logoText: "Spices Board",
    image: "/cert_spices_board.png"
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
  },
  {
    id: 7,
    title: "Indian Spice Export Standards & Quality Grades",
    slug: "indian-spice-export-standards-quality-grades",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    date: "May 5, 2026",
    readTime: "6 min read",
    excerpt: "Understanding AGMARK, Spices Board of India grading, and global buyer expectations for premium spice shipments.",
    content: `<p>India supplies over 75% of the world's spice requirements, making it the undisputed global spice hub. However, exporting spices internationally demands strict adherence to quality grades set by the <b>Spices Board of India</b> and importing country regulations like EU MRL (Maximum Residue Limits) and US FDA compliance.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">Key Quality Parameters for Whole Spices</h4>
              <p><b>Cumin Seeds (Jeera):</b> Purity of 99.5% minimum (Singapore Machine Cleaned), volatile oil content 2.5%–3.0%, moisture below 8%. <b>Coriander Seeds:</b> Grades include Badami, Green, and Double Parrot, all evaluated for split seed ratio (≤5%), moisture, and foreign matter. <b>Black Pepper:</b> Density graded in grams per liter (G/L) — premium Malabar Garbled typically requires 550 G/L minimum.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">Phytosanitary & Fumigation Compliance</h4>
              <p>All spice consignments require a valid Phytosanitary Certificate issued by the Plant Quarantine Authority, confirming the shipment is free from live insects, fungal spores, and regulated pests. Methyl Bromide or heat treatment fumigation is mandated for several Middle Eastern and European destinations.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">EU MRL Compliance for Ground Powders</h4>
              <p>Ground spice powders exported to Europe undergo pesticide residue testing at NABL-accredited labs. Aflatoxin levels in chilli and turmeric powders must comply with EU Regulation 1881/2006 limits — zero tolerance for Aflatoxin B1 exceeding 5 ppb. Sri Varahi Agro Foods LLP ensures all powder exports pass third-party testing before FCL stuffing.</p>`
  },
  {
    id: 8,
    title: "Understanding Basmati Rice Grades: 1121 vs 1509 vs Pusa",
    slug: "understanding-basmati-rice-grades-1121-vs-1509-vs-pusa",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    date: "April 22, 2026",
    readTime: "7 min read",
    excerpt: "A technical breakdown of India's most famous Basmati varieties — what buyers in UAE, Saudi Arabia and Europe must know.",
    content: `<p>Basmati Rice is India's flagship export commodity, carrying a coveted Geographical Indication (GI) tag and protected trade designation under global trade treaties. Within the Basmati family, three commercially dominant varieties — <b>1121 Basmati, 1509 Basmati, and Pusa Basmati</b> — each command different price points and applications in international markets.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">1121 Basmati — The King of Long Grain</h4>
              <p>Released by IARI (Indian Agricultural Research Institute) in 2003, the 1121 variety set world records with grain lengths of 8.3 mm (raw) elongating to 20+ mm on cooking — the longest of any commercial rice variety globally. Available in Sella (parboiled golden), Steam, and Raw forms, it is the most exported Basmati variety to Gulf, European, and North American markets.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">1509 Basmati — Economical High-Volume Choice</h4>
              <p>The 1509 is a newer, faster-maturing (115 days vs 145 days for 1121) variety with grain length 7.9 mm raw and competitive pricing. Its shorter crop cycle means two harvest windows annually, ensuring more stable supply. Buyers looking for a budget-friendly Basmati alternative for institutional catering and ethnic retail chains prefer 1509.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">Pusa Basmati 1 — The Classic Original</h4>
              <p>With its traditional floral aroma and soft texture, Pusa Basmati 1 remains popular in premium gourmet segments. Grown primarily in Haryana and Punjab river basins, it retains the highest aroma compound (2-Acetyl-1-Pyrroline) concentration among all Basmati varieties. Our verified Basmati shipments include DNA testing reports from NABL labs to confirm variety purity.</p>`
  },
  {
    id: 9,
    title: "Indian Onion Export: Seasons, Grades & Market Dynamics",
    slug: "indian-onion-export-seasons-grades-market-dynamics",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
    date: "April 8, 2026",
    readTime: "5 min read",
    excerpt: "India's onion export cycle is highly seasonal. Learn when to buy, what grades matter, and how to avoid quality rejections.",
    content: `<p>Indian onions — especially the vibrant red varieties from Nashik (Maharashtra) and Bellary (Karnataka) — are among the most traded agricultural commodities globally. The country supplies onions to over 60 nations including Malaysia, Singapore, Sri Lanka, UAE, and UK. However, their export is notoriously seasonal and influenced by domestic demand, rainfall cycles, and government policy.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">Indian Onion Harvest Seasons</h4>
              <p><b>Kharif (October–November):</b> Early harvest, smaller bulbs, less storage life. <b>Late Kharif (December–January):</b> Medium crop, medium keeping quality. <b>Rabi (March–May):</b> The largest harvest with the highest quality — well-cured double-skinned onions with 3–4 month shelf life. Rabi onions are the premium export grade most international buyers target for container shipments.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">Grade Sizes & Buyer Specifications</h4>
              <p>Export onions are size-graded in mm: <b>35mm+</b> (small retail packs), <b>45mm+</b> (wholesale), <b>55mm+</b> (premium Middle East & Southeast Asia). Specifications typically demand ≤5% doubles or misshapen bulbs, ≤3% damage, and a minimum of 3 dry outer skins for sea freight protection. Our Nashik procurement teams conduct daily grading and manual curing audits throughout the season.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">Export Packaging Standards</h4>
              <p>Onions are packed in 5kg, 10kg, 25kg, and 50kg red mesh bags or ventilated jute sacks. Palletized container loading with ventilation ducting is critical for non-reefer (ambient) shipments. For reefer containers to long-haul destinations, a temperature of 1°C–3°C is maintained throughout the voyage.</p>`
  },
  {
    id: 10,
    title: "APEDA Certification: Your Gateway to Legal Agro Export from India",
    slug: "apeda-certification-gateway-agro-export-india",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351167?auto=format&fit=crop&w=800&q=80",
    date: "March 20, 2026",
    readTime: "5 min read",
    excerpt: "Before you export any agricultural product from India, APEDA registration is mandatory. Here's what it covers and why it matters.",
    content: `<p>The <b>Agricultural and Processed Food Products Export Development Authority (APEDA)</b> is an apex body under the Ministry of Commerce & Industry, Government of India. All exporters of scheduled products — including rice, fruits, vegetables, spices, meat, and dairy — are legally required to be registered with APEDA before initiating any overseas shipment.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">What APEDA Registration Covers</h4>
              <p>APEDA registration grants exporters the legal authority to ship scheduled products internationally. It also provides access to: <b>(1)</b> Financial assistance under export promotion schemes. <b>(2)</b> Quality development grants for infrastructure upgrades. <b>(3)</b> Market development support including trade fair participation and buyer-seller meet facilitation. Sri Varahi Agro Foods LLP holds active APEDA registration, ensuring all our export consignments are fully compliant.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">Documentation Required for Export</h4>
              <p>A complete agro export documentation set includes: <b>Phytosanitary Certificate</b> (issued by Plant Quarantine), <b>Certificate of Origin</b> (Chamber of Commerce), <b>Commercial Invoice + Packing List</b>, <b>Bill of Lading / Airway Bill</b>, <b>FSSAI Export NOC</b> (for processed food), and country-specific <b>Fumigation Certificate</b>. We provide complete documentation support to our international buyers, eliminating customs clearance delays at destination ports.</p>`
  },
  {
    id: 11,
    title: "Moringa: India's Superfood Export Rising Globally",
    slug: "moringa-superfood-export-rising-globally",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    date: "March 5, 2026",
    readTime: "6 min read",
    excerpt: "Moringa powder, leaf, and drumstick exports from India have tripled in 5 years. Discover what makes this crop a global sensation.",
    content: `<p>Moringa oleifera — called the "Miracle Tree" — is indigenous to North India but commercially cultivated across Andhra Pradesh, Tamil Nadu, and Karnataka. It is one of the fastest-growing global superfoods, with demand for Moringa powder, capsules, teas, and oils surging across the US, Europe, and Japan health markets.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">Nutritional Power Profile</h4>
              <p>Per gram of dry Moringa leaf, the nutritional punch is staggering: <b>25× more iron than spinach</b>, <b>17× more calcium than milk</b>, <b>15× more potassium than bananas</b>, and a complete amino acid profile making it one of very few plant-based complete proteins. This makes it highly sought by nutraceutical manufacturers and wellness brands.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">Export Standards for Moringa Powder</h4>
              <p>Quality Moringa leaf powder for export must comply with: <b>moisture ≤ 7%</b>, <b>total ash ≤ 9%</b>, <b>mesh size 100–120 (super fine)</b>, zero detectable pesticide residue, negative Salmonella and E. coli tests, and no heavy metals. All our Moringa powder consignments are shade-dried (never sun-dried) to preserve chlorophyll and enzymatic activity, and are batch-tested at NABL certified third-party laboratories before shipment.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">Market Applications</h4>
              <p>International buyers of Moringa powder include nutraceutical capsule manufacturers, organic smoothie brands, cosmetic face mask formulations, animal feed supplement producers, and institutional food fortification programs in Africa and Southeast Asia. Sri Varahi Agro Foods LLP can supply between 500kg and 20MT per month with full organic certification support.</p>`
  },
  {
    id: 12,
    title: "Container Shipping 101: FCL vs LCL for Agro Exports",
    slug: "container-shipping-fcl-vs-lcl-agro-exports",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80",
    date: "February 10, 2026",
    readTime: "7 min read",
    excerpt: "First-time importers often confuse FCL and LCL shipping. This guide explains costs, lead times, and when to use each for Indian agro cargo.",
    content: `<p>When importing agricultural commodities from India, the fundamental shipping decision is between <b>FCL (Full Container Load)</b> and <b>LCL (Less than Container Load)</b>. Each has distinct cost implications, transit timelines, and risk profiles that buyers must understand before placing orders.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">FCL — Full Container Load</h4>
              <p>An FCL shipment means you occupy the entire container — either a 20-foot (approximately 24 Metric Tons for rice) or 40-foot container (approximately 26–28 MT for rice). FCL is economical when your order volume fills or nearly fills a container. Benefits include: faster transit (no consolidation delays), lower per-unit shipping cost at scale, dedicated container security, and simpler documentation. Most of our rice, onion, and spice orders ship FCL through JNPT (Nhava Sheva) or Chennai port.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">LCL — Less than Container Load</h4>
              <p>For smaller trial orders (typically below 3 MT), LCL shipping consolidates your cargo with other shippers' goods into a shared container. While per-unit freight cost is higher and transit time is longer (due to consolidation and de-stuffing at destination CFS), LCL is ideal for first-time buyers testing product quality before committing to full container orders. Sri Varahi Agro Foods LLP offers LCL shipment support for sample orders and new market trials.</p>
              <h4 class="font-serif text-lg text-primary-green my-2 font-bold">Air Freight for Perishables</h4>
              <p>Fresh vegetables (green chillies, okra, curry leaves, drumsticks), fresh herbs, and premium fruits (Alphonso mangoes, guavas) cannot withstand 25–35 day sea transit and require air freight. While significantly more expensive, air cargo from Hyderabad/Chennai/Mumbai airports ensures delivery within 18–72 hours to UAE, Singapore, or UK. We coordinate with IATA-certified air freight forwarders for temperature-controlled fresh produce exports.</p>`
  }
];

export const faqs = [
  {
    question: "What is your primary export range?",
    answer: "We supply a premium range of agricultural commodities including long grain Basmati & Non-Basmati (IR 64) Rice, other southern varieties like Jaya, Surekha, Sona Masoori, Ponni, and Iddly Rice, pure whole spices (Cumin, Coriander, Fennel, Cardamom, Black/White Pepper, Clove, Cinnamon, Star Anise, Mustard), hygienically ground spice and wellness powders, fresh vegetables (Onions, Potatoes, Tomatoes, Chillies, Okra, Drumsticks, Ginger, Garlic, Mint, Curry Leaves), and premium fresh fruits (Alphonso Grapes, Cavendish Bananas, Guavas, Sweet Limes, Watermelons)."
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
    answer: "For standard sea containers (FCL), our MOQ generally ranges from 5 to 20 Metric Tons depending on the product (e.g. 5 MT for spices, 12 MT for rice). For perishable items shipped via air freight (e.g. curry leaves, fresh green chillies, okra, drumsticks), we accept lower MOQs around 500kg - 1000kg."
  },
  {
    question: "What are your standard payment terms for export?",
    answer: "Our standard export payment terms are: 1) 30% advance T/T and 70% against clean scanned copy of Bill of Lading (B/L) and documents, or 2) 100% Irrevocable Confirmed Letter of Credit (L/C) at sight from prime AAA rated banks."
  }
];

