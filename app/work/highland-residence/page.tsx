import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Highland Residence — TRC Contractors",
  description:
    "A hillside house of travertine massing, blackened-steel glazing, and a standing-seam copper roof — one material language carried from the retaining walls through to the interior joinery.",
};

const specs = [
  { label: "Location", value: "Hillside site — pending" },
  { label: "Category", value: "Luxury residential" },
  { label: "Scope", value: "Design, build, roof" },
  { label: "Materials", value: "Travertine · Steel · Copper" },
  { label: "Status", value: "Completed 2025" },
];

export default function HighlandResidencePage() {
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "var(--color-charcoal-steel)", background: "var(--color-architectural-white)" }}>
      <Nav alwaysSolid />

      <section style={{ padding: "calc(clamp(72px,10vw,140px) + 40px) clamp(20px,5vw,72px) clamp(40px,5vw,72px)" }}>
        <div style={{ fontSize: 12, letterSpacing: ".22em", textTransform: "uppercase", opacity: 0.55 }}>
          01 — Luxury Residential
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "clamp(2.5rem,6vw,5.5rem)",
            lineHeight: 1.02,
            letterSpacing: "-.01em",
            margin: "20px 0 0",
            maxWidth: "14ch",
          }}
        >
          The Highland Residence
        </h1>
        <p style={{ fontSize: "clamp(16px,1.2vw,19px)", lineHeight: 1.7, opacity: 0.75, maxWidth: "56ch", margin: "28px 0 0" }}>
          A hillside house of travertine massing, blackened-steel glazing, and a standing-seam copper roof —
          one material language carried from the retaining walls through to the interior joinery.
        </p>
      </section>

      <section style={{ position: "relative", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/imagery/highland-exterior.png"
          alt="Highland Residence exterior, travertine massing on a hillside site"
          style={{ width: "100%", height: "min(88vh,880px)", objectFit: "cover", display: "block" }}
        />
      </section>

      <section style={{ padding: "clamp(48px,6vw,96px) clamp(20px,5vw,72px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))",
            gap: "clamp(24px,3vw,48px)",
            borderTop: "1px solid rgba(43,44,46,.16)",
            paddingTop: 32,
          }}
        >
          {specs.map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", opacity: 0.5 }}>{s.label}</div>
              <div style={{ fontSize: 16, marginTop: 10 }}>{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 2, background: "var(--color-charcoal-steel)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/imagery/highland-interior.png"
          alt="Highland Residence interior volume"
          style={{ width: "100%", height: "min(74vh,720px)", objectFit: "cover", display: "block" }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/imagery/material-detail-copper-stone.png"
          alt="Copper and stone material detail"
          style={{ width: "100%", height: "min(74vh,720px)", objectFit: "cover", display: "block" }}
        />
      </section>

      <section style={{ padding: "clamp(56px,8vw,128px) clamp(20px,5vw,72px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(32px,5vw,80px)" }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: ".22em", textTransform: "uppercase", opacity: 0.55 }}>The brief</div>
            <p style={{ fontSize: 17, lineHeight: 1.75, opacity: 0.8, margin: "20px 0 0" }}>
              A single-storey pavilion reading as one continuous roof plane, sat on a stone base that steps
              with the slope. The client wanted the structure legible from inside: no boxed columns, no
              plasterboard hiding the frame.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 12, letterSpacing: ".22em", textTransform: "uppercase", opacity: 0.55 }}>The detail</div>
            <p style={{ fontSize: 17, lineHeight: 1.75, opacity: 0.8, margin: "20px 0 0" }}>
              Every roof-to-wall junction was prototyped full size before fabrication. The copper was laid in
              long-run standing seams with concealed clips, so the eaves line stays uninterrupted across the
              full elevation.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 clamp(20px,5vw,72px) clamp(72px,9vw,140px)" }}>
        <Link
          href="/#work"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: 19,
            color: "var(--color-charcoal-steel)",
            textDecoration: "none",
            borderBottom: "1px solid var(--color-aged-bronze)",
            paddingBottom: 6,
          }}
        >
          ← Back to all work
        </Link>
        <div style={{ marginTop: 24, fontSize: 12, opacity: 0.4 }}>
          Project details are placeholders pending real project data.
        </div>
      </section>

      <Footer />
    </div>
  );
}
