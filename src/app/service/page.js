import Breadcrumb from "@/components/Breadcrumb";
import ServiceSectionFour from "@/components/sections/ServiceSectionFour";
import ContactUsSectionTwo from "@/components/sections/ContactUsSectionTwo";

const menus = [
    {
        label: 'Our Service',
        link: '',
    }
];

export default function Service() {
    return (
        <>
            {/*===== Breadcrumb Section    S T A R T =====*/}
            <Breadcrumb title={'Our Service'} menus={menus}/>
            {/*===== Breadcrumb Section    END =====*/}

            {/*===== Service Section    S T A R T =====*/}
            <ServiceSectionFour />
            {/*===== Service Section    END =====*/}

            {/*===== Contact Us Section    S T A R T =====*/}
            <ContactUsSectionTwo />
            {/*===== Contact Us Section    END =====*/}
        </>
    )
}