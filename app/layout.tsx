import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@fontsource/newsreader/latin-200.css";
import "@fontsource/newsreader/latin-200-italic.css";
import "@fontsource/newsreader/latin-300.css";
import "@fontsource/newsreader/latin-300-italic.css";
import "@fontsource/newsreader/latin-400.css";
import "@fontsource/newsreader/latin-400-italic.css";
import "@fontsource/newsreader/latin-500.css";
import "@fontsource/newsreader/latin-500-italic.css";
import "@fontsource/archivo/latin-400.css";
import "@fontsource/archivo/latin-500.css";
import "@fontsource/archivo/latin-600.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://trccontractors.org"),
  title: "TRC Contractors — Design, Build, Roof | Uganda",
  description: "TRC Contractors designs and delivers mixed-use, residential, commercial, agricultural, and roofing projects across Uganda.",
  keywords: ["construction company Uganda", "building contractors Kampala", "roofing Uganda", "commercial construction", "residential construction", "TRC Contractors"],
  applicationName: "TRC Contractors",
  category: "Construction and project delivery",
  creator: "TRC Contractors Ltd.",
  publisher: "TRC Contractors Ltd.",
  icons: { icon: "/assets/logos/trc-official-mark.png" },
  manifest: "/manifest.webmanifest",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    title: "TRC Contractors — Design, Build, Roof",
    description: "Ugandan design and construction for mixed-use, residential, commercial, agricultural, and roofing projects.",
    images: ["/assets/imagery/katwe-mixed-use-aerial.jpeg"],
    type: "website",
    url: "https://trccontractors.org",
    siteName: "TRC Contractors",
    locale: "en_UG",
  },
  twitter: { card: "summary_large_image", title: "TRC Contractors — Design, Build, Roof", description: "Ugandan design and construction for homes, commercial spaces, agriculture, and roofing.", images: ["/assets/imagery/katwe-mixed-use-aerial.jpeg"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#2b2c2e" };
const gaId = process.env.NEXT_PUBLIC_GA_ID;
const SITE_URL = "https://trccontractors.org";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${SITE_URL}/#organization`,
        name: "TRC Contractors Ltd.",
        url: SITE_URL,
        logo: `${SITE_URL}/assets/logos/trc-official-mark.png`,
        image: `${SITE_URL}/assets/imagery/katwe-mixed-use-aerial.jpeg`,
        description: "Ugandan design and construction for residential, commercial, mixed-use, agricultural, and roofing projects.",
        email: "info@trccontractors.com",
        telephone: "+256742801565",
        address: { "@type": "PostalAddress", streetAddress: "Kasirye Kavuma Lane", addressLocality: "Kampala", addressCountry: "UG" },
        areaServed: { "@type": "Country", name: "Uganda" },
        sameAs: ["https://instagram.com/trccontractors", "https://facebook.com/TrcContractors"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "TRC Contractors",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-UG",
      },
    ],
  };
  return (
    <html lang="en">
      <body suppressHydrationWarning><Script id="organization-schema" type="application/ld+json">{JSON.stringify(organizationSchema).replace(/</g, "\\u003c")}</Script>{children}{gaId ? <><Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" /><Script id="ga4-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}</Script></> : null}</body>
    </html>
  );
}
