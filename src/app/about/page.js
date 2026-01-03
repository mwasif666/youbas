import Breadcrumb from "@/components/Breadcrumb";
import AboutSectionFour from "@/components/sections/AboutSectionFour";
import CounterSection from "@/components/sections/CounterSection";
import WhyChooseUsSectionTwo from "@/components/sections/WhyChooseUsSectionTwo";
import PricingSectionTwo from "@/components/sections/PricingSectionTwo";
import TeamSectionOne from "@/components/sections/TeamSectionOne";
import MarqueSectionOne from "@/components/sections/MarqueSectionOne";
import TestimonialSectionOne from "@/components/sections/TestimonialSectionOne";

const menus = [
    {
        label: 'About Us',
        link: '',
    }
];

export default function About() {
    return (
        <>
            {/*===== Breadcrumb Section    S T A R T =====*/}
            <Breadcrumb title={'About Us'} menus={menus}/>
            {/*===== Breadcrumb Section    END =====*/}

            {/*===== About Section    S T A R T =====*/}
            <AboutSectionFour />
            {/*===== About Section    END =====*/}

            {/*===== Counter Section    S T A R T =====*/}
            <CounterSection />
            {/*===== Counter Section    END =====*/}

            {/*===== Why Choose Us Section    S T A R T =====*/}
            <WhyChooseUsSectionTwo />
            {/*===== Why Choose Us Section    END =====*/}

            {/*===== Pricing Section    S T A R T =====*/}
            <PricingSectionTwo />
            {/*===== Pricing Section    END =====*/}

            {/*===== Team Section    S T A R T*/}
            <TeamSectionOne showItems={4}/>
            {/*===== Team Section    END*/}

            {/*===== Marque Section    S T A R T =====*/}
            <MarqueSectionOne />
            {/*===== Marque Section    END =====*/}

            {/*===== Testimonial Section    S T A R T =====*/}
            <TestimonialSectionOne />
            {/*===== Testimonial Section    END =====*/}
        </>
    )
}