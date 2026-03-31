'use client';
import { Send } from "lucide-react";
import { useState } from "react";
import styles from "./Form.module.css";
import { siteContent } from "@/src/content/global";
import { FORMSPREE_ENDPOINT } from "./formspree";

export const Form = () => {
    const content = siteContent.contactsPage?.form;
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    // Clear status and error on focus
    const handleFocus = () => {
        if (status !== 'idle') {
            setStatus('idle');
            setError(null);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        setError(null);
        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('error');
                setError(data?.error || 'Something went wrong.');
            }
        } catch (err: any) {
            setStatus('error');
            setError(err?.message || 'Something went wrong.');
        }
    };

    return (
        <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>{content.title}</h2>
            {status === 'success' && (
                <div className={styles.success}>{"Grazie per il tuo messaggio! Ti ricontatteremo presto."}</div>
            )}
            {status === 'error' && (
                <div className={styles.error}>{error || "Si è verificato un errore. Riprova."}</div>
            )}
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label className={styles.label}>{content.nameLabel}</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder={"Il tuo nome"}
                        disabled={status === 'submitting'}
                        onFocus={handleFocus}
                    />
                </div>
                <div>
                    <label className={styles.label}>{content.emailLabel}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="your@email.com"
                        disabled={status === 'submitting'}
                        onFocus={handleFocus}
                    />
                </div>
                <div>
                    <label className={styles.label}>{content.phoneLabel}</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="+39 06 1234 5678"
                        disabled={status === 'submitting'}
                        onFocus={handleFocus}
                    />
                </div>
                <div>
                    <label className={styles.label}>{content.messageLabel}</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={styles.textarea}
                        placeholder={"Il tuo messaggio..."}
                        disabled={status === 'submitting'}
                        onFocus={handleFocus}
                    />
                </div>
                <button type="submit" className={styles.button}
                    disabled={status === 'submitting'}
                >
                    <Send size={20} />
                    {status === 'submitting' ? 'Sending...' : content.button}
                </button>
            </form>
        </div>
    );
};