import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="flex w-full flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-gray-500 p-10 opacity-90 transition-opacity duration-200 hover:opacity-100 sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%]">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" w- object-center  lg:w-[75%] xl:w-[50%]"
        src={urlFor(project?.image)}
        alt=""
      ></motion.img>
      <div className="px-0 md:px-10">
        <h4 className="text-center text-4xl text-gray-100">{project?.title}</h4>
        <div className="my-2 flex space-x-2">
          {project?.technologies.map((technology) => (
            <Image
              key={technology._id}
              className="h-10 w-10 "
              src={urlFor(technology.image)}
              width="500"
              height="500"
            />
          ))}
        </div>

        <p className="py-5 text-gray-100">{project?.summary}</p>
        <ul className="ml-5 list-disc space-y-4 text-lg"></ul>
      </div>
    </article>
  );
}
