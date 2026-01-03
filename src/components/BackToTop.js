"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            id="back-top"
            className={`back-to-top ${isVisible ? "show" : ""}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <i className="fa-solid fa-chevron-up"></i>
        </button>
    );
}
