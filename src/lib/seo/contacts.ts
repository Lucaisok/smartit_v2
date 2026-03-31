import type { Metadata } from "next";

export const contactsMetadata: Metadata = {
    title: "Contatti | Smart it - Building & Facility Management",
    description:
        "Contatta Smart it per informazioni, preventivi o richieste sui nostri servizi di facility management a Milano. Rispondiamo rapidamente via telefono, email o WhatsApp.",
    alternates: {
        canonical: "https://www.smartit-srl.com/contatti",
    },
    openGraph: {
        title: "Contatti | Smart it - Building & Facility Management",
        description:
            "Contatta Smart it per informazioni, preventivi o richieste sui nostri servizi di building & facility management a Milano. Rispondiamo rapidamente via telefono, email o WhatsApp.",
        url: "https://www.smartit-srl.com/contatti",
        siteName: "Smart it",
        locale: "it_IT",
        type: "website",
        images: [
            {
                url: "https://www.smartit-srl.com/public/no-text-logo.png",
                width: 800,
                height: 600,
                alt: "Smart it - Building & Facility Management Milano",
            },
        ],
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

export const contactsStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contatti | Smart it - Building & Facility Management Milano",
    "url": "https://www.smartit-srl.com/contatti",
    "description":
        "Contatta Smart it per informazioni, preventivi o richieste sui nostri servizi di building & facility management a Milano. Rispondiamo rapidamente via telefono, email o WhatsApp.",
    "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Smart it",
        "image": "https://www.smartit-srl.com/public/no-text-logo.png",
        "@id": "https://www.smartit-srl.com",
        "url": "https://www.smartit-srl.com",
        "telephone": "+39 02828 605 83",
        "email": "Info@smartit-srl.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Palazzo dei Congressi, Milanofiori, Assago (MI)",
            "addressLocality": "Milano",
            "addressCountry": "IT"
        },
        "openingHours": "Mo-Fr 09:00-18:00",
        "areaServed": ["Milano", "Assago", "Buccinasco"],
        "description":
            "Pulizie professionali a Milano, Assago, Buccinasco e facility management. Specializzati in pulizie professionali, manutenzioni, imbiancature, traslochi, facchinaggio, magazzinaggio, manutenzione del verde e servizi di portierato."
    }
};
