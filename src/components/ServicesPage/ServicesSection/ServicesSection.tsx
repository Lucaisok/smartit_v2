import { MainServiceCard } from "../../MainServiceCard/MainServiceCard";
import { additionalServices, services } from "@/src/lib/services";
import styles from "./ServicesSection.module.css";

export const ServicesSection = () => {
    const allServices = [...services, ...additionalServices];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {allServices.map((service) => (
                        <MainServiceCard service={service} key={service.id} />
                    ))}
                </div>
            </div>
        </section>
    );
};