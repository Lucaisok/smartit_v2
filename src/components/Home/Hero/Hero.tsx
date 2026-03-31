import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import styles from "./Hero.module.css";
import { siteContent } from "../../../content/global";
import { routes } from "../../../lib/routes";

const hero = siteContent.home.hero;

export const Hero = () => {
    return (
        <section className={styles.section}>
            <div className={styles.overlay}>
                <img
                    src="/hero-bg.jpg"
                    alt={hero.imageAlt}
                    className={styles.overlayImage}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.contentOverlay} aria-hidden="true" />
                <div className={styles.inner}>
                    <h1 className={styles.title}>
                        {hero.titleStart} <span className={styles.titleHighlight}>{hero.titleHighlight}</span> <span className={styles.titleLocation}></span>
                    </h1>
                    <p className={styles.description}>
                        {hero.description}
                    </p>
                    <div className={styles.buttons}>
                        <Link href={routes.office} className={styles.btnPrimary}>
                            {siteContent.header.officeLabel}
                            <ArrowRight size={22} />
                        </Link>
                        <Link href={routes.services} className={styles.btnSecondary}>
                            {hero.secondaryCta}
                        </Link>
                    </div>
                    <div className={styles.featureCards}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureCardRow}>
                                <div className={styles.featureCardIconBox}>
                                    <CheckCircle2 className={styles.featureCardIcon} size={24} />
                                </div>
                                <div>
                                    <div className={styles.featureCardTitle}>{siteContent.servicePage.yearsOfExperience}</div>
                                    <div className={styles.featureCardSubtitle}>{siteContent.servicePage.atYourService}</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureCardRow}>
                                <div className={styles.featureCardIconBox}>
                                    <CheckCircle2 className={styles.featureCardIcon} size={24} />
                                </div>
                                <div>
                                    <div className={styles.featureCardTitle}>{siteContent.servicePage.freeConsultation}</div>
                                    <div className={styles.featureCardSubtitle}>{siteContent.servicePage.guarantee}</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureCardRow}>
                                <div className={styles.featureCardIconBox}>
                                    <CheckCircle2 className={styles.featureCardIcon} size={24} />
                                </div>
                                <div>
                                    <div className={styles.featureCardTitle}>{siteContent.servicePage.freeInspection}</div>
                                    <div className={styles.featureCardSubtitle}>{siteContent.servicePage.guarantee}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};