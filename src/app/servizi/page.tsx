import { About } from "@/src/components/ServicesPage/About/About";
import { Contacts } from "@/src/components/ServicesPage/Contacts/Contacts";
import { Hero } from "@/src/components/ServicesPage/Hero/Hero";
import { ServicesSection } from "@/src/components/ServicesPage/ServicesSection/ServicesSection";
import { servicesMetadata, servicesStructuredData } from "@/src/lib/seo/services";
import Head from "next/head";

export const metadata = servicesMetadata;

export default function Services() {
    return (
        <>
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify(servicesStructuredData)}
                </script>
            </Head>
            <main>
                <Hero />
                <About />
                <ServicesSection />
                <Contacts />
            </main>
        </>
    );
}