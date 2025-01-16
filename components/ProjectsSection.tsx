import { Suez_One } from "next/font/google";
import React from "react";
import ProjectCard from "./ui/projectCard";

const boxFont = Suez_One({
  variable: "--font-suez-one",
  subsets: ["latin"],
  weight: "400",
});

const ProjectsSection = () => {
  return (
    <div className="h-screen w-screen bg-light dark:bg-dark">
      <div
        className={`${boxFont.className}  text-9xl font-bold text-center pr-80`}
      >
        PROJECTS
      </div>
      <div className="h-28"></div>
      <ProjectCard/>
    </div>
  );
};

export default ProjectsSection;
