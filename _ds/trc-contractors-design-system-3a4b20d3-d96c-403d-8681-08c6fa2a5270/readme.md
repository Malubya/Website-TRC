# TRC Contractors — Design System

**Material Modernism.** TRC Contractors designs, builds, and roofs — one discipline carried from structure through to skin. This design system covers the marketing website: the one product surface this brand currently has.

## Sources
- `uploads/claude-design-brief.md` — brand brief: colours, type direction, tone words, interface DO/DON'T rules.
- `uploads/palette.md` — the approved colour & material palette with usage principles.
- `uploads/manifest.md` — asset manifest (Higgsfield job IDs) for every generated image/logo/video, including what was **not yet generated** (see Caveats below).
- `uploads/embed-guide.md` — reference HTML/CSS snippets the brief shipped with (hero video, project grid, material-texture section, logo placement) — several components here follow these patterns directly.
- 7 generated images in `uploads/` — 3 logo variants, 1 homepage hero, 3 "Highland Residence" project photos.

No Figma file, codebase, or slide deck was attached. This system is built from the brief + generated imagery only.

## Components
Core UI primitives, `components/core/`:
- **Button** — primary (solid bronze), ghost (outlined), link (inline italic serif)
- **Tag** — small-caps metadata label (numbering, materials, category eyebrows)
- **SectionHeading** — eyebrow + serif headline + lead paragraph
- **ProjectCard** — full-bleed photography tile with overlay metadata
- **Nav** — site header, logo + text links, transparent-over-hero option
- **Footer** — dark closing footer with link columns

No component library or Figma file was provided, so this is a standard set sized to the brand's one product (a small marketing site) — not a full app component library. Add more only as real screens need them.

## UI Kits
`ui_kits/website/` — the marketing site, click-through: Homepage (hero, practice statement, project grid, material section) → Highland Residence case study → back.

