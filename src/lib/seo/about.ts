import type { Metadata } from "next";

export const aboutMetadata: Metadata = {
    title: "Chi Siamo | Smart it - Building & Facility Management",
    description: "Scopri la storia, i valori e la missione di Smart it. Azienda leader nel facility management a Milano, Assago, Buccinasco e in tutta la Lombardia. Esperienza, innovazione e servizi su misura per aziende e condomini.",
    keywords: [
        "chi siamo Smart it",
        "facility management Milano",
        "azienda pulizie Assago",
        "valori Smart it",
        "missione Smart it",
        "team Smart it",
        "servizi professionali Assago",
        "manutenzione uffici Assago",
        "pulizie uffici Assago",
        "Smart it Assago",
        "azienda servizi Assago"
    ],
    openGraph: {
        title: "Chi Siamo | Smart it - Building & Facility Management",
        description: "Scopri la storia, i valori e la missione di Smart it. Azienda leader nel facility management a Milano, Assago, Buccinasco e in tutta la Lombardia. Esperienza, innovazione e servizi su misura per aziende e condomini.",
        url: "https://www.smartit-srl.com/chi-siamo",
        type: "website",
        images: [
            {
                url: "https://www.smartit-srl.com/no-text-logo.png",
                width: 800,
                height: 600,
                alt: "Smart it - Chi Siamo Milano"
            }
        ],
        locale: "it_IT"
    },
    twitter: {
        card: "summary_large_image",
        title: "Chi Siamo | Smart it - Building & Facility Management",
        description: "Scopri la storia, i valori e la missione di Smart it. Azienda leader nel facility management a Milano, Assago, Buccinasco e in tutta la Lombardia. Esperienza, innovazione e servizi su misura per aziende e condomini.",
        images: ["https://www.smartit-srl.com/no-text-logo.png"]
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
    "name": "Chi Siamo | Smart it - Building & Facility Management",
    "url": "https://www.smartit-srl.com/chi-siamo",
    "description": "Scopri la storia, i valori e la missione di Smart it. Azienda leader nel facility management a Milano, Assago, Buccinasco e in tutta la Lombardia. Esperienza, innovazione e servizi su misura per aziende e condomini.",
    "publisher": {
        "@type": "Organization",
        "name": "Smart it",
        "url": "https://www.smartit-srl.com"
    }
};
