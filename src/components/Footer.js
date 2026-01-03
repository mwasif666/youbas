"use client";

import {usePathname} from "next/navigation";
import FooterOne from "@/components/footer/FooterOne";
import FooterTwo from "@/components/footer/FooterTwo";
import FooterThree from "@/components/footer/FooterThree";

export default function Footer() {
    const pathname = usePathname();

    return (
        <>
            {pathname === '/home-2' && <FooterTwo />}
            {pathname === '/home-3' && <FooterThree />}
            {pathname !== '/home-2' && pathname !== '/home-3' && <FooterOne />}
        </>
    )
}