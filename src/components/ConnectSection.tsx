"use client";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

// Utility function to handle scroll lock
const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLocked]);
};

const SocialLink = ({
  platform,
  icon,
  color,
  username,
  url,
  delay,
}: {
  platform: string;
  icon: string;
  color: string;
  username: string;
  url: string;
  delay: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.a
      ref={ref}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="group relative flex items-center gap-4 p-4 rounded-xl 
        bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10
        transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={`w-12 h-12 rounded-full ${color} flex items-center 
        justify-center text-white`}
      >
        <i className={`${icon} text-xl`} aria-hidden="true"></i>
      </div>

      <div className="flex-grow">
        <h3
          className="font-garet text-lg text-white group-hover:text-primary 
          transition-colors duration-300"
        >
          {platform}
        </h3>
        <p className="text-white/60 text-sm">{username}</p>
      </div>

      <div
        className="text-white/40 group-hover:text-primary 
        group-hover:translate-x-1 transition-all duration-300"
      >
        <i className="fas fa-arrow-right" aria-hidden="true"></i>
      </div>
    </motion.a>
  );
};

const ELText = () => (
  <div className="relative w-12 h-12">
    <div
      className="absolute inset-0 bg-white/5 dark:bg-black/20 backdrop-blur-sm 
      rounded-xl -m-2"
    ></div>
    <motion.span
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="absolute top-0 left-0 font-maharlika text-3xl text-primary-light"
    >
      E
    </motion.span>
    <motion.span
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      className="absolute bottom-0 right-0 font-maharlika text-3xl text-primary-light"
    >
      L
    </motion.span>
  </div>
);
const DeveloperModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  // Lock scroll when modal is open
  useScrollLock(isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal Container - ensures centering */}
          <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-[90%] max-w-md m-4 bg-black/40 backdrop-blur-md 
                rounded-xl border border-white/20 shadow-xl p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/60 hover:text-white
                  transition-colors duration-300"
              >
                <i className="fas fa-times text-lg" aria-label="Close modal" />
              </button>

              <div className="text-center">
                <h3 className="font-garet text-2xl text-primary mb-4">
                  YUBARAJ BISWAS
                </h3>

                <div className="space-y-4">
                  <a
                    href="https://github.com/ybtheflash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5
                      hover:bg-white/10 transition-colors duration-300 group"
                  >
                    <i
                      className="fab fa-github text-xl text-white/60 
                      group-hover:text-primary"
                    />
                    <span className="text-white/80 group-hover:text-white">
                      github.com/ybtheflash
                    </span>
                  </a>

                  <a
                    href="https://linkedin.com/in/yubarajbiswas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5
                      hover:bg-white/10 transition-colors duration-300 group"
                  >
                    <i
                      className="fab fa-linkedin text-xl text-white/60 
                      group-hover:text-primary"
                    />
                    <span className="text-white/80 group-hover:text-white">
                      linkedin.com/in/yubarajbiswas
                    </span>
                  </a>

                  <a
                    href="https://ybtheflash.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5
                      hover:bg-white/10 transition-colors duration-300 group"
                  >
                    <i
                      className="fas fa-globe text-xl text-white/60 
                      group-hover:text-primary"
                    />
                    <span className="text-white/80 group-hover:text-white">
                      ybtheflash.in
                    </span>
                  </a>

                  <a
                    href="mailto:ybtheflash@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5
                      hover:bg-white/10 transition-colors duration-300 group"
                  >
                    <i
                      className="fas fa-envelope text-xl text-white/60 
                      group-hover:text-primary"
                    />
                    <span className="text-white/80 group-hover:text-white">
                      ybtheflash@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mt-20 pt-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 mb-8">
          {/* Logo & Motto */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <ELText />
            </div>
            <p className="text-white/60 font-garet italic">Happy Learning!</p>
          </div>

          {/* Contact Block */}
          <div className="text-center">
            <div
              className="inline-block bg-white/5 dark:bg-black/20 backdrop-blur-sm 
              rounded-xl border border-white/10 p-6"
            >
              <p className="text-white/60 mb-2">Feel free to drop a mail at</p>
              <a
                href="mailto:englishlearners18@gmail.com"
                className="text-primary-light hover:text-primary transition-colors duration-300"
              >
                englishlearners18@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-6 mb-8">
          <Link
            href="/contact"
            className="text-white/60 hover:text-primary transition-colors duration-300"
          >
            Contact Us
          </Link>
          <Link
            href="/privacy-policy"
            className="text-white/60 hover:text-primary transition-colors duration-300"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Copyright with Modal Trigger */}
        <div className="py-4 text-center text-white/40 text-sm">
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1 hover:text-primary/80 
              transition-colors duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Developed with{" "}
            <motion.i
              className="fas fa-heart text-primary mx-1"
              animate={{
                scale: [1, 1.2, 1],
                transition: {
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                },
              }}
              aria-hidden="true"
            />{" "}
            by ybtheflash
          </motion.button>
        </div>
      </div>

      <DeveloperModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
export default function ConnectSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const socialLinks = [
    {
      platform: "YouTube (English Learners)",
      icon: "fab fa-youtube",
      color: "bg-red-600",
      username: "@englishlearnersyt",
      url: "https://www.youtube.com/@englishlearnersyt",
    },
    {
      platform: "YouTube (Literaree)",
      icon: "fab fa-youtube",
      color: "bg-red-600",
      username: "@literaree",
      url: "https://www.youtube.com/@literaree",
    },
    {
      platform: "Instagram",
      icon: "fab fa-instagram",
      color: "bg-gradient-to-tr from-purple-600 to-pink-600",
      username: "@englishlearners.ig",
      url: "https://www.instagram.com/englishlearners.ig",
    },
    {
      platform: "Email",
      icon: "fas fa-envelope",
      color: "bg-blue-600",
      username: "englishlearners18@gmail.com",
      url: "mailto:englishlearners18@gmail.com",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="connect"
      className="py-20 relative overflow-hidden bg-gradient-to-b 
        from-background to-gray-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
          from-primary/20 via-background to-transparent opacity-40"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-block"
          >
            <i
              className="fas fa-users text-3xl text-primary/80"
              aria-hidden="true"
            />
          </motion.div>
          <h2 className="font-maharlika text-4xl text-primary mb-4">
            Connect With Us
          </h2>
          <p className="font-garet text-white/80 max-w-2xl mx-auto">
            Join our community across different platforms
          </p>
        </motion.div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialLinks.map((link, index) => (
            <SocialLink key={link.platform} {...link} delay={0.2 * index} />
          ))}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </section>
  );
}
