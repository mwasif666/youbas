import serviceDetails1_1 from "@/assets/images/service/service-details1_1.jpg";
import serviceDetails1_2 from "@/assets/images/service/service-details1_2.jpg";
import serviceDetails1_3 from "@/assets/images/service/service-details1_3.jpg";
import checkIcon from "@/assets/images/icon/check-icon.svg";
import getTouchIcon from "@/assets/images/icon/getTouch-icon.svg";
import Link from "next/link";

export default function ServiceDetailsSection() {
    return (
        <section className="service4 section-padding fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="service4-details">
                            <div className="service4-details__thumb">
                                <img src={serviceDetails1_1.src} alt="jpg"/>
                            </div>
                            <div className="service4-details-content">
                                <div className="service4-details-content__title">
                                    <h2>Service Overview</h2>
                                </div>
                                <div className="service4-details-content__desc">
                                    <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est
                                        qui
                                        dolorem ipsum quia var quaed inventore veritatis
                                        et quasi architecto beatae vitae dicta explicabo. Aelltes port lacus quis enim
                                        var
                                        sed efficitur turpis gilla sed sit amet finibus eros. Lore Ipsum is simply dummy
                                        text of the been printing and typesetting industry. Lorem Ipsum has been the
                                        ndustry
                                        standard dummy text ever since the 1500s, when an unknown printer.</p>
                                </div>
                                <div className="service4-details-content__desc2">
                                    <p>When an unknown printer took a galley of type and scrambled it to make a type
                                        book.
                                        It leap survive not only five centurie, but also the leap into electronic
                                        typesetting, unchange Lorem ipsum dolor sit amet consec tetur adipis icing
                                        elit.</p>
                                </div>
                                <div className="service4-details-content__title2">
                                    <h3>Service Center</h3>
                                </div>
                                <div className="service4-details-content__desc">
                                    <p>With over a decade of experience, we’ve established ourselves as one of pioneerin
                                        agencies in the region. Our small, flexible, agile and design-led structures and
                                        processes
                                        allow highly responsive and innovative. We’re of passionate leaders,
                                        strategists,
                                        managers, developers, animators and designers who work together under one
                                        umbrella.
                                        We are a digitally-led, service creative agency. We combine strategy, marketing,
                                        design.</p>
                                </div>
                                <div className="service4-details-content-thumb">
                                    <div className="service4-details-content-thumb__one">
                                        <img src={serviceDetails1_2.src} alt="jpg"/>
                                    </div>
                                    <div className="service4-details-content-thumb__two">
                                        <img src={serviceDetails1_3.src} alt="jpg"/>
                                    </div>
                                </div>
                                <div className="service4-details-content__desc2">
                                    <p>When an unknown printer took a galley of type and scrambled it to make a type
                                        book.
                                        It has leap survive not only five centurie, but also the leap into electronic
                                        typesetting essentiall dolor unchange Lorem ipsum dolor sit amet consec tetur
                                        adipis
                                        icing elit.</p>
                                </div>
                                <div className="service4-details-content__title2">
                                    <h3>Services All Details</h3>
                                </div>
                                <div className="service4-details-content__desc2 pb-30">
                                    <p>Cast obscure badger jeep quail congenialy when changed as cat jeepers
                                        affectionate
                                        thus facilisi goodness this far like ipsum dolor sit amet, consectetur
                                        adipisicing
                                        elits sed eiusmod tempo et incididunt et laboret dolore magna aliqua enim ad
                                        minim.
                                        Eveniet in vulputate esse molestie consequat, illum dolore eu feugiat nulla
                                        facilisis at seds eros sed.</p>
                                </div>
                                <div className="service4-details-content-list">
                                    <ul className="checklist">
                                        <li className="checklist-item">
                                        <span className="checklist-item__icon">
                                            <img src={checkIcon.src} alt="svg"/>
                                        </span>
                                            <span className="checklist-item__text">Creating and editing content</span>
                                        </li>
                                        <li className="checklist-item">
                                        <span className="checklist-item__icon">
                                            <img src={checkIcon.src} alt="svg"/>
                                        </span>
                                            <span className="checklist-item__text">Workflows, reporting, and content
                                            organization</span>
                                        </li>
                                        <li className="checklist-item">
                                        <span className="checklist-item__icon">
                                            <img src={checkIcon.src} alt="svg"/>
                                        </span>
                                            <span className="checklist-item__text">User & role-based administration and
                                            security</span>
                                        </li>
                                        <li className="checklist-item">
                                        <span className="checklist-item__icon">
                                            <img src={checkIcon.src} alt="svg"/>
                                        </span>
                                            <span className="checklist-item__text">Flexibility, scalability, and performance and
                                            analysis</span>
                                        </li>
                                        <li className="checklist-item">
                                        <span className="checklist-item__icon">
                                            <img src={checkIcon.src} alt="svg"/>
                                        </span>
                                            <span
                                                className="checklist-item__text">Multilingual content capabilities</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="widget">
                            <div className="widget-card">
                                <div className="widget-card__title">
                                    <h3>Services</h3>
                                </div>
                                <div className="widget-card-services">
                                    <ul>
                                        <li className="active"><Link href="/service/details">Web Development<span><i
                                            className="fa-regular fa-arrow-right"></i></span></Link></li>
                                        <li><Link href="/service/details">Ui/Ux Design <span><i
                                            className="fa-regular fa-arrow-right"></i></span></Link></li>
                                        <li><Link href="/service/details">Digital Marketing<span><i
                                            className="fa-regular fa-arrow-right"></i></span></Link></li>
                                        <li><Link href="/service/details">Product Design<span><i
                                            className="fa-regular fa-arrow-right"></i></span></Link></li>
                                        <li><Link href="/service/details">App Development<span><i
                                            className="fa-regular fa-arrow-right"></i></span></Link></li>
                                        <li><Link href="/service/details">SEO Marketing<span><i
                                            className="fa-regular fa-arrow-right"></i></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget-getTouch">
                                <div className="widget-getTouch__icon">
                                    <img src={getTouchIcon.src} alt="svg"/>
                                </div>
                                <div className="widget-getTouch__title">
                                    <h3>Don't hesitate to contact us</h3>
                                </div>
                                <div className="widget-getTouch__text">
                                    <p>At our IT solution company, we are committed to exceptional</p>
                                </div>
                                <div className="btn-wrapper pt-40">
                                    <button className="theme-btn style3">Get in Touch</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}