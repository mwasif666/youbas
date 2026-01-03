import Link from "next/link";
import logoWhite from "@/assets/images/logo/logo-white.svg";
import twitter from "@/assets/images/icon/twitter.svg";
import instagram from "@/assets/images/icon/instagram.svg";
import linkedin from "@/assets/images/icon/linkedin.svg";
import facebookIcon from "@/assets/images/icon/facebookIcon.svg";
import arrowUp from "@/assets/images/icon/arrowUp.svg";

export default function FooterOne() {
    return (
        <footer className="footer1 section-padding fix pb-30 bg-dark-1">
            <div className="footer1-wrapper">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-sm-6 col-lg-4">
                            <div className="footer1-wrapper-logoInfo">
                                <div className="footer1-wrapper-logoInfo__logo">
                                    <Link href="/">
                                        <img src={logoWhite.src} alt="logo"/>
                                    </Link>
                                </div>
                                <p className="footer1-wrapper-logoInfo__desc">
                                    A state of plants, usually at night, when their leaflets approach each other and the
                                    flowers close and droop, or are covered.
                                </p>
                                <div className="footer1-wrapper-logoInfo-social">
                                    <div className="footer1-wrapper-logoInfo-social__item">
                                        <a href="https://twitter.com/yourprofile" target="_blank"
                                           rel="noopener noreferrer">
                                            <img className="svg" src={twitter.src}
                                                 alt="Twitter icon"/>
                                        </a>
                                    </div>
                                    <div className="footer1-wrapper-logoInfo-social__item">
                                        <a href="https://instagram.com/yourprofile" target="_blank"
                                           rel="noopener noreferrer">
                                            <img className="svg" src={instagram.src}
                                                 alt="Instagram icon"/>
                                        </a>
                                    </div>
                                    <div className="footer1-wrapper-logoInfo-social__item">
                                        <a href="https://linkedin.com/in/yourprofile" target="_blank"
                                           rel="noopener noreferrer">
                                            <img className="svg" src={linkedin.src}
                                                 alt="LinkedIn icon"/>
                                        </a>
                                    </div>
                                    <div className="footer1-wrapper-logoInfo-social__item">
                                        <a href="https://facebook.com/yourprofile" target="_blank"
                                           rel="noopener noreferrer">
                                            <img className="svg" src={facebookIcon.src}
                                                 alt="Facebook icon"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-2">
                            <div className="footer1-wrapper-link">
                                <h5 className="footer1-wrapper-link__title">Quick Links</h5>
                                <ul className="footer1-wrapper-link-list">
                                    <li className="footer1-wrapper-link-list__item"><a href="#!">Company Profile</a>
                                    </li>
                                    <li className="footer1-wrapper-link-list__item"><a href="#!">Help Center</a></li>
                                    <li className="footer1-wrapper-link-list__item"><Link href="/project">Projects</Link>
                                    </li>
                                    <li className="footer1-wrapper-link-list__item"><Link href="/blog">News & Blog</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-2">
                            <div className="footer1-wrapper-service">
                                <h5 className="footer1-wrapper-service__title">Our Services</h5>
                                <ul className="footer1-wrapper-service-list">
                                    <li className="footer1-wrapper-service-list__item"><a href="#!">UI Design</a></li>
                                    <li className="footer1-wrapper-service-list__item"><a href="#!">UX Design</a></li>
                                    <li className="footer1-wrapper-service-list__item"><a href="#!">Web Design</a></li>
                                    <li className="footer1-wrapper-service-list__item"><a href="#!">Digital
                                        Marketing</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="footer1-wrapper-subscribe">
                                <h5 className="footer1-wrapper-subscribe__title">Subscribe for updates and exclusive
                                    offers!
                                </h5>
                                <div className="footer1-wrapper-subscribe-form">
                                    <input className="footer1-wrapper-subscribe-form__input" type="email" id="email"
                                           placeholder="Your Email"/>
                                    <button className="footer1-wrapper-subscribe-form__button">
                                        <img src={arrowUp.src} alt="icon"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 pt-128">
                            <div className="footer1-bottom">
                                <p>© Copyright 2024, All Rights Reserved by HurrayTheme</p>
                                <div className="footer1-bottom__links">
                                    <Link href="/about">About</Link>
                                    <Link href="/team">Team</Link>
                                    <a href="#!">Support</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer1__verticalLine"></div>
        </footer>
    )
}