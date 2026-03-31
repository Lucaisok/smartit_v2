import { Home, Briefcase, Users, Mail, Building2 } from "lucide-react";
import { siteContent } from "../content/global";
import { routes } from "./routes";

export const menuItems = {
    home: { href: routes.home, label: siteContent.header.homeLabel, icon: Home },
    services: { href: routes.services, label: siteContent.header.serviziLabel, icon: Briefcase },
    about: { href: routes.about, label: siteContent.header.chiSiamoLabel, icon: Users },
    contact: { href: routes.contacts, label: siteContent.header.contattiLabel, icon: Mail },
    office: { href: routes.office, label: siteContent.header.officeLabel, icon: Building2 },
    privacyPolicy: { href: routes.privacyPolicy, label: siteContent.privacyPolicy, icon: null },
};