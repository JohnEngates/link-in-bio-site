# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static "link-in-bio" website for John Engates, Field CTO at Cloudflare. It consists of two simple HTML pages with no build process or backend requirements.

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
   - Profile picture (`john.png`)
   - Brief bio and title
   - Social media links (LinkedIn, Twitter/X, GitHub)
   - Link to Cloudflare
   - Navigation to full bio page

2. **bio.html** - Detailed biography page with:
   - Professional headshot (`engates_john.jpg`)
   - Full three-paragraph biography
   - Headshot download functionality
   - Back navigation to main page

## Key Technical Details

- **Styling**: Tailwind CSS via CDN (no custom CSS files)
- **Icons**: Font Awesome via CDN for social media icons
- **Custom Styles**: Minimal inline CSS for Twitter/X icon color customization
- **Images**: Direct file references (no optimization pipeline)
- **Responsive Design**: Tailwind utility classes handle mobile/desktop layouts

## File References

When modifying the site structure or styling:
- Social links section: `index.html:30-49`
- Bio content: `bio.html:21-29`
- Profile image styling: `index.html:18-20`
- Custom Twitter/X icon styles: `index.html:9-13`

## Deployment

This static site can be deployed to any web server or static hosting service without modification. Common options include GitHub Pages, Netlify, Vercel, or any traditional web hosting.