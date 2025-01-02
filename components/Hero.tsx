import Image from "next/image";
import React from "react";
import { FlipWords } from "./ui/flip-words";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGeneratingEffect";
import { SparklesCore } from "./ui/sparkles";
import Meteors from "./ui/meteors";
import RetroGrid from "./ui/retro-grid";

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
    <div className="h-screen w-screen purple overflow-hidden">
      <div className="h-screen w-screen absolute">
      <RetroGrid />
      </div>
      <div className="clip-path-circle absolute -right-0   -rotate-90">
            <Image
              src="/image.png"
              alt="moon "
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>

      <div className="h-[50rem] w-full relative flex items-center justify-center">
      <div className="z-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-20 left-52 h-[70vh] w-[50vw]" fill="blue" />
      </div>
      <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={10}
          speed={0.5}
          className="w-full h-full absolute"
          particleColor="#FFFFFF"
        />
        <Meteors/>
        

        <div className="h-full w-full flex  justify-end items-center">
          <div className="font-bold text-white text-center text-5xl sm:text-6xl">
            <TextGenerateEffect
              className="z-10 text-center text-white text-[40px] md:text-5xl lg:text-8xl"
              words="Hi there! I’m Prajyot "
            />

            <div className="">
              <FlipWords className=" md:text-5xl lg:text-8xl text-[#37d2ee]" words={words} />
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
