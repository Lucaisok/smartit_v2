import { Building2 } from "lucide-react";
import { siteContent } from "../../../content/global";
import styles from "./Header.module.css";

export const Header = () => {
    const content = siteContent.officeSection.header;
    return (
        <div className={styles.header}>
            <div className={styles.badge}>
                <Building2 size={20} />
                <span>{content.badge}</span>
            </div>
            <div style={{ maxWidth: "90%", margin: "auto" }}>
                <p className={styles.title}>{content.title}</p>
                <h2 className={styles.titleHighlight}>{content.titleHighlight}<span className={styles.brand}> Smart it</span></h2>
                <p className={styles.subtitle}>{content.subtitle}</p>
            </div>
        </div>
    );
};