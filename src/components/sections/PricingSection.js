import pricingThumb2_1 from "@/assets/images/pricing/pricingThumb2_1.png";

export default function PricingSection() {
    return (
        <section className="pricing1 section-padding fix">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-12">
                        <div className="pricing1-item">
                            <div className="pricing1-item-card pricing1-item-card--bg">
                                <div className="pricing1-item-card-price">
                                    <span className="pricing1-item-card-price__value">$19</span>
                                    <span className="pricing1-item-card-price__unit">/month</span>
                                </div>
                                <div className="pricing1-item-card-content">
                                    <h3 className="pricing1-item-card-content__title">Starter Plan</h3>
                                    <p className="pricing1-item-card-content__desc">Content Marketing Solutions Engage
                                        Inform
                                        and Convert Your Audience Solutions</p>
                                </div>
                                <div className="btn-wrapper">
                                    <a className="theme-btn style1" href="#!">Start for free</a>
                                </div>
                            </div>
                            <div className="pricing1-item__thumb">
                                <img src={pricingThumb2_1.src} alt="thumb"/>
                            </div>
                        </div>
                        <div className="pricing1-item">
                            <div className="pricing1-item-card pricing1-item-card--bg">
                                <div className="pricing1-item-card-price">
                                    <span className="pricing1-item-card-price__value">$29</span>
                                    <span className="pricing1-item-card-price__unit">/month</span>
                                </div>
                                <div className="pricing1-item-card-content">
                                    <h3 className="pricing1-item-card-content__title">Premium Plan</h3>
                                    <p className="pricing1-item-card-content__desc">Content Marketing Solutions Engage
                                        Inform
                                        and Convert Your Audience Solutions</p>
                                </div>
                                <div className="btn-wrapper">
                                    <a className="theme-btn style1" href="#!">Start for free</a>
                                </div>
                            </div>
                            <div className="pricing1-item__thumb">
                                <img src={pricingThumb2_1.src} alt="thumb"/>
                            </div>
                        </div>
                        <div className="pricing1-item">
                            <div className="pricing1-item-card pricing1-item-card--bg">
                                <div className="pricing1-item-card-price">
                                    <span className="pricing1-item-card-price__value">$89</span>
                                    <span className="pricing1-item-card-price__unit">/month</span>
                                </div>
                                <div className="pricing1-item-card-content">
                                    <h3 className="pricing1-item-card-content__title">Advance Plan</h3>
                                    <p className="pricing1-item-card-content__desc">Content Marketing Solutions Engage
                                        Inform
                                        and Convert Your Audience Solutions</p>
                                </div>
                                <div className="btn-wrapper">
                                    <a className="theme-btn style1" href="#!">Start for free</a>
                                </div>
                            </div>
                            <div className="pricing1-item__thumb">
                                <img src={pricingThumb2_1.src} alt="thumb"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}