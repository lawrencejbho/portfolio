import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { PageInfo, Experience } from "../../typings";

import { urlFor } from "../../sanity";

import AboutPic from "../../public/about.jpg";

import { BsArrowRight } from "react-icons/bs";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
};

function About({ pageInfo, experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="invisible absolute top-24 ml-10 text-2xl uppercase tracking-[20px] text-gray-500 dark:text-gray-200 sm:visible h1:invisible h2:invisible h3:visible">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src={AboutPic}
          className="mt-24 h-[200px] w-[200px] flex-shrink-0 rounded-full object-cover sm:h-[300px] sm:w-[300px] sm:pt-4 md:mt-0 md:h-[350px] md:w-[350px] md:rounded-lg lg:h-[500px] lg:w-[500px]"
          width="1000"
          height="1000"
          alt="about-pic"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" mb-10 w-full space-y-4 px-0 sm:space-y-8 md:px-10 md:pt-14"
      >
        <h4 className="flex justify-center space-x-3 font-semibold sm:text-2xl">
          {/* <BsArrowRight className="mt-1.5" /> */}
          <span className="underline decoration-[#4682B4]">
            Solutions Engineer
          </span>
        </h4>

        <p className="text-xs  md:h2:text-sm xl:h3:text-base ">
          Hello! 👋🏼 I'm a California native that grew up in San Diego and is
          currently based in San Francisco. As a Solution Engineer, I approach
          each project as a unique challenge to be solved with a blend of
          creativity, technical expertise, and impactful soft skills. I excel in
          working closely with multiple teams and stakeholders to understand
          design requirements, create sophisticated yet easy to use solutions,
          and effectively communicate concepts to both technical and
          non-technical audiences. I've worked in technical pre sales
          engineering for four years and I have 9+ years of experience working
          in the cybersecurity and computer networking industries. My portfolio
          highlights my software development projects and technical tools used.
          In my free time I like to stay fit, watch the Lakers, and play guitar.
        </p>
        <p className="text-xs  md:h2:text-sm xl:h3:text-base "></p>
      </motion.div>
    </motion.div>
  );
}

export default About;
