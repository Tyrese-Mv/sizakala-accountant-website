import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
}

export const useSEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  canonical
}: SEOProps) => {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, content: string, property?: string) => {
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement('meta');
        if (property) {
          element.setAttribute('property', property);
        } else {
          const nameMatch = selector.match(/name="([^"]+)"/);
          if (nameMatch) {
            element.setAttribute('name', nameMatch[1]);
          }
        }
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // Update meta description
    updateMetaTag('meta[name="description"]', description);

    // Update meta keywords if provided
    if (keywords) {
      updateMetaTag('meta[name="keywords"]', keywords);
    }

    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', ogTitle || title, 'og:title');
    updateMetaTag('meta[property="og:description"]', ogDescription || description, 'og:description');

    // Update Twitter tags
    updateMetaTag('meta[property="twitter:title"]', ogTitle || title, 'twitter:title');
    updateMetaTag('meta[property="twitter:description"]', ogDescription || description, 'twitter:description');

    // Update canonical URL if provided
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }

      linkElement.setAttribute('href', canonical);
    }
  }, [title, description, keywords, ogTitle, ogDescription, canonical]);
};
