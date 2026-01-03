"use client";

import Link from "next/link";
import logoDark from "@/assets/images/logo/logo-dark.svg";
import HeaderMenu from "@/components/header/HeaderMenu";
import HeaderSearchIcon from "@/components/header/HeaderSearchIcon";
import {useAppContext} from "@/context";

export default function HeaderTwo() {
    const {openSideMenu, openMobileMenuMenu} = useAppContext();

    return (
        <header className="global-header header-layout">
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
    )
}