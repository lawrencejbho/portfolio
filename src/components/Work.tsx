"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

type Props = {};

function Work({}: Props) {
  // easy way to add in a slider. I tried making the sliders appear/disappear based on the position but wasn't able to figure it out in an easy way.
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
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1 }}
      //   exit={{ opacity: 0 }}
      className="relative mx-auto flex h-screen max-w-full  flex-row items-center justify-evenly overflow-hidden px-10 text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Experience
      </h3>

      <ChevronLeftIcon
        onClick={slideLeft}
        className="w-10 cursor-pointer opacity-50 hover:opacity-100"
      />
      <div
        id="slider"
        className="scroll flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll scroll-smooth p-10 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
      >
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>

      <ChevronRightIcon
        onClick={slideRight}
        className="w-10 cursor-pointer opacity-50 hover:opacity-100"
      />
    </motion.div>
  );
}

export default Work;
