// Reads the real MDX posts in app/posts/*.mdx. Slug = filename without .mdx.
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "app", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string; // ISO, for sorting + <time>
  dateLabel: string; // e.g. "January 2025"
  tags: string[];
  image?: string;
  readingTime: string;
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function readingTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function toMeta(slug: string, data: Record<string, unknown>, content: string): PostMeta {
  return {
    slug,
    title: (data.title as string) ?? slug,
    summary: (data.summary as string) ?? "",
    date: (data.date as string) ?? "",
    dateLabel: data.date ? formatDate(data.date as string) : "",
    tags: (data.tags as string[]) ?? [],
    image: data.image as string | undefined,
    readingTime: readingTime(content),
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data, content } = matter(raw);
      return toMeta(slug, data, content);
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first
}

export function getPost(
  slug: string
): { meta: PostMeta; content: string } | null {
  const file = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { meta: toMeta(slug, data, content), content };
}
