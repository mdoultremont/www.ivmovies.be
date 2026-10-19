import { createFileRoute } from "@tanstack/react-router";
import { projects } from "../content/projects.server";

const origin = "https://www.ivmovies.be";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const paths = ["/", "/projects", ...projects.map((p) => `/projects/${p.slug}`)];
        const urls = paths.map((path) => `<url><loc>${origin}${path}</loc></url>`).join("");
        return new Response(
          `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
          { headers: { "content-type": "application/xml" } },
        );
      },
    },
  },
});
