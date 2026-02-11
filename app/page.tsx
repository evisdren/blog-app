import Link from "next/link";
import { posts } from "./data/posts";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl px-4 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Latest Posts
          </h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            Thoughts on web development, design, and technology.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group rounded-lg border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/posts/${post.id}`}>
                <h2 className="text-xl font-semibold text-zinc-900 group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                  {post.title}
                </h2>
              </Link>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
                <span>{post.author}</span>
                <span>·</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
