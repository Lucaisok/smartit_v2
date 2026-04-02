import styles from "./Hero.module.css";
import { siteContent } from "@/src/content/global";
import Image from "next/image";

export const Hero = () => {
    const hero = siteContent.servicesPage.hero;
    return (
        <section className={styles.section}>
            <div className={styles.overlay}>
                <Image
                    src={hero.image}
                    alt={hero.imageAlt}
                    fill
                    priority
                    quality={80}
                    sizes="100vw"
                    className={styles.overlayImage}
                />
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    <span className={styles.hideMobile}>{hero.titleStart}</span> <span className={styles.titleHighlight}>{hero.titleHighlight}</span>
                </h1>
                <p className={styles.description}>{hero.description1}</p>
            </div>
        </section>
    );
};