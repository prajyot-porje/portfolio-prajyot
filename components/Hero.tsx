import Image from "next/image";
import React from "react";
import { FlipWords } from "./ui/flip-words";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Hero = () => {
  const words = [" Developer", " Designer", "  Creator"];
  const typewriterWords = [
    {
      text: "Hello !",
      className: "text-white font-zentry text-5xl sm:text-6xl",
    },
    {
      text: "I'm",
      className: "text-white font-zentry text-5xl sm:text-6xl",
    },
    {
      text: "Prajyot",
      className: "text-white font-zentry text-5xl sm:text-6xl",
    },

  ];
  return (
    <div className="hero-background h-screen w-screen overflow-hidden">
      <div className="h-[50rem] w-full dark:bg-grid-black/[0.2] bg-grid-white/[0.08] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="h-full w-full flex flex-col justify-end items-center">
          <div className="font-bold text-white text-center text-5xl sm:text-6xl">
            <TypewriterEffectSmooth words={typewriterWords} />
            <div className="">
              <FlipWords className="text-[#37d2ee]" words={words} />
            </div>
          </div>
            <div className="clip-path-circle mt-4">
            <Image
              src="/image.png"
              alt="moon"
              width={800}
              height={500}
              className="w-full h-auto"
            />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
