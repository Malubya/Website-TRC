import Reveal from "./Reveal";

export default function PracticeSection() {
  return (
    <section
      id="practice"
      style={{
        padding: "clamp(80px,12vw,180px) var(--gutter)",
        background: "var(--color-architectural-white)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
          gap: "clamp(36px,6vw,96px)",
          alignItems: "center",
        }}
      >
        <Reveal>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 11,
              letterSpacing: ".26em",
              textTransform: "uppercase",
              opacity: 0.5,
            }}
          >
            <span style={{ display: "inline-block", width: 28, height: 1, background: "var(--color-aged-bronze)" }} />
            The Practice
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 200,
              fontSize: "clamp(2.1rem,4vw,3.9rem)",
              lineHeight: 1.08,
              letterSpacing: "-.015em",
              margin: "24px 0 0",
              maxWidth: "14ch",
              textWrap: "pretty",
            }}
          >
            Restraint is what makes a building feel{" "}
            <span style={{ fontStyle: "italic", color: "var(--color-aged-bronze)" }}>expensive</span>.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.75, opacity: 0.72, maxWidth: "52ch", margin: "30px 0 0", textWrap: "pretty" }}>
            We work in stone, steel, timber, and copper. Structure, envelope, and roof are drawn and delivered
            by one team, so the detail you approve at design stage is the detail that gets built.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(32px,5vw,64px)",
              marginTop: 48,
              paddingTop: 34,
              borderTop: "1px solid rgba(43,44,46,.15)",
            }}
          >
            {[
              ["Design", "Architecture & planning"],
              ["Build", "Construction delivery"],
              ["Roof", "Envelope expertise"],
            ].map(([title, label]) => (
              <div key={title}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 30 }}>{title}</div>
                <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", opacity: 0.5, marginTop: 9 }}>{label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal style={{ position: "relative" }}>
          <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", minHeight: 380 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/imagery/katwe-mixed-use-front.jpeg"
              alt="Street-level architectural rendering of the Katwe mixed-use development"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: -9,
              left: -9,
              width: 22,
              height: 22,
              borderTop: "1px solid var(--color-aged-bronze)",
              borderLeft: "1px solid var(--color-aged-bronze)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -9,
              right: -9,
              width: 22,
              height: 22,
              borderBottom: "1px solid var(--color-aged-bronze)",
              borderRight: "1px solid var(--color-aged-bronze)",
            }}
          />
          <div style={{ marginTop: 16, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", opacity: 0.45 }}>
            Fig. 01 — Katwe Mixed-Use Development, street elevation
          </div>
        </Reveal>
      </div>
    </section>
  );
}
