/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useRef, useState } from "react";
import "./index.scss";
import classNames from "classnames";
import Wrapper from "@/components/molecules/Wrapper";
import { useAppSelector } from "@/store/hooks";
import CountUp from "react-countup";
import useWindowResize from "@/hooks/useWindowResize";

interface CountSectionProps {}

const CountSection: React.FC<CountSectionProps> = () => {
    const { darkMode: darkmodeSlice } = useAppSelector((store) => store);
    const { darkMode } = darkmodeSlice;

    const countData = [
        { count: 15, title: "Company Projects " },
        { count: 10, title: "Personal Projects " },
        { count: 5, title: "Release Projects" },
        { count: 3, title: "Upcoming Projects " },
    ];

    const countSectionRef = useRef<HTMLDivElement>(null);
    const [countEffect, setCountEffect] = useState(false);
    const windowResize = useWindowResize();
    function isElementInViewport(el: HTMLDivElement) {
        if (typeof window === "object") {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    }
    function checkScroll() {
        if (countSectionRef.current) {
            if (
                typeof window === "object" &&
                !windowResize?.isMobile &&
                isElementInViewport(countSectionRef.current)
            ) {
                {
                    setCountEffect(true);
                }
            } else if (windowResize?.isMobile || !isElementInViewport(countSectionRef.current)) {
                setCountEffect(false);
            }
        }
    }
    if (typeof window === "object") {
        window.addEventListener("scroll", () => checkScroll());
    }
    const resizeState = useWindowResize();

    return (
        <div
            ref={countSectionRef}
            className={classNames("relative w-full", darkMode ? "bg-gradient-dark" : "bg-gradient")}
        >
            <Wrapper>
                <div className='flex flex-wrap'>
                    {countData.map((item, index) => {
                        return (
                            <div
                                className='flex items-center flex-col justify-center lg:w-1/4 w-1/2 mb-4 md:mb-2 lg:mb-0'
                                key={`${index * index}`}
                            >
                                <h1 className={classNames("text-[28px] text-white mb-4 flex")}>
                                    {/* {countEffect ? (
                                        <>
                                            <CountUp
                                                start={0}
                                                end={item.count}
                                                duration={3.28}
                                                decimals={0}
                                            />
                                            <p className='ml-1'>+</p>
                                        </>
                                    ) : (
                                        <p>{0}</p>
                                    )} */}
                                    {countEffect && !resizeState?.isMobile && (
                                        <CountUp
                                            start={0}
                                            end={item.count}
                                            duration={3.28}
                                            decimals={0}
                                        />
                                    )}
                                    {!countEffect && !resizeState?.isMobile && <p>{0}</p>}
                                    {resizeState?.isMobile && <p>{`${item.count} +`}</p>}
                                </h1>
                                <p className='text-white '>{item.title}</p>
                            </div>
                        );
                    })}
                </div>
            </Wrapper>
        </div>
    );
};

export default CountSection;
