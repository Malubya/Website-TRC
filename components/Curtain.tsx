"use client";

import { useEffect, useRef, useState } from "react";

/** Intro loading curtain — bronze progress line, fades out ~1.25s after mount. */
export default function Curtain() {
  const [hidden, setHidden] = useState(false);
  const [visible, setVisible] = useState(true);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      if (barRef.current) barRef.current.style.width = "100%";
    });
    const fadeTimer = setTimeout(() => setVisible(false), 1250);
    const hideTimer = setTimeout(() => setHidden(true), 2000);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "var(--color-charcoal-steel)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        transition: "opacity .7s cubic-bezier(.16,1,.3,1), visibility .7s",
      }}
    >
      <div style={{ textAlign: "center", animation: "fadeIn .8s ease both" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logos/trc-symbol-white.png"
          alt=""
          style={{ height: 44, width: "auto", display: "block", margin: "0 auto 22px" }}
        />
        <div
          style={{
            width: 120,
            height: 1,
            background: "rgba(247,245,241,.25)",
            overflow: "hidden",
            margin: "0 auto",
          }}
        >
          <div
            ref={barRef}
            style={{
              height: 1,
              background: "var(--color-aged-bronze)",
              width: 0,
              transition: "width 1.1s cubic-bezier(.4,0,.2,1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
