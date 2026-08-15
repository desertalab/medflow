import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const workspaceCards = [
  {
    role: 'Program Executive',
    description: 'Portfolio-level KPIs, compliance posture, and cross-agency outcomes.',
    accent: 'Executive command center',
  },
  {
    role: 'Clinical Operations',
    description: 'Daily work queues, escalations, encounters, and quality review handoffs.',
    accent: 'Care delivery workspace',
  },
  {
    role: 'Data & Analytics',
    description: 'Pipeline health, ingestion exceptions, lineage, and analytics-ready exports.',
    accent: 'Data observability suite',
  },
];

const launcherApps = [
  'Eligibility intake',
  'FHIR exchange',
  'Case management',
  'Quality reporting',
  'Audit evidence',
  'Analytics studio',
];

function App() {
  return (
    <main>
      <section className="hero shell">
        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand" href="#deserta" aria-label="Deserta home">
            <span className="brand-mark">D</span>
            <span>Deserta</span>
          </a>
          <div className="nav-links">
            <a href="#medflow">MedFlow</a>
            <a href="#launcher">App launcher</a>
            <a href="#workspaces">Workspaces</a>
          </div>
          <a className="login" href="#login">One login</a>
        </nav>

        <div className="hero-grid" id="deserta">
          <div className="hero-copy">
            <p className="eyebrow"><span aria-hidden="true">◆</span> Deserta corporate website</p>
            <h1>One trusted front door for public-sector health operations.</h1>
            <p>
              Refocused from scattered dashboards into a corporate Deserta experience that leads agencies
              into MedFlow, a single product home, and role-based operational workspaces.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#medflow">Explore MedFlow <span aria-hidden="true">→</span></a>
              <a className="secondary-action" href="#flow">View refactor flow</a>
            </div>
          </div>

          <div className="portal-card" aria-label="MedFlow portal preview">
            <div className="portal-card-header">
              <span>MedFlow Home</span>
              <span aria-hidden="true">✓</span>
            </div>
            <div className="metric-row">
              <span>Program readiness</span>
              <strong>98%</strong>
            </div>
            <div className="metric-row">
              <span>Workflow engines</span>
              <strong>12 live</strong>
            </div>
            <div className="metric-row">
              <span>Audit status</span>
              <strong>Current</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="flow shell" id="flow" aria-labelledby="flow-title">
        <p className="eyebrow"><span aria-hidden="true">↳</span> Refactor direction</p>
        <h2 id="flow-title">From prototype sprawl to a focused product journey.</h2>
        <div className="flow-steps">
          {['React/Vite prototype', 'Deserta corporate site', 'MedFlow product', 'One login', 'MedFlow home', 'App launcher', 'Role-based workspace', 'Existing workflow engines'].map((step, index) => (
            <article className="flow-step" key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product shell" id="medflow">
        <div>
          <p className="eyebrow"><span aria-hidden="true">✚</span> MedFlow product</p>
          <h2>MedFlow becomes the operating layer beneath the Deserta brand.</h2>
        </div>
        <div className="product-grid">
          <article>
            <span className="feature-icon" aria-hidden="true">🔐</span>
            <h3>One login</h3>
            <p>Single authenticated entry point for every agency user, program, and role.</p>
          </article>
          <article>
            <span className="feature-icon" aria-hidden="true">▦</span>
            <h3>MedFlow home</h3>
            <p>A clear landing page with status, priorities, alerts, and next-best actions.</p>
          </article>
          <article>
            <span className="feature-icon" aria-hidden="true">⌁</span>
            <h3>Workflow engines</h3>
            <p>Existing engines stay intact and launch from one consistent product shell.</p>
          </article>
        </div>
      </section>

      <section className="launcher shell" id="launcher">
        <div className="section-heading">
          <p className="eyebrow">App launcher</p>
          <h2>Launch the right workflow without dashboard clutter.</h2>
        </div>
        <div className="launcher-grid">
          {launcherApps.map((app) => (
            <button className="launcher-tile" key={app} type="button">
              <span>{app}</span>
              <span aria-hidden="true">→</span>
            </button>
          ))}
        </div>
      </section>

      <section className="workspaces shell" id="workspaces">
        <div className="section-heading">
          <p className="eyebrow">Role-based workspace</p>
          <h2>Each user lands in a workspace shaped by their responsibilities.</h2>
        </div>
        <div className="workspace-grid">
          {workspaceCards.map((card) => (
            <article className="workspace-card" key={card.role}>
              <span>{card.accent}</span>
              <h3>{card.role}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
