# Decisions

Log of design and structural choices. Newest first. Format: date, decision, why.

## 2026-10-01 — Remove FeedLens; restore Tracxn IPO note
**Decisions:**
- FeedLens removed from the page entirely, by the owner's choice (timeline entry and "founder" wording gone). It is still on the resume; this is a page-only curation call.
- Tracxn "since gone public" restored in the early-career entry. The owner confirmed it as a verified fact, even though the resume PDF does not state it.
- "Daniels School of Business" stays; the owner confirmed it is the correct name (the resume's "Daniel" is a typo).
**Why:** Keeps the page focused on the AI-agent and product-leadership story. The timeline now runs Elife, Al Jazeera, Blibli, early career, with an undated gap between Elife and Al Jazeera that is accepted for now.

## 2026-10-01 — Content curation for the resume-based rework
**Decisions:**
- Remove FloSense entirely and drop the CEO title; the page leads with Senior PM and production AI agents.
- Resume is the single source of truth. Stashly is not on it, so it was cut. Litmetrics appears only in Education.
- "Proof of momentum" removed: nothing was left that was resume-backed and not repeated elsewhere.
- "Selected impact" capped at 4 cards, one headline metric each, with Elife, Al Jazeera and Blibli covered there. The timeline uses different supporting facts so numbers are not repeated.
- Cut unverifiable claims from the old page: "4.8 rating", "now IPO'd", "four countries", "0 to 1 and scale".
- FeedLens was initially kept (wind-down line included); superseded by the next entry.
- Skills use the resume's six Core Competencies groups verbatim, as tags, no progress bars.
- Section order is Impact, Path, Skills, Contact so the two muted bands alternate with plain sections.
- Hero "Email me" reuses the existing ghost button; a mobile Menu button replaces hiding nav links below 460px.
**Why:** A visitor should see who he is, what he shipped and what he is good at within seconds, without claims that can't be traced to the resume. Note: the master profile file was missing from `private/`, so checks used the PDF only.

## 2026-10-01 — Exclude CLAUDE.md and docs/ from GitHub Pages via _config.yml
**Decision:** Add `_config.yml` with an `exclude` list for `CLAUDE.md` and `docs/`.
**Why:** These are working notes for development, not site content. Pages runs Jekyll by
default, so `exclude` keeps them from being published. This only takes effect if Pages
builds with Jekyll (the default branch deploy); a custom Actions workflow would ignore it.

## 2026-10-01 — Keep project context in the repo (CLAUDE.md + docs/)
**Decision:** Track a CLAUDE.md, a decisions log, and a changelog in the repo.
**Why:** Lets future sessions start with the stack, section map, and design rules without
re-exploring the codebase, and records the reasoning behind choices.

## Earlier — Stay plain HTML/CSS/JS with no framework
**Decision:** The site is hand-written HTML, one stylesheet, and one small vanilla JS file.
No static site generator, bundler, or package manager.
**Why:** It is a single-page portfolio of roughly 27 KB. A framework or build step would add
maintenance and dependencies without benefit, and plain files deploy directly on GitHub Pages.
(Recorded retroactively; date of the original choice is unknown.)
