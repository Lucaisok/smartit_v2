
import { routes } from "@/src/lib/routes";
import { ArrowLeft, LucideIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "./Badge";
import styles from "./Hero.module.css";
import { siteContent } from "@/src/content/global";
import Image from "next/image";

interface HeroProps {
    title: string;
    image: string;
    Icon: LucideIcon;
    shortDescription: string;
}
export const Hero = ({ title, image, Icon, shortDescription }: HeroProps) => {
    const content = siteContent.servicePage;
    return (
        <section className={styles.heroSection}>
            <div className={styles.bgImage}>
                <Image src={image} alt={title} fill priority quality={80} sizes="100vw" className={styles.bgImage} />
            </div>
            <div className={styles.overlay} />
            <div className={styles.heroContent}>
                <Link href={routes.services} className={styles.backLink}>
                    <ArrowLeft size={20} />
                    {content.backToServices}
                </Link>
                <div className={styles.heroRow}>
                    <div className={styles.iconBox}>
                        <Icon size={32} />
                    </div>
                    <div>
                        <h1 className={styles.heroTitle}>{title}</h1>
                        <p className={styles.heroDesc}>{shortDescription}</p>
                        <div className={styles.badges}>
                            <Badge title={content.freeConsultation} />
                            <Badge title={content.freeInspection} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};