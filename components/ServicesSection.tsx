import Reveal from "./Reveal";

const services = [
  {
    num: "01",
    title: "Design & Preconstruction",
    body: "Concept, detailing, and buildability review before a single cost is committed.",
    signature: false,
  },
  {
    num: "02",
    title: "Structural Construction",
    body: "Stone, steel, and timber structures built to the tolerances the drawings assume.",
    signature: false,
  },
  {
    num: "03",
    title: "Roofing & Envelope",
    body: "Standing-seam copper, zinc, and slate — the specialty the practice is known for.",
    signature: true,
  },
  {
    num: "04",
    title: "Restoration & Fit-out",
    body: "Sensitive repair and interior joinery for buildings worth keeping.",
    signature: false,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: "clamp(80px,12vw,160px) var(--gutter)", background: "var(--color-architectural-white)" }}>
      <Reveal style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 11, letterSpacing: ".26em", textTransform: "uppercase", opacity: 0.5 }}>
            <span style={{ display: "inline-block", flexShrink: 0, width: 28, height: 1, background: "var(--color-aged-bronze)" }} />
            <span style={{ minWidth: 0 }}>Services</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 200,
              fontSize: "clamp(2rem,3.8vw,3.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-.015em",
              margin: "22px 0 0",
              maxWidth: "18ch",
            }}
          >
            Four disciplines, one accountable team
          </h2>
        </div>
        <p style={{ maxWidth: "34ch", fontSize: 15, lineHeight: 1.7, opacity: 0.65, margin: 0 }}>
          From first sketch to final flashing, delivered under a single contract.
        </p>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 0,
          marginTop: "clamp(44px,6vw,80px)",
          borderTop: "1px solid rgba(43,44,46,.18)",
          borderLeft: "1px solid rgba(43,44,46,.18)",
        }}
      >
        {services.map((svc) => (
          <Reveal
            key={svc.num}
            className="svc-card"
            style={{
              padding: "44px 34px 52px",
              borderBottom: "1px solid rgba(43,44,46,.18)",
              borderRight: "1px solid rgba(43,44,46,.18)",
            }}
          >
            <div className="svc-fill" />
            <div style={{ position: "relative" }}>
              <div
                className="svc-num"
                style={{
                  fontSize: 11,
                  letterSpacing: ".22em",
                  opacity: svc.signature ? 1 : 0.45,
                  color: svc.signature ? "var(--color-deep-copper)" : "var(--color-charcoal-steel)",
                }}
              >
                {svc.num}
              </div>
              <h3
                className="svc-h"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: 25,
                  margin: "24px 0 14px",
                  color: "var(--color-charcoal-steel)",
                }}
              >
                {svc.title}
              </h3>
              <p className="svc-p" style={{ fontSize: 14, lineHeight: 1.75, opacity: 0.7, margin: 0, color: "var(--color-charcoal-steel)" }}>
                {svc.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
