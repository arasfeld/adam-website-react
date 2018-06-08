/*
 * MusicConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_ALBUMS = 'app/Music/LOAD_ALBUMS';
export const LOAD_ALBUMS_SUCCESS = 'app/Music/LOAD_ALBUMS_SUCCESS';
export const LOAD_ALBUMS_ERROR = 'app/Music/LOAD_ALBUMS_ERROR';

export const LOAD_ARTISTS = 'app/Music/LOAD_ARTISTS';
export const LOAD_ARTISTS_SUCCESS = 'app/Music/LOAD_ARTISTS_SUCCESS';
export const LOAD_ARTISTS_ERROR = 'app/Music/LOAD_ARTISTS_ERROR';
