import { siteContent } from "@/src/content/global";
import styles from "./Hero.module.css";
import Image from "next/image";
import aboutHero from "@/public/aboutPageHero/cover.jpg";

export const Hero = () => {
    const content = siteContent.aboutPage.hero;
    return (
        <section className={styles.section}>
            <div className={styles.overlay}>
                <Image
                    src={aboutHero}
                    alt={content.imageAlt}
                    fill
                    priority
                    quality={70}
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