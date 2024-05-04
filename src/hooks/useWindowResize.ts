/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable- react-hooks/rules-of-hooks
"use client";
import { useState, useEffect } from 'react';

const useWindowResize = () => {
    if (typeof window !== "undefined") {
        const mobileMediaQuery = window?.matchMedia('(max-width: 576px)');
        const tabletMediaQuery = window?.matchMedia('(min-width: 577px and max-width: 991px)');
        const desktopMediaQuery = window?.matchMedia('(min-width: 992px and max-width: 1279px)');
        const largeDesktopMediaQuery = window.matchMedia('(min-width: 1280px)');
        const [isMobile, setIsMobile] = useState(window?.innerWidth <= 576);
        const [isTablet, setIsTablet] = useState(window?.innerWidth > 576 && window.innerWidth <= 992);
        const [isDesktop, setIsDesktop] = useState(window?.innerWidth > 992 && window.innerWidth <= 1280);
        const [isLargeDesktop, setIsLargeDesktop] = useState(window?.innerWidth > 1280);


        useEffect(() => {
            const queryMobileChanged = (e: MediaQueryListEvent) => {
                setIsMobile(e.matches);
            };
            const queryTabletChanged = (e: MediaQueryListEvent) => {
                setIsTablet(e.matches);
            };
            const queryDesktopChanged = (e: MediaQueryListEvent) => {
                setIsDesktop(e.matches);
            };
            const queryLargeDesktopChanged = (e: MediaQueryListEvent) => {
                setIsLargeDesktop(e.matches);
            };

            mobileMediaQuery.addEventListener('change', queryMobileChanged);
            tabletMediaQuery.addEventListener('change', queryTabletChanged);
            desktopMediaQuery.addEventListener('change', queryDesktopChanged);
            largeDesktopMediaQuery.addEventListener('change', queryLargeDesktopChanged);

            return () => {
                mobileMediaQuery.removeEventListener('change', queryMobileChanged);
                tabletMediaQuery.removeEventListener('change', queryTabletChanged);
                desktopMediaQuery.removeEventListener('change', queryDesktopChanged);
                largeDesktopMediaQuery.removeEventListener('change', queryLargeDesktopChanged);
            };
        }, []);
        return { isTablet, isMobile, isDesktop, isLargeDesktop };
    }

};

export default useWindowResize;
