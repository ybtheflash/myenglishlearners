"use client";
import { motion } from "framer-motion";
import { VideoData } from "@/types/youtube";
import Image from "next/image";

interface VideoCardProps extends VideoData {
  index: number;
  isFeatured?: boolean;
  themeColor: string; // Add this
}

export const VideoCard = ({
  videoId,
  title,
  views,
  duration,
  isLatest,
  isFeatured,
  index,
  themeColor,
}: VideoCardProps) => (
  <motion.a
    href={`https://www.youtube.com/watch?v=${videoId}`}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay: index * 0.2,
    }}
    className="group relative bg-white/5 dark:bg-white/10 rounded-xl overflow-hidden
      shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="relative aspect-video">
      {/* Thumbnail */}
      <Image
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={`Thumbnail for ${title}`}
        className="w-full h-full object-cover transition-transform duration-300 
          group-hover:scale-105"
        layout="fill"
        objectFit="cover"
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Video Badge */}
      <div className="absolute top-3 left-3">
        {isLatest ? (
          <span
            className="bg-primary px-2 py-1 rounded-full text-white text-xs font-medium"
            style={{ backgroundColor: themeColor }}
          >
            Latest
          </span>
        ) : isFeatured ? (
          <span
            className="bg-primary/80 px-2 py-1 rounded-full text-white text-xs font-medium"
            style={{ backgroundColor: themeColor }}
          >
            Featured
          </span>
        ) : null}
      </div>

      {/* Duration Badge */}
      <div className="absolute bottom-3 right-3">
        <span className="bg-black/70 px-2 py-1 rounded-full text-white text-xs">
          {duration}
        </span>
      </div>

      {/* Play Button Overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 
        group-hover:opacity-100 transition-all duration-300"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: themeColor }}
        >
          <i
            className="fas fa-play text-white text-xl pl-1"
            aria-hidden="true"
          ></i>
        </motion.div>
      </div>
    </div>

    {/* Video Info */}
    <div className="p-4">
      <h3
        className="font-garet text-base sm:text-lg font-medium line-clamp-2 
          transition-colors duration-300"
        style={{ color: "var(--text)" }}
      >
        <span
          className="group-hover:text-[var(--dynamic-hover)]"
          style={{ "--dynamic-hover": themeColor } as React.CSSProperties}
        >
          {title}
        </span>
      </h3>
      <div className="mt-2 flex items-center text-text/60 text-sm">
        <i className="fas fa-eye mr-2" aria-hidden="true"></i>
        <span>{views} views</span>
      </div>
    </div>
  </motion.a>
);
