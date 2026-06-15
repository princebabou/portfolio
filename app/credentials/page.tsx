import Link from "next/link";
import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { credentials } from "../lib/content";

export const metadata: Metadata = {
  title: "Credentials — Manzi Prince Babou",
  description: "Experience and certifications in offensive security.",
};

export default function CredentialsIndex() {
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
            Credentials
          </h1>
          <p className="text-xl leading-snug text-sub max-w-[48ch]">
            Experience and certifications in offensive security.
          </p>
        </header>

        {/* list */}
        <ul className="divide-y divide-line">
          {credentials.map((c) => (
            <li
              key={c.title}
              className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-1 sm:gap-6 py-8"
            >
              <div>
                <h2 className="font-serif text-2xl tracking-tight">{c.title}</h2>
                <p className="font-mono text-sm text-sub mt-1">{c.org}</p>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-accent whitespace-nowrap sm:text-right sm:pt-2">
                {c.note}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </main>
  );
}
