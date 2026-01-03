import Breadcrumb from "@/components/Breadcrumb";
import ErrorSection from "@/components/sections/ErrorSection";

const menus = [
    {
        label: 'Error',
        link: '',
    }
];

export default function Page404() {
    return (
        <>
            {/*===== Breadcrumb Section    S T A R T =====*/}
            <Breadcrumb title={'Faqs'} menus={menus}/>
            {/*===== Breadcrumb Section    END =====*/}

            {/*===== Error Section    S T A R T =====*/}
            <ErrorSection />
            {/*===== Error Section    END =====*/}
        </>
    )
}