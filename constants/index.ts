

export const skills = [
  {
    title: "Frameworks and Libraries",
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
];

// export const introPages = [
//   {
//     id: 1,
//     title: "FULL STACK",
//     subtitle: "WEB DEVELOPER",
//     description: "Hey, I'm Prajyot — Building Scalable Web Apps",
//     bgColor: "bg-slate-900",
//     textColor: "text-white",
//     accentColor: "text-slate-300",
//   },
//   {
//     id: 2,
//     title: "CODE",
//     subtitle: "CRAFTSMAN",
//     description: "Shaping Ideas into Web Experiences",
//     bgColor: "bg-blue-600",
//     textColor: "text-white",
//     accentColor: "text-blue-200",
//   },
//   {
//     id: 3,
//     title: "FRONTEND",
//     subtitle: "EXPERT",
//     description: "Building Modern Solutions",
//     bgColor: "bg-red-500",
//     textColor: "text-white",
//     accentColor: "text-red-200",
//   },
//   {
//     id: 4,
//     title: "DSA",
//     subtitle: "ENTHUSIAST",
//     description: "Optimizing Logic with C++ Problem Solving",
//     bgColor: "bg-purple-500",
//     textColor: "text-white",
//     accentColor: "text-purple-300",
//   },
// ]
// constants/index.ts
export const introPages = [
  {
    id: 1,
    title: "FULL STACK",
    subtitle: "WEB DEVELOPER",
    description: "Hey, I'm Prajyot — Building Scalable Web Apps",
    bgColor: "bg-gradient-to-br from-slate-900 via-slate-900 to-slate-900",
    textColor: "text-white",
    accentColor: "text-slate-300"
  },
  {
    id: 2,
    title: "CODE",
    subtitle: "CRAFTSMAN",
    description: "Shaping Ideas into Web Experiences",
    bgColor: "bg-gradient-to-br from-blue-600 via-blue-600 to-blue-600",
    textColor: "text-white",
    accentColor: "text-blue-300"
  },
  
  {
    id: 3,
    title: "FRONTEND",
    subtitle: "EXPERT",
    description: "Building Modern Solutions",
    bgColor: "bg-gradient-to-br from-emerald-600 via-emerald-600 to-emerald-600",
    textColor: "text-white", 
    accentColor: "text-emerald-200"
  },
  {
    id: 4,
    title: "DSA",
    subtitle: "ENTHUSIAST",
    description: "Optimizing Logic with C++ Problem Solving",
    bgColor: "bg-gradient-to-br from-purple-500 via-purple-500 to-purple-600",
    textColor: "text-white",
    accentColor: "text-purple-300"
  }
];
export const projectsData = [
  {
    id: 1,
    title: "DevFlow : AI Website Builder",
    websiteName: "Devflow AI",
    description:
      " Instantly create fully functional websites from text with smart design and live collaboration.",
    tech: [
      "Next.js",
      "TypeScript",
      "Gemini",
      "Clerk",
      "Framer Motion",
      "Convex",
    ],
    image: "/devflow.png",
    github: "https://github.com/prajyot-porje/devflow",
    live: "https://devflow-ai.vercel.app",
    year: "2025",
    status: "Production",
    metrics: {
      users: "12 (Test users)",
      satisfaction: "92% (Simulated feedback)",
      performance: "A+(Prototype benchmark)",
    },
    color: {
      primary: "#3B82F6",
      gradient: "bg-blue-600",
    },
  },
  {
    id: 2,
    title: "NexMeet : A video conferencing Website",
    websiteName: "NexMeet",
    description:
      " A video calling app with features like meeting schedules, recordings, and real-time streaming.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stream", "clerk"],
    image: "/nexmeet.png",
    github: "https://github.com/prajyot-porje/NexMeet",
    live: "prajyot-nexmeet.vercel.app/",
    year: "2024",
    status: "Production",
    metrics: {
      users: "06",
      satisfaction: "92% (Simulated feedback)",
      performance: "A (Lighthouse audit)",
    },
    color: {
      primary: "#10B981",
      gradient: " bg-emerald-600",
    },
  },
  {
    id: 3,
    title: "LibraryHub: Books Management Platform",
    websiteName: "LibraryHub",
    description:
      "A user-friendly system to manage books, track borrow/return activity, and organize library operations efficiently.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Framer Motion",
      "clerk",
    ],
    image: "/libraryhub.png",
    github: "https://github.com/prajyot-porje/Books-Management-Platform",
    live: "https://books-management-platform.vercel.app/",
    year: "2023",
    status: "Production",
    metrics: {
      users: "15 (Test users)",
      satisfaction: "N/A (To Be Collected)",
      performance: "A (Based on internal tests)",
    },
    color: {
      primary: "#8B5CF6",
      gradient: "bg-purple-600",
    },
  },
  {
    id: 4,
    title: "TalkFlow : AI Powered Chatbot",
    websiteName: "TalkFlow",
    description:
      "TalkFlow: TalkFlow An AI-powered chatbot application for intelligent, conversational experiences. Built with the Gemini API and modern web technologies",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk", "Gemini"],
    image: "/talkflow1.png",
    github: "https://github.com/prajyot-porje/dataviz",
    live: "https://dataviz-demo.vercel.app",
    year: "2024",
    status: "Beta",
    metrics: {
      users: "12 (Test users)",
      satisfaction: "N/A (To Be Collected)",
      performance: "B+ (Based on internal tests)",
    },
    color: {
      primary: "#F59E0B",
      gradient: "bg-amber-600",
    },
  },
];
