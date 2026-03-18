// SEO metadata and structured data for the Services page
import type { Metadata } from "next";
import { additionalServices, services } from "../services";

const serviceNames = [
    ...services.map(s => s.title),
    ...additionalServices.map(s => s.title)
];

const serviceKeywords = [
    ...serviceNames,
    "servizi facility management Milano",
    "pulizie uffici Milano",
    "manutenzione uffici Milano",
    "servizi professionali Milano",
    "Smart it servizi"
];

export const servicesMetadata: Metadata = {
    title: "Smart it | Servizi di Facility Management a Milano, Assago e Buccinasco",
    description: "Scopri tutti i servizi offerti da Smart it: pulizie uffici, pulizie industriali, condominiali e post cantiere, manutenzioni, imbiancature, traslochi, facchinaggio, magazzinaggio, manutenzione del verde, portierato e altro ancora a Milano, Assago, Buccinasco.",
    keywords: serviceKeywords,
    openGraph: {
        title: "Smart it | Servizi di Facility Management a Milano, Assago e Buccinasco",
        description: "Tutti i servizi Smart it: pulizie uffici, pulizie industriali, condominiali e post cantiere, manutenzioni, imbiancature, traslochi, facchinaggio, magazzinaggio, manutenzione del verde, portierato e altro ancora a Milano, Assago, Buccinasco.",
        url: "https://www.smartit-srl.com/servizi",
        type: "website",
        images: [
            {
                url: "https://www.smartit-srl.com/public/no-text-logo.png",
                width: 800,
                height: 600,
                alt: "Smart it - Servizi Facility Management Milano"
            }
        ],
        locale: "it_IT"
    },
    twitter: {
        card: "summary_large_image",
        site: "@smartitmilano",
        title: "Smart it | Servizi di Facility Management a Milano, Assago e Buccinasco",
        description: "Tutti i servizi Smart it: pulizie uffici, pulizie industriali, condominiali e post cantiere, manutenzioni, imbiancature, traslochi, facchinaggio, magazzinaggio, manutenzione del verde, portierato e altro ancora a Milano, Assago, Buccinasco.",
        images: ["https://www.smartit-srl.com/public/no-text-logo.png"]
    },
    alternates: {
        canonical: "https://www.smartit-srl.com/servizi",
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
    "name": "Smart it | Servizi di Facility Management a Milano, Assago e Buccinasco",
    "url": "https://www.smartit-srl.com/servizi",
    "description": "Tutti i servizi offerti da Smart it a Milano, Assago, Buccinasco: pulizie uffici, pulizie industriali, condominiali e post cantiere, manutenzioni, imbiancature, traslochi, facchinaggio, magazzinaggio, manutenzione del verde, portierato e altro ancora.",
    "hasPart": [
        ...services.map(s => ({
            "@type": "Service",
            "name": s.title,
            "description": s.shortDescription,
            "url": `https://www.smartit-srl.com/servizi/${s.slug}`
        })),
        ...additionalServices.map(s => ({
            "@type": "Service",
            "name": s.title,
            "description": s.shortDescription,
            "url": `https://www.smartit-srl.com/servizi/${s.slug}`
        }))
    ]
};
