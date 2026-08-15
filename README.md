# DESERTA

DESERTA MEDFLOW PRIVATE LIMITED is building intelligence infrastructure for the physical systems the world depends on.

Founder: Kabir Bishnoi

> Deserta builds intelligent systems that turn complex real-world operations into clear decisions and coordinated action.

## Website direction

The site is intentionally not a generic healthcare logistics page, consulting page, SaaS landing page, or feature grid. It is an editorial technology-company website organized around one thesis:

```text
PHYSICAL WORLD
↓
EVENTS
↓
DESERTA INTELLIGENCE
↓
DECISIONS
↓
EXECUTION
```

## Pages

- `/` — DESERTA company homepage and MedFlow flagship product reveal.
- `/medflow` — MedFlow product page with a focused healthcare supply-chain interaction.

## Principles

- One strong idea.
- Extreme hierarchy.
- Minimal navigation.
- Product-first storytelling.
- Spatial design over feature dumping.
- Mock/demo visuals only; no API, backend integrations, developer console, or government-system connection.

## Quickstart

Prerequisites:

- Node.js 20+
- npm

Run the website:

```bash
npm run dev
```

Build a static bundle:

```bash
npm run build
```

Preview the static bundle:

```bash
npm run preview
```

## Project structure

- `src/main.js` — static website rendering for `/` and `/medflow`.
- `src/styles.css` — restrained editorial visual system.
- `scripts/dev-server.mjs` — local static server with route fallback.
- `scripts/build.mjs` — static build script that writes `dist/`.
- `index.html` — document entry point.
- `package.json` — dependency-free npm script configuration.

## License

MedFlow is licensed under the Apache License 2.0. See `LICENSE` for details.
