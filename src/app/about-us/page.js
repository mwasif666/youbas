import Breadcrumb from "@/components/Breadcrumb";
import AboutSectionOne from "@/components/sections/AboutSectionOne";
import ServiceSectionOne from "@/components/sections/ServiceSectionOne";
import PricingSection from "@/components/sections/PricingSection";
import ProjectSectionOne from "@/components/sections/ProjectSectionOne";
import TeamSectionOne from "@/components/sections/TeamSectionOne";

export default function AboutUsPage() {
  const menus = [{ label: "About Us", link: "" }];

  return (
    <>
      <Breadcrumb title="About Us" menus={menus} />
      <AboutSectionOne />
      <ServiceSectionOne />
      <PricingSection />
      <ProjectSectionOne />
      <TeamSectionOne showItems={8} />
    </>
  );
}
