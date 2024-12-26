import { VideoData, CachedVideoData } from '@/types/youtube'
import { readCache, writeCache, isCacheValid } from './cache'
import { channels } from '@/config/channels'

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY

async function fetchLatestVideoFromAPI(channelId: string): Promise<VideoData> {
  try {
    // Get latest video info
    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?` +
      `key=${YOUTUBE_API_KEY}&` +
      `channelId=${channelId}&` +
      `part=snippet,id&` +
      `order=date&` +
      `maxResults=1&` +
      `type=video`
    )

    if (!searchResponse.ok) {
      throw new Error('Failed to fetch latest video')
    }

    const searchData = await searchResponse.json()
    
    if (!searchData.items?.[0]) {
      throw new Error('No videos found')
    }

    const video = searchData.items[0]

    // Get video stats
    const statsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?` +
      `key=${YOUTUBE_API_KEY}&` +
      `id=${video.id.videoId}&` +
      `part=statistics,contentDetails`
    )

    if (!statsResponse.ok) {
      throw new Error('Failed to fetch video stats')
    }

    const statsData = await statsResponse.json()
    const videoStats = statsData.items[0]

    return {
      videoId: video.id.videoId,
      title: video.snippet.title,
      views: formatViews(videoStats.statistics.viewCount),
      duration: formatDuration(videoStats.contentDetails.duration),
      isLatest: true
    }
  } catch (error) {
    console.error('Error in fetchLatestVideoFromAPI:', error)
    throw error
  }
}

function formatViews(viewCount: string): string {
  const count = parseInt(viewCount)
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`
  }
  return viewCount
}

function formatDuration(duration: string): string {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)
  if (!match) return '0:00'

  const hours = (match[1] || '').replace('H', '')
  const minutes = (match[2] || '').replace('M', '')
  const seconds = (match[3] || '').replace('S', '')
  
  let result = ''
  if (hours) {
    result += `${hours}:`
    result += `${minutes.padStart(2, '0')}:`
  } else {
    result += `${minutes || '0'}:`
  }
  result += seconds.padStart(2, '0')
  return result
}

// Fetch latest videos for all channels at once
async function updateAllChannelsCache(): Promise<void> {
  try {
    const cache = await readCache()
    
    // Only update if cache is invalid or missing
    if (!isCacheValid(cache)) {
      // Fetch latest videos for all channels
      const latestVideos = await Promise.all(
        channels.map(channel => fetchLatestVideoFromAPI(channel.id))
      )

      // Create new cache with all channels' data
      const newCache: CachedVideoData = {
        lastUpdated: new Date().toISOString(),
        videos: Object.fromEntries(
          channels.map((channel, index) => [
            channel.id,
            { latestVideo: latestVideos[index] }
          ])
        )
      }

      await writeCache(newCache)
    }
  } catch (error) {
    console.error('Error updating cache:', error)
  }
}

// Get latest video for a specific channel
export async function getLatestVideo(channelId: string): Promise<VideoData | null> {
  try {
    // Ensure cache is updated
    await updateAllChannelsCache()
    
    // Read from cache
    const cache = await readCache()
    return cache?.videos[channelId]?.latestVideo || null

  } catch (error) {
    console.error('Error in getLatestVideo:', error)
    return null
  }
}

// Get latest videos for all channels
export async function getAllLatestVideos(): Promise<{ [channelId: string]: VideoData } | null> {
  try {
    // Ensure cache is updated
    await updateAllChannelsCache()
    
    // Read from cache
    const cache = await readCache()
    if (!cache?.videos) return null

    // Convert to simplified format
    return Object.fromEntries(
      Object.entries(cache.videos).map(([channelId, data]) => [
        channelId,
        data.latestVideo
      ])
    )
  } catch (error) {
    console.error('Error in getAllLatestVideos:', error)
    return null
  }
}
