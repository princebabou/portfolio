import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { projects } from "../../lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Manzi Prince Babou`,
    description: project.oneLiner,
  };
}

// Mono key/value row for the metadata block (Built with, Integrations, Platforms).
function MetaRow({ label, values }: { label: string; values: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-6 border-t border-line py-4">
      <div className="font-mono text-[11px] uppercase tracking-wider text-sub">
        {label}
      </div>
      <div className="font-mono text-sm">{values.join("  ·  ")}</div>
    </div>
  );
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="reveal">
      <Nav />

      <article className="max-w-content mx-auto px-6">
        <Link
          href="/work"
          className="font-mono text-sm text-sub hover:text-ink transition-colors inline-block pt-6"
        >
          ← work
        </Link>

        {/* header */}
        <header className="pt-12 pb-16">
          <h1 className="font-serif text-5xl sm:text-6xl tracking-tight leading-[1.02] mb-6">
            {project.title}
          </h1>
          <p className="text-2xl leading-snug max-w-[40ch] mb-6">
            {project.oneLiner}
          </p>
          <p className="font-mono text-sm text-sub">{project.meta}</p>
          {project.links.length > 0 && (
            <div className="flex gap-5 mt-6">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-sm text-accent border-b border-current pb-0.5 hover:opacity-60"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </header>

        {/* overview */}
        <section className="border-t border-line py-16">
          <div className="font-mono text-xs uppercase tracking-[0.12em] text-sub mb-6">
            overview
          </div>
          <div className="space-y-5 text-lg leading-relaxed max-w-[60ch]">
            {project.overview.map((p, i) => (
              <p key={i} className={i === 0 ? "text-ink" : "text-sub"}>
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* features */}
        {project.features && (
          <section className="border-t border-line py-16">
            <div className="font-mono text-xs uppercase tracking-[0.12em] text-sub mb-8">
              what it does
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              {project.features.map((f) => (
                <li key={f.name}>
                  <h3 className="font-serif text-xl tracking-tight mb-1">
                    {f.name}
                  </h3>
                  <p className="text-sub leading-relaxed">{f.desc}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* gallery */}
        {project.gallery && (
          <section className="border-t border-line py-16">
            <div className="font-mono text-xs uppercase tracking-[0.12em] text-sub mb-8">
              in action
            </div>
            <div className="space-y-10">
              {project.gallery.map((img) => (
                <figure key={img.src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full rounded-md border border-line"
                  />
                  <figcaption className="font-mono text-xs text-sub mt-3">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* technical metadata */}
        <section className="border-t border-line py-16">
          <div className="font-mono text-xs uppercase tracking-[0.12em] text-sub mb-6">
            details
          </div>
          <div>
            {project.stack && <MetaRow label="Built with" values={project.stack} />}
            {project.integrations && (
              <MetaRow label="Integrates" values={project.integrations} />
            )}
            {project.platforms && (
              <MetaRow label="Platforms" values={project.platforms} />
            )}
          </div>
          {project.note && (
            <p className="font-mono text-xs text-sub mt-6 max-w-[60ch]">
              {project.note}
            </p>
          )}
        </section>
      </article>

      <Footer />
    </main>
  );
}
