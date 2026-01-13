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
