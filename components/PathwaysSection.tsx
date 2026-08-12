import Link from "next/link";
import Reveal from "./Reveal";

const pathways = [
  { number: "01", title: "Start a Project", body: "Planning a home, commercial development, farm structure, or roofing project? Tell us about the site, scope, and ambition.", action: "Send your brief", href: "/#contact", tone: "bronze", icon: "brief" },
  { number: "02", title: "Explore Our Work", body: "View selected mixed-use, residential, commercial, and agricultural designs developed by TRC Contractors Design Studio.", action: "View projects", href: "/#work", tone: "charcoal", icon: "building" },
  { number: "03", title: "Build From Abroad", body: "For Ugandans in the diaspora: coordinate your project through a direct local liaison, documented approvals, and progress updates.", action: "WhatsApp the team", href: "https://wa.me/256784853259?text=Hello%20TRC%2C%20I%20am%20abroad%20and%20would%20like%20to%20discuss%20a%20project%20in%20Uganda.", tone: "travertine", icon: "globe" },
  { number: "04", title: "Client Access", body: "Already working with TRC? Request project drawings, reports, approvals, and access to your current project records.", action: "Open client access", href: "/login", tone: "white", icon: "portal" },
];

function PathwayIcon({ type }: { type: string }) {
  const line = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return <svg className="pathway-icon" viewBox="0 0 48 48" aria-hidden="true">
    {type === "brief" && <><path {...line} d="M8 17h32v22H8zM18 17v-5h12v5M8 25h32M20 25v4h8v-4"/><path className="icon-accent" {...line} d="M34 9h7v7M40 10 31 19"/></>}
    {type === "building" && <><path {...line} d="M8 40h32M12 40V17l12-7 12 7v23M18 40V22h12v18M18 29h12M24 22v18"/><path className="icon-accent" {...line} d="M9 13 24 4l15 9"/></>}
    {type === "globe" && <><circle {...line} cx="24" cy="24" r="17"/><path {...line} d="M7 24h34M24 7c5 5 7 11 7 17s-2 12-7 17M24 7c-5 5-7 11-7 17s2 12 7 17"/><path className="icon-accent" {...line} d="m31 30 8 8M34 38h5v-5"/></>}
    {type === "portal" && <><path {...line} d="M10 41V8h22v33M16 41V15h10v26M32 14h6v27M21 27h1"/><path className="icon-accent" {...line} d="M36 20h7M40 16l4 4-4 4"/></>}
  </svg>;
}

export default function PathwaysSection() {
  return <section className="pathways" aria-labelledby="pathways-title">
    <Reveal className="pathways-intro"><div className="pathways-eyebrow">Welcome to TRC Contractors</div><h2 id="pathways-title">How can we help you build?</h2><p>Choose the path that best matches what you need.</p></Reveal>
    <div className="pathways-grid">
      {pathways.map((path, index) => <Reveal key={path.title} delayMs={index * 70} className={`pathway-item pathway-${path.tone}`}>
        <div className="pathway-card"><div className="pathway-top"><PathwayIcon type={path.icon}/><span className="pathway-number">{path.number}</span></div><h3>{path.title}</h3><p>{path.body}</p><div className="pathway-orbit" aria-hidden="true"><span/><span/></div></div>
        {path.href.startsWith("http") ? <a className="pathway-action" href={path.href}>{path.action}<span aria-hidden="true">↗</span></a> : <Link className="pathway-action" href={path.href}>{path.action}<span aria-hidden="true">→</span></Link>}
      </Reveal>)}
    </div>
  </section>;
}
