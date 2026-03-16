import { Home, Briefcase, Users, Mail } from "lucide-react";
import { siteContent } from "../content/global";
import { routes } from "./routes";

export const menuItems = {
    home: { href: routes.home, label: siteContent.header.homeLabel, icon: Home },
    services: { href: routes.services, label: siteContent.header.serviziLabel, icon: Briefcase },
    about: { href: routes.about, label: siteContent.header.chiSiamoLabel, icon: Users },
    contact: { href: routes.contact, label: siteContent.header.contattiLabel, icon: Mail },
};