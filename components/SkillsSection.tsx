import { FiCpu, FiDatabase, FiLayers, FiZap } from "react-icons/fi";

const technicalDomains = [
  {
    title: "Backend & Systems",
    icon: FiCpu,
    description: "Distributed queues, robust REST/GraphQL APIs, worker pools, auth & webhooks.",
    skills: ["TypeScript", "Python", "Node.js", "Express.js", "FastAPI", "Hono", "Bun", "Zod", "JWT"],
  },
  {
    title: "Data & Storage",
    icon: FiDatabase,
    description: "Relational schema modeling, low-latency caching, transactions, and vector search.",
    skills: ["PostgreSQL", "Redis", "Prisma ORM", "MongoDB", "pgvector", "AWS S3"],
  },
  {
    title: "AI Workflows & RAG",
    icon: FiZap,
    description: "Deterministic agent graphs, structured outputs, retrieval pipelines & model tooling.",
    skills: ["LangGraph", "LangChain", "OpenAI SDK", "Gemini", "Embeddings", "RAG"],
  },
  {
    title: "Frontend & Tooling",
    icon: FiLayers,
    description: "Fast client interfaces with pragmatic state management, CI/CD, and edge deploys.",
    skills: ["Next.js", "React", "Tailwind CSS", "Docker", "Cloudflare Workers", "Git"],
  },
];

export default function SkillsSection() {
  return (
    <section className="mt-8 border-t border-neutral-200 dark:border-white/10 pt-8" aria-labelledby="technical-focus">
      <div className="flex items-center justify-between">
        <div>
          <h2 id="technical-focus" className="text-xl font-bold tracking-[-0.02em] text-neutral-900 dark:text-white">
            Technical Focus & Systems
          </h2>
          <p className="mt-1 text-sm text-neutral-600 dark:text-gray-400">
            Architectural domains, core runtimes, and engineering primitives I ship with.
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {technicalDomains.map((domain) => {
          const Icon = domain.icon;
          return (
            <div
              key={domain.title}
              className="group rounded-xl border border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.02] p-4 shadow-sm dark:shadow-none transition-all hover:border-neutral-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/[0.04] text-neutral-700 dark:text-gray-300 group-hover:text-neutral-900 dark:group-hover:text-white">
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-gray-200 group-hover:text-neutral-950 dark:group-hover:text-white">
                  {domain.title}
                </h3>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600 dark:text-gray-400">
                {domain.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {domain.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-neutral-200 dark:border-white/5 bg-neutral-100 dark:bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium text-neutral-800 dark:text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
