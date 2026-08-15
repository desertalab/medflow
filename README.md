# MedFlow — Deserta product portal prototype

MedFlow is the health-operations product experience inside the Deserta corporate website. This dependency-free full-stack prototype reframes the previous dashboard-heavy concept into a single journey: Deserta corporate entry, MedFlow product landing, one login, MedFlow home, an app launcher, and role-based workspaces that connect to existing workflow engines.

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

## Full-stack architecture

- Browser UI renders the Deserta and MedFlow product journey from `src/main.js`.
- Node HTTP API serves portal configuration at `/api/portal` and health checks at `/api/health`.
- The same Node process serves static assets, so the app can run locally without installing external packages.

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

- `src/main.js` — browser UI that fetches portal data from the backend.
- `src/styles.css` — responsive visual system and layout styles.
- `server/app.mjs` — Node HTTP server with API routes and static asset serving.
- `server/data.js` — portal metrics, launcher apps, workspace roles, and journey steps.
- `server/index.mjs` — server startup entry point.
- `scripts/dev-server.mjs` — local full-stack development server.
- `scripts/build.mjs` — static build script that writes `dist/`.
- `index.html` — document entry point.
- `package.json` — npm script configuration.

## License

MedFlow is licensed under the Apache License 2.0. See `LICENSE` for details.
