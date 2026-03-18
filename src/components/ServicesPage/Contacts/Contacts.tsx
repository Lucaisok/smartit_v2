import { routes } from "@/src/lib/routes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import styles from "./Contacts.module.css";
import { siteContent } from "@/src/content/global";

export const Contacts = () => {
    const contacts = siteContent.servicesPage.contacts;
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>{contacts.title}</h2>
                <p className={styles.description}>{contacts.description}</p>
                <Link href={routes.contact} className={styles.cta}>
                    {contacts.primaryCta}
                    <ArrowRight size={20} />
                </Link>
            </div>
        </section>
    );
};