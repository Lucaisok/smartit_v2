import { ArrowRight } from 'lucide-react';
import { siteContent } from '../../content/global';
import { AdditionalService } from '../../types';
import styles from './AdditionalServiceCard.module.css';

interface AdditionalServiceCardProps {
    additionalService: AdditionalService;
}
export const AdditionalServiceCard = ({ additionalService }: AdditionalServiceCardProps) => {
    const Icon = additionalService.icon;
    const text = siteContent.home.additionalServicesSection;

    return <div className={styles.card}>
        <div className={styles.accentBar}></div>
        <div className={styles.inner}>
            <div className={styles.iconBox}>
                {Icon && <Icon className={styles.icon} size={24} />}
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{additionalService.title}</h3>
                <p className={styles.description}>{additionalService.intro}</p>
                <div className={styles.cta}>
                    <span className={styles.ctaLabel}>{text.cardCtaLabel}</span>
                    <ArrowRight size={16} />
                </div>
            </div>
        </div>
    </div>;
};