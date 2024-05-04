"use client";
import HeroSection from "@/components/templates/HeroSection";
import DeclarationSection from "@/components/templates/DeclarationSection";
import ProjectsSection from "@/components/organisms/ProjectsSection";
import CountSection from "@/components/organisms/CountSection";
import TechSection from "@/components/organisms/TechSection";
import classNames from "classnames";
import { useAppSelector } from "@/store/hooks";
import useWindowResize from "@/hooks/useWindowResize";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "@/components/atoms/Footer";
import Image from "next/image";
import arrowWhite from "@/assets/img/icons/ic_arrow_white.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/utils/schemas";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert } from "antd";
import { useDispatch } from "react-redux";
import icCloseDark from "@/assets/img/icons/ic_close_dark.png";
import { toggleEmail } from "@/store/darkMode";
import icClose from "@/assets/img/icons/ic_close.png";
import StarsCanvas from "@/components/templates/StarCanvas";
import Header from "@/components/atoms/Header";
import AboutSection from "@/components/templates/AboutSection";
import ProducSection from "@/components/templates/ProducSection";

export default function Home() {
    const { darkMode: darkmodeSlice } = useAppSelector((store) => store);
    const { darkMode, openEmail } = darkmodeSlice;

    const wheelSlider = (event: any) => {
        const swiperEle = document.querySelector(".swiper-initialized") as any;

        const swiper = swiperEle?.swiper;
        if (swiperEle && swiper) {
            if (event?.deltaY < 0) {
                swiper?.slidePrev();
            } else if (event?.deltaY > 0) {
                swiper?.slideNext();
            }
        }
    };
    if (typeof window === "object") {
        window.addEventListener("wheel", wheelSlider);
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });
    const formRef = useRef(null);
    const [successForm, setSuccessForm] = useState(false);
    const [errorForm, setErrorForm] = useState(false);
    const dispatch = useDispatch();
    const onSubmitForm = async (captchaValue: any) => {
        console.log("captchaValue", captchaValue);

        if (formRef.current) {
            emailjs
                .sendForm(
                    "service_34cmd9e",
                    "template_iyfvjv5",
                    formRef.current,
                    "01tanH3pQyzgRgGr7",
                )
                .then(
                    () => {
                        setErrorForm(false);
                        setSuccessForm(true);
                        dispatch(toggleEmail(false));
                        reset();
                    },
                    (err) => {
                        console.log("err", err);

                        setErrorForm(true);
                        dispatch(toggleEmail(false));
                        reset();
                    },
                );
        }
    };

    useEffect(() => {
        if (successForm) {
            setTimeout(function () {
                setSuccessForm(false);
            }, 3000);
        }
        if (errorForm) {
            setTimeout(function () {
                setErrorForm(false);
            }, 3000);
        }
    }, [errorForm, successForm]);

    const openText = useAppSelector((store) => store?.darkMode.openText);
    // useEffect(() => {
    //     document.documentElement.style.setProperty("--cursor-size", `${openText ? 150 : 0}px`);
    // }, [openText]);
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
    return (
        <div>
            {/* <Header /> */}
            <main className={classNames("", darkMode ? "bg-black" : "bg-vani")}>
                {errorForm && (
                    <Alert
                        message='Error'
                        description='Send email not success. Please try again later .'
                        type='error'
                        showIcon
                    />
                )}
                {successForm && (
                    <Alert
                        message='Success'
                        description='Send email successfully.'
                        type='success'
                        showIcon
                    />
                )}

                {openEmail && (
                    <div
                        onClick={() => {
                            dispatch(toggleEmail(false));
                            reset();
                        }}
                        className='rounded fixed flex items-center justify-center z-30 top-0 left-0 w-full h-full bg-[black] bg-opacity-70'
                    >
                        <div className={classNames("w-[95%] z-10 md:w-[70%] lg:w-[50%] z-10 ")}>
                            <form
                                ref={formRef}
                                className={classNames(
                                    "relative w-full h-full  p-6 md:p-8 lg:p-16",
                                    darkMode ? "bg-black" : "bg-vani",
                                )}
                                onClick={(e) => e.stopPropagation()}
                                onSubmit={handleSubmit(onSubmitForm)}
                            >
                                <div
                                    onClick={() => {
                                        dispatch(toggleEmail(false));

                                        reset();
                                    }}
                                    className={classNames(
                                        "absolute cursor-pointer right-[8px] top-[8px] md:right-[8px] md:top-[8px] lg:right-[12px] lg:top-[12px] w-[16px] h-[16px] pointer",
                                    )}
                                >
                                    <Image
                                        src={darkMode ? icCloseDark : icClose}
                                        className='w-full h-full object-cover'
                                        width={0}
                                        height={0}
                                        alt='close'
                                    />
                                </div>
                                <h2
                                    className={classNames(
                                        "text-white mb-6 md:mb-8 lg:mb-10 text-[16px] flex justify-start items-center font-[24px] mb-4 md:mb-6 lg:mb-8 relative mr-2",
                                    )}
                                >
                                    <strong
                                        className={classNames(
                                            "mr-2",
                                            darkMode ? "text-gradient-dark" : "text-gradient",
                                        )}
                                    >
                                        #
                                    </strong>{" "}
                                    <p
                                        className={classNames(
                                            "mr-2 ",
                                            darkMode ? "text-white" : "text-black",
                                        )}
                                    >
                                        Contact me follow these informations
                                    </p>{" "}
                                </h2>
                                <div className='flex flex-wrap justify-between w-full'>
                                    <div className=' w-full lg:w-[49%]'>
                                        <input
                                            placeholder='Name'
                                            className={classNames(
                                                darkMode
                                                    ? "bg-black text-gray"
                                                    : "bg-white text-black",
                                                "w-full mb-4 md:mb-6 lg:mb-0 border-gray border border solid px-2 py-2 outline-none",
                                            )}
                                            type='text'
                                            {...register("name")}
                                        />
                                        {errors.name && (
                                            <p className='text-[red] my-3'>{errors.name.message}</p>
                                        )}
                                    </div>
                                    <div className='w-full lg:w-[49%]'>
                                        <input
                                            placeholder='Email'
                                            className={classNames(
                                                darkMode
                                                    ? "bg-black text-gray"
                                                    : "bg-white text-black",
                                                "w-full border-gray border border solid px-2 py-2 outline-none",
                                            )}
                                            type='text'
                                            {...register("email")}
                                        />
                                        {errors.email && (
                                            <p className='text-[red] my-3'>
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className='flex flex-wrap justify-between w-full my-4 md:my-6 lg:my-8'>
                                    <input
                                        placeholder='Title'
                                        className={classNames(
                                            darkMode ? "bg-black text-gray" : "bg-white text-black",
                                            "w-full border-gray border border solid px-2 py-2 outline-none",
                                        )}
                                        {...register("title")}
                                    />
                                    {errors.title && (
                                        <p className='text-[red] my-3'>{errors.title.message}</p>
                                    )}
                                </div>
                                <div className='flex flex-wrap justify-between w-full mb-4 md:mb-6 lg:mb-8'>
                                    <textarea
                                        placeholder='Message'
                                        className={classNames(
                                            darkMode ? "bg-black text-gray" : "bg-white text-black",
                                            "w-full border-gray border border solid px-2 py-2 outline-none",
                                        )}
                                        {...register("message")}
                                    />
                                    {errors.message && (
                                        <p className='text-[red] my-3'>{errors.message.message}</p>
                                    )}
                                </div>
                                <button
                                    className={classNames(
                                        "w-max font-normal z-10 text-white  relative",
                                        darkMode ? "bg-[transparent]" : "",
                                    )}
                                    type='submit'
                                    // onClick={handleOpenModal}
                                >
                                    <div
                                        className={classNames(
                                            "w-[calc(100%_+_2px)] h-[calc(100%_+_2px)] absolute top-[-1px] left-[-1px] ",
                                            darkMode ? "bg-gray" : "bg-gradient ",
                                        )}
                                    />

                                    <p
                                        className={classNames(
                                            "relative z-10   w-full h-full  py-2 px-8",
                                            darkMode
                                                ? " bg-black text-white"
                                                : " bg-vani text-black",
                                        )}
                                    >
                                        {" "}
                                        Send
                                    </p>
                                </button>
                            </form>
                        </div>
                    </div>
                )}
                <div className='relative z-0'>
                    <HeroSection />
                    <StarsCanvas />
                </div>
                <AboutSection />
                <TechSection />
                <ProducSection />
                {/* <CountSection /> */}
                <ProjectsSection />
                <Footer />
                {/* {!resizeState?.isLargeDesktop && (
                <>
                    <HeroSection />
                    <DeclarationSection />
                    <TechSection />
                    <CountSection />
                    <ProjectsSection />
                    <Footer />
                </>
            )}
            {resizeState?.isLargeDesktop && (
                <>
                    <Swiper
                        direction={"vertical"}
                        slidesPerView={1}
                        autoplay
                        centeredSlides
                        centeredSlidesBounds
                        grabCursor={false}
                        loop={false}
                        speed={4000}
                    >
                        <SwiperSlide>
                            <div
                                onScroll={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }}
                                className='h-[100vh] flex  w-full justify-center items-center'
                            >
                                <HeroSection />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[100vh] flex flex-col w-full justify-center items-center'>
                                <DeclarationSection />
                                <TechSection />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[100vh] w-full flex flex-col justify-center items-center pt-[64px]'>
                                <CountSection />
                                <ProjectsSection />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[100vh] w-[100vw] flex justify-center items-center  pt-[76px]'>
                                <Footer />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            )} */}
            </main>
        </div>
    );
}
