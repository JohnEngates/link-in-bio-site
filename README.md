# link-in-bio-site

A clean, professional link-in-bio website for John Engates, featuring his work in AI research and multi-agent systems.

## Overview

This static website serves as a central hub for John's online presence, providing:
- Quick bio focused on current AI research
- Links to social profiles (LinkedIn, X, GitHub)
- Full narrative biography with career highlights
- Speaker bio for conferences and events
- Professional headshot downloads

## Features

- **Responsive Design**: Optimized for both mobile and desktop viewing
- **Fast Loading**: Static HTML with CDN-hosted dependencies
- **Accessibility**: ARIA labels and semantic HTML
- **Analytics**: Google Analytics integration for visitor insights
- **SEO Optimized**: Meta tags and Open Graph data for social sharing

## Tech Stack

- HTML5
- Tailwind CSS (via CDN)
- Font Awesome icons (via CDN)
- Vanilla JavaScript (for modal functionality)
- Deployed on Cloudflare Pages

## Local Development

To run locally, simply open `index.html` in a browser or use a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`

## Deployment

The site automatically deploys to Cloudflare Pages when changes are pushed to the main branch on GitHub.