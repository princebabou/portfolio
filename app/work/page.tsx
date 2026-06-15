import Link from "next/link";
import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { projects } from "../lib/content";

export const metadata: Metadata = {
  title: "Work — Manzi Prince Babou",
  description: "Security tooling and offensive-security projects.",
};

export default function WorkIndex() {
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
            Work
          </h1>
          <p className="text-xl leading-snug text-sub max-w-[48ch]">
            Security tooling and offensive-security projects — built to make
            real engagements faster and more rigorous.
          </p>
        </header>

        {/* list */}
        <ul className="divide-y divide-line">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/work/${p.slug}`} className="group block py-10">
                <div className="flex items-baseline gap-3 mb-2">
                  <h2 className="font-serif text-3xl tracking-tight group-hover:text-accent transition-colors">
                    {p.title}
                  </h2>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-sub">
                    {p.meta}
                  </span>
                </div>
                <p className="text-lg mb-3">{p.oneLiner}</p>
                <div className="font-mono text-xs text-sub">
                  {p.tags.join("  ·  ")}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </main>
  );
}
