import { Suez_One } from "next/font/google";
import React from "react";
import Skills from "./ui/bento-skills";
import Bio from "./ui/bento-bio";
import Profile from "./ui/bento-profiles";
import Image from "next/image";
import Hobbies from "./ui/bento-hobbies";
const boxFont = Suez_One({
  variable: "--font-suez-one",
  subsets: ["latin"],
  weight: "400",
});
const AboutSection = () => {
  const skills1 = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
  ];

  const img = [];
  return (
    <div className="h-screen w-screen bg-light dark:bg-dark flex justify-center items-center">
      <div className="grid h-full w-full grid-cols-4 grid-rows-4 gap-3 p-[85px] xl:m-32 lg:m-20 md:m-10 sm:m-5">
        
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-gray-400 rounded-2xl col-span-1 row-span-2">
          <Profile/>
        </div>

        <div className="bg-teal-50 dark:bg-teal-900 border-2 border-gray-400 rounded-2xl col-span-1 row-span-1">
          
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-900 border-2 border-gray-400 rounded-2xl col-span-2 row-span-1">
        <Bio/>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900 border-2 border-gray-400 rounded-2xl col-span-2 row-span-2 flex justify-center ">
          <Image
            src="/dev.svg"
            alt="myimg"
            height={350}
            width={350}
            className="z-10"
          />
          <div
            className={`${boxFont.className} text-purple-800 dark:text-purple-100 text-9xl font-extrabold  absolute text-center`}
          >
            Prajyot
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-gray-400 rounded-2xl col-span-1 row-span-2">
          <Hobbies/>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-900 border-2 border-gray-400 rounded-2xl col-span-1 row-span-1">

        </div>

        <div className="bg-teal-50 dark:bg-teal-900 border-2 border-gray-400  rounded-2xl col-span-4 row-span-1">
          <Skills/>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
