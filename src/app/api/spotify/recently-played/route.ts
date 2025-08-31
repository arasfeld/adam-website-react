import { NextRequest, NextResponse } from 'next/server';
import { Track } from '@/types';
import { getAccessToken } from '@/lib/spotify';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '20');

    const { access_token } = await getAccessToken();

    const params = new URLSearchParams({
      limit: limit.toString(),
    });

    const response = await fetch(
      'https://api.spotify.com/v1/me/player/recently-played?' +
        params.toString(),
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        next: { revalidate: 300 },
      }
    );

    if (!response.ok) {
      return NextResponse.json([], { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(
      data.items?.map((item: { track: Track }) => item.track) || []
    );
  } catch (error) {
    console.error('Error in recently-played API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch recently played tracks' },
      { status: 500 }
    );
  }
}
