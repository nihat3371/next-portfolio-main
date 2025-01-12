import { motion } from "framer-motion";
import React from "react";
import { urlfor } from "../sanity";
import { Skill } from "../typings";

type Props = {
  skill: Skill;
};

const Skill = ({ skill }: Props) => {
  return (
    <div className=" group relative flex cursor-pointer">
      <motion.img
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlfor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover w-18 h-18 md:w-24 md:h-24 xl:w-28 xl:h-28 filter "
      ></motion.img>
    </div>
  );
};

export default Skill;
