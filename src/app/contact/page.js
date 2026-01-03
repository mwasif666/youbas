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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                        allowFullScreen loading="lazy">
                    </iframe>
                </div>
            </div>

            <ContactUsSectionFour />
        </>
    )
}