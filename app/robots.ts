import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nermin-interiors.de';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/impressum', '/datenschutzerklaerung'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
