"use client";
import { motion } from "framer-motion";
import { PenTip } from "./PenTip";

export const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-background"
  >
    <div className="text-center">
      <div className="relative w-auto h-24 mx-auto flex items-center justify-center">
        <div className="relative flex items-center justify-center gap-2">
          {/* E */}
          <motion.span
            className="font-maharlika text-5xl text-primary"
            initial={{ x: -50, skewX: 30, opacity: 0 }}
            animate={{
              x: 0,
              skewX: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.4,
              },
            }}
          >
            E
          </motion.span>

          {/* Centered Container for Nib and Circle */}
          <motion.div
            className="relative w-16 h-16 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.8,
                duration: 0.4,
              },
            }}
          >
            {/* Nib */}
            <div className="absolute scale-90">
              <PenTip />
            </div>

            {/* Circular Path */}
            <svg className="absolute w-full h-full" viewBox="0 0 64 64">
              <motion.circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-primary"
                initial={{ pathLength: 0, rotate: -90 }}
                animate={{
                  pathLength: 1,
                  rotate: 270,
                }}
                transition={{
                  duration: 1,
                  delay: 1.2,
                  ease: "easeInOut",
                }}
                style={{
                  rotate: -90,
                  transformOrigin: "center",
                }}
              />
            </svg>
          </motion.div>

          {/* L */}
          <motion.span
            className="font-maharlika text-5xl text-primary"
            initial={{ x: 50, skewX: -30, opacity: 0 }}
            animate={{
              x: 0,
              skewX: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.4,
                delay: 0.4,
              },
            }}
          >
            L
          </motion.span>
        </div>

        {/* Loading Bar */}
        <motion.div className="absolute -bottom-8 w-full h-1 bg-primary/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  </motion.div>
);
