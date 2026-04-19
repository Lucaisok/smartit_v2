import { Hero } from "../components/Home/Hero/Hero";
import { About } from "../components/Home/About/About";
import { Contacts } from "../components/Home/Contacts/Contacts";
import { WhyUs } from "../components/Home/WhyUs/WhyUs";
import { MainServicesSection } from "../components/Home/MainServicesSection/MainServicesSection";
import { AdditionalServicesSection } from "../components/Home/AdditionalServicesSection/AdditionalServicesSection";
import { homeMetadata, homeStructuredData } from "../lib/seo/home";
import { OfficeSection } from "../components/OfficeSection/OfficeSection";

export const metadata = homeMetadata;

export default function Home() {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(homeStructuredData)}
      </script>
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
