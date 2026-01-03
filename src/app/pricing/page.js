import Breadcrumb from "@/components/Breadcrumb";
import PricingSection from "@/components/sections/PricingSection";
import FaqSectionOne from "@/components/sections/FaqSectionOne";

const menus = [
    {
        label: 'Pricing',
        link: '',
    }
];

export default function Pricing() {
    return (
        <>
            {/*===== Breadcrumb Section    S T A R T =====*/}
            <Breadcrumb title={'Service Details'} menus={menus}/>
            {/*===== Breadcrumb Section    END =====*/}

            {/*===== Pricing Section    S T A R T =====*/}
            <PricingSection />
            {/*===== Pricing Section    END =====*/}

            {/*===== Faq Section    S T A R T =====*/}
            <FaqSectionOne />
            {/*===== Faq Section    END =====*/}
        </>
    )
}