import Breadcrumb from "@/components/Breadcrumb";
import ServiceDetailsSection from "@/components/sections/ServiceDetailsSection";

const menus = [
    {
        label: 'Our Service',
        link: '/service',
    },
    {
        label: 'Service Details',
        link: '',
    }
];

export default function ServiceSlug() {
    return (
        <>
            {/*===== Breadcrumb Section    S T A R T =====*/}
            <Breadcrumb title={'Service Details'} menus={menus}/>
            {/*===== Breadcrumb Section    END =====*/}

            {/*===== Service Details Section    S T A R T =====*/}
            <ServiceDetailsSection />
            {/*===== Service Details Section    END =====*/}
        </>
    )
}