## Index
- `styles.css` — root stylesheet, imports everything below.
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/surfaces.css`
- `assets/logos/` — originals (trc-logo-dark-bg.png, trc-logo-bronze.png, trc-symbol.png) plus whitespace-trimmed derivatives used in UI: trc-lockup-dark-bg.png, trc-lockup-bronze.png, trc-symbol-trimmed.png, trc-symbol-white.png (symbol recoloured to Architectural White for dark surfaces). The generated square lockups carry too much internal detail to read at nav scale, so Nav and Footer rebuild the lockup as symbol + letterspaced Archivo wordmark.
- `assets/imagery/` — hero-hillside-golden-hour.png, highland-exterior.png, highland-interior.png, material-detail-copper-stone.png
- `components/core/` — see Components above
- `guidelines/` — foundation specimen cards (Brand, Colors, Type, Spacing, Surfaces, Motion, Imagery)
- `ui_kits/website/` — see UI Kits above
- `SKILL.md` — portable skill file for use outside this product

---

## Content Fundamentals
- **Voice:** first-person plural, declarative, short sentences. *"We design. We build. We roof."* The brief's own blurb sets the model: *"we believe restraint is what makes a building feel expensive."*
- **Point of view:** "we" throughout; the brand speaks as the practice, not "you"-directed marketing copy.
- **Casing:** sentence case for body copy and headlines; small-caps/uppercase reserved for metadata only (nav links, project numbering, category tags) — never for headlines.
- **Tone words:** Precise · Material · Restrained · Confident · Editorial · Warm.
- **No emoji, no exclamation points, no hype language** ("game-changing," "revolutionary"). Confidence comes from restraint, not superlatives.
- **Project metadata is structured and terse:** a two-digit number, a project name, a category + material list (e.g. "01 — Luxury Residential — Travertine, Steel, Copper"), never a paragraph.

## Visual Foundations
- **Colour:** Architectural White + Travertine carry roughly 70% of any composition (space, restraint). Charcoal Steel for all primary type. Aged Bronze is the one accent that appears as a filled surface (CTAs, hover states). Deep Copper is a signature — reserved specifically for roofing content, never used as a general accent.
- **Type:** a high-contrast editorial serif for display (headlines, project titles) paired with a neutral grotesk for body/nav/metadata — see Typography Substitution below.
- **Imagery:** full-bleed, real architectural photography dominates — never small template-style cards. Warm, golden-hour natural light; no filters, grain, or stylization added. No stock hard-hat/construction imagery, ever.
- **Backgrounds:** flat colour or full-bleed photography only. No gradients or glow effects except a single soft dark-to-transparent overlay used under text on top of photography (for legibility, not decoration).
- **Motion:** slow and deliberate, used sparingly — the hero sequence is the one intentional moment of movement on a page. Fades/reveals at 0.5–0.8s with a gentle ease-out curve (`--ease-editorial`). No bounces, no snappy micro-interactions.
- **Hover states:** primary buttons darken (Aged Bronze → Walnut); ghost buttons invert to a solid Charcoal Steel fill; project card images scale up ~3% under a fixed frame; links darken from Graphite Glass to Charcoal Steel. No colour brightening, no glow.
- **Press states:** not specified in the brief; treat as a continuation of hover (no separate shrink/scale effect — keep interactions calm).
- **Borders:** hairline only (1px, low-opacity charcoal), used for structural separation (nav underline, card grid gaps) — never as a decorative accent colour border.
- **Corner radius:** effectively none. The identity is flat and precise by design; nothing is rounded.
- **Cards:** the "card" is the photograph itself — no white card background, no shadow, no rounded corners, no border. Metadata overlays directly on the image with a gradient scrim for legibility.
- **Shadows:** none. Elevation is expressed by contrast and whitespace, not drop shadows.
- **Transparency / blur:** used once, deliberately — the material-texture section background (a material photo faded under ~88% Architectural White) per `embed-guide.md`'s `.material-section` pattern. No blur effects anywhere.
- **Layout:** wide full-bleed sections separated by generous vertical rhythm (verticals space at 96–128px); grid gutters at 2px between project tiles (read as structural joints, not padding); nav is a simple fixed two-side row (logo + links), never a hamburger — the link count stays low by design.

## Typography Substitution — please read
The brief specifies **Canela, GT Sectra, or Times Now** (display) and **Neue Haas Grotesk, Suisse Int'l, or Inter** (body). None of these are freely licensable webfonts, and Inter is avoided here as an overused default.

This system substitutes the closest available Google Fonts:
- Display → **Newsreader** (high-contrast serif, editorial character close to Times Now/Canela)
- Body → **Archivo** (neutral grotesk close to Suisse Int'l/Neue Haas)

**If you have licensed files for the actual specified typefaces, please share them** — swapping in real `@font-face` files in `tokens/typography.css` is a five-minute change.

## Iconography
No icon system, icon font, or SVG set was provided in the brief or manifest — the brand materials are logo + photography only. The UI kit uses no decorative icons; the one functional glyph needed (the back-arrow on the case-study page) is a plain typed "←" character rather than an SVG. If the site needs further interface icons (menu, play, arrow), recommend a minimal single-weight outline set (~1.5px stroke, e.g. Lucide) rather than inventing bespoke iconography — nothing in the brief suggests a custom icon language.

## Caveats — please help me iterate
- **The "light-background primary" logo variant** listed in `manifest.md` (job `056af552…`) was never delivered to this project — only dark-background, bronze, and symbol-only variants exist. The UI kit substitutes the bronze mark on light nav bars as a stand-in. Please provide the missing file, or confirm the bronze mark should be the permanent light-background lockup.
- **Material textures** (travertine, walnut grain, brushed steel — listed in the manifest) and the **cinematic hero motion sequence** were not delivered (`manifest.md` notes the generation budget ran out at 5.5 credits remaining). The hero uses the static golden-hour still in place of video; the Motion foundation card documents the intended easing/timing only, without a real clip.
- **Only one flagship project** ("The Highland Residence," itself a placeholder name pending a real project) exists — the manifest recommends 2–4. The case-study page and project grid currently show just this one entry.
- Blueprint/drawing graphics, construction-process imagery, and additional craftsmanship close-ups (all listed in the original asset plan) were never generated — flagged here rather than invented.
- Typography is a Google Fonts substitution, not the brief's specified typefaces — see above.

**Ask:** once you can share (a) the missing light-background logo, (b) the real material textures + hero video, and (c) a second real project's name/photos, I can tighten the palette-to-asset mapping and build out the remaining "Custom Architectural Asset Plan" extras (material studies, blueprint graphics, construction atmosphere, etc.) the brief called for. Let me know which of those extras matter most and I'll prioritize.
