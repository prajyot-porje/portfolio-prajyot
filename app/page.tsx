"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { LinkPreview } from "@/components/ui/link-preview"
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  GraduationCap,
  School,
  Code2,
  ArrowRight,
  Palette,
  ExternalLink,
  Download,
} from "lucide-react"
import Image from "next/image"
import { TbBrandLeetcode } from "react-icons/tb"
import SkillsSection from "@/components/custom/Skills"
import ProjectsShowcase from "@/components/custom/Projects"
import { introPages } from "@/constants"



const pageVariants = {
  exit: (custom: number) => {
    const exitAnimations = [
      { x: -window.innerWidth, y: -200, rotate: -15, scale: 0.8 },
      { x: window.innerWidth, y: 200, rotate: 25, scale: 0.9 },
      { x: -window.innerWidth, y: 300, rotate: -20, scale: 0.7 },
      { x: window.innerWidth, y: -300, rotate: 30, scale: 0.8 },
    ]
    return exitAnimations[custom] || exitAnimations[0]
  },
}

const topSkills = [
  { name: "Next.js", img: "/assets/nextjs.svg" },
  { name: "TypeScript", img: "/assets/typescriptlang.svg" },
  { name: "Node.js", img: "/assets/nodejs.svg" },
]

const projects = [
  {
    title: "DevFlow: AI Website Builder",
    description:
      "An AI-powered website builder that generates responsive websites from simple prompts using advanced machine learning algorithms.",
    tech: ["Next.js", "TypeScript", "Gemini AI", "Clerk", "Tailwind CSS"],
    image: "/assets/projects/devflow-screenshot",
    github: "https://github.com/prajyot-porje/devflow",
    live: "https://devflow-ai.vercel.app",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    image: "/assets/projects/ecommerce-screenshot",
    github: "https://github.com/prajyot-porje/ecommerce",
    live: "https://ecommerce-demo.vercel.app",
    featured: false,
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team collaboration features.",
    tech: ["Vue.js", "Firebase", "Vuetify", "PWA"],
    image: "/assets/projects/taskmanager-screenshot",
    github: "https://github.com/prajyot-porje/taskmanager",
    live: "https://taskmanager-demo.vercel.app",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description:
      "Interactive weather dashboard with location-based forecasts and historical weather data visualization.",
    tech: ["React", "Chart.js", "OpenWeather API", "Geolocation"],
    image: "/assets/projects/weather-dashboard-screenshot",
    github: "https://github.com/prajyot-porje/weather-dashboard",
    live: "https://weather-dashboard-demo.vercel.app",
    featured: false,
  },
]

