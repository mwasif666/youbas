import twitter from "@/assets/images/icon/twitter.svg";
import instagram from "@/assets/images/icon/instagram.svg";
import linkedin from "@/assets/images/icon/linkedin.svg";
import facebookIcon from "@/assets/images/icon/facebookIcon.svg";
import Link from "next/link";

export default function FooterThree() {
    return (
        <footer className="footer3 section-padding fix pb-30 bg-dark-1">
            <div className="footer3-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer3-wrapper-content">
                                <div className="footer3-wrapper-content__text">
                                    <h2>Let’s work together.</h2>
                                </div>
                                <div className="footer3-wrapper-content-cta">
                                    <p className="footer3-wrapper-content-cta__text">
                                        Expand your expertise and gain business, communication, and management skills
                                        that
                                        can advance
                                        your career in real estate. You'll also learn to ...
                                    </p>
                                    <div className="btn-wrapper">
                                        <Link className="theme-btn style1" href="/contact">Let’s Work With Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="footer3-wrapper-bottom">
                                <div className="footer3-wrapper-bottom__menu">
                                    <ul>
                                        <li><a href="#!">Menu</a></li>
                                        <li><a href="#!">Pages</a></li>
                                        <li><Link href="/about">About</Link></li>
                                        <li><Link href="/service">Services</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                                <div className="footer3-wrapper-bottom__links">
                                    <a href="#!">Terms & Conditions</a>
                                    <a href="#!">Privacy Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="footer3-wrapper-logoInfo">
                                <p>HurrayTheme@2024. All Rights Reserved.</p>
                                <div className="footer3-wrapper-logoInfo-social">
                                    <div className="footer3-wrapper-logoInfo-social__item">
                                        <a href="https://twitter.com/yourprofile" target="_blank"
                                           rel="noopener noreferrer">
                                            <img className="svg" src={twitter.src}
                                                 alt="Twitter icon"/>
                                        </a>
                                    </div>
                                    <div className="footer3-wrapper-logoInfo-social__item">
                                        <a href="https://instagram.com/yourprofile" target="_blank"
                                           rel="noopener noreferrer">
                                            <img className="svg" src={instagram.src}
                                                 alt="Instagram icon"/>
                                        </a>
                                    </div>
                                    <div className="footer3-wrapper-logoInfo-social__item">
                                        <a href="https://linkedin.com/in/yourprofile" target="_blank"
                                           rel="noopener noreferrer">
                                            <img className="svg" src={linkedin.src}
                                                 alt="LinkedIn icon"/>
                                        </a>
                                    </div>
                                    <div className="footer3-wrapper-logoInfo-social__item">
                                        <a href="https://facebook.com/yourprofile" target="_blank"
                                           rel="noopener noreferrer">
                                            <img className="svg" src={facebookIcon.src}
                                                 alt="Facebook icon"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}