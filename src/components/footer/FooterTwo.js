import Link from "next/link";
import logoWhite from "@/assets/images/logo/logo-white.svg";
import twitter from "@/assets/images/icon/twitter.svg";
import instagram from "@/assets/images/icon/instagram.svg";
import linkedin from "@/assets/images/icon/linkedin.svg";
import facebookIcon from "@/assets/images/icon/facebookIcon.svg";

export default function FooterTwo() {
    return (
        <footer className="footer2 section-padding fix pb-30 bg-dark-1">
            <div className="footer2-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer2-wrapper-content">
                                <div className="footer2-wrapper-content__text">
                                    <h2>Let's Turn Ideas into Something Great</h2>
                                    <p>We shift you from today’s reality to tomorrow’s potential, ensuring</p>
                                </div>
                                <div className="footer2-wrapper-content__cta">
                                    <Link href="/contact">Let’s Talk</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-5">
                        <div className="col-sm-6 col-lg-4">
                            <div className="footer2-wrapper-logoInfo">
                                <div className="footer2-wrapper-logoInfo__logo">
                                    <Link href="/">
                                        <img src={logoWhite.src} alt="logo"/>
                                    </Link>
                                </div>
                                <p className="footer2-wrapper-logoInfo__desc">
                                    A state of plants, usually at night, when their leaflets approach each other and the
                                    flowers close and droop, or are covered.
                                </p>
                                <div className="footer2-wrapper-logoInfo-social">
                                    <div className="footer2-wrapper-logoInfo-social__item">
                                        <a href="https://twitter.com/yourprofile" target="_blank"
                                           rel="noopener noreferrer">
                                            <img className="svg" src={twitter.src}
                                                 alt="Twitter icon"/>
                                        </a>
                                    </div>
                                    <div className="footer2-wrapper-logoInfo-social__item">
                                        <a href="https://instagram.com/yourprofile" target="_blank"
                                           rel="noopener noreferrer">
                                            <img className="svg" src={instagram.src}
                                                 alt="Instagram icon"/>
                                        </a>
                                    </div>
                                    <div className="footer2-wrapper-logoInfo-social__item">
                                        <a href="https://linkedin.com/in/yourprofile" target="_blank"
                                           rel="noopener noreferrer">
                                            <img className="svg" src={linkedin.src}
                                                 alt="LinkedIn icon"/>
                                        </a>
                                    </div>
                                    <div className="footer2-wrapper-logoInfo-social__item">
                                        <a href="https://facebook.com/yourprofile" target="_blank"
                                           rel="noopener noreferrer">
                                            <img className="svg" src={facebookIcon.src}
                                                 alt="Facebook icon"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer2-wrapper-link">
                                <h5 className="footer2-wrapper-link__title">Quick Links</h5>
                                <ul className="footer2-wrapper-link-list">
                                    <li className="footer2-wrapper-link-list__item"><a href="#!">Company Profile</a>
                                    </li>
                                    <li className="footer2-wrapper-link-list__item"><a href="#!">Help Center</a></li>
                                    <li className="footer2-wrapper-link-list__item"><Link href="/project">Projects</Link>
                                    </li>
                                    <li className="footer2-wrapper-link-list__item"><Link href="/blog">News & Blog</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-2">
                            <div className="footer2-wrapper-service">
                                <h5 className="footer2-wrapper-service__title">Our Services</h5>
                                <ul className="footer2-wrapper-service-list">
                                    <li className="footer2-wrapper-service-list__item"><a href="#!">UI Design</a></li>
                                    <li className="footer2-wrapper-service-list__item"><a href="#!">UX Design</a></li>
                                    <li className="footer2-wrapper-service-list__item"><a href="#!">Web Design</a></li>
                                    <li className="footer2-wrapper-service-list__item"><a href="#!">Digital
                                        Marketing</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer2-wrapper-contact">
                                <h5 className="footer2-wrapper-contact__title">Contact</h5>
                                <ul className="footer2-wrapper-contact-list">
                                    <li className="footer2-wrapper-contact-list__item">
                                        <a href="https://www.google.com/maps/search/?q=27+Division+St,+New+York,+NY+10002,+USA"
                                           target="_blank">
                                            27 Division St, New York, NY 10002, USA
                                        </a>
                                    </li>
                                    <li className="footer2-wrapper-contact-list__item">
                                        <a href="tel:+1800123654987">+1 800 123 654 987</a>
                                    </li>
                                    <li className="footer2-wrapper-contact-list__item">
                                        <a href="mailto:briza.agency@mail.com">briza.agency@mail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 pt-128">
                            <div className="footer2-bottom">
                                <p>© Copyright 2024, All Rights Reserved by HurrayTheme</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}