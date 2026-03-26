import { Building2, Factory, Home, Sparkles, Wrench, Paintbrush, Truck, Package, Users, Hammer, BoxIcon, Trees } from "lucide-react";
import { siteContent } from "../content/global";
import { AdditionalService, Service } from "../types";

export const services: Service[] = [
    {
        id: "pulizie-ordinarie-straordinarie",
        slug: "pulizie-ordinarie-straordinarie",
        title: siteContent.services.cleaning.title,
        intro: siteContent.services.cleaning.intro,
        icon: Sparkles,
        shortDescription: siteContent.services.cleaning.shortDescription,
        description: siteContent.services.cleaning.description,
        image: "/services/cleaning/cover.jpg",
        faqs: siteContent.services.cleaning.faqs
    },
    {
        id: "pulizie-aziende-uffici",
        slug: "pulizie-aziende-uffici",
        title: siteContent.services.businessAndOfficeCleaning.title,
        intro: siteContent.services.businessAndOfficeCleaning.intro,
        icon: Building2,
        shortDescription: siteContent.services.businessAndOfficeCleaning.shortDescription,
        description: siteContent.services.businessAndOfficeCleaning.description,
        image: "/services/officeCleaning/cover.png",
        faqs: siteContent.services.businessAndOfficeCleaning.faqs
    },
    {
        id: "pulizie-industriali-post-cantiere",
        slug: "pulizie-industriali-post-cantiere",
        title: siteContent.services.industrialCleaning.title,
        intro: siteContent.services.industrialCleaning.intro,
        icon: Factory,
        shortDescription: siteContent.services.industrialCleaning.shortDescription,
        description: siteContent.services.industrialCleaning.description,
        image: "/services/industrialCleaning/cover.jpg",
        faqs: siteContent.services.industrialCleaning.faqs
    },
    {
        id: "pulizie-condominiali",
        slug: "pulizie-condominiali",
        title: siteContent.services.condominiumCleaning.title,
        intro: siteContent.services.condominiumCleaning.intro,
        icon: Home,
        shortDescription: siteContent.services.condominiumCleaning.shortDescription,
        description: siteContent.services.condominiumCleaning.description,
        image: "/services/condominiumCleaning/cover.jpg",
        faqs: siteContent.services.condominiumCleaning.faqs
    },
    {
        id: "manutenzioni",
        slug: "manutenzioni",
        title: siteContent.services.maintenance.title,
        intro: siteContent.services.maintenance.intro,
        icon: Wrench,
        shortDescription: siteContent.services.maintenance.shortDescription,
        description: siteContent.services.maintenance.description,
        image: "/services/maintenance/cover.jpg",
        faqs: siteContent.services.maintenance.faqs
    },
    {
        title: "Imbiancature",
        intro: "Servizio di imbiancatura professionale per interni ed esterni.",
        id: "imbiancature",
        slug: "imbiancature",
        icon: Paintbrush,
        shortDescription: "Imbiancatura professionale per interni ed esterni, con finiture di alta qualità e attenzione a ogni dettaglio. Dona nuova luce e valore ai tuoi ambienti con un servizio rapido, pulito e su misura per le tue esigenze.",
        description: `Offriamo un servizio di imbiancatura professionale pensato per abitazioni, uffici e spazi commerciali di ogni dimensione. Il nostro obiettivo è valorizzare i tuoi ambienti, donando loro un aspetto fresco, ordinato e accogliente.

Utilizziamo esclusivamente vernici di alta qualità e tecniche avanzate, selezionate per garantire una finitura liscia, uniforme e duratura nel tempo. Ogni intervento viene eseguito con la massima cura, rispettando le esigenze specifiche di ogni cliente e le caratteristiche degli spazi.

Il nostro team di esperti si occupa di tutte le fasi del lavoro: dalla protezione e preparazione delle superfici, alla stesura della pittura, fino alla pulizia finale. Siamo attenti ai dettagli e lavoriamo in modo rapido e ordinato, assicurando un risultato impeccabile che trasforma e valorizza ogni ambiente.`,
        image: "/services/whitewashing/cover.jpg",
        faqs: [
            {
                question: "Quanto tempo richiede un'imbiancatura?",
                answer: "Dipende dalle dimensioni. Un appartamento medio richiede 2-3 giorni."
            },
            {
                question: "Devo spostare i mobili?",
                answer: "Ci occupiamo noi di spostare e proteggere mobili e arredi."
            }
        ]
    }
];

