# Deserta MedFlow

### MedFlow — From Warehouse to Point of Care.

Deserta MedFlow Private Limited builds intelligent infrastructure for healthcare and real-world operations.

MedFlow is its flagship healthcare supply-chain platform, designed to connect operational events, decision intelligence, fulfilment, logistics and delivery confirmation through one platform.

**Founder:** Kabir Bishnoi  
**Company:** Deserta MedFlow Private Limited  
**Flagship product:** MedFlow  
**Positioning:** Healthcare supply-chain intelligence and last-mile orchestration.

## Why MedFlow

Existing systems capture operational events.  
MedFlow turns them into decisions and coordinated action.

Healthcare supply chains depend on warehouses, facilities, transport, people, inventory, time and decisions. The work is physical, distributed and time-sensitive. Digital systems may record parts of that work, but operational teams still need clarity on what matters now and what should happen next.

MedFlow exists to make that operational decision layer clear.

## What MedFlow Does

MedFlow is **not**:

- an inventory replacement
- a procurement replacement
- an e-Aushadhi replacement
- a government database
- a transport marketplace
- a clinical record system
- a generic ETL platform

MedFlow is a healthcare supply-chain intelligence and orchestration layer that helps operational teams understand what needs attention, what should move next, where it should go and whether the outcome was completed.

Current product capabilities are intentionally focused:

1. Operational event intelligence
2. Stock / replenishment decision support
3. Fulfilment orchestration
4. Route and delivery coordination
5. Exception and escalation workflows
6. Offline-capable field workflows
7. Audit and operational history

## Product Architecture

Core decision workflow:

```text
EVENT
→
UNDERSTAND
→
RECOMMEND
→
ACT
→
VERIFY
```

Operational movement workflow:

```text
NEED
→
DECISION
→
FULFILMENT
→
DELIVERY
→
CONFIRMATION
```

MedFlow is designed to sit above existing operational systems as a complementary intelligence and orchestration layer. It should help teams convert operational signals into coordinated action without forcing every user to understand every underlying system.

### Rajasthan Context

MedFlow is being designed with Rajasthan's healthcare supply-chain environment in mind.

Conceptual ecosystem:

```text
RMSC / RMSCL
↓
DDW / MCDW
↓
Healthcare Facility
↓
Transport
↓
Point of Care
```

MedFlow is designed for future authorised integration with relevant systems and stakeholders. This repository does not claim live Rajasthan Government integration, live e-Aushadhi integration, live RMSC/RMSCL integration, a current government customer, a current deployment or government API access.

## Role-Based Platform

One platform.  
One identity.  
Multiple operational experiences.

Role-based experiences may include:

- State Operations
- District Operations
- Block Supervisors
- Warehouse
- Facility
- Transport
- Field Users
- Administration

Each role should see the operational context needed to make better decisions and complete work with less complexity.

## Operational Workflow

# Complexity stays underneath.
# Clarity stays on the surface.

The healthcare supply chain may contain complex inventory, warehouse, logistics and operational systems. Users should not have to understand all of that complexity to act.

MedFlow presents:

- What happened?
- Why does it matter?
- What should happen next?

The product experience should remain minimal, role-aware and action-oriented.

## Current Status

**Status:** Early Product / Prototype Foundation  
**Data:** Synthetic / Demo data  
**Integrations:** Not connected to live external systems  
**Production deployment:** Not yet claimed

This repository contains the software foundation and product experience for Deserta MedFlow. Current repository areas may include:

- corporate website
- MedFlow product experience
- role-based application
- domain models
- demo data
- operational workflows
- product documentation

Functionality in this repository should not be described as production-ready unless it has been implemented, tested and verified.

## Technology

The current repository is a dependency-free static website/product experience implemented with:

- HTML document entry point: `index.html`
- Browser-rendered JavaScript: `src/main.js`
- CSS visual system: `src/styles.css`
- Node-based local static server: `scripts/dev-server.mjs`
- Node-based static build script: `scripts/build.mjs`
- npm scripts in `package.json`

The system should evolve toward:

- modular domain architecture
- role-based access
- secure authentication
- event-driven operational workflows
- auditable actions
- offline-capable field workflows
- integration-ready architecture
- minimal user interfaces
- server-side security

No production compliance certifications are claimed in this repository.

## Development

Prerequisites:

- Node.js 20+
- npm

Run the local website:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the built output:

```bash
npm run preview
```

The local server provides route fallback so `/` and `/medflow` can be viewed from the same static entry point.

## Security

This repository is an early product foundation and does not contain live government data.

Do not store:

- real patient data
- government credentials
- API keys
- production secrets

Any future integration with public systems, healthcare infrastructure or operational partners must be authorised, secured and reviewed before use.

## Roadmap

**Phase 1**  
Product foundation

**Phase 2**  
Role-based operational workflows

**Phase 3**  
Decision intelligence

**Phase 4**  
Authorised integrations

**Phase 5**  
Production deployment

## Contributing

Contributions should support the Deserta MedFlow product direction:

DESERTA MEDFLOW PRIVATE LIMITED  
↓  
MEDFLOW  
↓  
Healthcare Supply-Chain Intelligence  
↓  
From Warehouse to Point of Care.

Avoid adding legacy positioning, unverified production claims or generic healthcare software language. Keep product work focused on healthcare supply-chain intelligence, last-mile orchestration and clear operational execution.

## Contact

For questions about Deserta MedFlow or MedFlow product development, contact the maintainers of this repository.
