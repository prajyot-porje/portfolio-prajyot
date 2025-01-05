"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@nextui-org/use-theme";

export default function DayNightToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const isDay = theme === "light";

  return (
    <button
      onClick={() => setTheme(isDay ? "dark" : "light")}
      className="relative w-[60px] h-[30px] shadow-sm shadow-slate-50 rounded-full p-1 cursor-pointer"
      style={{
        boxShadow: "inset 0 2px 15px rgba(0,0,0,0.15)",
      }}
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden"
        animate={{
          backgroundColor: isDay ? "#87CEEB" : "#1a1a2e",
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Stars (visible at night) */}
        {!isDay && (
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[1px] h-[1px] bg-white rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                style={{
                  left: `${30 + i * 20}%`,
                  top: `${30 + ((i * 17) % 40)}%`,
                }}
              />
            ))}
          </div>
        )}

        {/* Clouds (visible during day) */}
        {isDay && (
          <div className="absolute inset-0">
            <motion.div
              className="absolute bg-white rounded-full opacity-80"
              style={{
                width: "18px",
                height: "8px",
                left: "60%",
                top: "40%",
              }}
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bg-white rounded-full opacity-60"
              style={{
                width: "12px",
                height: "6px",
                left: "30%",
                top: "60%",
              }}
              animate={{
                x: [0, -3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        )}
      </motion.div>

      {/* Toggle Knob */}
      <motion.div
        className="relative w-[24px] h-[24px] rounded-full"
        animate={{
          x: isDay ? 28 : 0,
          backgroundColor: isDay ? "#FFD700" : "#D3D3D3",
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        {/* Moon Craters (visible at night) */}
        {!isDay && (
          <>
            <div className="absolute w-1.5 h-1.5 rounded-full bg-gray-400/30 top-1.5 left-1.5" />
            <div className="absolute w-1 h-1 rounded-full bg-gray-400/30 bottom-2 right-1.5" />
          </>
        )}
      </motion.div>
    </button>
  );
}
