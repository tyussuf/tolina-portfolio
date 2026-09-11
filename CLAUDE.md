# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

This is a personal portfolio site, currently the unmodified output of `npm create vite@latest -- --template react`. `src/App.jsx` still contains the Vite/React starter markup (counter button, Vite/React links) — there is no real portfolio content or custom architecture yet. When building out the site, expect to replace `App.jsx` wholesale rather than incrementally patch it.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build (outputs to `dist/`)
- `npm run preview` — serve the production build locally
- `npm run lint` — run Oxlint (config in `.oxlintrc.json`)

There is no test runner configured in this project.

## Stack

- React 19 + Vite 8 (`@vitejs/plugin-react`, using Oxc)
- Tailwind CSS 4 via `@tailwindcss/vite` — imported in `src/index.css` with `@import "tailwindcss";`. There is no `tailwind.config.js`; Tailwind 4 is configured via the Vite plugin instead.
- Oxlint for linting (rules: `react/rules-of-hooks` as error, `react/only-export-components` as warn). Not ESLint.
- Plain JSX (`.jsx`), not TypeScript, though `@types/react` and `@types/react-dom` are present for editor intellisense.

## Spacing

Strict 8pt grid. Spacing scale: 4, 8, 16, 24, 32, 48, 64, 96, 128.
4 is only for tight optical spacing. Never use arbitrary spacing values
(p-[27px], gap-[18px]) — the Tailwind theme is restricted on purpose.
Radius scale: 4, 12, 28. Line heights resolve to multiples of 4px.
Borders, radius, and letter-spacing are exempt from the 8pt rule.

## Structure notes

- `public/icons.svg` is an SVG sprite referenced via `<use href="/icons.svg#icon-id">` — this pattern (rather than importing individual icon files) is the existing convention for icons.
- `public/favicon.svg` is referenced directly from `index.html`.
- Static assets imported into components (e.g. images) live in `src/assets/` and are imported as JS modules; assets referenced by URL (favicon, icon sprite) live in `public/`.
