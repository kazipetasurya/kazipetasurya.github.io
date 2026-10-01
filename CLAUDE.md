# CLAUDE.md

## Before and after every change
1. **Before** any change, read `docs/DECISIONS.md` and `docs/CHANGELOG.md`.
2. **After** any change, add a dated entry to `docs/CHANGELOG.md` (newest first).
3. If a design or structural choice was made, also add an entry to `docs/DECISIONS.md` (date, decision, why).

## What this is
Personal portfolio for Surya Kazipeta (CEO & Co-Founder, FloSense). Single-page site in
plain HTML/CSS/vanilla JS. No build step, no package manager, no dependencies beyond
Google Fonts. Deployed by GitHub Pages from `main` (user site: `kazipetasurya.github.io`).
The Pages source setting is not visible from the repo; confirm in GitHub settings if it matters.

## Files
- `index.html` — the whole page, including the inline SVG fern background.
- `styles.css` — all styling, theme tokens in `:root`.
- `script.js` — sticky-nav shadow on scroll, scroll-reveal (IntersectionObserver), footer year.
- `_config.yml` — Jekyll config; excludes `CLAUDE.md` and `docs/` from the published site.
- `.gitignore` — ignores `.DS_Store` and `assets/` (note: anything in `assets/` is NOT deployed).
- `CLAUDE.md` — this file.
- `docs/DECISIONS.md` — log of design/structural choices and why.
- `docs/CHANGELOG.md` — dated change log, newest first.

## Section map (index.html)
| ID | Purpose | Lines (approx.) |
|---|---|---|
| (nav) | Name mark + anchor links | 40-51 |
| `#hero` | Headline, lede, CTA, 4 quick facts | 55-76 |
| `#building` (01) | FloSense feature card | 79-105 |
| `#momentum` (02) | Stashly and Litmetrics badges | 108-128 |
| `#path` (03) | Experience timeline | 131-195 |
| `#craft` (04) | Skill tags + education | 198-249 |
| `#contact` (05) | LinkedIn and GitHub links | 252-265 |
| (footer) | Name, year, location | 268-271 |

Line numbers drift as the file changes; search for the section ID instead.

## Design system
Tokens (`:root` in `styles.css`):
- Colors: `--paper` #f6f2ea, `--ink` #26241f, `--ink-soft` #5c574d, `--forest` #3f5540,
  `--clay` #b0623d, `--card` #fffdf8, `--band` #efe9dd, `--line` rgba(38,36,31,.12)
- Layout: `--content-width` 1040px, `--gutter` clamp(1.25rem,4vw,3rem), `--radius` 14px, `--shadow`
- Fonts: Fraunces (serif; headings, numbers) and Inter (body), loaded from Google Fonts
- Breakpoints: `min-width: 700px` (4-col facts), `max-width: 699px` (stack layouts),
  `max-width: 640px` (hide fern), `max-width: 460px` (hide nav links), `prefers-reduced-motion`
- Look: warm paper, forest green + clay accents, grain overlay, fixed corner fern SVG
- Naming: BEM-style (`.path__item`, `.feature__stats`, `.btn--solid`)

## Conventions
- Use existing tokens; don't introduce new hardcoded colors when a token fits.
- No frameworks, no build tooling, no new dependencies. Vanilla JS only.
- Keep `prefers-reduced-motion` support (CSS block + JS check in `script.js`).
- Keep the writing voice: calm, concrete, first person, outcome-focused with numbers.
- New content blocks that should animate in get the `.reveal` class.
- Keep the layout working at phone width.

## Known issues (checklist)
- [ ] `.btn--ghost` in `styles.css` is unused (dead CSS)
- [ ] Nav links are hidden below 460px with no mobile menu replacement
- [ ] `.gitignore` excludes `assets/`, so images/PDFs placed there won't deploy
- [ ] No favicon, `og:image`, `og:url`, or Twitter card meta tags
- [ ] "Proof of momentum" (`#momentum`) is not linked in the nav
- [ ] `#momentum` and `#path` are both `section--muted`, so they merge into one band
- [ ] Small text sizes (nav 0.78rem, `.edu__meta` 0.73rem) and `.path__item--quiet` at 0.68 opacity may fail contrast
- [ ] `!important` on `.edu__deg` / `.edu__meta`
- [ ] `.reveal` content stays invisible if JS fails (no `<noscript>` fallback)
- [ ] Inline fern SVG is bulky in `index.html`
- [ ] External links (flosense.dev, LinkedIn, GitHub) not verified
- [ ] Content claims (partners, metrics) not verified as current

## Local preview
```
python3 -m http.server 8000
```
Then open http://localhost:8000. No build needed.
