import Image from "next/image";

import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../../sanity";
import { Project } from "../../typings";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

type Props = { project: Project; index: number };

export default function ProjectCard({ project, index }: Props) {
  const demoLinks = [
    "https://www.habbyapp.com",
    "https://www.wrappedplus.com",
    "https://www.lawrencejbho.com",
    "https://github.com/lawrencejbho/react-quizzical-trivia",
  ];
  const githubLinks = [
    "https://github.com/lawrencejbho/full-stack-habit-tracker",
    "https://github.com/lawrencejbho/full-stack-spotify-wrapped-plus",
    "https://github.com/lawrencejbho/next-portfolio",
    "https://github.com/lawrencejbho/react-quizzical-trivia",
  ];

  return (
    <div
      id={`slider${index + 1}`}
      className="z-20 flex h-screen w-screen flex-shrink-0 snap-center flex-col content-center items-center justify-center space-y-5 overflow-hidden p-20 text-center md:p-44"
      key={index}
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        className="radius-sm w-full max-w-[900px] object-center md:h1:h-3/4 md:h1:w-5/6 lg:h2:w-[750px] xl:h3:w-[900px]"
        src={urlFor(project?.image)}
        alt=""
      />

      <div className="items-center justify-center space-y-4 px-0 h3:space-y-10">
        <div className="flex-col items-center text-center md:flex md:justify-between">
          <h1 className="text-2xl font-bold text-black dark:text-white md:h3:text-4xl">
            {project?.title}
          </h1>
          <div className="my-2 flex justify-center space-x-2">
            {project?.technologies.map((technology) => (
              <Image
                key={technology._id}
                className="h-8 w-8 h2:h-10 h2:w-10"
                src={urlFor(technology.image)}
                width="500"
                height="500"
                alt={technology.title}
              />
            ))}
          </div>
        </div>
        <p className="max-w-[900px] text-sm text-gray-500 dark:text-white sm:h2:text-base h3:py-2 md:h3:text-lg ">
          {project?.summary}
        </p>
      </div>
      <div className="flex w-full flex-row items-center justify-center ">
        <a href={demoLinks[index]} target="_blank">
          <button
            type="button"
            className="break-inside w-42 mr-4 mb-4 flex rounded-3xl bg-sky-900 px-4 py-2"
          >
            <div className="flex flex-1 items-center justify-between text-white hover:text-gray-300">
              <span className="text-sm font-medium md:h4:text-lg">
                Live Demo
              </span>
              <ArrowRightIcon className="ml-2 w-4 md:h4:ml-4 md:h4:w-6" />
            </div>
          </button>
        </a>
        <a href={githubLinks[index]} target="_blank">
          <button
            type="button"
            className="break-inside w-42 mb-4 flex  rounded-3xl bg-black px-4 py-2"
          >
            <div className="flex flex-1 content-center items-center justify-between text-center text-white hover:text-gray-300">
              <span className=" text-sm font-medium md:h4:text-lg">Github</span>
              <ArrowRightIcon className="ml-2 w-4  md:h4:ml-4 md:h4:w-6" />
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}
