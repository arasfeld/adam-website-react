/**
 * Gets the repositories of the user from Github
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';

import { LOAD_MUSIC } from './constants';
import { musicLoaded, musicLoadingError } from './actions';

const lastFmUsername = 'arazzy';
const lastFmApiKey = '67398e0ca4dd50eca0cc9b2461cf9be8';

// TODO: make this a lot prettier... separate into functions for each call if possible?
export function* getMusic() {
  try {
    // Call our request helper (see 'utils/request')
    const [albums, artists, tracks] = yield all([
      getAlbums(),
      getArtists(),
      getTracks(),
    ]);

    yield put(musicLoaded(albums, artists, tracks));
  } catch (err) {
    yield put(musicLoadingError(err));
  }
}

export function* getAlbums() {
  const requestURL = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${lastFmUsername}&api_key=${lastFmApiKey}&limit=21&format=json`;

  // Call our request helper (see 'utils/request')
  const response = yield call(request, requestURL);
  // Map response to array of albums
  return response.topalbums.album.map((album, i) => ({
    key: `album-${i}`,
    rank: album['@attr'].rank,
    name: album.name,
    artist: album.artist.name,
    image: album.image[2]['#text'],
    playcount: album.playcount,
  }));
}

export function* getArtists() {
  const requestURL = `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${lastFmUsername}&api_key=${lastFmApiKey}&limit=21&format=json`;

  // Call our request helper (see 'utils/request')
  const response = yield call(request, requestURL);
  // Map response to array of artists
  return response.topartists.artist.map((artist, i) => ({
    key: `artist-${i}`,
    rank: artist['@attr'].rank,
    name: artist.name,
    image: artist.image[2]['#text'],
    playcount: artist.playcount,
  }));
}

export function* getTracks() {
  const requestURL = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastFmUsername}&api_key=${lastFmApiKey}&limit=10&format=json`;

  // Call our request helper (see 'utils/request')
  const response = yield call(request, requestURL);
  // Map response to array of tracks
  return response.recenttracks.track.map((track, i) => ({
    key: `track-${i}`,
    name: track.name,
    artist: track.artist['#text'],
    album: track.album['#text'],
    image: track.image[2]['#text'],
    date: track.date ? new Date(track.date['#text']) : null,
  }));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* lastFmData() {
  // Watches for LOAD_MUSIC actions and calls getMusic when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_MUSIC, getMusic);
}
