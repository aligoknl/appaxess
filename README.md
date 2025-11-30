# AppAxess Site

AppAxess is a Vue 3 + Tailwind landing experience that showcases the company’s accessibility consultancy offerings. The site demonstrates WCAG-friendly UI patterns, a persistent dark-mode toggle, and a Netlify-powered contact form that delivers a quick accessibility scan summary to prospects.

## Demo
https://www.appaxess.com

## Highlights

- **Accessibility first** – skip link, semantic landmarks, custom focus treatment (1 px white + 1 px black ring), reduced-motion aware reveal animations, and contrast-safe palettes across light/dark themes.
- **Dark mode that really toggles** – class-based Tailwind dark styles plus PrimeVue’s Aura theme to keep cards, gradients, and CTAs in sync.
- **Contact workflow** – Netlify form submission, honeypot spam protection, and a standalone `success.html` confirmation page sharing the same theme tokens.
- **EAA storytelling** – dedicated sections for the European Accessibility Act, services, process, and certification badges.
- **PrimeVue + PrimeIcons** – used for the theme toggle and iconography without heavy UI scaffolding.

## Tech Stack

- [Vue 3](https://vuejs.org/) with `<script setup>` + TypeScript
- [Vite 7](https://vitejs.dev/) dev/build tooling
- [Tailwind CSS 3](https://tailwindcss.com/) using the `class` dark-mode strategy
- [PrimeVue 4.5](https://primevue.org/) + PrimeIcons for theming and icons
- Netlify Forms (static form handling + success redirect)

## Getting Started

### Prerequisites
- Node.js 18+ (or the version used by your deployment target)
- npm (ships with Node)

### Install dependencies

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Visit `http://localhost:5173` (or the URL printed in the terminal) to preview changes with hot module replacement.

### Build for production

```bash
npm run build
```

This runs `vue-tsc` for type-checking and outputs the optimized site to `dist/`. Use `npm run preview` to serve that folder locally before deploying.

## 📁 Project Structure

```
├── public/
│   ├── success.html          # Netlify redirect page with theme parity
│   └── appaxess-logo.png
├── src/
│   ├── assets/
│   ├── components/           # Hero, Services, Process, Footer, ThemeToggle, etc.
│   ├── App.vue               # Layout + skip link + section composition
│   ├── main.ts               # Vue entry + PrimeVue + directives
│   └── style.css             # Tailwind entry importing base styles
├── tailwind.config.ts        # Custom color tokens (ax.primary, accent, gray)
├── vite.config.ts
└── package.json
```

## Accessibility Notes

- Global focus styles ensure visible focus on every interactive element (links, buttons, form controls, skip link).
- `v-appear` / `v-intersect` directives respect `prefers-reduced-motion` to avoid aggressive animations for sensitive users.
- Content sections use semantic headings, ARIA labels for navigation and process lists, and descriptive alt text for badges/logos.
- Dark-mode palette additions (`ax-primary-950`, `ax-accent-200/300`) keep contrast ratios ≥ WCAG AA on both backgrounds.

## Deployment Tips

- The contact form posts to Netlify; ensure the site is deployed via Netlify (or replicate the form handling) so submissions are captured.
- Include `public/success.html` in the deploy output so `/success` redirects work after Netlify form submissions.
- Set caching headers carefully for `success.html` if you expect repeated submissions to avoid stale theme state.

## Useful Scripts

- `npm run dev` – start Vite with hot reload
- `npm run build` – type-check with `vue-tsc` and emit production assets
- `npm run preview` – locally serve the `dist/` build

