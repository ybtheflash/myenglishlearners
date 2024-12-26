"use client";
import { motion } from "framer-motion";
import { channels } from "@/config/channels";
import { ChannelSection } from "./ChannelSection";

export default function VideosSection() {
  return (
    <section id="videos" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 
              rounded-full blur-3xl opacity-50"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 
              rounded-full blur-3xl opacity-50"
            aria-hidden="true"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-maharlika text-4xl text-primary mb-4">
            Our Educational Content
          </h2>
          <p className="font-garet text-text/80 max-w-2xl mx-auto">
            Master English and Literature through our comprehensive video
            lessons, designed to enhance your knowledge and skills.
          </p>
        </motion.div>

        {/* Channel Sections */}
        <div className="space-y-16">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <ChannelSection {...channel} isReversed={index % 2 !== 0} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Gradient */}
        {/* <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t 
            from-background to-transparent pointer-events-none"
          aria-hidden="true"
        /> */}
      </div>
    </section>
  );
}
