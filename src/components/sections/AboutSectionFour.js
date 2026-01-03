import aboutThumb1_1 from "@/assets/images/about/about-thumb1_1.jpg";
import aboutShape1_3 from "@/assets/images/shape/aboutShape1_3.png";
import aboutShape1_4 from "@/assets/images/shape/aboutShape1_4.png";
import aboutThumb1_2 from "@/assets/images/about/about-thumb1_2.jpg";
import aboutShape1_1 from "@/assets/images/shape/aboutShape1_1.png";
import aboutShape1_2 from "@/assets/images/shape/aboutShape1_2.png";
import check from "@/assets/images/icon/check.svg";
import Link from "next/link";

export default function AboutSectionFour() {
    return (
        <section className="about1 section-padding fix">
            <div className="container">
                <div className="row g-3">
                    <div className="col-sm-6 col-lg-3 col-xl-3">
                        <div className="about1-thumb">
                            <div className="about1-thumb__one">
                                <img src={aboutThumb1_1.src} alt="thumb"/>
                            </div>
                            <div className="about1-thumb__shape3">
                                <img src={aboutShape1_3.src} alt="shape"/>
                            </div>
                            <div className="about1-thumb__shape4">
                                <img src={aboutShape1_4.src} alt="shape"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 col-xl-3">
                        <div className="about1-thumb">
                            <div className="about1-thumb__two">
                                <img src={aboutThumb1_2.src} alt="thumb"/>
                            </div>
                            <div className="about1-thumb__shape1">
                                <img className="rotate360" src={aboutShape1_1.src} alt="shape"/>
                            </div>
                            <div className="about1-thumb__shape2">
                                <img src={aboutShape1_2.src} alt="shape"/>
                            </div>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-xl-5 col-lg-5 ">
                        <div className="about1-content">
                            <div className="section-top">
                                <p className="section-top__subtitle">About Company</p>
                                <h2 className="section-top__title pb-20">Digital agency for your business</h2>
                                <p className="section-top__desc">Since 1985 Reed has pioneere specialist recruitment,
                                    sourcing
                                    knowledgeable, skilled professional pioneered speciali larong
                                    recruitment, sourcing larong into the head infor their.</p>
                            </div>
                            <div className="about1-content-checklist">
                                <ul>
                                    <li className="about1-content-checklist-item">
                                        <span><img src={check.src} alt="icon"/></span>
                                        <span className="about1-content-checklist-item__text">35+ Professional Team
                                        Members</span>
                                    </li>
                                    <li className="about1-content-checklist-item">
                                        <span><img src={check.src} alt="icon"/></span>
                                        <span className="about1-content-checklist-item__text">Any Business Problem
                                        Solving</span>
                                    </li>
                                    <li className="about1-content-checklist-item">
                                        <span><img src={check.src} alt="icon"/></span>
                                        <span
                                            className="about1-content-checklist-item__text">Implement Business Pro</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-wrapper">
                                <Link className="theme-btn style1" href="/about">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}