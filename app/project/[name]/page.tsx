import ImageWithLoader from "@/components/loadingimage";
import BackButton from "@/components/shared/back";
import { ProjectCaseStudies } from "@/constants/case-studies";
import { Projects } from "@/constants";
import { upperFirst } from "@/utils/uppercase";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

export async function generateStaticParams() {
  return Projects.map((p) => ({
    name: encodeURIComponent(p.slug),
  }));
}

interface Props {
  params: {
    name: string;
  };
}

function getProject(slug: string) {
  return Projects.find(
    (p) => encodeURIComponent(p.slug) === encodeURIComponent(slug)
  );
}

function getUrlLabel(key: string) {
  if (key === "githubUrl") return "Source";
  if (key === "liveUrl") return "Live";
  if (key === "apiDocUrl") return "API docs";
  if (key === "apiUrl") return "API";

  return key.replace(/Url$/, "").replace(/([A-Z])/g, " $1").trim();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject(params.name);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  const caseStudy = ProjectCaseStudies[project.slug];

  return {
    title: `${project.name} case study`,
    description: caseStudy?.summary ?? project.description,
    openGraph: {
      type: "website",
      title: `${project.name} case study`,
      description: caseStudy?.summary ?? project.description,
      images: [
        {
          url: project.image?.url,
          width: project.image?.width,
          height: project.image?.height,
          alt: project.image?.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@DexterIfti",
    },
  };
}

function SectionList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="border-t border-white/10 py-7">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-gray-300">
            <FiCheckCircle
              aria-hidden="true"
              className="mt-1 h-4 w-4 shrink-0 text-emerald-300"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

async function ProjectPage(props: Props) {
  const project = getProject(props.params.name);

  if (!project) {
    notFound();
  }

  const caseStudy = ProjectCaseStudies[project.slug];
  const projectLinks = Object.entries(project.urls).filter((entry) => entry[1]);

  return (
    <main className="container mx-auto min-h-screen px-5 pb-16 pt-6">
      <div className="mx-auto flex max-w-[760px] flex-col">
        <div className="w-fit">
          <BackButton />
        </div>

        <header className="mt-8 grid gap-6 lg:grid-cols-[1fr_15rem] lg:items-start">
          <div>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-neutral-400">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1">
                {caseStudy?.status ?? "Project"}
              </span>
              {caseStudy?.role ? (
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1">
                  {caseStudy.role}
                </span>
              ) : null}
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-4xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-[64ch] text-pretty text-base leading-7 text-gray-300">
              {caseStudy?.summary ?? project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            {projectLinks.map(([key, url]) => (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                key={key}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-700 px-3 py-2 text-sm font-semibold text-white outline-none transition-colors hover:bg-neutral-900 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111010]"
              >
                {key === "githubUrl" ? (
                  <FiGithub aria-hidden="true" />
                ) : (
                  <FiExternalLink aria-hidden="true" />
                )}
                {getUrlLabel(key)}
              </a>
            ))}
          </div>
        </header>

        <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-neutral-900/40">
          <ImageWithLoader
            className="mx-auto h-auto w-full object-cover"
            src={project.image.url}
            alt={project.image.alt}
            loading="eager"
            width={project.image.width}
            height={project.image.height}
          />
        </div>

        {project.image.source ? (
          <p className="mt-2 text-center text-sm text-gray-400">
            Source: {project.image.source}
          </p>
        ) : null}

        <section className="mt-9 border-t border-white/10 py-7">
          <h2 className="text-xl font-semibold text-white">Problem</h2>
          <p className="mt-4 max-w-[68ch] text-pretty text-base leading-7 text-gray-300">
            {caseStudy?.problem ?? project.description}
          </p>
        </section>

        {caseStudy ? (
          <>
            <SectionList title="Architecture" items={caseStudy.architecture} />
            <SectionList title="Key decisions" items={caseStudy.decisions} />
            <SectionList title="Tradeoffs" items={caseStudy.tradeoffs} />
            <SectionList title="What I learned" items={caseStudy.learned} />
          </>
        ) : null}

        <section className="border-t border-white/10 py-7">
          <h2 className="text-xl font-semibold text-white">Stack</h2>
          <div className="mt-4 flex flex-row flex-wrap items-center justify-start gap-2">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm font-medium text-gray-200"
              >
                {upperFirst(tag)}
              </span>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-7">
          <a
            href={
              project.urls.githubUrl ??
              project.urls.liveUrl ??
              Object.values(project.urls).find(Boolean)
            }
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-300 outline-none transition-colors hover:text-white focus-visible:text-white"
          >
            Open project
            <FiArrowUpRight
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </section>
      </div>
    </main>
  );
}

export default ProjectPage;
