import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { Skill } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

// strange issue where three of the icons won't show up when using a small width

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Image
          src={urlFor(skill?.image)}
          className=" h-24 w-24 rounded-full border border-gray-500 bg-white object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h2:h-28 md:h2:w-28 xl:h3:h-32 xl:h3:w-32"
          alt="typescript"
          width="500"
          height="500"
        />
      </motion.div>
      <div className="absolute z-0 h-24 w-24 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80 md:h2:h-28 md:h2:w-28 xl:h3:h-32 xl:h3:w-32">
        <div className="flex h-full items-center justify-center text-center">
          <p className="text-lg font-bold text-black opacity-100 md:text-xl lg:text-2xl">
            {skill?.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
