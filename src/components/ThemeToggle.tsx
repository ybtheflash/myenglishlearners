"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 
        transition-colors duration-200"
      aria-label={`Switch to ${
        resolvedTheme === "dark" ? "light" : "dark"
      } theme`}
    >
      {resolvedTheme === "dark" ? (
        <motion.i
          initial={{ rotate: -30 }}
          animate={{ rotate: 0 }}
          className="fas fa-sun text-primary text-xl"
        />
      ) : (
        <motion.i
          initial={{ rotate: 30 }}
          animate={{ rotate: 0 }}
          className="fas fa-moon text-primary text-xl"
        />
      )}
    </motion.button>
  );
}
