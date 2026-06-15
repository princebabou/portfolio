import { profile } from "../lib/content";

export default function Footer() {
  return (
    <footer className="max-w-content mx-auto px-6 py-12 font-mono text-xs text-sub">
      © {profile.name}
    </footer>
  );
}
