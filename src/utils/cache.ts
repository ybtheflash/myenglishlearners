import { VideoData, CachedVideoData } from '@/types/youtube'

const CACHE_FILE = 'youtube-cache.json'
const RAW_URL = `https://raw.githubusercontent.com/ybtheflash/el_database_data/main/${CACHE_FILE}`
const API_URL = `https://api.github.com/repos/ybtheflash/el_database_data/contents/${CACHE_FILE}`

export async function readCache(): Promise<CachedVideoData | null> {
  try {
    const response = await fetch(RAW_URL, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    })
    
    if (!response.ok) {
      console.error('Cache read error:', await response.text())
      return null
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error reading cache:', error)
    return null
  }
}

export async function writeCache(data: CachedVideoData) {
  if (!process.env.GITHUB_TOKEN) {
    console.error('GitHub token not found')
    return
  }

  try {
    // Get current file to get its SHA
    const getCurrentFile = await fetch(API_URL, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })

    if (!getCurrentFile.ok) {
      throw new Error(`Failed to get current file: ${await getCurrentFile.text()}`)
    }

    const currentFile = await getCurrentFile.json()

    // Update file
    const updateResponse = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `Update cache ${new Date().toISOString()}`,
        content: Buffer.from(JSON.stringify(data, null, 2)).toString('base64'),
        sha: currentFile.sha
      }),
    })

    if (!updateResponse.ok) {
      throw new Error(`Failed to update cache: ${await updateResponse.text()}`)
    }

  } catch (error) {
    console.error('Error writing cache:', error)
  }
}

export function isCacheValid(cache: CachedVideoData | null): boolean {
  if (!cache || !cache.lastUpdated) return false
  
  const lastUpdated = new Date(cache.lastUpdated)
  const now = new Date()
  
  return lastUpdated.toDateString() === now.toDateString()
}

export function getCachedLatestVideo(
  cache: CachedVideoData | null,
  channelId: string
): VideoData | null {
  if (!cache || !cache.videos[channelId]) return null
  return cache.videos[channelId].latestVideo
}

export function initializeEmptyCache(): CachedVideoData {
  return {
    lastUpdated: new Date().toISOString(),
    videos: {}
  }
}

// Helper to update latest video in cache
export function updateLatestInCache(
  cache: CachedVideoData,
  channelId: string,
  latestVideo: VideoData
): CachedVideoData {
  return {
    ...cache,
    lastUpdated: new Date().toISOString(),
    videos: {
      ...cache.videos,
      [channelId]: {
        latestVideo
      }
    }
  }
}
