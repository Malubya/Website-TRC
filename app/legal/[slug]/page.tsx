import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://app.trccontractors.org/";

const pages = {
  cookies: { title: "Cookie Policy", intro: "How TRC Contractors uses cookies and similar technologies.", sections: ["We use essential cookies to keep the website secure, remember preferences, and deliver the portal experience. We do not sell personal information.", "You can control non-essential cookies through your browser settings. Disabling essential cookies may affect sign-in and security features."] },
  privacy: { title: "Privacy Policy", intro: "How TRC Contractors handles information submitted through this website.", sections: ["TRC Contractors collects only the information needed to respond to enquiries, provide project access, and operate construction collaboration services.", "Project information is protected with role-based access controls. We retain records for legitimate business, contractual, and accountability purposes and do not sell personal information."] },
  terms: { title: "Terms and Conditions", intro: "Terms for using the TRC Contractors website and project workspace.", sections: ["Use the project workspace only with an account assigned to you. Keep credentials private and notify TRC Contractors promptly about suspected unauthorised access.", "Project records, drawings, approvals, and site updates are provided for the authorised project team and must not be redistributed without permission."] },
  accessibility: { title: "Accessibility", intro: "Our commitment to making TRC Contractors information and project tools usable for everyone.", sections: ["We design our public website with readable contrast, keyboard navigation, clear labels, and responsive layouts across phones, tablets, and desktop screens.", "If you have difficulty using a page or need information in another format, contact info@trccontractors.com and we will help."] },
  security: { title: "Security", intro: "How TRC Contractors protects access to project information and accounts.", sections: ["Project access is role-based and limited to the people assigned to each project. Sessions, account activity, and important changes are recorded for accountability.", "Never share your password. Report a suspected account or project security issue immediately to info@trccontractors.com."] },
} as const;

export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug as keyof typeof pages];
  if (!page) return {};
  return {
    title: `${page.title} | TRC Contractors`,
    description: page.intro,
    alternates: { canonical: `/legal/${slug}` },
  };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as keyof typeof pages];
  if (!page) notFound();
  return <main className="legal-page"><header className="legal-header"><Link href="/" className="legal-brand"><img src="/assets/logos/trc-official-mark.png" alt="TRC Contractors" /></Link><Link href={portalUrl} className="legal-back">← Back to secure portal</Link></header><div className="legal-layout"><aside><span>TRC / Legal</span><nav aria-label="Legal pages">{Object.entries(pages).map(([key, value]) => <Link key={key} className={key === slug ? "is-current" : ""} href={`/legal/${key}`}>{value.title}</Link>)}</nav></aside><article className="legal-copy"><p className="portal-eyebrow">TRC Contractors · Information</p><h1>{page.title}</h1><p className="legal-intro">{page.intro}</p>{page.sections.map((section, index) => <section key={section}><span>0{index + 1}</span><p>{section}</p></section>)}<div className="legal-meta"><small>Last updated: September 2026</small><Link href="mailto:info@trccontractors.com">Questions? Contact TRC →</Link></div></article></div></main>;
}
