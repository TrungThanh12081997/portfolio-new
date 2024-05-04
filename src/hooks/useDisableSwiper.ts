/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState, useEffect } from 'react';

const useDisableSwiper = () => {
    const [disable, setDisable] = useState(false);

    if (typeof document !== "undefined") {

        const swiper = document.querySelector('.swiper') as any;
        const swiperEle = swiper?.swiper;
        useEffect(() => {
            if (swiperEle && swiperEle) {

                if (disable) {
                    swiperEle.disable();
                } else {
                    swiperEle.enable();
                }
            }

        }, [disable, swiperEle, swiper]);
        return { setDisable, disable };
    }

};

export default useDisableSwiper;
