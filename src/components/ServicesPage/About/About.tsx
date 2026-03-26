import styles from "./AboutDescription.module.css";
import { siteContent } from "../../../content/global";

export const About = () => {
    const about = siteContent.servicesPage.about;
    // Split on every line, preserving empty lines
    const splitted = about.description.split(/\r?\n/);

    return (
        <section className={styles.descriptionSection}>
            <div className={styles.descriptionContainer}>
                <p className={styles.lead}>{about.title}</p>
                {splitted.map((part, idx) =>
                    part.trim() === ""
                        ? <p className={styles.text} key={idx}>&nbsp;</p>
                        : <p
                            className={styles.text}
                            key={idx}
                        >
                            {part}
                        </p>
                )}
            </div>
        </section>
    );
};