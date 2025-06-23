"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ExternalLink, Github, Users, TrendingUp } from "lucide-react"
import Image from "next/image"
import { projectsData } from "@/constants"



export default function ProjectsShowcase() {
  const [activeProject, setActiveProject] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const currentProject = projectsData[activeProject]

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const { scrollYProgress: headerScrollProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "start start"],
  })

  const headerY = useTransform(headerScrollProgress, [0, 1], [100, 0])
  const headerOpacity = useTransform(headerScrollProgress, [0, 0.5], [0, 1])

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const contentScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setActiveProject((prev) => (prev + 1) % projectsData.length)
      }
    }, 6000)

    return () => clearInterval(interval)
  }, [isAnimating])

  const handleProjectChange = (index: number) => {
    if (index !== activeProject && !isAnimating) {
      setIsAnimating(true)
      setActiveProject(index)
      setTimeout(() => setIsAnimating(false), 1000)
    }
  }

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 bg-[size:20px_20px] opacity-30" />
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-8 py-24">
        {/* Header with Scroll Animation */}
        <motion.div ref={headerRef} style={{ y: headerY, opacity: headerOpacity }} className="text-center mb-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-slate-100 to-gray-100 border border-slate-200 mb-6"
          >
            <div className="w-2 h-2 bg-slate-600 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-slate-700">Featured Work</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Selected
            </span>
            <br />
            <span className="bg-gradient-to-r from-slate-600 via-slate-800 to-slate-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A showcase of enterprise-grade solutions built with cutting-edge technologies and modern development
            practices.
          </p>
        </motion.div>

        {/* Main Content with Enhanced Animations */}
        <motion.div
          style={{ scale: contentScale, opacity: contentOpacity }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[70vh]"
        >
          {/* Left Content Area with Staggered Animations */}
          <motion.div
            className="relative space-y-8"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Dynamic Project Information */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`project-info-${activeProject}`}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.95 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  staggerChildren: 0.1,
                }}
                className="space-y-8"
              >
                {/* Current Project Details */}
                <motion.div
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="space-y-6">
                    {/* Project Header */}
                    <motion.div
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full ${currentProject.color.gradient}`} />
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                          {currentProject.year} • {currentProject.status}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-gray-400">
                        {String(activeProject + 1).padStart(2, "0")} / {String(projectsData.length).padStart(2, "0")}
                      </div>
                    </motion.div>

                    <motion.div
                      className="space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                        {currentProject.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed">{currentProject.description}</p>
                    </motion.div>

                    {/* Project Metrics */}
                    <motion.div
                      className="grid grid-cols-3 gap-6 py-6 border-t border-gray-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <motion.div
                        className="text-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                      >
                        <div className="text-2xl font-bold text-slate-800">{currentProject.metrics.users}</div>
                        <div className="text-sm text-gray-500 flex items-center justify-center gap-1">
                          <Users className="w-4 h-4" />
                          Active Users
                        </div>
                      </motion.div>
                      <motion.div
                        className="text-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.4 }}
                      >
                        <div className="text-2xl font-bold text-emerald-600">{currentProject.metrics.satisfaction}</div>
                        <div className="text-sm text-gray-500 flex items-center justify-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          Satisfaction
                        </div>
                      </motion.div>
                      <motion.div
                        className="text-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                      >
                        <div className="text-2xl font-bold text-slate-700">{currentProject.metrics.performance}</div>
                        <div className="text-sm text-gray-500">Performance</div>
                      </motion.div>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div
                      className="space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">Technology Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.tech.map((tech, index) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                            className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200 hover:bg-slate-200 transition-colors"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex gap-4 pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <motion.a
                        href={currentProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-6 py-3 ${currentProject.color.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all flex-1 justify-center`}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live
                      </motion.a>
                      <motion.a
                        href={currentProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-colors"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-4 h-4" />
                        Source
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Side - Enhanced Image Animation */}
          <motion.div
            className="relative flex items-center justify-center h-full"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative w-full">
              {/* Enhanced Image Animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`image-${activeProject}`}
                  initial={{
                    opacity: 0,
                    y: 100,
                    scale: 0.8,
                    rotateX: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -100,
                    scale: 0.8,
                    rotateX: -15,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="w-full"
                  style={{ perspective: "1000px" }}
                >
                  {/* Project Image with 3D Effect */}
                  <motion.div
                    className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-white"
                    whileHover={{
                      scale: 1.02,
                      rotateY: 5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Image
                      src={currentProject.image || "/placeholder.svg"}
                      alt={`${currentProject.title} preview`}
                      width={700}
                      height={380}
                      className="w-full h-full object-contain"
                    />

                    {/* Gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />

                    {/* Website name with enhanced styling */}
                    <motion.div
                      className="absolute bottom-6 right-6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="text-white font-medium text-lg bg-slate-900/60 px-4 py-2 rounded-lg backdrop-blur-md border border-white/20">
                        {currentProject.websiteName}
                      </span>
                    </motion.div>

                    {/* Floating elements for visual interest */}
                    <motion.div
                      className="absolute top-4 left-4 w-3 h-3 bg-emerald-400 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Bottom Navigation */}
        <motion.div
          className="flex items-center justify-center gap-8 mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Project indicators */}
          <div className="flex gap-3">
            {projectsData.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleProjectChange(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeProject ? "bg-slate-700 w-8" : "bg-slate-300 hover:bg-slate-400 w-2"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <motion.button
              onClick={() => handleProjectChange((activeProject - 1 + projectsData.length) % projectsData.length)}
              className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              ←
            </motion.button>
            <motion.button
              onClick={() => handleProjectChange((activeProject + 1) % projectsData.length)}
              className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              →
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-slate-700 to-slate-900 text-white font-medium shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span>Ready to discuss your next project?</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}