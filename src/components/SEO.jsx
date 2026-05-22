import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Reusable SEO Component
 * Operates via side effects to dynamically update index.html head tags (Title, Meta, Canonical, OG, Twitter)
 * and injects dynamic JSON-LD structured schemas.
 */
export default function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  canonicalUrl,
  schemaMarkup
}) {
  const location = useLocation();

  useEffect(() => {
    const baseDomain = 'https://srivarahiagrofoods.in';
    const currentUrl = canonicalUrl || `${baseDomain}${location.pathname}${location.search}`;

    // 1. Update Document Title
    const defaultTitle = 'Sri Varahi Agro Foods LLP | Premium Indian Agro Products Exporter';
    const formattedTitle = title ? `${title} | Sri Varahi Agro Foods LLP` : defaultTitle;
    document.title = formattedTitle;

    // Helper to safely select and update meta tag content or create it if missing
    const updateMetaTag = (selector, attributeName, attributeValue, content) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attributeName, attributeValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content || '');
    };

    // Helper to safely update links (e.g. canonical)
    const updateLinkTag = (selector, relValue, hrefValue) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('link');
        tag.setAttribute('rel', relValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('href', hrefValue || '');
    };

    // 2. Update Primary Meta Tags
    const defaultDesc = 'Sri Varahi Agro Foods LLP is a leading Indian agro products exporter specializing in Basmati Rice, Turmeric, Chilli, Spices, Fresh Fruits & Vegetables. Direct farmer sourcing.';
    updateMetaTag('meta[name="description"]', 'name', 'description', description || defaultDesc);

    const defaultKeywords = 'Indian agro products exporter, Basmati rice exporter India, turmeric export Hyderabad, chilli powder exporter, spices exporter India, fresh vegetables export, agro export Telangana, rice export India';
    updateMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords || defaultKeywords);

    // 3. Update Canonical URL
    updateLinkTag('link[rel="canonical"]', 'canonical', currentUrl);

    // 4. Update Open Graph (Facebook/LinkedIn/WhatsApp) Tags
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', ogTitle || title || 'Sri Varahi Agro Foods LLP');
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', ogDescription || description || defaultDesc);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);

    const defaultImage = '/hero_agro_products.png';
    const finalImage = ogImage || defaultImage;
    const absoluteOgImage = finalImage.startsWith('http')
      ? finalImage
      : `${baseDomain}${finalImage.startsWith('/') ? '' : '/'}${finalImage}`;
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', absoluteOgImage);

    // 5. Update Twitter Card Tags
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', ogTitle || title || 'Sri Varahi Agro Foods LLP');
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', ogDescription || description || defaultDesc);
    updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', absoluteOgImage);

    // 6. Dynamic JSON-LD Schema.org Injection
    let schemaScript = document.getElementById('dynamic-page-schema');
    if (schemaMarkup) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'dynamic-page-schema';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.innerHTML = JSON.stringify(schemaMarkup, null, 2);
    } else {
      if (schemaScript) {
        schemaScript.remove();
      }
    }

    // Cleanup on component change (resets schemas)
    return () => {
      const existingScript = document.getElementById('dynamic-page-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogType,
    canonicalUrl,
    schemaMarkup,
    location
  ]);

  return null;
}
