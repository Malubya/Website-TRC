"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const update = () => {
      const el = parallaxRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
      const speed = 0.12;
      el.style.transform = `translate3d(0,${(r.top * -1 * speed).toFixed(1)}px,0)`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const sendEnquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Please add at least your name and email.");
      return;
    }
    setError("");
    const subject = `New enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nProject:\n${project}`;
    window.location.href = `mailto:studio@trccontractors.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const fieldStyle: React.CSSProperties = {
    width: "100%",
    marginTop: 9,
    padding: "10px 0",
    background: "transparent",
    border: 0,
    borderBottom: "1px solid rgba(247,245,241,.32)",
    color: "var(--color-architectural-white)",
    fontFamily: "var(--font-body)",
    fontSize: 15,
    outline: "none",
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ position: "relative", padding: "clamp(88px,13vw,180px) var(--gutter)", overflow: "hidden" }}
    >
      <div ref={parallaxRef} style={{ position: "absolute", inset: "-10% 0" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/imagery/material-detail-copper-stone.png"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      <div style={{ position: "absolute", inset: 0, background: "rgba(43,44,46,.82)" }} />

      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(310px,1fr))",
          gap: "clamp(40px,6vw,96px)",
          alignItems: "start",
          color: "var(--color-architectural-white)",
        }}
      >
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 11, letterSpacing: ".26em", textTransform: "uppercase", opacity: 0.7 }}>
            <span style={{ display: "inline-block", width: 28, height: 1, background: "var(--color-aged-bronze)" }} />
            Start a project
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 200,
              fontSize: "clamp(2.3rem,5vw,4.4rem)",
              lineHeight: 1.04,
              letterSpacing: "-.02em",
              margin: "24px 0 0",
              maxWidth: "13ch",
            }}
          >
            Tell us what you want to build.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.78, maxWidth: "44ch", margin: "26px 0 0" }}>
            Send a brief, a sketch, or an address. We will tell you honestly whether we are the right practice
            for it.
          </p>
          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 10, fontSize: 14, opacity: 0.78 }}>
            <span>studio@trccontractors.com</span>
            <span>Call 0742 801 565 · WhatsApp 0784 853 259</span>
            <span>Portal Avenue, Behind NIC Insurance, Kasirye Kavuma Lane, Kampala</span>
          </div>
        </Reveal>

        <Reveal style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          {error && <div style={{ fontSize: 12, color: "var(--color-deep-copper)", letterSpacing: ".02em" }}>{error}</div>}
          <div>
            <div style={{ fontSize: 10, letterSpacing: ".24em", textTransform: "uppercase", opacity: 0.55 }}>Name</div>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your name" style={fieldStyle} />
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: ".24em", textTransform: "uppercase", opacity: 0.55 }}>Email</div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@company.com" style={fieldStyle} />
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: ".24em", textTransform: "uppercase", opacity: 0.55 }}>Project</div>
            <textarea
              value={project}
              onChange={(e) => setProject(e.target.value)}
              rows={3}
              placeholder="Site, scope, and rough programme"
              style={{ ...fieldStyle, resize: "vertical" }}
            />
          </div>
          <a href="#contact" onClick={sendEnquiry} className="hero-cta-primary" style={{ alignSelf: "flex-start" }}>
            Send Enquiry
          </a>
        </Reveal>
      </div>
    </section>
  );
}
