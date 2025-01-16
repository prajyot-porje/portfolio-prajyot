"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation, delay } from "framer-motion";
import { MagicCard } from "./ui/magic-card";
import MagicCardsList from "./ui/MagicCardsList";

const AboutSection = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.66], [2.4, 1.9, 1]);

  useEffect(() => {
    const unsubscribe = scale.onChange(v => {
      if (v === 1) {
        controls.start(i => ({
          opacity: 1,
          x: 0,
          y: 0,
          transition: { delay: i * 0.1 }
        }));
      } else if (v > 1) {
        controls.start(i => ({
          opacity: 0,
          x: i % 2 === 0 ? "-40%" : "40%",
          y: i % 2 === 0 ? "-40%" : "40%",
          transition: { duration:0 }
        }));
      }
    });

    return () => unsubscribe();
  }, [scale, controls]);


  return (
    <div
      ref={ref}
      className="min-h-[200vh]  w-screen bg-light dark:bg-dark flex flex-col items-center"
    >
      <motion.div
        style={{
          position: "sticky",
          top: 0,  
          y: useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"],),
        }}
        className="h-screen flex items-center"
      >
        <div className="grid h-screen w-full grid-cols-4 grid-rows-4 gap-3 p-[85px] xl:m-32 lg:m-20 md:m-10 sm:m-5">
          
          {/* Profile */}
          <motion.div
            custom={0}
            initial={{ x: "-40%", opacity: 0 }}
            animate={controls}
            transition={{ ease: "easeOut" }}
            className="rounded-2xl col-span-1 row-span-2"
          >
            <MagicCardsList title="profile" />
          </motion.div>

          {/* card 1 */}
          <motion.div
          custom={3}
            initial={{ y: "40%", opacity: 0 }}
            animate={controls}
            transition={{ ease: "easeOut"  }}
            className="rounded-2xl col-span-1 row-span-1"
          >
            <MagicCardsList title="card1" />
          </motion.div>

          {/* bio */}
          <motion.div
            custom={1}
            initial={{ y: "-40%", opacity: 0 }}
            animate={controls}
            transition={{ ease: "easeOut" }}
            className="rounded-2xl col-span-2 row-span-1"
          >
            <MagicCardsList title="bio" />
          </motion.div>

          {/* center */}
          <motion.div
            style={{ scale }}
            className="rounded-2xl sticky col-span-2 row-span-2 z-30"
          >
            <MagicCard
              bg="  dark:"
              className=" flex justify-center items-center"
            >
              <div className="">
                <motion.div className="font-bold text-5xl">
                  About Me
                </motion.div>
              </div>
            </MagicCard>
          </motion.div>

          {/* hobbies */}
          <motion.div
            custom={2}
            initial={{ x: "40%", opacity: 0 }}
            animate={controls}
            transition={{ ease: "easeOut" }}
            className="rounded-2xl col-span-1 row-span-2 z-10"
          >
            <MagicCardsList title="hobbies" />
          </motion.div>

          {/* card 2 */}
          <motion.div
          custom={2}
            initial={{ y: "-40%", opacity: 0 }}
            animate={controls}
            transition={{ ease: "easeOut" }}
            className="rounded-2xl col-span-1 row-span-1"
          >
            <MagicCardsList title="card2" />
          </motion.div>

          {/* Skills */}
          <motion.div
            custom={3}
            initial={{ y: "40%", opacity: 0 }}
            animate={controls}
            transition={{ ease: "easeOut" }}
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
