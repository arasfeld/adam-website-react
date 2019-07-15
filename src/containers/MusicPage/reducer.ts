import {
  LOAD_MUSIC,
  LOAD_MUSIC_ERROR,
  LOAD_MUSIC_SUCCESS,
  MusicAction,
  MusicState
} from './types';

export const initialState: MusicState = {
  loading: false,
  error: '',
  albums: [],
  artists: [],
  tracks: [],
};

function musicReducer(state: MusicState = initialState, action: MusicAction) {
  switch (action.type) {
    case LOAD_MUSIC:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case LOAD_MUSIC_SUCCESS:
      return {
        ...state,
        loading: false,
        albums: action.albums,
        artists: action.artists,
        tracks: action.tracks,
      };
    case LOAD_MUSIC_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default musicReducer;
