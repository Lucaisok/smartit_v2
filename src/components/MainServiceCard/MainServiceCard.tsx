import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Service } from '../../types';
import { routes } from '../../lib/routes';
import { siteContent } from '../../content/global';
import styles from './MainServiceCard.module.css';

interface MainServiceCardProp {
    service: Service;
}

export const MainServiceCard: React.FC<MainServiceCardProp> = ({ service }) => {
    const Icon = service.icon;
    const text = siteContent.home.mainServicesSection;

    return (
        <Link
            href={`${routes.services}/${service.slug}`}
            className={styles.card}
        >
            <div className={styles.imageContainer}>
                <img
                    src={service.image}
                    alt={service.title}
                    className={styles.image}
                />
                <div className={styles.imagOverlay}></div>
                <div className={styles.iconWrapper}>
                    {Icon && <Icon className={styles.icon} />}
                </div>
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>
                    {service.intro}
                </p>
                <span className={styles.cta}>
                    {text.ctaLabel}
                    <ArrowRight size={18} />
                </span>
            </div>
        </Link>
    );
};