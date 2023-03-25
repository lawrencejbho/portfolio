import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../../typings";

import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiSun, BiMoon } from "react-icons/bi";

import useColorMode from "../hooks/useColorMode";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <header className="sticky top-0 z-30 mx-auto flex max-w-7xl items-start justify-between p-5 dark:bg-[#0B111E] xl:items-center">
      <motion.div
        className=" flex flex-row items-center space-x-4"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Link href="https://www.linkedin.com/in/lawrencejbho/" target="_blank">
          <div className="delay-50 group flex h-8 w-8 items-center justify-center rounded-md border-0 bg-white drop-shadow-md transition duration-300 ease-in-out hover:bg-[#4682B4] dark:bg-[#111A2E] dark:hover:bg-[#4682B4]">
            <FaLinkedin className=" text-gray-700 group-hover:text-white dark:text-[#4682B4] dark:group-hover:text-white" />
          </div>
        </Link>
        <Link href="https://twitter.com/_LawrenceHo" target="_blank">
          <div className="delay-50 group flex h-8 w-8 items-center justify-center rounded-md border-0 bg-white drop-shadow-md transition duration-300 ease-in-out hover:bg-[#4682B4] dark:bg-[#111A2E] dark:hover:bg-[#4682B4]">
            <FaTwitter className=" text-gray-700 group-hover:text-white dark:text-[#4682B4] dark:group-hover:text-white" />
          </div>
        </Link>
        <Link href="https://github.com/lawrencejbho" target="_blank">
          <div className="delay-50 group flex h-8 w-8 items-center justify-center rounded-md border-0 bg-white drop-shadow-md transition duration-300 ease-in-out hover:bg-[#4682B4] dark:bg-[#111A2E] dark:hover:bg-[#4682B4]">
            <FaGithub className=" text-gray-700 group-hover:text-white dark:text-[#4682B4] dark:group-hover:text-white" />
          </div>
        </Link>
      </motion.div>
      <motion.div
        className="flex cursor-pointer flex-row items-center text-gray-300"
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          url="/#contact"
        /> */}

        <div className="flex items-center justify-center space-x-3">
          {colorMode === "dark" ? (
            <BiMoon
              onClick={() =>
                setColorMode(colorMode === "dark" ? "light" : "dark")
              }
              className="mt-[.3rem] cursor-pointer text-xl text-gray-700 hover:text-[#4682B4] dark:text-white dark:hover:text-[#4682B4]"
            />
          ) : (
            <BiSun
              onClick={() =>
                setColorMode(colorMode === "dark" ? "light" : "dark")
              }
              className="mt-[.3rem] cursor-pointer text-xl text-gray-700 hover:text-[#4682B4] dark:text-white dark:hover:text-[#4682B4]"
            />
          )}

          <a href="#contact">
            <div className="group flex items-center justify-center space-x-2 pt-2 pr-4 transition duration-300 ease-in-out ">
              <HiOutlineMail className="text-2xl text-gray-700 group-hover:text-[#4682B4] dark:text-white" />

              <div className="hidden text-sm font-medium uppercase text-gray-700 group-hover:text-[#4682B4] dark:text-white md:inline-flex">
                Contact
              </div>
            </div>
          </a>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
