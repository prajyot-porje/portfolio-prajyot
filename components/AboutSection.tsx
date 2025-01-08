import { Suez_One } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";
import { Progress } from "./ui/progress";
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
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-gray-400 rounded-2xl col-span-1 row-span-2"></div>

        <div className="bg-teal-50 dark:bg-teal-900 border-2 border-gray-400 rounded-2xl col-span-1 row-span-1"></div>

        <div className="bg-indigo-50 dark:bg-indigo-900 border-2 border-gray-400 rounded-2xl col-span-2 row-span-1">
          <div className=" text-indigo-800 dark:text-indigo-100 pl-4 pt-2 text-2xl font-semibold">
            Bio
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900 border-2 border-gray-400 rounded-2xl col-span-2 row-span-2 flex justify-center ">
          <img
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

        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-gray-400 rounded-2xl col-span-1 row-span-2"></div>

        <div className="bg-indigo-50 dark:bg-indigo-900 border-2 border-gray-400 rounded-2xl col-span-1 row-span-1"></div>

        <div className="bg-teal-50 dark:bg-teal-900 border-2 border-gray-400  rounded-2xl col-span-4 row-span-1">
          <div className=" text-teal-800 dark:text-teal-100 pl-4 pt-2 text-2xl font-semibold">
            Skills
          </div>
          <div className="flex  w-full">
            {/* <div className="w-32">
              {skills1.map((skill) => (
                <div key={skill.name}>
                  <div className="flex  justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress
                    value={skill.level}
                    className="h-2 bg-teal-200 dark:bg-teal-700"
                  />
                </div>
              ))}
            </div> */}
            <div className="flex  px-4   gap-4">
              <div className="h-10 w-24  ">
                <img
                  src="/next-light.png"
                  alt="next"
                  className="h-full rounded-md w-full border-[1px] border-black"
                />{" "}
              </div>
              <div className="h-10 w-24  ">
                <img
                  src="/next-dark.png"
                  alt="next"
                  className="h-full rounded-md w-full border-[1px] border-black"
                />{" "}
              </div>
              <div className="h-10 w-24  ">
                <img
                  src="/react-light.png"
                  alt="next"
                  className="h-full rounded-md w-full border-[1px] border-black"
                />{" "}
              </div>
              <div className="h-10 w-24  ">
                <img
                  src="/react-dark.png"
                  alt="next"
                  className="h-full rounded-md w-full border-[1px] border-black"
                />{" "}
              </div>
              <div className="h-10 w-26  ">
                <img
                  src="/tailwind-light.png"
                  alt="next"
                  className="h-full rounded-md w-full border-[1px] border-black"
                />{" "}
              </div>
              <div className="tailwind-light  dark:tailwind-dark rounded-md border-[1px] border-black ">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
