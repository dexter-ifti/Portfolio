import { AiOutlineRight, AiOutlineMail } from "react-icons/ai";
import { FiArrowUpRight, FiFileText, FiGithub, FiTwitter, FiLinkedin, FiCalendar } from "react-icons/fi";
import { Projects } from "@/constants";
import Link from "next/link";
import WorkExperience from "@/components/workexp";
import Blog from "@/components/blog";
import GithubStats from "@/components/githubstats";
import CalEmbed from "@/components/CalEmbed";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen pt-6 items-center justify-center flex-col">
      <div className="flex mt-8 flex-col max-w-[640px] mx-auto p-5 lg:p-0">
        <div>
          <div className="flex items-baseline gap-2">
            <h1 className="text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
              Taha
            </h1>
            <span className="text-base text-neutral-500 font-mono">/ dexter_ifti</span>
          </div>

          <p className="mt-4 text-xl font-medium text-gray-200 leading-snug">
            Backend-focused full-stack developer building distributed systems, low-latency APIs, and AI agent workflows.
          </p>

          <p className="mt-3 text-base text-neutral-400 leading-relaxed max-w-[60ch]">
            Designing reliable software around TypeScript/Python, Node.js/FastAPI, PostgreSQL, and Redis. Focused on concurrent worker queues, retrieval pipelines, and clean architectural tradeoffs.
          </p>
        </div>

        <div className="flex items-start mt-2 w-full justify-start flex-col">
          <div className="flex flex-col gap-4 w-full mt-4">
            <a
              href="mailto:tahaiftikhar8@gmail.com"
              className="group inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors w-fit"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for new opportunities</span>
            </a>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/resume"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 outline-none transition-colors hover:bg-gray-200 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111010]"
              >
                <FiFileText aria-hidden="true" />
                View resume
              </Link>
              <a
                href="#schedule"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-gray-200 outline-none transition-colors hover:bg-white/[0.08] hover:text-white focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111010]"
              >
                <FiCalendar aria-hidden="true" />
                Schedule chat
              </a>
              <a
                href="mailto:tahaiftikhar8@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-gray-200 outline-none transition-colors hover:bg-white/[0.08] hover:text-white focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111010]"
              >
                <AiOutlineMail aria-hidden="true" />
                Email me
              </a>

              <div className="flex items-center gap-2 sm:ml-auto">
                <a
                  href="https://www.x.com/DexterIfti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter profile"
                  className="flex items-center justify-center rounded-md border border-white/10 bg-white/[0.04] p-2.5 text-gray-300 transition hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/60 outline-none"
                >
                  <FiTwitter className="text-lg" />
                </a>
                <a
                  href="https://github.com/dexter-ifti"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex items-center justify-center rounded-md border border-white/10 bg-white/[0.04] p-2.5 text-gray-300 transition hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/60 outline-none"
                >
                  <FiGithub className="text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ifti-taha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex items-center justify-center rounded-md border border-white/10 bg-white/[0.04] p-2.5 text-gray-300 transition hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/60 outline-none"
                >
                  <FiLinkedin className="text-lg" />
                </a>
                <a
                  href="https://leetcode.com/ifti_taha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode profile"
                  className="flex items-center justify-center rounded-md border border-white/10 bg-white/[0.04] p-2.5 text-gray-300 transition hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/60 outline-none"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <WorkExperience /> 
        <SkillsSection />
        <div className="mt-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl text-white mt-5 mb-5 font-bold tracking-[-0.02em]">Projects</h2>
            <Link href="/project" className="text-neutral-500 hover:underline">
              more
            </Link>
          </div>
          <div className="flex flex-col">
            {Projects.slice(0, 5).map((project) => (
              <Link
                className="proj group"
                key={project.name.replace(" ", "-")}
                href={`/project/${project.slug}`}
              >
                <article className="flex flex-row gap-0 items-center justify-between lg:justify-center mt-3 mb-3 w-full">
                  <div className="flex flex-col justify-start opacity-100 flex-none shrink-0 h-auto relative whitespace-pre w-auto mr-3">
                    <h1 className="text-lg font-medium leading-[1.3em] text-left text-gray-300 group-hover:text-white">
                      {project.name}
                    </h1>
                  </div>
                  <div className="w-full mr-2 border-y border-neutral-700 transition duration-150 opacity-80 group-hover:border-white"></div>
                  <AiOutlineRight
                    className="text-gray-400 transition-all duration-150 group-hover:text-white h-4 w-4 shrink-0"
                    size={20}
                  />
                </article>
              </Link>
            ))}
          </div>
        </div>

        <section className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl text-white mt-5 mb-5">Blogs</h2>
            <Link href="/blog" className="text-neutral-500 hover:underline">
              more
            </Link>
          </div>
          <Blog limit={2} />
        </section>

        <section className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl text-white mt-5 mb-4">GitHub activity</h2>
            <a
              href="https://github.com/dexter-ifti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:underline"
            >
              view profile
            </a>
          </div>
          <GithubStats username="dexter-ifti" />
        </section>

        <CalEmbed />

        <section className="mt-10 border-t border-white/10 py-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl text-white">Contact</h2>
              <p className="mt-3 max-w-[56ch] text-pretty text-base leading-7 text-gray-300">
                Building a backend-heavy product, AI workflow, or developer
                tool? Send the context and I&apos;ll reply with the clearest
                next step.
              </p>
            </div>
            <a
              href="mailto:tahaiftikhar8@gmail.com"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-neutral-700 px-4 py-2.5 text-sm font-semibold text-white outline-none transition-colors hover:bg-neutral-900 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111010]"
            >
              tahaiftikhar8@gmail.com
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a
              href="https://github.com/dexter-ifti"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 outline-none transition-colors hover:text-white focus-visible:text-white"
            >
              GitHub
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/ifti-taha/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 outline-none transition-colors hover:text-white focus-visible:text-white"
            >
              LinkedIn
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a
              href="https://www.x.com/DexterIfti/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 outline-none transition-colors hover:text-white focus-visible:text-white"
            >
              X/Twitter
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
