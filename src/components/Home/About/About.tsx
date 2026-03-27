import styles from "../../ServicesPage/About/AboutDescription.module.css";
import { siteContent } from "../../../content/global";
import Image from "next/image";

export const About = () => {
    const about = siteContent.home.about;
    const brand = about.brand;
    const brandParts = brand.split(" ");
    const brandJsx = (
        <>
            {brandParts[0]} <span className={styles.brandIt}>{brandParts[1]}</span>
        </>
    );
    const firstLine = `${about.mainIntro} ${about.mainHighlight} ${about.mainLocation}`;

    return (
        <section className={styles.descriptionSection}>
            <div className={styles.descriptionContainer}>
                <p className={`${styles.text} ${styles.lead}`}>{brandJsx} {firstLine}</p>
                <p className={styles.text} style={{ marginBottom: "1rem" }}>{about.description}</p>
                <div className={styles.paragraph}>
                    <p className={styles.text}>{about.paragraph}</p>
                </div>
                <div className={styles.mobileLogoWrapper}>
                    <Image src="/smartSoloLogo.jpg" alt="Logo" width={190} height={190} />
                </div>
            </div>
        </section>
    );
};
