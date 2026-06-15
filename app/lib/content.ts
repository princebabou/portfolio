// Single source of truth for the whole site. Edit copy here.

export const profile = {
  name: "Manzi Prince Babou",
  short: "Babou",
  role: "Penetration tester & security tooling",
  location: "Kigali, Rwanda",
  tagline:
    "I work on offensive security and build the tooling that makes it faster.",
  about: [
    "I'm a penetration tester based in Kigali, currently a third-year student at Rwanda Coding Academy. Most of my time goes to offensive security — finding the ways systems break, then building tools that make that work faster and more rigorous.",
    "Right now that's FortiCore, a pentest-automation platform I'm building in Rust, alongside hands-on testing as a penetration tester at Centrika Ltd.",
  ],
};

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  meta: string; // mono sub-line on the detail page
  tags: string[];
  links: { label: string; href: string }[];
  overview: string[];
  features?: { name: string; desc: string }[];
  stack?: string[];
  integrations?: string[];
  platforms?: string[];
  note?: string;
  gallery?: { src: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "forticore",
    title: "FortiCore",
    oneLiner: "Automated penetration testing, from a single CLI.",
    meta: "Creator · Ongoing · Rust",
    tags: ["Rust", "CLI", "Offensive security", "AI-assisted"],
    links: [{ label: "Live", href: "https://forticore.innov.rw/" }],
    overview: [
      "FortiCore is a command-line penetration-testing platform that automates the repetitive half of an engagement — recon, vulnerability detection, safe exploitation, and reporting — so testers spend their time on judgment, not glue work.",
      "It wraps established tools behind one consistent workflow, demonstrates findings non-destructively, and produces signed, remediation-focused reports. An AI-assisted layer triages and explains findings to cut down the noise of raw scanner output.",
    ],
    features: [
      { name: "Vulnerability detection", desc: "Identifies weaknesses across web apps, networks and systems." },
      { name: "Safe exploitation engine", desc: "Demonstrates vulnerabilities without causing real damage." },
      { name: "AI-assisted analysis", desc: "Triages and explains findings to reduce scanner noise." },
      { name: "Detailed reporting", desc: "Comprehensive reports with remediation steps and digital signatures." },
      { name: "Custom scripts", desc: "Extensible platform for writing your own security tests." },
      { name: "Encrypted storage", desc: "Scan results and findings kept in encrypted storage." },
    ],
    stack: ["Rust", "AI-assisted analysis"],
    integrations: ["Nmap", "Nikto", "Nuclei", "SQLMap", "Amass", "Subfinder"],
    platforms: ["Windows 10/11", "Debian / Ubuntu Linux"],
    note: "Built for authorized testing, security research and education only.",
  },
  {
    slug: "cowrie-honeypot",
    title: "Cowrie Honeypot",
    oneLiner: "A deception environment that lures attackers and logs everything they do.",
    meta: "Build · 2025 · Cowrie / ELK",
    tags: ["Honeypot", "Cowrie", "Network security", "Threat intel"],
    links: [{ label: "Writeup", href: "/writing/honeypot" }],
    overview: [
      "A high-interaction honeypot built on Cowrie — a system deliberately set up to look like an easy, vulnerable target. It exposes fake SSH and Telnet services, and when an attacker takes the bait, every login attempt, command, and file interaction is recorded for analysis.",
      "I hardened the real administration channel onto a non-standard port, stood Cowrie up in an isolated environment, and piped its logs into the ELK stack so attacker behaviour could be explored visually rather than grepped out of raw log files.",
    ],
    features: [
      { name: "SSH & Telnet simulation", desc: "Mimics real services to capture brute-force login attempts." },
      { name: "Full command logging", desc: "Every command an attacker runs is recorded for later analysis." },
      { name: "Filesystem interaction", desc: "Attackers can browse, download, and attempt exploits in a sandbox." },
      { name: "Real-time monitoring", desc: "Sessions stream to the logs live as they happen." },
      { name: "ELK visualization", desc: "Cowrie logs ingested into Elasticsearch and explored in Kibana dashboards." },
      { name: "Isolated by design", desc: "Runs off the production network so the bait can never become a foothold." },
    ],
    stack: ["Cowrie", "Python", "Linux"],
    integrations: ["Elasticsearch", "Logstash", "Kibana"],
    platforms: ["Debian / Ubuntu Linux"],
    note: "Built for research and education. A honeypot should never be exposed on a production network.",
    gallery: [
      { src: "/images/Honeypot/cowrie-session2.png", caption: "An attacker session captured in real time." },
      { src: "/images/Honeypot/kibana-dashboard.png", caption: "Attack trends visualised in a Kibana dashboard." },
    ],
  },
];

// The blog lives on-site as real MDX in app/posts/*.mdx — see app/lib/posts.ts
// for loading/rendering. This just holds the section's framing copy + Medium link.
export const writing = {
  blurb: "Notes and writeups on offensive security, tooling, and things I break.",
  profile: "https://medium.com/@baboumanzi69",
};

export type SkillGroup = { area: string; items: string[] };

export const skills: { intro: string; groups: SkillGroup[] } = {
  intro:
    "Where I'm strongest — offensive security across web, network and mobile, grounded in the standards that turn findings into something a team can act on.",
  groups: [
    {
      area: "Web applications",
      items: [
        "API pentesting — GraphQL & REST",
        "IDOR & broken object-level authorization",
        "RBAC flaws & privilege escalation",
        "Authentication & session-management vulnerabilities",
        "Cloud-backed apps — Firebase & other BaaS misconfigurations",
        "Business-logic flaws",
        "OWASP Top 10",
      ],
    },
    {
      area: "Networks",
      items: [
        "Network penetration testing & enumeration",
        "SSL/TLS vulnerabilities & misconfigurations",
        "Traffic analysis & interception",
      ],
    },
    {
      area: "Mobile",
      items: [
        "Android app reverse engineering",
        "Dynamic instrumentation with Frida",
        "Device & app analysis with adb",
        "SSL-pinning & root-detection bypass",
      ],
    },
    {
      area: "Tooling",
      items: ["Burp Suite", "Frida", "adb", "Nmap", "Nuclei", "Wireshark", "SQLMap"],
    },
    {
      area: "Frameworks & standards",
      items: [
        "CISSP security domains",
        "NIST Cybersecurity Framework (CSF)",
        "NIST Risk Management Framework (RMF) / SP 800-53",
        "CIA triad & security controls",
        "OWASP testing methodology",
        "ISO/IEC 27001",
        "GDPR awareness",
      ],
    },
  ],
};

export type Credential = { title: string; org: string; note: string };

export const credentials: Credential[] = [
  { title: "Penetration Tester", org: "Centrika Ltd", note: "Experience" },
  { title: "Google Cybersecurity Professional", org: "Google", note: "In progress" },
  { title: "Cyberium", org: "ThinkCyber", note: "Certified" },
];

export const contact = {
  email: "baboumanzi69@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/princebabou" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/manzi-babou-1b661b294/" },
  ],
};
