"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const SECTION_IDS = ["practice", "materials", "work", "services", "process"];

/**
 * Site header. Transparent-over-hero on the homepage until the visitor
 * scrolls past ~80px, then swaps to a solid Architectural White plate with
 * charcoal ink; `alwaysSolid` forces that solid state on every other page
 * (no hero underneath to sit transparently over).
 */
export default function Nav({ alwaysSolid = false }: { alwaysSolid?: boolean }) {
  const [solid, setSolid] = useState(alwaysSolid);
  const [active, setActive] = useState("");
  const railRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY || 0;
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      if (railRef.current) {
        railRef.current.style.width = Math.min(100, (y / max) * 100).toFixed(2) + "%";
      }

      setSolid(alwaysSolid || y > 80);

      let activeId = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= window.innerHeight * 0.4 && r.bottom > window.innerHeight * 0.4) {
          activeId = id;
        }
      }
      setActive(activeId);
      rafRef.current = null;
    };

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [alwaysSolid]);

  const s = (cls: string) => (solid ? `${cls} ${styles.solid}` : cls);
  const linkCls = (id: string) =>
    `${styles.link}${solid ? ` ${styles.solid}` : ""}${active === id ? ` ${styles.active}` : ""}`;

  return (
    <nav className={styles.nav} id="site-nav">
      <div className={s(styles.plate)} />
      <div ref={railRef} className={styles.rail} style={{ width: 0 }} />
      <div className={s(styles.inner)}>
        <Link href="/" className={styles.mark}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={solid ? "/assets/logos/trc-symbol-trimmed.png" : "/assets/logos/trc-symbol-white.png"}
            alt=""
            style={{ height: 30, width: "auto", display: "block" }}
          />
          <span className={s(styles.word)}>TRC Contractors</span>
        </Link>

        <div className={styles.links}>
          <Link href="/#practice" className={linkCls("practice")}>
            Practice
          </Link>
          <Link href="/#materials" className={linkCls("materials")}>
            Materials
          </Link>
          <Link href="/#work" className={linkCls("work")}>
            Work
          </Link>
          <Link href="/#services" className={linkCls("services")}>
            Services
          </Link>
          <Link href="/#process" className={linkCls("process")}>
            Process
          </Link>
          <Link href="/login" className={s(styles.link)}>
            Portal Login
          </Link>
          <Link href="/#contact" className={s(styles.cta)}>
            Start a Project
          </Link>
        </div>

        <div className={styles.mobileLinks}>
          <Link href="/login" className={s(styles.mobileLink)}>
            Portal
          </Link>
          <Link href="/#contact" className={s(styles.mobileCta)}>
            Enquire
          </Link>
        </div>
      </div>
    </nav>
  );
}
