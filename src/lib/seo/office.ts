import type { Metadata } from "next";

export const officeMetadata: Metadata = {
    title: "Punto Smart it | Ufficio e Consulenze - Facility Management Milano",
    description:
        "Vieni a trovarci al Punto Smart it a Milanofiori Assago: consulenze gratuite, sopralluoghi e preventivi personalizzati per servizi di facility management, pulizie e manutenzioni a Milano e Lombardia.",
    keywords: [
        "Punto Smart it",
        "ufficio Smart it",
        "consulenza gratuita Milano",
        "sopralluogo gratuito Milano",
        "facility management Milanofiori",
        "servizi pulizia Assago",
        "manutenzione uffici Milano",
        "preventivo facility management Milano",
        "Smart it Milanofiori",
        "servizi professionali Milano",
        "ufficio servizi Milano"
    ],
    openGraph: {
        title: "Punto Smart it | Ufficio e Consulenze - Facility Management Milano",
        description:
            "Vieni a trovarci al Punto Smart it a Milanofiori Assago: consulenze gratuite, sopralluoghi e preventivi personalizzati per servizi di facility management, pulizie e manutenzioni a Milano e Lombardia.",
        url: "https://www.smartit-srl.com/punto-smartit",
        type: "website",
        images: [
            {
                url: "https://www.smartit-srl.com/public/no-text-logo.png",
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
        title: "Punto Smart it | Ufficio e Consulenze - Facility Management Milano",
        description:
            "Vieni a trovarci al Punto Smart it a Milanofiori Assago: consulenze gratuite, sopralluoghi e preventivi personalizzati per servizi di facility management, pulizie e manutenzioni a Milano e Lombardia.",
        images: ["https://www.smartit-srl.com/public/no-text-logo.png"]
    },
    alternates: {
        canonical: "https://www.smartit-srl.com/punto-smartit",
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
