"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const FILM_FRAMES = 441;
const FILM_BASE = "/assets/film/frames/f";
const FILM_WINDOW = 18;
const FILM_EVICT = 30;
const FILM_CONCURRENCY = 4;

const journey = [
  { src: "/assets/imagery/hero-house-exterior.jpg", label: "01 — Design", accent: "var(--color-aged-bronze)" },
  { src: "/assets/imagery/hero-house-living.jpg", label: "02 — Build", accent: "var(--color-aged-bronze)" },
  { src: "/assets/imagery/hero-house-roof.jpg", label: "03 — Roof", accent: "var(--color-deep-copper)" },
];

/**
 * Hero scroll-film ("The Long Exposure") — desktop + motion-ok only. A
 * canvas is scrubbed through a 441-frame sequence (four Higgsfield Kling 3.0
 * shots — exterior approach, living room, kitchen, roof reveal — crossfaded
 * into one continuous 1920x1080/24fps take) as the visitor scrolls a 340vh-
 * tall wrapper; the visual pane is pinned across that scroll via manual
 * position toggling rather than `position: sticky` (a page-wide
 * `overflow-x: hidden` ancestor breaks sticky's containing-block math in
 * most engines). Frames are decoded off-thread with `createImageBitmap` and
 * kept in a sliding window around the playhead — never `<video currentTime>`
 * scrubbing, which stutters on seek. Mobile / reduced-motion visitors get a
 * static three-image fallback strip instead (rendered always; CSS decides
 * which one is visible, so there's no hydration mismatch).
 */
