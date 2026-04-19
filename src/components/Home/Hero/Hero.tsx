"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2 } from "lucide-react";
import styles from "./Hero.module.css";
import { siteContent } from "../../../content/global";
import { routes } from "../../../lib/routes";
import Image from "next/image";
import heroDesktop from "@/public/hero-bg34.jpg";
import heroMobile from "@/public/hero-bg1.jpg";

export const Hero = () => {
    const hero = siteContent.home.hero;

    return (
        <section className={styles.heroSection}>
            <div className={styles.bgOverlay}></div>
            <Image
                src={heroDesktop}
                alt={hero.imageAlt}
                fill
                priority
                quality={70}
                sizes="(max-width: 767px) 0px, 100vw"
                className={styles.bgImageDesktop}
            />
            <Image
                src={heroMobile}
                alt={hero.imageAlt}
                fill
                priority
                quality={70}
                sizes="(max-width: 767px) 100vw, 0px"
                className={styles.bgImageMobile}
            />
            <div className={styles.outer}>
                <div className={styles.contentOverlay} aria-hidden="true" />
                <div className={styles.inner}>
                    <div className={styles.badge}>
                        <Building2 size={20} />
                        <span className={styles.badgeText}>{"Il tuo Punto di Riferimento"}</span>
                    </div>

                    <h1 className={styles.title}>
                        <span className={styles.titleLight}>{hero.titleStart}</span> <span className={styles.titleHighlight}>{hero.titleHighlight}</span>
                    </h1>
                    <p className={styles.description}>
                        {hero.description}
                    </p>
                    <div className={styles.actions}>
                        <Link href={routes.office} className={styles.primaryBtn}>
                            {siteContent.header.officeLabel}
                            <ArrowRight size={22} />
                        </Link>
                        <Link href={routes.services} className={styles.secondaryBtn}>
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