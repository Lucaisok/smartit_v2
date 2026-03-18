import styles from "./MainServicesSection.module.css";
import { siteContent } from "../../../content/global";
import { services } from "@/src/lib/services";
import { MainServiceCard } from "../../MainServiceCard/MainServiceCard";

export const MainServicesSection = () => {
    const text = siteContent.home.mainServicesSection;
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        {text.titleStart} <span className={styles.titleHighlight}>{text.titleHighlight}</span>
                    </h2>
                    <p className={styles.description}>{text.description}</p>
                </div>
                <div className={styles.grid}>
                    {services.map((service) => {
                        return (
                            <MainServiceCard service={service} key={service.id} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};