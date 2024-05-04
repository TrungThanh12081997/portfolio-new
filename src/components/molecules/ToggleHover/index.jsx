import React from "react";
import "./index.scss";
import { ServiceCard } from "@/components/templates/AboutSection";
import { toNumber } from "lodash";

const ToggleHover = ({ services }) => {
    return (
        <div className='grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-10 mt-4 md:mt-8 lg:mt-10'>
            {services.map((service, index) => (
                <React.Fragment key={index}>
                    <ServiceCard key={toNumber(index)} {...service} />
                </React.Fragment>
            ))}
        </div>
    );
};

export default ToggleHover;
