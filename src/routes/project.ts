import { createFileRoute } from "@tanstack/react-router";
import { legacyProjectIds } from "../legacy-redirects";

export const Route = createFileRoute("/project")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const url = new URL(request.url);
        const slug = legacyProjectIds[url.searchParams.get("id") ?? ""];
        return Response.redirect(new URL(slug ? `/projects/${slug}` : "/", url), 301);
      },
    },
  },
});