export const additionalServices: AdditionalService[] = [
    {
        title: "Servizi di portierato e reception",
        id: "portierato-reception",
        slug: "portierato-reception",
        intro: "Personale qualificato per accoglienza e gestione delle portinerie.",
        shortDescription: "Personale qualificato per accoglienza e gestione delle portinerie.",
        description: "Descrizione temporanea: servizio di portierato e reception per aziende e condomini.",
        image: "https://images.unsplash.com/photo-1515165562835-c7b7b7b7b7b7?auto=format&fit=crop&w=800&q=80",
        icon: Users,
    },
    {
        title: "Allestimento uffici",
        id: "allestimento-uffici",
        slug: "allestimento-uffici",
        intro: "Progettazione e realizzazione di spazi di lavoro funzionali.",
        shortDescription: "Progettazione e realizzazione di spazi di lavoro funzionali.",
        description: "Descrizione temporanea: servizio di allestimento e organizzazione spazi ufficio.",
        image: "https://images.unsplash.com/photo-1464983953574-0892a7162a8e?auto=format&fit=crop&w=800&q=80",
        icon: Package,
    },
    {
        title: "Traslochi e movimentazione arredi",
        id: "traslochi-movimentazioni-arredi",
        slug: "traslochi-movimentazioni-arredi",
        intro: "Servizi completi di trasloco e movimentazione mobili e attrezzature.",
        shortDescription: "Servizi completi di trasloco e movimentazione mobili e attrezzature.",
        description: "Descrizione temporanea: servizio di traslochi e movimentazione arredi per aziende e privati.",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
        icon: Truck,
    },
    {
        title: "Piccoli lavori edili",
        id: "piccoli-lavori-edili",
        slug: "piccoli-lavori-edili",
        intro: "Interventi edilizi di piccola entità per manutenzione e ristrutturazione.",
        shortDescription: "Interventi edilizi di piccola entità per manutenzione e ristrutturazione.",
        description: "Descrizione temporanea: servizio di piccoli lavori edili e manutenzione.",
        image: "https://images.unsplash.com/photo-1506744038136-462fa3a6a7f0?auto=format&fit=crop&w=800&q=80",
        icon: Hammer,
    },
    {
        title: "Facchinaggio e magazzinaggio",
        id: "facchinaggio-magazzinaggio",
        slug: "facchinaggio-magazzinaggio",
        intro: "Gestione logistica, stoccaggio e movimentazione merci.",
        shortDescription: "Gestione logistica, stoccaggio e movimentazione merci.",
        description: "Descrizione temporanea: servizio di facchinaggio e magazzinaggio per aziende.",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f1d1b?auto=format&fit=crop&w=800&q=80",
        icon: BoxIcon,
    },
    {
        title: "Manutenzione del verde",
        id: "manutenzione-verde",
        slug: "manutenzione-verde",
        intro: "Cura e manutenzione di giardini, aree verdi e spazi esterni.",
        shortDescription: "Cura e manutenzione di giardini, aree verdi e spazi esterni.",
        description: "Descrizione temporanea: servizio di manutenzione del verde e giardinaggio.",
        image: "https://images.unsplash.com/photo-1465101178521-c1fcd5d1b1b1?auto=format&fit=crop&w=800&q=80",
        icon: Trees,
    }
];