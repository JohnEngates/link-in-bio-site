# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static "link-in-bio" website for John Engates, AI researcher and technology innovator. It consists of two simple HTML pages with no build process or backend requirements.

## Development Commands

Since this is a static website with no build process:

- **Local Development**: Open `index.html` directly in a browser, or use any static file server:
  ```bash
  # Python 3
  python3 -m http.server 8000
  
  # Python 2
  python -m SimpleHTTPServer 8000
  
  # Node.js (if http-server is installed globally)
  http-server
  ```

- **Testing**: Manual testing in browser (no automated tests)
- **Linting**: No linting configuration (pure HTML/CSS)
- **Building**: No build step required

## Architecture

The site consists of two interconnected pages:

1. **index.html** - Main landing page with:
   - Profile picture (`engates1x1.png`)
   - Brief bio about AI research and multi-agent systems
   - Social media links (LinkedIn, X, GitHub)
   - Navigation to full bio page

2. **bio.html** - Detailed biography page with:
   - Professional headshot (`engates_john.jpg`)
   - Full narrative biography with career highlights
   - Headshot download functionality
   - Speaker bio modal with copy/download options
   - Back navigation to main page

## Key Technical Details

- **Styling**: Tailwind CSS via CDN (no custom CSS files)
- **Icons**: Font Awesome via CDN for social media icons
- **Custom Styles**: Inline CSS for Twitter/X icon, animations, and modal functionality
- **Images**: Direct file references (no optimization pipeline)
- **Responsive Design**: Tailwind utility classes handle mobile/desktop layouts

## File References

When modifying the site structure or styling:
- Bio text box: `index.html:57-63`
- Social links section: `index.html:65-93`
- Full biography: `bio.html:54-84`
- Speaker bio modal: `bio.html:99-150`
- Custom Twitter/X icon styles: `index.html:15-21`

## Deployment

This static site is deployed via Cloudflare Pages with automatic deployment on push to the main branch. It can also be deployed to any web server or static hosting service without modification.