"use client";
import React, { useRef } from "react";
import Skills from "./ui/bento-skills";
import Bio from "./ui/bento-bio";
import Profile from "./ui/bento-profiles";
import Hobbies from "./ui/bento-hobbies";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagicCard } from "./ui/magic-card";

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.66], [3, 2, 1]);

  return (
    <div
      ref={ref}
      className="min-h-[200vh] w-screen bg-light dark:bg-dark flex flex-col items-center"
    >
      <motion.div
        style={{
          position: 'sticky',
          top: 0,
          y: useTransform(scrollYProgress, [0, 1], ['0vh', '100vh']),
        }}
        className="h-screen flex items-center"
      >
        <div className="grid h-screen w-full grid-cols-4 grid-rows-4 gap-3 p-[85px] xl:m-32 lg:m-20 md:m-10 sm:m-5">
          <motion.div
            initial={{ x: "-40%", opacity: 0 }}
            animate={{ x: 0, opacity: 100 }}
            transition={{ duration: 0.8, ease: "linear", repeat: 0 , offset :['start center' , 'end start'] }}
            className=" rounded-2xl col-span-1 row-span-2"
          >
            <MagicCard
              bg="bg-indigo-50 dark:bg-[#252526]"
              className="cursor-pointer shadow-2xl"
            >
              <Profile />
            </MagicCard>
          </motion.div>

          <MagicCard
            bg="bg-purple-50  dark:bg-[#252526]"
            className="cursor-pointer shadow-2xl rounded-2xl col-span-1 row-span-1"
          ></MagicCard>

          <motion.div
            initial={{ y: "-40%", opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            
            transition={{ duration: 0.8, ease: "linear", repeat: 0 }}
            className="rounded-2xl col-span-2 row-span-1"
          >
            <MagicCard
              bg="bg-indigo-50 dark:bg-[#252526]"
              className="cursor-pointer shadow-2xl "
            >
              <Bio />
            </MagicCard>
          </motion.div>

          <motion.div
            style={{ scale }}
            className="rounded-2xl sticky col-span-2 row-span-2 z-30"
          >
            <MagicCard
              bg="bg-teal-50 dark:bg-red-400 g-[#252526]"
              className=" cursor-pointer shadow-2xl "
            ></MagicCard>
          </motion.div>

          <motion.div
            initial={{ x: "40%", opacity: 0 }}
            animate={{ x: 0, opacity: 100 }}
            transition={{ duration: 0.8, ease: "linear", repeat: 0 }}
            className="rounded-2xl col-span-1 row-span-2 z-10"
          >
            <MagicCard
              bg="bg-purple-50  dark:bg-[#252526]"
              className="cursor-pointer  shadow-2xl"
            >
              <Hobbies />
            </MagicCard>
          </motion.div>

          <MagicCard
            bg="bg-purple-50  dark:bg-[#252526]"
            className="cursor-pointer shadow-2xl rounded-2xl col-span-1 row-span-1"
          ></MagicCard>

          <motion.div
            initial={{ y: "40%", opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{ duration: 0.8, ease: "linear", repeat: 0 }}
            className="rounded-2xl col-span-4 row-span-1 z-10"
          >
            <MagicCard
              bg="bg-indigo-50 dark:bg-[#252526]"
              className="cursor-pointer shadow-2xl "
            >
              <Skills />
            </MagicCard>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;

