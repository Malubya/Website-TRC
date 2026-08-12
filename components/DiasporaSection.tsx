import Reveal from "./Reveal";

export default function DiasporaSection() {
  return (
    <section style={{ padding: "clamp(80px,11vw,150px) var(--gutter)", background: "var(--color-travertine)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(40px,7vw,100px)", alignItems: "center" }}>
        <Reveal>
          <div style={{ fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", opacity: .55 }}>Diaspora Project Support</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 200, fontSize: "clamp(2.2rem,4.5vw,4.2rem)", lineHeight: 1.05, margin: "22px 0" }}>Build in Uganda, wherever you are.</h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, opacity: .72, maxWidth: "52ch" }}>TRC provides a direct liaison for clients abroad, with structured project coordination, progress communication, and one accountable local team from design through construction.</p>
          <ul style={{ display: "grid", gap: 12, padding: 0, margin: "28px 0 34px", listStyle: "none", fontSize: 14 }}>
            <li>— Remote project coordination</li>
            <li>— Direct diaspora liaison</li>
            <li>— Progress updates and documented approvals</li>
            <li>— Design, construction, and roofing under one team</li>
          </ul>
          <a className="hero-cta-primary" href="https://wa.me/256784853259?text=Hello%20TRC%2C%20I%20am%20abroad%20and%20would%20like%20to%20discuss%20a%20project%20in%20Uganda.">Discuss a diaspora project</a>
        </Reveal>
        <Reveal style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/imagery/diaspora-outreach.jpeg" alt="TRC Contractors diaspora outreach and remote project management service" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </Reveal>
      </div>
    </section>
  );
}
