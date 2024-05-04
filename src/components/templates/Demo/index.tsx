"use client";

import React from "react";
import "./index.scss";
import { useAppSelector } from "@/store/hooks";
import { useSelector } from "react-redux";
interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
    const test = useSelector((store: any) => store);
    return (
        <div className='flexx'>
            <p className='flexx-1 text-blue font-fira'>ahihih</p>
        </div>
    );
};

export default Demo;
