import { Hero } from "../components/Home/Hero/Hero";
import { About } from "../components/Home/About/About";
import { Contacts } from "../components/Home/Contacts/Contacts";
import { WhyUs } from "../components/Home/WhyUs/WhyUs";
import { MainServicesSection } from "../components/Home/MainServicesSection/MainServicesSection";
import { AdditionalServicesSection } from "../components/Home/AdditionalServicesSection/AdditionalServicesSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MainServicesSection />
      <AdditionalServicesSection />
      <WhyUs />
      <Contacts />
    </main>
  );
}
