'use client';

import {usePathname} from "next/navigation";
import HeaderOne from "@/components/header/HeaderOne";
import HeaderTwo from "@/components/header/HeaderTwo";
import HeaderThree from "@/components/header/HeaderThree";

export default function Header() {
    const pathname = usePathname();

    return (
        <>
            {pathname === '/home-2' && <HeaderTwo />}
            {pathname === '/home-3' && <HeaderThree />}
            {pathname !== '/home-2' && pathname !== '/home-3' && <HeaderOne />}
        </>
    )
}