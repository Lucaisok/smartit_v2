import type { Metadata } from "next";
import { additionalServices, services } from "@/src/lib/services";

export async function generateServiceMetadata(slug: string): Promise<Metadata> {
    const service = [...services, ...additionalServices].find((s) => s.slug === slug);
    if (!service) return {};

    const primaryLocations = "Milano, Assago e Buccinasco";
    const extendedLocations = "Milano, Assago, Buccinasco e in tutta la Lombardia";
    const baseTitle = `${service.title} a ${primaryLocations} | Smart it`;
    const baseDescription = `${service.shortDescription} Preventivo e sopralluogo gratuiti per aziende e condomini a ${extendedLocations}.`;
    const keywords = [
        service.title,
        `${service.title} Milano`,
        `${service.title} Assago`,
        `${service.title} Buccinasco`,
        "servizi facility management",
        "preventivo gratuito",
        "sopralluogo gratuito",
        "Milano",
        "Assago",
        "Buccinasco",
        "Lombardia",
        "Smart it",
    ];

    return {
        title: baseTitle,
        description: baseDescription,
        keywords,
        openGraph: {
            title: baseTitle,
            description: baseDescription,
            siteName: "Smart it",
            url: `https://smartit-srl.com/servizi/${service.slug}`,
            type: "website",
            images: [
                {
                    url: "https://smartit-srl.com/no-text-logo.png",
                    width: 800,
                    height: 600,
                    alt: `${service.title} - Smart it`,
                },
            ],
            locale: "it_IT",
        },
        twitter: {
            card: "summary_large_image",
            title: baseTitle,
            description: baseDescription,
            images: ["https://smartit-srl.com/no-text-logo.png"],
        },
        alternates: {
            canonical: `https://smartit-srl.com/servizi/${service.slug}`,
            languages: {
                "it-IT": `/servizi/${service.slug}`,
            },
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
            },
        },
    };
}

export function getServiceStructuredData(slug: string) {
    const service = [...services, ...additionalServices].find((s) => s.slug === slug);
    if (!service) return null;
    const locations = ["Milano", "Assago", "Buccinasco", "Lombardia"];
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.shortDescription,
        "areaServed": locations,
        "provider": {
            "@type": "Organization",
            "name": "Smart it",
            "url": "https://smartit-srl.com"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `Preventivo gratuito e sopralluogo gratuito a ${locations.join(", ")}`,
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Preventivo gratuito"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Sopralluogo gratuito"
                    }
                }
            ]
        },
        "url": `https://smartit-srl.com/servizi/${service.slug}`,
        "image": "https://smartit-srl.com/no-text-logo.png"
    };
}
