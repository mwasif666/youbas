"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logoWhite from "@/assets/images/logo/logo.png";
import HeaderMenu from "@/components/header/HeaderMenu";
import { useAppContext } from "@/context";
import styles from "./HeaderOne.module.css";

export default function HeaderOne() {
  const { openMobileMenuMenu } = useAppContext();
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [mounted, setMounted] = useState(false);
  const profileRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const loadUser = () => {
      try {
        const raw = localStorage.getItem("yobasUser");
        setUser(raw ? JSON.parse(raw) : null);
      } catch (error) {
        setUser(null);
      }
    };

    loadUser();

    const handleOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    const handleUserUpdate = () => loadUser();

    document.addEventListener("mousedown", handleOutside);
    window.addEventListener("yobas:user", handleUserUpdate);
    window.addEventListener("storage", handleUserUpdate);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      window.removeEventListener("yobas:user", handleUserUpdate);
      window.removeEventListener("storage", handleUserUpdate);
    };
  }, []);

  const handleLogout = () => {
    try {
      localStorage.removeItem("yobasUser");
      window.dispatchEvent(new Event("yobas:user"));
    } catch (error) {
      // No-op: logout state still updates below.
    }
    setUser(null);
    setProfileOpen(false);
    router.push("/");
  };

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
                    <img
                      src={logoWhite.src}
                      className={styles.logo}
                      alt="logo"
                      width="150"
                      height="48"
                    />
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
                <div className={styles.rightActions}>
                  {mounted && user ? (
                    <div className={styles.profileWrap} ref={profileRef}>
                      <button
                        type="button"
                        className={styles.profileBtn}
                        onClick={() => setProfileOpen((prev) => !prev)}
                        aria-expanded={profileOpen}
                      >
                        <span className={styles.avatar}>
                          {(user?.name || user?.email || "U")
                            .charAt(0)
                            .toUpperCase()}
                        </span>
                        <span className={styles.profileLabel}>
                          {user?.name || user?.email}
                        </span>
                        <i
                          className={`fa-solid fa-chevron-down ${styles.chevron}`}
                        />
                      </button>

                      <div
                        className={`${styles.profileMenu} ${
                          profileOpen ? styles.profileOpen : ""
                        }`}
                      >
                        <Link
                          href="/order?tab=orders"
                          className={styles.menuItem}
                        >
                          Orders
                        </Link>
                        <Link href="/order" className={styles.menuItem}>
                          Account
                        </Link>
                        <button
                          type="button"
                          className={`${styles.menuItem} ${styles.logout}`}
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  ) : (
                    <Link href="/login" className={styles.loginLink}>
                      Login
                    </Link>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
