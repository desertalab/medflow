import './styles.css';

const fallbackPortalData = {
  metrics: [
    { label: 'Program readiness', value: '98%' },
    { label: 'Workflow engines', value: '12 live' },
    { label: 'Audit status', value: 'Current' },
  ],
  flowSteps: [
    'React/Vite prototype',
    'Deserta corporate site',
    'MedFlow product',
    'One login',
    'MedFlow home',
    'App launcher',
    'Role-based workspace',
    'Existing workflow engines',
  ],
  launcherApps: [
    'Eligibility intake',
    'FHIR exchange',
    'Case management',
    'Quality reporting',
    'Audit evidence',
    'Analytics studio',
  ],
  workspaceCards: [
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
  ],
};

async function loadPortalData() {
  try {
    const response = await fetch('/api/portal');
    if (!response.ok) {
      throw new Error(`Portal API returned ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn('Using embedded portal data fallback.', error);
    return fallbackPortalData;
  }
}

function renderMetrics(metrics) {
  return metrics
    .map(
      (metric) => `
        <div class="metric-row">
          <span>${metric.label}</span>
          <strong>${metric.value}</strong>
        </div>
      `,
    )
    .join('');
}

function renderFlowSteps(flowSteps) {
  return flowSteps
    .map(
      (step, index) => `
        <article class="flow-step">
          <span>${String(index + 1).padStart(2, '0')}</span>
          <p>${step}</p>
        </article>
      `,
    )
    .join('');
}

function renderLauncherApps(launcherApps) {
  return launcherApps
    .map(
      (app) => `
        <button class="launcher-tile" type="button">
          <span>${app}</span>
          <span aria-hidden="true">→</span>
        </button>
      `,
    )
    .join('');
}

function renderWorkspaces(workspaceCards) {
  return workspaceCards
    .map(
      (card) => `
        <article class="workspace-card">
          <span>${card.accent}</span>
          <h3>${card.role}</h3>
          <p>${card.description}</p>
        </article>
      `,
    )
    .join('');
}

function renderApp(portalData) {
  return `
    <main>
      <section class="hero shell">
        <nav class="topbar" aria-label="Primary navigation">
          <a class="brand" href="#deserta" aria-label="Deserta home">
            <span class="brand-mark">D</span>
            <span>Deserta</span>
          </a>
          <div class="nav-links">
            <a href="#medflow">MedFlow</a>
            <a href="#launcher">App launcher</a>
            <a href="#workspaces">Workspaces</a>
          </div>
          <a class="login" href="#login">One login</a>
        </nav>

        <div class="hero-grid" id="deserta">
          <div class="hero-copy">
            <p class="eyebrow"><span aria-hidden="true">◆</span> Deserta corporate website</p>
            <h1>One trusted front door for public-sector health operations.</h1>
            <p>
              Refocused from scattered dashboards into a corporate Deserta experience that leads agencies
              into MedFlow, a single product home, and role-based operational workspaces.
            </p>
            <div class="hero-actions">
              <a class="primary-action" href="#medflow">Explore MedFlow <span aria-hidden="true">→</span></a>
              <a class="secondary-action" href="#flow">View refactor flow</a>
            </div>
          </div>

          <div class="portal-card" aria-label="MedFlow portal preview">
            <div class="portal-card-header">
              <span>MedFlow Home</span>
              <span aria-hidden="true">✓</span>
            </div>
            ${renderMetrics(portalData.metrics)}
          </div>
        </div>
      </section>

      <section class="flow shell" id="flow" aria-labelledby="flow-title">
        <p class="eyebrow"><span aria-hidden="true">↳</span> Refactor direction</p>
        <h2 id="flow-title">From prototype sprawl to a focused product journey.</h2>
        <div class="flow-steps">${renderFlowSteps(portalData.flowSteps)}</div>
      </section>

      <section class="product shell" id="medflow">
        <div>
          <p class="eyebrow"><span aria-hidden="true">✚</span> MedFlow product</p>
          <h2>MedFlow becomes the operating layer beneath the Deserta brand.</h2>
        </div>
        <div class="product-grid">
          <article>
            <span class="feature-icon" aria-hidden="true">🔐</span>
            <h3>One login</h3>
            <p>Single authenticated entry point for every agency user, program, and role.</p>
          </article>
          <article>
            <span class="feature-icon" aria-hidden="true">▦</span>
            <h3>MedFlow home</h3>
            <p>A clear landing page with status, priorities, alerts, and next-best actions.</p>
          </article>
          <article>
            <span class="feature-icon" aria-hidden="true">⌁</span>
            <h3>Workflow engines</h3>
            <p>Existing engines stay intact and launch from one consistent product shell.</p>
          </article>
        </div>
      </section>

      <section class="launcher shell" id="launcher">
        <div class="section-heading">
          <p class="eyebrow">App launcher</p>
          <h2>Launch the right workflow without dashboard clutter.</h2>
        </div>
        <div class="launcher-grid">${renderLauncherApps(portalData.launcherApps)}</div>
      </section>

      <section class="workspaces shell" id="workspaces">
        <div class="section-heading">
          <p class="eyebrow">Role-based workspace</p>
          <h2>Each user lands in a workspace shaped by their responsibilities.</h2>
        </div>
        <div class="workspace-grid">${renderWorkspaces(portalData.workspaceCards)}</div>
      </section>
    </main>
  `;
}

const portalData = await loadPortalData();
document.querySelector('#root').innerHTML = renderApp(portalData);
