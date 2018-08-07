/*
 * GamesPage Constants
 * 
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 */

export const LOAD_GAMES = 'app/Games/LOAD_GAMES';
export const LOAD_GAMES_SUCCESS = 'app/Games/LOAD_GAMES_SUCCESS';
export const LOAD_GAMES_ERROR = 'app/Games/LOAD_GAMES_ERROR';
