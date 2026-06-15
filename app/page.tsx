import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { profile, contact } from "./lib/content";

// Two-column numbered row: mono label on the left, content on the right.
function Row({
  no,
  label,
  id,
  children,
}: {
  no: string;
  label: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 md:gap-10 border-t border-line py-16 scroll-mt-20"
    >
      <div className="font-mono text-xs uppercase tracking-[0.12em]">
        <span className="text-accent">{no}</span>
        <span className="text-sub ml-3">{label}</span>
      </div>
      <div>{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="reveal">
      <Nav />

      <div className="max-w-content mx-auto px-6">
        {/* hero */}
        <header className="pt-20 pb-24">
          <h1 className="font-serif text-5xl sm:text-6xl tracking-tight leading-[1.02] mb-8">
            {profile.name}.
          </h1>
          <p className="text-2xl sm:text-3xl leading-snug max-w-[34ch]">
            {profile.tagline}
          </p>
          <p className="mt-8 font-mono text-sm text-sub">
            {profile.role} — {profile.location}
          </p>
        </header>

        {/* about */}
        <Row no="01" label="about">
          <div className="space-y-5 text-lg leading-relaxed max-w-[58ch]">
            {profile.about.map((p, i) => (
              <p key={i} className={i === 0 ? "text-ink" : "text-sub"}>
                {p}
              </p>
            ))}
          </div>
        </Row>

        {/* contact */}
        <Row no="02" label="contact" id="contact">
          <a
            href={`mailto:${contact.email}`}
            className="font-serif text-3xl sm:text-4xl tracking-tight hover:text-accent transition-colors inline-block mb-8"
          >
            {contact.email}
          </a>
          <div className="flex gap-6 font-mono text-sm">
            {contact.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-sub hover:text-ink transition-colors"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </Row>
      </div>

      <Footer />
    </main>
  );
}
