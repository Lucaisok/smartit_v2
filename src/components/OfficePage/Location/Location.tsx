
import { ArrowRight, Car, MapPin, Navigation } from "lucide-react";
import styles from "./Location.module.css";
import { contacts } from "@/src/content/global";

export const Location = () => {

    return (
        <section className={styles.locationSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Come <span className={styles.titleHighlight}>Raggiungerci</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Il Palazzo dei Congressi Milanofiori è facilmente raggiungibile con qualsiasi mezzo
                    </p>
                </div>
                <div className={styles.cardsGrid}>
                    <div className={styles.card}>
                        <div className={styles.iconWrap}>
                            <Car size={32} />
                        </div>
                        <h3 className={styles.cardTitle}>In Auto</h3>
                        <p className={styles.cardDesc}>
                            Comodo parcheggio disponibile presso il Palazzo dei Congressi.
                            Facilmente raggiungibile dalla Tangenziale Ovest di Milano.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.iconWrap}>
                            <Navigation size={32} />
                        </div>
                        <h3 className={styles.cardTitle}>Con i Mezzi</h3>
                        <p className={styles.cardDesc}>
                            Fermata Metro M2 &quot;Assago Milanofiori Forum&quot; a pochi minuti a piedi.
                            Diverse linee di autobus collegano la zona con Milano centro.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.iconWrap}>
                            <MapPin size={32} />
                        </div>
                        <h3 className={styles.cardTitle}>Posizione</h3>
                        <p className={styles.cardDesc}>
                            Nel cuore di Milanofiori, zona strategica tra Milano, Assago e Buccinasco.
                            Vicino al Forum di Assago e ai principali centri commerciali.
                        </p>
                    </div>
                </div>
                <div className={styles.ctaWrap}>
                    <a
                        href={contacts.mapsURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaBtn}
                    >
                        <Navigation size={22} />
                        Apri Google Maps
                        <ArrowRight size={20} />
                    </a>
                </div>
            </div>
        </section >
    );
};