import { NextResponse } from 'next/server';
import { getAccessToken } from '@/lib/spotify';

export async function GET() {
  try {
    const { access_token } = await getAccessToken();

    const response = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        next: { revalidate: 30 },
      }
    );

    if (!response.ok) {
      return NextResponse.json(null, { status: response.status });
    }

    // Check if response has content (204 No Content means no currently playing)
    if (response.status === 204) {
      return NextResponse.json(null);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in currently-playing API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch currently playing' },
      { status: 500 }
    );
  }
}
