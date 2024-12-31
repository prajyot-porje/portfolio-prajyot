import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="h-screen w-screen try-background flex items-start justify-center">
      <div className="h-[50rem] w-full dark:bg-grid-black/[0.2] bg-grid-white/[0.08] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      </div>
    </div>
  );
};

export default About;
