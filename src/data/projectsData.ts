export interface ProjectEvidence {
  buildImage: string;
  buildCaption: string;
  thinkImage: string;
  thinkCaption: string;
  processImage?: string;
  processCaption?: string;
}

export interface ProjectCaseStudy {
  id: string;
  name: string;
  tagline: string;
  role: string;
  stack: string[];
  status: 'Completed' | 'Active Build' | 'Production Demo';
  year: string;
  liveLink?: string;
  sourceLink?: string;
  problem: string;
  approach: string;
  buildDetails: string[];
  engineeringDecisions: string[];
  whatBroke: string[];
  whatILearned: string[];
  result: string;
  evidence: ProjectEvidence;
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: 'devflow-api-gateway',
    name: 'DevFlow Architecture Gateway',
    tagline: 'Modular API gateway and workflow pipeline monitor for micro-architectures.',
    role: 'Lead MERN Stack Engineer',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'WebSockets'],
    status: 'Completed',
    year: '2024',
    liveLink: 'https://github.com/Safwanashraf/DevFlow-Gateway-Demo',
    sourceLink: 'https://github.com/Safwanashraf/DevFlow-Gateway-Demo',
    problem: 'Distributed developer teams struggle with opaque API request flows and brittle pipeline debugging during microservice orchestration.',
    approach: 'Engineered a lightweight Node.js event-driven monitoring gateway with a React real-time visual dashboard, eliminating heavy proxy overhead.',
    buildDetails: [
      'Built custom Express middleware to intercept, log, and parse request headers across incoming REST endpoints.',
      'Constructed a dynamic node-graph UI in React with custom SVG layout algorithms to map endpoint relationships.',
      'Integrated WebSocket connections for zero-latency live telemetry stream to the client dashboard.',
      'Configured MongoDB TTL (Time-To-Live) indexing for efficient automated log cleanup and low memory storage overhead.'
    ],
    engineeringDecisions: [
      'Chose MongoDB aggregation pipelines over client-side array sorting to handle high-throughput log analytics directly at the database layer.',
      'Implemented JWT token rotation paired with HttpOnly cookies to enforce secure session hygiene across microservice calls.',
      'Structured modular state hooks in React to prevent re-rendering the entire canvas when telemetry updates arrived.'
    ],
    whatBroke: [
      'Initial WebSocket broadcast connections saturated client memory during simulated load tests of 5,000 requests per minute.',
      'Resolved by introducing a server-side payload batching window (150ms buffer) and client-side virtualized rendering.'
    ],
    whatILearned: [
      'High-frequency real-time applications require client-side throttling and database-level optimization from day one.',
      'User interface clarity matters as much as backend throughput when engineers are diagnosing live system bottlenecks.'
    ],
    result: 'Sub-45ms latency overhead added, handling 10,000+ simulated requests/minute with zero memory leaks.',
    evidence: {
      buildImage: '/images/projects/devflow-build.jpg',
      buildCaption: 'BUILD EVIDENCE — Node-graph telemetry dashboard mapping dynamic REST endpoint relationships in real time.',
      thinkImage: '/images/projects/devflow-think.jpg',
      thinkCaption: 'THINK EVIDENCE — Event-driven middleware pipeline and WebSocket payload batching architecture diagram.',
      processImage: '/images/projects/devflow-process.jpg',
      processCaption: 'PROCESS EVIDENCE — Real local dev environment setup, terminal logs, and load test scripts.'
    }
  },
  {
    id: 'pulse-commerce',
    name: 'PulseCommerce Headless Platform',
    tagline: 'High-conversion, sub-second headless e-commerce store with real-time inventory engine.',
    role: 'Full Stack Developer',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux Toolkit', 'Stripe API'],
    status: 'Production Demo',
    year: '2024',
    liveLink: 'https://github.com/Safwanashraf/PulseCommerce-Engine',
    sourceLink: 'https://github.com/Safwanashraf/PulseCommerce-Engine',
    problem: 'Traditional monolithic storefronts suffer from slow mobile load times and friction-filled checkout funnels that destroy sales conversions.',
    approach: 'Applied lessons from 1,500 direct sales conversations to build a frictionless, lightning-fast mobile-first shopping experience powered by headless MERN architecture.',
    buildDetails: [
      'Created an optimistic UI shopping cart with instant item additions, removing server round-trip latency during product selection.',
      'Developed a RESTful Node.js catalog service featuring multi-attribute search, faceted filtering, and dynamic pagination.',
      'Implemented secure checkout integration with Stripe payment webhooks and automated order status emails.',
      'Built an admin management console for inventory management, coupon codes, and sales performance analytics.'
    ],
    engineeringDecisions: [
      'Used Redux Toolkit with local storage persistence to ensure cart state survives page refreshes and poor mobile network dropouts.',
      'Enforced strict MongoDB schema validation and compound indexing on product categories to accelerate query responses.',
      'Implemented payment idempotency tokens to prevent duplicate charging during unexpected network retries.'
    ],
    whatBroke: [
      'Race conditions occurred when two users purchased the final stock unit simultaneously during checkout.',
      'Fixed by implementing MongoDB atomic transactions (`$inc` operator with strict non-negative quantity queries).'
    ],
    whatILearned: [
      'Sales principles translate directly into UX architecture: reducing friction at checkout is an engineering problem.',
      'Data integrity during checkout requires database atomicity, not just frontend validation.'
    ],
    result: 'Achieved sub-800ms initial page load times and 100% atomic inventory accuracy under concurrent buying scenarios.',
    evidence: {
      buildImage: '/images/projects/pulse-build.jpg',
      buildCaption: 'BUILD EVIDENCE — Optimistic UI storefront catalog and mobile checkout funnel interface.',
      thinkImage: '/images/projects/pulse-think.jpg',
      thinkCaption: 'THINK EVIDENCE — Database compound index schema and atomic payment transaction flow model.',
      processImage: '/images/projects/pulse-process.jpg',
      processCaption: 'PROCESS EVIDENCE — Friction analysis notes mapping checkout drop-offs from 1,500 customer sales observations.'
    }
  },
  {
    id: 'orbit-ops',
    name: 'Orbit Team Operations Hub',
    tagline: 'Kanban workspace & productivity tracker for cross-functional project execution.',
    role: 'Full Stack Engineer',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Framer Motion', 'Tailwind CSS'],
    status: 'Active Build',
    year: '2024',
    liveLink: 'https://github.com/Safwanashraf/Orbit-Ops-Hub',
    sourceLink: 'https://github.com/Safwanashraf/Orbit-Ops-Hub',
    problem: 'Small cross-functional teams often struggle with bloated project tools that obscure daily task accountability and burn velocity.',
    approach: 'Designed a ultra-responsive, lightweight board system focused on high-speed card movements, role-based access, and minimal clutter.',
    buildDetails: [
      'Built a custom drag-and-drop Kanban layout utilizing HTML5 Drag & Drop API coupled with fluid Framer Motion animations.',
      'Engineered Role-Based Access Control (RBAC) in Express supporting Owner, Manager, and Contributor permissions.',
      'Implemented live activity audit trails recording task updates, state shifts, and member assignments.',
      'Created custom productivity analytics charts displaying weekly sprint velocity and completion bottlenecks.'
    ],
    engineeringDecisions: [
      'Selected fractional indexing strings for task ordering to allow zero-reindex reordering of cards in large columns.',
      'Decoupled task card components with React.memo to maintain 60fps frame rates during rapid drag interactions.'
    ],
    whatBroke: [
      'Drag-and-drop operations caused visually jarring layout shifts when moving cards between columns with different heights.',
      'Resolved by using absolute positioning projections and layout animation flags in Framer Motion.'
    ],
    whatILearned: [
      'Micro-interactions directly influence user focus; when a tool feels smooth, team adoption increases dramatically.',
      'Clean data indexing algorithms prevent heavy database writes during frequent UI updates.'
    ],
    result: 'Zero layout shift during card drags, supporting 100+ tasks per column seamlessly.',
    evidence: {
      buildImage: '/images/projects/orbit-build.jpg',
      buildCaption: 'BUILD EVIDENCE — High-speed Kanban drag-and-drop board with sprint velocity tracking widgets.',
      thinkImage: '/images/projects/orbit-think.jpg',
      thinkCaption: 'THINK EVIDENCE — Role-Based Access Control (RBAC) permission matrix & string fractional indexing algorithm.',
      processImage: '/images/projects/orbit-process.jpg',
      processCaption: 'PROCESS EVIDENCE — Physical whiteboard task allocation sketch from Alappuzha cross-functional team experiments.'
    }
  }
];
