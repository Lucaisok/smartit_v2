import { MetadataRoute } from 'next';
import { services, additionalServices } from '@/src/lib/services';

function getBaseUrl() {
    if (process.env.NODE_ENV === 'production') {
        return 'https://www.smartit-srl.com';
    }
    return 'http://localhost:3000';
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = getBaseUrl();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/servizi`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/chi-siamo`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contatti`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    // Dynamic service pages
    const servicePages: MetadataRoute.Sitemap = [
        ...services.map((service) => ({
            url: `${baseUrl}/servizi/${service.slug}`,
            lastModified: new Date(),
            priority: 0.7,
        })),
        ...additionalServices.map((service) => ({
            url: `${baseUrl}/servizi/${service.slug}`,
            lastModified: new Date(),
            priority: 0.7,
        })),
    ];

    return [...staticPages, ...servicePages];
}
