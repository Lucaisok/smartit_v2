import type { Metadata } from "next";
import { services, additionalServices } from "../services";

export const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Smart it - Building & Facility Management",
    "url": "https://www.smartit-srl.com/",
    "description": "Pulizie professionali a Milano, Assago, Buccinasco e in tutta la Lombardia. Facility management, manutenzioni, imbiancature, traslochi, facchinaggio, magazzinaggio, manutenzione del verde, portierato.",
    "mainEntity": [
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



export const homeMetadata: Metadata = {
    title: "Smart it - Building & Facility Management",
    description:
        "Pulizie professionali a Milano, Assago, Buccinasco e in tutta la Lombardia. Building & facility management, manutenzioni, imbiancature, traslochi, facchinaggio, magazzinaggio, manutenzione del verde, portierato. Servizi professionali per aziende e condomini.",
    keywords: [
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
        "pulizie professionali Buccinasco",
        "Smart it Buccinasco",
        "servizi aziende Buccinasco",
    ],
    openGraph: {
        title: "Smart it - Building & Facility Management",
        description:
            "Pulizie professionali e servizi di building & facility management a Milano, Assago, Buccinasco e in tutta la Lombardia. Specialisti in pulizie professionali, manutenzioni, imbiancature, traslochi, facchinaggio, magazzinaggio, manutenzione del verde e portierato.",
        url: "https://www.smartit-srl.com",
        type: "website",
        images: [
            {
                url: "https://www.smartit-srl.com/no-text-logo.png",
                width: 800,
                height: 600,
                alt: "Smart it - Building & Facility Management Milano",
            },
        ],
        locale: "it_IT",
    },
    twitter: {
        card: "summary_large_image",
        title: "Smart it - Building & Facility Management",
        description:
            "Pulizie professionali e servizi di building & facility management a Milano, Assago, Buccinasco e in tutta la Lombardia. Specialisti in pulizie professionali, manutenzioni, imbiancature, traslochi, facchinaggio, magazzinaggio, manutenzione del verde e portierato.",
        images: ["https://www.smartit-srl.com/no-text-logo.png"],
    },
    alternates: {
        canonical: "https://www.smartit-srl.com/",
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
