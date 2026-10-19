import { createFileRoute } from "@tanstack/react-router";
import { AllProjects } from "../../components/AllProjects";
import { getProjects } from "../../content/api";

export const Route = createFileRoute("/projects/")({
  loader: () => getProjects(),
  component: Projects,
});

function Projects() {
  return <AllProjects className="pt-2" projects={Route.useLoaderData()} />;
}
