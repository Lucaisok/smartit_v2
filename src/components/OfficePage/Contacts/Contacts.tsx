import React from "react";
import styles from "./Contacts.module.css";
import { Building2, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { routes } from "../../../lib/routes";
import { siteContent } from "../../../content/global";

const {
    officeSection: {
        cards: { phoneNumber },
    },
} = siteContent;

export default function Contacts() {
    return (
        <section className={styles.contactsSection}>
            <div className={styles.container}>
                <Building2 className={styles.icon} size={64} />
                <h2 className={styles.title}>Ti Aspettiamo al Punto Smart it</h2>
                <p className={styles.desc}>
                    Vieni a trovarci per una consulenza gratuita. Il nostro team è pronto ad ascoltare le tue esigenze e a proporti le soluzioni più adatte.
                </p>
                <div className={styles.actions}>
                    <a
                        href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                        className={styles.primaryBtn}
                    >
                        <Phone size={22} />
                        {`Chiamaci: ${phoneNumber}`}
                    </a>
                    <Link href={routes.contacts} className={styles.secondaryBtn}>
                        Compila il Form
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}