export interface ProjectCaseStudy {
  summary: string;
  role: string;
  status: string;
  problem: string;
  architecture: string[];
  decisions: string[];
  tradeoffs: string[];
  learned: string[];
}

export const ProjectCaseStudies: Record<string, ProjectCaseStudy> = {
  tinyqueue: {
    summary:
      "A small Redis-backed job queue focused on predictable background processing, retry behavior, and worker visibility.",
    role: "Backend design, queue lifecycle, worker orchestration",
    status: "Open source",
    problem:
      "Most projects need background work before they need a heavy queue platform. The goal was to build a queue that stays understandable while still covering retries, concurrency, and job state tracking.",
    architecture: [
      "Redis stores queued jobs, active work, completion state, and retry metadata.",
      "Workers pull FIFO jobs and process them with configurable concurrency.",
      "Failed jobs move through exponential backoff before being retried or marked failed.",
      "A monitoring layer exposes job state so failures are visible during development.",
    ],
    decisions: [
      "Kept Redis as the core dependency because it fits queue semantics and is easy to run locally.",
      "Designed the API around explicit job states instead of hiding lifecycle transitions.",
      "Made retry behavior predictable with bounded exponential backoff.",
    ],
    tradeoffs: [
      "Redis keeps the system fast and simple, but durable long-term history still belongs in a database.",
      "FIFO behavior is easy to reason about, but priority scheduling would need another layer.",
    ],
    learned: [
      "Queue design is mostly failure design: retries, stuck jobs, visibility, and idempotency matter more than enqueue speed.",
      "Small infrastructure libraries need a narrow API surface or they become harder to trust.",
    ],
  },
  streaker: {
    summary:
      "A habit tracking product built around streak visibility, responsive interactions, and serverless persistence.",
    role: "Full-stack product build",
    status: "Live",
    problem:
      "Habit apps need low-friction check-ins and clear progress feedback. The challenge was keeping the interface quick while preserving reliable user and habit data.",
    architecture: [
      "React powers the client interface and daily habit interactions.",
      "Cloudflare Workers and Hono handle API routes close to users.",
      "PostgreSQL with Prisma stores users, habits, streaks, and completion history.",
      "TanStack Query keeps client state synchronized with server mutations.",
    ],
    decisions: [
      "Used serverless deployment to keep the app lightweight and easy to scale.",
      "Modeled habit completions separately from habit definitions for cleaner history queries.",
      "Used query invalidation for habit updates instead of over-complicated client state.",
    ],
    tradeoffs: [
      "Serverless APIs reduce operations work, but require careful database connection handling.",
      "A simple streak model is easy to understand, but timezone rules need deliberate handling as the product grows.",
    ],
    learned: [
      "Small daily-use products need fast feedback more than dense features.",
      "Data modeling decisions show up directly in the quality of progress views.",
    ],
  },
  "mini-cursor": {
    summary:
      "A terminal AI coding assistant that experiments with agent workflows, command execution, and project scaffolding.",
    role: "AI workflow design and CLI implementation",
    status: "Open source",
    problem:
      "AI coding helpers are useful when they can reason over a task, produce files, and interact with the local environment. The goal was to explore that loop in a compact terminal-first tool.",
    architecture: [
      "A CLI interface accepts developer prompts and project context.",
      "LangGraph coordinates multi-step agent flows and tool execution.",
      "LangChain integrations handle model calls and structured workflow steps.",
      "Command execution is exposed through a controlled terminal layer.",
    ],
    decisions: [
      "Used a terminal interface because coding work already happens close to the shell.",
      "Separated workflow orchestration from model calls so agent steps remain easier to debug.",
      "Kept generated boilerplate explicit instead of hiding file changes behind automation.",
    ],
    tradeoffs: [
      "Direct command execution makes the tool powerful, but it needs strong guardrails before broader use.",
      "Agent graphs add structure, but they also add complexity compared with a single prompt-response loop.",
    ],
    learned: [
      "Agent tools become more useful when every action is inspectable.",
      "Workflow orchestration is only valuable when it reduces uncertainty for the developer.",
    ],
  },
  "customizable-caching-api": {
    summary:
      "A REST API for configurable cache behavior, size limits, documentation, and predictable invalidation.",
    role: "Backend API design",
    status: "Live API",
    problem:
      "Caching logic often ends up scattered through applications. This project isolates cache operations behind a clear API with constraints and documentation.",
    architecture: [
      "Express routes expose cache create, read, update, and delete operations.",
      "Redis handles fast key-value access and expiration behavior.",
      "PostgreSQL and Prisma support persisted metadata where needed.",
      "API documentation gives consumers a direct way to inspect behavior.",
    ],
    decisions: [
      "Kept the API RESTful so behavior is easy to test with common tooling.",
      "Added size constraints to make cache behavior explicit instead of unbounded.",
      "Documented endpoints alongside the deployed API to reduce integration friction.",
    ],
    tradeoffs: [
      "A generic cache API is flexible, but product-specific cache rules still need application-level decisions.",
      "Redis improves response time, but operational correctness depends on expiration and invalidation design.",
    ],
    learned: [
      "Good cache systems need constraints as much as speed.",
      "Documentation is part of the backend interface, not a separate afterthought.",
    ],
  },
  paypulse: {
    summary:
      "A payment-style full-stack app focused on authenticated transfers, balances, and transaction integrity.",
    role: "Full-stack app implementation",
    status: "Demo",
    problem:
      "Money movement interfaces require trust: users need clear balance state, authenticated actions, and backend operations that do not leave data half-updated.",
    architecture: [
      "React provides the transfer and balance interface.",
      "Express handles authentication, user lookup, and transfer routes.",
      "MongoDB stores users, account balances, and transaction records.",
      "Validation and JWT auth protect the core request flow.",
    ],
    decisions: [
      "Used schema validation to keep transfer payloads predictable.",
      "Treated balance updates as a backend responsibility instead of trusting client state.",
      "Kept the UI focused on core actions: checking balance and sending money.",
    ],
    tradeoffs: [
      "MongoDB is fast to iterate with, but financial systems need very careful transaction boundaries.",
      "A demo can show flow and architecture, but real payments would require compliance and deeper audit trails.",
    ],
    learned: [
      "Financial-style apps force stronger thinking about consistency and edge cases.",
      "The backend contract matters more than UI polish when state represents value.",
    ],
  },
  pencraft: {
    summary:
      "A blog platform for authenticated writing, editing, and publishing with a modern full-stack setup.",
    role: "Full-stack product build",
    status: "Live",
    problem:
      "A writing platform needs a clean authoring flow, secure user sessions, and efficient post storage without making the editor feel heavy.",
    architecture: [
      "React and Tailwind power the reading and writing interface.",
      "Hono on Cloudflare Workers handles API routes.",
      "PostgreSQL and Prisma store users, posts, and publishing state.",
      "JWT and Zod protect authenticated routes and request payloads.",
    ],
    decisions: [
      "Used a serverless backend to keep deployment simple and responsive.",
      "Separated validation from route logic so post mutations stay easier to reason about.",
      "Focused the interface on core writing actions before adding heavier publishing features.",
    ],
    tradeoffs: [
      "A lightweight editor is fast, but advanced formatting would require a richer editing model.",
      "JWT auth keeps the app portable, but token lifecycle details need care in production.",
    ],
    learned: [
      "Content products are mostly state products: draft, edit, publish, and ownership rules drive the architecture.",
      "A simple writing flow beats a feature-heavy editor early on.",
    ],
  },
  "social-media-api": {
    summary:
      "A backend API for social interactions, profiles, friend requests, comments, and authentication.",
    role: "Backend API implementation",
    status: "Open source",
    problem:
      "Social apps need many related workflows: users, relationships, comments, and protected actions. The goal was to design a clear REST API around those moving parts.",
    architecture: [
      "Express exposes REST endpoints for users, profiles, friend requests, and comments.",
      "MongoDB stores user and social graph data.",
      "JWT protects authenticated routes.",
      "Password hashing and auth middleware secure account flows.",
    ],
    decisions: [
      "Separated route concerns by social domain to keep the API easier to scan.",
      "Used middleware for authentication instead of repeating checks in controllers.",
      "Modeled friend requests separately from accepted relationships.",
    ],
    tradeoffs: [
      "REST keeps the API straightforward, but graph-heavy queries can become complex over time.",
      "MongoDB supports flexible documents, but relationship modeling still needs discipline.",
    ],
    learned: [
      "Social APIs become complicated at the boundaries: permissions, pending states, and duplicate actions.",
      "Clear controller structure matters once endpoints multiply.",
    ],
  },
  "task-manager-api": {
    summary:
      "A task management backend with authentication, CRUD routes, filtering, sorting, and MVC structure.",
    role: "Backend API implementation",
    status: "Open source",
    problem:
      "Task APIs look simple until filtering, ownership, authentication, and update rules all meet. This project keeps those concerns separated in a maintainable backend.",
    architecture: [
      "Express routes expose authenticated task operations.",
      "Controllers handle CRUD behavior and query options.",
      "JWT identifies users and protects private task data.",
      "Filtering and sorting parameters shape task list responses.",
    ],
    decisions: [
      "Used MVC structure to keep route definitions thin.",
      "Made filtering and sorting part of the API contract instead of client-only behavior.",
      "Kept authentication close to task ownership rules.",
    ],
    tradeoffs: [
      "MVC is easy to follow, but larger domains may need service-layer boundaries.",
      "Flexible query params help users, but they need validation to avoid ambiguous behavior.",
    ],
    learned: [
      "Even small CRUD APIs benefit from clear ownership and query rules.",
      "Backend structure should make the common path obvious and edge cases visible.",
    ],
  },
  "url-shortener": {
    summary:
      "A URL shortening service with redirect handling and analytics-oriented tracking.",
    role: "Backend product implementation",
    status: "Open source",
    problem:
      "Short links need reliable redirects, predictable slug generation, and enough tracking to understand usage without overcomplicating the service.",
    architecture: [
      "Node and Express handle shorten and redirect endpoints.",
      "MongoDB stores original URLs, generated slugs, and analytics data.",
      "A redirect route resolves slugs and records access events.",
      "Validation protects the API from malformed URL input.",
    ],
    decisions: [
      "Kept the redirect path minimal because it is the hottest route.",
      "Stored analytics with the short URL record for easier lookup.",
      "Used clear REST endpoints so the service can be tested quickly.",
    ],
    tradeoffs: [
      "Simple slug generation is easy to ship, but collision handling becomes important at scale.",
      "Inline analytics are convenient, but high traffic would need a separate write path.",
    ],
    learned: [
      "Redirect services are small, but latency and correctness define the experience.",
      "Analytics requirements should shape storage early.",
    ],
  },
  "currency-converter": {
    summary:
      "A responsive currency conversion interface using live rates and reusable React state patterns.",
    role: "Frontend implementation",
    status: "Demo",
    problem:
      "Currency conversion needs fast input feedback, clear rate state, and a layout that remains usable on small screens.",
    architecture: [
      "React components manage amount input, selected currencies, and conversion output.",
      "Custom hooks encapsulate rate fetching and derived state.",
      "Tailwind handles responsive layout and visual states.",
      "External rate data powers real-time conversion behavior.",
    ],
    decisions: [
      "Moved fetch logic into a custom hook so UI components stay focused.",
      "Kept controls compact for mobile use.",
      "Used responsive styling instead of separate mobile views.",
    ],
    tradeoffs: [
      "Live exchange data improves usefulness, but the UI needs loading and failure states.",
      "Client-side conversion is fast, but rate source reliability controls the quality of results.",
    ],
    learned: [
      "Small frontend tools are a good place to practice state boundaries.",
      "Responsive forms need spacing and control sizing as much as layout breakpoints.",
    ],
  },
};
