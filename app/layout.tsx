import type { Metadata } from "next";
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
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
