import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { PageInfo, Experience } from "../../typings";

import { urlFor } from "../../sanity";

import AboutPic from "../../public/about.jpg";

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
      <h3 className="absolute top-24 ml-10 text-2xl uppercase tracking-[20px] text-gray-500">
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
          className="mt-24 h-[200px] w-[200px] flex-shrink-0 rounded-full object-cover sm:h-[300px] sm:w-[300px] md:mb-0 md:h-[500px] md:w-[750px] md:rounded-lg "
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
        className=" mb-20 space-y-4 px-0 sm:space-y-10 md:px-10 md:pt-20"
      >
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#4682B4]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Hello! 👋🏼 I'm a Frontend Software Engineer based in San Francisco. I'm
          passionate about learning new things, solving problems, and creating
          amazing digital experiences.
        </p>
        <p className="text-base">
          I first learned how to code using Visual Basic in a summer school
          program to make text scrolling games. Before jumping into software
          development, I was a cybersecurity and computer networking systems
          engineer with a decade of experience in the industry.
        </p>
        <p className="text-base">
          In my free time I like to stay fit, teach my cats new tricks, and play
          guitar.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;
