import { Link } from "@tanstack/react-router";
import type { ProjectCard } from "../content/api";

export function AllProjects({
  projects,
  className = "",
}: {
  projects: ProjectCard[];
  className?: string;
}) {
  return (
    <section id="projects" className={className}>
      <div className="flex flex-wrap">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="w-full px-2 pb-2 md:w-1/2 md:pb-4 lg:w-1/3"
          >
            <div className="relative aspect-square">
              <img
                src={project.thumbnail}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="group absolute inset-0 flex items-center justify-center bg-linear-to-br from-black/20 to-black/0 p-4 transition-all duration-200 ease-in-out hover:bg-black/40">
                <h2 className="translate-y-5 rounded-full bg-black px-4 py-2 text-center text-base leading-[1.15] font-light text-white opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                  {project.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
