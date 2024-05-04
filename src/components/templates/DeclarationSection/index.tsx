import React from "react";
import "./index.scss";
import Wrapper from "@/components/molecules/Wrapper";
import Image from "next/image";
import phase from "@/assets/img/icons/phase.svg";
import phaseLight from "@/assets/img/icons/phase_light.svg";

import classNames from "classnames";
import { useAppSelector } from "@/store/hooks";

interface DeclarationSectionProps {}

const DeclarationSection: React.FC<DeclarationSectionProps> = () => {
    const { darkMode: darkmodeSlice } = useAppSelector((store) => store);
    const { darkMode } = darkmodeSlice;

    return (
        <div
        // className={classNames(darkMode ? "bg-black" : "bg-vani")}
        >
            <div
                className={classNames(
                    "container mx-auto my-8 md:my-10 lg:my-12 xl:my-14 px-6 md:px-8 lg:px-12",
                )}
            >
                <div className='flex  justify-center'>
                    <div
                        className={classNames(
                            "relative w-max text-white px-8 py-4  border-solid border",
                            darkMode ? "border-white" : "border-black",
                        )}
                    >
                        <h2 className={classNames(darkMode ? "text-white" : "text-black")}>
                            I have not failed. I’ve just found 10,000 ways that won’t work - Thomas
                            Edition
                        </h2>
                        <div className='absolute top-[-16px] left-[5px] w-[40px] h-[40px] z-10'>
                            <Image
                                src={darkMode ? phase : phaseLight}
                                className='w-full h-full'
                                alt='phase'
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className='absolute bottom-[-24px] right-[5px] w-[40px] h-[40px] z-10'>
                            <Image
                                src={darkMode ? phase : phaseLight}
                                className='w-full h-full'
                                alt='phase'
                                width={0}
                                height={0}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeclarationSection;
