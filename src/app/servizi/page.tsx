import { About } from "@/src/components/ServicesPage/About/About";
import { Contacts } from "@/src/components/ServicesPage/Contacts/Contacts";
import { Hero } from "@/src/components/ServicesPage/Hero/Hero";
import { ServicesSection } from "@/src/components/ServicesPage/ServicesSection/ServicesSection";

export default function Services() {
    return (
        <main>
            <Hero />
            <About />
            <ServicesSection />
            <Contacts />
        </main>
    );
}