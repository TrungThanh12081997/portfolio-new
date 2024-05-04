"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store/index";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export function Wrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            startEvent: "DOMContentLoaded",

            animatedClassName: "aos-animate",
            useClassNames: false,
            disableMutationObserver: false,

            duration: 1000,
            easing: "ease-in",
            once: false,
            mirror: false,
        });
    }, []);
    SwiperCore.use([Navigation, Pagination]);

    // const swiper = new Swiper(".swiper", {
    //     // configure Swiper to use modules
    //     modules: [Navigation, Pagination],
    //       ...
    // });
    return <Provider store={store}>{children}</Provider>;
}
