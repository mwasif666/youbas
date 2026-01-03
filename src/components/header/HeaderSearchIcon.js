"use client";

import {useAppContext} from "@/context";

export default function HeaderSearchIcon({classes}) {
    const {openSearchBox} = useAppContext();

    return (
        <button type="button" className={`${classes} searchBoxToggler`} onClick={openSearchBox}>
            <i className="far fa-search"></i>
        </button>
    )
}