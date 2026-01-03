"use client";

import {useAppContext} from "@/context";

export default function SearchBoxPopup() {
    const {isOpen, closeSearchBox} = useAppContext();

    return (
        <div className={`popup-search-box d-none d-lg-block ${isOpen ? 'show' : ''}`}>
            <button className="searchClose" onClick={closeSearchBox}><i className="fal fa-times"></i></button>
            <form action="#">
                <input type="text" placeholder="What are you looking for?"/>
                <button type="submit"><i className="fal fa-search"></i></button>
            </form>
        </div>
    )
}