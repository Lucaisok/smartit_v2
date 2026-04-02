
import { Building2, CheckCircle2, Navigation, Phone } from "lucide-react";
import styles from "./Hero.module.css";
import { contacts, siteContent } from "@/src/content/global";
import Image from "next/image";

export const Hero = () => {
    const content = siteContent.officePage;
    return (
        <section className={styles.heroSection}>
            <div className={styles.bgOverlay}></div>
            <Image
                src="/office-hero.jpeg"
                alt="Punto Smart it"
                fill
                priority
                quality={80}
                sizes="100vw"
                className={styles.bgImage}
            />
            <div className={styles.outer}>
                <div className={styles.contentOverlay} aria-hidden="true" />
                <div className={styles.inner}>
                    <div className={styles.badge}>
                        <Building2 size={20} />
                        <span className={styles.badgeText}>{content.badge}</span>
                    </div>
                    <h1 className={styles.title}>
                        <span className={styles.titleLight}>{content.title}</span> <br />
                        <span className={styles.highlight}>{siteContent.header.officeLabel}</span>
                    </h1>
                    <p className={styles.description}>
                        {content.description}
                    </p>
                    <div className={styles.actions}>
                        <a
                            href={contacts.hrefPhoneNumber}
                            className={styles.primaryBtn}
                        >
                            <Phone size={22} />
                            {siteContent.officeSection.contactsLabels.callNow}
                        </a>
                        <a
                            href={contacts.mapsURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.secondaryBtn}
                        >
                            <Navigation size={22} />
                            {content.ctaLabel}
                        </a>
                    </div>
                    <div className={styles.featureCards}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureCardRow}>
                                <div className={styles.featureCardIconBox}>
                                    <CheckCircle2 className={styles.featureCardIcon} size={24} />
                                </div>
                                <div>
                                    <div className={styles.featureCardTitle}>Gestione completa</div>
                                    <div className={styles.featureCardSubtitle}>Tutto per la tua azienda</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureCardRow}>
                                <div className={styles.featureCardIconBox}>
                                    <CheckCircle2 className={styles.featureCardIcon} size={24} />
                                </div>
                                <div>
                                    <div className={styles.featureCardTitle}>Interventi rapidi</div>
                                    <div className={styles.featureCardSubtitle}>Sempre presenti sul territorio</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureCardRow}>
                                <div className={styles.featureCardIconBox}>
                                    <CheckCircle2 className={styles.featureCardIcon} size={24} />
                                </div>
                                <div>
                                    <div className={styles.featureCardTitle}>Soluzioni su misura</div>
                                    <div className={styles.featureCardSubtitle}>Adatte a ogni impresa</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};