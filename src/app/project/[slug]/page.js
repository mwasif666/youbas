import Breadcrumb from "@/components/Breadcrumb";
import ProjectDetailsSection from "@/components/sections/ProjectDetailsSection";
import { projectsList } from "@/data/project";

export const dynamicParams = false;

export async function generateStaticParams() {
  return projectsList.map((p) => ({ slug: `project-${p.id}` }));
}

const menus = [
  {
    label: "Project",
    link: "/projects",
  },
  {
    label: "Project Details",
    link: "",
  },
];

export default function ProjectSlug({ params }) {
  return (
    <>
      {/*===== Breadcrumb Section    S T A R T =====*/}
      <Breadcrumb title={"Project Details"} menus={menus} />
      {/*===== Breadcrumb Section    END =====*/}

      {/*===== Project Details Section    S T A R T =====*/}
      <ProjectDetailsSection slug={params?.slug} />
      {/*===== Project Details Section    END =====*/}
    </>
  );
}
