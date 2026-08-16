"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const materials = [
  {
    num: "01",
    name: "Travertine",
    role: "Structure",
    img: "/assets/imagery/hero-hillside-golden-hour.png",
    spec: "Quarried block, honed face · Load-bearing",
    signature: false,
  },
  {
    num: "02",
    name: "Blackened Steel",
    role: "Frame",
    img: "/assets/imagery/highland-exterior.png",
    spec: "Blackened mild steel · Exposed frame & glazing",
    signature: false,
  },
  {
    num: "03",
    name: "Walnut",
    role: "Interior",
    img: "/assets/imagery/highland-interior.png",
    spec: "Kiln-dried European walnut · Joinery & soffits",
    signature: false,
  },
  {
    num: "04",
    name: "Deep Copper",
    role: "Roof",
    img: "/assets/imagery/material-detail-copper-stone.png",
    spec: "0.7mm standing-seam copper · Left to patinate",
    signature: true,
  },
];

export default function MaterialsSection() {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const m = materials[active];

  return (
    <section
      id="materials"
      style={{
        position: "relative",
        padding: "clamp(80px,12vw,170px) var(--gutter)",
        background: "var(--color-architectural-white)",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/imagery/material-detail-copper-stone.png"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      <div style={{ position: "absolute", inset: 0, background: "rgba(247,245,241,.90)" }} />

      <div style={{ position: "relative" }}>
        <Reveal
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div>
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
              <span style={{ display: "inline-block", flexShrink: 0, width: 28, height: 1, background: "var(--color-aged-bronze)" }} />
              <span style={{ minWidth: 0 }}>Materials</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 200,
                fontSize: "clamp(2rem,3.8vw,3.5rem)",
                lineHeight: 1.1,
                letterSpacing: "-.015em",
                margin: "22px 0 0",
                maxWidth: "17ch",
              }}
            >
              A palette of four, used honestly
            </h2>
          </div>
          <p style={{ maxWidth: "34ch", fontSize: 15, lineHeight: 1.7, opacity: 0.65, margin: 0 }}>
            Nothing is applied as finish. Every material in a TRC building is doing structural or weathering
            work.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "clamp(32px,5vw,72px)",
            alignItems: "start",
            marginTop: "clamp(44px,6vw,80px)",
          }}
        >
          <Reveal style={{ borderTop: "1px solid rgba(43,44,46,.18)" }}>
            <div onMouseLeave={() => setHovering(false)}>
              {materials.map((mat, i) => {
                const isActive = hovering && active === i;
                return (
                  <div
                    key={mat.num}
                    onMouseEnter={() => {
                      setActive(i);
                      setHovering(true);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      gap: 20,
                      padding: "22px 0",
                      borderBottom: "1px solid rgba(43,44,46,.14)",
                      cursor: "default",
                      paddingLeft: isActive ? 14 : 0,
                      opacity: hovering && !isActive ? 0.42 : 1,
                      transition: "padding-left .4s cubic-bezier(.16,1,.3,1), opacity .3s",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
                      <span style={{ fontSize: 11, letterSpacing: ".18em", opacity: mat.signature ? 1 : 0.4, color: mat.signature ? "var(--color-deep-copper)" : undefined }}>
                        {mat.num}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 300,
                          fontSize: "clamp(1.5rem,2.4vw,2.1rem)",
                          lineHeight: 1.1,
                        }}
                      >
                        {mat.name}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: 11,
                        letterSpacing: ".16em",
                        textTransform: "uppercase",
                        opacity: mat.signature ? 1 : 0.45,
                        color: mat.signature ? "var(--color-deep-copper)" : undefined,
                      }}
                    >
                      {mat.role}
                    </span>
                  </div>
                );
              })}
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 22, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", opacity: 0.4 }}>
                Hover a material
              </div>
            </div>
          </Reveal>

          <Reveal style={{ position: "relative" }}>
            <div style={{ position: "relative", aspectRatio: "1/1", minHeight: 320, overflow: "hidden", background: "var(--color-charcoal-steel)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={m.img}
                src={m.img}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  animation: "fadeIn .5s cubic-bezier(.16,1,.3,1) both",
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 16, marginTop: 16, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", opacity: 0.5 }}>
              <span>{m.spec}</span>
              <span>{m.num} / 04</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
