import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Contacts.module.css";
import { siteContent } from "../../../content/global";
import { routes } from "../../../lib/routes";

const contacts = siteContent.home.contacts;

export const Contacts = () => {
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