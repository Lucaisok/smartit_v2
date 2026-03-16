import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import styles from "./MobileNavigation.module.css";
import { siteContent } from "@/src/content/global";
import { menuItems } from "@/src/lib/menuItems";

interface MobileNavigationProps {
    mobileMenuOpen: boolean;
    toggleMenu: () => void;
}

export const MobileNavigation = ({ mobileMenuOpen, toggleMenu }: MobileNavigationProps) => {
    const text = siteContent.header;
    const HomeIcon = menuItems.home.icon;
    const ServicesIcon = menuItems.services.icon;
    const AboutIcon = menuItems.about.icon;
    const ContactIcon = menuItems.contact.icon;

    return (
        <AnimatePresence>
            {mobileMenuOpen && (
                <>
                    {/* Backdrop Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles.backdrop}
                        onClick={() => toggleMenu()}
                    />

                    {/* Sliding Menu Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className={styles.panel}
                    >
                        <div className={styles.decorTop} />
                        <div className={styles.decorBottom} />

                        <div className={styles.inner}>
                            {/* Logo */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1, type: "spring" }}
                                className={styles.logoBox}
                            >
                                <div className={styles.logoInner}>
                                    <span className={styles.logoText}>{text.logoLabel}</span>
                                </div>
                            </motion.div>

                            {/* Menu Items */}
                            <div className={styles.menuList}>
                                <motion.div
                                    key={menuItems.home.href}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, type: "spring" }}
                                >
                                    <Link
                                        href={menuItems.home.href}
                                        className={styles.menuLink}
                                        onClick={() => toggleMenu()}
                                    >
                                        <div className={styles.iconBox}>
                                            <HomeIcon className={styles.icon} />
                                        </div>
                                        <span className={styles.menuLabel}>{menuItems.home.label}</span>
                                    </Link>
                                </motion.div>

                                <motion.div
                                    key={menuItems.services.href}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, type: "spring" }}
                                >
                                    <Link
                                        href={menuItems.services.href}
                                        className={styles.menuLink}
                                        onClick={() => toggleMenu()}
                                    >
                                        <div className={styles.iconBox}>
                                            <ServicesIcon className={styles.icon} />
                                        </div>
                                        <span className={styles.menuLabel}>{menuItems.services.label}</span>
                                    </Link>
                                </motion.div>

                                <motion.div
                                    key={menuItems.about.href}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4, type: "spring" }}
                                >
                                    <Link
                                        href={menuItems.about.href}
                                        className={styles.menuLink}
                                        onClick={() => toggleMenu()}
                                    >
                                        <div className={styles.iconBox}>
                                            <AboutIcon className={styles.icon} />
                                        </div>
                                        <span className={styles.menuLabel}>{menuItems.about.label}</span>
                                    </Link>
                                </motion.div>

                                <motion.div
                                    key={menuItems.contact.href}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                >
                                    <Link
                                        href={menuItems.contact.href}
                                        className={styles.menuLink}
                                        onClick={() => toggleMenu()}
                                    >
                                        <div className={styles.iconBox}>
                                            <ContactIcon className={styles.icon} />
                                        </div>
                                        <span className={styles.menuLabel}>{menuItems.contact.label}</span>
                                    </Link>
                                </motion.div>

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, type: "spring" }}
                                    className={styles.ctaWrapper}
                                >
                                    <Link
                                        href={text.ctaHref}
                                        className={styles.ctaLink}
                                        onClick={() => toggleMenu()}
                                    >
                                        <Sparkles className={styles.ctaIcon} />
                                        <span>{text.ctaLabel}</span>
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Footer Info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className={styles.footer}
                            >
                                <p className={styles.footerPrimary}>
                                    {text.mobileFooterPrimary}
                                </p>
                                <p className={styles.footerSecondary}>
                                    {text.mobileFooterSecondary}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};