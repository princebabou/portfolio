import Link from "next/link";
import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { writing } from "../lib/content";
import { getAllPosts } from "../lib/posts";

export const metadata: Metadata = {
  title: "Writing — Manzi Prince Babou",
  description: writing.blurb,
};

export default function WritingIndex() {
  const posts = getAllPosts();

  return (
    <main className="reveal">
      <Nav />

      <div className="max-w-content mx-auto px-6">
        <Link
          href="/"
          className="font-mono text-sm text-sub hover:text-ink transition-colors inline-block pt-6"
        >
          ← home
        </Link>

        {/* header */}
        <header className="pt-12 pb-12 border-b border-line">
          <h1 className="font-serif text-5xl sm:text-6xl tracking-tight leading-[1.02] mb-6">
            Writing
          </h1>
          <p className="text-xl leading-snug text-sub max-w-[48ch]">
            {writing.blurb}
          </p>
        </header>

        {/* list */}
        <ul className="divide-y divide-line">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/writing/${post.slug}`} className="group block py-10">
                <div className="font-mono text-xs text-sub mb-3">
                  <time dateTime={post.date}>{post.dateLabel}</time>
                  <span className="mx-2">·</span>
                  {post.readingTime}
                </div>
                <h2 className="font-serif text-3xl tracking-tight mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-sub leading-relaxed max-w-[60ch]">
                  {post.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>

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
      </div>

      <Footer />
    </main>
  );
}
