"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./login.module.css";

type Role = "client" | "engineer" | "professional";

const copy: Record<Role, { lede: string; label: string }> = {
  client: {
    lede: "Track your project's progress, approvals, and documents in one place.",
    label: "Email",
  },
  engineer: {
    lede: "Log site reports, RFIs, and daily progress from the field.",
    label: "Work email",
  },
  professional: {
    lede: "Architects, consultants, and subcontractors — manage submittals and drawings.",
    label: "Professional email",
  },
};

const roles: { key: Role; label: string; path: string }[] = [
  { key: "client", label: "Client", path: "M4 21V9l8-6 8 6v12 M9 21v-7h6v7" },
  {
    key: "engineer",
    label: "Site Engineer",
    path: "M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.5 1z",
  },
  { key: "professional", label: "Professionals", path: "M4 4h16v14H8l-4 4z M8 9h8M8 13h5" },
];

function useReveal() {
  const [in_, setIn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIn(true), 80);
    return () => clearTimeout(t);
  }, []);
  return in_;
}

export default function LoginPage() {
  const [role, setRole] = useState<Role>("client");
  const [submitted, setSubmitted] = useState(false);
  const revealed = useReveal();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend wired up — this is a static design concept.
    setSubmitted(true);
  };

  const reveal = () => `${styles.reveal} ${revealed ? styles.in : ""}`;

  return (
    <div className={styles.shell}>
      {/* Brand panel */}
      <div className={styles.brand}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.brandImg} src="/assets/imagery/highland-exterior.png" alt="" />
        <div className={styles.brandScrim} />
        <div className={styles.brandGrid}>
          <div />
          <div />
          <div />
          <div />
        </div>

        <div className={styles.brandTop}>
          <Link className={styles.brandMark} href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logos/trc-symbol-white.png" alt="" />
            <span>TRC Contractors</span>
          </Link>
        </div>

        <div className={`${styles.brandBottom} ${reveal()}`}>
          <div className={styles.brandEyebrow}>
            <span />
            Portal
          </div>
          <h1 className={styles.brandHeadline}>
            One record of the project, for <em>everyone building it.</em>
          </h1>
          <p className={styles.brandSub}>
            Clients, site engineers, and consulting professionals working from the same drawings, the same
            programme, the same approvals — no version confusion, no lost email threads.
          </p>
        </div>
      </div>

      {/* Form panel */}
      <div className={styles.panel}>
        <div className={styles.card}>
          <Link className={styles.cardMark} href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logos/trc-symbol-trimmed.png" alt="" />
            <span>TRC Contractors</span>
          </Link>

          <div className={`${styles.cardEyebrow} ${reveal()}`}>
            <span />
            Sign in
          </div>
          <h1 className={reveal()}>Welcome back.</h1>
          <p className={`${styles.lede} ${reveal()}`}>{copy[role].lede}</p>

          <div className={`${styles.roles} ${reveal()}`} role="tablist" aria-label="Portal">
            {roles.map((r) => (
              <button
                key={r.key}
                type="button"
                className={`${styles.role} ${role === r.key ? styles.selected : ""}`}
                role="tab"
                aria-selected={role === r.key}
                onClick={() => setRole(r.key)}
              >
                <svg viewBox="0 0 24 24">
                  <path d={r.path} />
                </svg>
                <span>{r.label}</span>
              </button>
            ))}
          </div>

          <form className={`${styles.form} ${reveal()}`} onSubmit={onSubmit}>
            <div className={styles.field}>
              <label htmlFor="email">{copy[role].label}</label>
              <input id="email" type="email" placeholder="you@company.com" autoComplete="username" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="••••••••••" autoComplete="current-password" required />
            </div>
            <div className={styles.row}>
              <label className={styles.remember}>
                <input type="checkbox" />
                Remember me
              </label>
              <a className={styles.forgot} href="#">
                Forgot password?
              </a>
            </div>
            <button className={styles.submit} type="submit">
              Sign in
            </button>
            <div className={styles.demoNote}>
              {submitted
                ? "Static design concept — no auth provider is connected yet."
                : "Static design concept — connect this form to your auth provider before going live."}
            </div>
          </form>

          <div className={`${styles.divider} ${reveal()}`}>New here</div>
          <div className={`${styles.request} ${reveal()}`}>
            <span style={{ opacity: 0.62 }}>Don&apos;t have portal access yet?</span>
            <a href="#">Request access</a>
          </div>
        </div>
      </div>
    </div>
  );
}
