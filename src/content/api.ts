import { notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { projects } from "./projects.server";

export type ProjectCard = { slug: string; title: string; thumbnail: string };

export const getProjects = createServerFn({ method: "GET" }).handler((): ProjectCard[] =>
  projects.map(({ slug, title, thumbnail }) => ({ slug, title, thumbnail })),
);

export const getProject = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(({ data: slug }) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) throw notFound();
    return project;
  });
