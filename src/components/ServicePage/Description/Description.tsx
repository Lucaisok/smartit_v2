import styles from "./Description.module.css";

interface DescriptionProps {
    description: string;
}

export const Description = ({ description }: DescriptionProps) => {
    // Split on every line, preserving empty lines
    const splitted = description.split(/\r?\n/);
    const renderPart = (part: string) => {
        if (!part.includes("Smart it")) {
            return part;
        }

        const pieces = part.split("Smart it");
        return pieces.map((piece, index) => (
            <span key={index}>
                {piece}
                {index < pieces.length - 1 && <>Smart <span className={styles.highlight}>it</span></>}
            </span>
        ));
    };

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
                            {renderPart(part)}
                        </p>
                )}
            </div>
        </section>
    );
};