import { CheckCircle2 } from "lucide-react";
import { siteContent } from "../../../content/global";
import styles from "./MissionSection.module.css";
import Image from "next/image";
import missionImage from "@/public/aboutPageHero/mission-partnership.jpg";

export const MissionSection = () => {
    const content = siteContent.aboutPage.missionSection;
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={missionImage}
                            alt={content.image.alt}
                            width={1200}
                            height={800}
                            quality={70}
                            sizes="(max-width: 1023px) 100vw, 50vw"
                            className={styles.image}
                        />
                    </div>
                    <div>
                        <h2 className={styles.title}>
                            {content.titleStart}
                            <span className={styles.titleHighlight}>{content.titleHighlight}</span>
                        </h2>
                        <div className={styles.textBlock}>
                            <p className={styles.paragraph}>
                                {content.paragraphs[0]}
                                <strong> {content.paragraphs[1]}</strong>
                            </p>
                            <p className={styles.paragraph}>{content.paragraphs[2]}</p>
                        </div>
                        <ul className={styles.list}>
                            {content.list.map((item: string, idx: number) => (
                                <li className={styles.listItem} key={idx}>
                                    <CheckCircle2 className={styles.listIcon} size={24} />
                                    <span className={styles.listText}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};