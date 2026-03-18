import styles from "./Hero.module.css";
import { siteContent } from "@/src/content/global";

export const Hero = () => {
    const hero = siteContent.servicesPage.hero;
    return (
        <section className={styles.section}>
            <div className={styles.overlay}>
                <img
                    src={hero.image}
                    alt={hero.imageAlt}
                    className={styles.overlayImage}
                />
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    {hero.titleStart} <span className={styles.titleHighlight}>{hero.titleHighlight}</span>
                </h1>
                <p className={styles.description}>{hero.description1}</p>
            </div>
        </section>
    );
};