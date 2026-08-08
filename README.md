# TRC Contractors — Website

**Design. Build. Roof.** One accountable team, one architectural idea, carried from structure through to skin.
Kampala, Uganda.

<p align="center">
  <img src="docs/face-of-code.png" alt="A photorealistic human face, its skin, eyes, and features rendered entirely from dense glowing code and numerals in aged bronze and copper tones" width="480" />
</p>

*Every pixel of that face is code — numerals and syntax standing in for skin, light, and shadow. Same principle as the build: precision close up, a whole face at a distance.*

---

## What this is

The full marketing site for **TRC Contractors**: a scroll-scrubbed hero film, practice statement, materials
showcase, project grid, services, process, a contact form, a case-study detail page, and a client portal
login — built as a [Next.js](https://nextjs.org) (App Router) + TypeScript app.

## Routes

| Route | File | Purpose |
|---|---|---|
| `/` | [`app/page.tsx`](app/page.tsx) | Homepage — hero film, practice, materials, work, services, process, contact |
| `/work/highland-residence` | [`app/work/highland-residence/page.tsx`](app/work/highland-residence/page.tsx) | Case study — Highland Residence deep dive |
| `/login` | [`app/login/page.tsx`](app/login/page.tsx) | Client portal sign-in |

## Running it locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`. `npm run build && npm run start` serves the production build.

## Tech stack

- **Framework** — [Next.js](https://nextjs.org) 15 (App Router), [React](https://react.dev) 19, TypeScript
- **Styling** — CSS custom properties as design tokens ([`app/globals.css`](app/globals.css)) + CSS Modules for scoped component styles; no CSS framework
- **Type** — [Newsreader](https://fonts.google.com/specimen/Newsreader) (display serif) + [Archivo](https://fonts.google.com/specimen/Archivo) (body grotesk), loaded via `next/font/google`
- **Motion** — slow, deliberate easing (`0.5–0.8s`, `cubic-bezier(.4,0,.2,1)`) — a canvas-scrubbed hero film (349-frame sequence, off-thread decode via `createImageBitmap`, manual scroll-pin) with a static fallback for mobile / reduced-motion; scroll-reveal via `IntersectionObserver`

## Design system

Token source of truth lives in [`app/globals.css`](app/globals.css), ported from the original design system
(archived in [`legacy-static/_ds/`](legacy-static/_ds)) — six component patterns (`Button`, `Footer`, `Nav`,
`ProjectCard`, `SectionHeading`, `Tag`) are now real components under [`components/`](components).

**Palette**

| Token | Hex | Role |
|---|---|---|
| `--color-architectural-white` | `#F7F5F1` | Primary surface (~70% of the palette) |
| `--color-travertine` | `#D8CBB8` | Secondary surface |
| `--color-charcoal-steel` | `#2B2C2E` | Ink / inverse surface |
| `--color-aged-bronze` | `#8C6239` | Primary accent, CTAs |
| `--color-walnut` | `#5C4433` | Secondary accent |
| `--color-graphite-glass` | `#6E7A80` | Links |
| `--color-deep-copper` | `#B5651D` | Signature accent |

**Principles** — flat surfaces (no shadows, near-zero radius), generous whitespace (5vw gutters, 96–128px section rhythm), motion used sparingly and slowly.

## Structure

```
.
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata
│   ├── globals.css             # Design tokens, keyframes, base styles
│   ├── page.tsx                # Homepage
│   ├── work/highland-residence/
│   │   └── page.tsx            # Case study page
│   └── login/
│       ├── page.tsx            # Client portal sign-in
│       ├── layout.tsx          # Route metadata (page itself is a client component)
│       └── login.module.css
├── components/                 # Nav, Curtain, Footer, HeroFilm, Reveal, Counter,
│                                # SectionHeading, Practice/Materials/Work/Services/
│                                # Process/Contact sections
├── public/
│   ├── favicon.png
│   └── assets/
│       ├── film/                # Hero scroll-film — master.mp4 + 349-frame sequence
│       ├── imagery/              # Hero + case-study photography
│       └── logos/                # Symbol marks
├── docs/
│   └── face-of-code.png        # README hero image (not served by the app)
└── legacy-static/               # Archived pre-Next.js site (.dc.html pages + the
                                  # proprietary dc-runtime that rendered them, plus
                                  # the original _ds/ design-system source) — kept
                                  # for reference, not used by the app
```

## Credits

Built for **TRC Contractors**, Kampala, Uganda.

---

<sub>Every wall we build carries a roof. Every README carries a face.</sub>
