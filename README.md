# johnengates.com

Personal and professional site for John Engates: background, career, boards,
speaking, and press. It is the sibling of [exagentica.ai](https://exagentica.ai),
which holds current work and writing.

## Develop

Requires Node 22.19 or newer.

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

The build writes a static site to `dist/`.

## Deploy

Cloudflare Pages, on push to `main`. The project needs these build settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: `NODE_VERSION` = `22`

## Where things live

- `src/data/` holds all content: career, boards, speaking, press, bios. Pages,
  `llms.txt`, `llms-full.txt`, `agents/index.md` and the speaker bio download
  are all generated from it.
- `src/pages/` has one file per page.
- `src/styles/global.css` has the design tokens and all styles.
- `src/assets/photos/` holds photographs, optimized at build time.
- `public/` holds files served as they are, including the headshot download.
