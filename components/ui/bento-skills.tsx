import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const itemsDark = [
    {
      src: "/next-dark.png",
      className: "w-26",
    },
    {
      src: "/react-dark.png",
      className: "w-28",
    },
    {
      src: "/tailwind-dark.png",
      className: "w-26",
    },
    {
      src: "/javascript.png",
      className: "w-30",
    },
    {
      src: "/typescript.png",
      className: "w-30",
    },
    {
      src: "/python.png",
      className: "w-26",
    },
    {
      src: "/cpp.png",
      className: "w-24",
    },
    {
      src: "/git.png",
      className: "w-24",
    },
  ];
  const itemsLight = [
    {
      src: "/next-light.png",
      className: "w-26",
    },
    {
      src: "/react-light.png",
      className: "w-28",
    },
    {
      src: "/tailwind-light.png",
      className: "w-26",
    },
    {
      src: "/javascript-light.png",
      className: "w-30",
    },
    {
      src: "/typescript-light.png",
      className: "w-30",
    },
    {
      src: "/python-light.png",
      className: "w-26",
    },
    {
      src: "/cpp-light.png",
      className: "w-24",
    },
    {
      src: "/git-light.png",
      className: "w-24",
    },
  ];
  return (
    <div className="px-1">
      <div className=" text-center pt-2 text-2xl font-semibold">
        Skills
      </div>

      <div className="flex flex-col pt-4 w-full gap-1 overflow-hidden">
        <div className="hidden dark:block">
          <div className="flex  w-full overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex flex-shrink-0 px-2 pt-1 gap-4"
            >
              {itemsDark.map((item, idx) => (
                <div key={idx} className={`${item.className} h-10 relative`}>
                  
                  <img
                    src={item.src}
                    alt={item.className}
                    className="h-full rounded-md w-full border-[1px] border-gray-500"
                  />
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex flex-shrink-0 px-4 pt-1 gap-4"
            >
              {itemsDark.map((item, idx) => (
                <div key={idx} className={`${item.className} h-10 relative`}>
                  <img
                    src={item.src}
                    alt={item.className}
                    className="h-full rounded-md w-full border-[1px] border-gray-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="block dark:hidden">
          <div className="flex w-full overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex flex-shrink-0 px-2 pt-1 gap-4"
            >
              {itemsLight.map((item, idx) => (
                <div key={idx} className={`${item.className} h-10 relative`}>
                  <img
                    src={item.src}
                    alt={item.className}
                    className="h-full rounded-md w-full border-[1px] border-gray-500"
                  />
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex flex-shrink-0 px-2 pt-1 gap-4"
            >
              {itemsLight.map((item, idx) => (
                <div key={idx} className={`${item.className} h-10 relative`}>
                  <img
                    src={item.src}
                    alt={item.className}
                    className="h-full rounded-md w-full border-[1px] border-gray-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
