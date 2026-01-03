"use client";

import Link from "next/link";
import logoWhite from "@/assets/images/logo/logo-white.svg";
import {useAppContext} from "@/context";
import {useEffect, useRef} from "react";
import Menu from "@/components/header/Menu";

export default function MobileMenu() {
    const dropdownRef = useRef(null);
    const {isMobileMenuOpen, closeMobileMenuMenu} = useAppContext();

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeMobileMenuMenu();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [closeMobileMenuMenu]);

    return (
        <>
            <div
                className={`global-menu-wrapper onepage-nav ${isMobileMenuOpen ? 'global-body-visible' : ''}`}
            >
            <div ref={dropdownRef} className="global-menu-area text-center">
                    <button className="global-menu-toggle" onClick={closeMobileMenuMenu}>
                        <i className="fal fa-times"></i>
                    </button>
                    <div className="mobile-logo">
                        <Link href="/">
                            <img src={logoWhite.src} alt="logo" />
                        </Link>
                    </div>
                    <nav className="global-mobile-menu">
                        <Menu />
                    </nav>
                </div>
            </div>
        </>
    );
}
