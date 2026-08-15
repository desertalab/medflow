const flow = ['PHYSICAL WORLD', 'EVENTS', 'DESERTA INTELLIGENCE', 'DECISIONS', 'EXECUTION'];
const network = ['SUPPLIER', 'WAREHOUSE', 'FACILITY', 'PATIENT'];
const complexity = ['DEMAND', 'STOCK', 'TIME', 'ROUTE', 'PRIORITY', 'EXCEPTIONS'];
const thesis = ['EVENT', 'UNDERSTAND', 'DECIDE', 'EXECUTE', 'VERIFY'];
const medflowSystem = ['NEED', 'INTELLIGENCE', 'FULFILMENT', 'LOGISTICS', 'POINT OF CARE'];
const experiences = [
  ['SUPERVISION', 'What needs attention?'],
  ['FULFILMENT', 'What needs to move?'],
  ['EXECUTION', 'Where does it go next?'],
];
const futureDirections = [
  'Medical devices',
  'Laboratory logistics',
  'Cold chain',
  'Healthcare assets',
  'Direct-to-patient operations',
];

function arrowList(items, className = 'sequence') {
  return `
    <div class="${className}">
      ${items
        .map(
          (item, index) => `
            <div class="sequence-item">
              <span>${item}</span>
              ${index < items.length - 1 ? '<b aria-hidden="true">↓</b>' : ''}
            </div>
          `,
        )
        .join('')}
    </div>
  `;
}

function horizontalList(items, className = 'line-system') {
  return `
    <div class="${className}">
      ${items
        .map(
          (item, index) => `
            <div class="line-node">
              <span>${item}</span>
              ${index < items.length - 1 ? '<b aria-hidden="true">→</b>' : ''}
            </div>
          `,
        )
        .join('')}
    </div>
  `;
}

function navigation() {
  return `
    <nav class="nav" aria-label="Primary navigation">
      <a class="wordmark" href="/">DESERTA</a>
      <div class="nav-links">
        <a href="/#company">Company</a>
        <a href="/#products">Products</a>
        <a href="/medflow">MedFlow</a>
        <a href="/#technology">Technology</a>
      </div>
      <a class="sign-in" href="#signin">Sign in</a>
    </nav>
  `;
}

