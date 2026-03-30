import type { Metadata } from "next";
import { siteMetadata, siteStructuredData } from "../lib/seo/site";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

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
        <link rel="canonical" href="https://www.smartit-srl.com/" />
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
      </body>
    </html>
  );
}
