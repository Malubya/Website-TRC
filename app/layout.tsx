import type { Metadata } from "next";
import { Newsreader, Archivo } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", weight: ["200", "300", "400", "500"], style: ["normal", "italic"], display: "swap" });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://trccontractors.com"),
  title: "TRC Contractors — Design, Build, Roof | Uganda",
  description: "TRC Contractors designs and delivers mixed-use, residential, commercial, agricultural, and roofing projects across Uganda.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "TRC Contractors — Design, Build, Roof",
    description: "Ugandan design and construction for mixed-use, residential, commercial, agricultural, and roofing projects.",
    images: ["/assets/imagery/katwe-mixed-use-aerial.jpeg"],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${archivo.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
