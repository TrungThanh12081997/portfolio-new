"use client";
import React from "react";
import "./index.scss";
import classNames from "classnames";

interface WrapperProps {
    children: React.ReactNode;
    classNames?: string;
    noPaddingY?: boolean;
}

const Wrapper: React.FC<WrapperProps> = ({ children, ...props }) => (
    <div
        className={classNames(
            "container mx-auto  px-6 md:px-8 lg:px-12",
            props?.noPaddingY ? "" : "lpy-8 md:py-10 g:py-12 xl:py-14 ",
            props.classNames,
        )}
    >
        {children}
    </div>
);

export default Wrapper;
