import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlfor } from "../sanity";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-stone-300">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              className="h-[30%] w-[100%] object-contain md:h-60 lg:h-[80%] lg:w-[100%]"
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              src={urlfor(project.image).url()}
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className=""> {i + 1} : </span>
                {project.title}
              </h4>

              <div className="text-lg text-center md:text-left">
                {project.summary}
                <div className="flex items-center space-x-2 justify-center ">
                  {project?.technologies.map((tech) => (
                    <img
                      className="h-10 w-10 rounded-full"
                      key={tech._id}
                      src={urlfor(tech.image).url()}
                    ></img>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
