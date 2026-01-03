import Breadcrumb from "@/components/Breadcrumb";
import TeamSectionOne from "@/components/sections/TeamSectionOne";

const menus = [
    {
        label: 'Our Team',
        link: '',
    }
];

export default function Team() {
    return (
        <>
            {/*===== Breadcrumb Section    S T A R T =====*/}
            <Breadcrumb title={'Our Team'} menus={menus}/>
            {/*===== Breadcrumb Section    END =====*/}

            {/*===== Team Section    S T A R T =====*/}
            <TeamSectionOne showItems={12}/>
            {/*===== Team Section    END =====*/}
        </>
    )
}