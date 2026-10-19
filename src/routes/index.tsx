import { createFileRoute } from "@tanstack/react-router";
import { AllProjects } from "../components/AllProjects";
import { Banner } from "../components/Banner";
import { getProjects } from "../content/api";

export const Route = createFileRoute("/")({
  loader: () => getProjects(),
  component: Home,
});

function Home() {
  const projects = Route.useLoaderData();
  return (
    <>
      <Banner />
      <AllProjects projects={projects} />
    </>
  );
}
