import Breadcrumb from "@/components/Breadcrumb";
import BlogDetailsSection from "@/components/sections/BlogDetailsSection";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ slug: "details-1" }, { slug: "details-2" }, { slug: "details-3" }];
}

const menus = [
  {
    label: "Blog",
    link: "/blog",
  },
  {
    label: "Blog Details",
    link: "",
  },
];

export default function BlogSlug({ params }) {
  return (
    <>
      {/*===== Breadcrumb Section    S T A R T =====*/}
      <Breadcrumb title={"Blog Details"} menus={menus} />
      {/*===== Breadcrumb Section    END =====*/}

      {/*===== Blog Section    S T A R T =====*/}
      <BlogDetailsSection slug={params?.slug} />
      {/*===== Blog Section    END =====*/}
    </>
  );
}
