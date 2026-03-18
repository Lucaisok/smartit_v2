import { aboutStructuredData } from "@/src/lib/seo/about";
import { aboutMetadata } from "@/src/lib/seo/about";

export const metadata = aboutMetadata;
import { Contacts } from "@/src/components/AboutPage/Contacts/Contacts";
import { Hero } from "@/src/components/AboutPage/Hero/Hero";
import { Info } from "@/src/components/AboutPage/Info/Info";
import { MissionSection } from "@/src/components/AboutPage/Mission/MissionSection";
import { ValuesSection } from "@/src/components/AboutPage/Values/ValuesSection";
import { WhyUsSection } from "@/src/components/AboutPage/WhyUs/WhyUsSection";

export default function About() {
    return (
        <>
            <script type="application/ld+json">
                {JSON.stringify(aboutStructuredData)}
            </script>
            <main>
                <Hero />
                <Info />
                <ValuesSection />
                <WhyUsSection />
                <MissionSection />
                <Contacts />
            </main>
        </>
    );
}