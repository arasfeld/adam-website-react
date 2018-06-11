/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';

import {
  LOAD_ALBUMS,
  LOAD_ARTISTS,
  LOAD_RECENT_TRACKS,
} from './constants';
import {
  albumsLoaded,
  albumLoadingError,
  artistsLoaded,
  artistLoadingError,
  recentTracksLoaded,
  recentTrackLoadingError,
} from './actions';

const lastFmUsername = 'arazzy';
const lastFmApiKey = 'API_KEY';

/**
 * Last.fm top 50 albums request/response handler
 */
export function* getTopAlbums() {
  const requestURL = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${lastFmUsername}&api_key=${lastFmApiKey}&limit=21&format=json`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);
    const albums = response.topalbums.album.map((album, i) => (
      {
        key: `album-${i}`,
        rank: album['@attr'].rank,
        name: album.name,
        artist: album.artist.name,
        image: album.image[2]['#text'],
        playcount: album.playcount,
      }
    ));
    yield put(albumsLoaded(albums));
  } catch (err) {
    yield put(albumLoadingError(err));
  }
}

/**
 * Last.fm top 20 artists request/response handler
 */
export function* getTopArtists() {
  const requestURL = `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${lastFmUsername}&api_key=${lastFmApiKey}&limit=21&format=json`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);
    const artists = response.topartists.artist.map((artist, i) => (
      {
        key: `artist-${i}`,
        rank: artist['@attr'].rank,
        name: artist.name,
        image: artist.image[2]['#text'],
        playcount: artist.playcount,
      }
    ));
    yield put(artistsLoaded(artists));
  } catch (err) {
    yield put(artistLoadingError(err));
  }
}

/**
 * Last.fm recently played tracks request/response handler
 */
export function* getRecentTracks() {
  const requestURL = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastFmUsername}&api_key=${lastFmApiKey}&limit=10&format=json`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);
    const tracks = response.recenttracks.track.map((track, i) => (
      {
        key: `track-${i}`,
        name: track.name,
        artist: track.artist['#text'],
        album: track.album['#text'],
        image: track.image[2]['#text'],
        date: new Date(track.date['#text']),
      }
    ));
    yield put(recentTracksLoaded(tracks));
  } catch (err) {
    yield put(recentTrackLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* lastFmData() {
  // Watches for LOAD_ALBUMS and LOAD_ARTISTS actions and calls getAlbums when one
  // comes in. By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_ALBUMS, getTopAlbums);
  yield takeLatest(LOAD_ARTISTS, getTopArtists);
  yield takeLatest(LOAD_RECENT_TRACKS, getRecentTracks);
}
