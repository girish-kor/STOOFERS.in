# STOOFERS.in

A marketing and storefront React single-page application built with Vite.

This repository contains the front-end for the STOOFERS.in website — a static SPA that showcases product and partner listings, screenshots, GIFs and marketing pages. The README below is an animated-friendly template that documents how to run, build, test and deploy the project.

## Animated header (example)

Add a small animated hero or badge by linking an optimized GIF, MP4 or WebM. Example (file included in the repo):

![Animated hero example](src/pages/assets/gifs/3d1.gif)

Guidelines for animated assets:

- Keep GIFs small and short (prefer < 1 MB for README embeds).
- Prefer MP4/WebM for large hero animations (better compression and performance).
- Lazy-load non-critical animations on the page.

## Table of contents

- Project summary
- Quick start
- Scripts
- Project structure
- Development notes
- Building & deployment
- Adding animated content
- Contributing
- Troubleshooting
- FAQ
- License

## Project summary

Purpose: static marketing SPA for STOOFERS.in. Implemented with React (JSX) and Vite. Static assets live under `src/pages/assets/`.

Primary entry points

- `index.html` — HTML shell used by Vite
- `src/main.jsx` — application bootstrap
- `src/App.jsx` — top-level app and router

## Quick start

Prerequisites

- Node.js 16+ (LTS recommended)
- npm (or yarn / pnpm)

Development (PowerShell example)

```powershell
# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

Notes: if you use `pnpm` or `yarn`, substitute package manager commands.

## Scripts

Common scripts (verify in `package.json`):

- `dev` — start Vite dev server
- `build` — create production `dist/`
- `preview` — preview `dist/`
- `lint` — run linter (optional)
- `format` — run formatter (optional)

Example `package.json` scripts section:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## Project structure

Top-level layout (important files)

- `index.html`
- `package.json`, `vite.config.js`, `eslint.config.js`
- `src/`
  - `main.jsx` — app bootstrap
  - `App.jsx` — top-level app and router
  - `pages/` — pages (Home, About, Chat, Privacy, etc.)
    - `components/` — shared components (Header, Footer, Background)
    - `sections/` — page sections (Hero, Pricing, Testimonials, FAQ)
    - `assets/` — images, gifs, logos, screenshots

Add more documentation here if you introduce new folders.

## Development notes & patterns

- Keep presentational and container logic separated.
- Import static assets with relative paths from `src/pages/assets/`.
- Prefer small, optimized images and compressed SVGs for logos.

Edge cases

- Large GIFs slow initial loads — use MP4/WebM for large animations.
- Missing environment variables — track required keys in `.env.example`.

## Building & deployment

Build locally:

```powershell
npm run build
```

Output directory: `dist/`

Recommended deployment targets

- Vercel: default Vite settings (build: `npm run build`, output: `dist`)
- Netlify: build `npm run build`, publish `dist/`
- GitHub Pages: build and publish `dist/` (or use `gh-pages`)
- Heroku (static buildpack): `static.json` present at repo root

Serving the built site locally

```powershell
npm run preview
# or use a static server:
npx serve -s dist
```

## Adding animated content

Best practices

- Use small GIFs for badges and README previews.
- Use MP4/WebM for larger hero animations and autoplay with muted attribute.
- Defer or lazy-load animations below the fold.

README embed example (use small GIF):

```html
<img src="src/pages/assets/gifs/3d1.gif" alt="animated hero" width="700" />
```

## Contributing

Guidelines

- Fork, create a feature branch, and open a PR with a clear summary.
- Keep commits small and focused.
- Run linters and formatters before submitting.

PR checklist (suggested)

- [ ] Builds locally
- [ ] No console errors in dev or prod
- [ ] Documentation updated if applicable

## Troubleshooting

- Dev server won't start: check Node version and reinstall deps.
  - PowerShell: `Remove-Item -Recurse -Force node_modules, package-lock.json; npm install`
- Routes 404 after deploy: ensure SPA rewrites are configured (Netlify `_redirects` or Vercel handles automatically).

## FAQ

- Where are screenshots and GIFs stored?
  - `src/pages/assets/screenshots/` and `src/pages/assets/gifs/`
- How do I add a new page?
  - Add a component under `src/pages/` and wire it into the router in `App.jsx`.

## License

Pick a license and add a LICENSE file (MIT, Apache-2.0, etc.).

---

Next steps I can take for you (pick one):

1. Scan the repository to auto-generate an accurate `scripts` section and a precise file map.
2. Add an optimized README hero GIF (or small WebM) into `src/pages/assets/gifs/` and update the README to reference it.

Tell me which follow-up you'd like and I'll proceed.
# STOOFERS.in
