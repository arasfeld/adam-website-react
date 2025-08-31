import { TimeRange, Track, Artist } from '@/types';

export async function getAccessToken() {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
    process.env;
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    throw new Error(
      'Missing one of SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, or SPOTIFY_REFRESH_TOKEN environment variables'
    );
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
      ).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
    // cache access token for 1 hour before revalidating
    next: { revalidate: 3600 },
  }).then((res) => res.json());

  return response;
}

interface TopReadParams {
  limit: number;
  offset: number;
  timeRange: TimeRange;
}

export async function topTracks(
  { limit, offset, timeRange }: TopReadParams = {
    limit: 20,
    offset: 0,
    timeRange: TimeRange.ShortTerm,
  }
): Promise<Track[]> {
  const { access_token } = await getAccessToken();

  try {
    const params = new URLSearchParams({
      limit: limit.toString(),
      offset: offset.toString(),
      time_range: timeRange,
    });

    const response = await fetch(
      'https://api.spotify.com/v1/me/top/tracks?' + params.toString(),
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        // cache for 5 mins
        next: { revalidate: 300 },
      }
    );

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching top tracks:', error);
    return [];
  }
}

export async function topArtists(
  { limit, offset, timeRange }: TopReadParams = {
    limit: 20,
    offset: 0,
    timeRange: TimeRange.ShortTerm,
  }
): Promise<Artist[]> {
  const { access_token } = await getAccessToken();

  try {
    const params = new URLSearchParams({
      limit: limit.toString(),
      offset: offset.toString(),
      time_range: timeRange,
    });

    const response = await fetch(
      'https://api.spotify.com/v1/me/top/artists?' + params.toString(),
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        // cache for 5 mins
        next: { revalidate: 300 },
      }
    );

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching top artists:', error);
    return [];
  }
}

export async function recentlyPlayed(limit: number = 20): Promise<Track[]> {
  const { access_token } = await getAccessToken();

  try {
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
        // cache for 5 mins
        next: { revalidate: 300 },
      }
    );

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    return data.items?.map((item: any) => item.track) || [];
  } catch (error) {
    console.error('Error fetching recently played:', error);
    return [];
  }
}

export async function getCurrentUser() {
  const { access_token } = await getAccessToken();

  try {
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      // cache for 1 hour
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching current user:', error);
    return null;
  }
}

export async function getCurrentlyPlaying() {
  const { access_token } = await getAccessToken();

  try {
    const response = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        // cache for 30 seconds
        next: { revalidate: 30 },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching currently playing:', error);
    return null;
  }
}
