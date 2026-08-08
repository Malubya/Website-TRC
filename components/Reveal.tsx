"use client";

import { useEffect, useRef, useState, type CSSProperties, type JSX, type ReactNode } from "react";

/**
 * Scroll-reveal wrapper — fades/rises children in once they cross into the
 * viewport. Same visual language as the original site's global scroll-scan
 * (opacity 0→1, translateY 24px→0, 0.95s editorial ease), reimplemented with
 * IntersectionObserver instead of a per-scroll-tick querySelectorAll pass.
 *
 * Starts fully visible (no `data-armed`) until the effect runs, so content
 * never hides if JS is slow/absent — then arms itself and, if already below
 * the fold, fades in on intersection.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delayMs = 0,
  style,
  className,
}: {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  delayMs?: number;
  style?: CSSProperties;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const below = el.getBoundingClientRect().top > window.innerHeight * 0.9;
    if (!below) {
      setInView(true);
      return;
    }
    setArmed(true);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(el);
          setTimeout(() => setInView(true), delayMs);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Comp = Tag as React.ElementType;
  return (
    <Comp
      ref={ref}
      data-reveal=""
      data-armed={armed}
      data-in-view={inView}
      style={style}
      className={className}
    >
      {children}
    </Comp>
  );
}
