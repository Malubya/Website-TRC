import type { Metadata } from "next";
import { Newsreader, Archivo } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["200", "300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trccontractors.com"),
  title: "TRC Contractors — Design, Build, Roof | Kampala, Uganda",
  description:
    "TRC Contractors designs, builds, and roofs with one accountable team — every project carried from structure through to skin. Based in Kampala, Uganda.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "TRC Contractors — Design, Build, Roof",
    description:
      "Every project treated as a single architectural idea, carried from structure through to skin — drawn, built, and roofed by one team. Kampala, Uganda.",
    images: ["/assets/imagery/hero-hillside-golden-hour.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
