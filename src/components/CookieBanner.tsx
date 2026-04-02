'use client';
import { useState, useEffect } from "react";
import styles from "./CookieBanner.module.css";
import { siteContent } from "../content/global";
import { routes } from "../lib/routes";

const COOKIE_KEY = "cookieConsent";

export const CookieBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_KEY);
        if (!consent) {
            const timeoutId = window.setTimeout(() => {
                setVisible(true);
            }, 0);

            return () => {
                window.clearTimeout(timeoutId);
            };
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem(COOKIE_KEY, "accepted");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className={styles.banner}>
            <span>
                {siteContent.privacyPolicyText} {" "}
                <a href={routes.privacyPolicy} target="_blank" rel="noopener noreferrer">{siteContent.privacyPolicy}</a>.
            </span>
            <button className={styles.button} onClick={acceptCookies}>
                {siteContent.acceptButton}
            </button>
        </div>
    );
};
