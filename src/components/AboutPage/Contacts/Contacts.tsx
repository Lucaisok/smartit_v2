import { routes } from "@/src/lib/routes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteContent } from "../../../content/global";
import styles from "./Contacts.module.css";

export const Contacts = () => {
    const content = siteContent.aboutPage.contactsSection;
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>{content.title}</h2>
                <p className={styles.subtitle}>{content.subtitle}</p>
                <div className={styles.actions}>
                    <Link
                        href={routes.services}
                        className={styles.buttonPrimary}
                    >
                        {content.primaryCta}
                        <ArrowRight size={20} />
                    </Link>
                    <Link
                        href={routes.contacts}
                        className={styles.buttonSecondary}
                    >
                        {content.secondaryCta}
                    </Link>
                </div>
            </div>
        </section>
    );
};