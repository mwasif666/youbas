import Breadcrumb from "@/components/Breadcrumb";
import BlogSectionFour from "@/components/sections/BlogSectionFour";

const menus = [
    {
        label: 'Blog 2',
        link: '',
    }
];

export default function BlogTwo() {
    return (
        <>
            {/*===== Breadcrumb Section    S T A R T =====*/}
            <Breadcrumb title={'Blog 2'} menus={menus}/>
            {/*===== Breadcrumb Section    END =====*/}

            {/*===== Blog Section    S T A R T =====*/}
            <BlogSectionFour />
            {/*===== Blog Section    END =====*/}
        </>
    )
}