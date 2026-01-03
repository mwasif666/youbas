import Breadcrumb from "@/components/Breadcrumb";
import ProjectDetailsSection from "@/components/sections/ProjectDetailsSection";

const menus = [
    {
        label: 'Project',
        link: '/projects',
    },
    {
        label: 'Project Details',
        link: '',
    },
];

export default function ProjectSlug() {
    return (
        <>
            {/*===== Breadcrumb Section    S T A R T =====*/}
            <Breadcrumb title={'Project Details'} menus={menus}/>
            {/*===== Breadcrumb Section    END =====*/}

            {/*===== Project Details Section    S T A R T =====*/}
            <ProjectDetailsSection />
            {/*===== Project Details Section    END =====*/}
        </>
    )
}