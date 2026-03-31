"use client";
import { contacts, siteContent } from "@/src/content/global";
import { routes } from "@/src/lib/routes";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import styles from "./Contacts.module.css";
import { useIsMobile } from "@/src/hooks/useIsMobile";

interface ContactsProps {
    serviceTitle: string;
}

export const Contacts = ({ serviceTitle }: ContactsProps) => {
    const content = siteContent.servicePage;
    const isMobile = useIsMobile();

    return (
        <section className={styles.contactsSection}>
            <div className={styles.contactsContainer}>
                <h2 className={styles.title}>
                    {`${content.ctaTitle} ${serviceTitle}?`}
                </h2>
                <p className={styles.subtitle}>{content.ctaSubtitle}</p>
                <div className={styles.actions}>
                    <Link href={routes.contacts} className={styles.button}>
                        {content.ctaButton}
                        <ArrowRight size={20} />
                    </Link>
                    {!isMobile
                        ? <a href={`tel:${contacts.hrefPhoneNumber}`} className={styles.call}>
                            {content.ctaCall}
                        </a>
                        : (
                            <a
                                href={contacts.whatsappHref}
                                className={styles.call}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageCircle size={16} />  {"Inviaci un messaggio"}
                            </a>
                        )}
                </div>
            </div>
        </section>
    );
};