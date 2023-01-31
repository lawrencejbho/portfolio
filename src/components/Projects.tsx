"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TypescriptIcon from "../../public/typescript.png";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1 }}
        className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
      >
        <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
          {" "}
          Projects
        </h3>

        <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll">
          {projects.map((project, index) => (
            <div className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44">
              <Image src={TypescriptIcon} alt="test" className="w-40" />
              <div>
                <h4>Case study {index + 1} of 5</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-[30%] left-0 h-[300px] w-full -skew-y-12 bg-[#f7AB0A]/10" />
      </motion.div>
    </div>
  );
}

export default Projects;
