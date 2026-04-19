// SEO metadata and structured data for the Services page
import type { Metadata } from "next";
import { additionalServices, services } from "../services";

const serviceNames = [
    ...services.map(s => s.title),
    ...additionalServices.map(s => s.title)
];

const serviceKeywords = [
    ...serviceNames,
    "servizi facility management",
    "pulizie uffici",
    "manutenzione uffici",
    "servizi professionali",
    "Smart it servizi"
];

export const servicesMetadata: Metadata = {
    title: "Servizi di Pulizie e Facility Management a Milano, Assago e Buccinasco | Smart it",
    description: "Scopri i servizi Smart it a Milano, Assago e Buccinasco: pulizie uffici, industriali e condominiali, manutenzioni, imbiancature, traslochi e portierato. Preventivo e sopralluogo gratuiti.",
    keywords: serviceKeywords,
    openGraph: {
        title: "Servizi di Pulizie e Facility Management a Milano, Assago e Buccinasco | Smart it",
        description: "Scopri i servizi Smart it a Milano, Assago e Buccinasco: pulizie uffici, industriali e condominiali, manutenzioni, imbiancature, traslochi e portierato. Preventivo e sopralluogo gratuiti.",
        url: "https://smartit-srl.com/servizi",
        type: "website",
        images: [
            {
                url: "https://smartit-srl.com/no-text-logo.png",
                width: 800,
                height: 600,
                alt: "Smart it - Servizi Building & Facility Management Milano"
            }
        ],
        locale: "it_IT"
    },
    twitter: {
        card: "summary_large_image",
        title: "Servizi di Pulizie e Facility Management a Milano, Assago e Buccinasco | Smart it",
        description: "Scopri i servizi Smart it a Milano, Assago e Buccinasco: pulizie uffici, industriali e condominiali, manutenzioni, imbiancature, traslochi e portierato. Preventivo e sopralluogo gratuiti.",
        images: ["https://smartit-srl.com/no-text-logo.png"]
    },
    alternates: {
        canonical: "https://smartit-srl.com/servizi",
        languages: {
            "it-IT": "/servizi",
        }
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
        }
    }
};

export const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Smart it | Servizi di Building & Facility Management a Milano, Assago, Buccinasco e in tutta la Lombardia",
    "url": "https://smartit-srl.com/servizi",
    "description": "Tutti i servizi offerti da Smart it a Milano, Assago, Buccinasco e in tutta la Lombardia: pulizie uffici, pulizie industriali, condominiali e post cantiere, manutenzioni, imbiancature, traslochi, facchinaggio, magazzinaggio, manutenzione del verde, portierato e altro ancora.",
    "hasPart": [
        ...services.map(s => ({
            "@type": "Service",
            "name": s.title,
            "description": s.shortDescription,
            "url": `https://smartit-srl.com/servizi/${s.slug}`
        })),
        ...additionalServices.map(s => ({
            "@type": "Service",
            "name": s.title,
            "description": s.shortDescription,
            "url": `https://smartit-srl.com/servizi/${s.slug}`
        }))
    ]
};
