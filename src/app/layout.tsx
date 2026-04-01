import type { Metadata } from "next";
import { siteMetadata, siteStructuredData } from "../lib/seo/site";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { CookieBanner } from "../components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...siteMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="canonical" href="https://smartit-srl.com/" />
        <link rel="alternate" href="/" hrefLang="it-IT" />
        <script type="application/ld+json">
          {JSON.stringify(siteStructuredData.organization)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(siteStructuredData.localBusiness)}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <ScrollToTop />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
