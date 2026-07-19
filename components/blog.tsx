import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { BlogPosts } from "@/constants/blogs";

interface BlogProps {
  limit?: number;
}

export default function Blog({ limit }: BlogProps) {
  const posts = typeof limit === "number" ? BlogPosts.slice(0, limit) : BlogPosts;

  return (
    <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
      {posts.map((post) => {
        const rowContent = (
          <article className="group grid gap-3 py-4 sm:grid-cols-[1fr_auto] sm:items-start">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <h3 className="text-lg font-medium leading-[1.3em] text-gray-300 transition-colors group-hover:text-white">
                  {post.title}
                </h3>
                {post.status === "draft" ? (
                  <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-2 py-0.5 text-xs font-medium text-amber-200">
                    Draft
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-pretty text-sm leading-6 text-gray-400">
                {post.excerpt}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-neutral-500">
                <span>{post.publishedAt ?? post.readTime}</span>
                {post.publishedAt ? <span>{post.readTime}</span> : null}
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-2 py-0.5 text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {post.href ? (
              <AiOutlineRight
                aria-hidden="true"
                className="hidden h-4 w-4 shrink-0 text-gray-500 transition-colors group-hover:text-white sm:block"
              />
            ) : null}
          </article>
        );

        if (!post.href) {
          return <div key={post.slug}>{rowContent}</div>;
        }

        return (
          <Link
            key={post.slug}
            href={post.href}
            className="outline-none transition-colors hover:bg-white/[0.03] focus-visible:bg-white/[0.03] focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111010]"
          >
            {rowContent}
          </Link>
        );
      })}
    </div>
  );
}
