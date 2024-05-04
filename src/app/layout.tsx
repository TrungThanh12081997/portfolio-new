"use client";
import { Wrapper } from "@/wrapper";
import "./globals.scss";
import "../assets/font/index.scss";
import "aos/dist/aos.css";
import Header from "@/components/atoms/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <Wrapper>{children}</Wrapper>
            </body>
        </html>
    );
}
