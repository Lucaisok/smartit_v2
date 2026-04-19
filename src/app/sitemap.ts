import { MetadataRoute } from 'next';
import { services, additionalServices } from '@/src/lib/services';

const LAST_MODIFIED = new Date('2026-04-19');

function getBaseUrl() {
    if (process.env.NODE_ENV === 'production') {
        return 'https://smartit-srl.com';
    }
    return 'http://localhost:3000';
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = getBaseUrl();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/`,
            lastModified: LAST_MODIFIED,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/servizi`,
            lastModified: LAST_MODIFIED,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/chi-siamo`,
            lastModified: LAST_MODIFIED,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contatti`,
            lastModified: LAST_MODIFIED,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    // Dynamic service pages
    const servicePages: MetadataRoute.Sitemap = [
        ...services.map((service) => ({
            url: `${baseUrl}/servizi/${service.slug}`,
            lastModified: LAST_MODIFIED,
            priority: 0.7,
        })),
        ...additionalServices.map((service) => ({
            url: `${baseUrl}/servizi/${service.slug}`,
            lastModified: LAST_MODIFIED,
            priority: 0.7,
        })),
    ];

    return [...staticPages, ...servicePages];
}
