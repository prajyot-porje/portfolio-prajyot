"use client";
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, useAnimation } from "framer-motion";
import { MagicCard } from "./ui/magic-card";
import MagicCardsList from "./ui/MagicCardsList";

const AboutSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Use spring for smoother animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Adjust the input and output ranges for a more subtle scaling effect
  const scale = useTransform(smoothProgress, [0.3, 0.5, 0.7], [2.4, 1.9, 1]);

  const controls = useAnimation();

  useEffect(() => {
    const unsubscribe = scale.onChange((v) => {
      if (v === 1) {
        controls.start({ opacity: 1, x: 0, y: 0 });
      }
    });

    return () => unsubscribe();
  }, [scale, controls]);

  return (
    <div
      ref={ref}
      className="min-h-[200vh] w-screen bg-light dark:bg-dark flex flex-col items-center"
    >
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          y: useTransform(smoothProgress, [0, 1], ["0vh", "100vh"]),
        }}
        className="h-screen flex items-center"
      >
        <div className="grid h-screen w-full grid-cols-4 grid-rows-4 gap-3 p-[85px] xl:m-32 lg:m-20 md:m-10 sm:m-5">
          <motion.div
            initial={{ x: "40%", opacity: 0 }}
            animate={controls}
            transition={{ duration: 1, ease: "linear" }}
            className="rounded-2xl col-span-1 row-span-2"
          >
            <MagicCardsList title="profile" />
          </motion.div>

          <motion.div
            initial={{ y: "40%", opacity: 0 }}
            animate={controls}
            transition={{ duration: 1, ease: "linear" }}
            className="rounded-2xl col-span-1 row-span-1"
          >
            <MagicCardsList title="card1" />
          </motion.div>

          <motion.div
            initial={{ y: "40%", opacity: 0 }}
            animate={controls}
            transition={{ duration: 1, ease: "linear" }}
            className="rounded-2xl col-span-2 row-span-1"
          >
            <MagicCardsList title="bio" />
          </motion.div>

          <motion.div
            style={{ scale }}
            className="rounded-2xl sticky col-span-2 row-span-2 z-30"
          >
            <MagicCard
              bg="bg-gradient-to-br from-[#6c6ef8] to-[#4213d7] dark:"
              className="cursor-pointer shadow-xl flex justify-center items-center"
            >
              <div className="">
                <motion.div className="font-bold text-5xl">
                  About Me
                </motion.div>
              </div>
            </MagicCard>
          </motion.div>

          <motion.div
            initial={{ x: "-40%", opacity: 0 }}
            animate={controls}
            transition={{ duration: 1, ease: "linear" }}
            className="rounded-2xl col-span-1 row-span-2 z-10"
          >
            <MagicCardsList title="hobbies" />
          </motion.div>

          <motion.div
            initial={{ y: "-40%", opacity: 0 }}
            animate={controls}
            transition={{ duration: 1, ease: "linear" }}
            className="rounded-2xl col-span-1 row-span-1"
          >
            <MagicCardsList title="card2" />
          </motion.div>

          <motion.div
            initial={{ y: "-40%", opacity: 0 }}
            animate={controls}
            transition={{ duration: 1, ease: "linear" }}
            className="rounded-2xl col-span-4 row-span-1 z-10"
          >
            <MagicCardsList title="Skills" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;

