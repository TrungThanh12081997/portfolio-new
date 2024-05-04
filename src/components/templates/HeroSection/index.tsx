/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import classNames from "classnames";
import quanTrungThanh from "../../../assets/img/avatar/avatar.png";
import Image from "next/image";
import Wrapper from "@/components/molecules/Wrapper";
import ComputersCanvas from "@/components/organisms/ComputerCanvas";
import { map, includes } from "lodash";
import { useAppSelector } from "@/store/hooks";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import emailjs from "@emailjs/browser";
// import { schema } from "@/utils/schemas";
import styles from "./page.module.scss";

import { useDispatch } from "react-redux";
// import { useSelect } from "@react-three/drei";
import { toggleText } from "@/store/darkMode";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";
const HeroSection = () => {
    const { darkMode: darkmodeSlice } = useAppSelector((store) => store);
    const { darkMode } = darkmodeSlice;

    // const [openText, setOpenText] = useState(false);

    // useEffect(() => {
    //     if (successForm) {
    //         setTimeout(function () {
    //             setSuccessForm(false);
    //         }, 3000);
    //     }
    //     if (errorForm) {
    //         setTimeout(function () {
    //             setErrorForm(false);
    //         }, 3000);
    //     }
    // }, [errorForm, successForm]);
    const dispatch = useDispatch();
    const listCharacters = ["MAKING", "GOOD", "SHIT", "SINCE", "2020"];
    const listHiddenCharacters = ["HIDING", "BAD", "SHIT", "SINCE", "2020"];
    // useEffect(() => {
    //     const onMouseMove = (e: any) => {
    //         document.documentElement.style.setProperty("--cursor-x", e.clientX - 5 + "px");
    //         document.documentElement.style.setProperty("--cursor-y", e.clientY - 50 + "px");
    //     };
    //     window.addEventListener("mousemove", onMouseMove);
    //     // return () => {
    //     //     window.removeEventListener("mousemove", onMouseMove);
    //     // };
    // }, []);
    // const openText = useAppSelector((store) => store?.darkMode.openText);
    // useEffect(() => {
    //     document.documentElement.style.setProperty("--cursor-size", `${openText ? 150 : 30}px`);
    // }, [openText]);
    const { x, y } = useMousePosition();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <section
                className={classNames(
                    "pt-[20px] lg:pt-[40px] xl:pt-[56px] h-screen w-screen relative",
                )}
            >
                <div className='flex flex-col lg:flex-row lg:justify-between relative'>
                    <div className='flex  top-0 left-0 h-screen w-screen flex-col md:mb-8 lg:mb-0 w-full justify-center mb-4 items-center'>
                        <div className='flex flex-col justify-center items-center text-center w-fit'>
                            <p
                                className={classNames(
                                    `lg:mb-6 md:mb-6 mb-4 text-[16px] text-center w-fit text-center`,
                                    darkMode ? "text-white" : "text-black",
                                )}
                            >
                                <strong
                                    className={classNames(
                                        "upper tracking-wider inline-block",
                                        darkMode ? "text-gradient-dark" : "text-gradient",
                                    )}
                                >
                                    QUAN TRUNG THANH
                                </strong>
                            </p>

                            {map(listCharacters, (character: string, index: number) => {
                                return (
                                    <h1 className={classNames("text-center w-fit")} key={index}>
                                        <strong
                                            className={classNames(
                                                "text-[64px] lg:mb-0 md:mb-6 mb-4 inline-block",
                                                !includes([1, 2], index)
                                                    ? "text-gradient-cream"
                                                    : darkMode
                                                    ? "text-gradient-dark"
                                                    : "text-gradient",
                                            )}
                                        >
                                            {character}
                                        </strong>
                                    </h1>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
