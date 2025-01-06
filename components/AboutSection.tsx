import { Suez_One } from "next/font/google";
import React from "react";
const boxFont = Suez_One({
  variable: "--font-suez-one",
  subsets: ["latin"],
  weight: "400",
});
const AboutSection = () => {
  return (
    <div className="h-screen w-screen light dark:bg-[#581485] flex justify-center items-center">
      <div className="grid h-full w-full grid-cols-4 grid-rows-3 gap-3 p-20 xl:m-64 lg:m-32 md:m-16 sm:m-8">
        <div className="bg-gradient-to-r from-[#9ab5f3] to-[#002a5e] flex flex-col justify-center items-center   rounded-2xl col-span-1 row-span-2">
          <div className="flex flex-col justify-center  items-center gap-2 mx-5 mt-3">
            <div className="bg-blue-600 rounded-sm w-full "> Next.JS</div>
            <div className="bg-white rounded-lg w-fit"> Next.JS</div>
            <div className="bg-white rounded-lg w-fit"> Next.JS</div>
            <div className="bg-white rounded-lg w-fit"> Next.JS</div>
            <div className="bg-white rounded-lg w-fit"> Next.JS</div>
            <div className="bg-white rounded-lg w-fit"> Next.JS</div>
            <div className="bg-white rounded-lg w-fit"> Next.JS</div>
            <div className="bg-white rounded-lg w-fit"> Next.JS</div>
            <div className="bg-white rounded-lg w-fit"> Next.JS</div>
          </div>
        </div>
        <div className="bg-gradient-to-t from-[#4489ff] to-[#bb00ff] rounded-2xl col-span-1 row-span-1"></div>
        <div className="bg-gradient-to-r from-[#f09ef1] to-[#9689f9] rounded-2xl col-span-2 row-span-1">
          <div className="text-base  font-bold p-5">
            I’m a BE-AIML student with a passion for web development and design.
            Alongside creating intuitive and visually appealing user
            experiences, I have a strong foundation in Data Structures and
            Algorithms (DSA).
          </div>
        </div>
        <div className="bg-[#6279ff] rounded-2xl col-span-2 row-span-1 flex justify-center ">
          <img
            src="/dev.svg"
            alt="myimg"
            height={230}
            width={230}
            className="z-10"
          />
          <div
            className={`${boxFont.className} text-8xl font-extrabold  absolute text-center`}
          >
            Prajyot
          </div>
        </div>
        <div className="bg-[#8685ef] rounded-2xl col-span-1 row-span-1"></div>
        <div className="bg-[#7fd1ae] rounded-2xl col-span-1 row-span-1"></div>
        <div className="bg-gradient-to-r from-[#e86beb] to-[#f62424] rounded-2xl col-span-1 row-span-1"></div>
        <div className="bg-gradient-to-r from-[#6b70fd] to-[#8f0dd5] rounded-2xl col-span-2 row-span-1"></div>
      </div>
    </div>
  );
};

export default AboutSection;
