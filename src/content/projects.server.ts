import { marked } from "marked";
import { parse } from "yaml";

export type Project = {
  slug: string;
  title: string;
  releaseDate: string;
  thumbnail: string;
  embedUrl: string;
  html: string;
  summary: string;
};

const files = import.meta.glob<string>("/content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function field(data: Record<string, unknown>, key: string, file: string): string {
  const value = data[key];
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${file}: missing "${key}"`);
  }
  return value.trim();
}

function embedUrl(videoLink: string, file: string): string {
  const url = new URL(videoLink);
  const host = url.hostname.replace(/^www\./, "");
  if (host === "vimeo.com") return `https://player.vimeo.com/video${url.pathname}`;
  if (host === "youtube.com") return `https://www.youtube.com/embed/${url.searchParams.get("v")}`;
  if (host === "youtu.be") return `https://www.youtube.com/embed${url.pathname}`;
  throw new Error(`${file}: unsupported video_link host "${url.hostname}"`);
}

const entities: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
};

function decodeEntities(text: string): string {
  return text.replace(/&(amp|lt|gt|quot|#39);/g, (entity) => entities[entity] ?? entity);
}

function parseProject(file: string, raw: string): Project {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error(`${file}: missing front matter`);
  const data = parse(match[1] ?? "") as Record<string, unknown>;
  const html = marked.parse(match[2] ?? "", { async: false });
  return {
    slug: file.replace(/^.*\/|\.md$/g, ""),
    title: field(data, "title", file),
    releaseDate: field(data, "release_date", file),
    thumbnail: field(data, "thumbnail", file),
    embedUrl: embedUrl(field(data, "video_link", file), file),
    html,
    summary: decodeEntities(html.replace(/<[^>]*>/g, ""))
      .replace(/\s+/g, " ")
      .trim(),
  };
}

export const projects: Project[] = Object.entries(files)
  .map(([file, raw]) => parseProject(file, raw))
  .sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));
