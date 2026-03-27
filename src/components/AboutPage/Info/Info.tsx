import { Award } from "lucide-react";
import { Stats } from "./Stats/Stats";
import styles from "./Info.module.css";
import { siteContent } from "../../../content/global";

export const Info = () => {
    const content = siteContent.aboutPage.info;
    return (
        <section className={styles.infoSection}>
            <div className={styles.infoContainer}>
                <div className={styles.infoGrid}>
                    <div>
                        <div className={styles.infoBadge}>
                            <Award size={20} />
                            <span>{content.badge.label}</span>
                        </div>
                        <h2 className={styles.infoTitle}>
                            {content.titleStart} <span className={styles.infoTitleHighlight}>{content.titleHighlight}</span> {content.titleEnd}
                        </h2>
                        <div>
                            {content.paragraphs.map((p: string, i: number) => (
                                <p className={styles.infoText} style={{ marginBottom: "2rem" }} key={i}>{p}</p>
                            ))}
                        </div>
                    </div>
                    <div className={styles.infoImageWrapper}>
                        <img
                            src={content.image.src}
                            alt={content.image.alt}
                            className={styles.infoImage}
                        />
                        <div className={styles.infoExperience}>
                            <div className={styles.infoExperienceNumber}>{content.experience.number}</div>
                            <div className={styles.infoExperienceLabel}>{content.experience.label}</div>
                        </div>
                    </div>
                </div>
                {/* <Stats /> */}
            </div>
        </section>
    );
};