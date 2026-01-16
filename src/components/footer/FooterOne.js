import Link from "next/link";
import logoWhite from "@/assets/images/logo/logo.png";
import twitter from "@/assets/images/icon/twitter.svg";
import instagram from "@/assets/images/icon/instagram.svg";
import linkedin from "@/assets/images/icon/linkedin.svg";
import facebookIcon from "@/assets/images/icon/facebookIcon.svg";

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
                                        <img src={logoWhite.src} alt="logo" width="150" height="48"/>
                                    </Link>
                                </div>
                                <p className="footer1-wrapper-logoInfo__desc">
                                    YouBas Ecom Services helps entrepreneurs, brands, and investors build and scale
                                    profitable e-commerce businesses with factory-direct sourcing and full-stack support.
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
                        <div className="col-sm-6 col-lg-4">
                            <div className="footer1-wrapper-link">
                                <h5 className="footer1-wrapper-link__title">Quick Links</h5>
                                <ul className="footer1-wrapper-link-list">
                                    <li className="footer1-wrapper-link-list__item"><Link href="/">Home</Link></li>
                                    <li className="footer1-wrapper-link-list__item"><Link href="/services">Services</Link></li>
                                    <li className="footer1-wrapper-link-list__item"><Link href="/about-us">About Us</Link></li>
                                    <li className="footer1-wrapper-link-list__item"><Link href="/contact">Contact</Link></li>
                                    <li className="footer1-wrapper-link-list__item"><Link href="/terms-conditions">Terms & Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="footer1-wrapper-service">
                                <h5 className="footer1-wrapper-service__title">Our Services</h5>
                                <ul className="footer1-wrapper-service-list">
                                    <li className="footer1-wrapper-service-list__item"><Link href="/services/web-development">Web Development</Link></li>
                                    <li className="footer1-wrapper-service-list__item"><Link href="/services/marketplace-management">Marketplace Management</Link></li>
                                    <li className="footer1-wrapper-service-list__item"><Link href="/services/private-label">Private Label</Link></li>
                                    <li className="footer1-wrapper-service-list__item"><Link href="/services/product-sourcing">Product Sourcing</Link></li>
                                    <li className="footer1-wrapper-service-list__item"><Link href="/services/ddp-logistics">DDP Logistics</Link></li>
                                    <li className="footer1-wrapper-service-list__item"><Link href="/services/digital-social-media">Digital & Social Media</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 pt-128">
                            <div className="footer1-bottom">
                                <p>Copyright 2026, All Rights Reserved by YouBas Ecom Services</p>
                                <div className="footer1-bottom__links">
                                    <Link href="/about-us">About</Link>
                                    <Link href="/services">Services</Link>
                                    <Link href="/terms-conditions">Terms</Link>
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
