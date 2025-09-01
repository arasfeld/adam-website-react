import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/', '/music'],
    },
    sitemap: 'https://adamrasfeld.com/sitemap.xml',
  };
}
