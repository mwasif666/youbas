import Breadcrumb from "@/components/Breadcrumb";
import ProjectSection from "@/components/sections/ProjectSection";

const menus = [
    {
        label: 'Project',
        link: '',
    }
];

export default function Project() {
    return (
        <>
            {/*===== Breadcrumb Section    S T A R T =====*/}
            <Breadcrumb title={'Project'} menus={menus}/>
            {/*===== Breadcrumb Section    END =====*/}

            {/*===== Project Section    S T A R T =====*/}
            <ProjectSection />
            {/*===== Project Section    END =====*/}
        </>
    )
}