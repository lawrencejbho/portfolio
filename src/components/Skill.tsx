import React from "react";
import TypescriptIcon from "../../public/typescript.png";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

// need to use <Image />

function Skill({ directionLeft }: Props) {
  return;
  <div className="">
    <motion.img
      initial={{
        x: directionLet ? -200 : 200,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      src={TypescriptIcon}
      className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale xl:h-32 xl:w-32"
    />
    <div>
      <div>
        <p>100%</p>
      </div>
    </div>
    ;
  </div>;
}

export default Skill;
