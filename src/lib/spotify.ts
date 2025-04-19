import { TimeRange, Track } from '@/types';

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
  ).then((res) => res.json());

  return response.items;
}
