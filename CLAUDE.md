# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal website for John Engates, AI researcher and technology leader. It is a single-page long-scroll site with a dark minimalist aesthetic (claude-flow style), light/dark theme toggle, and no build process or backend requirements.

## Development Commands

Since this is a static website with no build process:

- **Local Development**: Open `index.html` directly in a browser, or use any static file server:
  ```bash
  # Python 3
  python3 -m http.server 8000

  # Node.js (if http-server is installed globally)
  http-server
  ```

- **Testing**: Manual testing in browser (no automated tests)
- **Linting**: No linting configuration (pure HTML/CSS/JS)
- **Building**: No build step required

## Architecture

Single-page site with three files:

1. **index.html** - Complete single-page site with sections:
   - Fixed nav with anchor links (About, Career, Focus, Boards, Writing, Contact) and theme toggle
   - Hero with profile photo, social links (LinkedIn, X, GitHub)
   - About (full narrative bio + stats grid)
   - Career (timeline: Independent, Cloudflare, NTT, Rackspace, Internet Direct)
   - Current Focus (6 expertise cards: Agentic AI, Agentic Coding, Multi-Agent Systems, Local LLMs, Image Generation, Cybersecurity)
   - Highlight quote
   - Board Service (Frost Bank, James Avery, SIM SA, Techstars)
   - Writing & Media (Cloudflare Blog, DevOps.com, Enterprisers Project, alphalist Podcast)
   - Education
   - Contact with headshot download + speaker bio modal
   - Footer with Agent Markdown link

2. **styles.css** - Custom CSS with CSS variables for dark/light themes:
   - Dark mode (default): `--color-bg: #0a0a0a`, blue accent `#4f8ff7`
   - Light mode (`html.light`): `--color-bg: #fafafa`, blue accent `#2563eb`
   - Fonts: Playfair Display (headings) + Inter (body) via Google Fonts
   - 2-column section grid layout, timeline, expertise cards, responsive breakpoints

3. **script.js** - Theme toggle, nav scroll effect, mobile menu, scroll animations, speaker bio modal (copy/download)

## Key Technical Details

- **Styling**: Custom CSS with CSS variables (no Tailwind, no build step)
- **Icons**: Inline SVGs (no Font Awesome)
- **Fonts**: Google Fonts (Inter + Playfair Display)
- **Theme**: Dark default, light mode via `html.light` class, persisted in localStorage
- **Images**: `engates1x1.png` (profile), `engates_john.jpg` (headshot download), `john.png` (OG image)
- **Responsive**: CSS grid + media queries at 900px and 640px breakpoints

## File References

When modifying the site structure or styling:
- Nav + theme toggle: `index.html:63-84`
- Hero + social links: `index.html:87-112`
- About section: `index.html:114-144`
- Career timeline: `index.html:146-211`
- Expertise cards: `index.html:213-276`
- Board service: `index.html:288-320`
- Writing & Media: `index.html:322-361`
- Contact + headshot/speaker bio: `index.html:381-413`
- Speaker bio modal: `index.html:422-439`
- CSS variables: `styles.css:6-22` (dark) and `styles.css:24-36` (light)

## Deployment

This static site is deployed via Cloudflare Pages with automatic deployment on push to the main branch. It can also be deployed to any web server or static hosting service without modification.
