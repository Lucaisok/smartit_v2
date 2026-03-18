import type { Metadata } from "next";

export const aboutMetadata: Metadata = {
    title: "Chi Siamo | Smart it - Facility Management Milano",
    description: "Scopri la storia, i valori e la missione di Smart it. Azienda leader nel facility management a Milano, Assago e Buccinasco. Esperienza, innovazione e servizi su misura per aziende e condomini.",
    keywords: [
        "chi siamo Smart it",
        "facility management Milano",
        "azienda pulizie Milano",
        "valori Smart it",
        "missione Smart it",
        "team Smart it",
        "servizi professionali Milano",
        "manutenzione uffici Milano",
        "pulizie uffici Milano",
        "Smart it Milano",
        "azienda servizi Milano"
    ],
    openGraph: {
        title: "Chi Siamo | Smart it - Facility Management Milano",
        description: "Scopri la storia, i valori e la missione di Smart it. Azienda leader nel facility management a Milano, Assago e Buccinasco. Esperienza, innovazione e servizi su misura per aziende e condomini.",
        url: "https://www.smartit-srl.com/chi-siamo",
        type: "website",
        images: [
            {
                url: "https://www.smartit-srl.com/public/no-text-logo.png",
                width: 800,
                height: 600,
                alt: "Smart it - Chi Siamo Milano"
            }
        ],
        locale: "it_IT"
    },
    twitter: {
        card: "summary_large_image",
        site: "@smartitmilano",
        title: "Chi Siamo | Smart it - Facility Management Milano",
        description: "Scopri la storia, i valori e la missione di Smart it. Azienda leader nel facility management a Milano, Assago e Buccinasco. Esperienza, innovazione e servizi su misura per aziende e condomini.",
        images: ["https://www.smartit-srl.com/public/no-text-logo.png"]
    },
    alternates: {
        canonical: "https://www.smartit-srl.com/chi-siamo",
        languages: {
            "it-IT": "/chi-siamo",
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

export const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Chi Siamo | Smart it - Facility Management Milano",
    "url": "https://www.smartit-srl.com/chi-siamo",
    "description": "Scopri la storia, i valori e la missione di Smart it. Azienda leader nel facility management a Milano, Assago e Buccinasco. Esperienza, innovazione e servizi su misura per aziende e condomini.",
    "publisher": {
        "@type": "Organization",
        "name": "Smart it",
        "url": "https://www.smartit-srl.com"
    }
};
