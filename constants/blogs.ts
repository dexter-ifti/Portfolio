export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  href?: string;
  publishedAt?: string;
  status?: "published" | "draft";
}

export const BlogPosts: BlogPost[] = [
  {
    title: "Designing tinyqueue around Redis lists",
    slug: "tinyqueue-redis-lists",
    excerpt:
      "Notes on the tradeoffs behind a small Redis-backed queue: FIFO processing, retry windows, worker concurrency, and what I kept deliberately simple.",
    readTime: "5 min read",
    tags: ["Redis", "Queues", "TypeScript"],
    status: "draft",
  },
  {
    title: "Practical RAG pipelines for small products",
    slug: "practical-rag-pipelines",
    excerpt:
      "How I think about document ingestion, chunking, retrieval quality, and agent boundaries when the goal is shipping useful AI workflows.",
    readTime: "7 min read",
    tags: ["RAG", "AI", "Backend"],
    status: "draft",
  },
  {
    title: "What I look for in backend-heavy web apps",
    slug: "backend-heavy-web-apps",
    excerpt:
      "A compact checklist for APIs, database shape, auth flows, observability, and interface decisions that make full-stack projects easier to maintain.",
    readTime: "4 min read",
    tags: ["Backend", "APIs", "Product"],
    status: "draft",
  },
];
