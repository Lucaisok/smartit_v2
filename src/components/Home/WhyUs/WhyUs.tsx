import {
    CheckCircle2,
    Clock,
    Award,
    HeadphonesIcon
} from "lucide-react";
import styles from "./WhyUs.module.css";
import { siteContent } from "../../../content/global";

const whyUsContent = siteContent.home.whyUs;

const whyChooseUs = [
    {
        icon: Award,
        title: whyUsContent.consolidatedExperienceTitle,
        description: whyUsContent.consolidatedExperienceDescription,
    },
    {
        icon: CheckCircle2,
        title: whyUsContent.certifiedQualityTitle,
        description: whyUsContent.certifiedQualityDescription,
    },
    {
        icon: Clock,
        title: whyUsContent.h24AvailabilityTitle,
        description: whyUsContent.h24AvailabilityDescription,
    },
    {
        icon: HeadphonesIcon,
        title: whyUsContent.dedicatedSupportTitle,
        description: whyUsContent.dedicatedSupportDescription,
    },
];

export const WhyUs = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{whyUsContent.title}</h2>
                    <p className={styles.subtitle}>{whyUsContent.subtitle}</p>
                </div>

                <div className={styles.grid}>
                    {whyChooseUs.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className={styles.card}>
                                <div className={styles.iconCircle}>
                                    <Icon size={32} />
                                </div>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                <p className={styles.itemDescription}>{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};