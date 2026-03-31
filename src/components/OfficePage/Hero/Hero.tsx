
import { Building2, Navigation, Phone } from "lucide-react";
import styles from "./Hero.module.css";
import { contacts, siteContent } from "@/src/content/global";

export const Hero = () => {
    const content = siteContent.officePage;
    return (
        <section className={styles.heroSection}>
            <div className={styles.bgOverlay}></div>
            <img
                src="https://images.unsplash.com/photo-1774192620896-98d79d750e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjByZWNlcHRpb24lMjBkZXNrJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NDQ0Nzc2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Punto Smart it"
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
                </div>
            </div>
        </section>
    );
};