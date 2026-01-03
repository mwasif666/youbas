import ellipse from "@/assets/images/icon/ellipse.svg"
import line from "@/assets/images/icon/line.svg"

export default function TimelineSection() {
    return (
        <section className="timeline1 section-padding fix">
            <div className="container">
                <div className="timeline1-wrap">
                    <div className="row d-flex justify-content-center mb-60">
                        <div className="col-md-6 text-center">
                            <div className="section-top">
                                <p className="section-top__subtitle2">Process timeline</p>
                                <h2 className="section-top__title">Easy process to find your ideal plan</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="timeline1-wrap-step">
                                <div className="timeline1-wrap-step__numb">01</div>
                                <div className="timeline1-wrap-step__icon">
                                    <img src={ellipse.src} alt="svg"/>
                                </div>
                                <h4 className="timeline1-wrap-step__title">Online Application</h4>
                                <p className="timeline1-wrap-step__desc">Lorem ipsum dolor, consectetur adipiscing elit,
                                    eiusmod
                                    tempor incididunt ut labore et .</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="timeline1-wrap-step">
                                <div className="timeline1-wrap-step__numb">02</div>
                                <div className="timeline1-wrap-step__icon">
                                    <img src={ellipse.src} alt="svg"/>
                                </div>
                                <h4 className="timeline1-wrap-step__title">Pick A Plan</h4>
                                <p className="timeline1-wrap-step__desc">Lorem ipsum dolor, consectetur adipiscing elit,
                                    eiusmod
                                    tempor incididunt ut labore et .</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="timeline1-wrap-step">
                                <div className="timeline1-wrap-step__numb">03</div>
                                <div className="timeline1-wrap-step__icon">
                                    <img src={ellipse.src} alt="svg"/>
                                </div>
                                <h4 className="timeline1-wrap-step__title">Compare Quotes</h4>
                                <p className="timeline1-wrap-step__desc">Lorem ipsum dolor, consectetur adipiscing elit,
                                    eiusmod
                                    tempor incididunt ut labore et .</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="timeline1-wrap-step">
                                <div className="timeline1-wrap-step__numb">04</div>
                                <div className="timeline1-wrap-step__icon">
                                    <img src={ellipse.src} alt="svg"/>
                                </div>
                                <h4 className="timeline1-wrap-step__title">Compare Quotes</h4>
                                <p className="timeline1-wrap-step__desc">Lorem ipsum dolor, consectetur adipiscing elit,
                                    eiusmod
                                    tempor incididunt ut labore et .</p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline1-wrap__shape">
                        <img src={line.src} alt="shape"/>
                    </div>
                </div>
            </div>
        </section>
    )
}