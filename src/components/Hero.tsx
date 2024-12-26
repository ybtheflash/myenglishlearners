"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: "fas fa-users",
    title: "Community Members",
    value: "17K+",
  },
  {
    icon: "fas fa-video",
    title: "Video Lessons",
    value: "140+",
  },
  {
    icon: "fas fa-graduation-cap",
    title: "Student Success",
    value: "98%",
  },
  {
    icon: "fas fa-clock",
    title: "Years Teaching",
    value: "15+",
  },
];

const AnimatedTitle = () => {
  return (
    <div className="relative">
      <motion.h2
        initial={{ opacity: 0, y: 0, scale: 1 }}
        animate={{
          opacity: 1,
          y: -20,
          scale: 0.7,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
        className="font-garet text-2xl font-light tracking-wider text-primary/80 mb-1"
      >
        MAITHREE ROY&apos;S
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
        }}
        className="font-maharlika text-5xl sm:text-6xl md:text-7xl text-primary"
      >
        ENGLISH LEARNERS
      </motion.h1>
    </div>
  );
};

const StatCard = ({
  icon,
  title,
  value,
  index,
}: {
  icon: string;
  title: string;
  value: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 2 + index * 0.15, // Starts after 2s, each card appears 0.15s after the previous
      duration: 0.4,
      ease: "easeOut",
    }}
    className="bg-white/5 dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 
      hover:bg-white/10 dark:hover:bg-white/20 
      transition-all duration-300 border border-primary/10
      shadow-lg hover:shadow-xl"
  >
    <div className="flex flex-col items-center text-center">
      <div
        className="w-12 h-12 flex items-center justify-center mb-4 
        bg-primary/10 rounded-lg"
      >
        <i className={`${icon} text-2xl text-primary`}></i>
      </div>
      <h3 className="text-lg font-garet font-light mb-2 text-text/80">
        {title}
      </h3>
      <p className="text-3xl font-maharlika text-primary">{value}</p>
    </div>
  </motion.div>
);

const ScrollIndicator = () => {
  const scrollToNextSection = () => {
    const videosSection = document.getElementById("videos");
    if (videosSection) {
      videosSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.8, duration: 0.8 }}
      className="mt-16 flex justify-center" // Changed from absolute positioning
    >
      <motion.button
        onClick={scrollToNextSection}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-primary/50 hover:text-primary transition-colors duration-300 
          cursor-pointer p-2" // Added padding for better touch target
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fas fa-chevron-down text-2xl"></i>
      </motion.button>
    </motion.div>
  );
};

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="min-h-screen pt-32 pb-4 px-4 relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 0.5 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full 
          blur-3xl opacity-20 animate-pulse"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary 
          rounded-full blur-3xl opacity-20 animate-pulse delay-1000"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Content */}
        <div className="text-center mb-12">
          <AnimatedTitle />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 text-lg md:text-xl font-garet font-light max-w-2xl 
              mx-auto text-text/80"
          >
            Embark on a journey of English mastery through interactive lessons,
            engaging videos, and a supportive community.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-10 flex justify-center gap-4"
          >
            <motion.a
              href="https://www.youtube.com/@englishlearnersyt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-3 rounded-lg font-garet 
                hover:bg-primary-dark transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Learning
            </motion.a>
            <motion.a
              href="#videos"
              className="bg-primary/10 text-primary px-8 py-3 rounded-lg font-garet 
                hover:bg-primary/20 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Videos
            </motion.a>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 mb-8">
          {" "}
          {/* Added mb-16 for space above scroll indicator */}
          {stats.map((stat, index) => (
            <StatCard
              key={stat.title}
              icon={stat.icon}
              title={stat.title}
              value={stat.value}
              index={index}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </div>
    </section>
  );
}
