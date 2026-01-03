"use client";

import { useEffect, useRef } from "react";

export default function MouseCursor() {
    const innerCursor = useRef(null);
    const outerCursor = useRef(null);

    useEffect(() => {
        const moveCursor = (event) => {
            const { clientX: x, clientY: y } = event;
            if (innerCursor.current && outerCursor.current) {
                outerCursor.current.style.transform = `translate(${x}px, ${y}px)`;
                innerCursor.current.style.transform = `translate(${x}px, ${y}px)`;
            }
        };

        const addHoverEffect = () => {
            innerCursor.current?.classList.add("cursor-hover");
            outerCursor.current?.classList.add("cursor-hover");
        };

        const removeHoverEffect = () => {
            innerCursor.current?.classList.remove("cursor-hover");
            outerCursor.current?.classList.remove("cursor-hover");
        };

        // Attach event listeners
        document.addEventListener("mousemove", moveCursor);
        document.querySelectorAll("a, .cursor-pointer").forEach((el) => {
            el.addEventListener("mouseenter", addHoverEffect);
            el.addEventListener("mouseleave", removeHoverEffect);
        });

        // Cleanup on unmount
        return () => {
            document.removeEventListener("mousemove", moveCursor);
            document.querySelectorAll("a, .cursor-pointer").forEach((el) => {
                el.removeEventListener("mouseenter", addHoverEffect);
                el.removeEventListener("mouseleave", removeHoverEffect);
            });
        };
    }, []);

    return (
        <>
            <div ref={outerCursor} className="mouse-cursor cursor-outer"></div>
            <div ref={innerCursor} className="mouse-cursor cursor-inner"></div>
        </>
    );
}
