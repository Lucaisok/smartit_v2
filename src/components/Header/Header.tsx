"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { MobileNavigation } from "./MobileNavigation";
import Link from "next/link";
import { siteContent } from "@/src/content/global";
import { routes } from "@/src/lib/routes";
import styles from "./Header.module.css";
import { menuItems } from "@/src/lib/menuItems";

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.inner}>
                    {/* Logo */}
                    <Link href={routes.home} className={styles.logoLink}>
                        <Image src="/no-text-logo.png" alt={siteContent.header.logoAlt} width={667} height={164} className={styles.logo} priority />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={styles.desktopNav}>
                        <Link href={menuItems.services.href} className={styles.navLink}>
                            {menuItems.services.label}
                        </Link>
                        <Link href={menuItems.about.href} className={styles.navLink}>
                            {menuItems.about.label}
                        </Link>
                        <Link href={menuItems.contact.href} className={styles.navLink}>
                            {menuItems.contact.label}
                        </Link>
                        <Link href={menuItems.office.href} className={styles.navLink}>
                            {menuItems.office.label}
                        </Link>
                        <div
                            className={styles.ctaLink}
                        >
                            {siteContent.header.ctaLabel}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.menuButton}
                        onClick={() => toggleMenu()}
                    >
                        {mobileMenuOpen ? <X size={28} className={styles.menuIconOpen} strokeWidth={2.5} /> : <Menu size={28} className={styles.menuIcon} strokeWidth={2.5} />}
                    </button>
                </div>
                <MobileNavigation mobileMenuOpen={mobileMenuOpen} toggleMenu={toggleMenu} />
            </nav>
        </header>
    );
};