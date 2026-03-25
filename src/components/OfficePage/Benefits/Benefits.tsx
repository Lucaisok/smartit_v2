
import { Calendar, Lightbulb, Users } from "lucide-react";
import styles from "./Benefits.module.css";

const benefits = [
    {
        icon: Users,
        title: "Consulenza Personalizzata",
        description: "Incontro diretto con i nostri esperti per analizzare le tue esigenze specifiche"
    },
    {
        icon: Lightbulb,
        title: "Soluzioni Su Misura",
        description: "Proposte personalizzate basate sulle caratteristiche dei tuoi spazi"
    },
    {
        icon: Calendar,
        title: "Preventivi Immediati",
        description: "Risposta rapida con preventivi dettagliati e senza impegno"
    }
];

export const Benefits = () => {
    return (
        <section className={styles.benefitsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Cosa Puoi Fare al <span className={styles.titleHighlight}>Punto Smart it</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Il nostro ufficio è molto più di un semplice punto informativo.
                        È il luogo dove le tue esigenze diventano soluzioni concrete.
                    </p>
                </div>
                <div className={styles.benefitsGrid}>
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div key={index} className={styles.benefitCard}>
                                <div className={styles.iconWrap}>
                                    <Icon size={32} />
                                </div>
                                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                <p className={styles.benefitDesc}>{benefit.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};