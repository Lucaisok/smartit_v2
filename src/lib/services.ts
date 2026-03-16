import { Building2, Factory, Home, Sparkles, Wrench, Zap } from "lucide-react";
import { siteContent } from "../content/global";
import { Service } from "../types";

export const services: Service[] = [
    {
        id: "1",
        slug: "pulizie-ordinarie",
        title: siteContent.services.routineCleaning.title,
        icon: Sparkles,
        shortDescription: siteContent.services.routineCleaning.shortDescription,
        description: siteContent.services.routineCleaning.description,
        image: "https://images.unsplash.com/photo-1627098241506-344dea0aa27b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzczMzI4Njc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
        title: siteContent.services.deepCleaning.title,
        id: "2",
        slug: "pulizie-straordinarie",
        icon: Zap,
        shortDescription: siteContent.services.deepCleaning.shortDescription,
        description: siteContent.services.deepCleaning.description,
        image: "https://images.unsplash.com/photo-1682037173605-0f84eb310d0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZyUyMG9mZmljZSUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MzMyNzY1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
        id: "3",
        slug: "pulizie-aziende-uffici",
        title: siteContent.services.businessAndOfficeCleaning.title,
        icon: Building2,
        shortDescription: siteContent.services.businessAndOfficeCleaning.shortDescription,
        description: siteContent.services.businessAndOfficeCleaning.description,
        image: "https://images.unsplash.com/photo-1627098241506-344dea0aa27b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzczMzI4Njc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
        id: "4",
        slug: "pulizie-industriali",
        title: siteContent.services.industrialCleaning.title,
        icon: Factory,
        shortDescription: siteContent.services.industrialCleaning.shortDescription,
        description: siteContent.services.industrialCleaning.description,
        image: "https://images.unsplash.com/photo-1763478545926-e988846846f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFpbnRlbmFuY2UlMjB3b3JrZXIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzczMjg0NjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
        id: "5",
        slug: "pulizie-condominiali",
        title: siteContent.services.condominiumCleaning.title,
        icon: Home,
        shortDescription: siteContent.services.condominiumCleaning.shortDescription,
        description: siteContent.services.condominiumCleaning.description,
        image: "https://images.unsplash.com/photo-1769861547797-4803b422eae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzczMzI4Njc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
        title: siteContent.services.maintenance.title,
        id: "6",
        slug: "manutenzioni",
        icon: Wrench,
        shortDescription: siteContent.services.maintenance.shortDescription,
        description: siteContent.services.maintenance.description,
        image: "https://images.unsplash.com/photo-1667344970484-cbcd0885d7f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpbGl0eSUyMG1hbmFnZW1lbnQlMjBtYWludGVuYW5jZSUyMHdvcmtlcnxlbnwxfHx8fDE3NzMzMjc2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
];