import { CheckCircle2 } from "lucide-react";
import { siteContent } from "../../../../content/global";
import styles from "./Benefits.module.css";

export const Benefits = () => {
    const benefits = siteContent.officeSection.benefits;
    return (
        <div className={styles.benefits}>
            {benefits.map((item: { title: string; subtitle: string; }, idx: number) => (
                <div className={styles.item} key={idx}>
                    <div className={styles.iconWrapper}>
                        <CheckCircle2 className={styles.icon} size={16} />
                    </div>
                    <div className={styles.textBlock}>
                        <p className={styles.title}>{item.title}</p>
                        <p className={styles.subtitle}>{item.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};