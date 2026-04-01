import type { Metadata } from "next";

export const officeMetadata: Metadata = {
    title: "Punto Smart it | Ufficio e Consulenze - Building & Facility Management",
    description:
        "Vieni a trovarci al Punto Smart it a Milanofiori, Assago: consulenze gratuite, sopralluoghi e preventivi personalizzati per servizi di facility management, pulizie e manutenzioni.",
    keywords: [
        "Punto Smart it",
        "ufficio Smart it",
        "consulenza gratuita ",
        "sopralluogo gratuito",
        "facility management",
        "servizi pulizia",
        "manutenzione uffici",
        "preventivo facility management",
        "Smart it",
        "servizi professionali Assago",
        "ufficio servizi Assago"
    ],
    openGraph: {
        title: "Punto Smart it | Ufficio e Consulenze - Building & Facility Management Milano",
        description:
            "Vieni a trovarci al Punto Smart it a Milanofiori Assago: consulenze gratuite, sopralluoghi e preventivi personalizzati per servizi di facility management, pulizie e manutenzioni a Milano e Lombardia.",
        url: "https://smartit-srl.com/punto-smartit",
        type: "website",
        images: [
            {
                url: "https://smartit-srl.com/no-text-logo.png",
                width: 800,
                height: 600,
                alt: "Smart it - Punto Smart it Milanofiori"
            }
        ],
        locale: "it_IT"
    },
    twitter: {
        card: "summary_large_image",
        site: "@smartitmilano",
        title: "Punto Smart it | Ufficio e Consulenze - Building & Facility Management Milano",
        description:
            "Vieni a trovarci al Punto Smart it a Milanofiori Assago: consulenze gratuite, sopralluoghi e preventivi personalizzati per servizi di facility management, pulizie e manutenzioni a Milano e Lombardia.",
        images: ["https://smartit-srl.com/no-text-logo.png"]
    },
    alternates: {
        canonical: "https://smartit-srl.com/punto-smartit",
        languages: {
            "it-IT": "/punto-smartit"
        }
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false
        }
    }
};
