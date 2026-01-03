"use client";

import {useState} from "react";
import {menuItems} from "@/data/menus";
import Link from "next/link";

export default function Menu() {
    const [openMenus, setOpenMenus] = useState({});

    const toggleMenu = (index) => {
        setOpenMenus((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <ul className="menu">
            {menuItems.map((item, index) => (
                <li
                    key={index}
                    className={`menu-item ${item.subMenu ? "menu-item-has-children" : ""} ${
                        openMenus[index] ? "global-active" : ""
                    }`}
                >
                    {item.subMenu ? (
                        <>
                            <a href="#" onClick={() => toggleMenu(index)}>
                                {item.title}
                            </a>
                            <ul className={`sub-menu global-submenu ${openMenus[index] ? "global-open" : "d-none"}`}>
                                {item.subMenu.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <Link href={subItem.link}>{subItem.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <Link href={item.link}>{item.title}</Link>
                    )}
                </li>
            ))}
        </ul>
    )
}