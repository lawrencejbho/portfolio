"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { PageInfo } from "../../typings";

import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
};

/* 
I was having trouble using framer motion on the top div so put it on the paragraph and text.
Utilize exit to replay the animation every time it gets to that part of the page.  
*/

function About({ pageInfo }: Props) {
  return (
    <motion.div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo[0]?.profilePic).url()}
        className="-mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-80 md:w-64 md:rounded-lg xl:h-[450px] xl:w-[450px]"
      />

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
        <p className="text-base">{pageInfo[0]?.backgroundInformation}</p>
      </motion.div>
    </motion.div>
  );
}

export default About;
