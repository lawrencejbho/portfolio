import { motion } from "framer-motion";
import React from "react";
import { Project } from "../typings";
import ProjectCard2 from "./ProjectCard2";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import Carousel from "./carousel/Carousel";

type Props = { projects: Project[] };

export default function Project2({ projects }: Props) {
  function slideLeft() {
    const slider = document.getElementById("slider") as HTMLElement;
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  function slideRight() {
    const slider = document.getElementById("slider") as HTMLElement;
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative  mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <h3 className="absolute top-20 text-xl uppercase tracking-[20px] text-gray-500 md:top-24 md:text-2xl">
        Project2
      </h3>
      <ChevronLeftIcon
        onClick={slideLeft}
        className="hidden w-10 cursor-pointer opacity-50 hover:opacity-100 sm:flex"
      />{" "}
      {/* Project2 cards */}
      {projects?.map((project) => (
        <ProjectCard2 key={project._id} project={project} />
      ))}
      <ChevronRightIcon
        onClick={slideRight}
        className="hidden w-10 cursor-pointer opacity-50 hover:opacity-100 sm:flex"
      />{" "}
      {/* <div className="scrollbar-thumb-darkGreen/80 flex h-3/4 w-screen snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 pb-5 text-left scrollbar-thin scrollbar-track-gray-400/20 md:h-2/3 md:w-full md:pb-10"></div> */}
    </motion.div>
  );
}
