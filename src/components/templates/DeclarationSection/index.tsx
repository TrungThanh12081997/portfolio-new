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
        <div className={classNames(darkMode ? "bg-black" : "bg-vani")}>
            <Wrapper>
                <div className='flex  justify-center'>
                    <div
                        className={classNames(
                            "relative w-max text-white px-8 py-4  border-solid border",
                            darkMode ? "border-white" : "border-black",
                        )}
                    >
                        <h2 className={classNames(darkMode ? "text-white" : "text-black")}>
                            With great power comes great electricity bill - Dr. Who
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
            </Wrapper>
        </div>
    );
};

export default DeclarationSection;
