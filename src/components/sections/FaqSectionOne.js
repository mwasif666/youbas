import faqThumb1_1 from "@/assets/images/faq/faqThumb1_1.png";
import phone from "@/assets/images/icon/phone.svg";

export default function FaqSectionOne() {
    return (
        <section className="faq1 section-padding fix bg-gray-1">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6 col-xl-6">
                        <div className="section-top pb-40">
                            <p className="section-top__subtitle">Our Question</p>
                            <h2 className="section-top__title pb-20">Have any questions? here some answers</h2>
                        </div>
                        <div className="faq1-content">
                            <div className="faq1-content__thumb">
                                <img src={faqThumb1_1.src} alt="png"/>
                            </div>
                            <div className="faq1-content__phone">
                                <img src={phone.src} alt="phone"/>
                                <h3>+12 608 (3456) 789</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-xl-1 col-xl-5">
                        <div className="faq-content">
                            <div className="faq-accordion">
                                <div className="accordion" id="accordion">
                                    <div className="accordion-item">
                                        <h5 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                Q1. What do I have for installation?
                                            </button>
                                        </h5>
                                        <div id="faq1" className="accordion-collapse show" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                Each demo built with Teba will look different. You can customize almost
                                                anything in the appearance of your website with only a few clicks. Each
                                                demo
                                                built different.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h5 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#faq2"
                                                    aria-expanded="false"
                                                    aria-controls="faq2">
                                                Q2. How Much Does Logo Design Services Cost?
                                            </button>
                                        </h5>
                                        <div id="faq2" className="accordion-collapse collapse"
                                             data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                Each demo built with Teba will look different. You can customize almost
                                                anything in the appearance of your website with only a few clicks. Each
                                                demo
                                                built different.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h5 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#faq3"
                                                    aria-expanded="false"
                                                    aria-controls="faq3">
                                                Q3. How to soft launch your business ?
                                            </button>
                                        </h5>
                                        <div id="faq3" className="accordion-collapse collapse"
                                             data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                Each demo built with Teba will look different. You can customize almost
                                                anything in the appearance of your website with only a few clicks. Each
                                                demo
                                                built different.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h5 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#faq4"
                                                    aria-expanded="false"
                                                    aria-controls="faq4">
                                                Q4. How Does The Trial Work ?
                                            </button>
                                        </h5>
                                        <div id="faq4" className="accordion-collapse collapse"
                                             data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                Each demo built with Teba will look different. You can customize almost
                                                anything in the appearance of your website with only a few clicks. Each
                                                demo
                                                built different.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-wrapper pt-40">
                            <a className="theme-btn style1" href="#!">See Work Process</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}