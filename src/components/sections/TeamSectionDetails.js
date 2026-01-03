import teamThumb3_1 from "@/assets/images/team/teamThumb3_1.jpg";
import phoneIconSm from "@/assets/images/icon/phone-icon-sm.svg";
import inboxIconSm from "@/assets/images/icon/inbox-icon-sm.svg";
import facebookWhite from "@/assets/images/icon/facebook-white.svg";
import linkedinWhite from "@/assets/images/icon/linkedin-white.svg";
import twitterWhite from "@/assets/images/icon/twitter-white.svg";
import instagramWhite from "@/assets/images/icon/instagram-white.svg";

export default function TeamSectionDetails() {
    return (
        <section className="team3 section-padding fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-5">
                        <div className="team3__thumb">
                            <img src={teamThumb3_1.src} alt="jpg"/>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="team3-content">
                            <div className="section-top pb-32">
                                <h2 className="section-top__title">James Barbara</h2>
                                <h5 className="section-top__subtitle">CEO - Founder</h5>
                                <p className="section-top__desc">A content management system helps you create, manage,
                                    and
                                    publish content on the web. It also keep content organized and accessible so it can
                                    be
                                    used and repurposed effectively.</p>
                            </div>
                            <div className="team3-content-contact">
                                <div className="team3-content-contact-item">
                                    <img src={phoneIconSm.src} alt="svg"/>
                                    <span className="team3-content-contact-item__text">123-456-5678</span>
                                </div>
                                <div className="team3-content-contact-item">
                                    <img src={inboxIconSm.src} alt="svg"/>
                                    <span className="team3-content-contact-item__text">james.b@example.com</span>
                                </div>
                            </div>
                            <div className="team3-content-social">
                                <div className="team3-content-social__item">
                                    <a href="https://facebook.com/yourprofile" target="_blank"
                                       rel="noopener noreferrer">
                                        <img className="svg" src={facebookWhite.src}
                                             alt="Facebook icon"/>
                                    </a>
                                </div>
                                <div className="team3-content-social__item">
                                    <a href="https://linkedin.com/in/yourprofile" target="_blank"
                                       rel="noopener noreferrer">
                                        <img className="svg" src={linkedinWhite.src}
                                             alt="LinkedIn icon"/>
                                    </a>
                                </div>
                                <div className="team3-content-social__item">
                                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                        <img className="svg" src={twitterWhite.src}
                                             alt="Twitter icon"/>
                                    </a>
                                </div>
                                <div className="team3-content-social__item">
                                    <a href="https://instagram.com/yourprofile" target="_blank"
                                       rel="noopener noreferrer">
                                        <img className="svg" src={instagramWhite.src}
                                             alt="Instagram icon"/>
                                    </a>
                                </div>
                            </div>
                            <div className="team3-content-form">
                                <div className="team3-content-form__title">
                                    <h3>Contact with Me</h3>
                                </div>
                                <div className="team3-content-form__desc">
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                </div>
                                <form action="#" id="#" method="POST" className="form">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="form__group">
                                                <input type="text" name="name" id="name" placeholder="Your name"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form__group">
                                                <input type="text" name="email" id="email" placeholder="Email address"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form__group">
                                                <input type="text" name="subject" id="subject" placeholder="Subject"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form__group form__group--large">
                                            <textarea name="message" id="message"
                                                      placeholder="Type your message"></textarea>
                                            </div>
                                        </div>
                                        <div className="btn-wrapper pt-7">
                                            <button className="theme-btn style1">Post Comment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}