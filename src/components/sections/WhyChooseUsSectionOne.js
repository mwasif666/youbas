import wcuThumb1_1 from "@/assets/images/wcu/wcuThumb1_1.jpg";
import wcuShape1_2 from "@/assets/images/shape/wcuShape1_2.png";
import wcuShape1_1 from "@/assets/images/shape/wcuShape1_1.png";
import wcuThumb1_2 from "@/assets/images/wcu/wcuThumb1_2.jpg";
import wcuShape1_3 from "@/assets/images/shape/wcuShape1_3.png";

export default function WhyChooseUsSectionOne() {
    return (
        <section className="wcu1 section-padding fix bg-dark-1">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6 col-xl-5">
                        <div className="wcu1-content">
                            <div className="section-top">
                                <p className="section-top__subtitle">Why Choose Us</p>
                                <h2 className="section-top__title2 pb-20">Great solutions for your business.</h2>
                                <p className="section-top__desc2">There are many variations of passages of Lorem
                                    available,
                                    the majority have suffered alteration in some, injected humour. randomised don't
                                    look
                                    even slightly.</p>
                            </div>
                            <div className="progress-wrap pt-45">
                                <div className="progress-meta">
                                    <div className="title">Web Development</div>
                                    <div className="percentage">90%</div>
                                </div>
                                <div className="progress-container">
                                    <div className="progress-bar"
                                         style={{width: '90%'}}>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-wrap">
                                <div className="progress-meta mxw-424">
                                    <div className="title">UI/UX Design</div>
                                    <div className="percentage">80%</div>
                                </div>
                                <div className="progress-container">
                                    <div className="progress-bar"
                                         style={{ width: '80%'}}>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-wrap">
                                <div className="progress-meta mxw-375">
                                    <div className="title">Digital Marketing</div>
                                    <div className="percentage">70%</div>
                                </div>
                                <div className="progress-container">
                                    <div className="progress-bar"
                                         style={{width: '70%'}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offset-xl-1 col-xl-3 col-lg-3 col-sm-6">
                        <div className="wcu1-thumb">
                            <div className="wcu1-thumb__one">
                                <img src={wcuThumb1_1.src} alt="jpg"/>
                            </div>
                            <div className="wcu1-thumb__shape3">
                                <img src={wcuShape1_2.src} alt="shape"/>
                            </div>
                            <div className="wcu1-thumb__shape4">
                                <img src={wcuShape1_1.src} alt="shape"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="wcu1-thumb">
                            <div className="wcu1-thumb__two">
                                <img src={wcuThumb1_2.src} alt="jpg"/>
                            </div>
                            <div className="wcu1-thumb__shape1">
                                <img src={wcuShape1_3.src} alt="shape"/>
                            </div>
                            <div className="wcu1-thumb__shape2">
                                <img src={wcuShape1_2.src} alt="shape"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}