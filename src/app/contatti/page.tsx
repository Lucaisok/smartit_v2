import { OfficeSection } from "@/src/components/OfficeSection/OfficeSection";
import { Hero } from "@/src/components/ContactsPage/Hero/Hero";
import { Form } from "@/src/components/ContactsPage/Form/Form";
import { Contacts } from "@/src/components/ContactsPage/Contacts/Contacts";
import styles from "./page.module.css";
import { contactsMetadata, contactsStructuredData } from "@/src/lib/seo/contacts";
import Head from "next/head";


export const metadata = contactsMetadata;

const ContactsPage = () => {
    return (
        <>
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify(contactsStructuredData)}
                </script>
            </Head>
            <main className={styles.mainBg}>
                <Hero />
                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.grid}>
                            <Form />
                            <Contacts />
                        </div>
                    </div>
                </section>
                <OfficeSection />
            </main>
        </>
    );
};

export default ContactsPage;