import { Clock, MapPin, Phone } from "lucide-react";
import { siteContent } from "../../../../content/global";
import styles from "./Contacts.module.css";

export const Contacts = () => {
    const labels = siteContent.officeSection.contactsLabels;
    const footer = siteContent.footer;
    const addressLines = footer.city.split(", ");

    return (
        <div className={styles.contacts}>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <MapPin className={styles.icon} size={24} />
                </div>
                <div className={styles.textBlock}>
                    <h4 className={styles.title}>{labels.addressTitle}</h4>
                    {addressLines.map((line: string, idx: number) => (
                        <p className={styles.value} key={idx}>{line}</p>
                    ))}
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <Phone className={styles.icon} size={24} />
                </div>
                <div className={styles.textBlock}>
                    <h4 className={styles.title}>{labels.phoneTitle}</h4>
                    <a href={`tel:${footer.phone.replace(/\s+/g, "")}`} className={styles.valueStrong}>
                        {footer.phone}
                    </a>
                    <p className={styles.note}>{labels.phoneNote}</p>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <Clock className={styles.icon} size={24} />
                </div>
                <div className={styles.textBlock}>
                    <h4 className={styles.title}>{labels.hoursTitle}</h4>
                    <p className={styles.value}>{labels.hours}</p>
                </div>
            </div>
        </div>
    );
};