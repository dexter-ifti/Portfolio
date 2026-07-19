import { Metadata } from "next";
import { FiEdit3 } from "react-icons/fi";
import Blog from "@/components/blog";
import BackButton from "@/components/shared/back";

export const metadata: Metadata = {
  title: "Blog | Ifti Taha",
  description:
    "Technical notes from Taha on backend systems, AI workflows, full-stack products, and practical engineering decisions.",
  keywords: [
    "blog",
    "backend engineering",
    "AI agents",
    "RAG",
    "TypeScript",
    "Redis",
  ],
};

export default function BlogPage() {
  return (
    <main className="container mx-auto min-h-screen px-5 pb-16 pt-6">
      <div className="mx-auto flex max-w-[640px] flex-col">
        <div className="w-fit">
          <BackButton />
        </div>

        <section className="mt-8 pb-7">
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-gray-200">
              <FiEdit3 aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-3xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-4xl">
                Blog
              </h1>
              <p className="mt-3 max-w-[60ch] text-pretty text-base leading-7 text-gray-300">
                Longer notes on the systems I build: backend-heavy products,
                AI agent workflows, retrieval pipelines, and the tradeoffs that
                show up while shipping them.
              </p>
            </div>
          </div>
        </section>

        <Blog />
      </div>
    </main>
  );
}
