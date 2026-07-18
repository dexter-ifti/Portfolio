import { Metadata } from "next";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGithub,
  FiLayers,
  FiTerminal,
  FiTool,
  FiZap,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import BackButton from "@/components/shared/back";

export const metadata: Metadata = {
  title: "Skills | Ifti Taha",
  description:
    "A compact view of Taha's backend, frontend, database, tooling, and coding practice skills.",
  keywords: [
    "technical skills",
    "backend",
    "frontend",
    "React",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
  ],
};

const skillGroups = [
  {
    title: "Backend",
    note: "APIs, queues, auth, caching, and service plumbing.",
    icon: FiCpu,
    accent: "text-emerald-300",
    border: "border-emerald-300/20",
    bg: "bg-emerald-300/10",
    skills: [
      "Node.js",
      "Express.js",
      "HonoJS",
      "REST APIs",
      "JWT",
      "Zod",
      "Background Workers",
    ],
  },
  {
    title: "Data",
    note: "Relational modeling, caching, and ORM-backed products.",
    icon: FiDatabase,
    accent: "text-sky-300",
    border: "border-sky-300/20",
    bg: "bg-sky-300/10",
    skills: [
      "PostgreSQL",
      "Redis",
      "Prisma ORM",
      "MongoDB",
      "Mongoose",
      "MySQL",
    ],
  },
  {
    title: "Frontend",
    note: "Clean client interfaces with pragmatic state and styling.",
    icon: FiLayers,
    accent: "text-violet-300",
    border: "border-violet-300/20",
    bg: "bg-violet-300/10",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "TanStack Query",
    ],
  },
  {
    title: "AI",
    note: "Agentic workflows, retrieval systems, and model integrations.",
    icon: FiZap,
    accent: "text-rose-300",
    border: "border-rose-300/20",
    bg: "bg-rose-300/10",
    skills: [
      "LangChain",
      "LangGraph",
      "OpenAI SDK",
      "Gemini",
      "pgvector",
      "Chroma",
      "FAISS",
      "Embeddings",
      "AI Agents",
      "AI Automation",
      "RAG",
    ],
  },
  {
    title: "Tools",
    note: "Shipping, debugging, and keeping projects maintainable.",
    icon: FiTool,
    accent: "text-amber-300",
    border: "border-amber-300/20",
    bg: "bg-amber-300/10",
    skills: ["Git", "Docker", "Cloudflare", "AWS", "Postman", "Bun"],
  },
];

const coreStack = [
  "TypeScript",
  "Node.js",
  "Hono",
  "Express",
  "PostgreSQL",
  "Redis",
  "Prisma",
  "React",
  "Next.js",
  "LangGraph",
];

const practiceLinks = [
  {
    href: "https://github.com/dexter-ifti",
    label: "GitHub",
    detail: "Projects, experiments, and source code",
    icon: FiGithub,
  },
  {
    href: "https://leetcode.com/ifti_taha/",
    label: "LeetCode",
    detail: "Problem-solving practice",
    icon: SiLeetcode,
  },
];

export default function SkillsPage() {
  return (
    <main className="container mx-auto min-h-screen px-5 pb-16 pt-6">
      <div className="mx-auto flex max-w-[640px] flex-col">
        <div className="w-fit">
          <BackButton />
        </div>

        <section className="mt-8 pb-7">
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-gray-200">
              <FiTerminal aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-3xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-4xl">
                Skills
              </h1>
              <p className="mt-3 max-w-[60ch] text-pretty text-base leading-7 text-gray-300">
                The stack I reach for when building backend-heavy web products:
                typed APIs, practical databases, responsive interfaces, and the
                tooling around them.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {coreStack.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm font-medium text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section aria-labelledby="skill-groups" className="mt-8">
          <h2 id="skill-groups" className="sr-only">
            Skill groups
          </h2>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="grid gap-4 py-6 sm:grid-cols-[11.5rem_1fr] sm:gap-6"
                >
                  <div>
                    <div
                      className={`mb-3 flex h-9 w-9 items-center justify-center rounded-md border ${group.border} ${group.bg} ${group.accent}`}
                    >
                      <Icon aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold leading-tight text-white">
                      {group.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {group.note}
                    </p>
                  </div>

                  <ul className="flex flex-wrap content-start gap-2">
                    {group.skills.map((skill) => (
                      <li key={skill}>
                        <span
                          className={`inline-flex rounded-full border ${group.border} ${group.bg} px-3 py-1 text-sm font-medium ${group.accent}`}
                        >
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="practice" className="mt-10">
          <div className="flex items-center gap-3">
            <FiCode className="text-gray-300" aria-hidden="true" />
            <h2 id="practice" className="text-2xl font-semibold text-white">
              Practice & proof
            </h2>
          </div>
          <p className="mt-3 max-w-[58ch] text-pretty text-base leading-7 text-gray-300">
            Project history and problem-solving practice stay closest to their
            sources.
          </p>

          <div className="mt-5 divide-y divide-white/10 rounded-lg border border-white/10">
            {practiceLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 px-4 py-4 outline-none transition-colors hover:bg-white/[0.04] focus-visible:bg-white/[0.04] focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111010]"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-neutral-800 text-gray-200">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-medium text-white">
                        {item.label}
                      </span>
                      <span className="block text-sm leading-6 text-gray-400">
                        {item.detail}
                      </span>
                    </span>
                  </span>
                  <FiArrowUpRight
                    className="h-4 w-4 shrink-0 text-gray-500 transition-colors group-hover:text-white"
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
