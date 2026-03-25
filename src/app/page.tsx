import { Hero } from "../components/Home/Hero/Hero";
import { About } from "../components/Home/About/About";
import { Contacts } from "../components/Home/Contacts/Contacts";
import { WhyUs } from "../components/Home/WhyUs/WhyUs";
import { MainServicesSection } from "../components/Home/MainServicesSection/MainServicesSection";
import { AdditionalServicesSection } from "../components/Home/AdditionalServicesSection/AdditionalServicesSection";
import { homeMetadata, homeStructuredData } from "../lib/seo/home";
import Head from "next/head";
import { OfficeSection } from "../components/Office/OfficeSection";

export const metadata = homeMetadata;

export default function Home() {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(homeStructuredData)}
        </script>
      </Head>
      <main>
        <Hero />
        <About />
        <MainServicesSection />
        <AdditionalServicesSection />
        <WhyUs />
        <OfficeSection />
        <Contacts />
      </main>
    </>
  );
}
