import Breadcrumb from "@/components/Breadcrumb";
import FaqSection from "@/components/sections/FaqSection";
import TestimonialSectionTwo from "@/components/sections/TestimonialSectionTwo";

const menus = [
    {
        label: 'Faqs',
        link: '',
    }
];

export default function Faq() {
    return (
        <>
            {/*===== Breadcrumb Section    S T A R T =====*/}
            <Breadcrumb title={'Faqs'} menus={menus}/>
            {/*===== Breadcrumb Section    END =====*/}

            {/*===== Faq Section    S T A R T =====*/}
            <FaqSection />
            {/*===== Faq Section    END =====*/}

            {/*===== Testimonial Section    S T A R T =====*/}
            <TestimonialSectionTwo classes={'bg-gray-1'} slideClasses={'testimonial2-card--bg'}/>
            {/*===== Testimonial Section    END =====*/}
        </>
    )
}