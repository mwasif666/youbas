import Breadcrumb from "@/components/Breadcrumb";
import BlogDetailsSection from "@/components/sections/BlogDetailsSection";

const menus = [
    {
        label: 'Blog',
        link: '/blog',
    },
    {
        label: 'Blog Details',
        link: '',
    }
];

export default function BlogSlug() {
    return (
        <>
            {/*===== Breadcrumb Section    S T A R T =====*/}
            <Breadcrumb title={'Blog Details'} menus={menus}/>
            {/*===== Breadcrumb Section    END =====*/}

            {/*===== Blog Section    S T A R T =====*/}
            <BlogDetailsSection />
            {/*===== Blog Section    END =====*/}
        </>
    )
}