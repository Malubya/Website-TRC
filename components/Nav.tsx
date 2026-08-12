"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

const sections = [
  { id: "practice", label: "Practice" },
  { id: "materials", label: "Materials" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
];
const sectionIds = [...sections.map(({ id }) => id), "contact"];

export default function Nav({ alwaysSolid = false }: { alwaysSolid?: boolean }) {
  const [solid, setSolid] = useState(alwaysSolid);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const railRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY || 0;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      if (railRef.current) railRef.current.style.width = `${Math.min(100, (y / max) * 100).toFixed(2)}%`;
      setSolid(alwaysSolid || y > 80);
      let activeId = "";
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4 && rect.bottom > window.innerHeight * 0.4) activeId = id;
      }
      setActive(activeId);
      rafRef.current = null;
    };
    const onScroll = () => {
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(update);
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

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const themed = (className: string) => (solid ? `${className} ${styles.solid}` : className);
  const linkClass = (id: string) => `${styles.link}${solid ? ` ${styles.solid}` : ""}${active === id ? ` ${styles.active}` : ""}`;

  return (
    <nav className={styles.nav} id="site-nav" aria-label="Primary navigation">
      <div className={`${themed(styles.plate)}${menuOpen ? ` ${styles.menuOpen}` : ""}`} />
      <div ref={railRef} className={styles.rail} style={{ width: 0 }} />
      <div className={themed(styles.inner)}>
        <Link href="/#top" className={styles.mark} aria-label="TRC Contractors home" onClick={() => setMenuOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={solid || menuOpen ? "/assets/logos/trc-symbol-trimmed.png" : "/assets/logos/trc-symbol-white.png"} alt="" style={{ height: 30, width: "auto", display: "block" }} />
          <span className={solid || menuOpen ? `${styles.word} ${styles.solid}` : styles.word}>TRC Contractors</span>
        </Link>

        <div className={styles.links}>
          {sections.map(({ id, label }) => <Link key={id} href={`/#${id}`} className={linkClass(id)}>{label}</Link>)}
          <Link href="/login" className={themed(styles.link)}>Portal Login</Link>
          <Link href="/#contact" className={`${themed(styles.cta)}${active === "contact" ? ` ${styles.active}` : ""}`}>Start a Project</Link>
        </div>

        <button type="button" className={`${styles.menuButton}${solid || menuOpen ? ` ${styles.solid}` : ""}`} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMenuOpen((open) => !open)}>
          <span /><span />
        </button>
      </div>

      <div id="mobile-navigation" className={`${styles.mobileMenu}${menuOpen ? ` ${styles.open}` : ""}`} aria-hidden={!menuOpen}>
        {sections.map(({ id, label }, index) => (
          <Link key={id} href={`/#${id}`} className={`${styles.mobileMenuLink}${active === id ? ` ${styles.active}` : ""}`} onClick={() => setMenuOpen(false)}>
            <span>0{index + 1}</span>{label}
          </Link>
        ))}
        <div className={styles.mobileActions}>
          <Link href="/login" className={styles.mobilePortal} onClick={() => setMenuOpen(false)}>Client Portal</Link>
          <Link href="/#contact" className={styles.mobileEnquire} onClick={() => setMenuOpen(false)}>Start a Project</Link>
        </div>
      </div>
    </nav>
  );
}
