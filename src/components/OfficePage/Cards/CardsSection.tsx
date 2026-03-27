
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import styles from "./CardsSection.module.css";
import { contacts, siteContent } from "@/src/content/global";

export const CardsSection = () => {
    const cards = siteContent.officeSection.cards;
    return (
        <section className={styles.cardsSection}>
            <div className={styles.container}>
                <div className={styles.cardsGrid}>
                    {/* Address Card */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <MapPin size={28} />
                        </div>
                        <h3 className={styles.cardTitle}>{cards.addressTitle}</h3>
                        <p className={styles.cardText}>{cards.addressLine1}</p>
                        <p className={styles.cardTextSmall}>{cards.addressLine2}</p>
                        <div className={styles.cardSpacer}></div>
                        <a
                            href={contacts.mapsURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.cardLink}
                        >
                            {cards.addressCta}
                            <ArrowRight size={18} />
                        </a>
                    </div>

                    {/* Phone Card */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Phone size={28} />
                        </div>
                        <h3 className={styles.cardTitle}>{cards.phoneTitle}</h3>
                        <a
                            href={contacts.hrefPhoneNumber}
                            className={styles.cardPhone}
                        >
                            {cards.phoneNumber}
                        </a>
                        <p className={styles.cardTextSmall}>{cards.phoneNote}</p>
                        <div className={styles.cardSpacer}></div>
                        <a
                            href={contacts.hrefPhoneNumber}
                            className={styles.cardLink}
                        >
                            {cards.phoneCta}
                            <ArrowRight size={18} />
                        </a>
                    </div>

                    {/* Hours Card */}
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Clock size={28} />
                        </div>
                        <h3 className={styles.cardTitle}>{cards.hoursTitle}</h3>
                        <p className={styles.cardTextStrong}>{cards.hoursDays}</p>
                        <p className={styles.cardTextBrand}>{cards.hoursTime}</p>
                        <p className={styles.cardTextSmall}>
                            {cards.hoursNote}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};