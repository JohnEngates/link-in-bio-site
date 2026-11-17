# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

johnengates.com is the personal and professional site for John Engates: background, career, boards, speaking, and press. It is the sibling of exagentica.ai (repo `JohnEngates/exAgentica`), his personal agentic AI lab. The lab holds current work and writing; this site holds credentials and history. The two share a design language and link to each other.

It is a static Astro site with five pages, a dark default theme with a light toggle, and no backend.

## Development Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # serve the built site
```

- **Node**: 22.19 or newer (see `.nvmrc`)
- **Testing**: no automated tests. Build, then check pages in a browser at desktop and phone widths in both themes.
- **Linting**: none configured

## Architecture

- `src/data/` is the single source of content. Edit facts here, not in pages.
  - `site.ts`: name, links, contact email, nav, and the third-person bios used in the press kit
  - `career.ts`: roles, milestones, recognition, education
  - `boards.ts`: board seats, advisory roles, areas
  - `speaking.ts`: topics and appearances by year
  - `press.ts`: articles, interviews, Healthcare.gov coverage
- `src/pages/`: `index`, `about`, `speaking`, `boards`, `press`, `404`. Each numbers its sections with an eyebrow like `01 / Background`.
- `src/pages/*.ts` endpoints generate `robots.txt`, `llms.txt`, `llms-full.txt`, `agents/index.md`, and `John_Engates_Speaker_Bio.txt` from `src/data/` via `src/lib/markdown.ts`.
- `src/layouts/Base.astro`: head, nav, footer, theme toggle, analytics.
- `src/components/`: `SectionHead`, `Photo` (optimized image with caption), `PressKit` (bio copy and downloads), `Contact`.
- `src/styles/global.css`: design tokens and all styles.
- `src/assets/photos/`: photographs, optimized by Astro at build. Photos on About and Speaking are attached to a role or appearance by a map at the top of each page.
- `public/`: files served unchanged. `engates_john.jpg` is the headshot download, `john.png` the social image, `engates1x1.png` the square portrait.

## Design

The site shares exAgentica's system: charcoal `#0b1115` background, Inter for text, IBM Plex Mono for labels and dates, hairline rules, square rows, 1120px content width. See `design.md` in the exAgentica repo.

What differs here, on purpose:

- Accent is coral (`--accent`: `#f4906c` dark, `#c0441a` light) where the lab uses teal. It picks up the orange in the portrait.
- The lab's teal (`--lab`) appears only on links that point to exAgentica.
- A light theme exists (`:root[data-theme='light']`). Dark is the default; the choice is stored in `localStorage` under `theme`.
- Photography is used throughout. The lab's aurora and particle field are not.

## Copy rules

- First person, plain language, no promotional phrasing. No em dashes.
- The speaker bio and short bio in `site.ts` are third person because organizers paste them as written.
- Do not invent facts, numbers, or quotes. When sources disagree, ask John.
- When Astro markup puts an inline tag on a new line after text, add `{' '}` or the space is dropped.

## Deployment

Cloudflare Pages deploys on push to `main`. Build command `npm run build`, output directory `dist`, `NODE_VERSION=22`. The site is served at johnengates.com and bio.johnengates.com; canonical URLs use johnengates.com (`site` in `astro.config.mjs`).