export default function page() {
  const containerRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const [currentPage, setCurrentPage] = useState(0)
  const [showBento, setShowBento] = useState(false)
  const [bentoAnimationStage, setBentoAnimationStage] = useState(0)
  const [shouldShowIntro, setShouldShowIntro] = useState(true)

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const bentoY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const bentoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9])
  const bentoOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0.6])

  useEffect(() => {
    // Simple intro logic - always show intro on first load
    setShouldShowIntro(true)
  }, [])

  useEffect(() => {
    if (shouldShowIntro) {
      if (currentPage < introPages.length) {
        const timer = setTimeout(() => {
          setCurrentPage((prev) => prev + 1)
        }, 2000)
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(() => {
          setShowBento(true)
          setTimeout(() => setBentoAnimationStage(1), 500)
          setTimeout(() => setBentoAnimationStage(2), 2000)
        }, 1000)
        return () => clearTimeout(timer)
      }
    }
  }, [currentPage, shouldShowIntro])

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Prajyot_Porje_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSkillsNavigation = () => {
    sessionStorage.setItem("skipIntro", "true")
    scrollToSection(skillsRef)
  }

  const handleProjectsNavigation = () => {
    sessionStorage.setItem("skipIntro", "true")
    scrollToSection(projectsRef)
  }

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
                  <p className={`${page.accentColor} text-lg mb-8 font-light tracking-wider`}>{page.description}</p>
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
    )
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Bento Grid Section with Scroll Animations */}
      <motion.div
        style={{
          y: bentoY,
          scale: bentoScale,
          opacity: bentoOpacity,
        }}
        className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 overflow-x-hidden sticky top-0"
      >
        <div className="w-full h-screen p-2 sm:p-4 md:p-8">
          <div className="w-full h-full max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: bentoAnimationStage >= 1 ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="grid grid-cols-12 grid-rows-8 gap-2 sm:gap-4 w-full h-full overflow-hidden"
            >
              {/* Header */}
              <motion.div
                initial={{ opacity: !shouldShowIntro ? 1 : 0, y: !shouldShowIntro ? 0 : -50 }}
                animate={{
                  opacity: bentoAnimationStage >= 2 ? 1 : 0,
                  y: bentoAnimationStage >= 2 ? 0 : -50,
                }}
                transition={{ delay: !shouldShowIntro ? 0 : 0.1, duration: 0.6 }}
                className="col-span-12 row-span-1 bg-emerald-800 rounded-xl sm:rounded-2xl p-3 sm:p-6 flex items-center justify-between overflow-hidden"
              >
                <div>
                  <h1 className="text-lg sm:text-2xl font-bold text-white">Prajyot Porje</h1>
                  <p className="text-emerald-200 text-sm">Full Stack Developer & ML Engineer</p>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                </div>
              </motion.div>

              {/* Main Quote */}
              <motion.div
                initial={{ opacity: !shouldShowIntro ? 1 : 0, x: !shouldShowIntro ? 0 : -50 }}
                animate={{
                  opacity: bentoAnimationStage >= 2 ? 1 : 0,
                  x: bentoAnimationStage >= 2 ? 0 : -50,
                }}
                transition={{ delay: !shouldShowIntro ? 0 : 0.2, duration: 0.6 }}
                className="col-span-5 row-span-3 bg-emerald-700 rounded-xl sm:rounded-2xl p-4 sm:p-8 flex flex-col justify-center overflow-hidden"
              >
                <h2 className="text-xl sm:text-3xl font-light text-white leading-tight mb-2 sm:mb-4">
                  Crafting digital experiences through
                  <span className="font-bold text-emerald-200"> innovative design</span>
                </h2>
                <p className="text-emerald-300 text-xs sm:text-sm">
                  Blending creativity with technology to build meaningful solutions
                </p>
              </motion.div>

              {/* Profile Photo */}
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
                    setTimeout(() => setBentoAnimationStage(2), 100)
                  }
                }}
                className="col-span-3 row-span-3 bg-[#faf9f9] rounded-xl sm:rounded-2xl overflow-hidden"
              >
                <Image
                  src="/assets/profile.jpg"
                  alt="Profile"
                  width={600}
                  height={800}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: !shouldShowIntro ? 1 : 0, x: !shouldShowIntro ? 0 : 50 }}
                animate={{
                  opacity: bentoAnimationStage >= 2 ? 1 : 0,
                  x: bentoAnimationStage >= 2 ? 0 : 50,
                }}
                transition={{ delay: !shouldShowIntro ? 0 : 0.4, duration: 0.6 }}
                className="col-span-4 row-span-3 bg-teal-600 rounded-xl sm:rounded-2xl p-3 sm:p-6 overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-teal-200" />
                  <h3 className="text-sm sm:text-lg font-semibold text-white">Education</h3>
                </div>
                <div className="space-y-3 sm:space-y-3">
                  <div className="bg-teal-700 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 text-teal-200" />
                      <span className="text-teal-100 text-xs sm:text-sm font-medium">Bachelor of Engineering</span>
                    </div>
                    <p className="text-white text-xs sm:text-sm font-semibold">
                      Artificial Intelligence & Machine Learning
                    </p>
                    <p className="text-teal-200 text-xs">PES Modern College Of Engineering, Pune • 2023-2027</p>
                  </div>
                  <div className="bg-teal-700 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <School className="w-3 h-3 sm:w-4 sm:h-4 text-teal-200" />
                      <span className="text-teal-100 text-xs sm:text-sm font-medium">Higher Secondary Education</span>
                    </div>
                    <p className="text-white text-xs sm:text-sm font-semibold">Science & Technology</p>
                    <p className="text-teal-200 text-xs">SVKT College, Nashik • 2021-2023</p>
                  </div>
                </div>
              </motion.div>

              {/* Skills Preview with Button */}
              <motion.div
                initial={{ opacity: !shouldShowIntro ? 1 : 0, y: !shouldShowIntro ? 0 : 50 }}
                animate={{
                  opacity: bentoAnimationStage >= 2 ? 1 : 0,
                  y: bentoAnimationStage >= 2 ? 0 : 50,
                }}
                transition={{ delay: !shouldShowIntro ? 0 : 0.5, duration: 0.6 }}
                className="col-span-4 row-span-2 bg-slate-800 rounded-xl sm:rounded-2xl p-3 sm:p-6 overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-2 sm:mb-4">
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300" />
                  <h3 className="text-sm sm:text-lg font-semibold text-white">Skills</h3>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {topSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: !shouldShowIntro ? 0 : 0.6 + index * 0.1, duration: 0.3 }}
                      className="bg-slate-600 rounded-lg p-2 text-center hover:bg-slate-500 transition-colors"
                    >
                      <span className="text-white text-sm font-medium">{skill.name}</span>
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
                initial={{ opacity: !shouldShowIntro ? 1 : 0, scale: !shouldShowIntro ? 1 : 0.8 }}
                animate={{
                  opacity: bentoAnimationStage >= 2 ? 1 : 0,
                  scale: bentoAnimationStage >= 2 ? 1 : 0.8,
                }}
                transition={{ delay: !shouldShowIntro ? 0 : 0.6, duration: 0.6 }}
                className="col-span-4 row-span-2 bg-amber-600 rounded-xl sm:rounded-2xl p-3 sm:p-5 overflow-hidden"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-1">Let's Connect</h3>
                <div className="space-y-1 sm:space-y-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-amber-200" />
                    <span className="text-amber-100 text-xs sm:text-base">porjeprajyot@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-amber-200" />
                    <span className="text-amber-100 text-xs sm:text-base">Pune, Maharashtra, India</span>
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

              {/* Projects Preview with Button */}
              <motion.div
                initial={{ opacity: !shouldShowIntro ? 1 : 0, x: !shouldShowIntro ? 0 : -50 }}
                animate={{
                  opacity: bentoAnimationStage >= 2 ? 1 : 0,
                  x: bentoAnimationStage >= 2 ? 0 : -50,
                }}
                transition={{ delay: !shouldShowIntro ? 0 : 0.7, duration: 0.6 }}
                className="col-span-4 row-span-2 bg-purple-700 rounded-xl sm:rounded-2xl p-3 sm:p-4 overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-2 sm:mb-1">
                  <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-purple-200" />
                  <h3 className="text-sm sm:text-lg font-semibold text-white">Projects</h3>
                </div>
                <div className="mb-3">
                  <div className="bg-purple-800 rounded-lg p-3 mb-1">
                    <div className="flex items-center justify-between">
                      <div className="space-y">
                        <p className="text-white text-xs sm:text-sm font-semibold">DevFlow: AI Website Builder</p>
                        <p className="text-purple-200 text-xs">Next.js • TypeScript • Gemini • Clerk</p>
                      </div>
                      <LinkPreview url="https://tailwindcss.com">
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-purple-300" />
                      </LinkPreview>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleProjectsNavigation}
                  className="flex items-center gap-1 text-purple-200 hover:text-white text-xs sm:text-sm group transition-colors w-full justify-center bg-purple-800 hover:bg-purple-900 rounded-lg py-2"
                >
                  <span>View More Projects</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* Social Links */}
              <div className="col-span-1 row-span-1"></div>
              <motion.div
                initial={{ opacity: !shouldShowIntro ? 1 : 0, y: !shouldShowIntro ? 0 : 50 }}
                animate={{
                  opacity: bentoAnimationStage >= 2 ? 1 : 0,
                  y: bentoAnimationStage >= 2 ? 0 : 50,
                }}
                transition={{ delay: !shouldShowIntro ? 0 : 0.8, duration: 0.6 }}
                className="col-span-10 row-span-1 bg-slate-700 rounded-xl sm:rounded-2xl p-2 sm:p-4 flex items-center justify-between overflow-hidden"
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

      {/* Skills Section with Scroll Reveal */}
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

      {/* Projects Section with Scroll Reveal */}
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
  )
}