"use client";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import { useTheme } from "next-themes";
import React from "react";

const page = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <main
      className={`${isDark ? "dark" : "light"} text-foreground bg-background`}
    >
      <div className="overflow-hidden  scroll">
        <div className="z-30">
          <HeroSection />
        </div>
        <div className="z-10">
        <AboutSection />
        </div>
        <ProjectsSection />
        <div className="fixed z-40 bottom-0 left-1/2 pb-5 transform -translate-x-1/2">
          <Navbar />
        </div>
      </div>
    </main>
  );
};

export default page;
