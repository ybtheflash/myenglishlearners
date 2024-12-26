export interface VideoData {
  videoId: string
  title: string
  views: string
  duration: string
  isLatest?: boolean
}

export interface CachedVideoData {
  lastUpdated: string
  videos: {
    [channelId: string]: {
      latestVideo: VideoData
    }
  }
}

export interface FeaturedVideo {
  videoId: string
  title: string
  views: string
  duration: string
}

export interface ChannelData {
  id: string
  title: string
  description: string
  featuredVideo: FeaturedVideo
  url: string
  theme: {
    primary: string
    background?: string
  }
}
