import { motion } from "framer-motion";
import React, { useState } from "react";
import { Project } from "../typings";
import ProjectCard2 from "./ProjectCard2";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

type Props = { projects: Project[] };

export default function Project2({ projects }: Props) {
  const [index, setIndex] = useState(1);

  function slideIntoViewRight() {
    if (index >= projects.length) {
      setIndex(projects.length);
      return;
    }
    const nextSlide = `slider${index + 1}`;

    const slider = document.getElementById(nextSlide) as HTMLElement;
    slider.scrollIntoView({ behavior: "smooth", block: "center" });
    setIndex((prevValue) => prevValue + 1);
  }

  function slideIntoViewLeft() {
    if (index <= 1) {
      setIndex(1);
      return;
    }

    const prevSlide = `slider${index - 1}`;

    const slider = document.getElementById(prevSlide) as HTMLElement;
    slider.scrollIntoView({ behavior: "smooth", block: "center" });
    setIndex((prevValue) => prevValue - 1);
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        //   exit={{ opacity: 0 }}
        className="relative mx-auto flex h-screen max-w-full flex-row items-center justify-evenly overflow-hidden text-left"
      >
        <h3 className="absolute top-24 ml-10 text-2xl uppercase tracking-[20px] text-gray-500">
          Projects
        </h3>

        <ChevronLeftIcon
          onClick={slideIntoViewLeft}
          className="absolute left-0 z-40 ml-20 w-10 cursor-pointer opacity-50 hover:opacity-100"
        />

        <div className="scroll z-20 flex w-full snap-x snap-mandatory overflow-x-scroll  scroll-smooth scrollbar overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#4682B4]">
          {projects?.map((project, index) => (
            <ProjectCard2 key={project._id} project={project} index={index} />
          ))}
        </div>

        <ChevronRightIcon
          onClick={slideIntoViewRight}
          className="absolute right-0 z-40 mr-20 w-10 cursor-pointer opacity-50 hover:opacity-100"
        />
        <div className="absolute top-[30%] left-0 h-[300px] w-full -skew-y-12 bg-[#f7AB0A]/10" />
      </motion.div>
    </div>
  );
}
