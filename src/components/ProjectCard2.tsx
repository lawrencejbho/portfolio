import Image from "next/image";

import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../../sanity";
import { Project } from "../typings";

type Props = { project: Project };

export default function Project2Card({ project }: Props) {
  return (
    <article className=" to-darkGreen/20 md:p10 flex  flex-shrink-0 cursor-pointer snap-center flex-col  items-center space-y-0 rounded-3xl bg-[#FFFFFF] bg-gradient-to-tr from-white  p-5 opacity-100 drop-shadow-xl transition-opacity duration-200 hover:opacity-100  ">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className=" mb-2 h-28 w-28 rounded-full object-cover object-center md:invisible md:h-0 md:w-0 xl:visible xl:h-[150px] xl:w-[150px]"
        src={urlFor(project?.image)}
        alt=""
      />
      <div className="w-full px-0 md:px-10">
        <div className=" items-center md:flex md:justify-between">
          <div>
            <h4 className="text-lg font-light text-black md:text-3xl">
              {project?.title}
            </h4>
            <p className="text-md text-lightGreen mt-1  font-bold md:text-2xl">
              company
            </p>
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
          </div>
        </div>
        <p className="py-2 text-sm uppercase text-gray-500 md:py-5 md:text-lg">
          date
        </p>
      </div>
      <ul className="scrollbar-thumb-darkGreen/80 ml-0 list-disc  space-y-2 overflow-y-scroll px-0 pr-5 pl-5 text-justify text-sm text-black scrollbar-thin scrollbar-track-gray-200 md:px-10 md:text-lg">
        {project?.summary}
      </ul>
    </article>
  );
}
