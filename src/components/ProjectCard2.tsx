import Image from "next/image";

import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../../sanity";
import { Project } from "../../typings";
import Projects from "./Projects";
import { forEach } from "lodash";

type Props = { project: Project; index: number };

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
        className="radius-sm w-full object-center lg:w-[50%] xl:w-[40%] "
        src={urlFor(project?.image)}
        alt=""
      />

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
                alt={technology.title}
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
