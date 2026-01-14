import Breadcrumb from "@/components/Breadcrumb";
import BlogDetailsSection from "@/components/sections/BlogDetailsSection";
import { blogPosts } from "@/data/blog";

export const dynamicParams = false;

export async function generateStaticParams() {
  return blogPosts.map((post) => {
    const parts = post.link?.split("/") || [];
    const slug = parts[parts.length - 1] || `post-${post.id}`;
    return { slug };
  });
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
