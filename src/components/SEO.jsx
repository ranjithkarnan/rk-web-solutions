import { useEffect } from 'react';
import { brand } from '../assets/brand';

function setMeta(selector, attribute, value) {
  if (!value) return;

  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    const match = selector.match(/\[(name|property)="([^"]+)"\]/);
    if (match) element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
}

function setLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function SEO({ title, description, path = '/', image = '/brand-card.svg', type = 'website', jsonLd = [] }) {
  useEffect(() => {
    const canonical = `${brand.website}${path}`;
    const imageUrl = image.startsWith('http') ? image : `${brand.website}${image}`;
    const schemaList = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="author"]', 'content', brand.name);
    setMeta('meta[property="og:type"]', 'content', type);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[property="og:image"]', 'content', imageUrl);
    setMeta('meta[property="og:site_name"]', 'content', brand.name);
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', imageUrl);
    setLink('canonical', canonical);

    document.head.querySelectorAll('script[data-rk-seo="true"]').forEach((node) => node.remove());

    schemaList.filter(Boolean).forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.rkSeo = 'true';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [title, description, path, image, type, jsonLd]);

  return null;
}

export default SEO;
