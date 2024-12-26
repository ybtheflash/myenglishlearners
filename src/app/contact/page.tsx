"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
// import ThemeToggle from "@/components/ThemeToggle";

export default function Contact() {
  const [isFormLoading, setIsFormLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gray-950 relative" data-theme="dark">
      {/* Navigation Controls */}
      <div className="fixed top-6 left-6 right-6 z-50 flex justify-between items-center">
        <Link
          href="/"
          className="p-3 rounded-full bg-gray-900 
            backdrop-blur-sm border border-white/10 
            text-white/60
            hover:text-primary transition-all duration-300 group"
        >
          <i
            className="fas fa-arrow-left group-hover:-translate-x-1 
            transition-transform duration-300"
          />
        </Link>
        {/* <ThemeToggle /> */}
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="font-maharlika text-4xl text-primary">
              Get in Touch
            </h1>
            <p className="font-garet text-white">
              Have questions? Wanna Collaborate? We&apos;d love to hear from
              you.
            </p>
          </div>

          {/* Primary Contact - Google Form */}
          <div
            className="bg-gray-900 backdrop-blur-sm rounded-2xl 
              border border-white/10 p-6 md:p-8"
          >
            <p className="text-sm text-white/60 mb-4">
              Note: You can scroll inside the form below
            </p>

            <div className="relative aspect-[16/10] w-full">
              {/* Loading Indicator */}
              {isFormLoading && (
                <div
                  className="absolute inset-0 flex flex-col items-center 
                  justify-center bg-gray-900/90 rounded-xl"
                >
                  <div
                    className="w-12 h-12 border-4 border-primary/20 
                    border-t-primary rounded-full animate-spin mb-4"
                  />
                  <p className="text-white/90">Loading form...</p>
                </div>
              )}

              <iframe
                src="https://forms.gle/i8TiNEjXXw97W3iP9"
                className="w-full h-full rounded-xl"
                allowFullScreen
                onLoad={() => setIsFormLoading(false)}
              />
            </div>

            {/* Open Form Button */}
            <motion.a
              href="https://forms.gle/i8TiNEjXXw97W3iP9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-primary/10 text-primary
                rounded-lg hover:bg-primary/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-external-link-alt mr-2" />
              Open Form in New Tab
            </motion.a>
          </div>

          {/* Alternative Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Email */}
            <motion.a
              href="mailto:englishlearners18@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-6 bg-gray-900 backdrop-blur-sm rounded-xl 
                border border-white/10 group 
                hover:bg-gray-800 transition-all duration-300"
            >
              <i className="fas fa-envelope text-2xl text-primary mb-4" />
              <h3 className="font-garet text-lg text-white/90 mb-2">
                Email Us
              </h3>
              <p
                className="text-white/70 group-hover:text-primary 
                transition-colors text-sm duration-300"
              >
                englishlearners18@gmail.com
              </p>
            </motion.a>

            {/* Google Chat Info */}
            <div
              className="p-6 bg-gray-900 backdrop-blur-sm rounded-xl 
              border border-white/10 
              sm:col-span-2 lg:col-span-1"
            >
              <i className="fas fa-comment-dots text-2xl text-primary mb-4" />
              <h3 className="font-garet text-lg text-white/90 mb-2">
                Chat with Us
              </h3>
              <p className="text-white/70">
                DM us on Google Chat using our email:
                <span className="block text-sm text-primary mt-1">
                  englishlearners18@gmail.com
                </span>
              </p>
            </div>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/englishlearners.ig"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-6 bg-gray-900 backdrop-blur-sm rounded-xl 
                border border-white/10 group 
                hover:bg-gray-800 transition-all duration-300"
            >
              <i className="fab fa-instagram text-2xl text-primary mb-4" />
              <h3 className="font-garet text-lg text-white/90 mb-2">
                Follow on Instagram
              </h3>
              <p
                className="text-white/70 group-hover:text-primary 
                transition-colors duration-300"
              >
                @englishlearners.ig
              </p>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
