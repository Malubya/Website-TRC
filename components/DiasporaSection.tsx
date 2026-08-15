import Reveal from "./Reveal";

const supportPoints = [
  "A direct local project liaison",
  "Documented approvals and decisions",
  "Structured photo and site updates",
  "One team from design through roofing",
];

export default function DiasporaSection() {
  return (
    <section className="diaspora-section" aria-labelledby="diaspora-title">
      <div className="diaspora-shell">
        <Reveal className="diaspora-copy">
          <div className="diaspora-eyebrow">
            <span />
            Diaspora project support
          </div>
          <h2 id="diaspora-title">
            Build in Uganda,
            <br />
            wherever you are.
          </h2>
          <p className="diaspora-lead">
            Distance should not mean uncertainty. TRC gives clients abroad a
            clear line of sight from the first drawing to work delivered on site.
          </p>

          <div className="diaspora-points">
            {supportPoints.map((point, index) => (
              <div className="diaspora-point" key={point}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{point}</p>
              </div>
            ))}
          </div>

          <div className="diaspora-actions">
            <a
              className="hero-cta-primary"
              href="https://wa.me/256784853259?text=Hello%20TRC%2C%20I%20am%20abroad%20and%20would%20like%20to%20discuss%20a%20project%20in%20Uganda."
            >
              Discuss your project
            </a>
            <span>Kampala, Uganda · Working worldwide</span>
          </div>
        </Reveal>

        <Reveal className="diaspora-visual">
          <figure className="diaspora-primary-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/imagery/studio-apartments-view-3.jpg"
              alt="Architectural design for a TRC studio apartment development in Uganda"
            />
            <figcaption>
              <span>Design development</span>
              <strong>18 Studio Apartments</strong>
            </figcaption>
          </figure>

          <figure className="diaspora-site-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/imagery/site-progress-team.jpeg"
              alt="TRC site team coordinating active construction work"
            />
            <figcaption>
              <span />
              Progress, documented on site
            </figcaption>
          </figure>

          <div className="diaspora-report-card">
            <div className="diaspora-report-head">
              <span>Project reporting</span>
              <i aria-hidden="true" />
            </div>
            <div className="diaspora-report-row">
              <span>01</span>
              Approvals
            </div>
            <div className="diaspora-report-row">
              <span>02</span>
              Site updates
            </div>
            <div className="diaspora-report-row">
              <span>03</span>
              Budget visibility
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
