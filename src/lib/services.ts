import { Building2, Factory, Home, Sparkles, Wrench, Paintbrush, Truck, Package, Users, Hammer, BoxIcon, Trees } from "lucide-react";
import { siteContent } from "../content/global";
import { Service } from "../types";

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
        id: "imbiancature",
        slug: "imbiancature",
        title: siteContent.services.imbiancature.title,
        intro: siteContent.services.imbiancature.intro,
        icon: Paintbrush,
        shortDescription: siteContent.services.imbiancature.shortDescription,
        description: siteContent.services.imbiancature.description,
        image: "/services/whitewashing/cover.jpg",
        faqs: siteContent.services.imbiancature.faqs
    }
];

export const additionalServices: Service[] = [
    {
        id: "portierato-reception",
        slug: "portierato-reception",
        title: siteContent.services.reception.title,
        intro: siteContent.services.reception.intro,
        shortDescription: siteContent.services.reception.shortDescription,
        description: siteContent.services.reception.description,
        image: "/services/reception/cover.png",
        icon: Users,
        faqs: siteContent.services.reception.faqs
    },
    {
        id: "allestimento-uffici",
        slug: "allestimento-uffici",
        title: siteContent.services.officeSetup.title,
        intro: siteContent.services.officeSetup.intro,
        shortDescription: siteContent.services.officeSetup.shortDescription,
        description: siteContent.services.officeSetup.description,
        image: "/services/officeSetup/cover.jpg",
        icon: Package,
        faqs: siteContent.services.officeSetup.faqs
    },
    {
        id: "traslochi-movimentazioni-arredi",
        slug: "traslochi-movimentazioni-arredi",
        title: siteContent.services.moving.title,
        intro: siteContent.services.moving.intro,
        shortDescription: siteContent.services.moving.shortDescription,
        description: siteContent.services.moving.description,
        image: "/services/moving/cover.jpg",
        icon: Truck,
        faqs: siteContent.services.moving.faqs
    },
    {
        id: "interventi-di-restyling",
        slug: "interventi-di-restyling",
        title: siteContent.services.smallConstructions.title,
        intro: siteContent.services.smallConstructions.intro,
        shortDescription: siteContent.services.smallConstructions.shortDescription,
        description: siteContent.services.smallConstructions.description,
        image: "/services/smallConstruction/cover.jpg",
        icon: Hammer,
        faqs: siteContent.services.smallConstructions.faqs
    },
    {
        id: "facchinaggio-magazzinaggio",
        slug: "facchinaggio-magazzinaggio",
        title: siteContent.services.warehouse.title,
        intro: siteContent.services.warehouse.intro,
        shortDescription: siteContent.services.warehouse.shortDescription,
        description: siteContent.services.warehouse.description,
        image: "/services/warehouse/cover.jpg",
        icon: BoxIcon,
        faqs: siteContent.services.warehouse.faqs
    },
    {
        id: "manutenzione-verde",
        slug: "manutenzione-verde",
        title: siteContent.services.gardening.title,
        intro: siteContent.services.gardening.intro,
        shortDescription: siteContent.services.gardening.shortDescription,
        description: siteContent.services.gardening.description,
        image: "/services/gardening/cover.jpg",
        icon: Trees,
        faqs: siteContent.services.gardening.faqs
    }
];