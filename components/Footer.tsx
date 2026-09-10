import Link from "next/link";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#practice", label: "Practice" },
  { href: "/#materials", label: "Materials" },
  { href: "/#process", label: "Process" },
];

const serviceLinks = [
  { href: "/#services", label: "Design & preconstruction" },
  { href: "/#services", label: "Structural construction" },
  { href: "/#services", label: "Roofing & envelope" },
  { href: "/#services", label: "Restoration & fit-out" },
];

const companyLinks = [
  { href: "/#about", label: "About TRC" },
  { href: "/blog", label: "Blogs" },
  { href: "/#contact", label: "Contact us" },
  { href: "/login", label: "Project portal" },
];

const linkStyle: React.CSSProperties = {
  fontSize: 14,
  color: "var(--color-architectural-white)",
  textDecoration: "none",
  opacity: 0.85,
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-charcoal-steel)",
        color: "var(--color-architectural-white)",
        padding: "clamp(56px,8vw,104px) var(--gutter) 0",
        overflow: "hidden",
      }}
    >
      <div className="footer-signal">
        <div>
          <span className="footer-signal-kicker">Built for the work ahead</span>
          <h2>Clear decisions.<br />Solid delivery.</h2>
        </div>
        <Link href="/login" className="footer-signal-action">Open project portal <span aria-hidden="true">↗</span></Link>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "clamp(32px,4vw,64px)",
        }}
      >
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logos/trc-official-mark.png"
            alt=""
            style={{ height: 54, width: "auto", display: "block" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
          <div style={{ fontSize: 10, letterSpacing: ".24em", textTransform: "uppercase", opacity: 0.45 }}>
            Navigate
          </div>
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} style={linkStyle} className="footer-link">
              {l.label}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
          <div style={{ fontSize: 10, letterSpacing: ".24em", textTransform: "uppercase", opacity: 0.45 }}>
            Company
          </div>
          {companyLinks.map((l) => (
            <Link key={l.label} href={l.href} style={linkStyle} className="footer-link">
              {l.label}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
          <div style={{ fontSize: 10, letterSpacing: ".24em", textTransform: "uppercase", opacity: 0.45 }}>
            Services
          </div>
          {serviceLinks.map((l) => (
            <Link key={l.label} href={l.href} style={linkStyle} className="footer-link">
              {l.label}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
          <div style={{ fontSize: 10, letterSpacing: ".24em", textTransform: "uppercase", opacity: 0.45 }}>
            Contact
          </div>
          <a href="mailto:info@trccontractors.com" style={linkStyle}>info@trccontractors.com</a>
          <a href="tel:+256742801565" style={linkStyle}>Call +256 742 801 565</a>
          <a href="https://wa.me/256784853259" style={linkStyle}>WhatsApp +256 784 853 259</a>
          <span style={{ fontSize: 14, opacity: 0.55, lineHeight: 1.6 }}>
            Portal Avenue, Behind NIC Insurance
            <br />
            Kasirye Kavuma Lane, Kampala
          </span>
          <div
            style={{
              display: "flex",
              gap: 18,
              marginTop: 6,
              fontSize: 11,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              opacity: 0.6,
            }}
          >
            <a
              href="https://instagram.com/trccontractors"
              target="_blank"
              rel="noopener"
              style={{ color: "var(--color-architectural-white)", textDecoration: "none" }}
              className="footer-link"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/TrcContractors"
              target="_blank"
              rel="noopener"
              style={{ color: "var(--color-architectural-white)", textDecoration: "none" }}
              className="footer-link"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal-links" aria-label="Legal and trust links">
          <Link href="/legal/terms">Terms and Conditions</Link>
          <Link href="/legal/privacy">Privacy Policy</Link>
          <Link href="/legal/cookies">Cookie Policy</Link>
          <Link href="/legal/accessibility">Accessibility</Link>
          <Link href="/legal/security">Security</Link>
        </div>
      </div>

      <div
        style={{
          marginTop: "clamp(40px,6vw,80px)",
          paddingTop: 22,
          borderTop: "1px solid rgba(247,245,241,.2)",
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          justifyContent: "space-between",
          fontSize: 11,
          letterSpacing: ".1em",
          opacity: 0.42,
        }}
      >
        <span>© 2026 TRC Contractors Ltd.</span>
        <span>Kampala, Uganda · Built for better work</span>
      </div>

      <div
        className="footer-wordmark"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 200,
          opacity: 0.1,
          userSelect: "none",
        }}
      >
        TRC Contractors
      </div>

      <div className="footer-mascot" aria-hidden="true">
        <div className="footer-mascot-helmet" />
        <div className="footer-mascot-face"><span /><span /></div>
        <div className="footer-mascot-body"><i /><i /><i /></div>
        <div className="footer-mascot-wave">✦</div>
      </div>
    </footer>
  );
}
