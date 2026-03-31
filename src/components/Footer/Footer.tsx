import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import { contacts, siteContent } from "@/src/content/global";
import { menuItems } from "@/src/lib/menuItems";
import { services } from "@/src/lib/services";

export const Footer = () => {
    const text = siteContent.footer;

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div>
                        <div className={styles.logoBox}>
                            <Image src="/smartit-logo.png" alt={text.logoAlt} width={667} height={164} className={styles.logo} />
                        </div>
                        <p className={styles.muted}>{text.companyDescription}</p>
                    </div>

                    <div>
                        <h3 className={styles.title}>{text.quickLinksTitle}</h3>
                        <ul className={styles.list}>
                            <li><Link href={menuItems.home.href} className={styles.link}>{menuItems.home.label}</Link></li>
                            <li><Link href={menuItems.services.href} className={styles.link}>{menuItems.services.label}</Link></li>
                            <li><Link href={menuItems.about.href} className={styles.link}>{menuItems.about.label}</Link></li>
                            <li><Link href={menuItems.contact.href} className={styles.link}>{menuItems.contact.label}</Link></li>
                            <li><Link href={menuItems.privacyPolicy.href} className={styles.link}>{menuItems.privacyPolicy.label}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className={styles.title}>{text.servicesTitle}</h3>
                        <ul className={styles.servicesList}>
                            {services.slice(0, 5).map((service) => (
                                <li key={service.id}>{service.title}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className={styles.title}>{text.contactTitle}</h3>
                        <ul className={styles.contactList}>
                            <li className={styles.contactItem}>
                                <Phone size={20} className={styles.contactIcon} />
                                <a href={contacts.hrefPhoneNumber} className={`${styles.link} ${styles.smallText}`}>
                                    {text.phone}
                                </a>
                            </li>
                            <li className={styles.contactItem}>
                                <Mail size={20} className={styles.contactIcon} />
                                <a href={`mailto:${text.email}`} className={`${styles.link} ${styles.smallText}`}>
                                    {text.email}
                                </a>
                            </li>
                            <li className={`${styles.contactItem} ${styles.contactItemTop}`}>
                                <MapPin size={20} className={`${styles.contactIcon} ${styles.contactIconTop}`} />
                                <span className={styles.smallText}>{text.city}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© 2026 {text.copyrightSuffix}</p>
                </div>
            </div>
        </footer>
    );
};