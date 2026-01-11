"use client";

import Link from "next/link";
import logoWhite from "@/assets/images/logo/logo.png";
import HeaderMenu from "@/components/header/HeaderMenu";
import { useAppContext } from "@/context";
import styles from "./HeaderOne.module.css";

export default function HeaderOne() {
  const { openMobileMenuMenu } = useAppContext();

  return (
    <header className={`global-header header-layout header-bg-1 ${styles.header}`}>
      <div className={`sticky-wrapper2 ${styles.sticky}`}>
        {/*===== Main Menu Area*/}
        <div className="container">
          <div className={`menu-area ${styles.menuArea}`}>
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <Link href="/">
                    <img src={logoWhite.src} className="svg" alt="logo" />
                  </Link>
                </div>
              </div>

              <div className="col-auto">
                <nav className="main-menu2 d-none d-xl-inline-block">
                  <HeaderMenu />
                </nav>

                <div className="header-button d-flex d-xl-none">
                  <button
                    type="button"
                    className={`global-menu-toggle sidebar-btn ${styles.menuToggle}`}
                    onClick={openMobileMenuMenu}
                    aria-label="Open menu"
                  >
                    <i className="fa-solid fa-bars"></i>
                  </button>
                </div>
              </div>

              <div className="col-auto d-none d-xl-block">
                <div className="header-button">
                  <div className="btn-wrapper">
                    <Link className={`theme-btn style2 ${styles.contactBtn}`} href="/contact">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
