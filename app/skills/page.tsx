import Link from "next/link";
import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { skills } from "../lib/content";

export const metadata: Metadata = {
  title: "Skills — Manzi Prince Babou",
  description: skills.intro,
};

export default function SkillsIndex() {
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
            Skills
          </h1>
          <p className="text-xl leading-snug text-sub max-w-[48ch]">
            {skills.intro}
          </p>
        </header>

        {/* groups */}
        <div>
          {skills.groups.map((g) => (
            <section
              key={g.area}
              className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-10 border-b border-line py-10 last:border-0"
            >
              <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-sub md:pt-1">
                {g.area}
              </h2>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="text-lg leading-snug flex gap-3">
                    <span className="text-accent font-mono text-sm select-none mt-1">
                      /
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