export default function HeroFilm() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const motionOk = window.matchMedia("(min-width:1080px) and (prefers-reduced-motion: no-preference)").matches;
    const canvas = canvasRef.current;
    if (!canvas || !motionOk) return;

    const ctx = canvas.getContext("2d");
    const cache = new Map<number, ImageBitmap>();
    const loading = new Set<number>();
    let current = 0;
    let target = 0;
    let raf = 0;
    let ready = false;
    const dpr = Math.min(1.5, window.devicePixelRatio || 1);

    const sizeCanvas = () => {
      const r = canvas.getBoundingClientRect();
      canvas.width = Math.round(r.width * dpr);
      canvas.height = Math.round(r.height * dpr);
    };

    const frameUrl = (i: number) => FILM_BASE + String(i + 1).padStart(4, "0") + ".jpg";

    const ensureWindow = (center: number) => {
      const lo = Math.max(0, center - FILM_WINDOW);
      const hi = Math.min(FILM_FRAMES - 1, center + FILM_WINDOW);
      for (let i = lo; i <= hi && loading.size < FILM_CONCURRENCY; i++) {
        if (cache.has(i) || loading.has(i)) continue;
        loading.add(i);
        fetch(frameUrl(i))
          .then((res) => res.blob())
          .then((blob) => createImageBitmap(blob))
          .then((bmp) => {
            loading.delete(i);
            cache.set(i, bmp);
          })
          .catch(() => loading.delete(i));
      }
      cache.forEach((bmp, i) => {
        if (Math.abs(i - center) > FILM_EVICT) {
          bmp.close();
          cache.delete(i);
        }
      });
    };

    const nearest = (idx: number) => {
      for (let d = 0; d <= FILM_WINDOW; d++) {
        if (cache.has(idx - d)) return cache.get(idx - d)!;
        if (cache.has(idx + d)) return cache.get(idx + d)!;
      }
      return null;
    };

    const draw = (idx: number) => {
      const bmp = cache.get(idx) || nearest(idx);
      if (!bmp || !ctx) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const scale = Math.max(cw / bmp.width, ch / bmp.height);
      const dw = bmp.width * scale;
      const dh = bmp.height * scale;
      ctx.drawImage(bmp, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    };

    const loop = () => {
      current += (target - current) * 0.14;
      const idx = Math.max(0, Math.min(FILM_FRAMES - 1, Math.round(current)));
      ensureWindow(idx);
      draw(idx);
      raf = requestAnimationFrame(loop);
    };

    const onScrollPin = () => {
      const wrap = wrapRef.current;
      const visual = visualRef.current;
      if (!wrap || !visual) return;
      const fr = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      if (fr.top > 0) {
        visual.style.position = "absolute";
        visual.style.top = "0";
        visual.style.bottom = "";
      } else if (fr.bottom <= vh) {
        visual.style.position = "absolute";
        visual.style.top = "";
        visual.style.bottom = "0";
      } else {
        visual.style.position = "fixed";
        visual.style.top = "0";
        visual.style.bottom = "";
      }
      const total = fr.height - vh;
      const p = total > 4 ? Math.min(1, Math.max(0, -fr.top / total)) : 0;
      if (ready) target = p * (FILM_FRAMES - 1);
    };

    const onResize = () => {
      sizeCanvas();
      onScrollPin();
    };

    sizeCanvas();
    ensureWindow(0);
    ready = true;
    raf = requestAnimationFrame(loop);

    window.addEventListener("scroll", onScrollPin, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    onScrollPin();
    // Web fonts swapping in can shift hero text height after this first
    // measurement, throwing off the pin math — re-settle once layout is final.
    if (document.fonts?.ready) document.fonts.ready.then(onScrollPin);
    window.addEventListener("load", onScrollPin);

    return () => {
      window.removeEventListener("scroll", onScrollPin);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onScrollPin);
      cancelAnimationFrame(raf);
      cache.forEach((bmp) => bmp.close());
    };
  }, []);

  return (
    <>
      <div id="hero-film" ref={wrapRef}>
        <section
          className="hero-visual"
          id="hero-visual"
          ref={visualRef as React.RefObject<HTMLElement>}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100svh",
            minHeight: 640,
            overflow: "hidden",
            background: "var(--color-charcoal-steel)",
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/imagery/hero-house-exterior.jpg"
            aria-hidden="true"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src="/assets/film/master_backup_349.mp4" type="video/mp4" />
          </video>
          <canvas
            id="film-canvas"
            ref={canvasRef}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              display: "none",
              background:
                "var(--color-charcoal-steel) url(/assets/imagery/hero-house-exterior.jpg) center/cover",
            }}
          />
          <div
            className="hero-content"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top,rgba(43,44,46,.9),rgba(43,44,46,.62) 30%,rgba(43,44,46,.18) 62%,rgba(43,44,46,.3))",
            }}
          />
          <div
            className="hero-facts"
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right,rgba(43,44,46,.58),rgba(43,44,46,.1) 55%,transparent)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              pointerEvents: "none",
            }}
          >
            <div style={{ borderRight: "1px solid rgba(247,245,241,.10)" }} />
            <div style={{ borderRight: "1px solid rgba(247,245,241,.10)" }} />
            <div style={{ borderRight: "1px solid rgba(247,245,241,.10)" }} />
            <div />
          </div>

          <div
            className="hero-text"
            style={{
              position: "absolute",
              left: "var(--gutter)",
              right: "var(--gutter)",
              bottom: "clamp(104px,15vh,168px)",
              color: "var(--color-architectural-white)",
            }}
          >
            <div style={{ overflow: "hidden", paddingBottom: 2 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  fontSize: 11,
                  letterSpacing: ".28em",
                  textTransform: "uppercase",
                  opacity: 0.85,
                  animation: "maskUp 1s cubic-bezier(.16,1,.3,1) both",
                  animationDelay: ".15s",
                }}
              >
                <span style={{ display: "inline-block", flexShrink: 0, width: 34, height: 1, background: "var(--color-aged-bronze)" }} />
                <span style={{ minWidth: 0 }}>Uganda · Design · Build · Roof</span>
              </div>
            </div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 200,
                fontSize: "clamp(2.5rem,5.4vw,5.25rem)",
                lineHeight: 1,
                letterSpacing: "-.02em",
                margin: "20px 0 0",
                maxWidth: "14ch",
              }}
            >
              <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                <span style={{ display: "block", animation: "maskUp 1.15s cubic-bezier(.16,1,.3,1) both", animationDelay: ".3s" }}>
                  We design.
                </span>
              </span>
              <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                <span style={{ display: "block", animation: "maskUp 1.15s cubic-bezier(.16,1,.3,1) both", animationDelay: ".42s" }}>
                  We build.
                </span>
              </span>
              <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                <span
                  style={{
                    display: "block",
                    fontStyle: "italic",
                    animation: "maskUp 1.15s cubic-bezier(.16,1,.3,1) both",
                    animationDelay: ".54s",
                  }}
                >
                  We roof.
                </span>
              </span>
            </h1>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: 32,
                marginTop: 34,
              }}
            >
              <p
                style={{
                  maxWidth: "42ch",
                  fontSize: "clamp(15px,1.1vw,17px)",
                  lineHeight: 1.65,
                  opacity: 0.82,
                  margin: 0,
                  animation: "riseIn 1.1s cubic-bezier(.16,1,.3,1) both",
                  animationDelay: ".8s",
                }}
              >
                Every project treated as a single architectural idea, carried from structure through to skin —
                drawn, built, and roofed by one team.
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  animation: "riseIn 1.1s cubic-bezier(.16,1,.3,1) both",
                  animationDelay: ".92s",
                }}
              >
                <Link href="/#work" className="hero-cta-primary">
                  Selected Work
                </Link>
                <Link href="/#contact" className="hero-cta-ghost">
                  Start a Project
                </Link>
              </div>
            </div>
          </div>

          <div
            className="hero-stats-bar"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              borderTop: "1px solid rgba(247,245,241,.22)",
              display: "flex",
              flexWrap: "wrap",
              color: "var(--color-architectural-white)",
              animation: "fadeIn 1.2s ease both",
              animationDelay: "1.1s",
            }}
          >
            <div
              style={{
                flex: "1 1 200px",
                padding: "20px clamp(20px,5vw,32px) 20px var(--gutter)",
                borderRight: "1px solid rgba(247,245,241,.22)",
              }}
            >
              <div style={{ fontSize: 10, letterSpacing: ".24em", textTransform: "uppercase", opacity: 0.55 }}>
                Discipline
              </div>
              <div style={{ fontSize: 14, marginTop: 7, opacity: 0.92 }}>Design · Construction · Envelope</div>
            </div>
            <div
              style={{
                flex: "1 1 200px",
                padding: "20px clamp(20px,5vw,32px)",
                borderRight: "1px solid rgba(247,245,241,.22)",
              }}
            >
              <div style={{ fontSize: 10, letterSpacing: ".24em", textTransform: "uppercase", opacity: 0.55 }}>
                Materials
              </div>
              <div style={{ fontSize: 14, marginTop: 7, opacity: 0.92 }}>Travertine · Steel · Walnut · Copper</div>
            </div>
            <div
              style={{
                flex: "1 1 200px",
                padding: "20px var(--gutter) 20px clamp(20px,5vw,32px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <div>
                <div style={{ fontSize: 10, letterSpacing: ".24em", textTransform: "uppercase", opacity: 0.55 }}>
                  Currently
                </div>
                <div style={{ fontSize: 14, marginTop: 7, opacity: 0.92 }}>Discuss your next project</div>
              </div>
              <div style={{ width: 1, height: 34, overflow: "hidden", background: "rgba(247,245,241,.2)" }}>
                <div
                  style={{
                    width: 1,
                    height: 34,
                    background: "var(--color-aged-bronze)",
                    animation: "cueSlide 2.6s cubic-bezier(.4,0,.2,1) infinite",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        id="hero-film-fallback"
        style={{
          padding: "clamp(40px,7vw,64px) var(--gutter)",
          background: "var(--color-architectural-white)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 11,
            letterSpacing: ".26em",
            textTransform: "uppercase",
            opacity: 0.5,
            marginBottom: 28,
          }}
        >
          <span style={{ display: "inline-block", flexShrink: 0, width: 28, height: 1, background: "var(--color-aged-bronze)" }} />
          <span style={{ minWidth: 0 }}>The Journey</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 2 }}>
          {journey.map((j) => (
            <div
              key={j.label}
              style={{
                position: "relative",
                aspectRatio: "4/5",
                overflow: "hidden",
                background: "var(--color-charcoal-steel)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={j.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div
                style={{
                  position: "absolute",
                  left: 14,
                  bottom: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 10,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "var(--color-architectural-white)",
                }}
              >
                <span style={{ display: "inline-block", width: 14, height: 1, background: j.accent }} />
                {j.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
