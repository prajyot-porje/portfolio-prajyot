"use client"

import { useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Code, Database, Palette, Globe } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

const skills = [
  {
    title: "Frameworks and Libraries",
    icon: <Code className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    items: [
      {
        name: "Next JS",
        desc: "React Framework",
        icon: "/assets/nextjs.svg",
        className: "invert-dark",
      },
      {
        name: "React JS",
        desc: "JavaScript library",
        icon: "/assets/reactjs.svg",
        className: "",
      },
      {
        name: "Node JS",
        desc: "JavaScript runtime",
        icon: "/assets/nodejs.svg",
        className: "",
      },
      {
        name: "Express JS",
        desc: "Node Framework",
        icon: "/assets/expressjs.svg",
        className: "invert-dark",
      },
      {
        name: "Tailwind CSS",
        desc: "Utility-first CSS framework",
        icon: "/assets/tailwindcss.svg",
        className: "",
      },
      {
        name: "Framer Motion",
        desc: "Animation library",
        icon: "/assets/framer-motion.svg",
        className: "",
      },
    ],
  },
  {
    title: "Programming Languages",
    icon: <Globe className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-500",
    items: [
      {
        name: "JavaScript",
        desc: "Programming language",
        icon: "/assets/javascript.svg",
        className: "rounded-md",
      },
      {
        name: "TypeScript",
        desc: "Programming language",
        icon: "/assets/typescriptlang.svg",
        className: "",
      },
      {
        name: "Python",
        desc: "Programming language",
        icon: "/assets/python.svg",
        className: "",
      },
      {
        name: "C++",
        desc: "Programming language",
        icon: "/assets/cpp.svg",
        className: "skill-cpp",
      },
      {
        name: "C",
        desc: "Programming language",
        icon: "/assets/c.svg",
        className: "",
      },
      {
        name: "HTML",
        desc: "Markup language",
        icon: "/assets/html.svg",
        className: "",
      },
      {
        name: "CSS",
        desc: "Styling language",
        icon: "/assets/CSS.svg",
        className: "",
      },
    ],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    items: [
      {
        name: "MongoDB",
        desc: "NoSQL database",
        icon: "/assets/mongodb.svg",
        className: "",
      },
      {
        name: "PostgreSQL",
        desc: "SQL database",
        icon: "/assets/postgresql.svg",
        className: "",
      },
      {
        name: "Neon PostgresSQL",
        desc: "PostgreSQL ORM",
        icon: "/assets/neon.svg",
        className: "",
      },
      {
        name: "Drizzle",
        desc: "PostgreSQL ORM",
        icon: "/assets/drizzle.svg",
        className: "invert-dark",
      },
    ],
  },
  {
    title: "Tools",
    icon: <Palette className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    items: [
      {
        name: "Git",
        desc: "Version control system",
        icon: "/assets/git.svg",
        className: "",
      },
      {
        name: "GitHub",
        desc: "Code hosting platform",
        icon: "/assets/github.svg",
        className: "invert-dark",
      },
      {
        name: "VS Code",
        desc: "Code editor",
        icon: "/assets/vscode.svg",
        className: "",
      },
      {
        name: "Figma",
        desc: "Design tool",
        icon: "/assets/figma.svg",
        className: "",
      },
      {
        name: "Clerk",
        desc: "Authentication tool",
        icon: "/assets/clerk.svg",
        className: "rounded-lg",
      },
    ],
  },
]

export default function SkillsSection() {
  const [expandedSections, setExpandedSections] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  const toggleSection = (index: number) => {
    console.log("Toggling section:", index)
    setExpandedSections((prev) => {
      const newSections = prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      console.log("New expanded sections:", newSections)
      return newSections
    })
  }

  return (
    <section
      ref={containerRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-100 "
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100  bg-[size:20px_20px] opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent " />

      <div className="relative max-w-7xl mx-auto">
        {/* Header with Scroll Animation */}
        <motion.div style={{ y: headerY, opacity: headerOpacity }} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100  border border-blue-200  mb-6"
          >
            <Code className="w-4 h-4 text-blue-600 " />
            <span className="text-sm font-medium text-blue-700 ">Technical Expertise</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900  bg-clip-text text-transparent">
              Skills &
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="text-lg text-slate-600  max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and the technologies I work with to build exceptional
            digital experiences.
          </p>
        </motion.div>

        {/* Skills Grid with Staggered Animations */}
        <div className="grid gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group"
            >
              <div className="relative bg-white/80  backdrop-blur-sm rounded-2xl border border-slate-200  shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                />

                {/* Header - Fixed Button */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      toggleSection(index)
                    }}
                    className="w-full p-6 lg:p-8 flex items-center justify-between hover:bg-slate-50/50  transition-colors duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <div className="text-left">
                        <h3 className="text-xl lg:text-2xl font-bold text-slate-900 ">{skill.title}</h3>
                        <p className="text-sm text-slate-500  mt-1">
                          {skill.items.length} technologies
                        </p>
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: expandedSections.includes(index) ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="p-2 rounded-lg bg-slate-100  group-hover:bg-slate-200  transition-colors"
                    >
                      <ChevronDown className="w-5 h-5 text-slate-600 " />
                    </motion.div>
                  </button>
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedSections.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                        <div className="h-px bg-gradient-to-r from-transparent via-slate-200  to-transparent mb-6" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {skill.items.map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8, y: 20 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{
                                delay: idx * 0.05,
                                duration: 0.4,
                                type: "spring",
                                stiffness: 100,
                              }}
                              whileHover={{
                                scale: 1.05,
                                y: -8,
                                transition: { duration: 0.2 },
                              }}
                              className="group/item relative"
                            >
                              <div className="relative bg-gradient-to-br from-white to-slate-50  border border-slate-200  rounded-xl p-4 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
                                {/* Hover Gradient */}
                                <div
                                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover/item:opacity-5 transition-opacity duration-300 rounded-xl`}
                                />

                                <div className="relative flex items-center gap-3">
                                  <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="flex-shrink-0 p-2 bg-white  rounded-lg shadow-sm border border-slate-200  group-hover/item:shadow-md transition-shadow"
                                  >
                                    <Image
                                      src={item.icon || "/placeholder.svg"}
                                      alt={item.name}
                                      width={24}
                                      height={24}
                                      className={`w-6 h-6 ${item.className || ""}`}
                                    />
                                  </motion.div>

                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-slate-900  group-hover/item:text-blue-600  transition-colors truncate">
                                      {item.name}
                                    </h4>
                                    <p className="text-xs text-slate-500 mt-0.5 truncate">
                                      {item.desc}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <Globe className="w-4 h-4" />
            <span>Let's build something amazing together</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}