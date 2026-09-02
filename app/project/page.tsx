import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { Projects } from "@/constants";
import BackButton from "@/components/shared/back";

export default function Project() {
  return (
    <main className="container mx-auto min-h-screen px-5 pb-16 pt-6">
      <div className="flex flex-col max-w-[640px] mx-auto">
        <div className="w-fit">
          <BackButton fallbackUrl="/" />
        </div>
        <div className="mt-8 pb-4">
          <h1 className="text-3xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-4xl">
            Projects
          </h1>
          <p className="mt-3 max-w-[60ch] text-pretty text-base leading-7 text-gray-300">
            Selected systems, backend services, AI agent tools, and full-stack web applications.
          </p>
        </div>
        <div className="mt-4 flex flex-col divide-y divide-white/10 border-y border-white/10">
          {Projects.map((project) => (
            <Link
              className="group block py-4 outline-none transition-colors hover:bg-white/[0.02] focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111010]"
              key={project.slug}
              href={`/project/${project.slug}`}
            >
              <article className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-medium leading-[1.3em] text-gray-200 transition-colors group-hover:text-white capitalize">
                      {project.name}
                    </h2>
                  </div>
                  <p className="mt-1.5 text-sm leading-6 text-gray-400 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <AiOutlineRight
                  className="mt-1 h-4 w-4 shrink-0 text-gray-500 transition-colors group-hover:text-white"
                  aria-hidden="true"
                />
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
