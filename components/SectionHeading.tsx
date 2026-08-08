import type { CSSProperties, ReactNode } from "react";

/** Eyebrow + serif headline — the standard section opener used across the site. */
export default function SectionHeading({
  eyebrow,
  eyebrowStyle,
  children,
  headingStyle,
}: {
  eyebrow: string;
  eyebrowStyle?: CSSProperties;
  children: ReactNode;
  headingStyle?: CSSProperties;
}) {
  return (
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
          ...eyebrowStyle,
        }}
      >
        <span style={{ display: "inline-block", width: 28, height: 1, background: "var(--color-aged-bronze)" }} />
        {eyebrow}
      </div>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 200,
          fontSize: "clamp(2rem,3.8vw,3.5rem)",
          lineHeight: 1.1,
          letterSpacing: "-.015em",
          margin: "22px 0 0",
          ...headingStyle,
        }}
      >
        {children}
      </h2>
    </div>
  );
}
