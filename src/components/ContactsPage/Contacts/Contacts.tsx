import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import styles from "./Contacts.module.css";
import { contacts, siteContent } from "@/src/content/global";

export const Contacts = () => {
    const footer = siteContent.footer;
    const officeLabels = siteContent.officeSection.contactsLabels;
    return (
        <div className={styles.contactsWrapper}>
            <div className={styles.card}>
                <h2 className={styles.cardTitle}>{footer.contactTitle || "Contatti"}</h2>
                <div className={styles.infoList}>
                    <div className={styles.infoItem}>
                        <div className={styles.iconBox}>
                            <MessageCircle color="#7FB539" size={24} />
                        </div>
                        <div>
                            <div className={styles.infoLabel}>{officeLabels.WhatsApp}</div>
                            <a
                                href={contacts.whatsappHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.whatsappButton}
                            >
                                <MessageCircle size={16} /> {officeLabels.sendMessage}
                            </a>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <div className={styles.iconBox}>
                            <Mail color="#7FB539" size={24} />
                        </div>
                        <div>
                            <div className={styles.infoLabel}>{"Email"}</div>
                            <a href={`mailto:${footer.email}`} className={styles.infoLink}>
                                {footer.email}
                            </a>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <div className={styles.iconBox}>
                            <Phone color="#7FB539" size={24} />
                        </div>
                        <div>
                            <div className={styles.infoLabel}>{officeLabels.phoneTitle}</div>
                            <a
                                href={contacts.hrefPhoneNumber}
                                className={styles.infoLink}
                            >
                                {footer.phone}
                            </a>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <div className={styles.iconBox}>
                            <MapPin color="#7FB539" size={24} />
                        </div>
                        <div>
                            <div className={styles.infoLabel}>{officeLabels.addressTitle}</div>
                            <div className={styles.infoValue}>{footer.city}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.openingCard}>
                <div className={styles.openingTitle}>{officeLabels.hoursTitle}</div>
                <div className={styles.openingRow}>
                    <span>{officeLabels.hours.split(":")[0]}</span>
                    <span>
                        09:00 - 18:00
                    </span>

                </div>
                <div className={styles.openingRow}>
                    <span>Sabato - Domenica</span>
                    <span>
                        Su Richiesta
                    </span>
                </div>
            </div>
        </div>
    );
};