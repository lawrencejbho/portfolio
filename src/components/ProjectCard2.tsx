import Image from "next/image";

import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../../sanity";
import { Project } from "../typings";
import Projects from "./Projects";
import { forEach } from "lodash";

type Props = { project: Project };

export default function Project2Card({ project, index }: Props) {
  return (
    <div
      id={`slider${index + 1}`}
      className="flex h-screen w-screen flex-shrink-0 snap-center flex-col content-center items-center justify-center space-y-5 overflow-hidden p-20 text-center md:p-44"
      key={index}
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-[10%] object-center "
        src={urlFor(project?.image)}
        alt=""
      />

      {/* <div className=""></div>

      <h4 className="text-center text-4xl font-semibold">
        <span className="underline decoration-[#f7AB0A]/50">
          {project?.title}
        </span>
      </h4>
      <p className="text-center text-lg md:text-left">{project?.summary}</p> */}

      <div className="items-center justify-center space-y-10 px-0">
        <div className="flex-col items-center text-center md:flex md:justify-between">
          <h1 className="text-2xl font-bold text-black md:text-4xl">
            {project?.title}
          </h1>
          <div className="my-2 flex justify-center space-x-2">
            {project?.technologies.map((technology) => (
              <Image
                key={technology._id}
                className="h-10 w-10"
                src={urlFor(technology.image)}
                width="500"
                height="500"
              />
            ))}
          </div>
        </div>
        <p className="py-2 text-sm  text-gray-500 md:py-5 md:text-lg">
          {project?.summary}
        </p>
      </div>
    </div>
  );
}
