import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlfor } from "../sanity";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";
type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I'm ${pageInfo.name}👋🏻 `,
      "Do you have any intership for me?🥺👉👈",
      "Yes... I know how to use TypeScript😎",
      "Love cats alot!!",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlfor(pageInfo?.heroImage).url()}
        alt=""
      />
      <div className="z-20">
        <motion.h2 className="animate-pulse text-lg uppercase text-[#40E0D0] pb-2 tracking-[15px]">
          {pageInfo?.role}
        </motion.h2>
        <h1 className="text-5xl lg:text-4xl font-semibold">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
