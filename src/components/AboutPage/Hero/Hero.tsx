import { siteContent } from "@/src/content/global";
import styles from "./Hero.module.css";
import Image from "next/image";

export const Hero = () => {
    const content = siteContent.aboutPage.hero;
    return (
        <section className={styles.section}>
            <div className={styles.overlay}>
                <Image
                    src={content.image}
                    alt={content.imageAlt}
                    fill
                    priority
                    quality={80}
                    sizes="100vw"
                    className={styles.overlayImage}
                />
            </div>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <h1 className={styles.title}>
                        {content.titleStart} <span className={styles.titleHighlight}>{content.titleHighlight}</span>
                    </h1>
                    <p className={styles.description}>{content.description}</p>
                </div>
            </div>
        </section>
    );
};