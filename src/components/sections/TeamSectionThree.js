import teamThumb2_1 from "@/assets/images/team/teamThumb2_1.jpg";
import facebook from "@/assets/images/icon/facebook.svg";
import teamThumb2_2 from "@/assets/images/team/teamThumb2_2.jpg";
import teamThumb2_3 from "@/assets/images/team/teamThumb2_3.jpg";
import teamThumb2_4 from "@/assets/images/team/teamThumb2_4.jpg";
import Link from "next/link";

export default function TeamSectionThree() {
    return (
        <section className="team2 section-padding fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-12">
                        <div className="section-top pb-20">
                            <p className="section-top__subtitle2 text-center">Our Team members</p>
                            <h2 className="section-top__title text-center pb-20">We have skilled people</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xxl-3 d-flex justify-content-center justify-content-lg-end">
                        <div className="team2-card">
                            <div className="team2-card-box">
                                <div className="team2-card-box__bg"></div>
                                <div className="team2-card-box-thumb">
                                    <div className="team2-card-box-thumb__one">
                                        <img src={teamThumb2_1.src} alt="jpg"/>
                                    </div>
                                    <div className="team2-card-box-thumb__icon">
                                        <a href="https://facebook.com/yourprofile" target="_blank"
                                           rel="noopener noreferrer">
                                            <img src={facebook.src} alt="icon"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <Link href="/team/details">
                                <h4 className="team2-card__title">Savannah Nguyen</h4>
                            </Link>
                            <p className="team2-card__desc">Founder & CEO</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xxl-3 d-flex justify-content-center justify-content-lg-start">
                        <div className="team2-card">
                            <div className="team2-card-box">
                                <div className="team2-card-box__bg"></div>
                                <div className="team2-card-box-thumb">
                                    <div className="team2-card-box-thumb__one">
                                        <img src={teamThumb2_2.src} alt="jpg"/>
                                    </div>
                                    <div className="team2-card-box-thumb__icon">
                                        <a href="https://facebook.com/yourprofile" target="_blank"
                                           rel="noopener noreferrer">
                                            <img src={facebook.src} alt="icon"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <Link href="/team/details">
                                <h4 className="team2-card__title">Karla Hesterberg</h4>
                            </Link>
                            <p className="team2-card__desc">Ui/Ux Designer</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xxl-3 d-flex justify-content-center justify-content-lg-end">
                        <div className="team2-card">
                            <div className="team2-card-box">
                                <div className="team2-card-box__bg"></div>
                                <div className="team2-card-box-thumb">
                                    <div className="team2-card-box-thumb__one">
                                        <img src={teamThumb2_3.src} alt="jpg"/>
                                    </div>
                                    <div className="team2-card-box-thumb__icon">
                                        <a href="https://facebook.com/yourprofile" target="_blank"
                                           rel="noopener noreferrer">
                                            <img src={facebook.src} alt="icon"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <Link href="/team/details">
                                <h4 className="team2-card__title">James Barbara</h4>
                            </Link>
                            <p className="team2-card__desc">Creative Director</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xxl-3 d-flex justify-content-center justify-content-lg-start">
                        <div className="team2-card">
                            <div className="team2-card-box">
                                <div className="team2-card-box__bg"></div>
                                <div className="team2-card-box-thumb">
                                    <div className="team2-card-box-thumb__one">
                                        <img src={teamThumb2_4.src} alt="jpg"/>
                                    </div>
                                    <div className="team2-card-box-thumb__icon">
                                        <a href="https://facebook.com/yourprofile" target="_blank"
                                           rel="noopener noreferrer">
                                            <img src={facebook.src} alt="icon"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <Link href="/team/details">
                                <h4 className="team2-card__title">Arush Aggarwal</h4>
                            </Link>
                            <p className="team2-card__desc">Business Advisor</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}