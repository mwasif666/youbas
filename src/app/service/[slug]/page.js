import Breadcrumb from "@/components/Breadcrumb";
import ProjectDetailsSection from "@/components/sections/ProjectDetailsSection";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { slug: "project-one" },
    { slug: "project-two" },
    { slug: "project-three" },
    { slug: "project-four" },
  ];
}

const menus = [
  { label: "Our Project", link: "/project" },
  { label: "Project Details", link: "" },
];

export default function ProjectSlugPage({ params }) {
  return (
    <>
      <Breadcrumb title={"Project Details"} menus={menus} />
      <ProjectDetailsSection slug={params.slug} />
    </>
  );
}
