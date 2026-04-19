"use client";
import { Award } from "lucide-react";
import styles from "./Info.module.css";
import { siteContent } from "../../../content/global";
import { useIsMobile } from "@/src/hooks/useIsMobile";
import Image from "next/image";
import teamImage from "@/public/aboutPageHero/team.jpg";

export const Info = () => {
    const content = siteContent.aboutPage.info;
    const isMobile = useIsMobile();

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
                            {content.paragraphs.map((p: string, i: number) => {
                                if (p.includes("Smart it")) {
                                    const parts = p.split("Smart it");
                                    return (
                                        <p className={styles.infoText} style={{ marginBottom: "2rem" }} key={i}>
                                            {parts[0]}Smart <span className={styles.highlight}>it</span>{parts[1]}
                                        </p>
                                    );
                                }
                                return (
                                    <p className={styles.infoText} style={{ marginBottom: "2rem" }} key={i}>{p}</p>
                                );
                            })}
                        </div>
                    </div>
                    {!isMobile && <div className={styles.infoImageWrapper}>
                        <Image
                            src={teamImage}
                            alt={content.image.alt}
                            width={1200}
                            height={800}
                            quality={70}
                            sizes="(max-width: 1023px) 100vw, 50vw"
                            className={styles.infoImage}
                        />
                        <div className={styles.infoExperience}>
                            <div className={styles.infoExperienceNumber}>{content.experience.number}</div>
                            <div className={styles.infoExperienceLabel}>{content.experience.label}</div>
                        </div>
                    </div>}
                </div>
            </div>
        </section>
    );
};