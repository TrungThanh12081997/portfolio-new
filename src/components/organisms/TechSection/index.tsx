import React, { Suspense, useState } from "react";
import "./index.scss";
import Wrapper from "@/components/molecules/Wrapper";

import node from "@/assets/img/icons/node.svg";
import photoshop from "@/assets/img/icons/photoshop.svg";
import redux from "@/assets/img/icons/redux.svg";
import react from "@/assets/img/icons/react.svg";
import ts from "@/assets/img/icons/ts.svg";
import js from "@/assets/img/icons/js.svg";
import css from "@/assets/img/icons/css.svg";
import { useAppSelector } from "@/store/hooks";
import useWindowResize from "@/hooks/useWindowResize";
import { Canvas } from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
    Html,
    useProgress,
} from "@react-three/drei";

import mongo from "@/assets/img/icons/mongo.svg";
import html from "@/assets/img/icons/html.svg";
import nest from "@/assets/img/icons/nest.svg";
import mysql from "@/assets/img/icons/mysql.svg";
import figma from "@/assets/img/icons/figma.svg";
import express from "@/assets/img/icons/express.svg";
import { icons } from "antd/es/image/PreviewGroup";
import { map, size } from "lodash";
import classNames from "classnames";

interface TechSectionProps {}
export const textVariant = (delay: number) => {
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
const Ball = ({ icon }: any) => {
    const texture = useTexture(icon.src) as any;

    return (
        <>
            <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
                <ambientLight intensity={0.25} />
                <directionalLight position={[0, 0, 0.05]} />
                <mesh castShadow receiveShadow scale={2.75}>
                    <icosahedronGeometry args={[1, 1, 0] as any} />
                    <meshStandardMaterial
                        color='#fff8eb'
                        polygonOffset
                        polygonOffsetFactor={-5}
                        flatShading
                    />
                    {icon && (
                        <Decal
                            position={[0, 0, 1]}
                            rotation={[0, 0, 0]}
                            scale={[1, 1, 1]}
                            map={texture}
                        />
                    )}
                </mesh>
            </Float>
        </>
    );
};
const CanvasLoader = () => {
    const { progress } = useProgress();
    return (
        <Html
            as='div'
            center
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <span className='canvas-loader'></span>
            <p
                style={{
                    fontSize: 14,
                    color: "#F1F1F1",
                    fontWeight: 800,
                    marginTop: 40,
                }}
            >
                {progress.toFixed(2)}%
            </p>
        </Html>
    );
};

const BallCanvas = ({ icon }: any) => {
    return (
        <Canvas frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Ball icon={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};
// function initializeWebGL() {
//     const canvas = document.getElementById("your-canvas-id");
//     const canvas = document.getElementById("your-canvas-id") as any;

//     const gl = canvas.getContext("webgl");

//     if (!gl) {
//         console.error("Unable to initialize WebGL. Your browser may not support it.");
//         return null;
//     }

//     // Set clear color and clear the canvas
//     gl.clearColor(0.0, 0.0, 0.0, 1.0);
//     gl.clear(gl.COLOR_BUFFER_BIT);

//     return gl;
// }

const TechSection: React.FC<TechSectionProps> = () => {
    const { darkMode: darkmodeSlice } = useAppSelector((store) => store);
    const { darkMode } = darkmodeSlice;
    const resizeState = useWindowResize();
    const technologies = [
        {
            name: "HTML 5",
            icon: html,
        },
        {
            name: "CSS 3",
            icon: css,
        },
        {
            name: "JavaScript",
            icon: js,
        },
        {
            name: "TypeScript",
            icon: ts,
        },
        {
            name: "React JS",
            icon: react,
        },
        {
            name: "Redux Toolkit",
            icon: redux,
        },
        {
            name: "Tailwind CSS",
            icon: photoshop,
        },
        {
            name: "Node JS",
            icon: node,
        },
        {
            name: "MongoDB",
            icon: mongo,
        },
        {
            name: "Three JS",
            icon: nest,
        },
        {
            name: "git",
            icon: mysql,
        },
        {
            name: "figma",
            icon: figma,
        },
        {
            name: "docker",
            icon: express,
        },
    ];
    const [hoverIndex, setHoverIndex] = useState(-1);
    const listHistory = [
        {
            time: "VISUAL",
            company: "Freelancer",
            title: "VISUAL",
            description:
                "I search the internet for visual references and then combine them to create my own work.",
        },
        {
            time: "PRODUCT",
            company: "Unique Tech ( start up )",
            title: "Fullstack Developer",
            description:
                "I utilize common design best practices, test, and re-iterate until it works (hopefully).",
        },
        {
            time: "EXPERIENCE",
            company: "Nova E Force",
            title: "Frontend Developer",
            description: "try my best to improve performancd and UX UI",
        },
    ];
    return (
        <div className={classNames("lg:h-screen w-full flex flex-col items-center justify-center")}>
            {/* <Wrapper></Wrapper> */}
            <div className='w-full'>
                <Wrapper>
                    <div className='flex'>
                        <h2 className='text-[16px] mb-4 text-gradient-cream tracking-wide mr-3'>
                            W H A T
                        </h2>
                        <h2 className='text-[16px] mb-4 text-gradient-cream tracking-wide mr-3'>
                            I
                        </h2>
                        <h2 className='text-[16px] mb-4 text-gradient-cream tracking-wide'>D O</h2>
                    </div>
                </Wrapper>
                <div onMouseLeave={() => setHoverIndex(-1)}>
                    {map(listHistory, (history, index: number) => {
                        const { time, description } = history;
                        const isHover = index === hoverIndex;
                        return (
                            <div
                                onMouseEnter={() => setHoverIndex(index)}
                                className={classNames(
                                    "relative  py-1  z-5 ",
                                    "border border-[#fb2056] border-t-2 border-l-0 border-r-0   border-solid",
                                    index === size(listHistory) - 1 ? "border-b-2" : "border-b-0",
                                )}
                            >
                                <Wrapper noPaddingY classNames='py-0'>
                                    <div className='flex z-10 relative items-center w-full justify-between'>
                                        <div
                                            key={index}
                                            className={classNames("relative custom-before")}
                                        >
                                            <p
                                                className={classNames(
                                                    "h-full text-run flex relative z-40 w-[100%]  text-[80px] duration-100 lg:mr-[124px]",
                                                    isHover ? "text-black" : "text-gradient-cream",
                                                )}
                                            >
                                                {time}
                                            </p>
                                            <div className='w-full p-small relative  text-[#798277] text-[80px] duration-100 lg:mr-[124px]'>
                                                {time}
                                            </div>
                                        </div>
                                        <p className='h-max max-w-[450px] text-black'>
                                            {isHover ? description : ""}
                                        </p>
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
            <Wrapper>
                <div className='flex flex-row flex-wrap justify-center gap-10'>
                    {technologies.map((technology, index) => (
                        <div className='w-28 h-28' key={technology.name + index}>
                            <BallCanvas icon={technology.icon} />
                        </div>
                    ))}
                </div>
            </Wrapper>
        </div>
    );
};

export default TechSection;
