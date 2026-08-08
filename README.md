# TRC Contractors — Website

**Design. Build. Roof.** One accountable team, one architectural idea, carried from structure through to skin.
Kampala, Uganda.

<p align="center">
  <img src="assets/readme/face-of-code.png" alt="A photorealistic human face, its skin, eyes, and features rendered entirely from dense glowing code and numerals in aged bronze and copper tones" width="480" />
</p>

*Every pixel of that face is code — numerals and syntax standing in for skin, light, and shadow. Same principle as the build: precision close up, a whole face at a distance.*

---

## What this is

The full marketing site for **TRC Contractors**: a hero scroll-film, practice statement, materials showcase, project grid, services, process, testimonials, a case-study detail page, and a client portal login — all hand-built as dependency-free HTML, driven by a small custom design-system runtime.

No build step. No framework. Open a file, it runs.

## Live pages

| File | Route | Purpose |
|---|---|---|
| [`Website.dc.html`](Website.dc.html) | Homepage | Hero film, practice, materials, work, services, process, testimonials, CTA |
| [`ProjectDetail.dc.html`](ProjectDetail.dc.html) | Case study | Highland Residence — single-project deep dive |
| [`Login.html`](Login.html) | `/Login.html` | Client portal sign-in |
| [`Website v1.dc.html`](Website%20v1.dc.html) | Archive | Earlier homepage iteration, kept for reference |

## Running it locally

The site is static, but the hero scroll-film and image slots are easiest to preview through a tiny no-cache dev server (so edits show up on refresh without a hard reload):

```bash
python _nocache_server.py
```

Then open `http://localhost:8000/Website.dc.html`. Any static server (`npx serve`, VS Code Live Server, etc.) works too — there's nothing to compile.

## Tech stack

- **Structure** — semantic HTML5, single-file pages (`.dc.html`)
- **Behavior** — vanilla JS (`support.js`, `image-slot.js`, `ds-base.js`) — no framework, no bundler
- **Styling** — CSS custom properties as design tokens, scoped inline styles
- **Type** — [Newsreader](https://fonts.google.com/specimen/Newsreader) (display serif) + [Archivo](https://fonts.google.com/specimen/Archivo) (body grotesk), via Google Fonts
- **Motion** — slow, deliberate easing (`0.5–0.8s`, `cubic-bezier(.4,0,.2,1)`) — a scroll-driven hero film with a static fallback for mobile / reduced-motion

## Design system

Source of truth lives in [`_ds/`](_ds/trc-contractors-design-system-3a4b20d3-d96c-403d-8681-08c6fa2a5270) — tokens, guidelines, and six core components (`Button`, `Footer`, `Nav`, `ProjectCard`, `SectionHeading`, `Tag`).

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

**Principles** — flat surfaces (no shadows, near-zero radius), generous whitespace (5vw gutters, 96–128px section rhythm), motion used sparingly and slowly. Full rationale in [`_ds/.../guidelines`](_ds/trc-contractors-design-system-3a4b20d3-d96c-403d-8681-08c6fa2a5270/guidelines).

## Structure

```
.
├── Website.dc.html            # Homepage
├── ProjectDetail.dc.html      # Case study page
├── Website v1.dc.html         # Archived homepage draft
├── Login.html                 # Client portal
├── ds-base.js                 # Design-system runtime base
├── image-slot.js              # Responsive image-slot handling
├── support.js                 # Shared page behavior
├── favicon.png
├── _nocache_server.py         # Local dev server, no-cache headers
├── assets/
│   ├── film/                  # Hero scroll-film — master.mp4 + frame sequence
│   ├── imagery/                # Hero + case-study photography
│   └── logos/                  # Symbol marks
└── _ds/                       # Design system: tokens, guidelines, components
```

## Credits

Built for **TRC Contractors**, Kampala, Uganda.

---

<sub>Every wall we build carries a roof. Every README carries a face.</sub>
