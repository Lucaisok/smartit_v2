import { Phone } from "lucide-react";
import { Benefits } from "./Benefits/Benefits";
import { Contacts } from "./Contacts/Contacts";
import { siteContent } from "../../../content/global";
import styles from "./Box.module.css";

export const Box = () => {
    const content = siteContent.officeSection.contactsLabels;
    return (
        <div className={styles.box}>
            <div className={styles.grid}>
                <div className={styles.content}>
                    <h3 className={styles.title}>{siteContent.footer.city.split(",")[0]}</h3>
                    <p className={styles.description}>
                        {content.position}
                    </p>
                    <Benefits />
                    <Contacts />
                    <div className={styles.cta}>
                        <a
                            href={`tel:${siteContent.footer.phone.replace(/\s+/g, "")}`}
                            className={styles.ctaButton}
                        >
                            <Phone size={22} />
                            {content.callNow}
                        </a>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <img
                        src="https://images.unsplash.com/photo-1774192620896-98d79d750e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBsb2JieSUyMHJlY2VwdGlvbnxlbnwxfHx8fDE3NzQ0MzI2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Punto Smart it"
                        className={styles.image}
                    />
                    <div className={styles.overlay}></div>
                </div>
            </div>
        </div>
    );
};