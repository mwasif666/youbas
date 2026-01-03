import phoneIconLg from "@/assets/images/icon/phone-icon-lg.svg";
import messageIconLg from "@/assets/images/icon/mesage-icon-lg.svg";
import locationIconLg from "@/assets/images/icon/location-icon-lg.svg";

export default function ContactUsSectionThree() {
    return (
        <section className="contact3 section-padding pb-0 fix">
            <div className="container">
                <div className="row g-4">
                    {/*Phone Number Card*/}
                    <div className="col-md-4">
                        <div className="contact3-card">
                            <div className="contact3-card__icon">
                                <img className="svg" src={phoneIconLg.src} alt="Phone Icon"/>
                            </div>
                            <p className="contact3-card__label">Phone number</p>
                            <h4 className="contact3-card__info">
                                <a href="tel:44204577077">+44 204 577 0077</a>
                            </h4>
                        </div>
                    </div>

                    {/*Email Card*/}
                    <div className="col-md-4">
                        <div className="contact3-card">
                            <div className="contact3-card__icon">
                                <img className="svg" src={messageIconLg.src} alt="Email Icon"/>
                            </div>
                            <p className="contact3-card__label">Email address</p>
                            <h4 className="contact3-card__info">
                                <a href="mailto:briza@gmail.com">Briza@gmail.com</a>
                            </h4>
                        </div>
                    </div>

                    {/*Office Address Card*/}
                    <div className="col-md-4">
                        <div className="contact3-card">
                            <div className="contact3-card__icon">
                                <img className="svg" src={locationIconLg.src} alt="Location Icon"/>
                            </div>
                            <p className="contact3-card__label">Office Address</p>
                            <h4 className="contact3-card__info">
                                <a href="https://www.google.com/maps/place/Washington+Ave,+New+York,+NY,+USA/@40.7127753,-74.0059728,17z/"
                                   target="_blank">Washington Ave, NY</a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}