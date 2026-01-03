"use client";

import clock from "@/assets/images/icon/clock.svg";
import phnTop from "@/assets/images/icon/phn-top.svg";
import inboxTop from "@/assets/images/icon/inbox-top.svg";
import Link from "next/link";
import HeaderMenu from "@/components/header/HeaderMenu";
import logoDark from "@/assets/images/logo/logo-dark.svg";
import HeaderSearchIcon from "@/components/header/HeaderSearchIcon";
import {useAppContext} from "@/context";

export default function HeaderThree() {
    const {openSideMenu, openMobileMenuMenu} = useAppContext();

    return (
        <>
            <div className="header-top-section style1 fix">
                <div className="container">
                    <div className="header-top-wrapper">
                        <div className="top-left">
                            <ul className="contact-list">
                                <li>
                                    <img src={clock.src} alt="svg"/>
                                    <p>Office Hours: 8:00 AM – 10:00 PM</p>
                                </li>
                            </ul>
                        </div>
                        <div className="top-right">
                            <ul className="contact-list">
                                <li>
                                    <img src={phnTop.src} alt="svg"/>
                                    <p><a href="tel:123-456-4567">123-456-4567</a></p>
                                </li>
                                <li>
                                    <img src={inboxTop.src} alt="svg"/>
                                    <p><a href="mailto:briza@example.com">briza@example.com</a></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <header className="global-header header-layout header-bg-1 header-border fix-header">
                <div className="sticky-wrapper">
                    {/*=====Main Menu Area*/}
                    <div className="container">
                        <div className="menu-area">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto">
                                    <div className="header-logo">
                                        <Link href='/'>
                                            <img src={logoDark.src} alt="logo"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <nav className="pl-500 main-menu d-none d-xl-inline-block">
                                        <HeaderMenu />
                                    </nav>
                                    <div className="header-button d-flex d-xl-none">
                                        <button type="button" className="global-menu-toggle sidebar-btn"
                                                onClick={openMobileMenuMenu}
                                        >
                                            <i className="fa-solid fa-bars"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-auto d-none d-xl-block">
                                    <div className="header-button">
                                        <HeaderSearchIcon classes={'search-icon'}/>
                                        <button type="button" className="simple-icon sideMenuInfo sidebar-btn style3"
                                                onClick={openSideMenu}
                                        >
                                            <span className="line"></span>
                                            <span className="line"></span>
                                            <span className="line"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}