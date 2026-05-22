const fs = require('fs');
const path = require('path');

// 1. Read agroData.js
const agroDataPath = path.join(__dirname, 'src', 'data', 'agroData.js');
const content = fs.readFileSync(agroDataPath, 'utf8');

// 2. Parse Category Slugs
const categoriesBlockMatch = content.match(/export const categories = \s*\[([\s\S]*?)\];/);
if (!categoriesBlockMatch) {
  console.error("Could not find categories block in agroData.js");
  process.exit(1);
}
const categoriesBlock = categoriesBlockMatch[1];
const categorySlugsMatches = categoriesBlock.match(/slug:\s*"([^"]+)"/g) || [];
const categorySlugs = categorySlugsMatches.map(m => m.match(/"([^"]+)"/)[1]);

// 3. Parse Product Slugs
const productsBlockMatch = content.match(/export const products = \s*\[([\s\S]*?)\];/);
if (!productsBlockMatch) {
  console.error("Could not find products block in agroData.js");
  process.exit(1);
}
const productsBlock = productsBlockMatch[1];
const productSlugsMatches = productsBlock.match(/slug:\s*"([^"]+)"/g) || [];
const productSlugs = productSlugsMatches.map(m => m.match(/"([^"]+)"/)[1]);

console.log(`Parsed ${categorySlugs.length} categories and ${productSlugs.length} products.`);

// 4. Generate sitemap.xml content
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- 1. Primary Pages -->
  <url>
    <loc>https://srivarahiagrofoods.in/</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://srivarahiagrofoods.in/about</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://srivarahiagrofoods.in/products</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>https://srivarahiagrofoods.in/export</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://srivarahiagrofoods.in/domestic</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://srivarahiagrofoods.in/quality</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://srivarahiagrofoods.in/certifications</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://srivarahiagrofoods.in/infrastructure</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://srivarahiagrofoods.in/gallery</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.70</priority>
  </url>
  <url>
    <loc>https://srivarahiagrofoods.in/blog</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.70</priority>
  </url>
  <url>
    <loc>https://srivarahiagrofoods.in/contact</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://srivarahiagrofoods.in/quote</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.90</priority>
  </url>

  <!-- 2. Category-Filtered Product Directories -->
`;

categorySlugs.forEach(slug => {
  sitemap += `  <url>
    <loc>https://srivarahiagrofoods.in/products?category=${slug}</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>\n`;
});

sitemap += `\n  <!-- 3. Dynamic Product Detail Pages (${productSlugs.length} individual items) -->\n`;

productSlugs.forEach(slug => {
  sitemap += `  <url>
    <loc>https://srivarahiagrofoods.in/products/${slug}</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>\n`;
});

sitemap += `</urlset>\n`;

// 5. Write to public/sitemap.xml
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log(`Successfully generated dynamic sitemap at: ${sitemapPath}`);
