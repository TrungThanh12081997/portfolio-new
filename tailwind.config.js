/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        letterSpacing: {
            tightest: "-.075em",
            tighter: "-.05em",
            tight: "-.025em",
            normal: "0",
            wide: ".025em",
            wider: ".05em",
            widest: ".1em",
            widest: ".25em",
        },
        colors: {
            black: "#0d0d0d",
            // 'main': '#aa41a4',

            main: "linear-gradielnt(to right, #d7a849, #fcf6ba, #dea833, #fbf5b7)",
            gray: "#ABB2BF",
            white: "#fff",
            vani: "#fff",
        },
        fontFamily: {
            fira: ["fira"],
        },
        extend: {
            backgroundImage: {
                "custom-gradient": "linear-gradient(to top, black 50%, transparent 100%)",
            },

            spacing: {
                sm: "576px",
                md: "768px",
                lg: "1024px",
                xl: "1200px",
            },
        },
    },
    plugins: [],
};
