import Image from "next/image";
import React from "react";
import { FlipWords } from "./ui/flip-words";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Meteors from "./ui/meteors";

const Hero = () => {
  const words = [" Developer", " Designer", "  Creator"];
  const typewriterWords = [
    {
      text: "Hello !",
      className: "text-white font-zentry text-7xl sm:text-7xl",
    },
    {
      text: "I'm",
      className: "text-white font-zentry text-7xl sm:text-7xl",
    },
    {
      text: "Prajyot",
      className: "text-white font-zentry text-7xl sm:text-7xl",
    },

  ];
  return (
    <div className="hero-background relative h-screen w-screen center overflow-hidden">
      <Meteors number={30} />
          <div className="font-bold text-white text-center text-5xl sm:text-6xl">
            <TypewriterEffectSmooth words={typewriterWords} />
            <div className="">
              <FlipWords className="text-black" words={words} />
            </div>
          </div>
            <div className="clip-path-circle mt-4">

            </div>
        </div>

  );
};

export default Hero;
