import { motion } from "framer-motion";
import React, { useState } from "react";
import { Project } from "../../typings";
import ProjectCard from "./ProjectCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import NavButton from "./NavButton";

type Props = { projects: Project[] };

export default function Project2({ projects }: Props) {
  const [projectIndex, setProjectIndex] = useState(1);

  function slideIntoViewRight() {
    if (projectIndex >= projects.length) {
      setProjectIndex(projects.length);
      return;
    }
    const nextSlide = `slider${projectIndex + 1}`;

    const slider = document.getElementById(nextSlide) as HTMLElement;
    slider.scrollIntoView({ behavior: "smooth", block: "center" });
    setProjectIndex((prevValue) => prevValue + 1);
  }

  function slideIntoViewLeft() {
    if (projectIndex <= 1) {
      setProjectIndex(1);
      return;
    }

    const prevSlide = `slider${projectIndex - 1}`;

    const slider = document.getElementById(prevSlide) as HTMLElement;
    slider.scrollIntoView({ behavior: "smooth", block: "center" });
    setProjectIndex((prevValue) => prevValue - 1);
  }

  function handleClick(index: number) {
    if (projectIndex < index) {
      const nextSlide = `slider${projectIndex + 1}`;

      const slider = document.getElementById(nextSlide) as HTMLElement;
      slider.scrollIntoView({ behavior: "smooth", block: "center" });
      setProjectIndex((prevValue) => prevValue + 1);
    } else if (projectIndex > index) {
      const prevSlide = `slider${projectIndex - 1}`;

      const slider = document.getElementById(prevSlide) as HTMLElement;
      slider.scrollIntoView({ behavior: "smooth", block: "center" });
      setProjectIndex((prevValue) => prevValue - 1);
    }
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1 }}
        //   exit={{ opacity: 0 }}
        className="relative mx-auto flex h-5/6 max-w-full flex-row items-center justify-evenly overflow-hidden text-left"
      >
        <h3 className="absolute top-24 ml-10 text-2xl uppercase tracking-[20px] text-gray-500 dark:text-gray-200">
          Portfolio
        </h3>

        <ChevronLeftIcon
          onClick={slideIntoViewLeft}
          className="invisible absolute left-0 z-40 ml-10 w-10 cursor-pointer opacity-50 hover:text-[#4682B4] hover:opacity-100 hover:transition sm:visible md:ml-20 xl:ml-32"
        />

        <div className="scroll z-20 flex w-full snap-x overflow-x-scroll  scroll-smooth overflow-y-hidden  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#4682B4]">
          {projects?.map((project, index) => (
            <ProjectCard key={project._id} project={project} index={index} />
          ))}
        </div>

        <ChevronRightIcon
          onClick={slideIntoViewRight}
          className=" invisible absolute right-0 z-40 mr-10 w-10 cursor-pointer opacity-50 hover:text-[#4682B4] hover:opacity-100 hover:transition sm:visible md:mr-20  xl:mr-32 "
        />
        <div className="absolute bottom-20 z-40 flex items-center justify-center space-x-5">
          {projects?.map((project, index) => (
            <NavButton
              value={index + 1}
              handleClick={handleClick}
              currentIndex={projectIndex}
              key={project._id}
            />
          ))}
        </div>
        <div className="absolute top-[30%] left-0 h-[300px] w-full -skew-y-12 bg-[#f7AB0A]/10" />
      </motion.div>
    </div>
  );
}
