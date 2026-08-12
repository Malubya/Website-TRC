import Link from "next/link";

export default function PortalPage() {
  return (
    <main style={{ minHeight: "100svh", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", background: "var(--color-charcoal-steel)", color: "var(--color-architectural-white)" }}>
      <div style={{ position: "relative", minHeight: 420, overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/imagery/katwe-mixed-use-front.jpeg" alt="Katwe mixed-use development designed by TRC Contractors" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(43,44,46,.84),rgba(43,44,46,.12))" }} />
        <Link href="/" style={{ position: "absolute", top: 32, left: "var(--gutter)", color: "inherit", textDecoration: "none", fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase" }}>← Back to TRC</Link>
      </div>
      <section style={{ display: "grid", alignContent: "center", padding: "clamp(64px,9vw,128px) var(--gutter)" }}>
        <div style={{ fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: "var(--color-aged-bronze)" }}>Client Portal</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 200, fontSize: "clamp(2.8rem,6vw,5.4rem)", lineHeight: 1, margin: "22px 0" }}>Project access is arranged directly.</h1>
        <p style={{ maxWidth: "46ch", lineHeight: 1.75, opacity: .72, margin: 0 }}>The online portal is being prepared. Existing clients can request drawings, reports, approvals, and project records directly from the TRC team.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 36 }}>
          <a className="hero-cta-primary" href="mailto:info@trccontractors.com?subject=Client%20portal%20access">Request access</a>
          <a className="hero-cta-ghost" href="https://wa.me/256784853259?text=Hello%20TRC%2C%20I%20need%20help%20accessing%20my%20project%20records.">WhatsApp TRC</a>
        </div>
      </section>
    </main>
  );
}
