import Link from "next/link";
import Reveal from "./Reveal";

const archive = [
  { year: "2025", name: "The Highland Residence", category: "Luxury residential", place: "Hillside" },
  { year: "2024", name: "Copper Barn Conversion", category: "Restoration", place: "Rural" },
  { year: "2024", name: "Slate Court Offices", category: "Commercial", place: "City centre" },
  { year: "2023", name: "Travertine Pavilion", category: "Luxury residential", place: "Coastal" },
];

export default function WorkSection() {
  return (
    <section id="work" style={{ padding: "clamp(80px,12vw,160px) 0 0", background: "var(--color-charcoal-steel)", color: "var(--color-architectural-white)" }}>
      <Reveal
        style={{
          padding: "0 var(--gutter)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 11, letterSpacing: ".26em", textTransform: "uppercase", opacity: 0.6 }}>
            <span style={{ display: "inline-block", width: 28, height: 1, background: "var(--color-aged-bronze)" }} />
            Selected Work
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 200,
              fontSize: "clamp(2rem,3.8vw,3.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-.015em",
              margin: "22px 0 0",
            }}
          >
            Recent projects
          </h2>
        </div>
        <span style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", opacity: 0.5 }}>2023 — 2026</span>
      </Reveal>

      <div style={{ marginTop: "clamp(40px,5vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 2, background: "rgba(247,245,241,.18)" }}>
        <Reveal
          as="div"
          style={{ gridColumn: "1/-1" }}
        >
          <Link
            href="/work/highland-residence"
            className="project-card"
            style={{
              position: "relative",
              display: "block",
              textDecoration: "none",
              overflow: "hidden",
              aspectRatio: "16/9",
              minHeight: 360,
              background: "var(--color-charcoal-steel)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="project-card-img"
              src="/assets/imagery/highland-exterior.png"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(43,44,46,.78),transparent 58%)" }} />
            <div
              style={{
                position: "absolute",
                left: "clamp(20px,4vw,52px)",
                bottom: "clamp(24px,4vw,52px)",
                right: "clamp(20px,4vw,52px)",
                color: "var(--color-architectural-white)",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: 18,
              }}
            >
              <div>
                <div style={{ fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", opacity: 0.75 }}>
                  01 — Luxury Residential
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 200,
                    fontSize: "clamp(1.9rem,3.4vw,3rem)",
                    lineHeight: 1.05,
                    margin: "12px 0 8px",
                  }}
                >
                  The Highland Residence
                </h3>
                <div style={{ fontSize: 14, opacity: 0.78 }}>Hillside site · Travertine, steel, copper · Completed 2025</div>
              </div>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 11,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  borderBottom: "1px solid var(--color-aged-bronze)",
                  paddingBottom: 5,
                }}
              >
                View case study <span style={{ color: "var(--color-aged-bronze)" }}>→</span>
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
      {/* Two more project slots were here in the original design, both fabricated
          "Project name pending" placeholders — omitted rather than shown as real
          work. Add them back once there are two more real completed projects. */}

      <div style={{ padding: "clamp(56px,7vw,96px) var(--gutter) clamp(72px,10vw,140px)" }}>
        <Reveal style={{ fontSize: 11, letterSpacing: ".26em", textTransform: "uppercase", opacity: 0.5, paddingBottom: 20, borderBottom: "1px solid rgba(247,245,241,.18)" }}>
          Archive
        </Reveal>
        {archive.map((row) => (
          <Reveal
            key={row.name}
            as="div"
            className="archive-row"
            style={{
              display: "grid",
              gridTemplateColumns: "70px 1.6fr 1fr 1fr 40px",
              gap: 16,
              alignItems: "baseline",
              padding: "22px 0",
              borderBottom: "1px solid rgba(247,245,241,.12)",
            }}
          >
            <span style={{ fontSize: 12, opacity: 0.45 }}>{row.year}</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(1.1rem,1.6vw,1.4rem)" }}>
              {row.name}
            </span>
            <span style={{ fontSize: 13, opacity: 0.6 }}>{row.category}</span>
            <span style={{ fontSize: 13, opacity: 0.6 }}>{row.place}</span>
            <span className="arch-arrow" style={{ fontSize: 14, color: "var(--color-aged-bronze)" }}>
              →
            </span>
          </Reveal>
        ))}
        <Reveal style={{ marginTop: 26, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", opacity: 0.35 }}>
          Archive entries are placeholder — supply real project records before launch
        </Reveal>
      </div>
    </section>
  );
}
