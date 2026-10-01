# Decisions

Log of design and structural choices. Newest first. Format: date, decision, why.

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
