"use client";

import {createContext, useState, useContext, useEffect, useCallback, useRef} from "react";

const AppContext = createContext(null);

export function AppWrapper({children}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Open the search box
    const openSearchBox = (e) => {
        e.preventDefault();
        setIsOpen(true);
    };

    // Close the search box
    const closeSearchBox = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(false);
    };

    // Handle click inside form to keep it open
    const handleFormClick = (e) => {
        e.stopPropagation();
        setIsOpen(true);
    };

    // Sidebar functions
    const openSideMenu = (e) => {
        e.preventDefault();
        setIsSideMenuOpen(true);
    };

    const closeSideMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsSideMenuOpen(false);
    };

    const handleSideMenuChildClick = (e) => {
        e.stopPropagation();
        setIsSideMenuOpen(true);
    };

    // Mobile menu functions
    const openMobileMenuMenu = (e) => {
        e.preventDefault();
        setIsMobileMenuOpen(true);
    };

    const closeMobileMenuMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <AppContext.Provider value={{
            isOpen, openSearchBox, closeSearchBox, handleFormClick,
            isSideMenuOpen,
            openSideMenu,
            closeSideMenu,
            handleSideMenuChildClick,
            isMobileMenuOpen,
            openMobileMenuMenu,
            closeMobileMenuMenu,
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}