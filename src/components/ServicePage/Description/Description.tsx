import styles from "./Description.module.css";

interface DescriptionProps {
    description: string;
}

export const Description = ({ description }: DescriptionProps) => {
    // Split on every line, preserving empty lines
    const splitted = description.split(/\r?\n/);

    return (
        <section className={styles.descriptionSection}>
            <div className={styles.descriptionContainer}>
                {splitted.map((part, idx) =>
                    part.trim() === ""
                        ? <p className={styles.text} key={idx}>&nbsp;</p>
                        : <p
                            className={idx === 0 ? `${styles.text} ${styles.lead}` : styles.text}
                            key={idx}
                        >
                            {part}
                        </p>
                )}
            </div>
        </section>
    );
};