function homePage() {
  return `
    ${navigation()}
    <main>
      <section class="hero section" id="company">
        <p class="kicker">DESERTA MEDFLOW PRIVATE LIMITED</p>
        <h1>DESERTA</h1>
        <p class="hero-line">Intelligence infrastructure for the physical systems the world depends on.</p>
        <div class="system-orbit" aria-label="Physical world to execution system visual">
          ${arrowList(flow, 'sequence vertical')}
        </div>
      </section>

      <section class="section problem" id="technology">
        <div class="split-head">
          <h2>Healthcare is digital.<br />Care is physical.</h2>
          <p>A medicine is not useful because it exists in a database. It is useful when it is available, at the right facility, at the right time, in the right condition.</p>
        </div>
        ${arrowList(network, 'sequence physical-network')}
        <div class="complexity-strip" aria-label="Invisible operational complexity">
          ${complexity.map((item) => `<span>${item}</span>`).join('')}
        </div>
      </section>

      <section class="section thesis">
        <p class="kicker">DESERTA'S THESIS</p>
        <h2>Make the network intelligent.</h2>
        ${horizontalList(thesis)}
      </section>

      <section class="section product-reveal" id="products">
        <p class="kicker">DESERTA PRODUCT</p>
        <h2>MEDFLOW</h2>
        <p class="product-line">The operating layer for healthcare supply chains.</p>
        <p class="quiet">From Warehouse to Point of Care.</p>
        <div class="product-visual">${arrowList(medflowSystem, 'sequence product-system')}</div>
        <a class="primary-link" href="/medflow">EXPLORE MEDFLOW →</a>
      </section>

      <section class="section missing-question">
        <h2>The supply chain already has systems.</h2>
        <div class="plain-list">
          <span>Inventory exists.</span>
          <span>Warehouses exist.</span>
          <span>Transport exists.</span>
          <span>Data exists.</span>
        </div>
        <h3>WHAT SHOULD HAPPEN NEXT?</h3>
        <p class="strong-statement">Existing systems record what happened. MedFlow helps decide what happens next.</p>
      </section>

      <section class="section experience">
        <div class="experience-rail">
          ${experiences
            .map(
              ([title, question]) => `
                <article>
                  <span>${title}</span>
                  <p>${question}</p>
                </article>
              `,
            )
            .join('')}
        </div>
        ${horizontalList(['EVENT', 'RECOMMENDATION', 'ACTION', 'OUTCOME'], 'line-system outcome-line')}
      </section>

      <section class="section ecosystem">
        <p class="kicker">ONE MEDFLOW IDENTITY</p>
        <div class="launcher-concept" aria-label="MedFlow application launcher concept">
          ${['Health', 'Supply', 'Logistics', 'Supervision'].map((app) => `<span>${app}</span>`).join('')}
        </div>
      </section>

      <section class="section vision">
        <h2>One intelligence layer.<br />Many real-world systems.</h2>
        <div class="flagship-line"><strong>MEDFLOW</strong><span>Healthcare supply chains</span></div>
        <p class="kicker">Future product directions</p>
        <div class="future-list">${futureDirections.map((item) => `<span>${item}</span>`).join('')}</div>
      </section>

      <section class="section founder">
        <h2>Why Deserta exists.</h2>
        <p class="founder-name">Kabir Bishnoi<br /><span>Founder, Deserta MedFlow Private Limited</span></p>
        <blockquote>
          “We are not trying to build another software layer that adds complexity to people already managing complex systems.
          <br /><br />
          We want to make the complexity disappear.
          <br /><br />
          Deserta exists to build the intelligence layer between what is happening in the physical world and what should happen next.”
        </blockquote>
      </section>

      <section class="section final-statement">
        <h2>The physical world is complex.<br />Intelligence should make it simple.</h2>
        <p>DESERTA</p>
        <span>Intelligence infrastructure for the real world.</span>
        <a class="primary-link" href="/medflow">Explore MedFlow →</a>
      </section>
    </main>
  `;
}

function medflowPage() {
  return `
    ${navigation()}
    <main>
      <section class="section medflow-hero">
        <p class="kicker">DESERTA PRODUCT</p>
        <h1>MEDFLOW</h1>
        <p>The operating layer for healthcare supply chains.</p>
        ${horizontalList(['FACILITY NEED', 'MEDFLOW', 'WAREHOUSE', 'LOGISTICS', 'POINT OF CARE'], 'line-system medflow-route')}
      </section>

      <section class="section coordination">
        <h2>MedFlow does not replace the systems healthcare already depends on.</h2>
        <div class="replace-list">
          <span>Procurement systems</span>
          <span>Inventory systems</span>
          <span>Warehouses</span>
          <span>Transport providers</span>
        </div>
        <p>It coordinates them.</p>
      </section>

      <section class="section interaction">
        <p class="kicker">PRODUCT INTERACTION</p>
        <div class="cinematic-flow" aria-label="MedFlow replenishment interaction">
          <article class="facility-need">
            <span>PHC Jalore Rural</span>
            <strong>Medicine A</strong>
            <em>2.8 days remaining</em>
          </article>
          <b aria-hidden="true">↓</b>
          <article class="recommendation">
            <span>MedFlow</span>
            <strong>Replenishment recommended</strong>
            <em>Source: DDW Jalore</em>
          </article>
          <b aria-hidden="true">↓</b>
          <div class="actions">
            <span>Approve</span>
            <span>Route</span>
            <span>Delivered</span>
          </div>
        </div>
      </section>

      <section class="section final-statement product-final">
        <h2>Existing systems record events.<br />MedFlow helps decide what happens next.</h2>
        <a class="primary-link" href="/">Return to Deserta →</a>
      </section>
    </main>
  `;
}

const app = document.querySelector('#root');
app.innerHTML = window.location.pathname.startsWith('/medflow') ? medflowPage() : homePage();
