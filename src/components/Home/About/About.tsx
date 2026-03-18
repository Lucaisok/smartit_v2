import styles from "./About.module.css";
import { siteContent } from "../../../content/global";

const about = siteContent.home.about;

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
                <p className={styles.description + " " + styles.none}>Offriamo anche servizi di accoglienza, portierato e sicurezza, garantendo un ambiente ordinato, funzionale e accogliente per clienti e dipendenti. Il nostro obiettivo è diventare il vostro punto di riferimento per tutte le esigenze di gestione e cura degli spazi aziendali, industriali e direzionali.</p>
            </div>
        </section>
    );
};
