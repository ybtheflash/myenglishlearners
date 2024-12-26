import { NextResponse } from 'next/server'
import { getLatestVideo, getAllLatestVideos } from '@/utils/youtube'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const channelId = searchParams.get('channelId')
    
    if (channelId) {
      // Get single channel's latest video
      const latestVideo = await getLatestVideo(channelId)
      
      if (!latestVideo) {
        return NextResponse.json(
          { error: 'No videos found for this channel' },
          { status: 404 }
        )
      }

      return NextResponse.json({
        success: true,
        data: latestVideo
      })
    } else {
      // Get all channels' latest videos
      const allVideos = await getAllLatestVideos()
      
      if (!allVideos) {
        return NextResponse.json(
          { error: 'Failed to fetch videos' },
          { status: 404 }
        )
      }

      return NextResponse.json({
        success: true,
        data: allVideos
      })
    }

  } catch (error) {
    console.error('YouTube API Error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to fetch video data',
        details: process.env.NODE_ENV === 'development' 
          ? error instanceof Error ? error.message : 'Unknown error'
          : undefined
      },
      { status: 500 }
    )
  }
}

// Add cache headers
export const runtime = 'edge'
export const revalidate = 3600 // Cache for 1 hour
