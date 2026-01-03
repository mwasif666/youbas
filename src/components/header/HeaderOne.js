"use client";

import Link from "next/link";
import logoWhite from "@/assets/images/logo/logo-white.svg";
import HeaderMenu from "@/components/header/HeaderMenu";
import HeaderSearchIcon from "@/components/header/HeaderSearchIcon";
import {useAppContext} from "@/context";

export default function HeaderOne() {

    const {openMobileMenuMenu} = useAppContext();

    return (
        <header className="global-header header-layout header-bg-1">
            <div className="sticky-wrapper2">
                {/*===== Main Menu Area*/}
                <div className="container">
                    <div className="menu-area">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-auto">
                                <div className="header-logo">
                                    <Link href='/'>
                                        <img src={logoWhite.src} className="svg" alt="logo"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-auto">
                                <nav className="pr-380 main-menu2 d-none d-xl-inline-block">
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
                                    <HeaderSearchIcon classes={'search-icon2'}/>
                                    <div className="btn-wrapper">
                                        <Link className="theme-btn style2" href="/contact">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}