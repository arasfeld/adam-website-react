import { combineReducers } from 'redux';

import { default as musicReducer } from './containers/MusicPage/reducer';
import { MusicState } from './containers/MusicPage/types';

export type RootState = {
  music: MusicState;
};

export default combineReducers<RootState, any>({
  music: musicReducer,
});
