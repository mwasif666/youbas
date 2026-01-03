import Breadcrumb from "@/components/Breadcrumb";
import TeamSectionDetails from "@/components/sections/TeamSectionDetails";

const menus = [
    {
        label: 'Our Team',
        link: '/team',
    },
    {
        label: 'Team Details',
        link: '',
    }
];

export default function TeamSlug() {
    return (
        <>
            {/*===== Breadcrumb Section    S T A R T =====*/}
            <Breadcrumb title={'Team Details'} menus={menus}/>
            {/*===== Breadcrumb Section    END =====*/}

            {/*===== Team Details Section    S T A R T =====*/}
            <TeamSectionDetails />
            {/*===== Team Details Section    END =====*/}
        </>
    )
}