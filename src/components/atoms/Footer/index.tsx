import React, { useEffect } from "react";
import "./index.scss";
import classNames from "classnames";
import facebook from "@/assets/img/socials/ic_facebook.svg";

import linkedin from "@/assets/img/socials/ic_linkedin.png";
import phone from "@/assets/img/socials/ic_phone.png";
import mail from "@/assets/img/socials/ic_mail.png";

import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";
import MyMapComponent from "../GoogleMap";
import useDisableSwiper from "@/hooks/useDisableSwiper";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    const dataSocial = [
        {
            img: phone,
            link: "tel:0822433379",
        },
        {
            img: mail,
            link: "tel:+84822433379",
        },
        {
            img: linkedin,
            link: "https://www.linkedin.com/in/quan-trung-thanh-58878a227/",
        },
    ];
    const { darkMode: darkmodeSlice } = useAppSelector((store) => store);
    const { darkMode } = darkmodeSlice;
    const [mapHeight, setMapHeight] = React.useState(700);
    useEffect(() => {
        if (window) {
            if (window.innerWidth > 576) {
                setMapHeight(650);
            } else {
                setMapHeight(450);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const disableSwiper = useDisableSwiper();
    return (
        <div className={classNames("relative w-full", darkMode ? "bg-black" : "bg-vani")}>
            <div className='container mx-auto py-10 md:py-16 lg:py-20 xl:py-14 px-6 md:px-8 lg:px-12'>
                <div className={classNames("flex flex-col lg:flex-row lg:justify-between lg:mb-8")}>
                    <div
                        className={classNames(
                            "flex flex-col w-full items-start  mb-6 md:mb-8 lg:mb-0  lg:w-[50%] ",
                        )}
                    >
                        <h3
                            className={classNames(
                                "text-[20px]  mb-2 lg:mb-4 ",
                                darkMode ? "text-white" : "text-black",
                            )}
                        >
                            About me
                        </h3>
                        <p className='text-gray mb-2'>
                            This blog is create to contact works and save my memory in my career
                            path 💗
                        </p>
                        <p className='text-gray'>
                            This template is made with love by |
                            <strong
                                className={classNames(
                                    " ml-1",
                                    darkMode ? "text-gradient-dark" : "text-gradient",
                                )}
                            >
                                {" "}
                                Quan Trung Thanh
                            </strong>
                        </p>
                    </div>
                    <div className={classNames("w-full", "mb-6 md:mb-8 lg:mb-0 ", "lg:w-[40%]")}>
                        <h3
                            className={classNames(
                                "text-[20px]  mb-2 md:mb-4",
                                darkMode ? "text-white" : "text-black",
                            )}
                        >
                            Contact me for work
                        </h3>
                        <p className='text-gray mb-6'>
                            Please contact me follow these information.
                        </p>
                        <div className='flex'>
                            {dataSocial.map((item, index) => {
                                return (
                                    <div
                                        className={classNames(
                                            "mr-4 w-[40px] h-[40px]",
                                            index === 0
                                                ? "animate-bounce transition duration-1000"
                                                : "",
                                        )}
                                        key={`${index + index}`}
                                    >
                                        <Link href={item.link} target='_blank'>
                                            <Image
                                                className='h-full w-full object-contain'
                                                src={item.img || ""}
                                                alt={item.link}
                                                width={0}
                                                height={0}
                                            />
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className=''>
                    {/* <MyMapComponent
                        onMouseEnter={() => {
                            if (disableSwiper?.setDisable) {
                                disableSwiper?.setDisable(true);
                            }
                        }}
                        onMouseLeave={() => {
                            if (disableSwiper?.setDisable) {
                                disableSwiper?.setDisable(false);
                            }
                        }}
                        googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={
                            <div
                                style={{ height: `${mapHeight}px` }}
                                className='h-[400px] md:h-[500px] lg:h-[700px]'
                            />
                        }
                        mapElement={<div style={{ height: `100%` }} />}
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;
