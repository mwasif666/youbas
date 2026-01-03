import serviceIcon1_1 from "@/assets/images/icon/service-icon1_1.svg";
import serviceIcon1_2 from "@/assets/images/icon/service-icon1_2.svg";
import serviceIcon1_3 from "@/assets/images/icon/service-icon1_3.svg";
import serviceIcon1_4 from "@/assets/images/icon/service-icon1_4.svg";
import Link from "next/link";

export default function ServiceSectionThree() {
    return (
        <section className="service3 section-padding fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-5">
                        <div className="section-top">
                            <p className="section-top__subtitle">Our Services</p>
                            <h2 className="section-top__title">Explore Unique Digital Agency Service</h2>
                        </div>
                        <div className="btn-wrapper pt-40">
                            <Link className="theme-btn style1" href="/service">View All Services</Link>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="row">
                            <div className="col-xl-6 col-md-6">
                                <div className="service3-card">
                                    <div className="service3-card__icon">
                                        <img className="svg"
                                             src={serviceIcon1_1.src}
                                             alt="icon"/>
                                    </div>
                                    <Link href="/service/details">
                                        <h4 className="service3-card__title">UI/UX Design</h4>
                                    </Link>
                                    <p className="service3-card__desc">There are many variation passage of Lorem Ipsum
                                        available
                                        majority have suffered alteration.</p>
                                    <Link href="/service/details" className="service3-card__link">Read more</Link>
                                </div>
                                <div className="service3-card">
                                    <div className="service3-card__icon">
                                        <img className="svg"
                                             src={serviceIcon1_3.src}
                                             alt="icon"/>
                                    </div>
                                    <Link href="/service/details">
                                        <h4 className="service3-card__title">Digital Marketing</h4>
                                    </Link>
                                    <p className="service3-card__desc">There are many variation passage of Lorem Ipsum
                                        available
                                        majority have suffered alteration.</p>
                                    <Link href="/service/details" className="service3-card__link">Read more</Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                                <div className="service3-card mt-xl-100">
                                    <div className="service3-card__icon">
                                        <img className="svg"
                                             src={serviceIcon1_2.src}
                                             alt="icon"/>
                                    </div>
                                    <Link href="/service/details">
                                        <h4 className="service3-card__title">Web Development</h4>
                                    </Link>
                                    <p className="service3-card__desc">There are many variation passage of Lorem Ipsum
                                        available
                                        majority have suffered alteration.</p>
                                    <Link href="/service/details" className="service3-card__link">Read more</Link>
                                </div>
                                <div className="service3-card">
                                    <div className="service3-card__icon service3-card__icon--fill">
                                        <img className="svg"
                                             src={serviceIcon1_4.src}
                                             alt="icon"/>
                                    </div>
                                    <Link href="/service/details">
                                        <h4 className="service3-card__title">Product Design</h4>
                                    </Link>
                                    <p className="service3-card__desc">There are many variation passage of Lorem Ipsum
                                        available
                                        majority have suffered alteration.</p>
                                    <Link href="/service/details" className="service3-card__link">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}