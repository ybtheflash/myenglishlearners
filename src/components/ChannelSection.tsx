"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { VideoCard } from "./VideoCard";
import { ChannelData, VideoData } from "@/types/youtube";

interface ChannelSectionProps extends ChannelData {
  isReversed?: boolean;
}

export const ChannelSection = ({
  id,
  title,
  description,
  featuredVideo,
  url,
  theme,
  isReversed = false,
}: ChannelSectionProps) => {
  const [latestVideo, setLatestVideo] = useState<VideoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLatestVideo() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/youtube?channelId=${id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch latest video");
        }

        if (data.success && data.data) {
          setLatestVideo(data.data);
        }
      } catch (err) {
        console.error("Error fetching latest video:", err);
        setError("Failed to load latest video");
      } finally {
        setLoading(false);
      }
    }

    fetchLatestVideo();
  }, [id]);

  return (
    <div
      className={`rounded-2xl overflow-hidden 
      bg-white/5 dark:bg-white/5
      backdrop-blur-sm border border-primary/10`}
    >
      {/* Channel Header */}
      <div
        className="p-6 sm:p-8 relative"
        style={{
          backgroundColor: theme.background || "transparent",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at ${
              isReversed ? "left" : "right"
            }, ${theme.primary}40, transparent 70%)`,
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex flex-col ${
            isReversed ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-6 relative z-10`}
        >
          <div
            className={`flex-1 text-center ${
              isReversed ? "md:text-right" : "md:text-left"
            }`}
          >
            <h2
              className="font-maharlika text-3xl mb-4"
              style={{ color: theme.primary }}
            >
              {title}
            </h2>
            <p className="font-garet text-text/80 mb-6 whitespace-pre-line">
              {description}
            </p>
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
    transition-colors duration-300 relative" // Added relative
              style={{
                color: theme.primary,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background pseudo-element */}
              <span
                className="absolute inset-0 rounded-lg"
                style={{
                  backgroundColor: theme.primary,
                  opacity: 0.12,
                }}
              />

              {/* Content with proper z-index */}
              <span className="relative z-10 flex items-center gap-2">
                <i className="fab fa-youtube" aria-hidden="true"></i>
                Visit Channel
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Videos Grid */}
      <div className="p-6 sm:p-8 bg-white/5 dark:bg-white/5">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[0, 1].map((index) => (
              <div
                key={`skeleton-${index}`}
                className="aspect-video bg-primary/10 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : error ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <VideoCard
              videoId={featuredVideo.videoId}
              title={featuredVideo.title}
              views={featuredVideo.views}
              duration={featuredVideo.duration}
              isFeatured={true}
              index={0}
              themeColor={theme.primary}
            />
            <div
              className="flex items-center justify-center bg-white/5 dark:bg-white/5 
              rounded-xl text-text/60 p-8"
            >
              <p>{error}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <VideoCard
              videoId={featuredVideo.videoId}
              title={featuredVideo.title}
              views={featuredVideo.views}
              duration={featuredVideo.duration}
              isFeatured={true}
              index={0}
              themeColor={theme.primary}
            />
            {latestVideo && (
              <VideoCard
                {...latestVideo}
                isLatest={true}
                index={1}
                themeColor={theme.primary}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
