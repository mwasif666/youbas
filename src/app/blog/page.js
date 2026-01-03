import Breadcrumb from "@/components/Breadcrumb";
import BlogSectionOne from "@/components/sections/BlogSectionOne";

const menus = [
    {
        label: 'Blog',
        link: '',
    }
];

export default function Blog() {
    return (
        <>
            {/*===== Breadcrumb Section    S T A R T =====*/}
            <Breadcrumb title={'Blog'} menus={menus}/>
            {/*===== Breadcrumb Section    END =====*/}

            {/*===== Blog Section    S T A R T =====*/}
            <BlogSectionOne showPost={9} pagination={true}/>
            {/*===== Blog Section    END =====*/}
        </>
    )
}