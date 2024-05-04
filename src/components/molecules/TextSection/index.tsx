import React from "react";
import "./index.scss";
import { includes, map, join, toNumber } from "lodash";
import classNames from "classnames";
import styles from "./page.module.scss";

interface TextSectionProps {
    styles?: any;
    listCharacterAbout?: any;
    title?: string;
}

const TextSection: React.FC<TextSectionProps> = ({ listCharacterAbout, title = "A B O U T" }) => {
    return (
        <div className={styles.body}>
            <div className='text-gradient-cream flex flex-col'>
                <h2 className='text-[16px] mb-4 text-gradient-cream tracking-wide'>{title}</h2>
                {map(listCharacterAbout, (item, idx) => {
                    return (
                        <div
                            className='flex flex-row'
                            key={idx}
                            // data-text={join(map(item?.text), "")}
                        >
                            {map(item?.text, (text, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={classNames(
                                            "relative custom-before",
                                            item?.isHightLight ? "mr-[13px]" : "",
                                        )}
                                        data-text={
                                            includes([0], toNumber(idx)) && toNumber(index) === 0
                                                ? `${item?.text[0]} ${item?.text[1]}${item?.text[2]}`
                                                : join(map(item?.text), "")
                                        }
                                    >
                                        <p
                                            className={classNames(
                                                "h-full text-run flex relative z-40 w-[100%]",
                                                item?.isHightLight
                                                    ? "text-gradient-dark"
                                                    : "text-gradient-cream",
                                            )}
                                        >
                                            {text}
                                        </p>
                                        <div className='w-full p-small relative  text-[#798277]'>
                                            {text}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TextSection;
