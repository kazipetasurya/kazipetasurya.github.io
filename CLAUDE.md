# CLAUDE.md

## Before and after every change
1. **Before** any change, read `docs/DECISIONS.md` and `docs/CHANGELOG.md`.
2. **After** any change, add a dated entry to `docs/CHANGELOG.md` (newest first).
3. If a design or structural choice was made, also add an entry to `docs/DECISIONS.md` (date, decision, why).

## What this is
Personal portfolio for Surya Kazipeta (Senior Product Manager, AI agents). Content is sourced from his resume; do not add claims or metrics the resume does not support. Single-page site in
plain HTML/CSS/vanilla JS. No build step, no package manager, no dependencies beyond
Google Fonts. Deployed by GitHub Pages from `main` (user site: `kazipetasurya.github.io`).
The Pages source setting is not visible from the repo; confirm in GitHub settings if it matters.

## Files
- `index.html` — the whole page, including the inline SVG fern background.
- `styles.css` — all styling, theme tokens in `:root`.
- `script.js` — sticky-nav shadow, mobile menu toggle, scroll-reveal (IntersectionObserver), footer year.
- `_config.yml` — Jekyll config; excludes `CLAUDE.md` and `docs/` from the published site.
- `.gitignore` — ignores `.DS_Store`, `assets/` and `private/` (private/ holds resume source files; never commit or copy them into tracked files).
- `CLAUDE.md` — this file.
- `docs/DECISIONS.md` — log of design/structural choices and why.
- `docs/CHANGELOG.md` — dated change log, newest first.

## Section map (index.html)
| ID | Purpose | Lines (approx.) |
|---|---|---|
| (nav) | Name mark, Menu button (<=460px), anchor links | 40-54 |
| `#hero` | Headline, lede, CTAs, 4 quick facts | 56-79 |
| `#impact` (01) | Selected impact: 4 metric cards | 81-118 |
| `#path` (02) | Timeline: Elife, Al Jazeera, Blibli, early career | 120-185 |
| `#craft` (03) | Skills (6 grouped tag lists) + education | 187-265 |
| `#contact` (04) | Email, LinkedIn, GitHub | 267-282 |
| (footer) | Name, year, location | 284-288 |

Line numbers drift as the file changes; search for the section ID instead.

## Design system
Tokens (`:root` in `styles.css`):
- Colors: `--paper` #f6f2ea, `--ink` #26241f, `--ink-soft` #5c574d, `--forest` #3f5540,
  `--clay` #b0623d, `--card` #fffdf8, `--band` #efe9dd, `--line` rgba(38,36,31,.12)
- Layout: `--content-width` 1040px, `--gutter` clamp(1.25rem,4vw,3rem), `--radius` 14px, `--shadow`
- Fonts: Fraunces (serif; headings, numbers) and Inter (body), loaded from Google Fonts
- Breakpoints: `min-width: 700px` (4-col facts), `max-width: 699px` (stack layouts),
  `max-width: 640px` (hide fern), `max-width: 460px` (nav links collapse into a Menu dropdown), `prefers-reduced-motion`
- Look: warm paper, forest green + clay accents, grain overlay, fixed corner fern SVG
- Naming: BEM-style (`.path__item`, `.feature__stats`, `.btn--solid`)

## Conventions
- Use existing tokens; don't introduce new hardcoded colors when a token fits.
- No frameworks, no build tooling, no new dependencies. Vanilla JS only.
- Keep `prefers-reduced-motion` support (CSS block + JS check in `script.js`).
- Keep the writing voice: calm, concrete, first person, outcome-focused with numbers. No buzzwords, no em dashes.
- New content blocks that should animate in get the `.reveal` class.
- Keep the layout working at phone width.

## Known issues (checklist)
- [ ] `.gitignore` excludes `assets/`, so images/PDFs placed there won't deploy
- [ ] No favicon, `og:image`, `og:url`, or Twitter card meta tags
- [ ] Small text sizes (nav 0.78rem, `.edu__meta` 0.73rem) and `.path__item--quiet` at 0.68 opacity may fail contrast
- [ ] `!important` on `.edu__deg` / `.edu__meta` / `.edu__note`
- [ ] `.reveal` content stays invisible if JS fails (no `<noscript>` fallback)
- [ ] Inline fern SVG is bulky in `index.html`
- [ ] LinkedIn and GitHub links not verified
- [ ] Mobile menu (<=460px) not tested on a real device
- [ ] `private/Resume_-_Content.md` was not available when content was curated, so facts were checked against the PDF only

Resolved 2026-10-01: "Daniels" confirmed correct (resume has a typo); FeedLens removed by choice; Tracxn IPO note verified by owner; unused `.btn--ghost` (now the hero "Email me" button), missing mobile nav, unlinked/adjacent muted `#momentum`, FloSense and unverified metrics.

## Local preview
```
python3 -m http.server 8000
```
Then open http://localhost:8000. No build needed.
