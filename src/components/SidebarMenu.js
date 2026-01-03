"use client";

import Link from "next/link";
import logoDark from "@/assets/images/logo/logo-dark.svg";
import locationDot from "@/assets/images/icon/location-dot.svg";
import phoneSm from "@/assets/images/icon/phone-sm.svg";
import envelope from "@/assets/images/icon/envelope.svg";
import facebookWhite from "@/assets/images/icon/facebook-white.svg";
import linkedinWhite from "@/assets/images/icon/linkedin-white.svg";
import twitterWhite from "@/assets/images/icon/twitter-white.svg";
import instagramWhite from "@/assets/images/icon/instagram-white.svg";
import {useAppContext} from "@/context";

export default function SidebarMenu() {
    const {isSideMenuOpen, closeSideMenu} = useAppContext();

    return (
        <div className={`sidemenu-wrapper sidemenu-info d-none d-lg-block ${isSideMenuOpen ? 'show' : ''}`}>
            <div className="sidemenu-content">
                <button className="closeButton sideMenuCls" onClick={closeSideMenu}><i className="far fa-times"></i></button>
                <div className="widget  ">
                    <div className="global-widget-about">
                        <div className="about-logo">
                            <Link href="/"><img src={logoDark.src} alt="briza"/></Link>
                        </div>
                        <p className="text"> Rapidiously myocardinate cross-platform intellectual capital model.
                            Appropriately create interactive infrastructures
                        </p>
                    </div>
                </div>
                <div className="widget">
                    <h4 className="widget_title">Get In Touch</h4>
                    <div className="global-widget-contact">
                        <div className="info-box_text">
                            <div className="icon"><img src={locationDot.src} alt="img"/></div>
                            <div className="details">
                                <p>Washington Ave, NY </p>
                                <p>789 Inner Lane, Holy park,</p>
                            </div>
                        </div>
                        <div className="info-box_text">
                            <div className="icon">
                                <img src={phoneSm.src} alt="img"/>
                            </div>
                            <div className="details">
                                <p><a href="tel:+442045770077" className="info-box_link">+44 204 577 0077</a></p>
                                <p><a href="tel:+09876543210" className="info-box_link">+09 876 543 210</a></p>
                            </div>
                        </div>
                        <div className="info-box_text">
                            <div className="icon">
                                <img src={envelope.src} alt="img"/>
                            </div>
                            <div className="details">
                                <p><a href="mailto:briza@gmail.com" className="info-box_link">Briza@gmail.com</a></p>
                                <p><a href="mailto:support24@gmail.com"
                                      className="info-box_link">support24@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget newsletter-widget">
                    <h4 className="widget_title">Subscribe Now</h4>
                    <form className="newsletter-form">
                        <div className="form__group">
                            <input className="form-ctrl" type="email" placeholder="Email Address" required=""/>
                            <button type="submit" className="global-btn"><i
                                className="far fa-paper-plane text-theme"></i></button>
                        </div>
                    </form>
                    <div className="global-social mt-4">
                        <div className="global-social__item">
                            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <img className="svg" src={facebookWhite.src} alt="Facebook icon"/>
                            </a>
                        </div>
                        <div className="global-social__item">
                            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                                <img className="svg" src={linkedinWhite.src} alt="LinkedIn icon"/>
                            </a>
                        </div>
                        <div className="global-social__item">
                            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <img className="svg" src={twitterWhite.src} alt="Twitter icon"/>
                            </a>
                        </div>
                        <div className="global-social__item">
                            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <img className="svg" src={instagramWhite.src} alt="Instagram icon"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}