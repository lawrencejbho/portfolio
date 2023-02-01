// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import TypescriptIcon from "../../public/typescript.png";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

// type Props = {};

// function Projects({}: Props) {
//   const projects = [1, 2, 3, 4, 5];

//   function slideLeft() {
//     const slider = document.getElementById("slider") as HTMLElement;
//     slider.scrollLeft = slider.scrollLeft - 500;
//     console.log(slider.scrollLeft);
//   }

//   function slideRight() {
//     const slider = document.getElementById("slider") as HTMLElement;
//     slider.scrollLeft = slider.scrollLeft + 500;
//     console.log(slider.scrollLeft);
//   }

//   function logScroll() {
//     const slider = document.getElementById("slider") as HTMLElement;

//     console.log(slider?.scrollLeft);
//   }

//   return (
//     <div>
//       <motion.div
//         initial={{ opacity: 0 }}
//         transition={{ duration: 1.5 }}
//         whileInView={{ opacity: 1 }}
//         className="relative z-0 mx-auto flex h-screen max-w-full flex-row items-center justify-evenly overflow-hidden text-left"
//       >
//         <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
//           Projects
//         </h3>
//         <ChevronLeftIcon
//           onClick={slideLeft}
//           className="z-40 ml-20 w-10 cursor-pointer opacity-50 hover:opacity-100"
//         />
//         <div
//           id="slider"
//           onScroll={logScroll}
//           className="scroll relative  z-20 flex w-full snap-x snap-mandatory overflow-x-scroll scroll-smooth overflow-y-hidden scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
//         >
//           {projects.map((project, index) => (
//             <div
//               className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 overflow-hidden p-20 md:p-44"
//               key={index}
//             >
//               <motion.div
//                 initial={{ y: -300, opacity: 0 }}
//                 transition={{ duration: 1 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <Image src={TypescriptIcon} alt="test" className="w-40" />
//               </motion.div>
//               <div className="max-w-6xl space-y-10 px-0 md:px-10">
//                 <h4 className="text-center text-4xl font-semibold">
//                   <span className="underline decoration-[#f7AB0A]/50">
//                     Case study {index + 1} of {projects.length}:
//                   </span>
//                   UPS clone
//                 </h4>
//                 <p className="text-center text-lg md:text-left">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
//                   luctus, mauris non laoreet ullamcorper, lorem elit semper
//                   enim, sed sodales ligula tortor ut urna. Quisque tempus sem id
//                   ex placerat scelerisque. Suspendisse eros quam, aliquet
//                   tristique feugiat sit amet, aliquam mattis nulla. Aenean
//                   pulvinar sodales ipsum a venenatis. Mauris non facilisis leo,
//                   vulputate maximus nulla. Vestibulum a tincidunt tellus, at
//                   condimentum ex. Vivamus in bibendum ligula, id finibus erat.
//                   Mauris sit amet ante nisl. Donec vulputate, nisi ut tempor
//                   lobortis, nisi ipsum rhoncus ligula, nec pharetra ex lectus ut
//                   arcu. Cras mi purus, tristique vitae nibh id, aliquam sagittis
//                   metus.
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <ChevronRightIcon
//           onClick={slideRight}
//           className="z-40 mr-20 w-10 cursor-pointer opacity-50 hover:opacity-100"
//         />

//         <div className="absolute top-[30%] left-0 h-[300px] w-full -skew-y-12 bg-[#f7AB0A]/10" />
//       </motion.div>
//     </div>
//   );
// }

// export default Projects;
