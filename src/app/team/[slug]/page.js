import Breadcrumb from "@/components/Breadcrumb";
import TeamSectionDetails from "@/components/sections/TeamSectionDetails";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { slug: "member-1" },
    { slug: "member-2" },
    { slug: "member-3" },
    { slug: "member-4" },
  ];
}

const menus = [
  {
    label: "Our Team",
    link: "/team",
  },
  {
    label: "Team Details",
    link: "",
  },
];

export default function TeamSlug({ params }) {
  return (
    <>
      {/*===== Breadcrumb Section    S T A R T =====*/}
      <Breadcrumb title={"Team Details"} menus={menus} />
      {/*===== Breadcrumb Section    END =====*/}

      {/*===== Team Details Section    S T A R T =====*/}
      <TeamSectionDetails slug={params?.slug} />
      {/*===== Team Details Section    END =====*/}
    </>
  );
}
