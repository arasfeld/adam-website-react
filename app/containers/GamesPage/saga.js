/**
 * Gets the game data from Steam
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';

import { LOAD_GAMES } from './constants';
import { gamesLoaded, gamesLoadingError } from './actions';

const steamId = '76561198206720592';
const steamApiKey = 'API_KEY';

export function* getGames() {
  try {
    // Call our request helper (see 'utils/request')
    const [ownedGames, recentlyPlayedGames] = yield all([
      getOwnedGames(),
      getRecentlyPlayedGames(),
    ]);

    yield put(gamesLoaded(ownedGames, recentlyPlayedGames));
  } catch (err) {
    yield put(gamesLoadingError(err));
  }
}

export function* getOwnedGames() {
  const requestURL = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${steamApiKey}&steamid=${steamId}&include_appinfo=1&format=json`;

  // Call our request helper (see 'utils/request')
  const response = yield call(request, requestURL);

  // Validate response format
  if (!response || !response.response || !response.response.games) {
    return [];
  }

  // Map response to array of games
  // prettier-ignore
  return response.response.games.map(game => ({
    key: `owned-game-${game.appid}`,
    appid: game.appid,
    name: game.name,
    recentPlaytime: game.playtime_2weeks,
    totalPlaytime: game.playtime_forever,
    iconImage: `http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`,
    logoImage: `http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`,
  }));
}

export function* getRecentlyPlayedGames() {
  const requestURL = `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${steamApiKey}&steamid=${steamId}&format=json`;

  // Call our request helper (see 'utils/request')
  const response = yield call(request, requestURL);

  // Validate response format
  if (!response || !response.response || !response.response.games) {
    return [];
  }

  // Map response to array of games
  // prettier-ignore
  return response.response.games.map(game => ({
    key: `recent-game-${game.appid}`,
    appid: game.appid,
    name: game.name,
    recentPlaytime: game.playtime_2weeks,
    totalPlaytime: game.playtime_forever,
    iconImage: `http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`,
    logoImage: `http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`,
  }));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* steamData() {
  // Watches for LOAD_GAMES actions and calls getGames when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_GAMES, getGames);
}
