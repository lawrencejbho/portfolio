import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Project } from "../../typings";

type Props = {
  projects: Project[];
};

// slider doesn't work with this css

function Projects({ projects }: Props) {
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
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      //   exit={{ opacity: 0 }}
      className="relative mx-auto flex h-screen max-w-full flex-row items-center justify-evenly overflow-hidden px-5 text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>

      <ChevronLeftIcon
        onClick={slideLeft}
        className="hidden w-10 cursor-pointer opacity-50 hover:opacity-100 sm:flex"
      />
      <div
        id="slider"
        className="scroll mt-16 flex h-[83%] w-full snap-x snap-mandatory space-x-5 overflow-x-scroll scroll-smooth p-6 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#4682B4]"
      >
        {projects?.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>

      <ChevronRightIcon
        onClick={slideRight}
        className="hidden w-10 cursor-pointer opacity-50 hover:opacity-100 sm:flex"
      />
    </motion.div>
  );
}

export default Projects;
