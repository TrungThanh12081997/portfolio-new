"use client";
import React, { useRef, useState } from "react";
import "./index.scss";
import Wrapper from "@/components/molecules/Wrapper";
import { toggleText } from "@/store/darkMode";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";
import classNames from "classnames";
import { useAppSelector } from "@/store/hooks";
import { forEach, includes, join, map, size } from "lodash";
import { Tilt } from "react-tilt";
import web from "@/assets/img/icons/web.svg";
import backend from "@/assets/img/icons/backend.svg";
import mobile from "@/assets/img/icons/mobile.svg";
import creator from "@/assets/img/icons/creator.svg";
import Image from "next/image";
import TextSection from "@/components/molecules/TextSection";
import ComputersCanvas from "@/components/organisms/ComputerCanvas";
export const ServiceCard = ({
    className: classExtra,
    index = null,
    title = null,
    icon = null,
    children = null,
}) => {
    return (
        <Tilt className='xs:w-[250px] w-full'>
            <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                className={classNames(
                    "w-full py-4 px-4 p-[1px] rounded-[20px] shadow-card ",
                    classExtra,
                )}
            >
                <div
                    options={{
                        max: 35,
                        scale: 0.8,
                        speed: 450,
                    }}
                    className='bg-black rounded-[20px] py-5  min-h-[280px] flex justify-evenly items-center flex-col'
                >
                    {children ? (
                        children
                    ) : (
                        <>
                            <Image
                                src={icon}
                                alt='web-development'
                                className='w-16 h-16 object-contain'
                            />

                            <h3 className='text-gradient-cream text-[20px] font-bold text-center'>
                                {title}
                            </h3>
                        </>
                    )}
                </div>
            </motion.div>
        </Tilt>
    );
};

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];
const AboutSection = () => {
    const dispatch = useDispatch();
    const onMouseEnter = () => dispatch(toggleText(true));
    const onMouseLeave = () => dispatch(toggleText(false));
    const [isHovered, setIsHovered] = useState(false);

    const { x, y } = useMousePosition();

    const size = isHovered ? 400 : 40;
    const { darkMode: darkmodeSlice } = useAppSelector((store) => store);
    const { darkMode } = darkmodeSlice;
    const textRef = useRef(null);

    const listCharacterAbout = [
        {
            text: ["Im a selectively skilled "],
            isHightLight: false,
        },
        { text: ["product developer with strong focus on"], isHightLight: true },
        {
            text: ["producing high quality & impactful"],
            isHightLight: false,
        },
        { text: ["digital experience."], isHightLight: false },
    ];
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", function () {
            const lengthsList = document.querySelectorAll(".length");
            const myElement = document.querySelectorAll(".text-run"); // Thay thế #myElement bằng selector của bạn
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            forEach(myElement, (element, index) => {
                // const paragraphs = element.querySelector(".p-small");
                const viewportHeight = window.innerHeight;
                const childElements = element.querySelectorAll(".text-gradient");

                const rect = element.getBoundingClientRect();
                const isTopBelow85PercentFromTop = rect.top < viewportHeight * 0.85;
                // console.log(
                //     "element",
                //     element,
                //     "top",
                //     rect.top,
                //     "viewportHeight * 0.85",
                //     viewportHeight * 0.85,
                // );
                if (element) {
                    if (isTopBelow85PercentFromTop) {
                        element.style.width = `${viewportHeight * 0.85 - (rect.top + index * 66)}%`;
                    } else {
                        element.style.width = `0%`;
                    }
                }
                // const validateLength = lengthsList[0].offsetWidth + lengthsList[1].offsetWidth;
                // if (lengthsList && (childElements || []).length > 1) {
                //     const isOpenGradientText =
                //         lengthsList[0].offsetWidth === childElements[0].offsetWidth &&
                //         rect.width >= validateLength;
                //     console.log(
                //         "first length",
                //         rect.width,
                //         validateLength,
                //         lengthsList[0].offsetWidth,
                //         childElements[0].offsetWidth,
                //     );
                //     // childElements[1].classList.remove(isOpenGradientText ? "w-0" : "w-full");
                //     // childElements[1].classList.add(isOpenGradientText ? "w-full" : "w-0");
                //     if (isOpenGradientText) {
                //         console.log("position 1", childElements[1]);

                //         childElements[1].classList.remove("w-0");
                //     } else if (!isOpenGradientText) {
                //         childElements[1].classList.add("w-0");
                //     }
                // }
            });
        });
    }
    return (
        <main className={classNames("h-screen flex flex-col justify-center w-full ")}>
            <Wrapper classNames='h-full'>
                <div className='z-40 fixed bottom-0 left-0 w-full h-[25vh] bg-custom-gradient'></div>

                <TextSection listCharacterAbout={listCharacterAbout} />

                <div className='lg:h-[500px]'>
                    <ComputersCanvas />
                </div>
            </Wrapper>
        </main>
    );
};

export const textVariant = (delay) => {
    return {
        hidden: {
            y: -50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay: delay,
            },
        },
    };
};

export const fadeIn = (direction, type, delay, duration) => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

export default AboutSection;
