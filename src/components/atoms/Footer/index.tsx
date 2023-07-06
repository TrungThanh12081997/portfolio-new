import React from "react";
import "./index.scss";
import classNames from "classnames";
import facebook from "@/assets/img/socials/ic_facebook.svg";
import linkedin from "@/assets/img/socials/ic_linkedin.svg";
import phone from "@/assets/img/socials/ic_phone.svg";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    const dataSocial = [
        {
            img: phone,
            link: "tel:0822433379",
        },
        // {
        //     img: facebook,
        //     link: "https://www.facebook.com/KoiL0ver2019",
        // },

        {
            img: linkedin,
            link: "https://www.linkedin.com/in/quan-trung-thanh-58878a227/",
        },
    ];
    const { darkMode: darkmodeSlice } = useAppSelector((store) => store);
    const { darkMode } = darkmodeSlice;

    return (
        <div className={classNames("relative", darkMode ? "bg-black" : "bg-vani")}>
            <div
                className={classNames(
                    "absolute top-0 left-0 w-full h-[1px]",
                    darkMode ? "bg-gradient-dark" : "bg-gradient",
                )}
            ></div>

            <div className='container mx-auto py-10 md:py-16 lg:py-20 xl:py-14 px-6 md:px-8 lg:px-12'>
                <div className={classNames("flex flex-col", "", "lg:flex-row lg:justify-between")}>
                    <div
                        className={classNames(
                            "flex flex-col w-full justify-center mb-4",
                            "md:mb-8",
                            "lg:w-[50%] lg:mb-0",
                        )}
                    >
                        <h3
                            className={classNames(
                                "text-[20px]  mb-4",
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
                                Quan Trung Thành
                            </strong>
                        </p>
                    </div>
                    <div className={classNames("w-full", "", "lg:w-[40%]")}>
                        <h3 className='text-[20px] text-white mb-4'>Contact me for work</h3>
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
                                                className='h-full w-full object-container'
                                                src={item.img}
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
            </div>
        </div>
    );
};

export default Footer;
