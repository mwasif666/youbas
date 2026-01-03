import HeroSectionOne from "@/components/sections/HeroSectionOne";
import AboutSectionOne from "@/components/sections/AboutSectionOne";
import ServiceSectionOne from "@/components/sections/ServiceSectionOne";
import ProjectSectionOne from "@/components/sections/ProjectSectionOne";
import WhyChooseUsSectionOne from "@/components/sections/WhyChooseUsSectionOne";
import TeamSectionOne from "@/components/sections/TeamSectionOne";
import MarqueSectionOne from "@/components/sections/MarqueSectionOne";
import FaqSectionOne from "@/components/sections/FaqSectionOne";
import TestimonialSectionOne from "@/components/sections/TestimonialSectionOne";
import BlogSectionOne from "@/components/sections/BlogSectionOne";

export const metadata = {
    title: "Home 1 | Briza - Creative & Digital Agency Next Js Template",
    description: "Home 1 | Briza - Creative & Digital Agency Next Js Template",
};

export default function Home() {
    return (
        <>
            {/*===== Hero Section    S T A R T =====*/}
            <HeroSectionOne/>
            {/*===== Hero Section    END =====*/}

            {/*===== About Section    S T A R T =====*/}
            <AboutSectionOne/>
            {/*===== About Section    END =====*/}

            {/*===== Service Section    S T A R T =====*/}
            <ServiceSectionOne />
            {/*===== Service Section    END =====*/}

            {/*===== Project Section    S T A R T =====*/}
            <ProjectSectionOne />
            {/*===== Project Section    END =====*/}

            {/*===== Why Choose Us Section    S T A R T =====*/}
            <WhyChooseUsSectionOne />
            {/*===== Why Choose Us Section    END =====*/}

            {/*===== Team Section    S T A R T =====*/}
            <TeamSectionOne showItems={4}/>
            {/*===== Team Section    END =====*/}

            {/*===== Marque Section    S T A R T =====*/}
            <MarqueSectionOne />
            {/*===== Marque Section    END =====*/}

            {/*===== Testimonial Section    S T A R T =====*/}
            <TestimonialSectionOne />
            {/*===== Testimonial Section    END =====*/}

            {/*===== Faq Section    S T A R T =====*/}
            <FaqSectionOne />
            {/*===== Faq Section    END =====*/}

            {/*===== Blog Section    S T A R T =====*/}
            <BlogSectionOne />
            {/*===== Blog Section    END =====*/}

        </>
    );
}
