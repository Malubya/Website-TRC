import Link from "next/link";

const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://app.trccontractors.org/";

export const metadata = {
  title: "Sign in — TRC Contractors",
  description: "Secure access to your TRC Contractors project workspace.",
};

export default function PortalPage() {
  return (
    <main className="portal-shell">
      <section className="portal-panel" aria-labelledby="portal-title">
        <Link href="/" className="portal-brand" aria-label="Back to TRC Contractors home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logos/trc-official-mark.png" alt="TRC Contractors" />
        </Link>
        <div className="portal-form-wrap">
          <Link href="/" className="portal-back">← Back to TRC</Link>
          <p className="portal-eyebrow">Client project workspace</p>
          <h1 id="portal-title">Welcome back.</h1>
          <p className="portal-intro">Sign in with the account assigned to your construction project.</p>
          <div className="portal-form">
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" placeholder="you@company.com" autoComplete="email" />
            <div className="portal-label-row">
              <label htmlFor="password">Password</label>
              <a href="mailto:info@trccontractors.com?subject=Reset%20portal%20password">Forgot password?</a>
            </div>
            <input id="password" name="password" type="password" placeholder="Enter your password" autoComplete="current-password" />
            <a className="portal-submit" href={portalUrl}>Sign in securely <span aria-hidden="true">→</span></a>
          </div>
          <p className="portal-help">Need access? <a href="mailto:info@trccontractors.com?subject=Client%20portal%20access">Request an invitation</a></p>
          <p className="portal-security"><span aria-hidden="true">◈</span> Protected project access · Activity is recorded for accountability</p>
        </div>
      </section>
      <section className="portal-visual" aria-label="TRC construction project">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/imagery/katwe-mixed-use-front.jpeg" alt="TRC mixed-use construction project" />
        <div className="portal-visual-overlay" />
        <div className="portal-visual-copy"><p>Design · Build · Roof</p><h2>Every project,<br />in one clear view.</h2></div>
      </section>
    </main>
  );
}
