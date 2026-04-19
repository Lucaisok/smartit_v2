import { About } from "@/src/components/ServicesPage/About/About";
import { Contacts } from "@/src/components/ServicesPage/Contacts/Contacts";
import { Hero } from "@/src/components/ServicesPage/Hero/Hero";
import { ServicesSection } from "@/src/components/ServicesPage/ServicesSection/ServicesSection";
import { servicesMetadata, servicesStructuredData } from "@/src/lib/seo/services";

export const metadata = servicesMetadata;

export default function Services() {
    return (
        <>
            <script type="application/ld+json" suppressHydrationWarning>
                {JSON.stringify(servicesStructuredData)}
            </script>
            <main>
                <Hero />
                <About />
                <ServicesSection />
                <Contacts />
            </main>
        </>
    );
}