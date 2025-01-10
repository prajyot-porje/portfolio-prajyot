import { Suez_One } from "next/font/google";
import React from "react";
import Skills from "./ui/bento-skills";
import Bio from "./ui/bento-bio";
import Profile from "./ui/bento-profiles";
import Image from "next/image";
import Hobbies from "./ui/bento-hobbies";
import { motion } from "framer-motion";
import { MagicCard } from "./ui/magic-card";

const boxFont = Suez_One({
  variable: "--font-suez-one",
  subsets: ["latin"],
  weight: "400",
});
const AboutSection = () => {
  return (
    <div className="h-screen w-screen bg-light dark:bg-dark flex justify-center items-center">
      <div className="grid h-full w-full grid-cols-4 grid-rows-4 gap-3 p-[85px] xl:m-32 lg:m-20 md:m-10 sm:m-5">
        <motion.div
          initial={{ x: "-40%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "backIn", repeat: 0 }}
          className=" rounded-2xl col-span-1 row-span-2"
        >
          <MagicCard bg="bg-indigo-50 dark:bg-background" className="cursor-pointer shadow-2xl">
            <Profile />
          </MagicCard>
        </motion.div>

        <MagicCard bg="bg-purple-50  dark:bg-background" className="cursor-pointer shadow-2xl rounded-2xl col-span-1 row-span-1"></MagicCard>

        <MagicCard bg="bg-indigo-50 dark:bg-background" className="cursor-pointer shadow-2xl rounded-2xl col-span-2 row-span-1">
          <Bio />
        </MagicCard>
        
        <MagicCard bg="bg-teal-50 dark:bg-background"  className=" cursor-pointer shadow-2xl rounded-2xl col-span-2 row-span-2 flex justify-center items-center ">
          <div
            className={`${boxFont.className} absolute  z-10 text-gray-600 dark:text-white text-8xl font-extrabold`}
          >
            Prajyot
          </div>
            <Image
              src="/dev.svg"
              alt="myimg"
              height={334}
              width={334}
              className="z-30 relative"
            />
          </MagicCard>

        <MagicCard bg="bg-purple-50  dark:bg-background" className="cursor-pointer shadow-2xl rounded-2xl col-span-1 row-span-2">
            <Hobbies />
          </MagicCard>


        <MagicCard bg="bg-purple-50  dark:bg-background" className="cursor-pointer shadow-2xl rounded-2xl col-span-1 row-span-1">
          
        </MagicCard>

        <MagicCard bg="bg-indigo-50 dark:bg-background" className="cursor-pointer shadow-2xl rounded-2xl col-span-4 row-span-1">
            <Skills />
          </MagicCard>
      </div>
    </div>
  );
};

export default AboutSection;
