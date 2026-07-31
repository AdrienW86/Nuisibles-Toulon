import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nuisibles-nantes.fr';

  // Liste exhaustive des routes
  const routes = [
    { url: '', priority: 1 },
    { url: '/deratisation', priority: 0.9 },
    { url: '/depigeonnage', priority: 0.9 },
    { url: '/cafards-blattes', priority: 0.9 },
    { url: '/puces-punaises', priority: 0.9 },
    { url: '/desinsectisation', priority: 0.9 },
    { url: '/guepes-frelons', priority: 0.9 },
    { url: '/intervention/nantes', priority: 0.8 },
    { url: '/intervention/saint-herblain', priority: 0.8 },
    { url: '/intervention/reze', priority: 0.8 },
    { url: '/intervention/orvault', priority: 0.8 },
    { url: '/a-propos', priority: 0.7 },
    { url: '/contact', priority: 0.8 },
    { url: '/mentions-legales', priority: 0.3 },
    { url: '/confidentialite', priority: 0.3 },
    { url: '/plan-du-site', priority: 0.5 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route.priority,
  }));
}