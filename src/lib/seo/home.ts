import type { Metadata } from "next";
import { services, additionalServices } from "../services";

export const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Smart it - Building & Facility Management",
    "url": "https://smartit-srl.com/",
    "description": "Pulizie professionali a Milano, Assago, Buccinasco e in tutta la Lombardia. Facility management, manutenzioni, imbiancature, traslochi, facchinaggio, magazzinaggio, manutenzione del verde, portierato.",
    "mainEntity": [
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



export const homeMetadata: Metadata = {
    title: "Pulizie e Facility Management a Milano, Assago e Buccinasco | Smart it",
    description:
        "Pulizie professionali e facility management a Milano, Assago e Buccinasco. Preventivo e sopralluogo gratuiti per uffici, aziende e condomini in tutta la Lombardia.",
    keywords: Array.from(new Set([
        "pulizie professionali Milano",
        "pulizie professionali Assago",
        "pulizie professionali Buccinasco",
        "facility management Buccinasco",
        "manutenzione uffici Buccinasco",
        "imbiancature Buccinasco",
        "traslochi Buccinasco",
        "facchinaggio Buccinasco",
        "magazzinaggio Buccinasco",
        "manutenzione del verde Buccinasco",
        "portierato Buccinasco",
        "servizi uffici Buccinasco",
        "Smart it Buccinasco",
        "servizi aziende Buccinasco",
    ])),
    openGraph: {
        title: "Pulizie e Facility Management a Milano, Assago e Buccinasco | Smart it",
        description:
            "Pulizie professionali e facility management a Milano, Assago e Buccinasco. Preventivo e sopralluogo gratuiti per uffici, aziende e condomini in tutta la Lombardia.",
        url: "https://smartit-srl.com",
        type: "website",
        images: [
            {
                url: "https://smartit-srl.com/no-text-logo.png",
                width: 800,
                height: 600,
                alt: "Smart it - Building & Facility Management Milano",
            },
        ],
        locale: "it_IT",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pulizie e Facility Management a Milano, Assago e Buccinasco | Smart it",
        description:
            "Pulizie professionali e facility management a Milano, Assago e Buccinasco. Preventivo e sopralluogo gratuiti per uffici, aziende e condomini in tutta la Lombardia.",
        images: ["https://smartit-srl.com/no-text-logo.png"],
    },
    alternates: {
        canonical: "https://smartit-srl.com/",
        languages: {
            "it-IT": "/",
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
