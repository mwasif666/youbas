import Breadcrumb from "@/components/Breadcrumb";
import ContactUsSectionThree from "@/components/sections/ContactUsSectionThree";
import ContactUsSectionFour from "@/components/sections/ContactUsSectionFour";
const menus = [
    {
        label: 'Contact Us',
        link: '',
    }
];

export default function Contact() {
    return (
        <>
            {/*===== Breadcrumb Section    S T A R T =====*/}
            <Breadcrumb title={'Contact Us'} menus={menus}/>
            {/*===== Breadcrumb Section    END =====*/}

            {/*===== CONTACT Section    S T A R T =====*/}
            <ContactUsSectionThree/>
            {/*===== CONTACT Section    END =====*/}

            <div className="map-section section-padding pb-0 fix">
                <div className="map-container">
                    <iframe
                        src="https://maps.google.com/maps?q=537%20W%20Sugar%20Creek%20Rd%2C%20Charlotte%2C%20NC%2028213-6102&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        allowFullScreen loading="lazy">
                    </iframe>
                </div>
            </div>

            <ContactUsSectionFour />
        </>
    )
}
