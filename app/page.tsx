"use client";
import type React from "react";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  GraduationCap,
  Code2,
  ArrowRight,
  Palette,
  ExternalLink,
  Download,
} from "lucide-react";
import Image from "next/image";
import { TbBrandLeetcode } from "react-icons/tb";
import SkillsSection from "@/components/custom/Skills";
import ProjectsShowcase from "@/components/custom/Projects";
import { introPages } from "@/constants";
import { Button } from "@/components/ui/button";

const pageVariants = {
  exit: (custom: number) => {
    const exitAnimations = [
      { x: -window.innerWidth, y: -200, rotate: -15, scale: 0.8 },
      { x: 400, y: window.innerHeight, rotate: 25, scale: 0.6 },
      { x: window.innerWidth, y: -300, rotate: 30, scale: 0.8 },
      { x: 400, y: -window.innerHeight, rotate: -20, scale: 0.6 },
    ];
    return exitAnimations[custom] || exitAnimations[0];
  },
};

const topSkills = [
  { name: "Next.js", img: "/assets/nextjs.svg" },
  { name: "TypeScript", img: "/assets/typescriptlang.svg" },
  { name: "Node.js", img: "/assets/nodejs.svg" },
];

export default function page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [showBento, setShowBento] = useState(false);
  const [bentoAnimationStage, setBentoAnimationStage] = useState(0);
  const [shouldShowIntro, setShouldShowIntro] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bentoY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bentoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);
  const bentoOpacity = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [1, 0.8, 0.6]
  );

  useEffect(() => {
    setShouldShowIntro(true);
  }, []);

  useEffect(() => {
    if (shouldShowIntro) {
      if (currentPage < introPages.length) {
        const timer = setTimeout(() => {
          setCurrentPage((prev) => prev + 1);
        }, 2000);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setShowBento(true);
          setTimeout(() => setBentoAnimationStage(1), 500);
          setTimeout(() => setBentoAnimationStage(2), 2000);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [currentPage, shouldShowIntro]);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Prajyot Resume.pdf";
    link.download = "Prajyot_Porje_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSkillsNavigation = () => {
    sessionStorage.setItem("skipIntro", "true");
    scrollToSection(skillsRef);
  };

  const handleProjectsNavigation = () => {
    sessionStorage.setItem("skipIntro", "true");
    scrollToSection(projectsRef);
  };

  if (shouldShowIntro && !showBento) {
    return (
      <div className="intro-container fixed inset-0 w-screen h-screen">
        {introPages.map((page, index) => (
          <AnimatePresence key={page.id}>
            {index >= currentPage && (
              <motion.div
                key={page.id}
                custom={index}
                variants={pageVariants}
                animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
                exit="exit"
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  type: "tween",
                }}
                className={`fixed inset-0 w-screen h-screen flex items-center justify-center ${page.bgColor} overflow-hidden`}
                style={{ zIndex: introPages.length - index }}
              >
                <div className="text-center relative z-10 px-4">
                  <p
                    className={`${page.accentColor} text-lg mb-8 font-light tracking-wider`}
                  >
                    {page.description}
                  </p>
                  <div className="space-y-4">
                    <h1
                      className={`text-6xl sm:text-8xl md:text-9xl font-black ${page.textColor} tracking-tighter transform -skew-y-2`}
                    >
                      {page.title}
                    </h1>
                    <h2
                      className={`text-4xl sm:text-6xl md:text-7xl font-black ${page.textColor} tracking-tighter transform skew-y-1`}
                    >
                      {page.subtitle}
                    </h2>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Bento Grid Section */}
      <motion.div
        style={{
          y: bentoY,
          scale: bentoScale,
          opacity: bentoOpacity,
        }}
        className="
          min-h-screen
          h-auto
          bg-gradient-to-br from-emerald-50 to-teal-50
          overflow-x-hidden
          relative
          md:min-h-screen
          md:h-screen
          md:sticky
          md:top-0
        "
      >
        <div className="w-full md:h-screen h-[120vh] p-2 sm:p-4 md:p-8">
          <div className="w-full h-full max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: bentoAnimationStage >= 1 ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="grid grid-cols-4 grid-rows-16 md:grid-cols-12 md:grid-rows-8 gap-2 sm:gap-4 w-full h-full overflow-hidden"
            >
              {/* Header */}
              <motion.div
                initial={{
                  opacity: !shouldShowIntro ? 1 : 0,
                  y: !shouldShowIntro ? 0 : -50,
                }}
                animate={{
                  opacity: bentoAnimationStage >= 2 ? 1 : 0,
                  y: bentoAnimationStage >= 2 ? 0 : -50,
                }}
                transition={{
                  delay: !shouldShowIntro ? 0 : 0.1,
                  duration: 0.6,
                }}
                className="col-span-4 row-span-1 md:col-span-12 md:row-span-1 bg-emerald-800 rounded-xl sm:rounded-2xl p-3 sm:p-6 flex items-center justify-between overflow-hidden"
              >
                <div>
                  <h1 className="text-lg sm:text-2xl font-bold text-white">
                    Prajyot Porje
                  </h1>
                  <p className="text-emerald-200 text-sm">
                    Full Stack Developer
                  </p>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                </div>
              </motion.div>

              {/* Main Quote */}
              <motion.div
                initial={{
                  opacity: !shouldShowIntro ? 1 : 0,
                  x: !shouldShowIntro ? 0 : -50,
                }}
                animate={{
                  opacity: bentoAnimationStage >= 2 ? 1 : 0,
                  x: bentoAnimationStage >= 2 ? 0 : -50,
                }}
                transition={{
                  delay: !shouldShowIntro ? 0 : 0.2,
                  duration: 0.6,
                }}
                className="col-span-4 row-span-2 md:col-span-5 md:row-span-3 bg-emerald-700 rounded-xl sm:rounded-2xl p-4 sm:p-8 flex flex-col justify-center overflow-hidden"
              >
                <h2 className="text-xl sm:text-3xl font-light text-white leading-tight mb-2 sm:mb-4">
                  Crafting digital experiences through
                  <span className="font-bold text-emerald-200">
                    {" "}
                    innovative design
                  </span>
                </h2>
                <p className="text-emerald-300 text-xs sm:text-sm">
                  Blending creativity with technology to build meaningful
                  solutions
                </p>
              </motion.div>

              {/* Profile */}
              <motion.div
                initial={
                  !shouldShowIntro
                    ? { opacity: 1, scale: 1 }
                    : {
                        opacity: 1,
                        scale: 2,
                        x: "calc(-66.666667% + 50%)",
                        y: "calc(-25% + 50%)",
                        zIndex: 50,
                      }
                }
                animate={{
                  opacity: bentoAnimationStage >= 1 ? 1 : 0,
                  scale: 1,
                  x: 0,
                  y: 0,
                  zIndex: 1,
                }}
                transition={{
                  delay: !shouldShowIntro ? 0 : 0,
                  duration: !shouldShowIntro ? 0.6 : 1.5,
                  ease: "easeInOut",
                }}
                onAnimationComplete={() => {
                  if (shouldShowIntro && bentoAnimationStage === 1) {
                    setTimeout(() => setBentoAnimationStage(2), 100);
                  }
                }}
                className="col-span-4 row-span-3 md:col-span-3 md:row-span-3 bg-[#faf9f9] rounded-xl sm:rounded-2xl overflow-hidden"
              >
                <Image
                  src="/assets/profile.jpg"
                  alt="Profile"
                  width={600}
                  height={800}
                  className="w-full h-full object-contain rounded-lg md:object-cover"
                />
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{
                  opacity: !shouldShowIntro ? 1 : 0,
                  x: !shouldShowIntro ? 0 : 50,
                }}
                animate={{
                  opacity: bentoAnimationStage >= 2 ? 1 : 0,
                  x: bentoAnimationStage >= 2 ? 0 : 50,
                }}
                transition={{
                  delay: !shouldShowIntro ? 0 : 0.4,
                  duration: 0.6,
                }}
                className="col-span-4 row-span-2 md:col-span-4 md:row-span-2 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl sm:rounded-2xl p-4 sm:p-3 sm:px-4 overflow-hidden relative"
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-teal-500/30 rounded-lg backdrop-blur-sm">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Education
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 px-4 border border-white/20">
                      <div className="flex items-start justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-white text-base sm:text-lg font-bold ">
                            Bachelor of Engineering
                          </h4>
                        </div>
                        <span className="text-teal-100 text-sm font-medium">
                          2023 - 2027
                        </span>
                      </div>
                      <p className="text-teal-100 text-sm font-medium mb-1">
                        Artificial Intelligence & Machine Learning
                      </p>
                      <p className="text-teal-200 text-xs">
                        PES Modern College Of Engineering, Pune
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Projects */}
              <motion.div
                initial={{
                  opacity: !shouldShowIntro ? 1 : 0,
                  x: !shouldShowIntro ? 0 : -50,
                }}
                animate={{
                  opacity: bentoAnimationStage >= 2 ? 1 : 0,
                  x: bentoAnimationStage >= 2 ? 0 : -50,
                }}
                transition={{
                  delay: !shouldShowIntro ? 0 : 0.7,
                  duration: 0.6,
                }}
                className="col-span-4 row-span-3 md:col-span-4 md:row-span-3 bg-gradient-to-br from-purple-700 to-purple-800 rounded-xl sm:rounded-2xl p-4 sm:p-4 overflow-hidden relative"
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-28 h-28 bg-white rounded-full -translate-y-14 -translate-x-14" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-white rounded-full translate-y-10 translate-x-10" />
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-600/30 rounded-lg backdrop-blur-sm">
                      <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Featured Project
                    </h3>
                  </div>

                  <div className="flex-1">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 mb-2">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="text-white text-base sm:text-lg font-bold mb-1">
                            DevFlow: AI Website Builder
                          </h4>
                          <div className="flex flex-wrap gap-2 mb-1">
                            {["Next.js", "TypeScript", "Gemini", "Clerk"].map(
                              (tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-purple-600/40 text-purple-100 text-xs rounded-md font-medium"
                                >
                                  {tech}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                        <Button
                          onClick={() =>
                            window.open(
                              "https://dev-flow-lime.vercel.app",
                              "_blank"
                            )
                          }
                          className="p-2 bg-purple-600/30 rounded-lg backdrop-blur-sm hover:bg-purple-600/50 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-purple-200" />
                        </Button>
                      </div>
                      <p className="text-purple-200 text-sm leading-relaxed">
                        AI-powered website builder with intelligent design
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleProjectsNavigation}
                    className="flex items-center justify-center gap-2 text-purple-200 hover:text-white text-sm group transition-all duration-200 w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl py-3 border border-white/20 hover:border-white/30"
                  >
                    <span className="font-medium">View All Projects</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              {/* Skills */}
              <motion.div
                initial={{
                  opacity: !shouldShowIntro ? 1 : 0,
                  y: !shouldShowIntro ? 0 : 50,
                }}
                animate={{
                  opacity: bentoAnimationStage >= 2 ? 1 : 0,
                  y: bentoAnimationStage >= 2 ? 0 : 50,
                }}
                transition={{
                  delay: !shouldShowIntro ? 0 : 0.5,
                  duration: 0.6,
                }}
                className="col-span-4 row-span-2 md:col-span-4 md:row-span-2 bg-slate-800 rounded-xl sm:rounded-2xl p-3 sm:p-6 overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-2 sm:mb-4">
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300" />
                  <h3 className="text-sm sm:text-lg font-semibold text-white">
                    Skills
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {topSkills
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: !shouldShowIntro ? 0 : 0.6 + index * 0.1,
                          duration: 0.3,
                        }}
                        className="bg-slate-600 rounded-lg p-2 text-center hover:bg-slate-500 transition-colors"
                      >
                        <span className="text-white text-sm font-medium">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                </div>

                <button
                  onClick={handleSkillsNavigation}
                  className="flex items-center gap-1 text-slate-200 hover:text-white text-xs sm:text-sm group transition-colors w-full justify-center bg-slate-700 hover:bg-slate-600 rounded-lg py-2"
                >
                  <span>View More Skills</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{
                  opacity: !shouldShowIntro ? 1 : 0,
                  scale: !shouldShowIntro ? 1 : 0.8,
                }}
                animate={{
                  opacity: bentoAnimationStage >= 2 ? 1 : 0,
                  scale: bentoAnimationStage >= 2 ? 1 : 0.8,
                }}
                transition={{
                  delay: !shouldShowIntro ? 0 : 0.6,
                  duration: 0.6,
                }}
                className="col-span-4 row-span-3 md:col-span-4 md:row-span-2 bg-amber-600 rounded-xl sm:rounded-2xl p-3 sm:p-5 overflow-hidden"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-1">
                  Let's Connect
                </h3>
                <div className="space-y-1 sm:space-y-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-amber-200" />
                    <span className="text-amber-100 text-xs sm:text-base">
                      porjeprajyot@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-amber-200" />
                    <span className="text-amber-100 text-xs sm:text-base">
                      Pune, Maharashtra, India
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleDownloadResume}
                  className="flex items-center gap-1 text-amber-100 hover:text-white text-xs sm:text-sm group transition-colors w-full justify-center bg-amber-700 hover:bg-amber-800 rounded-lg py-2"
                >
                  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Download Resume</span>
                </button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{
                  opacity: !shouldShowIntro ? 1 : 0,
                  y: !shouldShowIntro ? 0 : 50,
                }}
                animate={{
                  opacity: bentoAnimationStage >= 2 ? 1 : 0,
                  y: bentoAnimationStage >= 2 ? 0 : 50,
                }}
                transition={{
                  delay: !shouldShowIntro ? 0 : 0.8,
                  duration: 0.6,
                }}
                className="col-span-4 row-span-1 md:col-span-12 md:row-span-1 bg-slate-700 rounded-xl sm:rounded-2xl p-2 sm:p-4 flex items-center justify-between overflow-hidden"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <LinkPreview url="https://github.com/prajyot-porje">
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300 hover:text-white cursor-pointer transition-colors" />
                  </LinkPreview>
                  <LinkPreview url="https://leetcode.com/u/prajyot-porje/">
                    <TbBrandLeetcode className="w-5 h-5 sm:w-7 sm:h-7 text-slate-300 hover:text-white cursor-pointer transition-colors" />
                  </LinkPreview>
                  <LinkPreview url="https://www.linkedin.com/in/prajyot-porje/">
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300 hover:text-white cursor-pointer transition-colors" />
                  </LinkPreview>
                </div>

                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-xs sm:text-sm">Available for Work</span>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        ref={skillsRef}
        className="relative z-10 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <SkillsSection />
      </motion.div>

      {/* Projects Section  */}
      <motion.div
        ref={projectsRef}
        className="relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <ProjectsShowcase />
      </motion.div>
    </div>
  );
}
