import styles from "./About.module.css";
import { siteContent } from "../../../content/global";

const about = siteContent.about;

export const About = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <p className={styles.mainText}>
                    <span className={styles.brand}>{about.brand}</span>{" "}
                    {about.mainIntro} <strong>{about.mainHighlight}</strong>{" "}
                    {about.mainLocation}
                </p>
                <p className={styles.description}>{about.description}</p>
            </div>
        </section>
    );
};
