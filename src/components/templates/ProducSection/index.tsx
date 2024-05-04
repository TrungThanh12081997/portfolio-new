import React, { useState } from "react";
import "./index.scss";
import TextSection from "@/components/molecules/TextSection";
import Wrapper from "@/components/molecules/Wrapper";
import { map, size } from "lodash";
import classNames from "classnames";

interface ProducSectionProps {}
const listCharacterAbout = [
    {
        text: ["Over 3 year of experience "],
        isHightLight: false,
    },
    { text: ["in interactive develop "], isHightLight: true },
    {
        text: ["and working with talented people"],
        isHightLight: false,
    },
    {
        text: ["in the business"],
        isHightLight: false,
    },
];
const ProducSection: React.FC<ProducSectionProps> = () => {
    const [hoverIndex, setHoverIndex] = useState(-1);
    const listHistory = [
        {
            time: "NOW",
            company: "Freelancer",
            title: "Fullstack Developer",
        },
        {
            time: "2023",
            company: "Unique Tech ( start up )",
            title: "Fullstack Developer",
        },
        {
            time: "2021",
            company: "Nova E Force",
            title: "Frontend Developer",
        },
    ];
    return (
        <div className='lg:h-screen flex flex-col items-center justify-center'>
            <Wrapper>
                <TextSection
                    title={"E X P E R I E N C E"}
                    listCharacterAbout={listCharacterAbout}
                />
            </Wrapper>
            <div className='w-full'>
                <Wrapper noPaddingY>
                    {" "}
                    <h2 className='text-[36px] mb-4 text-gradient-dark'>History</h2>
                </Wrapper>
                {map(listHistory, (history, index) => {
                    const { time, company, title } = history;
                    const isHover = index === hoverIndex;
                    return (
                        <div
                            onMouseEnter={() => setHoverIndex(index)}
                            className={classNames(
                                "relative  py-8  z-5 ",
                                "border border-[#fb2056] border-t-2 border-l-0 border-r-0   border-solid",
                                index === size(listHistory) - 1 ? "border-b-2" : "border-b-0",
                            )}
                        >
                            <Wrapper noPaddingY classNames='py-0'>
                                <div className='flex z-10 relative'>
                                    <h2
                                        className={classNames(
                                            "text-[32px] duration-100 lg:mr-[124px]",
                                            isHover ? "text-black" : "text-gradient-cream",
                                        )}
                                    >
                                        {time}
                                    </h2>
                                    <div className='flex-col flex ml-8'>
                                        <h2
                                            className={classNames(
                                                "text-[32px] ",
                                                isHover ? "text-black" : "text-gradient-cream",
                                            )}
                                        >
                                            {title}
                                        </h2>
                                        <p
                                            className={classNames(
                                                "text-[32px]",
                                                isHover ? "text-black" : "text-gradient-cream",
                                            )}
                                        >
                                            {company}
                                        </p>
                                    </div>
                                </div>
                            </Wrapper>
                            <div
                                style={{
                                    height: hoverIndex === index ? "100%" : "0",
                                }}
                                className='overflow-hidden ease-in-out absolute duration-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full background-cream'
                            >
                                <Wrapper noPaddingY classNames='py-4'>
                                    {/* <div className='flex'>
                                    <h2 className='text-[64px] text-gradient-cream'>3D</h2>
                                    <div className='flex-col flex ml-8'>
                                        <h2 className='text-[64px] text-gradient-cream'>
                                            Fullstack Lead
                                        </h2>
                                        <h2 className='text-[32px] text-gradient-cream'>
                                            Fullstack Lead
                                        </h2>
                                    </div>
                                </div> */}
                                </Wrapper>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProducSection;
