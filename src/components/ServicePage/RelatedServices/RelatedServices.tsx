
import { siteContent } from "@/src/content/global";
import { routes } from "@/src/lib/routes";
import { Service } from "@/src/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import styles from "./RelatedServices.module.css";
import { AdditionalServiceCard } from "../../AdditionalServiceCard/AdditionalServiceCard";

interface RelatedServicesProps {
    services: Service[];
}
export const RelatedServices = ({ services }: RelatedServicesProps) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{siteContent.home.mainServicesSection.otherServices}</h2>
                    <p className={styles.subtitle}>{siteContent.home.mainServicesSection.otherServicesDescription}</p>
                </div>
                <div className={styles.grid}>
                    {services.map((service) => (
                        <AdditionalServiceCard additionalService={service} key={service.id} />
                    ))}
                </div>
                <div className={styles.cta}>
                    <Link href={routes.services} className={styles.link}>
                        {siteContent.home.additionalServicesSection.ctaLabel}
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};