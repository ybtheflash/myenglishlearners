import { motion } from "framer-motion";

export function ResultsAdSection() {
  return (
    <section className="w-full flex justify-center py-10">
      <motion.div
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="relative bg-background dark:bg-gray-950 rounded-2xl shadow-xl px-8 py-8 md:py-10 md:px-16 flex flex-col items-center overflow-hidden"
      >
        {/* Animated border pulse */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-10"
          style={{
            border: "3px solid",
          }}
          animate={{
            boxShadow: [
              "0 0 0 0 #fbbf2440",
              "0 0 16px 4px #f472b640",
              "0 0 0 0 #a78bfa40",
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
        <div className="relative z-20 text-center w-full">
          <h2 className="font-maharlika text-3xl md:text-4xl text-primary mb-2">
            CISCE Results — Proof of Excellence
          </h2>
          <p className="font-garet text-lg md:text-xl text-text/90 mb-6">
            Celebrating the stellar academic performance and outstanding achievements of our offline batch.
          </p>
          <motion.a
            href="https://result.myenglishlearners.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3 rounded-full font-garet font-semibold text-base bg-primary/10 text-primary border border-primary/30 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300 hover:bg-primary/20 hover:text-primary-dark"
            whileHover={{ scale: 1.05 }}
          >
            View Results & Top Performers
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
