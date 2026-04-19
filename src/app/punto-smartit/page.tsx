
import { Benefits } from "@/src/components/OfficePage/Benefits/Benefits";
import { CardsSection } from "@/src/components/OfficePage/Cards/CardsSection";
import Contacts from "@/src/components/OfficePage/Contacts/Contacts";
import { Hero } from "@/src/components/OfficePage/Hero/Hero";
import { Location } from "@/src/components/OfficePage/Location/Location";
import { officeMetadata } from "@/src/lib/seo/office";
import { officeStructuredData } from "@/src/lib/seo/office-structured";

export const metadata = officeMetadata;


const OfficePage = () => {
    return (
        <>
            <script type="application/ld+json" suppressHydrationWarning>
                {JSON.stringify(officeStructuredData)}
            </script>
            <main>
                <Hero />
                <CardsSection />
                <Benefits />
                <Location />
                <Contacts />
            </main>
        </>
    );
};

export default OfficePage;