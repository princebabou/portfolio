import Link from "next/link";
import { profile } from "../lib/content";

// Each section is its own page; contact stays an anchor on the landing.
const items = [
  { label: "work", href: "/work" },
  { label: "skills", href: "/skills" },
  { label: "writing", href: "/writing" },
  { label: "credentials", href: "/credentials" },
  { label: "contact", href: "/#contact" },
];

export default function Nav() {
  return (
    <nav className="max-w-content mx-auto px-6 flex items-center justify-between py-6">
      <Link href="/" className="font-mono text-sm hover:text-accent transition-colors">
        {profile.short.toLowerCase()}
      </Link>
      <div className="flex gap-6 font-mono text-sm text-sub">
        {items.map((i) => (
          <Link key={i.href} href={i.href} className="hover:text-ink transition-colors">
            {i.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
