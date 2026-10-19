import { createFileRoute, redirect } from "@tanstack/react-router";
import { Logo } from "../../components/Logo";
import { getProject } from "../../content/api";
import { legacyProjectSlugs } from "../../legacy-redirects";

const origin = "https://www.ivmovies.be";

export const Route = createFileRoute("/projects/$slug")({
  beforeLoad: ({ params }) => {
    const slug = legacyProjectSlugs[params.slug];
    if (slug) throw redirect({ to: "/projects/$slug", params: { slug }, statusCode: 301 });
  },
  loader: ({ params }) => getProject({ data: params.slug }),
  head: ({ loaderData: project }) => ({
    meta: project && [
      { title: project.title },
      { property: "og:title", content: project.title },
      { property: "og:description", content: project.summary },
      { property: "og:url", content: `${origin}/projects/${project.slug}` },
      { property: "og:image", content: `${origin}${project.thumbnail}` },
    ],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const project = Route.useLoaderData();
  return (
    <div className="p-8">
      <Logo />
      <div className="mx-auto mt-8 max-w-[50rem]">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src={project.embedUrl}
            title={project.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
        <h1 className="mt-4 text-[2rem] font-thin">{project.title}</h1>
        <div
          className="mt-4 leading-normal [&_h3]:text-[1.17em] [&_h3]:font-bold"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
      </div>
    </div>
  );
}
