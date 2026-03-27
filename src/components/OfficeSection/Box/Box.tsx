import { Eye, LensConcave, Phone } from "lucide-react";
import { Benefits } from "./Benefits/Benefits";
import { Contacts } from "./Contacts/Contacts";
import { contacts, siteContent } from "../../../content/global";
import styles from "./Box.module.css";
import Link from "next/link";
import { routes } from "@/src/lib/routes";

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
                    <Link href={routes.office} className={styles.cta}>
                        <div
                            className={styles.ctaButton}
                        >
                            <Eye size={22} />
                            Scopri di piu
                        </div>
                    </Link>
                </div>
                <div className={styles.imageWrapper}>
                    <img
                        src="/office-section.jpg"
                        alt="Punto Smart it"
                        className={styles.image}
                    />
                    <div className={styles.overlay}></div>
                </div>
            </div>
        </div>
    );
};