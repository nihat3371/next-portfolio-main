import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlfor } from "../sanity";

type Props = { pageInfo: PageInfo };

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-3xl">
        About
      </h3>
      <motion.img
        className=" -mb-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[600px] "
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={urlfor(pageInfo.profilePic).url()}
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold text-gray-500">
          WHO ARE <span className="underline decoration-gray-200">YOU</span>
        </h4>
        <p className="text-base lg:text-lg">
          <span className="text-orange-500">
            React, TypeScript, Next.js, Tailwind, Material UI, Framer, Motion,
            Sanity
          </span>
          <br />

          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
