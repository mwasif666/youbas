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
                                <a href="tel:+13312039861">+1 (331) 203-9861</a>
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
                                <a href="mailto:contact@youbasecomservices.com">contact@youbasecomservices.com</a>
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
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=537%20W%20Sugar%20Creek%20Rd%2C%20Charlotte%2C%20NC%2028213-6102"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    537 W Sugar Creek Rd, Charlotte, NC 28213-6102
                                </a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
