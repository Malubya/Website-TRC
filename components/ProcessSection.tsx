"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";

const steps = [
  { num: "01", title: "Consultation", body: "Site walk, brief, and a frank view on budget and programme." },
  { num: "02", title: "Planning", body: "Consents, surveys, and procurement strategy agreed up front." },
  { num: "03", title: "Design", body: "Detailing to junction level, with physical material mock-ups." },
  { num: "04", title: "Construction", body: "One site team, weekly reporting, no subcontracted accountability." },
  { num: "05", title: "Completion", body: "Snagging closed before handover, with a two-year aftercare period." },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const sec = sectionRef.current;
      const rail = railRef.current;
      if (!sec || !rail) return;
      const r = sec.getBoundingClientRect();
      const p = (window.innerHeight * 0.82 - r.top) / Math.max(1, r.height * 0.75);
      rail.style.width = (Math.max(0, Math.min(1, p)) * 100).toFixed(1) + "%";
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      style={{ padding: "clamp(80px,12vw,160px) var(--gutter)", background: "var(--color-charcoal-steel)", color: "var(--color-architectural-white)" }}
    >
      <Reveal style={{ maxWidth: "38ch" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 11, letterSpacing: ".26em", textTransform: "uppercase", opacity: 0.6 }}>
          <span style={{ display: "inline-block", flexShrink: 0, width: 28, height: 1, background: "var(--color-aged-bronze)" }} />
          <span style={{ minWidth: 0 }}>Process</span>
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
          From first conversation to handover
        </h2>
      </Reveal>

      <div style={{ marginTop: "clamp(48px,6vw,88px)", height: 1, background: "rgba(247,245,241,.18)", position: "relative" }}>
        <div ref={railRef} style={{ position: "absolute", top: 0, left: 0, height: 1, width: 0, background: "var(--color-aged-bronze)" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: "clamp(24px,3vw,44px)", marginTop: 32 }}>
        {steps.map((step, i) => (
          <Reveal key={step.num} delayMs={i * 90}>
            <div style={{ fontSize: 11, letterSpacing: ".22em", opacity: 0.45 }}>{step.num}</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 21, margin: "14px 0 12px" }}>{step.title}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.75, opacity: 0.68, margin: 0 }}>{step.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
