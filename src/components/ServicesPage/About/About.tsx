import styles from "./About.module.css";
import { siteContent } from "../../../content/global";

export const About = () => {
    const about = siteContent.servicesPage.about;

    return <section className={styles.section}>
        <div className={styles.container}>
            <p className={styles.mainText}>
                {about.title}
            </p>
            <p className={styles.description}>{about.description}</p>
            {/* <p className={styles.description + " " + styles.none}>Offriamo anche servizi di accoglienza, portierato e sicurezza, garantendo un ambiente ordinato, funzionale e accogliente per clienti e dipendenti. Il nostro obiettivo è diventare il vostro punto di riferimento per tutte le esigenze di gestione e cura degli spazi aziendali, industriali e direzionali.</p> */}
        </div>
    </section>;
};