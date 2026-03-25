
import { InspectionSection } from "../InspectionSection/InspectionSection";
import { Box } from "./Box/Box";
import { Header } from "./Header/Header";
import styles from "./OfficeSection.module.css";

export const OfficeSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Header />
                <Box />
                <InspectionSection />
            </div>
        </section>
    );
};