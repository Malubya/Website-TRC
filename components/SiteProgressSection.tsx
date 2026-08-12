import Reveal from "./Reveal";

const siteImages = [
  { src: "/assets/imagery/site-progress-scaffolding.jpeg", alt: "TRC construction site with structural work and scaffolding in progress", label: "Structural works" },
  { src: "/assets/imagery/site-progress-team.jpeg", alt: "TRC site team inspecting masonry and structural work", label: "Site coordination" },
  { src: "/assets/imagery/site-progress-night-pour.jpeg", alt: "Construction team completing concrete works at night", label: "Concrete works" },
];

const residentialImages = [
  { src: "/assets/imagery/residential-design-column-house.jpeg", alt: "TRC architectural rendering of a contemporary residence with a double-height entrance" },
  { src: "/assets/imagery/residential-design-bungalow.jpeg", alt: "TRC architectural rendering of a stone-accented bungalow" },
  { src: "/assets/imagery/residential-design-modern.jpeg", alt: "TRC architectural rendering of a compact modern residence" },
];

export default function SiteProgressSection() {
  return (
    <section style={{ padding: "clamp(80px,11vw,150px) var(--gutter)", background: "var(--color-architectural-white)" }}>
      <Reveal style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "end", gap: 24 }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", opacity: .5 }}>From drawing to site</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 200, fontSize: "clamp(2.2rem,4vw,3.8rem)", margin: "18px 0 0" }}>Designed here. Built here.</h2>
        </div>
        <p style={{ maxWidth: "52ch", lineHeight: 1.7, opacity: .65, margin: 0 }}>Real construction progress alongside selected residential design studies—showing the continuity between the architectural idea and the work delivered on site.</p>
      </Reveal>

      <div className="site-progress-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 2, marginTop: 40 }}>
        {siteImages.map((image, index) => (
          <Reveal key={image.src} style={{ position: "relative", minHeight: index === 0 ? 460 : 320, overflow: "hidden", background: "var(--color-charcoal-steel)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.src} alt={image.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <span style={{ position: "absolute", left: 16, bottom: 16, padding: "8px 11px", color: "white", background: "rgba(43,44,46,.78)", fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase" }}>{image.label}</span>
          </Reveal>
        ))}
      </div>

      <Reveal style={{ marginTop: "clamp(64px,8vw,100px)" }}>
        <div style={{ fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", opacity: .48, marginBottom: 20 }}>Residential design studies</div>
        <div className="residential-studies-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
          {residentialImages.map((image) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={image.src} src={image.src} alt={image.alt} style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", display: "block" }} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
