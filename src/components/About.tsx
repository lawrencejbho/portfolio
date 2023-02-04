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

/* 
I was having trouble using framer motion on the top div so put it on the paragraph and text.
Utilize exit to replay the animation every time it gets to that part of the page.  
*/

function About({ pageInfo, experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
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
          className="-mb-20 h-[400px] w-[400px] flex-shrink-0 rounded-full object-cover md:mb-0 md:h-[500px] md:w-[750px] md:rounded-lg "
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
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#4682B4]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Hello! 👋🏼 My name is Lawrence and I'm a Frontend Software Engineer
          based in San Francisco. I first learned how to code when I was 9 using
          Visual Basic to make text scrolling games.
        </p>
        <p className="text-base">
          Before jumping in software development, I was a cybersecurity and
          computer networking systems engineer with a decade of experience in
          the industry.
        </p>
        <p className="text-base">
          I'm passionate about building accessible, inspiring products and
          digital experiences.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;
