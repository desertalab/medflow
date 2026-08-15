# MedFlow — Deserta product portal prototype

MedFlow is the health-operations product experience inside the Deserta corporate website. This dependency-free web prototype reframes the previous dashboard-heavy concept into a single journey: Deserta corporate entry, MedFlow product landing, one login, MedFlow home, an app launcher, and role-based workspaces that connect to existing workflow engines.

## Refactor direction

```text
React/Vite prototype
        ↓
Deserta corporate website
        ↓
MedFlow product
        ↓
One login
        ↓
MedFlow home
        ↓
App launcher
        ↓
Role-based workspace
        ↓
Existing workflow engines
```

## Product principles

- Replace many dashboards and navigation items with one clear product shell.
- Treat Deserta as the corporate brand and MedFlow as the focused product.
- Use one authenticated entry point for every agency role.
- Launch existing workflow engines from a consistent app launcher.
- Route users into role-based workspaces instead of generic mock workflows.

## Quickstart

Prerequisites:

- Node.js 20+
- npm

Run the prototype:

```bash
npm run dev
```

Build a production bundle:

```bash
npm run build
```

## Project structure

- `src/main.js` — dependency-free prototype for the Deserta-to-MedFlow journey.
- `src/styles.css` — responsive visual system and layout styles.
- `scripts/dev-server.mjs` — local static server for development and preview.
- `scripts/build.mjs` — static build script that writes `dist/`.
- `index.html` — document entry point.
- `package.json` — npm script configuration.

## License

MedFlow is licensed under the Apache License 2.0. See `LICENSE` for details.
