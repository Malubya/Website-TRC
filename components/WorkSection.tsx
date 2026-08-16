import Reveal from "./Reveal";

const archive = [
  {
    year: "Designed",
    name: "Integrated Livestock & Poultry Farm",
    category: "Agricultural",
    place: "Uganda",
    body: "A purpose-designed farm structure with goats accommodated on the ground and first floors and poultry on the upper levels, supported by a brooder room, machinery room, storage, and essential farm amenities.",
    images: ["/assets/imagery/integrated-farm-view-13.jpg", "/assets/imagery/integrated-farm-view-1.jpg", "/assets/imagery/integrated-farm-view-6.jpg"],
  },
  {
    year: "Designed",
    name: "Mende Commercial Complex",
    category: "Retail & automotive",
    place: "Mende, Wakiso",
    body: "A revenue-focused commercial hub bringing together an ice-cream parlour, restaurant, butchery, car-wash bay, spacious parking, and a vehicle-accessories shop.",
    images: ["/assets/imagery/mende-commercial-complex.jpeg"],
  },
];

export default function WorkSection() {
  return (
    <section id="work" style={{ padding: "clamp(80px,12vw,160px) 0 0", background: "var(--color-charcoal-steel)", color: "var(--color-architectural-white)" }}>
      <Reveal
        style={{
          padding: "0 var(--gutter)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 11, letterSpacing: ".26em", textTransform: "uppercase", opacity: 0.6 }}>
            <span style={{ display: "inline-block", flexShrink: 0, width: 28, height: 1, background: "var(--color-aged-bronze)" }} />
            <span style={{ minWidth: 0 }}>Selected Work</span>
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
            Recent projects
          </h2>
        </div>
        <span style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", opacity: 0.5 }}>Designed by TRC Contractors Design Studio</span>
      </Reveal>

      <div style={{ marginTop: "clamp(40px,5vw,72px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: 2, background: "rgba(247,245,241,.18)" }}>
        <Reveal
          as="div"
          style={{ gridColumn: "1/-1" }}
        >
          <article
            className="project-card featured-project-card"
            style={{
              position: "relative",
              display: "block",
              textDecoration: "none",
              overflow: "hidden",
              aspectRatio: "16/9",
              minHeight: 360,
              background: "var(--color-charcoal-steel)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="project-card-img"
              src="/assets/imagery/katwe-mixed-use-aerial.jpeg"
              alt="Aerial architectural rendering of TRC Contractors' eight-storey mixed-use development in Katwe"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(43,44,46,.78),transparent 58%)" }} />
            <div className="featured-project-copy"
              style={{
                position: "absolute",
                left: "clamp(20px,4vw,52px)",
                bottom: "clamp(24px,4vw,52px)",
                right: "clamp(20px,4vw,52px)",
                color: "var(--color-architectural-white)",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: 18,
              }}
            >
              <div>
                <div style={{ fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", opacity: 0.75 }}>
                  01 — Mixed-use · Katwe · Architectural render
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 200,
                    fontSize: "clamp(1.9rem,3.4vw,3rem)",
                    lineHeight: 1.05,
                    margin: "12px 0 8px",
                  }}
                >
                  Katwe Mixed-Use Development
                </h3>
                <div style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.82, maxWidth: "68ch" }}>
                  Retail at street level, lifestyle amenities through the middle floors, and four levels of exclusive VIP lodges above — business and luxury under one roof.
                </div>
              </div>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 11,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  borderBottom: "1px solid var(--color-aged-bronze)",
                  paddingBottom: 5,
                }}
              >
                8 storeys <span style={{ color: "var(--color-aged-bronze)" }}>↑</span>
              </span>
            </div>
          </article>
        </Reveal>
      </div>
      <Reveal
        as="article"
        style={{ padding: "clamp(64px,8vw,112px) var(--gutter)", background: "var(--color-architectural-white)", color: "var(--color-charcoal-steel)" }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "end", gap: 24, marginBottom: 32 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", opacity: 0.55 }}>02 — Multi-unit residential · Kamuli District · Architectural render</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 200, fontSize: "clamp(2rem,3.5vw,3.2rem)", margin: "12px 0 0" }}>
              18 Studio Apartments
            </h3>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.68, maxWidth: "58ch", margin: 0 }}>
            Four storeys of self-contained studios, each with a kitchen and private balcony, supported by secure ground-floor parking and a shared rooftop terrace and laundry.
          </p>
        </div>
        <div className="apartment-gallery" style={{ display: "grid", gridTemplateColumns: "minmax(0,2fr) minmax(220px,1fr)", gap: 2 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/imagery/studio-apartments-view-1.jpg" alt="Front elevation rendering of the 18 studio apartment development" style={{ width: "100%", height: "100%", minHeight: 360, objectFit: "cover", display: "block" }} />
          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 2 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/imagery/studio-apartments-view-2.jpg" alt="Angled exterior rendering showing the apartment balconies and secure entrance" style={{ width: "100%", height: "100%", minHeight: 179, objectFit: "cover", display: "block" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/imagery/studio-apartments-view-5.jpg" alt="Shared rooftop terrace for residents of the studio apartments" style={{ width: "100%", height: "100%", minHeight: 179, objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </Reveal>

      <div style={{ padding: "clamp(56px,7vw,96px) var(--gutter) clamp(72px,10vw,140px)" }}>
        <Reveal style={{ fontSize: 11, letterSpacing: ".26em", textTransform: "uppercase", opacity: 0.5, paddingBottom: 20, borderBottom: "1px solid rgba(247,245,241,.18)" }}>
          More work
        </Reveal>
        {archive.map((row) => (
          <Reveal key={row.name} as="div" style={{ padding: "22px 0", borderBottom: "1px solid rgba(247,245,241,.12)" }}>
            <div
              className="archive-row"
              style={{
                display: "grid",
                gridTemplateColumns: "70px 1.6fr 1fr 1fr 40px",
                gap: 16,
                alignItems: "baseline",
              }}
            >
              <span style={{ fontSize: 12, opacity: 0.45 }}>{row.year}</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(1.1rem,1.6vw,1.4rem)" }}>
                {row.name}
              </span>
              <span style={{ fontSize: 13, opacity: 0.6 }}>{row.category}</span>
              <span style={{ fontSize: 13, opacity: 0.6 }}>{row.place}</span>
              <span className="arch-arrow" style={{ fontSize: 14, color: "var(--color-aged-bronze)" }}>→</span>
            </div>
            <p className="project-summary" style={{ margin: "14px 0 0 70px", fontSize: 13, lineHeight: 1.7, opacity: 0.58, maxWidth: "76ch" }}>
              {row.body}
            </p>
            {row.images.length > 0 && (
              <div className="farm-gallery" style={{ display: "grid", gridTemplateColumns: row.images.length === 1 ? "minmax(0, 760px)" : "2fr 1fr 1fr", gap: 2, marginTop: 24 }}>
                {row.images.map((src, index) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt={row.name === "Mende Commercial Complex" ? "Architectural rendering of the Mende commercial and shopping complex" : index === 0 ? "Aerial rendering of the integrated livestock and poultry farm" : index === 1 ? "Entrance to the integrated farm development" : "Service yard and circulation area within the farm development"}
                    style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
                  />
                ))}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
