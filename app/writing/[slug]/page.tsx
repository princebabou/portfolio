import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { writing } from "../../lib/content";
import { getAllPosts, getPost } from "../../lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return { title: `${post.meta.title} — Manzi Prince Babou`, description: post.meta.summary };
}

// Styled MDX elements — keeps posts in the editorial aesthetic.
const components = {
  h1: (p: any) => <h2 className="font-serif text-3xl tracking-tight mt-14 mb-4" {...p} />,
  h2: (p: any) => <h2 className="font-serif text-2xl tracking-tight mt-14 mb-4" {...p} />,
  h3: (p: any) => <h3 className="font-serif text-xl tracking-tight mt-10 mb-3" {...p} />,
  p: (p: any) => <p className="text-lg leading-relaxed text-ink my-5" {...p} />,
  a: (p: any) => (
    <a className="text-accent border-b border-current hover:opacity-60" {...p} />
  ),
  ul: (p: any) => <ul className="list-disc pl-6 my-5 space-y-2 text-lg" {...p} />,
  ol: (p: any) => <ol className="list-decimal pl-6 my-5 space-y-2 text-lg" {...p} />,
  li: (p: any) => <li className="leading-relaxed" {...p} />,
  blockquote: (p: any) => (
    <blockquote
      className="border-l-2 border-accent pl-6 my-8 text-sub [&>p]:text-sub"
      {...p}
    />
  ),
  hr: () => <hr className="border-line my-12" />,
  pre: (p: any) => (
    <pre
      className="bg-ink text-paper font-mono text-sm leading-relaxed rounded-md p-5 my-6 overflow-x-auto"
      {...p}
    />
  ),
  code: ({ className, ...p }: any) =>
    className?.includes("language-") ? (
      <code className={`${className} font-mono`} {...p} />
    ) : (
      <code
        className="bg-line/60 text-ink rounded px-1.5 py-0.5 font-mono text-[0.85em]"
        {...p}
      />
    ),
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  img: (p: any) => (
    <img className="w-full rounded-md border border-line my-8" alt={p.alt || ""} {...p} />
  ),
};

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const { content } = await compileMDX({ source: post.content, components });

  return (
    <main className="reveal">
      <Nav />

      <article className="max-w-content mx-auto px-6">
        <Link
          href="/writing"
          className="font-mono text-sm text-sub hover:text-ink transition-colors inline-block pt-6"
        >
          ← writing
        </Link>

        {/* header */}
        <header className="pt-12 pb-10 border-b border-line">
          <div className="font-mono text-xs text-sub mb-5">
            <time dateTime={post.meta.date}>{post.meta.dateLabel}</time>
            <span className="mx-2">·</span>
            {post.meta.readingTime}
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight leading-[1.05] mb-6">
            {post.meta.title}
          </h1>
          {post.meta.summary && (
            <p className="text-xl leading-snug text-sub max-w-[48ch]">
              {post.meta.summary}
            </p>
          )}
          {post.meta.tags.length > 0 && (
            <div className="font-mono text-xs text-sub mt-6">
              {post.meta.tags.join("  ·  ")}
            </div>
          )}
        </header>

        {/* body */}
        <div className="py-10 max-w-[68ch]">{content}</div>

        {/* footer link */}
        <div className="border-t border-line py-10">
          <a
            href={writing.profile}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-accent border-b border-current pb-0.5 hover:opacity-60"
          >
            Also on Medium ↗
          </a>
        </div>
      </article>

      <Footer />
    </main>
  );
}
