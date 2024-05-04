"use client";
import React, { useEffect } from "react";
import "./index.scss";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import moon from "@/assets/img/icons/ic_moon.png";
import sun from "@/assets/img/icons/ic_sun.png";
import logoRowDark from "@/assets/img/new/logo_row_dark.svg";

import logoRowLight from "@/assets/img/new/logo_row_light.svg";
import { toggleDarkMode } from "@/store/darkMode";
import classNames from "classnames";
import useWindowResize from "@/hooks/useWindowResize";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    const dispatch = useAppDispatch();
    const { darkMode: darkmodeSlice } = useAppSelector((store) => store);
    const { darkMode } = darkmodeSlice;
    const toggleDM = () => {
        dispatch(toggleDarkMode(!darkMode));
    };
    useEffect(() => {
        const body = document.querySelector("body");
        if (darkMode) {
            body?.classList.remove("bg-vani");

            body?.classList.add("bg-black");
        } else {
            body?.classList.remove("bg-black");

            body?.classList.add("bg-vani");
        }
    }, [darkMode]);
    const resizeState = useWindowResize();

    return (
        <div
            className={classNames(
                "header fixed z-20 w-full",
                "bg-gradient-to-b from-black via-black to-transparent opacity-100 sm:opacity-30",
                // darkMode ? "bg-black" : "bg-vani"
            )}
        >
            <div className='relative'>
                <div
                    className={classNames(
                        "container mx-auto py-8 md:py-10 lg:py-12 xl:py-14 px-6 md:px-8 lg:px-0",
                    )}
                >
                    <div
                        className={classNames(
                            "absolute bottom-0 left-0 w-full h-[1px]",
                            darkMode ? "bg-gradient-dark" : "bg-gradient",
                        )}
                    ></div>
                    <div className='flex justify-between'>
                        <div
                            data-aos={resizeState?.isLargeDesktop ? "" : "fade-down"}
                            data-aos-duration='500'
                            className='h-[40px] max-w-[177px]'
                        >
                            <Image
                                src={darkMode ? logoRowDark : logoRowLight}
                                width={0}
                                height={0}
                                className='w-full h-full'
                                alt='logo'
                            />
                        </div>
                        <div
                            data-aos={resizeState?.isLargeDesktop ? "" : "fade-down"}
                            data-aos-duration='800'
                            className='w-[32px] h-[32px] cursor-pointer'
                            onClick={toggleDM}
                        >
                            <Image
                                src={darkMode ? sun : moon}
                                width={0}
                                height={0}
                                className='w-full h-full object-contain bg-[transparent]'
                                alt='logo'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
