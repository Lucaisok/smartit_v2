import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";
import { siteContent } from "../../../content/global";
import { routes } from "../../../lib/routes";

const hero = siteContent.home.hero;

export const Hero = () => {
    return (
        <section className={styles.section}>
            <div className={styles.overlay}>
                <img
                    src="/hero-bg.jpg"
                    alt={hero.imageAlt}
                    className={styles.overlayImage}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.inner}>
                    <h1 className={styles.title}>
                        {hero.titleStart} <span className={styles.titleHighlight}>{hero.titleHighlight}</span> <span className={styles.titleLocation}></span>
                    </h1>
                    <p className={styles.description}>
                        {hero.description}
                    </p>
                    <div className={styles.buttons}>
                        <Link href={routes.contacts} className={styles.btnPrimary}>
                            {hero.primaryCta}
                            <ArrowRight size={22} />
                        </Link>
                        <Link href={routes.services} className={styles.btnSecondary}>
                            {hero.secondaryCta}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};